import React, { Component } from 'react'
import axios from 'axios';
import { Card, Row , Col, Button, Modal, Avatar, Badge, Input,} from "antd";
import { InfoCircleOutlined, MailOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import './style/style.css'

class SignalComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            visible1 : props.visible,
            visible2: props.visible2,
            treating: props.treating,
            key: props.index, 
            item: props.item, 
            changed: false 
         }

        }
    componentWillReceiveProps(nextProps) {
        this.setState({ 
            key: nextProps.index, 
            item: nextProps.item, 
        });  
        this.render()
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
    setVisibleTreating(value){
        this.setState({
            treating : value
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
                            <div>
                            <Button
                                shape='round'
                                onClick={
                                () => {
                                    this.setVisibleTreating(true)
                                }}>
                                
                               Traiter
                            </Button>
                            <Modal 
                                title={"Signalement N °"+this.state.item.idSignal}
                                centered
                                visible={this.state.treating}
                                onOk={() => {this.setVisibleTreating(false)}}
                                onCancel={() => this.setVisibleTreating(false)}
                                width={700}
                                footer={[
                                    <Button 
                                    key="back" 
                                    onClick={() => this.setVisibleTreating(false)}
                                    shape='round'
                                    size ='middle'
                                    style={{
                                        backgroundColor: '#F9C31B', 
                                        borderColor: 'white', 
                                        color: 'black',      
                                    }}>
                                    OK
                                    </Button>,  
                                    ]}
                                    >

                            </Modal>
                            </div>
                           
                            
                           
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
                                    width={100}
                                        >
                                        something to say

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
                                            <Col push={5} style={{marginRight:45}}> {this.state.item.registrationNumber}</Col>  
                                        </div>
                                    </Row>
                            
                                    <Row>
                                        <div className="info-container">
                                            <Col><h5 className="info-title">Modèle:</h5></Col>
                                            <Col push={7}> {this.state.item.vehiclemodel}</Col>  
                                        </div>
                                    </Row>
                            
                                    <Row>
                                        <div className="info-container">
                                            <Col><h5 className="info-title">Marque:</h5></Col>
                                            <Col push={6} style={{marginRight:45}}> {this.state.item.vehiclebrand}</Col>  
                                        </div>
                                    </Row>
                                    
                                    <Row>
                                        <div className="info-container">
                                            <Col><h5 className="info-title">Couleur:</h5></Col>
                                            <Col push={6} style={{marginRight:40}}> {this.state.item.vehicleColor}</Col>  
                                        </div>
                                    </Row>
                                        
                            
                                    <h4>Dernière location</h4> <hr className="hr-modal" />  
                            
                                    <Row>
                                        <div className="info-container">
                                            <Col style={{marginRight:5, }}><h5 className="info-title">Date Début:</h5></Col>
                                            <Col push={4}> {this.state.item.rentaldate.slice(0,10)} </Col>  
                                        </div>
                                    </Row>
                            
                                    <Row>
                                        <div className="info-container">
                                            <Col style={{marginRight:9, }}  ><h5 className="info-title">Heure Début:</h5></Col>
                                            <Col push={3}> {this.state.item.rentaltime} </Col>  
                                        </div>
                                    </Row>
                            
                                    <Row>
                                        <div className="info-container">
                                            <Col  ><h5 className="info-title">Date fin prévue:</h5></Col>
                                            <Col push={2} style={{marginLeft:3, }}> {this.state.item.restitutionDate.slice(0,10)} </Col>  
                                        </div>
                                    </Row>
                            
                                    <Row>
                                        <div className="info-container">
                                            <Col><h5  className="info-title">Borne de départ:</h5></Col>
                                            <Col push={1} style={{marginLeft:12, }}>  {this.state.item.depatBorne} </Col>  
                                        </div>
                                    </Row>
                            
                                    <Row>
                                        <div className="info-container">
                                            <Col style={{marginRight:5, }}><h5 className="info-title">Borne destination:</h5></Col>
                                            <Col  style={{marginLeft:15, }}>  {this.state.item.destBorne} </Col>  
                                        </div>
                                    </Row>
                            
                            
                                    <h4>Dernier locataire</h4> <hr className="hr-modal" />
                                    <Row>
                                        <div className="info-container">
                                            <Col style={{marginRight:15, }}><h5 className="info-title">Nom et Prénom :</h5></Col>
                                            <Col push={1}> {this.state.item.lastName+" "+this.state.item.firstName}</Col>  
                                        </div>
                                    </Row>
                            
                                    <Row>
                                        <div className="info-container">
                                            <Col style={{marginRight:7, }}><h5 className="info-title">telephone: </h5></Col>
                                            <Col push={5}> 0{this.state.item.phoneNumber}</Col>  
                                        </div>
                                    </Row>
                            
                                    <Row>
                                        <div className="info-container">
                                            <Col style={{fontSize:17 }}>Adresse: </Col>
                                            <Col  span={16} style={{fontSize:15}}> {this.state.item.address} </Col>  
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