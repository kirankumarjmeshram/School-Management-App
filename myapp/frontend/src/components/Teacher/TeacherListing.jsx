import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const TeacherListing = () => {
  const [empdata, empdatachange] = useState(null);
  const navigate = useNavigate();

  const LoadEdit = (id) => {
    navigate("/teacher/update/" + id);
  };
  const Removefunction = (id) => {
    if (window.confirm("Do you want to remove?")) {
      fetch("http://localhost:5003/api/teachers2/delete/" + id, {
        method: "DELETE",
      })
        .then((res) => {
          alert("Removed successfully.");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  useEffect(() => {
    fetch("http://localhost:5003/api/teachers2/all")
      .then(async (res) => {
        const data = await res.json();
        console.log("res", data.data);

        empdatachange(data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div className="container">
      <div className="card">
        <div>
          <img src="https://thumbs.dreamstime.com/b/school-logo-graduation-icon-education-college-school-logo-school-logo-graduation-icon-education-college-school-logo-white-137290284.jpg" alt="img" />
        </div>
        <div className="card-title">
          <h2>Teacher List</h2>
        </div>
        <div className="card-body">
          <div className="divbtn">
            <Link to="teacher/create" className="btn btn-info">
              Add New
            </Link>
          </div>

          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {empdata &&
                empdata.map((item, i) => (
                  <tr key={item._id}>
                    <td>{i + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phoneNumber}</td>
                    <td>
                      <a
                        onClick={() => {
                          LoadEdit(item._id);
                        }}
                        className="btn btn-primary"
                      >
                        Update
                      </a>
                      <a
                        href="/#"
                        onClick={() => {
                          Removefunction(item._id);
                        }}
                        className="btn btn-dark"
                      >
                        Delete
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TeacherListing;
