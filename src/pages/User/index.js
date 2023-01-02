import React, { useEffect, useState } from "react";
import "../User/user.style.css";

const initialValues = {
  name: "",
  email: "",
  number: "",
};

const User = () => {
  // const [user1, setUser1] = useState([
  //   {
  //     name: "Harsh",
  //     age: 21,
  //     salary: 100,
  //     dob: "14/06/2002",
  //   },
  // ]);

  // const test = (dob) => {
  //   setUser1({...user1})
  // };

  const [userData, setUserData] = useState(initialValues);

  const [item, setItem] = useState([
    {
      id: 1,
      name: "Harsh 1",
      email: "harshsavaliya250@gmail.com",
      number: 99999999,
    },
    {
      id: 2,
      name: "Harsh 2",
      email: "harshsavaliya250@gmail.com",
      number: 99999999,
    },
    {
      id: 3,
      name: "Harsh 3",
      email: "harshsavaliya250@gmail.com",
      number: 99999999,
    },
    {
      id: 4,
      name: "Harsh 4",
      email: "harshsavaliya250@gmail.com",
      number: 99999999,
    },
    {
      id: 5,
      name: "Harsh 5",
      email: "harshsavaliya250@gmail.com",
      number: 99999999,
    },
  ]);

  const [toggle, setToggle] = useState(true);
  const [dataEdit, setDataEdit] = useState(null);
  const [dataDeleteId, setDataDeleteId] = useState(null);

  const eventHandle = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserData({ ...userData, [name]: value });
  };

  // useEffect(() => {
  //   console.log("item : ", item);
  // }, [item]);

  // useEffect(() => {
  //   console.log("userData : ", userData);
  // }, [userData]);

  // ===============================Edit Part==========================================

  const edit = (id) => {
    const edit = item.find((item) => {
      return item.id === id;
    });
    setToggle(false);
    setUserData(edit);
    setDataEdit(id);
  };

  const update = (e) => {
    e.preventDefault();
    setItem(item.map((item)=>{
      if(item.id===dataEdit){
        return 
      }
      return item
    }));
    setToggle(true);
  };

  // ===============================Delete Part==========================================

  const deletebtn = (id) => {
    setDataDeleteId(id);
  };

  const deleteItem = () => {
    setItem(
      item.filter((item) => {
        return item.id !== dataDeleteId;
      })
    );
  };

  /**
   * Submit Cart
   */

  const submit = (e) => {
    e.preventDefault();

    setItem((prev) => {
      return [
        ...prev,
        { ...userData, id: Math.floor(Math.random() * 500) + 1 },
      ];
    });

    setUserData(initialValues);
  };

  const Cancel = (e) => {
    e.preventDefault();
    setToggle(true);
    setUserData(initialValues);
  };

  // something

  // const number1 = 10;
  // const number2 = 20;
  // console.log(
  //   "number 1: ",
  //   number1 === 20 || number1 === 30 || number1 === 40 || number2 === 20
  // );
  // console.log("number2: ", number2)

  return (
    <div className="container-fluid page-body-wrapper">
      <div className="main-panel">
        <div className="content-wrapper">
          <div className="row">
            <div className="col-md-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">
                    {toggle ? "Add User" : "Update User"}
                  </h4>
                  <form className="forms-sample">
                    <div className="form-group">
                      <label htmlFor="exampleInputUsername1">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputUsername1"
                        placeholder="Username"
                        name="name"
                        value={userData.name}
                        onChange={eventHandle}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        placeholder="Email"
                        name="email"
                        value={userData.email}
                        onChange={eventHandle}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Mobile No.</label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Mobile Number"
                        name="number"
                        value={userData.number}
                        onChange={eventHandle}
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary me-2"
                      disabled={
                        userData.name === "" ||
                        userData.email === "" ||
                        userData.number === ""
                      }
                      onClick={
                        toggle
                          ? (e) => {
                              submit(e);
                            }
                          : (e) => {
                              update(e);
                            }
                      }
                    >
                      {toggle ? "Submit" : "Update"}
                    </button>

                    <button
                      className="btn btn-dark"
                      onClick={(e) => {
                        Cancel(e);
                      }}
                    >
                      Cancel
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* =================Modal=========================== */}
          <div
            className="modal fade"
            id="exampleModal"
            aria-labelledby="exampleModalLabel"
            tabIndex="-1"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Delete Confirmation
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">Are You Sure Delete ?</div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-bs-dismiss="modal"
                    onClick={deleteItem}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* =================Modal-End=========================== */}

          <div className="row">
            <div className="col-lg-12 stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Users</h4>
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
                      <tbody className="main_table">
                        {item.map((item, index) => {
                          return (
                            <tr key={index}>
                              <td> {item.name} </td>
                              <td> {item.email} </td>
                              <td> {item.number} </td>
                              <td>
                                {" "}
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                  <button
                                    type="button"
                                    className="btn btn-inverse-success btn-fw"
                                    disabled={item.id === 2 || item.id === 4}
                                    onClick={() => {
                                      edit(item.id);
                                    }}
                                  >
                                    <i className="mdi mdi-table-edit"></i>
                                  </button>{" "}
                                </div>
                              </td>

                              <td>
                                {" "}
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                  <i
                                    className="mdi mdi-delete-forever btn btn-inverse-danger btn-fw"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                    onClick={() => {
                                      deletebtn(item.id);
                                    }}
                                  ></i>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                        {/* <ul>
                          {user1.map((item, index) => {
                            return (
                              <>
                                <li>{item.name}</li>
                                <li>{item.age}</li>
                                <li>{item.salary}</li>
                                <li>{item.dob}</li>

                                <button onClick={}>test</button>
                              </>
                            );
                          })}
                        </ul> */}
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
