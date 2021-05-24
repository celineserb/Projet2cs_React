import React, { Component } from 'react'
import {Layout} from 'antd'
import axios from 'axios';
import SignalComponent from './SignalComponent';



const data =[{"name":"123"},{"name":"456"}, {"name":"678"}, {"name":"935"}, {"name":"398"}, {"name":"999"}] ;

class SignalsPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            signals:[]
         }
    }
    componentDidMount(){
        axios.get(`someurlhna`)
        .then(res => {
          const signals= res.data;
          this.setState({ signals });
        })
    }
    render() { 
        return ( 
            <Layout style={{ backgroundColor:'white'}}>
                {
                    data.map( (item, index) =>{
                        return (<SignalComponent key={index} item={item}></SignalComponent>)
                    })
                }
            </Layout>
         );
    }
}
 
export default SignalsPage;