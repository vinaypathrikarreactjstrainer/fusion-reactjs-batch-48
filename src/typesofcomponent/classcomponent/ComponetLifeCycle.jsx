import React, { Component, useState } from 'react';
import LifeCycleMethod from './LifeCycleMethod';
/*
class ComponentLifeCycle extends Component {
    constructor(props){
        super();
        this.instituteName = props.name;
        this.branch = props.location
        console.log('Component has rendered', this.instituteName, this.branch);
        // state in class componet
        this.state = {
            name : this.instituteName,
            location : this.branch
        }
        console.log('state in class ', this.state);
    }
    updateData() {
        alert('clicked');
        this.setState(this.state = {
            name : 'Fusion Software Institute',
            location : 'Hinjwadi Pase II'
        });
        console.log('state updated =>', this.state);
    }
    render(){
        return (
            <>
                <h2>Componet Life Cycle</h2>
                <h3>Institute Name : {this.state.name}</h3>
                <h3>Branch : {this.state.location}</h3>
                <button onClick={() => this.updateData()}>Update</button>
            </>
        )
    }
}

export default ComponentLifeCycle; */

const ComponentLifeCycle = (props) => {
    console.log('functional component is mounted/render');
    // Hooks - useState
    const [institute, setInstitute] = useState({
        name : props.name,
        location : props.location
    });
    console.log('funcitonal comp. state institute ', institute);
    // Updating
    const updateData = () => {
        console.log('Updating...');
        setInstitute({
            name: 'Fusion Software Institute',
            location : 'Baner'
        })
    }
    return (
        <>
            <h2>Componet Life Cycle</h2>
            <h3>Institute Name : {institute.name} </h3>
            <h3>Institute Branch : {institute.location} </h3>
            <button onClick={() => updateData()}>Update</button>
        </>
    )
}
export default ComponentLifeCycle;