import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Main () {

 

  const [user, setuser] = useState([]); 


  let [light, setlight] = useState("light");
  let [word, setword] = useState("Dark");
  const Colormode = () => {
    if (light == "dark") 
    {
      setlight("light");
      setword("Dark");
    } else 
    {
      setlight("dark");
      setword("Light");
    }
  };


  useEffect(() => {
    loaduser();
  }, []);


  const loaduser = async () => {
    let result = await axios.get("http://localhost/react_crud_php/view.php");
    setuser(result.data.result);
  };


  const deleteUser = (id) => {
    axios.delete(`http://localhost/react_crud_php/view.php/${id}`).then(function(response){ 
        loaduser();
    });
}


  return (
    <div className="container">
      <h2 className="col-md-12 text-center mt-3">All User</h2>
      <table className={
          light == "dark"
            ? "table table-dark table-striped-columns shadow mt-4"
            : "table table-light table-striped-columns shadow mt-4"
        }>
        <thead>
          <tr thead className="thead-light">
            <th scope="col">Index</th>
            <th scope="col">Name</th>
            <th scope="col">Address</th>
            <th scope="col">City</th>
            <th scope="col">Country</th>
            <th style={{marginLeft:"4"}}>Action-1</th>
            <th style={{marginLeft:"4"}}>Action-2</th>
            <th>
               <button type="button"className="btn btn-light shadow mx-2"onClick={Colormode}>{word}</button>
            </th>
          </tr>
        </thead>
        <tbody>
          {user !== undefined
            ? user.map((item, ind) => (
                <tr key={ind}>
                  <th scope="row">{item.id}</th>
                  <td>{item.name}</td>
                  <td>{item.address}</td>
                  <td>{item.city}</td>
                  <td>{item.country}</td>
                  <td>
                     <Link to={`user/${item.id}/edit`} ><button className="btn btn-info " >Update </button></Link>
                  </td>
                  <td>
                    <button className="btn btn-danger" onClick={() => deleteUser(item.id)}>Delete</button>
                  </td>
                  <td>Save</td>
                </tr>
              ))
            : ""}
        </tbody>
      </table>
    </div>
  );
}
