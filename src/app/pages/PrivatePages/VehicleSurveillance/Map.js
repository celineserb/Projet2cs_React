import React, { Component } from "react"
import { fetchVehicleLatestPosition, fetchVehiclePosition } from "../../../../modules/VehiclePosition/vehiclePosition.actions"
import mapboxgl from "mapbox-gl";
import './style/style.scss';
import { Row} from "antd";
import { withRouter } from 'react-router';
import sim from './sim';

mapboxgl.accessToken="pk.eyJ1IjoieW91Y2Vmb3VhcmFiIiwiYSI6ImNrb2UyajhibzAwbGsycW9nNXpzdm12YnIifQ.iJ9vA18ZaX__1vwZo0iRiA";

var marker = null,
rentalId = 0,

current = {
    'type': 'geojson',
    'data': {
        'type': 'Feature',
        'properties': {},
        'geometry': {
            'type': 'LineString',
            'coordinates': [3.0588, 36.7]
        }
    }
}, 

route = {
    'type': 'geojson',
    'data': {
        'type': 'Feature',
        'properties': {},
        'geometry': {
            'type': 'LineString',
            'coordinates': []
        }
    }
}, 


pos = 0;

/**
 * Ajoute le marqueur du véhicule sur la carte géographique
 * @param {*} map Instance de la carte géographique
 * @param {*} current GeoJSON de la position courante
 */
 function loadMarker(map) {
    var el = document.createElement('div');
    el.className = 'marker';
    if (marker) marker.remove();
    marker = new mapboxgl.Marker(el)
        .setLngLat(current.data.geometry.coordinates)
        .addTo(map);
}

/**
 * Ajoute le trajet du véhicule sur la carte géographique
 * @param {*} map Instance de la carte géographique
 * @param {*} route GeoJSON du trajet
 */
function loadRoute(map) {
    var mapLayer = map.getLayer('route');
    if(typeof mapLayer !== 'undefined') {
        map.removeLayer('route')
           .removeSource('route');
    }
    map.addSource('route', route);
    map.addLayer({
        'id': 'route',
        'type': 'line',
        'source': 'route',
            'layout': {
            'line-join': 'round',
            'line-cap': 'round'
        },
        'paint': {
            'line-color': '#006bff',
            'line-width': 4
        }
    });
}

/**
 * 
 */
async function loadData(_callback, props) {
    await fetchVehicleLatestPosition({
        idRental: rentalId
    })
    .then(res => {
        if (res && res.data && res.data.ok) {
            /*current.data.geometry.coordinates = res.data.position;
            route.data.geometry.coordinates.push(res.data.position);*/
            current.data.geometry.coordinates = sim[pos];
            route.data.geometry.coordinates.push(sim[pos]);
            pos = (pos + 1) % sim.length;
            if (pos === 0) route.data.geometry.coordinates = []
        }
    })
    .catch(err => {

    });
    _callback();
}

function loadFullRoute(map) {
    fetchVehiclePosition({
        idRental: rentalId
    })
    .then(res => {
        if (res && res.data && res.data.ok) {
            route.data.geometry.coordinates = [];
            res.data.route.sort((e1, e2) => {
                return e1.idTrack - e2.idTrack
            });
            res.data.route.forEach(function(e){
                route.data.geometry.coordinates.push([e.longitude, e.latitude]);
            });
            loadRoute(map);
        }
    })
    .catch(err => {

    });
}

class Mappe extends Component {
    constructor(props){
        super(props);
    };

    componentDidMount() {
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/youcefouarab/ckoh092a30cre17p9uxrp8uz6',
            center: current.data.geometry.coordinates,
            zoom: 8
        });
        rentalId = this.props.match.params.rentalId;
        map.on('load', function () {
            loadData(function() {
                loadMarker(map);
                loadRoute(map);
                map.flyTo({
                    center: current.data.geometry.coordinates,
                    zoom: 15
                });
                setInterval(function (){
                    loadData(function() {
                        loadMarker(map);
                        loadRoute(map);
                        map.flyTo({
                            center: current.data.geometry.coordinates,
                            zoom: map.getZoom()
                        });
                    }, rentalId);
                }, 1000);
            }, rentalId);
        });  
        document.getElementById("full-route-btn").addEventListener("click", function(){
            loadFullRoute(map);
        });
         
    }

    render() {
        return(
            <Row justify="start">
                <button id="full-route-btn" style={{position: "absolute", zIndex:51}}>Afficher trajet complet</button>
                <div ref={el => this.mapContainer = el} style={{width: "80vw", height: "70vh", 'borderRadius': "20px"}}/>
            </Row>
        )
    }

}

export default withRouter(Mappe);
