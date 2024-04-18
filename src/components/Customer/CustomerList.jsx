import clsx from "clsx";
import moment from "moment";
import EditModal from "../Modals/Edit";
import { useEffect, useState } from "react";
import Table from "../../base-components/Table";
import DeleteAlert from "../Modals/DeleteAlert";
import Button from "../../base-components/Button";
import Lucide from "../../base-components/Lucide";
import Litepicker from "../../base-components/Litepicker";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FormInput, FormLabel } from "../../base-components/Form";

import useAllCustomers from "../../apis/customer/Customers";

const CustomerList = () => {
  const navigate = useNavigate();

  const {
    allCustomersReq,
    data: dataAllCustomers,
    isLoading: isLoadingAllCustomers,
    reFetch: reFetchAllCustomers,
  } = useAllCustomers();

  const [salesReportFilter, setSalesReportFilter] = useState();

  useEffect(() => {
    allCustomersReq();
  }, []);

  return (
    <>
      <div className="col-span-12 mt-6">
        <div className="flex flex-wrap items-center justify-between col-span-12 mt-2 intro-y sm:flex-nowrap">
          <div className="w-56 text-slate-500">
            <h2 className="text-lg font-semibold">
              Total Customers -{" "}
              {isLoadingAllCustomers ? (
                <>loading...</>
              ) : (
                dataAllCustomers?.data?.length
              )}
            </h2>
          </div>
        </div>

        <div className="bg-white mt-5 p-3 rounded-md">
          <div className="grid grid-cols-12 items-center gap-5">
            <div className="col-span-3">
              <FormInput id="store-name" type="text" placeholder="Store Name" />
            </div>
            <div className="col-span-3">
              <FormInput
                id="company-name"
                type="text"
                placeholder="Company Name"
              />
            </div>
            <div className="col-span-3">
              <FormInput id="email" type="text" placeholder="Email" />
            </div>
            <div className="col-span-3">
              <FormInput id="contact" type="text" placeholder="Contact No." />
            </div>
            <div className="col-span-3">
              <div className="relative text-slate-500 me-5">
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
                  className="pl-10 sm:w-56 !box"
                />
              </div>
            </div>
            <div className="col-span-1">
              <Button
                id="tabulator-html-filter-go"
                variant="primary"
                type="button"
                className="w-full "
              >
                Go
              </Button>
            </div>
            <div className="col-span-1">
              <Button
                id="tabulator-html-filter-reset"
                variant="secondary"
                type="button"
                className="w-full"
              >
                Reset
              </Button>
            </div>
          </div>
        </div>

        {isLoadingAllCustomers ? (
          <p className="text-center mt-5 bg-white p-5 text-md">loading...</p>
        ) : (
          <div
            className="mt-8 overflow-auto intro-y lg:overflow-visible sm:mt-0"
            style={{ overflowX: "auto" }}
          >
            {dataAllCustomers?.data?.length > 0 && (
              <div className="overflow-x-auto">
                <Table className="border-spacing-y-[10px] border-separate sm:mt-2">
                  <Table.Thead>
                    <Table.Tr>
                      <Table.Th className="border-b-0 whitespace-nowrap">
                        CUSTOMER NAME
                      </Table.Th>
                      <Table.Th className="text-center border-b-0 whitespace-nowrap">
                        CUSTOMER ID
                      </Table.Th>
                      <Table.Th className="text-center border-b-0 whitespace-nowrap">
                        EMAIL
                      </Table.Th>
                      <Table.Th className="text-center border-b-0 whitespace-nowrap">
                        CONTACT NO.
                      </Table.Th>
                      <Table.Th className="text-center border-b-0 whitespace-nowrap">
                        USER ID
                      </Table.Th>
                      <Table.Th className="text-center border-b-0 whitespace-nowrap">
                        EMPLOYEE ID
                      </Table.Th>
                      <Table.Th className="text-center border-b-0 whitespace-nowrap">
                        CREATED AT
                      </Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    {dataAllCustomers?.data?.map((customer, i) => (
                      <Table.Tr key={i} className="intro-x">
                        <Table.Td className="first:rounded-l-md last:rounded-r-md bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                          <Link
                            to={`#`}
                            className="font-medium whitespace-nowrap"
                          >
                            {customer.name || "-"}
                          </Link>
                        </Table.Td>
                        <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                          {customer.customer_id || "-"}
                        </Table.Td>
                        <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                          {customer.email || "-"}
                        </Table.Td>
                        <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                          {customer.phone || "-"}
                        </Table.Td>
                        <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                          {customer.user_id || "-"}
                        </Table.Td>
                        <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                          {customer.employee_id || "-"}
                        </Table.Td>
                        <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                          {customer.created_at
                            ? moment(customer.created_at).format("MM/DD/YYYY")
                            : "-"}
                        </Table.Td>
                      </Table.Tr>
                    ))}
                  </Table.Tbody>
                </Table>
              </div>
            )}

            {dataAllCustomers?.data?.length === 0 && (
              <p className="text-center mt-5 bg-white p-5 text-md">
                No Customer Found
              </p>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default CustomerList;
