import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import TeacherForm from '../components/TeacherForm'
import TeacherItem from '../components/TeacherItems'
import { getTeachers, reset } from '../features/teacher/teacherSlice'

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { teachers, isError, message } = useSelector(
    (state) => state.teachers
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }

    dispatch(getTeachers())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])


  return (
    <>
      <section >
        {/* <h1>{user?.user.name}</h1> */}
        <h1>Admin</h1>
      </section>
      
      <TeacherForm />

      <section>
        {teachers.length > 0 ? (
          <div >
            {teachers.map((teacher) => (
              <TeacherItem key={teacher._id} teacher={teacher} />
            ))}
          </div>
        ) : (
          <h3>No Teacher Found</h3>
        )}
      </section>
    </>
  )
}

export default Dashboard
