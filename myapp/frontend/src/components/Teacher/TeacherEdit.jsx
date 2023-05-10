import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const TeacherEdit = () => {
    const { empid } = useParams();

 const [name,namechange]=useState("");
 const [email,emailchange]=useState("");
 const [phoneNumber,phonechange]=useState("");

    useEffect(() => {
        fetch("http://localhost:5003/api/teachers2/single/" + empid).then((res) => {
            return res.json();
        }).then((resp) => {
        
            namechange(resp.data.name);
            emailchange(resp.data.email);
            phonechange(resp.data.phoneNumber);
    console.log("updatedata",resp)
        }).catch((err) => {
            console.log("helo error",err.message);
        })
    }, [empid]);

   


    const navigate=useNavigate();

    const handlesubmit=(e)=>{
      e.preventDefault();
      const empdata={name,email,phoneNumber};
      

      fetch("http://localhost:5003/api/students/update/"+empid,{
        method:"PUT",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(empdata)
      }).then((res)=>{
        alert('Saved successfully.')
        navigate('/getAllTeachers');
      }).catch((err)=>{
        console.log(err.message)
      })

    }
    return ( 
        <div>

        <div className="row">
            <div className="offset-lg-3 col-lg-6">
                <form className="container" onSubmit={handlesubmit}>

                    <div className="card" style={{"textAlign":"left"}}>
                        <div className="card-title">
                            <h2>Edit Details</h2>
                        </div>
                        <div className="card-body">

                            <div className="row">

                            

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input required value={name}  onChange={e=>namechange(e.target.value)} className="form-control"/>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input value={email} onChange={e=>emailchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Phone</label>
                                        <input value={phoneNumber} onChange={e=>phonechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                               
                                <div className="col-lg-12">
                                    <div className="form-group">
                                       <button className="btn btn-success" type="submit">Save</button>
                                       <Link to="/getAllteachers" className="btn btn-danger">Back</Link>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </form>

            </div>
        </div>
    </div>
     );
}
 
export default TeacherEdit;