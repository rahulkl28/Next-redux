// components/UsersDetails.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser, getData } from '../../store/slices/UserSlices';

const UsersDetails = () => {
  const dispatch = useDispatch();
  const userData = useSelector(getData);

  const handleDelete = (email) => {
    dispatch(removeUser(email));
  };

  return (
    <div className="container mt-4 p-2">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>
                <button
                  className='btn btn-danger'
                  onClick={() => handleDelete(user.email)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersDetails;
