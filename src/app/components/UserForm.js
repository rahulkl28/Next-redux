import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from "../store/slices/UserSlices";


const UserForm = () => {
    const dispatch = useDispatch();
    const [userData, setUserData] = useState({firstName: '', lastName: '', email: '' })
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addUser(userData));
        console.log("-->",userData);
        setUserData({ firstName: '', lastName: '', email: '' });
      };

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
      };

  return (
    <>
        <form onSubmit={handleSubmit}>
            <div className="container mt-4 p-2">
                <div className="mb-3">
                <input type="text" className="form-control"
                name="firstName" value={userData.firstName}
                onChange={handleChange}
                placeholder='Enter First Name'/>
                </div>
                <div className="mb-3">
                <input type="text" className="form-control"  
                name="lastName" value={userData.lastName}
                onChange={handleChange}
                placeholder='Enter Last Name'/>
                </div>
                <div className="mb-3">
                <input required type="text" className="form-control" id="exampleInputEmail1" 
                name="email" value={userData.email}
                onChange={handleChange}
                placeholder='Enter Email Address'/>
                </div>
                
                <button type="submit" className="btn btn-primary" >Submit</button>
            </div>
        </form>
    </>
  )
}

export default UserForm    