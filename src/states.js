import React from 'react'
import ReactDOM from 'react-dom'
class MyComponent extends React.Component{
    constructor(){
        super();
        this.state={name:"Maxx",
            id: "101"
        };
    }
    render(){
        setTimeout(()=> {this.setState({name:"Jaeha",id:"222"});},2000);
        return(
            <div>
                <h1>Hello {this.state.name}</h1>
                <h2>Your ID is {this.state.id}</h2>
            </div>); }
}
ReactDOM.render(<MyComponent/>,document.getElementById("root"));