/*
    Class Component in React
        * A Class Componet is an older way of writing components in React using ES6 classes.
        * Before React Hooks (2019) class compoents were the only way to use life cycle methods
        * Class Components are less preferred but still important for interviews and maitaining legacy projects.
*/

// Syntax 
import React from "react";

class BasicClassComp extends React.Component{ // Must extends React.Component / Components
    // constructor
    constructor(props){
        super(props)
    }
    render(){ // Must include render() method
        return ( // to use JSX inside the class componet use return JSX
            <>
                <h1>Welcome, {this.props.user}</h1>
                <p>{this.props.greet}</p>
            </>
        ) 
    }
}

export default BasicClassComp;