import React, { useState } from "react";

export default function AddUser() {
  const [user, setUser] = useState({
    customerName: "",
    phoneNumber: "",
    email: "",
  });

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const { customerName, phoneNumber, email } = user;
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2>Register User</h2>
          <div className="mb-3">
            <label htmlFor="Name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter User Name"
              name="name"
              value={customerName}
              onChange={(e) => onInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="PhoneNumber" className="form-label">
              PhoneNumber
            </label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter Phone No"
              name="PhoneNumber"
              value={phoneNumber}
              onChange={(e) => onInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Your Email"
              name="Email"
              value={email}
              onChange={(e) => onInputChange}
            />
          </div>
          <button type="submit" className="btn btn-outline-success">
            Submit
          </button>
          <button type="submit" className="btn btn-outline-danger mx-2">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
