
interface IProps {
  list: string[];
}

const CoursesList = (props: IProps) => {
  return (
    <ul>
      <li>{props.list[0]}</li>
      <li>{props.list[1]}</li>
      <li>{props.list[2]}</li>
    </ul>
  )
}

export default CoursesList;