
import React from 'react';

class LifeCycleDemo1 extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            msgs:
            ["Component Constructed @ "+(new Date()).toTimeString()]
        };
    }

    componentDidMount(){
        let msg = "Component Mounted @ "+(new Date()).toTimeString();
        this.setState({msgs:[...this.state.msgs,msg]});
    }

    componentDidUpdate(){
        let msg = "Component Updated @ "+(new Date()).toTimeString();
        //this.setState({msgs:[...this.state.msgs,msg]});
        console.log(msg);
    }

    render(){
        return (
            <section className="container-fluid p-4">
                {this.state.msgs.map(s => <p><strong>{s}</strong></p>)}
            </section>
        );
    }
}

export default LifeCycleDemo1;