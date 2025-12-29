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
import User from "./typesofcomponent/functionalcomponent/dataTransfer/parentToChild/User";
import Student from "./typesofcomponent/functionalcomponent/dataTransfer/parentToChild/Student";
import Parent from "./typesofcomponent/functionalcomponent/dataTransfer/childToParent/Parent";
import ComponentLifeCycle from "./typesofcomponent/classcomponent/ComponetLifeCycle";
import UseEffecthook from "./typesofcomponent/functionalcomponent/hooks/UseEffecthook";
import GetUsers from "./typesofcomponent/functionalcomponent/hooks/GetUsers";
import BasicComponent from "./typesofcomponent/classcomponent/BasicComponent";
import UseMemo from "./typesofcomponent/functionalcomponent/hooks/UseMemo";
import DOM from "./typesofcomponent/classcomponent/DOM";
import UseRef from "./typesofcomponent/functionalcomponent/hooks/UseRef";
import ParentRef from "./typesofcomponent/functionalcomponent/hooks/ParentRef";
import BootStrap from "./typesofcomponent/functionalcomponent/BootStrap";
import Blogs from "./typesofcomponent/functionalcomponent/bootstrap/Blogs";
function App(){
  // const brands = ['Apple', 'Sony', 'Samsung'];
  const getData = () => {
    alert('Function from app component');
  }
  const getUser = () => {
    let obj = {name: 'Aaishwarya', course : 'Java FullStack'}
    console.log('obj from parent comp.', obj);
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
    {/* <User data = {getData} info = {getUser}/>
    <Student info = {getData}/> */}
    {/* <Parent /> */}
    {/* <UseEffecthook /> */}
    {/* <GetUsers /> */}
      {/* <UseMemo /> */}
      {/* <DOM /> */}
      {/* <ParentRef /> */}
      {/* <BootStrap /> */}
      <Blogs />
      {/* <UseRef /> */}
    {/* Class Component */}
    {/* <BasicClassComp greet = "React => Basic class component" user = "Akansha"/> */}
    {/* <LifeCycleMethod /> */}
      {/* <ComponentLifeCycle name = 'Fusion' location = 'Kharadi' /> */}
      {/* <BasicComponent /> */}
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