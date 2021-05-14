import React, { Component } from 'react'
import VehicleState from './app/pages/PrivatePages/Surveillance/VehicleState';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <VehicleState></VehicleState>
            </div>
         );
    }
}
 
export default App;