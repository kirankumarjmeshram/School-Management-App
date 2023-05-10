import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'

function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  return (
    <header className='header'>
      <div>
        <Link to='/'>School Management</Link>
      </div>
      <ul>
        {user ? (
          <li>
            <button>
               Student
            </button>
            <button>
               Admin
            </button>
            <button>
               Teacher
            </button>
            <button onClick={onLogout}>
               Logout
            </button>
          </li>
          
        ) : (
          <>
            <li>
              <Link to='/login'>
                Login
              </Link>
            </li>
            <br />
            <li>
              <Link to='/register'>
                 Register
              </Link>
            </li>
            <br />
            <li>
              <Link to='/getAllStudents'>
                 Student
              </Link>
            </li>
            <br />
            <li>
              <Link to='/getAllAdmins'>
                 All Admins
              </Link>
            </li>
            <br />
            <li>
              <Link to='/getAllTeachers'>
                 Teacher
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  )
}

export default Header
