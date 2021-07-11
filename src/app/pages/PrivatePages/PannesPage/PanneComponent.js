import React, { Component } from 'react'
import { Card, Row , Col, Button, Modal, Avatar, Badge, Divider,} from "antd";
import './style/style.scss'

class PanneComponent extends Component {
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
                                xs: 40,
                                sm: 40,
                                md: 40,
                                lg: 40,
                                xl: 40,
                                xxl: 40,
                            }}
                            style={{
                                backgroundColor:"#C5C7CD"
                            }}
                        /> 
                            :
                                <Avatar 
                                    size={{
                                        xs: 40,
                                        sm: 40,
                                        md: 40,
                                        lg: 40,
                                        xl: 40,
                                        xxl: 40,
                                    }}
                                    style={{
                                        backgroundColor:"#F9C31B"
                                    }}
                                /> 
                                          

                        }
                         
                        </Col>


                        <Col
                            style={{
                                marginTop:12,
                                marginLeft:12
                            }} 
                            xs={16}
                            xl={8}
                            lg={8}
                            md={8}
                            sm={16}
                            >
                            <h5 className="item-title bolde">{"Panne N°"+this.state.item.idPanne}</h5> 
                        </Col>

                        <Col  
                  
                        xl={4}
                        lg={4}
                        md={4}
                        xs={24}
                        sm={8}
                        >
                            <Row>
                        Source :  {this.state.item.sourceType === "Tenant"? "Locataire" : this.state.item.sourceType}
                        </Row>
                   <Row>
                        {
                            this.state.item.sourceType !== "Auto" ? 
                            this.state.item.firstName + " " + this.state.item.lastName
                            : ""
                        }
                        </Row>
                        </Col>

                            
                        <Col  
                  
                        xl={4}
                        lg={4}
                        md={4}
                        xs={24}
                        sm={8}
                        >
                        <Row>{this.state.item.sent_at.slice(0,10)+" "+this.state.item.sent_at.slice(11, 19)}</Row> 
                        </Col>
                        <Col xl={3} lg={3} md={3} xs={24} sm={16}>
                        {
                            this.state.item.treated?
                            <Badge
                                count= "Réparée" 
                                style={{ backgroundColor: "#52c41a", marginTop: 15 }}
                            />
                            : ""
                        }
                            
                        </Col>

                        <Col xl={3} lg={3} md={3}  sm={16} xs={24}>
                            <Button
                                    block
                                    onClick={() => this.setVisibleUntreated(true)}
                                    shape = 'round'
                                    style={{
                                        marginTop:8,
                                        backgroundColor: '#F9C31B', 
                                        borderColor: 'white', 
                                        color: 'black',
                                    }}
                                    className="details-btn"
                                    >
                                    Details
                            </Button>   
                            {
                            
                                <Modal
                                title={"Panne N°"+this.state.item.idPanne}
                               
                                centered
                                style={{margin:"40px 0"}}
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

                                    <Divider orientation="left" className="info-divider"><h5 className="bolde">Informations du véhicule</h5> </Divider>
                                    <Row>
                                        <div className="info-container">
                                            <Col>
                                                <label className="info-title">Matricule :</label> 
                                                <span className="info truncated">{this.state.item.registrationNumber}</span>
                                            </Col>
                                        </div>
                                    </Row>
                            
                                    <Row>
                                        <div className="info-container">
                                            <Col>
                                                <label className="info-title">Modèle :</label>
                                                <span className="info">{this.state.item.vehiclemodel}</span>
                                            </Col>
                                            
                                        </div>
                                    </Row>
                            
                                    <Row>
                                        <div className="info-container">
                                            <Col>
                                                <label className="info-title">Marque :</label>
                                                <span className="info">{this.state.item.vehiclebrand}</span>
                                            </Col>
                                            
                                        </div>
                                    </Row>
                                    
                                    <Row>
                                        <div className="info-container">
                                            <Col>
                                                <label className="info-title">Couleur :</label>
                                                <span className="info">{this.state.item.vehicleColor}</span>
                                            </Col>
                                          
                                        </div>
                                    </Row>

                                    <Divider orientation="left" className="info-divider"><h5 className="bolde">Informations de la panne</h5> </Divider>
                                    <Row>
                                        <div className="info-container">
                                            <Col>
                                                <label className="info-title">Description :</label> 
                                                <span className="info">{this.state.item.description}</span>
                                            </Col>
                                        </div>
                                    </Row>

                                    <Row>
                                        <div className="info-container">
                                            <Col>
                                                <label className="info-title">Sévérité :</label> 
                                                <span className="info">{this.state.item.severityLevel}</span>
                                            </Col>
                                        </div>
                                    </Row>

                                    <Row>
                                        <div className="info-container">
                                            <Col>
                                                <label className="info-title">Etat :</label> 
                                                <span className="info">{this.state.item.treated? "Réparée" : "Non réparée"}</span>
                                            </Col>
                                        </div>
                                    </Row>
                                        
                                    <Divider orientation="left" className="info-divider"> <h5 className="bolde">Signalement par</h5> </Divider>
                                    <Row>
                                        <div className="info-container">
                                            <Col>
                                                <label className="info-title">Source :</label>
                                                <span className="info">{this.state.item.sourceType === "Tenant"? "Locataire" : this.state.item.sourceType}</span>
                                            </Col>
                                        
                                        </div>
                                    </Row>
                                    {this.state.item.sourceType!=="Auto"? 
                                    <>
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
                                                <label className="info-title">Telephone : </label>
                                                <span className="info">0{this.state.item.phoneNumber}</span>
                                            </Col>
                                        </div>
                                    </Row>
                            
                                    <Row>
                                        <div className="info-container">
                                            <Col>
                                                <label className="info-title">Adresse :</label>
                                                <span className="info">{this.state.item.address}</span>
                                            </Col>
                                           
                                        </div>
                                    </Row>

                                    <Row>
                                        <div className="info-container">
                                            <Col>
                                                <label className="info-title">Message :</label> 
                                                <span className="info">{this.state.item.message}</span>
                                            </Col>
                                           
                                        </div>
                                    </Row>
                                    </>
                                    : ""}

                                    <Row>
                                        <div className="info-container">
                                            <Col>
                                                <label className="info-title">Signalée le :</label> 
                                                <span className="info">{this.state.item.sent_at.slice(0,10)+" "+this.state.item.sent_at.slice(11, 19)}</span>
                                            </Col>
                                           
                                        </div>
                                    </Row>
                                    <Row>
                                        <div className="info-container">
                                            <Col>
                                                <label className="info-title">Vérifiée le :</label> 
                                                <span className="info">{this.state.item.dateNotifPanne.slice(0,10)+this.state.item.dateNotifPanne.slice(12,16)}</span>
                                            </Col>
                                           
                                        </div>
                                    </Row>

                                    {this.state.item.treated?
                                    <>
                                    <Divider orientation="left" className="info-divider"> <h5 className="bolde">Réparation par :</h5> </Divider>
                                    <Row>
                                        <div className="info-container">
                                            <Col>
                                                <label className="info-title">Nom et Prénom :</label>
                                                <span className="info">{this.state.item.agentTreatPanne.nom+" "+this.state.item.agentTreatPanne.prenom}</span>
                                            </Col>
                                        
                                        </div>
                                    </Row>
                            
                                    <Row>
                                        <div className="info-container">
                                            <Col>
                                                <label className="info-title">Réparée le :</label>
                                                <span className="info">{this.state.item.dateReparationPanne.slice(0,10)}</span>
                                            </Col>
                                           
                                        </div>
                                    </Row>
                                    <Row>
                                        <div className="info-container">
                                            <Col>
                                                <label className="info-title">Description :</label> 
                                                <span className="info">{this.state.item.treatmentDescription}</span>
                                            </Col>
                                        </div>
                                    </Row>
                                    </>
                                    : ""
                                    
                                    }
                            
                                    
                            
                                </Modal>
                                
                            }

                        </Col>
                    </Row>
                </Card>
         );
    }
}
 
export default PanneComponent;