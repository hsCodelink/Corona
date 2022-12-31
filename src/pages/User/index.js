import React, { useEffect, useState } from "react";

const User = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    number: "",
  });

  const [item, setItem] = useState([
    {
      id: 1,
      name: "Harsh",
      email: "harshsavaliya@gmail.com",
      number: 878787877,
    },
    {
      id: 2,
      name: "Jay",
      email: "jay@gmail.com",
      number: 878787877,
    },
    {
      id: 3,
      name: "Karan",
      email: "karn@gmail.com",
      number: 878787877,
    },
  ]);

  const [toggle, setToggle] = useState(true);
  const [dataEdit, setDataEdit] = useState(null);

  const eventHandle = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  // useEffect(() => {
  //   console.log("item : ", item);
  // }, [item]);

  // useEffect(() => {
  //   console.log("userData : ", userData);
  // }, [userData]);

  const edit = (id) => {
    const edit = item.find((item) => {
      return item.id === id;
    });
    setToggle(false);
    setUserData(edit);
    console.log(edit);
    setDataEdit(id);
  };

  const update = (e) => {
    e.preventDefault();
    setItem(
      item.map((item) => {
        if (item.id === dataEdit) {
          return { ...item, ...userData };
        }
        return item;
      })
    );
    setUserData({ name: "", email: "", number: "" });
    setToggle(true);
  };

  const submit = (e) => {
    e.preventDefault();
    if (!userData) {
      
    } else {
      setItem((prev) => {
        return [
          ...prev,
          { ...userData, id: Math.floor(Math.random() * 500) + 1 },
        ];
      });
    }
    setUserData({ name: "", email: "", number: "" });
    setToggle(false);
  };

  const Cancel = (e) => {
    e.preventDefault();
    setToggle(true);
    setUserData({ name: "", email: "", number: "" });
  };

  return (
    <div className="container-fluid page-body-wrapper">
      <div className="main-panel">
        <div className="content-wrapper">
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
                              name="name"
                              value={userData.name}
                              onChange={eventHandle}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="exampleInputEmail1">
                              Email address
                            </label>
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
                            <label htmlFor="exampleInputPassword1">
                              Mobile No.
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              id="exampleInputPassword1"
                              placeholder="Mobile Number"
                              name="number"
                              value={userData.number}
                              onChange={eventHandle}
                            />
                          </div>
                          <div className="form-check form-check-flat form-check-primary">
                            <label className="form-check-label">
                              <input
                                type="checkbox"
                                className="form-check-input"
                              />{" "}
                              Remember me{" "}
                            </label>
                          </div>
                          {toggle ? (
                            <button
                              type="submit"
                              className="btn btn-primary me-2"
                              onClick={(e) => {
                                submit(e);
                              }}
                            >
                              Submit
                            </button>
                          ) : (
                            <button
                              type="submit"
                              className="btn btn-primary me-2"
                              onClick={(e) => {
                                update(e);
                              }}
                            >
                              Update
                            </button>
                          )}

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
                              {item.map((item, index) => {
                                return (
                                  <tr key={index}>
                                    <td> {item.name} </td>
                                    <td> {item.email} </td>
                                    <td> {item.number} </td>
                                    <td>
                                      <input
                                        type="button"
                                        value="edit"
                                        onClick={() => {
                                          edit(item.id);
                                        }}
                                      ></input>
                                    </td>
                                    <td>
                                      {" "}
                                      <button>Delete</button>{" "}
                                    </td>
                                  </tr>
                                );
                              })}
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
        </div>
      </div>
    </div>
  );
};

export default User;
