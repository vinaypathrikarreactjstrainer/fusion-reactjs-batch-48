import React, { Component, PureComponent } from "react";

class ChildClassComponent extends PureComponent {
    constructor(){
        super();
        this.state = {
            quantity : 5
        }
    }    

    render() {
        console.log('inside child component');
        return (
            <>
                <h3>Child Component - Pure Component</h3>
                <h3>Quantity = {this.state.quantity}</h3>
                <h3>Count = {this.props.counts}</h3>
                <button
                    onClick={() => this.setState(
                        {
                            quantity: this.state.quantity 
                        }
                    )}
                >Update Quantity</button>
            </>
        )
    }
}

export default ChildClassComponent;