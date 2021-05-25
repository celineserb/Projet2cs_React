import React, { Component } from 'react'
import axios from 'axios';
import { Card, Row , Col, Button, Modal, Avatar} from "antd";
import { ReactComponent as EllipseIcon } from '../../../../assets/svg/ellipse.svg';
import './style/style.css'



class SignalComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            visible : props.visible,
            key: props.index, 
            item: props.item
         }
    }
    setVisible(value){
        this.setState({
          visible : value
        });
    }
    render() { 
        return (  
                    <Card  
                        hoverable={true} 
                        className="signal-list-item"
                        >
                        <Row  justify='start'>
                            <Col >

                            <Avatar 
                                size={48} 
                                icon={<EllipseIcon />}
                            ></Avatar> 
                            </Col>

                            <Col
                                style={{
                                   marginTop:8,
                                   marginLeft:8
                                }} 
                                span={6}><h3>Signalement N°{this.state.item.name}</h3> </Col>
                                
                            <Col span={3} offset={10}  >
                                May 29, 2020 12:00AM
                            </Col>
                            <Col  >
                                <Button
                                        onClick={() => this.setVisible (true)}
                                        shape = 'round'
                                        size ='middle'
                                        style={{
                                            backgroundColor: '#F9C31B', 
                                            borderColor: 'white', 
                                            color: 'black',
                                            paddingLeft: 30, 
                                            paddingRight: 30
                                        }}
                                        >
                                        Details
                                </Button>   
                                
                                <Modal
                                    title={"Signalement N °"+this.state.item.name}
                                    centered
                                    visible={this.state.visible}
                                    onOk={() => {this.setVisible(false)}}
                                    onCancel={() => this.setVisible(false)}
                                    width={700}
                                    footer={[
                                        <Button 
                                        key="back" 
                                        onClick={() => this.setVisible(false)}
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
                                        <h2>Informations Vehicules</h2> <hr className="hr-modal" />
                                        <Row>
                                            <div className="info-container">
                                                <Col><h3 className="info-title">Matricule:</h3></Col>
                                                <Col push={2}> <span className="info-box"> 3542-3987-12-26</span></Col>  
                                            </div>
                                        </Row>
                                
                                        <Row>
                                            <div className="info-container">
                                                <Col><h3 className="info-title">Modèle:</h3></Col>
                                                <Col push={3}> <span className="info-box">Volkswagen</span></Col>  
                                            </div>
                                        </Row>
                                
                                        <Row>
                                            <div className="info-container">
                                                <Col><h3 className="info-title">Marque:</h3></Col>
                                                <Col push={3}> <span className="info-box">Caddy</span></Col>  
                                            </div>
                                        </Row>
                                
                                        <Row>
                                            <div className="info-container">
                                                <Col><h3 className="info-title">Couleur:</h3></Col>
                                                <Col push={3}> <span className="info-box">Noir</span></Col>  
                                            </div>
                                        </Row>
                                            
                                
                                        <h2>Dernière location</h2> <hr className="hr-modal" />  
                                
                                        <Row>
                                            <div className="info-container">
                                                <Col style={{marginRight:5, }}><h3 className="info-title">Date Début:</h3></Col>
                                                <Col push={4}> <span className="info-box">26/06/2021</span></Col>  
                                            </div>
                                        </Row>
                                
                                        <Row>
                                            <div className="info-container">
                                                <Col style={{marginRight:9, }}  ><h3 className="info-title">Heure Début:</h3></Col>
                                                <Col push={3}> <span className="info-box">12:15</span></Col>  
                                            </div>
                                        </Row>
                                
                                        <Row>
                                            <div className="info-container">
                                                <Col><h3 className="info-title">Date de fin prévue:</h3></Col>
                                                <Col push={1}> <span className="info-box">28/06/2021</span></Col>  
                                            </div>
                                        </Row>
                                
                                        <Row>
                                            <div className="info-container">
                                                <Col><h3 className="info-title">Borne de départ:</h3></Col>
                                                <Col push={2}> <span className="info-box">Alger, Zone 3</span></Col>  
                                            </div>
                                        </Row>
                                
                                        <Row>
                                            <div className="info-container">
                                                <Col style={{marginRight:5, }}><h3 className="info-title">Borne destination:</h3></Col>
                                                <Col push={1}> <span className="info-box">Alger, Zone 8</span></Col>  
                                            </div>
                                        </Row>
                                
                                
                                        <h2>Dernier locataire</h2> <hr className="hr-modal" />
                                        <Row>
                                            <div className="info-container">
                                                <Col style={{marginRight:11, }}><h3 className="info-title">Nom et Prénom :</h3></Col>
                                                <Col push={1}> <span className="info-box">Rihani Safi</span></Col>  
                                            </div>
                                        </Row>
                                
                                        <Row>
                                            <div className="info-container">
                                                <Col style={{marginRight:1, }}><h3 className="info-title">telephone: </h3></Col>
                                                <Col push={5}> <span className="info-box">0655595959</span></Col>  
                                            </div>
                                        </Row>
                                
                                        <Row>
                                            <div className="info-container">
                                                <Col style={{marginRight:5, }}><h3 className="info-title">Adresse: </h3></Col>
                                                <Col push={6}> <span className="info-box">Meryama, numéro 28</span></Col>  
                                            </div>
                                        </Row>
                                
                                    </Modal>
                            </Col>
                        </Row>
                    </Card>
         );
    }
}
 
export default SignalComponent;