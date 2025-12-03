import React from 'react'
import Products from '../components/Products';

const About = (props) => {
    console.log('About props => ', props);
  return (
    <>
     <h2>About Us</h2>
     <p>
        'React' is declared but its value is never read.<br/>   
        'React' is declared but its value is never read.<br/>   
        'React' is declared but its value is never read.<br/>   
        'React' is declared but its value is never read.<br/>   
     </p> 
     <Products brands = {props.products} />
    </>
  )
}

export default About
