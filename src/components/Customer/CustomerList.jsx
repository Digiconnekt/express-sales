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
import FilterCustomer from "./FilterCustomer";

import useAllCustomers from "../../apis/customer/Customers";

const CustomerList = ({ companyId, storeId }) => {
  const navigate = useNavigate();

  const {
    allCustomersReq,
    data: dataAllCustomers,
    isLoading: isLoadingAllCustomers,
    reFetch: reFetchAllCustomers,
  } = useAllCustomers();

  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    if (companyId) {
      allCustomersReq(`company_id=${companyId}`);
    } else if (storeId) {
      allCustomersReq(`store_id=${storeId}`);
    } else {
      allCustomersReq();
    }
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
          <div className="flex w-full mt-3 sm:w-auto sm:mt-0 sm:ml-auto md:ml-0">
            <Button
              variant="outline-primary"
              onClick={() => setShowFilter(!showFilter)}
            >
              <Lucide icon={showFilter ? "X" : "Filter"} className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {showFilter && (
          <FilterCustomer
            reFetchAllCustomers={reFetchAllCustomers}
            companyId={companyId}
            storeId={storeId}
          />
        )}

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
                            ? moment(customer.created_at).format("DD/MM/YYYY")
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
