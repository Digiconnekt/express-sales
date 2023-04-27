import React, { useEffect } from "react";
import { Plus, Search, Trash2, Edit } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { DashboardTitleAndDate, DashboardTopCard } from "../../components";

const DashboardMaster = () => {
  const { loggedUser } = useSelector((state) => state.user);
  const Navigate = useNavigate();

  useEffect(() => {
    if (loggedUser?.data?.role === "super-admin") {
      Navigate("/super");
    } else if (loggedUser?.data?.role === "admin") {
      Navigate("/admin");
    }
  }, []);

  return (
    <>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 mt-8">
              <DashboardTitleAndDate title="Master Dashboard" />
              <div className="grid grid-cols-12 gap-6 mt-5">
                <DashboardTopCard
                  title="Total Company"
                  value={loggedUser.home["Total Company"]}
                  icon="building2"
                />
                <DashboardTopCard
                  title="Total Sales"
                  value={loggedUser.home["Total Sales"]}
                  icon="tags"
                />
                <DashboardTopCard
                  title="Total Income"
                  value={`$ ${loggedUser.home["Total Income"]}`}
                  icon="wallet"
                />
              </div>
            </div>
            <div className="col-span-12 mt-6">
              <div className="intro-y block sm:flex items-center h-10">
                <h2 className="text-lg font-bold truncate mr-5">Company</h2>
                <div className="sm:ml-auto mt-3 sm:mt-0 relative text-slate-500">
                  <Search className="lucide lucide-map-pin w-4 h-4 z-10 absolute my-auto inset-y-0 ml-3 left-0" />
                  <input
                    type="text"
                    className="form-control w-72 box pl-10"
                    placeholder="Search by Company"
                  />
                </div>

                <div className="flex items-center sm:ml-auto mt-3 sm:mt-0">
                  <button
                    className="btn btn-primary"
                    onClick={() => Navigate("/add/company")}
                  >
                    <Plus className="lucide lucide-activity w-4 h-4 mr-2" />
                    Add Company
                  </button>
                </div>
              </div>
              <div className="intro-y overflow-auto lg:overflow-visible mt-8 sm:mt-0">
                <table className="table table-report sm:mt-2">
                  <thead>
                    <tr>
                      <th className="whitespace-nowrap">COMPANY NAME</th>
                      <th className="whitespace-nowrap">EMAIL</th>
                      <th className="text-center whitespace-nowrap">
                        CONTACT NUMBER
                      </th>
                      <th className="text-center whitespace-nowrap">
                        TOTAL ORDER
                      </th>
                      <th className="text-center whitespace-nowrap">STATUS</th>
                      <th className="text-center whitespace-nowrap">ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="intro-x">
                      <td>
                        <NavLink
                          to="/super"
                          className="font-medium whitespace-nowrap"
                        >
                          Buildnetic
                        </NavLink>
                      </td>
                      <td>krishna22@gmail.com</td>
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

export default DashboardMaster;
