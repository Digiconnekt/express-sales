import clsx from "clsx";
import moment from "moment";
import EditModal from "../Modals/Edit";
import { useEffect, useState } from "react";
import Table from "../../base-components/Table";
import DeleteAlert from "../Modals/DeleteAlert";
import Button from "../../base-components/Button";
import Lucide from "../../base-components/Lucide";
import AddOrEditCompany from "./AddOrEditCompany";
import Litepicker from "../../base-components/Litepicker";
import { Link, useNavigate } from "react-router-dom";
import { FormInput } from "../../base-components/Form";

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
  const [salesReportFilter, setSalesReportFilter] = useState();
  const [filterData, setFilterData] = useState({
    name: "",
    company_email: "",
    location: "",
  });

  const onChangeFilterHandler = (e) => {
    const { name, value } = e.target;
    setFilterData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

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

  const filterHandler = () => {
    reFetchAllCompanies(
      `name=${filterData.name}&company_email=${filterData.company_email}&location=${filterData.location}`
    );
  };

  const resetFilterHandler = () => {
    reFetchAllCompanies();
    setFilterData({
      name: "",
      company_email: "",
      location: "",
    });
  };

  const reFetch = () => {
    reFetchAllCompanies();
    reFetchCard();
  };

  return (
    <>
      <div className="col-span-12 mt-6">
        <div className="flex flex-wrap items-center justify-between col-span-12 mt-2 intro-y sm:flex-nowrap">
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

        <div className="bg-white mt-5 p-3 rounded-md">
          <div className="grid grid-cols-12 items-center gap-5">
            <div className="md:col-span-4 lg:col-span-3 xl:col-span-2">
              <FormInput
                id="manager-name"
                type="text"
                placeholder="Manager Name"
                name="name"
                value={filterData.name}
                onChange={onChangeFilterHandler}
              />
            </div>
            <div className="md:col-span-4 lg:col-span-3 xl:col-span-2">
              <FormInput
                id="company-email"
                type="text"
                placeholder="Company Email"
                name="company_email"
                value={filterData.company_email}
                onChange={onChangeFilterHandler}
              />
            </div>
            <div className="md:col-span-4 lg:col-span-3 xl:col-span-2">
              <FormInput
                id="location"
                type="text"
                placeholder="Location"
                name="location"
                value={filterData.location}
                onChange={onChangeFilterHandler}
              />
            </div>
            <div className="md:col-span-4 lg:col-span-3 xl:col-span-2">
              <div className="relative text-slate-500">
                <Lucide
                  icon="Calendar"
                  className="absolute inset-y-0 left-0 z-10 w-4 h-4 my-auto ml-3"
                />
                <Litepicker
                  value={salesReportFilter}
                  onChange={setSalesReportFilter}
                  options={{
                    autoApply: false,
                    singleMode: false,
                    numberOfColumns: 2,
                    numberOfMonths: 2,
                    showWeekNumbers: true,
                    dropdowns: {
                      minYear: 1990,
                      maxYear: null,
                      months: true,
                      years: true,
                    },
                  }}
                  className="pl-10 !box"
                />
              </div>
            </div>
            <div className="col-span-3 xl:col-span-2">
              <Button
                id="tabulator-html-filter-go"
                variant="primary"
                type="button"
                className="w-full "
                onClick={filterHandler}
              >
                Filter
              </Button>
            </div>
            <div className="col-span-3 xl:col-span-2">
              <Button
                id="tabulator-html-filter-reset"
                variant="secondary"
                type="button"
                className="w-full"
                onClick={resetFilterHandler}
              >
                Reset
              </Button>
            </div>
          </div>
        </div>

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
                            to={`/company`}
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
