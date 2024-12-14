
interface IProps {
  list: string[];
}

const CoursesList = (props: IProps) => {
  return (
    <ul>
      {
        props.list.map((item, index) => <li key={index + item}>{item}</li>)
      }
    </ul>
  )
}

export default CoursesList;