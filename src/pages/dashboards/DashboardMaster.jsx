import React, { useEffect, useState } from "react";
import { Plus, Search, Trash2, Edit } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { DashboardTitleAndDate, DashboardTopCard } from "../../components";
import axiosInstance from "../../API/InstanceAPI";
import { toast } from "react-toastify";

const DashboardMaster = () => {
  const Navigate = useNavigate();
  const { loggedUser } = useSelector((state) => state.user);

  const [companiesList, setCompaniesList] = useState([]);
  const companiesListHandler = async () => {
    try {
      const res = await axiosInstance.get("/companies", {
        headers: {
          Authorization: `Bearer ${loggedUser.data.token}`,
        },
      });
      setCompaniesList(res.data);
    } catch (error) {
      console.log(
        "🚀 ~ file: DashboardMaster.jsx:18 ~ companiesListHandler ~ error:",
        error
      );
    }
  };

  const deleteCompany = async (company) => {
    const confirmation = window.confirm(
      "Are you sure you want to delete the Company?"
    );

    if (confirmation) {
      try {
        await toast.promise(
          axiosInstance.delete(`/companies/${company}`, {
            headers: {
              Authorization: `Bearer ${loggedUser.data.token}`,
            },
          }),
          {
            pending: "Deleting Company",
            success: "Company deleted successfully!",
            error: "Failed to delete company.",
          }
        );

        window.location.reload();
      } catch (error) {
        console.log(
          "🚀 ~ file: DashboardMaster.jsx:33 ~ deleteCompany ~ error:",
          error
        );
      }
    }
  };

  useEffect(() => {
    if (loggedUser?.data?.role === "super-admin") {
      Navigate("/super");
    } else if (loggedUser?.data?.role === "admin") {
      Navigate("/admin");
    }

    companiesListHandler();
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
                    {companiesList.map((elem, i) => (
                      <tr className="intro-x" key={i}>
                        <td>
                          <NavLink
                            to="/super"
                            className="font-medium whitespace-nowrap"
                          >
                            {elem.name}
                          </NavLink>
                        </td>
                        <td>{elem.company_email}</td>
                        <td className="text-center">{elem.contact_number}</td>
                        <td className="text-center">88</td>
                        <td className="w-40">
                          {elem.status === 1 ? (
                            <div className="flex items-center justify-center text-success">
                              Active
                            </div>
                          ) : (
                            <div className="flex items-center justify-center text-danger">
                              Inactive
                            </div>
                          )}
                        </td>
                        <td className="table-report__action w-56">
                          <div className="flex justify-center items-center">
                            <NavLink
                              to={`/edit/company/${elem.id}`}
                              className="flex items-center mr-3"
                              title="Edit"
                            >
                              <Edit className="w-4 h-4 mr-1" />
                            </NavLink>
                            <div
                              className="flex items-center text-danger"
                              title="Delete"
                              style={{ cursor: "pointer" }}
                              onClick={() => deleteCompany(elem.id)}
                            >
                              <Trash2 className="w-4 h-4 mr-1" />
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
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
