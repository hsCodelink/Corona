import React, { useState, useEffect } from "react";

const Todo = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
//   const id = Math.floor(Math.random() * 500) + 1;

  const addName = (e) => {
    e.preventDefault();
    setList((prev) => {
      return [...prev , name];
    });
    setName("")
  };

  const edit = (id) => {
    console.log(id);
    setName(list.find((index)=>{
        return index === id;
    }))
  };



  const del = (id) => {
    console.log(id)
    setName((current) => current.filter((item, index) => index !== id));
  };

  useEffect(() => {
    console.log("name : ", list);
  }, [list]);

  return (
    <div className="container-fluid page-body-wrapper">
      <div className="main-panel">
        <div className="content-wrapper">
          <form>
            <div className="row">
              <div className="col-md-6 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title text-center">Todo List</h4>
                    <div className="form-group">
                      <label htmlFor="exampleInputUsername1">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputUsername1"
                        placeholder="Enter Name ...."
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary me-2"
                      onClick={(e) => {
                        addName(e);
                      }}
                    >
                      Add
                    </button>
                    <button className="btn btn-dark">Cancel</button>
                  </div>
                </div>
              </div>

              <div className="col-lg-8 stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title text-center">Todo List Name</h4>
                    <div className="table-responsive">
                      <table className="table table-bordered table-contextual">
                        <thead>
                          <tr>
                            <th className="text-center"> Name </th>
                            <th className="text-center"> Edit </th>
                            <th className="text-center"> Delete </th>
                          </tr>
                        </thead>
                        <tbody>
                          {list.map((item, index) => {
                            return (
                              <tr key={index}>
                                <td> {item.name} </td>
                                <td>
                                  {" "}
                                  <div
                                    className=" bg-dark  border-0 fs-3 col-sm-6 col-md-4 col-lg-3 text-success"
                                    onClick={() => {
                                      edit(index);
                                    }}
                                  >
                                    <i className="mdi mdi-table-edit"></i>
                                  </div>
                                </td>
                                <td>
                                  {" "}
                                  <div
                                    className="col-sm-6 col-md-4 col-lg-3 text-danger bg-dark  border-0 fs-3"
                                    onClick={() => {
                                      del(index);
                                    }}
                                  >
                                    <i className="mdi mdi-delete-forever"></i>
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default Todo;
