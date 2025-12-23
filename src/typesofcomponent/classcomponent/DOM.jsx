import React, {Component, createRef} from "react";

class DOM extends Component {
    constructor(){
        super();
        this.inputRef = createRef();
        this.aditya = createRef();
        this.ankansha = createRef();
        this.aaishwarya = createRef();
    }

    componentDidMount(){
        console.log('component render...');
        console.warn(this.inputRef);
        console.warn(this.ankansha);
        this.inputRef.current.value = 'Fusion';
        this.ankansha.current.style.color = 'blue';
    }

    // methods
    manipulateInput(){
        this.inputRef.current.value = 'Fusion Software Institute';
        this.inputRef.current.style.color = 'red';
    }
    manipulateList(){
        this.aditya.current.style.fontSize = '24px';
        this.ankansha.current.style.fontSize = '24px';
        this.aaishwarya.current.style.fontSize = '24px';
        this.ankansha.current.textContent = 'Akansha Gaikwad';
    }

    render(){
        return(
            <>
                <h1>DOM manipulation in React</h1>
                <input 
                    type="text" 
                    placeholder="User Name"
                    ref={this.inputRef}    
                />
                <ul>
                    <li ref={this.aditya}>Aditya</li>
                    <li ref={this.ankansha}>Akansha</li>
                    <li ref={this.aaishwarya}>Aaishwarya</li>
                </ul>
                <button 
                    type="button"
                    onClick={() => this.manipulateInput()}
                >Update Input</button>
                <button 
                    type="button"
                    onClick={() => this.manipulateList()}
                >Update List</button>
            </>
        )
    }
}

export default DOM;