import React, { Component } from 'react'
import axios from 'axios';
import { Card, Row , Col, Button, Modal, Avatar} from "antd";
import { ReactComponent as EllipseIcon } from '../../../../assets/svg/ellipse.svg';
import { ReactComponent as EllipseGreyIcon } from '../../../../assets/svg/ellipse-gris.svg';
import './style/style.css'



class SignalComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            visible : props.visible,
            key: props.index, 
            item: props.item, 
            changed: false 
         }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({ 
            key: nextProps.index, 
            item: nextProps.item 
        });  
      }

    setVisible(value){
        this.setState({
          visible : value
        });
    }
    treatSignal(){
        axios.put(`http://localhost:8111/signals_treated?idSignal=${this.state.item.idSignal}`)
        .then(res => {
            console.log("done with request");
          this.setState({
              changed:true
          })
        })
    }
    render() { 
        return (  
                <Card  
                    hoverable={true} 
                    className="signal-list-item"
                    >
                    <Row  justify='start'>
                        <Col >
                        {
                            this.state.item.treated?
                                    <Avatar 
                                        size={48} 
                                        icon={<EllipseGreyIcon />}>
                                    </Avatar>
                            :
                                    <Avatar 
                                        size={48} 
                                        icon={<EllipseIcon />}>
                                    </Avatar>           

                        }
                         
                        </Col>


                        <Col
                            style={{
                                marginTop:8,
                                marginLeft:8
                            }} 
                            span={6}><h3>Signalement N°{this.state.item.idSignal}</h3> 
                        </Col>

                        <Col offset={5}  >
                        Source:  {this.state.item.sourceType}
                        </Col>

                            
                        <Col span={3} offset={1}  >
                        {this.state.item.sent_at.slice(0,10)+" "+this.state.item.sent_at.slice(11, 16)}
                        </Col>
                        <Col>
                            <Button
                                shape='round'
                                style={{marginRight:5}}
                                onClick={()=> this.treatSignal()}>
                                Traiter
                            </Button>
                        </Col>

                        <Col >
                            <Button
                                    onClick={() => this.setVisible (true)}
                                    shape = 'round'
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
                                title={"Signalement N °"+this.state.item.idSignal}
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
                                            <Col push={5} style={{marginRight:55}}> <span className="info-box"> {this.state.item.registrationNumber}</span></Col>  
                                        </div>
                                    </Row>
                            
                                    <Row>
                                        <div className="info-container">
                                            <Col><h3 className="info-title">Modèle:</h3></Col>
                                            <Col push={7}> <span className="info-box">{this.state.item.vehiclemodel}</span></Col>  
                                        </div>
                                    </Row>
                            
                                    <Row>
                                        <div className="info-container">
                                            <Col><h3 className="info-title">Marque:</h3></Col>
                                            <Col push={6} style={{marginRight:45}}> <span className="info-box">{this.state.item.vehiclebrand}</span></Col>  
                                        </div>
                                    </Row>
                                    
                                    <Row>
                                        <div className="info-container">
                                            <Col><h3 className="info-title">Couleur:</h3></Col>
                                            <Col push={6} style={{marginRight:40}}> <span className="info-box">{this.state.item.vehicleColor} </span></Col>  
                                        </div>
                                    </Row>
                                        
                            
                                    <h2>Dernière location</h2> <hr className="hr-modal" />  
                            
                                    <Row>
                                        <div className="info-container">
                                            <Col style={{marginRight:5, }}><h3 className="info-title">Date Début:</h3></Col>
                                            <Col push={4}> <span className="info-box"> {this.state.item.rentaldate.slice(0,10)} </span></Col>  
                                        </div>
                                    </Row>
                            
                                    <Row>
                                        <div className="info-container">
                                            <Col style={{marginRight:11, }}  ><h3 className="info-title">Heure Début:</h3></Col>
                                            <Col push={3}> <span className="info-box"> {this.state.item.rentaltime} </span></Col>  
                                        </div>
                                    </Row>
                            
                                    <Row>
                                        <div className="info-container">
                                            <Col><h3 className="info-title">Date de fin prévue:</h3></Col>
                                            <Col push={1}> <span className="info-box">{this.state.item.restitutionDate.slice(0,10)} </span></Col>  
                                        </div>
                                    </Row>
                            
                                    <Row>
                                        <div className="info-container">
                                            <Col><h3 className="info-title">Borne de départ:</h3></Col>
                                            <Col push={2}> <span className="info-box"> {this.state.item.depatBorne} </span></Col>  
                                        </div>
                                    </Row>
                            
                                    <Row>
                                        <div className="info-container">
                                            <Col style={{marginRight:5, }}><h3 className="info-title">Borne destination:</h3></Col>
                                            <Col push={1}> <span className="info-box"> {this.state.item.destBorne} </span></Col>  
                                        </div>
                                    </Row>
                            
                            
                                    <h2>Dernier locataire</h2> <hr className="hr-modal" />
                                    <Row>
                                        <div className="info-container">
                                            <Col style={{marginRight:19, }}><h3 className="info-title">Nom et Prénom :</h3></Col>
                                            <Col push={1}> <span className="info-box"> {this.state.item.lastName+" "+this.state.item.firstName} </span></Col>  
                                        </div>
                                    </Row>
                            
                                    <Row>
                                        <div className="info-container">
                                            <Col style={{marginRight:8, }}><h3 className="info-title">telephone: </h3></Col>
                                            <Col push={5}> <span className="info-box">0{this.state.item.phoneNumber}</span></Col>  
                                        </div>
                                    </Row>
                            
                                    <Row>
                                        <div className="info-container">
                                            <Col style={{marginRight:9, }}><h3 className="info-title">Adresse: </h3></Col>
                                            <Col push={6}> <span className="info-box"> {this.state.item.address} </span></Col>  
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