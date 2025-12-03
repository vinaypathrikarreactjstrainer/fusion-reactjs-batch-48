/*
    Life Cycle Methods in Class Component
    * Class Components define lifecycle methods events using specific methods
    A] MOUNTING:
        * Components is added to the DOM
        * When components is render 
        * Phase => constructor() => componentDidMount()
    B] UPDATING:
        * Whenever STATE or PROPS change 
        * Phase => componentDidUpdate()
    C] UNMOUNTING:
        * When component will remove from DOM
        * componentWillUnmount()
*/

// Example
import React,{Component} from 'react';
class LifeCycleMethod extends Component {
    // Mounting
    componentDidMount(){
        console.log('component mounted');
    }
    // Updating
    componentDidUpdate(){
        console.log('component updated');
    }

    // Unmounting
    componentWillUnmount(){
        console.log('component unmounted');
    }

    // render method
    render(){
        return (
            <>
                <h3>Life Cycle Method Class Component</h3>
            </>
        )
    }
}

export default LifeCycleMethod;
