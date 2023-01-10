import React, { useState,useEffect } from "react";
const initialvalue = {
  name: "",
  email: "",
  number: "",
  gender: "",
  city: "",
};
const Form = () => {
  const [field, setField] = useState(initialvalue);
  const [ischecked, setIsChecked] = useState([]);

  const eventHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const type = e.target.type;
    const checked = e.target.checked;


    setField((prev) => {
      return { ...prev, [name]: value };

      
    //   type === "checkbox" ? ischecked 
    });
  
    if(checked)
    {
        setIsChecked((prev)=>{
            return [
            ...prev ,value
        ]})

    }
    else{
        setIsChecked((prev)=>{
            return [...prev.filter(current => current !== value)]
        })
    }
  };
  useEffect(() => {
    console.log("hobbyChecked : ", ischecked)
  }, [ischecked])
  
  const submit = (e) => {
    e.preventDefault();
    console.log("form ", field);
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
                  <form className="forms-sample">
                    <div className="form-group">
                      <label htmlFor="exampleInputUsername1">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputUsername1"
                        placeholder="Enter Name"
                        name="name"
                        value={field.name}
                        onChange={eventHandler}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputUsername1">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputUsername1"
                        placeholder="Enter Name"
                        name="email"
                        value={field.email}
                        onChange={eventHandler}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputUsername1">Number</label>
                      <input
                        type="number"
                        className="form-control"
                        id="exampleInputUsername1"
                        placeholder="Enter Name"
                        name="number"
                        value={field.number}
                        onChange={eventHandler}
                      />
                    </div>
                    <div>
                      <div className="form-group">
                        <label>File upload</label>
                        <input
                          type="file"
                          name="img[]"
                          className="file-upload-default"
                          value={field.file}
                          onChange={eventHandler}
                        />
                        <div className="input-group col-xs-12">
                          <input
                            type="text"
                            className="form-control file-upload-info"
                            disabled
                            placeholder="Upload Image"
                          />
                          <span className="input-group-append">
                            <button
                              className="file-upload-browse btn btn-primary"
                              type="button"
                            >
                              Upload
                            </button>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleFormControlSelect1">Select City</label>
                      <select
                        className="form-control form-control-lg"
                        id="exampleFormControlSelect1"
                        name="city"
                        value={field.city}
                        onChange={eventHandler}
                      >
                        <option>Surat</option>
                        <option>Ahemdabad</option>
                        <option>Bardoli</option>
                        <option>Navsari</option>
                        <option>Vapi</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1">
                          Hobby
                        </label>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              name="Hobby"
                              value="Reading"
                              onChange={eventHandler}
                            />{" "}
                            Reading{" "}
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              name="Hobby"
                              value="Travelling"
                              onChange={eventHandler}
                            />{" "}
                            Travelling
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              name="Hobby"
                              value="Racing"
                              onChange={eventHandler}
                            />{" "}
                            Racing
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              name="Hobby"
                              value="Watching"
                              onChange={eventHandler}
                            />{" "}
                            Watching
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group"></div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label htmlFor="exampleFormControlSelect1">
                          Gender
                        </label>
                        <div className="col-sm-4 col-lg-4">
                          <div className="form-check">
                            <label className="form-check-label">
                              <input
                                type="radio"
                                className="form-check-input"
                                name="gender"
                                value="Male"
                                onChange={eventHandler}
                                id="membershipRadios1"
                              />{" "}
                              Male
                            </label>
                          </div>
                        </div>
                        <div className="col-sm-5 col-lg-4">
                          <div className="form-check">
                            <label className="form-check-label">
                              <input
                                type="radio"
                                className="form-check-input"
                                name="gender"
                                value="Female"
                                onChange={eventHandler}
                                id="membershipRadios2"
                              />{" "}
                              Female
                            </label>
                          </div>
                        </div>
                        <div className="col-sm-3 col-lg-4">
                          <div className="form-check">
                            <label className="form-check-label">
                              <input
                                type="radio"
                                className="form-check-input"
                                name="gender"
                                value="Other"
                                onChange={eventHandler}
                                id="membershipRadios2"
                              />{" "}
                              Other
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary me-2"
                      onClick={(e) => {
                        submit(e);
                      }}
                    >
                      Submit
                    </button>
                    <button className="btn btn-dark">Cancel</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
