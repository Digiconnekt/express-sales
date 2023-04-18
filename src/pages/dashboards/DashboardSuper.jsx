import React, { useEffect, useState } from "react";
import {
  Tags,
  Wallet,
  Plus,
  Search,
  Trash2,
  Edit,
  Warehouse,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import "antd/dist/reset.css";
import { DatePicker } from "antd";
import moment from "moment";
import { useSelector } from "react-redux";
const { RangePicker } = DatePicker;

const DashboardSuper = () => {
  const { loggedUser } = useSelector((state) => state.user);
  const Navigate = useNavigate();

  useEffect(() => {
    if (loggedUser.email === "admin@gmail.com") {
      Navigate("/admin");
    }
  }, []);

  const today = new Date().toLocaleDateString("en-GB");
  const [selectedDates, setSelectedDates] = useState([]);
  const startDate =
    selectedDates !== null
      ? moment(selectedDates[0]?.$d).format("DD/MM/YYYY")
      : today;
  const endDate =
    selectedDates !== null
      ? moment(selectedDates[1]?.$d).format("DD/MM/YYYY")
      : today;
  console.log(selectedDates, startDate, endDate);

  return (
    <>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 mt-8">
              <div className="intro-y flex items-center h-10">
                <h2 className="text-lg font-bold truncate mr-5">
                  Dashboard Super
                </h2>

                <div className="sm:ml-auto">
                  <RangePicker
                    className="pt-2 pb-2 box"
                    onChange={(val) => setSelectedDates(val)}
                  />
                </div>
              </div>
              <div className="grid grid-cols-12 gap-6 mt-5">
                <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                  <div className="report-box zoom-in">
                    <div
                      className="flex items-center box p-5"
                      style={{ justifyContent: "space-around" }}
                    >
                      <div>
                        <div className="text-base text-slate-500 mt-1">
                          Total Stores
                        </div>
                        <div className="text-3xl font-medium leading-8 mt-6">
                          47
                        </div>
                      </div>
                      <div className="flex">
                        <Warehouse className="w-12 h-12 text-primary" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                  <div className="report-box zoom-in">
                    <div
                      className="flex items-center box p-5"
                      style={{ justifyContent: "space-around" }}
                    >
                      <div>
                        <div className="text-base text-slate-500 mt-1">
                          Total Sales
                        </div>
                        <div className="text-3xl font-medium leading-8 mt-6">
                          321
                        </div>
                      </div>
                      <div className="flex">
                        <Tags className="w-12 h-12 text-primary" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                  <div className="report-box zoom-in">
                    <div
                      className="flex items-center box p-5"
                      style={{ justifyContent: "space-around" }}
                    >
                      <div>
                        <div className="text-base text-slate-500 mt-1">
                          Total Income
                        </div>
                        <div className="text-3xl font-medium leading-8 mt-6">
                          $ 214
                        </div>
                      </div>
                      <div className="flex">
                        <Wallet className="w-12 h-12 text-primary" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 mt-6">
              <div className="intro-y block sm:flex items-center h-10">
                <h2 className="text-lg font-bold truncate mr-5">Stores</h2>
                <div className="sm:ml-auto mt-3 sm:mt-0 relative text-slate-500">
                  <Search className="lucide lucide-map-pin w-4 h-4 z-10 absolute my-auto inset-y-0 ml-3 left-0" />
                  <input
                    type="text"
                    className="form-control w-72 box pl-10"
                    placeholder="Search by Store"
                  />
                </div>

                <div className="flex items-center sm:ml-auto mt-3 sm:mt-0">
                  <button
                    className="btn btn-primary"
                    onClick={() => Navigate("/add/store")}
                  >
                    <Plus className="lucide lucide-activity w-4 h-4 mr-2" />
                    Add Store
                  </button>
                </div>
              </div>
              <div className="intro-y overflow-auto lg:overflow-visible mt-8 sm:mt-0">
                <table className="table table-report sm:mt-2">
                  <thead>
                    <tr>
                      <th className="whitespace-nowrap">STORE NAME</th>
                      <th className="whitespace-nowrap">EMAIL</th>
                      <th className="text-center whitespace-nowrap">
                        CONTACT NUMBER
                      </th>
                      <th className="text-center whitespace-nowrap">SALES</th>
                      <th className="text-center whitespace-nowrap">TOTAL</th>
                      <th className="text-center whitespace-nowrap">ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="intro-x">
                      <td>
                        <NavLink
                          to="/admin"
                          className="font-medium whitespace-nowrap"
                        >
                          Store 1
                        </NavLink>
                      </td>
                      <td>krishna22@gmail.com</td>
                      <td className="text-center">88</td>
                      <td className="text-center">88</td>
                      <td className="text-center">88</td>
                      <td className="table-report__action w-56">
                        <div className="flex justify-center items-center">
                          <a className="flex items-center mr-3" href="">
                            <Edit className="w-4 h-4 mr-1" />
                            Edit
                          </a>
                          <a className="flex items-center text-danger" href="">
                            <Trash2 className="w-4 h-4 mr-1" />
                            Delete
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr className="intro-x">
                      <td>
                        <a href="" className="font-medium whitespace-nowrap">
                          Store 2
                        </a>
                      </td>
                      <td>krishna22@gmail.com</td>
                      <td className="text-center">88</td>
                      <td className="text-center">88</td>
                      <td className="text-center">88</td>
                      <td className="table-report__action w-56">
                        <div className="flex justify-center items-center">
                          <a className="flex items-center mr-3" href="">
                            <Edit className="w-4 h-4 mr-1" />
                            Edit
                          </a>
                          <a className="flex items-center text-danger" href="">
                            <Trash2 className="w-4 h-4 mr-1" />
                            Delete
                          </a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* <div className="intro-y flex flex-wrap sm:flex-row sm:flex-nowrap items-center mt-3">
                <nav className="w-full sm:w-auto sm:mr-auto">
                  <ul className="pagination">
                    <li className="page-item">
                      <a className="page-link" href="#">
                        <i className="w-4 h-4" data-lucide="chevrons-left"></i>
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        <i className="w-4 h-4" data-lucide="chevron-left"></i>
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        ...
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        ...
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        <i className="w-4 h-4" data-lucide="chevron-right"></i>
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        <i className="w-4 h-4" data-lucide="chevrons-right"></i>
                      </a>
                    </li>
                  </ul>
                </nav>
                <select className="w-20 form-select box mt-3 sm:mt-0">
                  <option>10</option>
                  <option>25</option>
                  <option>35</option>
                  <option>50</option>
                </select>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardSuper;
