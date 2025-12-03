const Course = (props) => {
    console.log('course props => ', props);
    return (
        <>
            <p>Course: <b>{props.courseName}</b></p>
        </>
    )
}

export default Course;