import Harsh from "./components/Harsh";
import Aditya from "./components/Aditya";
import Aaishwarya from "./components/Aaishwarya";
import Users from "./components/Users";
import Students from "./components/Students";
import About from "./pages/About";
import BasicClassComp from "./typesofcomponent/classcomponent/BasicClassComp";
import LifeCycleMethod from "./typesofcomponent/classcomponent/LifeCycleMethod";
import Events from "./typesofcomponent/functionalcomponent/Events";
import Input from "./typesofcomponent/functionalcomponent/Input";
import './index.css';
import Login from "./typesofcomponent/functionalcomponent/validation/login/Login";
import User from "./typesofcomponent/functionalcomponent/User";
import Student from "./typesofcomponent/functionalcomponent/Student";
function App(){
  // const brands = ['Apple', 'Sony', 'Samsung'];
  const getData = () => {
    alert('Function from app component');
  }
  return (
    // react uses JSX to building UI
    <div className="container">
      <h1>App Component</h1>
    {/* <p>This is paragraph</p> */}
    {/* Functional Component */}
    {/* <Events /> */}
    {/* <Input /> */}
    {/* <Login /> */}
    <User data = {getData}/>
    <Student info = {getData}/>
    {/* Class Component */}
    {/* <BasicClassComp greet = "React => Basic class component" user = "Akansha"/> */}
    {/* <LifeCycleMethod /> */}
    {/* <About products = {brands} /> */}
    {/* <Students
      name = 'Aditya'
      email = 'aditya@gmail.com'
      phone = '789784665'
      city = 'Mumbai'
      course = "Java FullStack"
    />
    <Students
      name = 'Harsh'
      email = 'harsh@gmail.com'
      phone = '9894564564'
      city = 'Banguluru'
      course = "Python FullStack"
    /> */}
    {/*Use of Components*/}
    {/* <Harsh />
    <Aditya />
    <Aaishwarya /> */}
    {/* <Users name = "Harsh" info = "This is Harsh Component" 
    userId = "2821" />
    <Users name = "Aditya" info = "This is Aditya Component" />
    <Users name = "Aaishwarya" info = "This is Aaishwarya Component" email="aaishwarya@gmail.com" /> */}
    </div>
  )
}

export default App;