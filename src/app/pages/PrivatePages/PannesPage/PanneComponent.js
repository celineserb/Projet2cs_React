import React, { Component } from 'react'

import {Row, Layout, Card, Col, Avatar   } from 'antd'
import { ReactComponent as EllipseIcon } from '../../../../assets/svg/ellipse.svg';
import { ReactComponent as EllipseGreyIcon } from '../../../../assets/svg/ellipse-gris.svg';

class PanneComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            key: props.index, 
            item: props.item
         }

    }
    showMore() {
        console.log(this.state.key);
        var msg = document.getElementById("item_message"+this.state.key);
        console.log(msg);
        var btn = document.getElementById("more"+this.state.key);
        if (msg.classList.contains("truncated")) {
            msg.classList.remove("truncated");
            btn.innerHTML = '<img class="chevron-bottom" alt="" />';
        } else {
            msg.classList.add("truncated");
            btn.innerHTML = '<img class="chevron-right" alt="" />';
        }
    }

    render() { 
        return (  
                <Card hoverable={true}  className="pannes-list-item">
                <Row justify='start'>
                    {
                        this.state.item.seen? 
                            <Col span={1}>  
                                <Avatar 
                                    size={48} 
                                    icon={<EllipseGreyIcon />}
                                    style={{
                                    
                                    }}>
                                </Avatar> 
                            </Col>    
                        :   <Col span={1}>  
                                <Avatar 
                                    size={48} 
                                    icon={<EllipseIcon />}
                                    style={{
                                    
                                    }}>
                                </Avatar> 
                            </Col>    
                    }
                    <Col span={6}
                         style={{
                                   marginTop:8,
                                   marginLeft:18
                                }} >
                        <div id ={"item_message"+this.state.key} className="truncated" >
                            <h3 className={"item-message-content"+this.state.key} >{this.state.item.message}</h3>
                        </div>    
                    </Col>

                    <Col span={4} offset={8}>
                        {this.state.item.vehicle}<br/>
                        {this.state.item.source}
                    </Col>
                    <Col span={3} >
                        {this.state.item.date}<br/>
                        {this.state.item.time}
                    </Col>
                    <Col offset={1} >
                        <div className="panne-notif-more">
                            <button id={"more"+this.state.key} onClick={() => {this.showMore()}}><img className="chevron-right" alt="" /></button>
                        </div>
                    </Col>
                </Row>
            </Card>
        );
    }
}
 
export default PanneComponent;