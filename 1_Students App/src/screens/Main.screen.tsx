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
    const graduated = params.get('graduated');
    if (query) {
      setFilteredList(studentsList.filter(std => std.name.toLowerCase().includes(query.toLowerCase())));
    } else {
      setFilteredList(studentsList);
    }

    if (graduated === 'grad') {
      setFilteredList(oldState => (oldState.filter(std => std.isGraduated)));
    } else if (graduated === 'non-grad') {
      setFilteredList(oldState => (oldState.filter(std => std.isGraduated == false)));
    }
  }, [params, studentsList]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    if (query.length) {
      params.set('q', query);
    } else {
      params.delete('q');
    }
    setParams(params);
  }

  const handleGardFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const v = event.target.value;
    if (v === 'all') {
      params.delete('graduated');
    } else {
      params.set('graduated', v);
    }
    setParams(params);
  }

  return (
    <div className="main-screen">
      <h2>Students List</h2>
      <div className="stats">
        <button onClick={props.onRemove}>POP Student</button>
        <button onClick={scrollToLast}>Scroll to Last</button>
        <b style={{ fontSize: '12px', fontWeight: 100, color: 'gray' }}>Total Absents {totalAbsents}</b>
      </div>
      <div className="filter">
        <input type="search" placeholder="Search" onChange={handleSearch} value={params.get('q') || ''} />
        <select value={params.get('graduated') || 'all'} onChange={handleGardFilter}>
          <option value="all">All</option>
          <option value="grad">Graduated</option>
          <option value="non-grad">Not Graduated</option>
        </select>
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
          : <div className="spinner"></div>
      }
      <div ref={lastStdRef}></div>
    </div>
  )
}

export default Main;