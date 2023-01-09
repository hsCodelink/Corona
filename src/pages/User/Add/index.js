import React, { useEffect, useState } from "react";
const initialValue = { name: "", email: "", number: ""};
const Add = () => {
  // const [userData, setUserData] = useState(initialValue);
  // const [inputeFields, setInputeFields] = useState([initialValue]);
  // const [item, setItem] = useState([
  //   {
  //     name: "abc",
  //     email: "abc@gmail.com",
  //     number: 99999999,
  //   },
  // ]);

  // const eventHandler = (e,indx) => {
  //   const name = e.target.name;
  //   const value = e.target.value;

  //     console.log("name :", name ,"value :", value, "index :", indx)

  //     setInputeFields((current)=>current.map((item ,index)=>{
  //       if(index === indx)
  //       {
  //         return {...item ,[name]:value}
  //       }
  //       return item
  //     }))
  // }

  // useEffect(() => {
  //   console.log("userData : ", userData);
  // }, []);

  // const submit = () => {
  //   setItem((prev) => {
  //     return [...prev, { ...userData }];
  //   });
  // };

  // const addField = () => {
  //   setInputeFields((prev) => {
  //     return [...prev, initialValue];
  //   });
  // };

  /* 
    Update array of object in react js
  */

  // const [field, setField] = useState([
  //   {
  //     name: "",
  //     email: "",
  //     number: "",
  //   },
  // ]);

  // const eventHendler = (e, indx) => {
  //   const name = e.target.name;
  //   const value = e.target.value;

  //   setField((current) =>
  //     current.map((item, index) => {
  //       if (index === indx) {
  //         return { ...item, [name]: value };
  //       }
  //       return item;
  //     })
  //   );
  // };

  // const submit = (e) => {
  //   e.preventDefault();

  //   setField((prev) => {
  //     return [...prev, { ...field }];
  //   });
  // };

  // const remove = (e, indx) => {
  //   e.preventDefault();
  //   setField((current) => current.filter((item, index) => index !== indx));
  // };

  // useEffect(() => {
  //   console.log("field :",)
  // }, [])

  // ===============================================================================================================================================

  // const [field, setField] = useState(true);

  // const submit = () => {
  //   setField(field === true ? false : true);
  //   console.log(field === !field  )
  // };

  // const [value, setValue] = useState(
  //   {
  //     name: "Harsh",
  //     email: "harsh@gmail.com",
  //     number: 999999,
  //     age: 12,
  //   },
  //   {
  //     name: "Harsh",
  //     email: "harsh@gmail.com",
  //     number: 999999,
  //     age: 12,
  //   },
  //   {
  //     name: "Harsh",
  //     email: "harsh@gmail.com",
  //     number: 999999,
  //     age: 12,
  //   },
  // );

  // const [toggle, setToggle] = useState(false);
  // const [name, setName] = useState("");
  // const [allData, setAllData] = useState([]);
  // const [item, setItem] = useState([
  //   {
  //     id: 1,
  //     name: "Harsh",
  //     email: "harsh@gmail.com",
  //     age: 22,
  //   },
  //   {
  //     id: 2,
  //     name: "Chintan",
  //     email: "chintan@gmail.com",
  //     age: 26,
  //   },
  //   {
  //     id: 3,
  //     name: "Jay",
  //     email: "jay@gmail.com",
  //     age: 36,
  //   },
  // ]);

  // const submit = () => {
  /**
   * rest oparator
   */
  // const {name,...rest}=value
  // setValue({...rest ,age:23,name:"Karan"})
  // console.log("oldValue:", value)
  // console.log("Value deleted :", delete value.name)

  /** spred property  */

  // setValue((prev) => {
  //   const { name, ...rest } = prev;
  //   return {...rest, dob: "14620002", name: "Karan" };
  // });

  //   setItem((prev) => {
  //     return [...prev, { name: "Karan", email: "karan@gmail.com", age: 12 }];
  //   });
  // };
  // const eventHandler = (e,indx) => {
  //   const name = e.target.name;
  //   const value = e.target.value;

  //   setUserData((current) =>
  //    current.map((item, index) => {
  //      if (index === indx) {
  //        return { ...item, [name]: value };
  //      }
  //      return item;
  //    })
  //  );
  // };

  // const edit = (indx) => {
  //   setToggle(true);
  //   console.log(indx);
  // };

  // const remove = (indx) => {
  //   console.log(indx);
  // setItem((current) => current.filter((item, index) => index !== indx));
  // };

  // useEffect(() => {
  //   console.log("newValue :", item);
  // }, [item]);

  // ======================================================================================Array=================================================
  // const [toggle, setToggle] = useState(true);
  // const [editToggle, setEditToggle] = useState(true);
  // const [name, setName] = useState("");
  // const [error, setError] = useState(false);
  // const [saveId, setSaveId] = useState(null);
  // const [allData, setAllData] = useState([]);

  // const [currentPage, setCurrentPage] = useState(1);
  // const [dataPerPage, setdataPerPage] = useState(3);
  // const [totalPages, setTotalPages] = useState(0);

  // const indexOfLastData = currentPage * dataPerPage;//3
  // const indexOfFirstData = indexOfLastData - dataPerPage;//0
  // const currentdata = allData.slice(indexOfFirstData, indexOfLastData);//0 to 3

  // const prev =()=>{
  //   if(currentPage > 1)
  //   {
  //     setCurrentPage(currentPage - 1)
  //   }
  // }

  // const next =()=>{
  //  if(currentPage >=1 && currentPage < totalPages)
  //  {
  //   setCurrentPage(currentPage + 1)
  //  }
  // }

  // const submit = () => {
  //   if (name) {
  //     setAllData((newData) => {
  //       return [...newData, name];
  //     });
  //     setError(false);
  //     setName("");
  //     setToggle(true);
  //   } else {
  //     setError("Please EnterYour Name..!");
  //     console.log("Please Enter Your Name");
  //   }
  // };
  // const remove = (indx) => {
  //   console.log(indx);
  //   setAllData((current) => current.filter((item, index) => index !== indx));
  // };
  // const edit = (indx) => {
  //   console.log(indx);
  //   setToggle(false);
  //   setName(
  //     allData.find((item, index) => {
  //       return index === indx;
  //     })
  //   );
  //   setSaveId(indx);
  //   setEditToggle(false);
  // };

  // const update = () => {
  //   setAllData(
  //     allData.map((item, index) => {
  //       if (index === saveId) {
  //         return [name];
  //       }
  //       return item;
  //     })
  //   );
  //   console.log("name :", [name]);
  //   setName("");
  //   setEditToggle(true);
  // };
  // useEffect(() => {
  //   console.log("alldata :", allData);
  // }, [allData]);

  // const addName = () => {
  //   setToggle(false);
  // };

  // ===========================================================================================================================

  // ===================================================OBj========================================================================

  const [data, setData] = useState(initialValue);
  const [error, setError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [numberError, setNumberError] = useState(false);
  // const [count, setCount] = useState(0);
  const [objData, setObjData] = useState([
    {
      id:1,
      name: "Harsh Savaliya",
      email: "harsh@gmail.com",
      number: 9998760805,
    },
    {
      id:2,
      name: "Karan Dudhat",
      email: "Karan@gmail.com",
      number: 7069937085,
    },
    {
      id:3,
      name: "Jay Dhameliya",
      email: "jay@gmail.com",
      number: 9974949113,
    },
  ]);

  const [editId, setEditId] = useState(null);
  const [toggle, setToggle] = useState(true);

  const eventHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const submit = (e) => {
    e.preventDefault();
    if (data.name === "" && data.email === "" && data.number === "") {
      setError("Please Fill All Fields..!");
    } else if (data.name === "") {
      setError(false);
      setEmailError(false);
      setNumberError(false);
      setNameError("* Please Enter Name");
    } else if (data.email === "") {
      setError(false);
      setNameError(false);
      setNumberError(false);
      setEmailError("* Please Enter Email");
    } else if (data.number === "") {
      setError(false);
      setEmailError(false);
      setNameError(false);
      setNumberError("* Please Enter Number");
    }

    if (data.name !== "" && data.email !== "" && data.number !== "") {
      setObjData((prev) => {
        return [...prev, { ...data, id: Math.floor(Math.random() * 500) + 1 }];
      });
      setData(initialValue);
      setError(false);
      setNameError(false);
      setEmailError(false);
      setNumberError(false);
    }
  };

  const edit = (id) => {
    console.log(id);
    setToggle(false);
    setData(
      objData.find((item) => {
        return item.id === id;
      })
    );
    setEditId(id);
  };
  const update = (e) => {
    e.preventDefault();
    setToggle(true);
    setObjData(
      objData.map((item) => {
        if (item.id === editId) {
          return {...item, ...data};
        }
        return item;
      })
    );
    setData(initialValue);
  };

  const del = (id) => {
    setObjData((current) =>
      current.filter((item) => {
        return item.id !== id;
      })
    );
  };
  const cancel = (e) => {
    e.preventDefault();
    setData(initialValue);
    setToggle(true);
    setError(false);
    setNameError(false);
    setEmailError(false);
    setNumberError(false);
  };

  return (
    // <div className="container-fluid page-body-wrapper">
    //   <div className="main-panel">
    //     <div className="content-wrapper">
    //       <div className="">
    //         <div className="grid-margin stretch-card">
    //           <div className="card">
    //             <div className="card-body">
    //               <div className="d-flex align-items-center justify-content-between">
    //                 <h4 className="card-title">User</h4>
    //                 <button
    //                   className="btn btn-inverse-success btn-fw"
    //                   onClick={(e) => {
    //                     addField(e);
    //                   }}
    //                 >
    //                   Add Field
    //                 </button>
    //               </div>

    //               <form className="forms-sample row align-items-center">
    //                 {inputeFields.map((item, index) => {
    //                   return (
    //                     <>
    //                       <div className="form-group col-3" key={index}>
    //                         <label htmlFor="exampleInputUsername1">Name</label>
    //                         <input
    //                           type="text"
    //                           className="form-control"
    //                           id="exampleInputUsername1"
    //                           placeholder="Enter Value In Box"
    //                           name="name"
    //                           value={item.name}
    //                           onChange={(e) => {
    //                             eventHandler(e, index);
    //                           }}
    //                         />
    //                       </div>
    //                       <div className="form-group col-3">
    //                         <label htmlFor="exampleInputUsername1">Email</label>
    //                         <input
    //                           type="email"
    //                           className="form-control"
    //                           id="exampleInputUsername1"
    //                           placeholder="Enter Name"
    //                           name="email"
    //                           value={item.email}
    //                           onChange={(e) => {
    //                             eventHandler(e, index);
    //                           }}
    //                         />
    //                       </div>
    //                       <div className="form-group col-3">
    //                         <label htmlFor="exampleInputUsername1">
    //                           Number
    //                         </label>
    //                         <input
    //                           type="tel"
    //                           className="form-control"
    //                           id="exampleInputUsername1"
    //                           placeholder="Enter Email"
    //                           name="number"
    //                           value={item.number}
    //                           onChange={(e) => {
    //                             eventHandler(e, index);
    //                           }}
    //                         />
    //                       </div>
    //                       <div className="form-group col-3">
    //                         <button className="btn btn-inverse-danger btn-fw">
    //                           Remove
    //                         </button>
    //                       </div>
    //                     </>
    //                   );
    //                 })}
    //               </form>

    //               <button
    //                 className="btn btn-inverse-success btn-fw"
    //                 onClick={(e) => {
    //                   submit(e);
    //                 }}
    //               >
    //                 Submit
    //               </button>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       <div className="table-responsive">
    //         <table className="table table-bordered table-contextual">
    //           <thead>
    //             <tr>
    //               <th>Name</th>
    //               <th>Email</th>
    //               <th>Number</th>
    //               <th>Edit</th>
    //               <th>Delete</th>
    //             </tr>
    //           </thead>
    //           <tbody className="main_table">
    //             {item.map((item, index) => {
    //               return (
    //                 <tr key={index}>
    //                   <td>{item.name}</td>
    //                   <td>{item.email}</td>
    //                   <td>{item.number}</td>
    //                   <td>
    //                     {" "}
    //                     <div className="col-sm-6 col-md-4 col-lg-3">
    //                       <button
    //                         type="button"
    //                         className="btn btn-inverse-success btn-fw"
    //                       >
    //                         <i className="mdi mdi-table-edit"></i>
    //                       </button>{" "}
    //                     </div>
    //                   </td>

    //                   <td>
    //                     {" "}
    //                     <div className="col-sm-6 col-md-4 col-lg-3">
    //                       <button
    //                         type="button"
    //                         className="mdi  btn btn-inverse-danger btn-fw"
    //                       >
    //                         <i className="mdi mdi-delete-forever"></i>
    //                       </button>
    //                     </div>
    //                   </td>
    //                 </tr>
    //               );
    //             })}
    //           </tbody>
    //         </table>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // <div className="container-fluid page-body-wrapper">
    //   <div className="main-panel">
    //     <div className="content-wrapper">
    //       <div>
    //         <form>
    //           {field.map((item, index) => {
    //             return (
    //               <>
    //                 <div className="d-flex">
    //                   <div>
    //                     <input
    //                       type="text"
    //                       placeholder="Enter Name"
    //                       name="name"
    //                       value={item.name}
    //                       onChange={(e) => {
    //                         eventHendler(e, index);
    //                       }}
    //                     ></input>
    //                     <input
    //                       type="email"
    //                       placeholder="Enter Email"
    //                       name="email"
    //                       value={item.email}
    //                       onChange={(e) => {
    //                         eventHendler(e, index);
    //                       }}
    //                     ></input>
    //                     <input
    //                       type="tel"
    //                       placeholder="Enter Number"
    //                       name="number"
    //                       value={item.number}
    //                       onChange={(e) => {
    //                         eventHendler(e, index);
    //                       }}
    //                     ></input>
    //                   </div>
    //                   <div>
    //                     <button
    //                       type="submit"
    //                       className="btn-success ms-1"
    //                       onClick={(e) => {
    //                         submit(e);
    //                       }}
    //                     >
    //                       Submit
    //                     </button>
    //                   </div>
    //                 </div>
    //               </>
    //             );
    //           })}
    //         </form>
    //       </div>
    //       <table>
    //         <thead>
    //           <tr className="row mt-5">
    //             <td className="col-3">Name</td>
    //             <td className="col-3">Email</td>
    //             <td className="col-3">Number</td>
    //             <td className="col-3">Remove</td>
    //           </tr>
    //         </thead>
    //         <tbody className="mt-2">
    //           {field.map((item, index) => {
    //             return (
    //               <tr className="row" key={index}>
    //                 <td className="col-3"> {item.name}</td>
    //                 <td className="col-3"> {item.email}</td>
    //                 <td className="col-3">{item.number}</td>
    //                 <td className="col-3">
    //                 <button
    //                     type="submit"
    //                     className="btn-danger ms-1"
    //                     onClick={(e) => {
    //                       remove(e);
    //                     }}
    //                   >
    //                     Remove
    //                   </button>
    //                   </td>
    //               </tr>

    //             );
    //           })}
    //         </tbody>
    //       </table>
    //     </div>
    //   </div>
    // </div>

    // ========================================================Array=====================================================================
    // <div className="container-fluid page-body-wrapper">
    //   <div className="main-panel">
    //     <div className="content-wrapper">
    //       <div className="text-center">
    //         {toggle ? (
    //           <div
    //             className=" bg-success col-lg-3 py-2"
    //             onClick={(e) => {
    //               addName(e);
    //             }}
    //           >
    //             <i className="mdi mdi-plus"></i> Add Name
    //           </div>
    //         ) : (
    //           <div className="text-center">
    //             <input
    //               type="text"
    //               value={name}
    //               onChange={(e) => {
    //                 setName(e.target.value);
    //               }}
    //               placeholder="Enter Name"
    //             ></input>
    //             <button
    //               className="btn-success"
    //               onClick={
    //                 editToggle
    //                   ? (e) => {
    //                       submit(e);
    //                     }
    //                   : (e) => {
    //                       update(e);
    //                     }
    //               }
    //             >
    //               {editToggle ? "Submit" : "Update"}
    //             </button>
    //           </div>
    //         )}
    //         <p className="text-danger">{error}</p>
    //       </div>

    //       {/* <div className="mt-5 d-flex justify-content-between align-items-center">
    //         <button className="col-sm-6 col-md-4 col-lg-1 align-items-center" onClick={(e)=>{prev(e)}}>
    //           <i className="mdi mdi-arrow-left align-items-center"> </i> Prev
    //         </button>
    //         {currentPage} of {totalPages}
    //         <button className="col-sm-6 col-md-4 col-lg-1 align-items-center" onClick={(e)=>{next(e)}}>
    //           {" "}
    //           Next <i className="mdi mdi-arrow-right align-items-center"> </i>
    //         </button>
    //       </div> */}
    //       <div>
    //         <div className="d-flex justify-content-between mt-5 border">
    //           <h3>Index</h3>
    //           <h3>Name</h3>
    //           <h3>Edit</h3>
    //           <h3>Delete</h3>
    //         </div>
    //         {allData.map((item, index) => {
    //           return (
    //             <div
    //               key={index}
    //               className="d-flex justify-content-between mt-5"
    //             >
    //               <h5>{index}</h5>
    //               <h5>{item}</h5>
    //               <button
    //                 className="btn-success"
    //                 onClick={() => {
    //                   edit(index);
    //                 }}
    //               >
    //                 Edit
    //               </button>
    //               <button
    //                 className="btn-danger"
    //                 onClick={() => {
    //                   remove(index);
    //                 }}
    //               >
    //                 Delete
    //               </button>
    //             </div>
    //           );
    //         })}
    //       </div>

    //       {/* {toggle && (
    //         <div className="my-3">
    //           <input
    //             type="text"
    //             placeholder="Enter Name"
    //             name="name"
    //             value={item.name}
    //             onChange={(e) => {
    //               eventHandler(e);
    //             }}
    //           ></input>
    //           <input
    //             type="email"
    //             placeholder="Enter Email"
    //             name="email"
    //             value={item.email}
    //             onChange={(e) => {
    //               eventHandler(e);
    //             }}
    //           ></input>
    //           <input
    //             type="age"
    //             placeholder="Enter Age"
    //             name="age"
    //             value={item.age}
    //             onChange={(e) => {
    //               eventHandler(e);
    //             }}
    //           ></input>
    //           <button
    //             claonChangesName="btn-success"
    //             onChange={(e) => {
    //               update(e);
    //             }}
    //           >
    //             Update
    //           </button>
    //         </div>
    //       )}

    //       <table border="2">
    //         <thead className="border">
    //           <tr className="row m-3 text-center">
    //             <th className="col-2">Name</th>
    //             <th className="col-4">Email</th>
    //             <th className="col-2">Age</th>
    //             <th className="col-2">Edit</th>
    //             <th className="col-2">Del</th>
    //           </tr>
    //         </thead>
    //         <tbody>
    //           {item.map((value, index) => {
    //             return (
    //               <tr key={index} className="row m-3 text-center border">
    //                 <td className="col-2">{value.name}</td>
    //                 <td className="col-4">{value.email}</td>
    //                 <td className="col-2">{value.age}</td>
    //                 <td
    //                   className="text-success col-1 ms-2 bg-black fs-5"
    //                   onClick={(e) => {
    //                     edit(e, index);
    //                   }}
    //                 >
    //                   <div className="col-sm-6 col-md-4 col-lg-3">
    //                     <i className="mdi mdi-table-edit"></i>
    //                   </div>
    //                 </td>
    //                 <td
    //                   className="text-danger col-1 align-items-center bg-black fs-5 text-end  "
    //                   onClick={(e) => {
    //                     remove(e, index);
    //                   }}
    //                 >
    //                   <div className="col-sm-6 col-md-4 col-lg-3">
    //                     <i className="mdi mdi-delete-forever"></i>
    //                   </div>
    //                 </td>
    //               </tr>
    //             );
    //           })}
    //         </tbody>
    //       </table>

    //       <button
    //         className="mt-5"
    //         onClick={(e) => {
    //           submit(e);
    //         }}
    //       >
    //         Submit
    //       </button> */}
    //     </div>
    //   </div>
    // </div>

    // ========================================================obj=====================================================================

    <div className="container-fluid page-body-wrapper">
      <div className="main-panel">
        <div className="content-wrapper">
          <div className="row">
            <div className="col-md-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    {/* <button onClick={()=>setCount( prev => count +1)}>{count}</button> */}
                    <h4 className="card-title">
                      { toggle
                        ? "Add Data"
                        : "Update Data"}
                    </h4>
                  </div>
                
                    <form className="forms-sample">
                      <p className="text-danger text-center">{error}</p>
                      <div className="form-group">
                        <label htmlFor="exampleInputUsername1">Name</label>
                        <input
                          type="text"
                          className={
                            !error && !nameError
                              ? "form-control"
                              : "form-uncontrol"
                          }
                          id="exampleInputUsername1"
                          placeholder="Enter Name"
                          name="name"
                          value={data.name}
                          onChange={eventHandler}
                        />
                        <p className="text-danger">{nameError}</p>
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email</label>
                        <input
                          type="email"
                          className={
                            !error && !emailError
                              ? "form-control"
                              : "form-uncontrol"
                          }
                          id="exampleInputEmail1"
                          placeholder="Enter Email"
                          name="email"
                          value={data.email}
                          onChange={eventHandler}
                        />
                        <p className="text-danger">{emailError}</p>
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Number</label>
                        <input
                          type="tel"
                          className={
                            !error && !numberError
                              ? "form-control"
                              : "form-uncontrol"
                          }
                          id="exampleInputEmail1"
                          placeholder="Enter Number"
                          name="number"
                          value={data.number}
                          onChange={eventHandler}
                        />
                        <p className="text-danger">{numberError}</p>
                      </div>
                      <button
                        type="submit"
                        className={
                          toggle
                            ? "btn btn-primary me-2"
                            : "btn btn-success me-2"
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
                          cancel(e);
                        }}
                      >
                        Cancel
                      </button>
                    </form>
                  
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12 stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title text-center">
                  " Object Data Destructring "
                </h4>
                <div className="table-responsive">
                  <table className="table table-bordered table-contextual">
                    <thead>
                      <tr>
                        <th> In.No </th>
                        <th> Name </th>
                        <th> Email </th>
                        <th> Number </th>
                        <th> Edit </th>
                        <th> Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {objData.map((item, index) => {
                        return (
                          <tr className=" " key={index}>
                            <td> {index} </td>
                            <td> {item.name} </td>
                            <td> {item.email}</td>
                            <td> {item.number} </td>
                            <td>
                              {" "}
                              <button
                                className="btn-success"
                                onClick={() => {
                                  edit(item.id);
                                }}
                              >
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                  <i className="mdi mdi-table-edit"></i>
                                </div>
                              </button>{" "}
                            </td>
                            <td>
                              {" "}
                              <button
                                className="btn-danger"
                                onClick={() => {
                                  del(item.id);
                                }}
                              >
                                <div className="col-sm-6 col-md-4 col-lg-3  ">
                                  <i className="mdi mdi-delete"></i>
                                </div>
                              </button>{" "}
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
  );
};

export default Add;
