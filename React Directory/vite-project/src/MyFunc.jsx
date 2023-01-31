function MyFunc(){
    const courses = ["Physics","Maths","English", "Chemistry"]
    return(
        courses.map((subject) => <li>{subject}</li>)
    )
}

export default MyFunc;