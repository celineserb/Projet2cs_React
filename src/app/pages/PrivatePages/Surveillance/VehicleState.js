import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Button } from 'antd'


class VehicleState extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
                <div className="App">
                    <Button type="primary">Button</Button>
                </div>
         );
    }
}
 
export default VehicleState;