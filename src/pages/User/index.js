import React, { useState } from "react";

const User = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [mobileNumber, setMobileNumber] = useState();
  const [data, setData] = useState([]);

  const submit = () => {
    
  };
  return (
    <div className="container-fluid page-body-wrapper">
      <div className="main-panel">
        <div className="content-wrapper">
          <div className="row">
            <div className="col-md-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Default form</h4>
                  <p className="card-description"> Basic form layout </p>
                  <form className="forms-sample">
                    <div className="form-group">
                      <label htmlFor="exampleInputUsername1">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputUsername1"
                        placeholder="Username"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Mobile No.</label>
                      <input
                        type="number"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Mobile Number"
                        value={mobileNumber}
                        onChange={(e) => {
                          setMobileNumber(e.target.value);
                        }}
                      />
                    </div>
                    <div className="form-check form-check-flat form-check-primary">
                      <label className="form-check-label">
                        <input type="checkbox" className="form-check-input" />{" "}
                        Remember me{" "}
                      </label>
                    </div>
                    <button className="btn btn-primary me-2" onClick={submit}>
                      Submit
                    </button>
                    <button className="btn btn-dark">Cancel</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">User Table</h4>
                  <p className="card-description"> Add class</p>
                  <div className="table-responsive">
                    <table className="table table-bordered table-contextual">
                      <thead>
                        <tr>
                          <th> Name </th>
                          <th> Email </th>
                          <th> Mobile No. </th>
                          <th> Edit </th>
                          <th> Delete </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="table-info">
                          {data.map((item, index) => {
                            <td> {item.name} </td>;
                          })}
                        </tr>   
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
