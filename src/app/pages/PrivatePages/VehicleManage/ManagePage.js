/*
    list of vehicles
*/

import React, { useEffect, useState } from "react";
import axios from "axios";
import VehicleComponent from "./VehicleComponent";
import "./style/VehicleList.css";

import { Row, Button, Col, Modal, Form, Input, Select, Checkbox } from "antd";
import "antd/dist/antd.css";


const ManagePage = () => {

  const plainOptions = ['Alger, Zone 3', 'parking ESI', 'parking USTHB'];
  const defaultCheckedList = ['parking ESI']

  const plainOptions2 = ['allocated', 'maintained', 'available', 'stopped'];


  const [nbPage, setNbPage] = useState(0);
  const [nbOfPages, setNbOfPages] = useState(0);
  const [nbVehiculesPerPage, setNbVehiculesPerPage] = useState(5);
  const [vehicles, setVehicles] = useState([]);
  const [nbVehicles, setNbVehicles] = useState(0);
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState("");

  const [visibleB, setVisibleB] = useState(false);
  const [visibleV, setVisibleV] = useState(false);

  const [formB] = Form.useForm();
  const [formV] = Form.useForm();



  const [checkedList, setCheckedList] = React.useState(defaultCheckedList);
  const [indeterminate, setIndeterminate] = React.useState(true);
  const CheckboxGroup = Checkbox.Group;

  const { Option } = Select;

  const onChange = list => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
  };

  const onCheckAllChange = e => {
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
  };

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

  // fetch data on mount component
  useEffect(() => {
    // just fetch the data inside the vehicles state initially with page = 0
    axios
      .get(
        `http://localhost:8000/vehicle${status}?page=${nbPage}&limit=${nbVehiculesPerPage}`
      )
      .then((response) => response.data)
      .then(({ nbVehicles, nbPages, listVehicles }) => {
        setVehicles(listVehicles);
        console.log(listVehicles);
        setNbOfPages(nbPages);  
        setNbVehicles(nbVehicles);
      });
  }, [nbPage, status]);

  const handleChange = (e, status) => {
    if (e.target.checked) {
      setStatus(`/${status}`);
    } else {
      setStatus("");
    }
  };

  const onFinishB = (values) => {
    //console.log(values);
    values.nbOccupiedPlaces=0;
    values.nbMaintenanceAgents=0;
    console.log(values);
    //console.log(val);
    axios.post(`http://localhost:8200/bornes`, values)
        .then(res => {
          console.log(values);
          console.log(res);
        })
  };

  const onResetB = () => {
    formB.resetFields();
  };

  const onFillB = () => {
    formB.setFieldsValue({
      city:"parking ",
      nbTotalPlaces:6,
      longitude: 36.7045697, 
      latitude: 3.1745471
    });
  };


  const onFinishV = (values) => {
   
    if (values.borne==='Alger, Zone 3') {
      values.idBorne = 1;
      
    }
    else if (values.borne==='parking ESI'){
      values.idBorne = 15;
    }
    else if  (values.borne==='parking USTHB'){
      values.idBorne = 14;
    }
    else values.idBorne =0 ;
    values.longitude = 0;
    values.latitude = 0;
    values.unitPricePerDay = "0";
    values.image = "https://www.motortrend.com/uploads/sites/10/2020/04/2018-fiat-500-pop-3door-hatchback-angular-front.png?fit=around%7C875:492.1875"
    console.log(values);
    values.availibility= values.availibility[0];

    axios.post(`http://localhost:8200/vehicules`, values)
        .then(res => {
          console.log(values);
        })
  };

  const onResetV = () => {
    formV.resetFields();
  };
  
  const onFillV = () => {
    formV.setFieldsValue({
      vehiclemodel:"Accent",
      vehiclebrand:"Hyundai",
      unitPricePerHour:300,
      registrationNumber: "123 4526 67",
      places: 6,
      vehicleColor: "Grise",
      fuelType:"Essence",
      availibility: "available",
      vehicleType: "Hybride",
      idBorne: 0, 
      chassisNumber: "CH0030501"
    });
  };

  

  return (
    <>
    <Row justify="end" style={{marginTop:50}}>
        <Col  style={{marginRight:10}}  >
          <Button
          shape='round'
          onClick={() => setVisibleB(true)}
          style={{
            backgroundColor: '#212121', 
            borderColor: 'white', 
            color: 'white'     
            }}>Ajouter Borne</Button>
          <Modal
            title={"Ajouter une Borne"}
            centered
            visible={visibleB}
            onOk={() => {setVisibleB(false)}}
            onCancel={() => setVisibleB(false)}
            footer={[
            <Button 
              key="back" 
              onClick={() => setVisibleB(false)}
              shape='round'
              size ='middle'
              style={{
      
                backgroundColor: '#F9C31B', 
                borderColor: 'white', 
                color: 'black',  
                paddingRight:25,
                paddingLeft:25,    
              }}>
              Cancel
            </Button>,  
        ]}>
        <Form {...layout} form={formB} name="control-hooks" onFinish={onFinishB}>
          <Form.Item
            name="city"
            label="Nom de Borne"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="nbTotalPlaces"
            label="Nombre de places"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="longitude"
            label="longitude"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="latitude"
            label="latitude"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          
          <Form.Item {...tailLayout}>
            <Button htmlType="submit" 
                    style={{
                      marginRight:5,
                      backgroundColor:'#212121',
                      color: 'white'
                      }} >
              Submit
            </Button>
            <Button htmlType="button" onClick={onResetB}>
              Reset
            </Button>
            <Button type="link" htmlType="button" onClick={onFillB}>
              Fill form
            </Button>
          </Form.Item>
        </Form>
          </Modal>
          </Col>

          <Col style={{marginRight:48}} >
            <Button
            shape='round'
            onClick={() => setVisibleV(true)}
            style={{
              backgroundColor: '#F9C31B', 
              borderColor: 'white', 
              color: 'black'     
              }}>Ajouter Véhicule</Button>
            <Modal
              title={"Ajouter un Véhicule"}
              centered
              visible={visibleV}
              onOk={() => {setVisibleV(false)}}
              onCancel={() => setVisibleV(false)}
              footer={[
              <Button 
                key="back" 
                onClick={() => setVisibleV(false)}
                shape='round'
                size ='middle'
                style={{
        
                  backgroundColor: '#F9C31B', 
                  borderColor: 'white', 
                  color: 'black',      
                }}>
                Cancel
              </Button>,  
          ]}>
              <Form {...layout} form={formV} name="control-hooks" onFinish={onFinishV}>
          <Form.Item
            name="chassisNumber"
            label="Numéro de châssis"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="registrationNumber"
            label="Matricule"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="unitPricePerHour"
            label="Tarif"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="vehiclebrand"
            label="Marque"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="vehiclemodel"
            label="Modèle"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="places"
            label="Nombre de places"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="vehicleColor"
            label="Couleur"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="fuelType"
            label="Motorisation"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="idBorne"
            label="Borne"
            rules={[
              {
                required: false,
              },
            ]}
          >

             <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />
          </Form.Item>
          <Form.Item
            name="availibility"
            label="Disponibilité"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <CheckboxGroup options={plainOptions2} value={checkedList} onChange={onChange} />
          </Form.Item>
          <Form.Item
            name="vehicleType"
            label="Type de véhicule"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button htmlType="submit" 
                    style={{
                      marginRight:5,
                      backgroundColor:'#212121',
                      color: 'white'
                      }} >
              Submit
            </Button>
            <Button htmlType="button" onClick={onResetV}>
              Reset
            </Button>
            <Button type="link" htmlType="button" onClick={onFillV}>
              Fill form
            </Button>
          </Form.Item>
        </Form>
          </Modal>
        </Col>
       
        

      </Row>
    <Row justify="start">
      <div className="list-container">
        <div>
          <p>Ordonner</p>
          <div className={show ? "filter-modal show" : "filter-modal hide"}>
            <div className="filter-state" id="ready">
              <input
                onClick={(e) => handleChange(e, "available")}
                type="checkbox"
              />
              Prete
            </div>
            <div className="filter-state" id="waiting">
              <input
                onClick={(e) => handleChange(e, "maintained")}
                type="checkbox"
              />
              En attente
            </div>
            <div className="filter-state" id="in-progress">
              <input
                onClick={(e) => handleChange(e, "allocated")}
                type="checkbox"
              />
              En cours
            </div>
          </div>
          <p onClick={() => setShow(!show)}> Filtrer </p>
        </div>
        <ul className="vehicle-list">
          <li className="headers">
            <p>Vehicule</p>
            <p>Client</p>
            <p>Disponible le</p>
            <p>Status</p>
          </li>
          {vehicles.map((vehicle, key) => (
            <VehicleComponent vehicle={vehicle} key={key} />
          ))}
        </ul>
        <div className="pagination">
          <p>Lignes par page: {nbVehiculesPerPage}</p>

          <p>
            {1 + nbVehiculesPerPage * nbPage}-
            {nbVehiculesPerPage * (nbPage + 1)} of {nbVehicles}
          </p>
          <div className="arrows">
            <button id="#previous-page" onClick={() => setNbPage(nbPage - 1)}>
              <i className="arrow left"></i>
            </button>
            <button onClick={() => setNbPage(nbPage + 1)}>
              <i className="arrow right"></i>
            </button>
          </div>
        </div>
      </div>
    </Row>
    </>
  );
};
export default ManagePage;
