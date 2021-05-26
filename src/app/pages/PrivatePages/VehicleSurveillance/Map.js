import React, { Component } from "react"
import { fetchVehicleLatestPosition, fetchVehiclePosition } from "../../../../modules/VehiclePosition/vehiclePosition.actions"
import mapboxgl from "mapbox-gl";
import './style/style.scss';
import { Row} from "antd";
import { withRouter } from 'react-router';

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

sim = [
    [-122.483696, 37.833818],
    [-122.483589, 37.833496],
    [-122.483482, 37.833174],
    [-122.483439, 37.832937],
    [-122.483396, 37.8327],
    [-122.48348200000001, 37.832378000000006],
    [-122.483568, 37.832056],
    [-122.48380399999999, 37.8315985],
    [-122.48404, 37.831141],
    [-122.48404, 37.830819000000005],
    [-122.48404, 37.830497],
    [-122.48376099999999, 37.8302085],
    [-122.483482, 37.82992],
    [-122.483525, 37.829734],
    [-122.483568, 37.829548],
    [-122.484319, 37.829497],
    [-122.48507, 37.829446],
    [-122.48558499999999, 37.829124],
    [-122.4861, 37.828802],
    [-122.48652899999999, 37.829056],
    [-122.486958, 37.82931],
    [-122.4869795, 37.830056],
    [-122.487001, 37.830802],
    [-122.4872585, 37.8312425],
    [-122.487516, 37.831683],
    [-122.4877735, 37.831920499999995],
    [-122.488031, 37.832158],
    [-122.48846, 37.832564500000004],
    [-122.488889, 37.832971],
    [-122.4893825, 37.8328015],
    [-122.489876, 37.832632],
    [-122.49015499999999, 37.8327845],
    [-122.490434, 37.832937],
    [-122.49084199999999, 37.832683],
    [-122.49125, 37.832429],
    [-122.491443, 37.8324965],
    [-122.491636, 37.832564],
    [-122.49193650000001, 37.832971],
    [-122.492237, 37.833378],
    [-122.4930095, 37.8335305],
    [-122.493782, 37.833683]
], 

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
            current.data.geometry.coordinates = res.data.position;
            route.data.geometry.coordinates.push(res.data.position);
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
                }, 3000);
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
