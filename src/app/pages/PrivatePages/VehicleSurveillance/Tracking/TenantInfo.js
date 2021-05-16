import React, {Component } from 'react'
import 'antd/dist/antd.css';
import { Avatar, Row, Col, Tooltip } from 'antd';

import { AntDesignOutlined } from '@ant-design/icons';

import {ReactComponent as MapIcon} from './svg/tabler-icon-map-2.svg';
import {ReactComponent as CalendarIcon} from './svg/tabler-icon-calendar-event.svg';
import {ReactComponent as ContactIcon} from './svg/tabler-icon-user.svg';
import { fetchRentalInfo } from '../../../../../modules/Tracking/tracking.crud';

var rentalInfo={};

class TenantInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName:"",
            rentalDate: "",
            rentalBorne: "",
            phoneNumber : "",
            adress : ""
          }
    }

    componentDidMount(){
        loadData(3);
        this.setState({
                firstName: rentalInfo.firstName,
                lastName:rentalInfo.lastName, 
                rentalDate: rentalInfo.rentalDate, 
                rentalBorne: rentalInfo.rentalBorne, 
                phoneNumber : rentalInfo.phoneNumber,
                adress : rentalInfo.adress
        });
    }
    render() { 
        return (  
            <Row>
                <Col push={5} span={22} >
                        <br></br>                        
                        <Row>
                            <Col push={5}>
                            <Avatar
                                size={{ xs: 64, sm: 64, md: 64, lg: 64, xl: 80,xxl: 100,}}
                                icon={<AntDesignOutlined />}
                            />
                            </Col>
                        </Row>
                        <br></br>
                        <Tooltip title="Tenant Name">
                        <Row>  
                            <Col span={4} >
                                <ContactIcon></ContactIcon>
                            </Col>
                            <Col >
                                <h3
                                    style={{
                                        marginTop: 5,                     
                                    }}>
                                    {this.state.firstName+" "+this.state.lastName}
                                </h3>
                            </Col>
                        </Row>
                        </Tooltip>
                        <Tooltip title="Rental Date">
                        <Row>
                            <Col span={4}>
                                <CalendarIcon ></CalendarIcon>
                            </Col>
                            <Col >
                                <h3
                                    style={{
                                        marginTop: 5,                     
                                    }}>
                                    {this.state.rentalDate}
                                </h3>
                            </Col>
                        </Row>
                        </Tooltip>
                        <Tooltip title="Rental Place">
                        <Row>
                        <Col span={4}>
                                <MapIcon></MapIcon>
                            </Col>
                            <Col>
                                <h3
                                    style={{
                                        marginTop: 5,                     
                                }}>
                                {this.state.rentalBorne}
                            </h3>
                            </Col>
                        </Row>
                        </Tooltip>
                       
                       
                        
                        
                      
                </Col>

            </Row>
               
           
        );
    }
}
 

function loadData(idVehicle) {
        fetchRentalInfo({
            idVehicle: idVehicle
        })
        .then(res => {
            if (res ) {
                rentalInfo= res.data;
                console.log(res.data); 
                console.log("rental info");  
                rentalInfo.firstName="OUDEH";
            }
        })
        .catch(err=> {
            console.log("No state");
        });
}
export default TenantInfo;