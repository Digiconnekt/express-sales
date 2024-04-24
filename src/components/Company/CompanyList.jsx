import clsx from "clsx";
import moment from "moment";
import EditModal from "../Modals/Edit";
import { useEffect, useState } from "react";
import Table from "../../base-components/Table";
import DeleteAlert from "../Modals/DeleteAlert";
import Button from "../../base-components/Button";
import Lucide from "../../base-components/Lucide";
import AddOrEditCompany from "./AddOrEditCompany";
import { Link, useNavigate } from "react-router-dom";
import FilterCompany from "./FilterCompany";

import useAllCompanies from "../../apis/company/Companies";
import useDeleteCompany from "../../apis/company/Delete";
import useShowCompany from "../../apis/company/Show";
import useUpdateCompany from "../../apis/company/Update";

const CompanyList = ({ reFetchCard }) => {
  const navigate = useNavigate();

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

  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    allCompaniesReq();
  }, []);

  const deleteHandler = (id) => {
    setShowDeleteAlert(true);
    setSelectedId(id);
  };

  const editModalHandler = (id) => {
    setShowEditModal(true);
    setSelectedId(id);
  };

  const reFetch = () => {
    reFetchAllCompanies();
    reFetchCard();
  };

  return (
    <>
      <div className="col-span-12 mt-6">
        <div className="flex flex-wrap items-center justify-between col-span-12 mt-2 intro-y sm:flex-nowrap border-b pb-5">
          <div className="w-56 text-slate-500">
            <h2 className="text-lg font-semibold">
              Total Companies -{" "}
              {isLoadingAllCompanies ? (
                <>loading...</>
              ) : (
                dataAllCompanies?.data?.length
              )}
            </h2>
          </div>
          <div className="flex w-full mt-3 sm:w-auto sm:mt-0 sm:ml-auto md:ml-0">
            <Button
              variant="primary"
              className="mr-2 shadow-md"
              onClick={() => navigate("/company/create")}
            >
              Add New Company
            </Button>
            <Button
              variant="outline-primary"
              onClick={() => setShowFilter(!showFilter)}
            >
              <Lucide icon={showFilter ? "X" : "Filter"} className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {showFilter && (
          <FilterCompany reFetchAllCompanies={reFetchAllCompanies} />
        )}

        {isLoadingAllCompanies ? (
          <p className="text-center mt-5 bg-white p-5 text-md">loading...</p>
        ) : (
          <div
            className="mt-8 overflow-auto intro-y lg:overflow-visible sm:mt-0"
            style={{ overflowX: "auto" }}
          >
            {dataAllCompanies?.data?.length > 0 && (
              <div className="overflow-x-auto">
                <Table className="border-spacing-y-[10px] border-separate sm:mt-2">
                  <Table.Thead>
                    <Table.Tr>
                      <Table.Th className="border-b-0 whitespace-nowrap">
                        COMPANY NAME
                      </Table.Th>
                      <Table.Th className="border-b-0 whitespace-nowrap">
                        MANAGER NAME
                      </Table.Th>
                      <Table.Th className="text-center border-b-0 whitespace-nowrap">
                        COMPANY EMAIL
                      </Table.Th>
                      <Table.Th className="text-center border-b-0 whitespace-nowrap">
                        CONTACT EMAIL
                      </Table.Th>
                      <Table.Th className="text-center border-b-0 whitespace-nowrap">
                        CONTACT NO.
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
                        CREATED AT
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
                            to={`/company/${company?.id}`}
                            className="font-medium whitespace-nowrap"
                          >
                            {company?.company_name
                              ? company?.company_name
                              : "-"}
                          </Link>
                        </Table.Td>
                        <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                          {company?.companymanager?.name
                            ? company?.companymanager?.name
                            : "-"}
                        </Table.Td>
                        <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                          {company?.company_email
                            ? company?.company_email
                            : "-"}
                        </Table.Td>
                        <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                          {company?.contact_email
                            ? company?.contact_email
                            : "-"}
                        </Table.Td>
                        <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                          {company?.contact_number
                            ? company?.contact_number
                            : "-"}
                        </Table.Td>
                        <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                          {company?.gst_number ? company?.gst_number : "-"}
                        </Table.Td>
                        <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                          {company?.location ? company?.location : "-"}
                        </Table.Td>
                        <Table.Td className="first:rounded-l-md last:rounded-r-md w-40 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                          <div
                            className={clsx([
                              "flex items-center justify-center",
                              { "text-success": company?.status === 1 },
                              { "text-danger": company?.status === 2 },
                            ])}
                          >
                            {company?.status === 1
                              ? "Active"
                              : company?.status === 2
                              ? "Inactive"
                              : "-"}
                          </div>
                        </Table.Td>
                        <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                          {company.created_at
                            ? moment(company.created_at).format("DD/MM/YYYY")
                            : "-"}
                        </Table.Td>
                        <Table.Td className="first:rounded-l-md last:rounded-r-md w-56 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b] py-0 relative before:block before:w-px before:h-8 before:bg-slate-200 before:absolute before:left-0 before:inset-y-0 before:my-auto before:dark:bg-darkmode-400">
                          <div className="flex items-center justify-center">
                            <div
                              className="flex items-center mr-3 cursor-pointer"
                              onClick={() => editModalHandler(company?.id)}
                            >
                              <Lucide
                                icon="CheckSquare"
                                className="w-4 h-4 mr-1"
                              />
                              Edit
                            </div>
                            <div
                              className="flex items-center text-danger cursor-pointer"
                              onClick={() => deleteHandler(company?.id)}
                            >
                              <Lucide icon="Trash2" className="w-4 h-4 mr-1" />
                              Delete
                            </div>
                          </div>
                        </Table.Td>
                      </Table.Tr>
                    ))}
                  </Table.Tbody>
                </Table>
              </div>
            )}

            {dataAllCompanies?.data?.length === 0 && (
              <p className="text-center mt-5 bg-white p-5 text-md">
                No Companies Found
              </p>
            )}
          </div>
        )}
      </div>

      <DeleteAlert
        selectedId={selectedId}
        setSelectedId={setSelectedId}
        open={showDeleteAlert}
        setOpen={setShowDeleteAlert}
        data={dataDeleteCompany}
        deleteReq={deleteCompanyReq}
        reFetch={reFetch}
        isLoading={isLoadingDeleteCompany}
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
        reFetch={reFetchAllCompanies}
      />
    </>
  );
};

export default CompanyList;
