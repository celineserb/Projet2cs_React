import React, { Component } from 'react'
import axios from 'axios';
import { Card, Row , Col, Button, Modal, Avatar, Badge, Input, Divider,} from "antd";
import { InfoCircleOutlined, MailOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import './style/style.css'

const { TextArea } = Input;
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
       this.setVisibleUntreated(false);
       const description = document.getElementById("treatment-input").value;
       console.log(description);
       axios.put(`http://localhost:8111/signals_treated?idSignal=${this.state.item.idSignal}&description=${description}`)
       .then((response) => 
        {
            console.log(response.data);
            this.setState({
                changed:true,
                item: response.data
            })
        }
          
        );
   
        
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
                                footer={[
                                        <Button 
                                        key="back" 
                                        onClick={() => this.treatSignal()}
                                        shape='round'
                                        size ='middle'
                                        style={{
                                        marginRight: '35%', 
                                        backgroundColor: '#F9C31B', 
                                            paddingRight: 60,
                                            paddingLeft: 60,
                                            borderColor: 'white', 
                                            color: 'black',      
                                        }}>
                                        Valider
                                        </Button>,  
                                    ]}
                                    >
                                    <label>Plus de details:</label>
                                    <TextArea id="treatment-input" showCount maxLength={256}   />
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
                                        footer={[
                                        <Button 
                                        key="back" 
                                        onClick={() => this.setVisibleUntreated(false)}
                                        shape='round'
                                        size ='middle'
                                        style={{
                                        marginRight: '35%', 
                                        backgroundColor: '#F9C31B', 
                                            paddingRight: 60,
                                            paddingLeft: 60,
                                            borderColor: 'white', 
                                            color: 'black',      
                                        }}>
                                        OK
                                        </Button>,  
                                    ]}>
                                        
                                            <Row>
                                            <div className="info-container">
                                                <Col>
                                                    <label className="info-title">Date de Traitement:</label> 
                                                    <span className="info">{this.state.item.treatmentDate.slice(0,10)+" "+ this.state.item.treatmentDate.slice(12,16)}</span>
                                                </Col>
                                            </div>
                                        </Row>
                                
                                        <Row>
                                            <div className="info-container">
                                                <Col>
                                                    <label className="info-title">Details:</label>
                                                    <span className="info">{this.state.item.treatmentDescription}</span>
                                                </Col>
                                                
                                            </div>
                                        </Row>
                            
                                    </Modal>
                                </>
                                :
                                <Modal
                                title={"Signalement N °"+this.state.item.idSignal}
                                centered
                                visible={this.state.visible1}
                                onOk={() => {this.setVisibleUntreated(false)}}
                                onCancel={() => this.setVisibleUntreated(false)}
                                width={650}
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
                                    <Divider orientation="left"><h5>Informations Vehicules</h5> </Divider>
                                    <Row>
                                        <div className="info-container">
                                            <Col>
                                                <label className="info-title">Matricule:</label> 
                                                <span className="info">{this.state.item.registrationNumber}</span>
                                            </Col>
                                        </div>
                                    </Row>
                            
                                    <Row>
                                        <div className="info-container">
                                            <Col>
                                                <label className="info-title">Modèle:</label>
                                                <span className="info">{this.state.item.vehiclemodel}</span>
                                            </Col>
                                            
                                        </div>
                                    </Row>
                            
                                    <Row>
                                        <div className="info-container">
                                            <Col>
                                                <label className="info-title">Marque:</label>
                                                <span className="info">{this.state.item.vehiclebrand}</span>
                                            </Col>
                                            
                                        </div>
                                    </Row>
                                    
                                    <Row>
                                        <div className="info-container">
                                            <Col>
                                                <label className="info-title">Couleur:</label>
                                                <span className="info">{this.state.item.vehicleColor}</span>
                                            </Col>
                                          
                                        </div>
                                    </Row>
                                        
                            
                                    <Divider orientation="left"> <h5>Dernière location</h5> </Divider>
                            
                                    <Row>
                                        <div className="info-container">
                                            <Col>
                                                <label className="info-title">Date Début:</label>
                                                <span className="info">{this.state.item.rentaldate.slice(0,10)} </span>
                                            </Col>
                                           
                                        </div>
                                    </Row>
                            
                                    <Row>
                                        <div className="info-container">
                                            <Col>
                                                <label className="info-title">Heure Début:</label>
                                                <span className="info">{this.state.item.rentaltime} </span>
                                             </Col>
                                        </div>
                                    </Row>
                            
                                    <Row>
                                        <div className="info-container">
                                            <Col>
                                                <label className="info-title">Date fin prévue:</label>
                                                <span className="info">{this.state.item.restitutionDate.slice(0,10)} </span>

                                            </Col>
                                            
                                        </div>
                                    </Row>
                            
                                    <Row>
                                        <div className="info-container">
                                            <Col>
                                                <label  className="info-title">Borne de départ:</label>
                                                <span className="info">{this.state.item.depatBorne} </span>
                                            </Col>  
                                        </div>
                                    </Row>
                            
                                    <Row>
                                        <div className="info-container">
                                            <Col>
                                                <label className="info-title">Borne destination:</label>
                                                <span className="info">{this.state.item.destBorne}</span>
                                            </Col>
                    
                                        </div>
                                    </Row>
                            
                            
                                    <Divider orientation="left"> <h5>Dernier locataire</h5> </Divider>
                                    <Row>
                                        <div className="info-container">
                                            <Col>
                                                <label className="info-title">Nom et Prénom :</label>
                                                <span className="info">{this.state.item.lastName+" "+this.state.item.firstName}</span>
                                            </Col>
                                        
                                        </div>
                                    </Row>
                            
                                    <Row>
                                        <div className="info-container">
                                            <Col>
                                                <label className="info-title">telephone: </label>
                                                <span className="info">0{this.state.item.phoneNumber}</span>
                                            </Col>
                                        </div>
                                    </Row>
                            
                                    <Row>
                                        <div className="info-container">
                                            <Col>
                                                <label className="info-title">Adresse:</label>
                                                <span className="info">{this.state.item.address}</span>
                                            </Col>
                                           
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