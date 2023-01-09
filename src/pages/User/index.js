import React, { useEffect, useState } from "react";
import "../User/user.style.css";

const initialValues = {
  name: "",
  email: "",
  number: "",
  field: "",
};
  
const User = () => {
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
  ]);

  const [toggle, setToggle] = useState(true);
  const [dataEdit, setDataEdit] = useState(null);
  const [dataDeleteId, setDataDeleteId] = useState(null);
  const [fieldToggle, setFieldToggle] = useState(true);
  const [fields, setFields] = useState(["name", "email", "number"]);
  const [form, setForm] = useState(null);
  const [error, setError] = useState({
    name: null,
    email: null,
    number: null,
  });

  const eventHandle = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  // ===============================Edit Part==========================================

  const edit = (id) => {
    setToggle(false);
    setUserData(item.find((item) => {
      return item.id === id;
    }));
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
    setToggle(true);
    setUserData(initialValues);
  };

  // ===============================Delete Part==========================================

  const deletebtn = (id) => {
    setDataDeleteId(id);
    setFieldToggle(false);
  };

  const deleteItem = () => {
    setItem(
      item.filter((item) => {
        return item.id !== dataDeleteId;
      })
    );
  };

  useEffect(() => {
    console.log("error : ", error);
  }, [error]);

  /**
   * Submit Cart
   */

  const submit = (e) => {
    e.preventDefault();

    setError({ name: null, email: null, number: null });

    if (userData.name === "") {
      setError((prev) => ({ ...prev, name: "Please Enter Valid Name ..!" }));
    } else if (userData.email === "") {
      setError((prev) => ({ ...prev, email: "Please Enetr valid Email ..!" }));
    } else if (userData.number == "") {
      setError((prev) => ({
        ...prev,
        number: "Please Enter valid Number ..!",
      }));
    }

    if (error.name !== "" && error.email !== "" && error.number !== "") {
      console.log("form is valid");
      setItem((prev) => {
        return [
          ...prev,
          { ...userData, id: Math.floor(Math.random() * 500) + 1 },
        ];
      });
      setUserData(initialValues);
    } else {
      console.log("form is not valid");
    }
  };

  const Cancel = (e) => {
    e.preventDefault();
    setToggle(true);
    setUserData(initialValues);
  };

  const addField = () => {
    setFieldToggle(true);
    if (userData.field) {
      setFields((prev) => {
        return [...prev, userData.field];
      });
    }
  };

  const getFormValue = () => {
    return (
      <form className="forms-sample">
        {fields.map((item, index) => {
          return (
            <div className="form-group" key={index}>
              <label htmlFor="exampleInputUsername1">{item}</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputUsername1"
                placeholder="Enter Value In Box"
                name={item}
                value={userData[item] || " "}
                onChange={eventHandle}
              />
              {error[item] && <p className="text-danger">{error[item]}</p>}
            </div>
          );
        })}
        <button
          type="submit"
          className="btn btn-primary me-2"
          // disabled={
          //   userData.name === "" ||
          //   userData.email === "" ||
          //   userData.number === ""
          // }
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
    );
  };

  useEffect(() => {
    const getForm = getFormValue();
    setForm(getForm);
  }, [userData, fields, error]);

  return (
    <div className="container-fluid page-body-wrapper">
      <div className="main-panel">
        <div className="content-wrapper">
          <div className="row">
            <div className="col-md-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">
                   add User
                  </h4>
                  {form}
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
                    {fieldToggle ? "Add Field" : "Delete Confirmation"}
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  {" "}
                  {fieldToggle ? (
                    <form>
                      <input
                        type="text"
                        placeholder="Enter New Filed "
                        name="field"
                        value={userData.field || ""}
                        onChange={eventHandle}
                      ></input>
                    </form>
                  ) : (
                    "Are You Sure Delete ?"
                  )}
                </div>
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
                    className={
                      fieldToggle ? "btn btn-success" : "btn btn-danger"
                    }
                    data-bs-dismiss="modal"
                    onClick={fieldToggle ? addField : deleteItem}
                  >
                    {fieldToggle ? "Add Field" : "Delete"}
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
                  <div className="main_table_title">
                    <h4 className="card-title">Users</h4>
                    <button
                      type="button"
                      className="btn btn-inverse-success btn-fw"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      onClick={(e) => {
                        addField(e);
                      }}
                    >
                      Add Field
                    </button>
                  </div>

                  <div className="table-responsive">
                    <table className="table table-bordered table-contextual">
                      <thead>
                        <tr>
                          {fields.map((field, index) => {
                            return <th key={index}> {field}</th>;
                          })}
                          <th>Edit</th>
                          <th>Delete</th>
                        </tr>
                      </thead>
                      <tbody className="main_table">
                        {item.map((item, index) => {
                          return (
                            <tr key={index}>
                              {fields.map((field, index) => (
                                <td key={index}> {item[field]} </td>
                              ))}
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
