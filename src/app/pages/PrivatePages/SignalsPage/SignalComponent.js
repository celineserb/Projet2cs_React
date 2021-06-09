import React, { Component } from 'react'
import axios from 'axios';
import { Card, Row , Col, Button, Modal, Avatar, Badge, Input, Tooltip, Dropdown, } from "antd";
import { InfoCircleOutlined, MailOutlined, ExclamationCircleOutlined } from '@ant-design/icons';

import './style/style.css'
const {confirm } = Modal;
var changed = false;
class SignalComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            visible1 : props.visible,
            visible2: props.visible2,
            key: props.index, 
            item: props.item, 
            changed: false 
         }
         this.treatSignal = this.treatSignal.bind(this)
        }
    componentWillReceiveProps(nextProps) {
        this.setState({ 
            key: nextProps.index, 
            item: nextProps.item, 
            

        });  
      }
    setVisibleUntreated(value){
        this.setState({
          visible1 : value
        });
    }
    setVisibleTreated(value){
        this.setState({
            visible2 : value
          });
    }
    treatSignal(){
       axios.put(`http://localhost:8111/signals_treated?idSignal=${this.state.item.idSignal}`)
       .then((response) => 
        {
            console.log(response.signal);
            this.setState({
                changed:true,
                item: response.signal,
                key:response.signal.idSignal
            })
        }
          
        );
        this.setVisibleTreated(true);

    }
    onTreated(){
        if (changed) {
            this.treatSignal();
        }
    }
     info() {
        confirm({
            title: 'Do you Want to delete these items?',
            icon: <ExclamationCircleOutlined />,
            content: (
                <Input placeholder={this.state.item.idSignal} bordered={false}  style={{ width:200}}  />
            ),
            onOk() {
              changed = true;

            },
            onCancel() {
              console.log('Cancel');
            },

          });
      }

     render() { 
        return (  
                <Card  
                    hoverable={true} 
                    className="signal-list-item"
                    >
                    <Row  justify='start'>
                        <Col xs={3} lg={1} xl={1} sm={2} md={1}>
                        {
                            this.state.item.treated?
                                <Avatar 
                                    size={{
                                        xs:28,
                                        sm: 28,
                                        md: 28,
                                        lg: 30,
                                        xl: 42,
                                        xxl: 42,
                                    }}
                                    style={{
                                        backgroundColor:"#C5C7CD"
                                    }}
                                />
                            :
                                <Avatar 
                                        size={{
                                            xs:28,
                                            sm: 28,
                                            md: 28,
                                            lg: 30,
                                            xl: 42,
                                            xxl: 42,
                                        }}
                                        style={{
                                            backgroundColor:"red"
                                        }}
                                    />   
                                          

                        }
                         
                        </Col>


                        <Col
                            style={{
                                marginTop:8,
                                marginLeft:8
                            }} 
                            xs={21}
                            xl={8}
                            lg={8}
                            md={8}
                            sm={16}
                            >
                            <h5 className="item-title"> Signalement N°{this.state.item.idSignal}</h5> 
                        </Col>

                        <Col  
                        style={{
                                marginTop:8,
                                marginLeft:8
                            }} 
                        xl={4}
                        lg={4}
                        md={4}
                        xs={24}
                        sm={8}
                        >
                        Source:  {this.state.item.sourceType}
                        </Col>

                            
                        <Col xs={24} lg={3}  md={3} xl={3} sm={5} offset={1}  >
                        {this.state.item.sent_at.slice(0,10)+" "+this.state.item.sent_at.slice(11, 16)}
                        </Col>
                        <Col xl={3} lg={3} md={3} xs={24} sm={16}>
                        {
                            this.state.item.treated?
                            <Badge
                                count= "Treated" 
                                style={{ backgroundColor: "#52c41a", margin:10 }}
                            />
                            :
                            <Button
                                shape='round'
                                onClick={() => {
                                    this.info();
                                    this.forceUpdate();
                                    }}>
                                
                               Traiter
                            </Button>
                           
                        }
                            
                        </Col>

                        <Col xl={3} lg={3} md={3}  sm={16} xs={24}>
                            <Button
                                    block
                                    onClick={() => this.setVisibleUntreated(true)}
                                    shape = 'round'
                                    style={{
                                        backgroundColor: '#F9C31B', 
                                        borderColor: 'white', 
                                        color: 'black',
                                    }}
                                    className="details-btn"
                                    >
                                    Details
                            </Button>   
                            {
                                this.state.item.treated?
                                <>
                                    <Modal
                                     title={"Signalement N °"+this.state.item.idSignal}
                                    centered
                                    visible={this.state.visible1}
                                    onOk={() => {this.setVisibleUntreated(false)}}
                                    onCancel={() => this.setVisibleUntreated(false)}
                                    width={700}
                                        >

                                    </Modal>
                                </>
                                :
                                <Modal
                                title={"Signalement N °"+this.state.item.idSignal}
                                centered
                                visible={this.state.visible1}
                                onOk={() => {this.setVisibleUntreated(false)}}
                                onCancel={() => this.setVisibleUntreated(false)}
                                width={700}
                                footer={[
                                    <Button 
                                    key="back" 
                                    onClick={() => this.setVisibleUntreated(false)}
                                    shape='round'
                                    size ='middle'
                                    style={{
                                    marginRight: '40%', 
                                    backgroundColor: '#F9C31B', 
                                        paddingRight: 60,
                                        paddingLeft: 60,
                                        borderColor: 'white', 
                                        color: 'black',      
                                    }}>
                                    OK
                                    </Button>,  
                                    ]}
                                    >
                                    <h4>Informations Vehicules</h4> <hr className="hr-modal" />
                                    <Row>
                                        <div className="info-container">
                                            <Col><h5 className="info-title">Matricule:</h5></Col>
                                            <Col push={5} style={{marginRight:45}}> <span className="info-box"> {this.state.item.registrationNumber}</span></Col>  
                                        </div>
                                    </Row>
                            
                                    <Row>
                                        <div className="info-container">
                                            <Col><h5 className="info-title">Modèle:</h5></Col>
                                            <Col push={7}> <span className="info-box">{this.state.item.vehiclemodel}</span></Col>  
                                        </div>
                                    </Row>
                            
                                    <Row>
                                        <div className="info-container">
                                            <Col><h5 className="info-title">Marque:</h5></Col>
                                            <Col push={6} style={{marginRight:45}}> <span className="info-box">{this.state.item.vehiclebrand}</span></Col>  
                                        </div>
                                    </Row>
                                    
                                    <Row>
                                        <div className="info-container">
                                            <Col><h5 className="info-title">Couleur:</h5></Col>
                                            <Col push={6} style={{marginRight:40}}> <span className="info-box">{this.state.item.vehicleColor} </span></Col>  
                                        </div>
                                    </Row>
                                        
                            
                                    <h4>Dernière location</h4> <hr className="hr-modal" />  
                            
                                    <Row>
                                        <div className="info-container">
                                            <Col style={{marginRight:5, }}><h5 className="info-title">Date Début:</h5></Col>
                                            <Col push={4}> <span className="info-box"> {this.state.item.rentaldate.slice(0,10)} </span></Col>  
                                        </div>
                                    </Row>
                            
                                    <Row>
                                        <div className="info-container">
                                            <Col style={{marginRight:9, }}  ><h5 className="info-title">Heure Début:</h5></Col>
                                            <Col push={3}> <span className="info-box"> {this.state.item.rentaltime} </span></Col>  
                                        </div>
                                    </Row>
                            
                                    <Row>
                                        <div className="info-container">
                                            <Col  ><h5 className="info-title">Date fin prévue:</h5></Col>
                                            <Col push={2} style={{marginLeft:3, }}> <span className="info-box">{this.state.item.restitutionDate.slice(0,10)} </span></Col>  
                                        </div>
                                    </Row>
                            
                                    <Row>
                                        <div className="info-container">
                                            <Col><h5  className="info-title">Borne de départ:</h5></Col>
                                            <Col push={1} style={{marginLeft:12, }}> <span className="info-box"> {this.state.item.depatBorne} </span></Col>  
                                        </div>
                                    </Row>
                            
                                    <Row>
                                        <div className="info-container">
                                            <Col style={{marginRight:5, }}><h5 className="info-title">Borne destination:</h5></Col>
                                            <Col  style={{marginLeft:15, }}> <span className="info-box"> {this.state.item.destBorne} </span></Col>  
                                        </div>
                                    </Row>
                            
                            
                                    <h4>Dernier locataire</h4> <hr className="hr-modal" />
                                    <Row>
                                        <div className="info-container">
                                            <Col style={{marginRight:15, }}><h5 className="info-title">Nom et Prénom :</h5></Col>
                                            <Col push={1}> <span className="info-box"> {this.state.item.lastName+" "+this.state.item.firstName} </span></Col>  
                                        </div>
                                    </Row>
                            
                                    <Row>
                                        <div className="info-container">
                                            <Col style={{marginRight:7, }}><h5 className="info-title">telephone: </h5></Col>
                                            <Col push={5}> <span className="info-box">0{this.state.item.phoneNumber}</span></Col>  
                                        </div>
                                    </Row>
                            
                                    <Row>
                                        <div className="info-container">
                                            <Col style={{marginRight:9, }}><h5 className="info-title">Adresse: </h5></Col>
                                            <Col push={6}> <span className="info-box"> {this.state.item.address} </span></Col>  
                                        </div>
                                    </Row>
                            
                                </Modal>
                                
                            }
                            



                        </Col>
                    </Row>
                </Card>
         );
    }
}
 
export default SignalComponent;