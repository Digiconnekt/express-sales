import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axiosInstance from "../../API/InstanceAPI";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

const EditCompany = () => {
  const { id } = useParams();
  const Navigate = useNavigate();
  const { loggedUser } = useSelector((state) => state.user);
  const [data, setData] = useState({});

  const onChangeHandler = (e) => {
    const handlerName = e.target.name;
    const handlerValue = e.target.value;

    setData(() => ({
      ...data,
      [handlerName]: handlerValue,
    }));
  };

  const getData = async () => {
    try {
      const res = await axiosInstance.get(`/companies/${id}`, {
        headers: {
          Authorization: `Bearer ${loggedUser.data.token}`,
        },
      });
      setData(res.data);
    } catch (error) {
      console.log("🚀 ~ file: EditCompany.jsx:37 ~ getData ~ error:", error);
    }
  };

  const formUpdateHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await toast.promise(
        axiosInstance.put(`/companies/${id}`, data, {
          headers: {
            Authorization: `Bearer ${loggedUser.data.token}`,
          },
        }),
        {
          pending: "Updating a Company",
          success: "Company updated Successfully!",
          error: "Falied to update Company.",
        }
      );
      Navigate("/");
      console.log("🚀 ~ file: AddCompany.jsx:35 ~ res ~ res:", res);
    } catch (error) {
      console.log(
        "🚀 ~ file: AddCompany.jsx:33 ~ formSubmitHandler ~ error:",
        error
      );
    }
  };

  useEffect(() => {
    getData();
  }, [id]);

  return (
    <>
      <div className="intro-y flex items-center mt-8">
        <h2 className="text-lg font-medium mr-auto">Add a Company</h2>
      </div>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="intro-y col-span-12 lg:col-span-6">
          <div className="intro-y box">
            <div id="form-validation" className="p-5">
              <div className="preview">
                <form className="validate-form" onSubmit={formUpdateHandler}>
                  <div className="input-form">
                    <label
                      htmlFor="name"
                      className="form-label w-full flex flex-col sm:flex-row"
                    >
                      Company Name
                      <span className="sm:ml-auto mt-1 sm:mt-0 text-xs text-slate-500">
                        Required, at least 2 characters
                      </span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Company Name"
                      minLength="2"
                      required
                      value={data.name || ""}
                      onChange={onChangeHandler}
                    />
                  </div>
                  <div className="input-form mt-3">
                    <label
                      htmlFor="company_email"
                      className="form-label w-full flex flex-col sm:flex-row"
                    >
                      Company Email
                      <span className="sm:ml-auto mt-1 sm:mt-0 text-xs text-slate-500">
                        Required, email address format
                      </span>
                    </label>
                    <input
                      id="company_email"
                      type="email"
                      name="company_email"
                      className="form-control"
                      placeholder="example@gmail.com"
                      required
                      value={data.company_email || ""}
                      onChange={onChangeHandler}
                    />
                  </div>
                  <div className="input-form mt-3">
                    <label
                      htmlFor="contact_email"
                      className="form-label w-full flex flex-col sm:flex-row"
                    >
                      Contact Email
                      <span className="sm:ml-auto mt-1 sm:mt-0 text-xs text-slate-500">
                        Required, email address format
                      </span>
                    </label>
                    <input
                      id="contact_email"
                      type="email"
                      name="contact_email"
                      className="form-control"
                      placeholder="example@gmail.com"
                      required
                      value={data.contact_email || ""}
                      onChange={onChangeHandler}
                    />
                  </div>
                  <div className="input-form mt-3">
                    <label
                      htmlFor="contact_number"
                      className="form-label w-full flex flex-col sm:flex-row"
                    >
                      Contact Number
                      <span className="sm:ml-auto mt-1 sm:mt-0 text-xs text-slate-500">
                        Required
                      </span>
                    </label>
                    <input
                      id="contact_number"
                      type="text"
                      name="contact_number"
                      className="form-control"
                      placeholder="83669485226"
                      required
                      value={data.contact_number || ""}
                      onChange={onChangeHandler}
                    />
                  </div>
                  <div className="input-form mt-3">
                    <label
                      htmlFor="password"
                      className="form-label w-full flex flex-col sm:flex-row"
                    >
                      Password
                      <span className="sm:ml-auto mt-1 sm:mt-0 text-xs text-slate-500">
                        Required
                      </span>
                    </label>
                    <input
                      id="password"
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Password"
                      required
                      value={data.password || ""}
                      onChange={onChangeHandler}
                    />
                  </div>
                  <div className="input-form mt-3">
                    <label
                      htmlFor="gst_number"
                      className="form-label w-full flex flex-col sm:flex-row"
                    >
                      GST Number
                      <span className="sm:ml-auto mt-1 sm:mt-0 text-xs text-slate-500">
                        Required
                      </span>
                    </label>
                    <input
                      id="gst_number"
                      type="text"
                      name="gst_number"
                      className="form-control"
                      placeholder="829257267556"
                      required
                      value={data.gst_number || ""}
                      onChange={onChangeHandler}
                    />
                  </div>
                  <div className="input-form mt-3">
                    <label
                      htmlFor="location"
                      className="form-label w-full flex flex-col sm:flex-row"
                    >
                      Location
                      <span className="sm:ml-auto mt-1 sm:mt-0 text-xs text-slate-500">
                        Required
                      </span>
                    </label>
                    <textarea
                      id="location"
                      className="form-control"
                      name="location"
                      placeholder="Location"
                      required
                      value={data.location || ""}
                      onChange={onChangeHandler}
                    ></textarea>
                  </div>
                  <div className="input-form mt-3">
                    <label>Status</label>
                    <div className="flex flex-col sm:flex-row mt-2">
                      <div className="form-check mr-2">
                        <input
                          id="active"
                          className="form-check-input"
                          type="radio"
                          name="status"
                          value="1"
                          required
                          onChange={onChangeHandler}
                        />
                        <label className="form-check-label" htmlFor="active">
                          Active
                        </label>
                      </div>
                      <div className="form-check mr-2 mt-2 sm:mt-0">
                        <input
                          id="inactive"
                          className="form-check-input"
                          type="radio"
                          name="status"
                          value="0"
                          required
                          onChange={onChangeHandler}
                        />
                        <label className="form-check-label" htmlFor="inactive">
                          Inactive
                        </label>
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary mt-5">
                    Update Company
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditCompany;
