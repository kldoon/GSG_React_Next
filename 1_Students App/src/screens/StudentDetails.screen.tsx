import { useNavigate, useParams } from 'react-router-dom';
import Student from '../components/student/student.component'
import { IStudent } from '../types';
import { useEffect, useState } from 'react';

const StudentDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentStudent, setCurrentStudent] = useState<IStudent>();

  useEffect(() => {
    // find the student with ID id from the local storage database
    const studentsListStr = localStorage.getItem("students-list");
    if (studentsListStr) {
      const stdList: IStudent[] = JSON.parse(studentsListStr);
      const std = stdList.find(item => item.id === id);
      if (std) {
        setCurrentStudent(std);
      } else {
        navigate('/404');
      }
    }
  }, [id]);

  return (
    <div className="std-detail-screen">
      <h2>Student Details: {currentStudent?.name}</h2>
      {
        currentStudent && (
          <Student
            mode='details'
            id={currentStudent.id}
            name={currentStudent.name}
            age={currentStudent.age}
            absents={currentStudent.absents}
            isGraduated={currentStudent.isGraduated}
            coursesList={currentStudent.coursesList}
          />
        )
      }
    </div>
  )
}

export default StudentDetails