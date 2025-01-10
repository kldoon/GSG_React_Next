import AddForm from "../components/add-form/add-form.component";
import { IStudent } from "../types";

interface IProps {
  onAdd: (newStd: IStudent) => void
}

const AddStudent = (props: IProps) => {
  return (
    <div className="add-screen">
      <h2>Add New Student</h2>
      <AddForm className="addForm" onSubmit={props.onAdd} />
    </div>
  )
}

export default AddStudent;