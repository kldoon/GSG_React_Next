import { useState } from "react";

interface IProps {
  value: string[];
  onSubmit: (list: string[]) => void;
}

const CoursesListForm = (props: IProps) => {
  const [courseList, setCoursesList] = useState<string[]>(props.value);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newCourse = event.currentTarget["courseName"].value;
    const newList = [...courseList, newCourse];
    setCoursesList(newList);
    props.onSubmit(newList);
    event.currentTarget["courseName"].value = "";
  }

  return (
    <div className="addCourseForm">
      <form onSubmit={handleSubmit}>
        <div className="input">
          <label htmlFor="cName">Enter Course: </label>
          <div className="course-form-input">
            <input id="cName" type="text" name="courseName"/>
            <button type="submit">Add Course</button>
          </div>
        </div>
      </form>
      <ul >
        {courseList.map((course, index) => <li key={course + index}>{course}</li>)}
      </ul>
    </div>
  )
};

export default CoursesListForm;