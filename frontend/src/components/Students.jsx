import React, {useState} from "react"
import axios from "axios"

function Students(){
    const [students, setStudents] = useState([])

    const fetchStudents = async ()=>{
        const apiURL = import.meta.env.VITE_API_URL
        const response = await axios.get(`${apiURL}/student/`)
        setStudents(response.data)
    }

    return (
        <>
        <div>
            <button onClick={fetchStudents}>Show Students</button>
        </div>
        <div>
            <ul>
            {students.map(student => (
                <li key={student.id}>{student.name}-{student.age} years</li>
            ))}
            </ul>
        </div>
        </>
    )
}

export default Students