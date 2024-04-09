import _ from "lodash";
import clsx from "clsx";
import Lucide from "../../base-components/Lucide";
import Table from "../../base-components/Table";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Menu } from "../../base-components/Headless";
import Button from "../../base-components/Button";
import DeleteAlert from "../../components/Modals/DeleteAlert";
import EditModal from "../../components/Modals/Edit";
import { FormInput } from "../../base-components/Form";
import AddOrEditCompany from "../../components/Company/AddOrEditCompany";

import useShowCompany from "../../apis/company/Show";
import useDeleteCompany from "../../apis/company/Delete";
import useUpdateCompany from "../../apis/company/Update";
import useAllCompanies from "../../apis/company/Companies";

import useAllStores from "../../apis/store/Stores";

function Main() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  if (user && user.role === "master") {
    const [showDeleteAlert, setShowDeleteAlert] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedId, setSelectedId] = useState(null);

    const {
      allCompaniesReq,
      data: dataAllCompanies,
      isLoading: isLoadingAllCompanies,
      reFetch: reFetchAllCompanies,
    } = useAllCompanies();

    const {
      deleteCompanyReq,
      data: dataDeleteCompany,
      isLoading: isLoadingDeleteCompany,
    } = useDeleteCompany();

    const {
      allStoresReq,
      data: dataAllStores,
      isLoading: isLoadingAllStores,
    } = useAllStores();

    const {
      showCompanyReq,
      data: dataShowCompany,
      isLoading: isLoadingShowCompany,
    } = useShowCompany();

    const {
      updateCompanyReq,
      data: dataUpdateCompany,
      error: errorUpdateCompany,
      isLoading: isLoadingUpdateCompany,
    } = useUpdateCompany();

    useEffect(() => {
      allCompaniesReq();
      allStoresReq();
    }, []);

    const deleteHandler = (id) => {
      setShowDeleteAlert(true);
      setSelectedId(id);
    };

    const editModalHandler = (id) => {
      setShowEditModal(true);
      setSelectedId(id);
    };

    return (
      <>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12">
            <div className="grid grid-cols-12 gap-6">
              {/* BEGIN: General Report */}
              <div className="col-span-12 mt-8">
                <div className="grid grid-cols-12 gap-6 mt-5">
                  <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                    <div
                      className={clsx([
                        "relative zoom-in",
                        "before:content-[''] before:w-[90%] before:shadow-[0px_3px_20px_#0000000b] before:bg-slate-50 before:h-full before:mt-3 before:absolute before:rounded-md before:mx-auto before:inset-x-0 before:dark:bg-darkmode-400/70",
                      ])}
                    >
                      <div className="p-5 box">
                        <div className="flex">
                          <Lucide
                            icon="ShoppingCart"
                            className="w-[28px] h-[28px] text-primary"
                          />
                        </div>
                        <div className="mt-6 text-3xl font-medium leading-8">
                          {isLoadingAllCompanies ? (
                            <>loading...</>
                          ) : (
                            dataAllCompanies?.data?.length
                          )}
                        </div>
                        <div className="mt-1 text-base text-slate-500">
                          Companies
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                    <div
                      className={clsx([
                        "relative zoom-in",
                        "before:content-[''] before:w-[90%] before:shadow-[0px_3px_20px_#0000000b] before:bg-slate-50 before:h-full before:mt-3 before:absolute before:rounded-md before:mx-auto before:inset-x-0 before:dark:bg-darkmode-400/70",
                      ])}
                    >
                      <div className="p-5 box">
                        <div className="flex">
                          <Lucide
                            icon="CreditCard"
                            className="w-[28px] h-[28px] text-pending"
                          />
                        </div>
                        <div className="mt-6 text-3xl font-medium leading-8">
                          {isLoadingAllStores ? (
                            <>loading...</>
                          ) : (
                            dataAllStores?.data?.length
                          )}
                        </div>
                        <div className="mt-1 text-base text-slate-500">
                          Stores
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* END: General Report */}

              {/* BEGIN: Companies */}
              <div className="col-span-12 mt-6">
                <div className="flex flex-wrap items-center col-span-12 mt-2 intro-y sm:flex-nowrap">
                  <div className="w-56 text-slate-500">
                    <h2 className="text-lg font-semibold">
                      Total Companies - {dataAllCompanies?.data?.length}
                    </h2>
                  </div>

                  <div className="hidden mx-auto md:block text-slate-500">
                    <FormInput
                      type="text"
                      className="w-56 pr-10 !box"
                      placeholder="Search..."
                    />
                    <Lucide
                      icon="Search"
                      className="absolute inset-y-0 right-0 w-4 h-4 my-auto mr-3"
                    />
                  </div>
                  <div className="w-full mt-3 sm:w-auto sm:mt-0 sm:ml-auto md:ml-0">
                    <Button
                      variant="primary"
                      className="mr-2 shadow-md"
                      onClick={() => navigate("/company/create")}
                    >
                      Add New Company
                    </Button>
                  </div>
                </div>
                <div
                  className="mt-8 overflow-auto intro-y lg:overflow-visible sm:mt-0"
                  style={{ overflowX: "auto" }}
                >
                  {isLoadingAllCompanies ? (
                    <>loading...</>
                  ) : (
                    <Table className="border-spacing-y-[10px] border-separate sm:mt-2">
                      <Table.Thead>
                        <Table.Tr>
                          <Table.Th className="border-b-0 whitespace-nowrap">
                            COMPANY NAME
                          </Table.Th>
                          <Table.Th className="text-center border-b-0 whitespace-nowrap">
                            COMPANY EMAIL
                          </Table.Th>
                          <Table.Th className="text-center border-b-0 whitespace-nowrap">
                            CONTACT EMAIL
                          </Table.Th>
                          <Table.Th className="text-center border-b-0 whitespace-nowrap">
                            GST NO.
                          </Table.Th>
                          <Table.Th className="text-center border-b-0 whitespace-nowrap">
                            LOCATION
                          </Table.Th>
                          <Table.Th className="text-center border-b-0 whitespace-nowrap">
                            STATUS
                          </Table.Th>
                          <Table.Th className="text-center border-b-0 whitespace-nowrap">
                            ACTIONS
                          </Table.Th>
                        </Table.Tr>
                      </Table.Thead>
                      <Table.Tbody>
                        {dataAllCompanies?.data?.map((company, i) => (
                          <Table.Tr key={i} className="intro-x">
                            <Table.Td className="first:rounded-l-md last:rounded-r-md bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                              <Link
                                to={`/company/${company.id}`}
                                className="font-medium whitespace-nowrap"
                              >
                                {company?.name ? company?.name : "NA"}
                              </Link>
                            </Table.Td>
                            <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                              {company?.company_email
                                ? company?.company_email
                                : "NA"}
                            </Table.Td>
                            <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                              {company?.contact_email
                                ? company?.contact_email
                                : "NA"}
                            </Table.Td>
                            <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                              {company?.gst_number ? company?.gst_number : "NA"}
                            </Table.Td>
                            <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                              {company?.location ? company?.location : "NA"}
                            </Table.Td>
                            <Table.Td className="first:rounded-l-md last:rounded-r-md w-40 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                              <div
                                className={clsx([
                                  "flex items-center justify-center",
                                  { "text-success": company?.status === 1 },
                                  { "text-danger": company?.status === 2 },
                                ])}
                              >
                                {company?.status === 1 ? "Active" : "Inactive"}
                              </div>
                            </Table.Td>
                            <Table.Td className="first:rounded-l-md last:rounded-r-md w-56 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b] py-0 relative before:block before:w-px before:h-8 before:bg-slate-200 before:absolute before:left-0 before:inset-y-0 before:my-auto before:dark:bg-darkmode-400">
                              <Menu>
                                <Menu.Button as={Button} variant="">
                                  <Lucide
                                    icon="MoreVertical"
                                    className="block mx-auto"
                                  />
                                </Menu.Button>
                                <Menu.Items className="w-48">
                                  <Menu.Item
                                    onClick={() =>
                                      editModalHandler(company?.id)
                                    }
                                  >
                                    <Lucide
                                      icon="Edit2"
                                      className="w-4 h-4 mr-2"
                                    />
                                    Edit
                                  </Menu.Item>
                                  <Menu.Item
                                    onClick={() => deleteHandler(company?.id)}
                                  >
                                    <Lucide
                                      icon="Trash"
                                      className="w-4 h-4 mr-2"
                                    />
                                    Delete
                                  </Menu.Item>
                                </Menu.Items>
                              </Menu>
                            </Table.Td>
                          </Table.Tr>
                        ))}
                      </Table.Tbody>
                    </Table>
                  )}
                </div>
              </div>
              {/* END: Companies */}
            </div>
          </div>
        </div>

        <DeleteAlert
          selectedId={selectedId}
          setSelectedId={setSelectedId}
          open={showDeleteAlert}
          setOpen={setShowDeleteAlert}
          data={dataDeleteCompany}
          deleteReq={deleteCompanyReq}
          reFetch={reFetchAllCompanies}
          title={"Delete Company"}
          subTitle={
            "Are you sure that you want to delete this company? All of your data will be permanently removed. This action cannot be undone."
          }
        />

        <EditModal
          Component={AddOrEditCompany}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
          open={showEditModal}
          setOpen={setShowEditModal}
          isLoadingShow={isLoadingShowCompany}
          dataShow={dataShowCompany?.data}
          showReq={showCompanyReq}
          isLoading={isLoadingUpdateCompany}
          data={dataUpdateCompany}
          error={errorUpdateCompany}
          submitReq={updateCompanyReq}
        />
      </>
    );
  }
}

export default Main;
