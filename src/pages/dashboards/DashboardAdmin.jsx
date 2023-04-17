import React, { useState } from "react";
import { Plus, Search, Trash2, Edit, BaggageClaim, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "antd/dist/reset.css";
import { DatePicker } from "antd";
import moment from "moment";
const { RangePicker } = DatePicker;

const DashboardAdmin = () => {
  const Navigate = useNavigate();

  const [selectedDates, setSelectedDates] = useState([]);
  const startDate = moment(selectedDates[0]?.$d).format("DD/MM/YYYY");
  const endDate = moment(selectedDates[1]?.$d).format("DD/MM/YYYY");
  console.log(selectedDates, startDate, endDate);

  return (
    <>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 mt-8">
              <div className="intro-y flex items-center h-10">
                <h2 className="text-lg font-bold truncate mr-5">
                  Dashboard Admin
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
                          Sales Employees
                        </div>
                        <div className="text-3xl font-medium leading-8 mt-6">
                          47
                        </div>
                      </div>
                      <div className="flex">
                        <Users className="w-12 h-12 text-primary" />
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
                          Customers
                        </div>
                        <div className="text-3xl font-medium leading-8 mt-6">
                          321
                        </div>
                      </div>
                      <div className="flex">
                        <Users className="w-12 h-12 text-primary" />
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
                          Orders
                        </div>
                        <div className="text-3xl font-medium leading-8 mt-6">
                          214
                        </div>
                      </div>
                      <div className="flex">
                        <BaggageClaim className="w-12 h-12 text-primary" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6 mt-8">
              <div className="intro-y block sm:flex items-center h-10">
                <h2 className="text-lg font-bold truncate mr-5">
                  Overall statistics - Sales Employee
                </h2>
                <div className="sm:ml-auto mt-3 sm:mt-0 relative text-slate-500">
                  <i
                    data-lucide="calendar"
                    className="w-4 h-4 z-10 absolute my-auto inset-y-0 ml-3 left-0"
                  ></i>
                  <input
                    type="text"
                    className="datepicker form-control sm:w-56 box pl-10"
                  />
                </div>
              </div>
              <div className="intro-y box p-5 mt-12 sm:mt-5">
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="flex">
                    <div>
                      <div className="text-primary dark:text-slate-300 text-lg xl:text-xl font-medium">
                        $15,000
                      </div>
                      <div className="mt-0.5 text-slate-500">This Month</div>
                    </div>
                    <div className="w-px h-12 border border-r border-dashed border-slate-200 dark:border-darkmode-300 mx-4 xl:mx-5"></div>
                    <div>
                      <div className="text-slate-500 text-lg xl:text-xl font-medium">
                        $10,000
                      </div>
                      <div className="mt-0.5 text-slate-500">Last Month</div>
                    </div>
                  </div>
                  <div className="dropdown md:ml-auto mt-5 md:mt-0">
                    <button
                      className="dropdown-toggle btn btn-outline-secondary font-normal"
                      aria-expanded="false"
                      data-tw-toggle="dropdown"
                    >
                      Filter by Category
                      <i
                        data-lucide="chevron-down"
                        className="w-4 h-4 ml-2"
                      ></i>
                    </button>
                    <div className="dropdown-menu w-40">
                      <ul className="dropdown-content overflow-y-auto h-32">
                        <li>
                          <a href="" className="dropdown-item">
                            PC & Laptop
                          </a>
                        </li>
                        <li>
                          <a href="" className="dropdown-item">
                            Smartphone
                          </a>
                        </li>
                        <li>
                          <a href="" className="dropdown-item">
                            Electronic
                          </a>
                        </li>
                        <li>
                          <a href="" className="dropdown-item">
                            Photography
                          </a>
                        </li>
                        <li>
                          <a href="" className="dropdown-item">
                            Sport
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="report-chart">
                  <div className="h-[275px]">
                    <canvas
                      id="report-line-chart"
                      className="mt-6 -mb-6"
                    ></canvas>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 lg:col-span-3 mt-8">
              <div className="intro-y flex items-center h-10">
                <h2 className="text-lg font-bold truncate mr-5">Total Sales</h2>
              </div>
              <div className="intro-y box p-5 mt-5">
                <div className="mt-3">
                  <div className="h-[213px]">
                    <canvas id="report-pie-chart"></canvas>
                  </div>
                </div>
                <div className="w-52 sm:w-auto mx-auto mt-8">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="truncate">17 - 30 Years old</span>
                    <span className="font-medium ml-auto">62%</span>
                  </div>
                  <div className="flex items-center mt-4">
                    <div className="w-2 h-2 bg-pending rounded-full mr-3"></div>
                    <span className="truncate">31 - 50 Years old</span>
                    <span className="font-medium ml-auto">33%</span>
                  </div>
                  <div className="flex items-center mt-4">
                    <div className="w-2 h-2 bg-warning rounded-full mr-3"></div>
                    <span className="truncate"> 50 Years old</span>
                    <span className="font-medium ml-auto">10%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 lg:col-span-3 mt-8">
              <div className="intro-y flex items-center h-10">
                <h2 className="text-lg font-bold truncate mr-5">
                  Revenue Report
                </h2>
              </div>
              <div className="intro-y box p-5 mt-5">
                <div className="mt-3">
                  <div className="h-[213px]">
                    <canvas id="report-donut-chart"></canvas>
                  </div>
                </div>
                <div className="w-52 sm:w-auto mx-auto mt-8">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="truncate">17 - 30 Years old</span>
                    <span className="font-medium ml-auto">62%</span>
                  </div>
                  <div className="flex items-center mt-4">
                    <div className="w-2 h-2 bg-pending rounded-full mr-3"></div>
                    <span className="truncate">31 - 50 Years old</span>
                    <span className="font-medium ml-auto">33%</span>
                  </div>
                  <div className="flex items-center mt-4">
                    <div className="w-2 h-2 bg-warning rounded-full mr-3"></div>
                    <span className="truncate">50 Years old</span>
                    <span className="font-medium ml-auto">10%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 mt-6">
              <div className="intro-y block sm:flex items-center h-10">
                <h2 className="text-lg font-bold truncate mr-5">
                  Sales Employees
                </h2>
                <div className="sm:ml-auto mt-3 sm:mt-0 relative text-slate-500">
                  <Search className="lucide lucide-map-pin w-4 h-4 z-10 absolute my-auto inset-y-0 ml-3 left-0" />
                  <input
                    type="text"
                    className="form-control w-72 box pl-10"
                    placeholder="Search by Name"
                  />
                </div>
                <div className="flex items-center sm:ml-auto mt-3 sm:mt-0">
                  <button
                    className="btn btn-primary"
                    onClick={() => Navigate("/add/sales-employee")}
                  >
                    <Plus className="lucide lucide-activity w-4 h-4 mr-2" />
                    Add Sales Employee
                  </button>
                </div>
              </div>
              <div className="intro-y overflow-auto lg:overflow-visible mt-8 sm:mt-0">
                <table className="table table-report sm:mt-2">
                  <thead>
                    <tr>
                      <th className="whitespace-nowrap">FULL NAME</th>
                      <th className="whitespace-nowrap">EMAIL</th>
                      <th className="whitespace-nowrap">GENDER</th>
                      <th className="text-center whitespace-nowrap">
                        CONTACT NUMBER
                      </th>
                      <th className="text-center whitespace-nowrap">
                        TOTAL SALES
                      </th>
                      <th className="text-center whitespace-nowrap">STATUS</th>
                      <th className="text-center whitespace-nowrap">ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="intro-x">
                      <td>
                        <a href="" className="font-medium whitespace-nowrap">
                          Buildnetic
                        </a>
                      </td>
                      <td>krishna22@gmail.com</td>
                      <td>Male</td>
                      <td className="text-center">88</td>
                      <td className="text-center">88</td>
                      <td className="w-40">
                        <div className="flex items-center justify-center text-success">
                          Active
                        </div>
                      </td>
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
                          Digiconnekt
                        </a>
                      </td>
                      <td>krishna22@gmail.com</td>
                      <td>Male</td>
                      <td className="text-center">88</td>
                      <td className="text-center">88</td>
                      <td className="w-40">
                        <div className="flex items-center justify-center text-success">
                          Active
                        </div>
                      </td>
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

export default DashboardAdmin;
