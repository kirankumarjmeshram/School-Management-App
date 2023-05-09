import { useState } from "react"
import { getAdmins } from '../features/getAdmins'

function AllAdmins() {
    const [allAdmins,setAllAdmins]=useState([]);
    const handleGetAllAdmins=async ()=>{
        setAllAdmins(await getAdmins())
      }
  return (
    <>
    <div>
        <button onClick={handleGetAllAdmins}>All admins</button>
    </div>
    <ul>
        {allAdmins&&allAdmins.map((admin)=>{

          return(
            <>
            <li>
              <h3>Name : {admin.name}</h3>
              <h5>Email : {admin.email}</h5>
            </li>
            
            </>
          )
        })}

      </ul>
    </>
  )
}

export default AllAdmins