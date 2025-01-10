import { useEffect, useRef, useState } from "react";
import Student from "../components/student/student.component";
import { IStudent } from "../types";

import { useSearchParams } from "react-router-dom";

interface IProps {
  totalAbsents: number,
  studentsList: IStudent[],
  onAbsent: (id: string, change: number) => void,
  onRemove: () => void,
}

const Main = (props: IProps) => {
  const { totalAbsents, studentsList } = props;

  const [filteredList, setFilteredList] = useState<IStudent[]>(studentsList);
  const [params, setParams] = useSearchParams();
  const lastStdRef = useRef<HTMLDivElement>(null);

  const scrollToLast = () => {
    if (lastStdRef.current) {
      lastStdRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  useEffect(() => {
    const query = params.get('q') || '';
    if (query) {
      setFilteredList(studentsList.filter(std => std.name.toLowerCase().includes(query.toLowerCase())));
    } else {
      setFilteredList(studentsList);
    }
  }, [params, studentsList]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    params.set('q', query);
    setParams(params);
  }

  return (
    <div className="main-screen">
      <h2>Students List</h2>
      <div className='stats'>
        <button onClick={props.onRemove}>POP Student</button>
        <button onClick={scrollToLast}>Scroll to Last</button>
        <b style={{ fontSize: '12px', fontWeight: 100, color: 'gray' }}>Total Absents {totalAbsents}</b>
      </div>
      <div className='filter'>
        <input type="text" placeholder="Search" onChange={handleSearch} value={params.get('q') || ''} />
      </div>
      {
        filteredList.length
          ? (
            <div className="list">
              {
                filteredList.map(student => (
                  <Student
                    key={student.id}
                    id={student.id}
                    name={student.name}
                    age={student.age}
                    absents={student.absents}
                    isGraduated={student.isGraduated}
                    coursesList={student.coursesList}
                    onAbsentChange={props.onAbsent}
                    mode="list"
                  />
                ))
              }
            </div>
          )
          :
          <div className="spinner"></div>
      }
      <div ref={lastStdRef}></div>
    </div>
  )
}

export default Main;