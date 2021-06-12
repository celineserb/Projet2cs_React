import React, {Component } from 'react'
import { withRouter } from "react-router"

import 'antd/dist/antd.css';
import { Avatar, Row, Col, Tooltip } from 'antd';

import { AntDesignOutlined } from '@ant-design/icons';

import {ReactComponent as MapIcon} from '../../../../assets/svg/tabler-icon-map-2.svg';
import {ReactComponent as CalendarIcon} from '../../../../assets/svg/tabler-icon-calendar-event.svg';
import {ReactComponent as ContactIcon} from '../../../../assets/svg/tabler-icon-user.svg';
import {ReactComponent as UserIcon} from '../../../../assets/svg/m5.svg';
import { fetchRentalInfo } from '../../../../modules/Tracking/tracking.crud';

var rental={};

class TenantInfo extends Component {
    constructor(props) {
        super(props);
        this.state={

        }
    }
    componentDidMount(){
        fetchRentalInfo({
            idVehicle: this.props.match.params.vehicleId
        })
        .then(res => {
            if (res ) {
                rental= res.data;
                console.log(rental); 
                console.log("rental info");  
                var str = rental.rentaldate;
                var a = str.substr(0, 10);

                this.setState({
                    firstName : rental.firstName,
                    lastName: rental.lastName,
                    rentalborne : rental.city,
                    rentaldate: a ,
                    rentaltime : rental.rentaltime
                })
            }
        })
        .catch(err=> {
            console.log("No state");
        });
        console.log(rental);
    }
    render() { 
        return (  
            <Row>
                <Col push={5} span={22} >
                        <br></br>                        
                        <Row>
                            <Col push={5}>
                            <Avatar
                                size={{ xs: 56, sm: 56, md: 56, lg: 56, xl: 70,xxl: 100,}}
                                icon={<UserIcon />}
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
                                <h4 className="tenant-name-text"
                                    style={{
                                        marginTop: 5,                     
                                    }}>
                                    {this.state.firstName+" "+this.state.lastName}
                                </h4>
                            </Col>
                        </Row>
                        </Tooltip>
                        <Tooltip title="Rental Date">
                        <Row>
                            <Col span={4}>
                                <CalendarIcon ></CalendarIcon>
                            </Col>
                            <Col >
                                <h4
                                    style={{
                                        marginTop: 5,                     
                                    }}>
                                    {this.state.rentaldate+" "+this.state.rentaltime}
                                </h4>
                            </Col>
                        </Row>
                        </Tooltip>
                        <Tooltip title="Rental Place">
                        <Row>
                        <Col span={4}>
                                <MapIcon></MapIcon>
                            </Col>
                            <Col>
                                <h4
                                    style={{
                                        marginTop: 5,                     
                                }}>
                                {this.state.rentalborne}
                            </h4>
                            </Col>
                        </Row>
                        </Tooltip>
                       
                       
                        
                        
                      
                </Col>

            </Row>
               
           
        );
    }
}
 

export default withRouter(TenantInfo);