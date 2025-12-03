
// function Students(){
//     return(
//         <div>

import Course from "./Course";

//         </div>
//     )
// }

const Students = (props) => {
    console.log('props => ', props);
    return (
        <>
            <h3>Name: {props.name}</h3>
            <p>Email: <b>{props.email}</b></p>
            <p>Phone: <b>{props.phone}</b></p>
            <p>City: <b>{props.city}</b></p>
            <Course courseName = {props.course} />
        </>
    )
}

export default Students;