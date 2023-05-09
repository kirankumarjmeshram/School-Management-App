import { useDispatch } from 'react-redux'
import { deleteTeacher } from '../features/teacher/teacherSlice'

function TeacherItem({ teacher }) {
  const dispatch = useDispatch()

  return (
    <div>
      <h2>{teacher.text}</h2>
      <button onClick={() => dispatch(deleteTeacher(teacher._id))}>
        remove
      </button>
    </div>
  )
}

export default TeacherItem
