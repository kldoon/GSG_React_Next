
interface IProps {
  list: string[];
}

const CoursesList = (props: IProps) => {
  return (
    <ul className="courses-list">
      {
        props.list.map((item, index) => <li key={index + item}>{item}</li>)
      }
    </ul>
  )
}

export default CoursesList;