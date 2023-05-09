import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createTeacher } from '../features/teacher/teacherSlice'

function TeacherForm() {
  const [text, setText] = useState('')

  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(createTeacher({ text }))
    setText('')
  }

  return (
    <section className='form'>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor='text'>Teachers</label>
          <input
            type='text'
            name='text'
            id='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div>
          <button  type='submit'>
            Add Teacher
          </button>
        </div>
      </form>
    </section>
  )
}

export default TeacherForm
