import React, { useState } from "react";
import {
  Plus,
  Search,
  Trash2,
  Edit,
  BaggageClaim,
  Users,
  Download,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import "antd/dist/reset.css";
import { DatePicker } from "antd";
import moment from "moment";
const { RangePicker } = DatePicker;

const EmployeeDetails = () => {
  const Navigate = useNavigate();

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
                  Bharat Kumar
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
            <div className="col-span-12 lg:col-span-8 mt-8">
              <div className="intro-y block sm:flex items-center h-10">
                <h2 className="text-lg font-bold truncate mr-5">
                  Overall statistics - Sales Employee
                </h2>
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
            <div className="col-span-12 sm:col-span-4 mt-8">
              <div class="box p-5 mt-6 bg-primary intro-x">
                <div class="flex flex-wrap gap-3">
                  <div class="mr-auto">
                    <div class="text-white text-opacity-70 dark:text-slate-300 flex items-center leading-3">
                      Total Income
                    </div>
                    <div
                      class="text-white relative text-2xl font-medium leading-5 mt-3.5"
                      style={{ paddingLeft: "2rem" }}
                    >
                      <span class="absolute text-xl top-0 left-0 -mt-1">
                        Rs.
                      </span>
                      479,578.77
                    </div>
                  </div>
                </div>
              </div>
              <div class="report-box-4__content xl:min-h-0 intro-x">
                <div class="max-h-full xl:overflow-y-auto box mt-5">
                  <div class="xl:sticky top-0 px-5 pt-5 pb-6">
                    <div class="flex items-center">
                      <div class="text-lg font-medium truncate mr-5">
                        Employee Sales Report
                      </div>
                    </div>
                  </div>
                  <div class="tab-content px-5 pb-5">
                    <div
                      class="tab-pane grid grid-cols-12 gap-y-6 active"
                      id="weekly-report"
                      role="tabpanel"
                      aria-labelledby="weekly-report-tab"
                      style={{ width: "356px" }}
                    >
                      <div class="col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-12">
                        <div class="text-slate-500">Unpaid Loan</div>
                        <div class="mt-1.5 flex items-center">
                          <div class="text-lg">$155.430.000</div>
                          <div class="text-danger flex text-xs font-medium tooltip cursor-pointer ml-2">
                            2%
                            <ChevronDown class="lucide lucide-chevron-down w-4 h-4 ml-0.5" />
                          </div>
                        </div>
                      </div>
                      <div class="col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-12">
                        <div class="text-slate-500">Active Funding Partner</div>
                        <div class="mt-1.5 flex items-center">
                          <div class="text-lg">52 Partner</div>
                          <div class="text-success flex text-xs font-medium tooltip cursor-pointer ml-2">
                            49%
                            <ChevronUp class="lucide lucide-chevron-up w-4 h-4 ml-0.5" />
                          </div>
                        </div>
                      </div>
                      <div class="col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-12">
                        <div class="text-slate-500">Unpaid Loan</div>
                        <div class="mt-1.5 flex items-center">
                          <div class="text-lg">$155.430.000</div>
                          <div class="text-danger flex text-xs font-medium tooltip cursor-pointer ml-2">
                            2%
                            <ChevronDown class="lucide lucide-chevron-down w-4 h-4 ml-0.5" />
                          </div>
                        </div>
                      </div>
                      <div class="col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-12">
                        <div class="text-slate-500">Active Funding Partner</div>
                        <div class="mt-1.5 flex items-center">
                          <div class="text-lg">52 Partner</div>
                          <div class="text-success flex text-xs font-medium tooltip cursor-pointer ml-2">
                            49%
                            <ChevronUp class="lucide lucide-chevron-up w-4 h-4 ml-0.5" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-12 mt-6">
              <div className="intro-y block sm:flex items-center h-10">
                <h2 className="text-lg font-bold truncate mr-5">Orders</h2>
                <div className="sm:ml-auto mt-3 sm:mt-0 relative text-slate-500">
                  <Search className="lucide lucide-map-pin w-4 h-4 z-10 absolute my-auto inset-y-0 ml-3 left-0" />
                  <input
                    type="text"
                    className="form-control w-72 box pl-10"
                    placeholder="Search by Name"
                  />
                </div>
              </div>
              <div className="intro-y overflow-auto lg:overflow-visible mt-8 sm:mt-0">
                <table className="table table-report sm:mt-2">
                  <thead>
                    <tr>
                      <th className="whitespace-nowrap">CUSTOMER NAME</th>
                      <th className="whitespace-nowrap">ORDER ID</th>
                      <th className="text-center whitespace-nowrap">
                        AMOUNT (Rupee)
                      </th>
                      <th className="text-center whitespace-nowrap">
                        PAYMENT MODE
                      </th>
                      <th className="text-center whitespace-nowrap">INVOICE</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="intro-x">
                      <td>
                        <a to="" className="font-medium whitespace-nowrap">
                          Amit More
                        </a>
                      </td>
                      <td>985625896</td>
                      <td className="text-center">4999</td>
                      <td className="text-center">Online</td>
                      <td className="text-center">
                        <button className="btn">
                          <Download />
                        </button>
                      </td>
                    </tr>
                    <tr className="intro-x">
                      <td>
                        <a href="" className="font-medium whitespace-nowrap">
                          Ganesh Rajput
                        </a>
                      </td>
                      <td>452625326</td>
                      <td className="text-center">999</td>
                      <td className="text-center">COD</td>
                      <td className="text-center">
                        <button className="btn">
                          <Download />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeDetails;
