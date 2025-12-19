import React, { Component, PureComponent } from "react";
import ChildClassComponent from "./ChildClassComponent";

/*
    PureComponent :
        * If there is change or update in props or state the component is re-render
        * If there is no any changes or updates in props or state Pure component skip or aviod re-redering of the component
        * To aviod unneccessary re-redering of the components
*/

// class BasicComponent extends PureComponent{
//     constructor(){
//         super();
//         this.state = {
//             count : 1
//         }
//     }
//     handleCount() {
//             console.log(('inside the handleCount method'));
//             this.setState({count: this.state.count + 1});
//     };
//     render() {
//         console.log('Component is rendered..')
        
//         return(
//             <>
//                 <h2>Basic Component - Pure Component - {this.state.count}</h2>
//                 <button onClick={() => this.handleCount()}>Count++</button>
//             </>
//         )
//     }
// }
class BasicComponent extends PureComponent{
    constructor(){
        super();
        this.state = {
            count : 1
        }
    }
    handleCount() {
            console.log(('inside the handleCount method'));
            this.setState({count: this.state.count});
    };
    render() {
        console.log('Component is rendered..')
        
        return(
            <>
                {/* <h2>Basic Component - Pure Component - {this.state.count}</h2> */}
                <ChildClassComponent counts = {this.state.count} />
                <button onClick={() => this.handleCount()}>Count++</button>
            </>
        )
    }
}

export default BasicComponent;