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

import useAllOrders from "../../apis/order/Orders";

const OrderList = () => {
  const navigate = useNavigate();

  const {
    allOrdersReq,
    data: dataAllOrders,
    isLoading: isLoadingAllOrders,
    reFetch: reFetchAllOrders,
  } = useAllOrders();

  const [salesReportFilter, setSalesReportFilter] = useState();

  useEffect(() => {
    allOrdersReq();
  }, []);

  return (
    <>
      <div className="col-span-12 mt-6">
        <div className="flex flex-wrap items-center justify-between col-span-12 mt-2 intro-y sm:flex-nowrap">
          <div className="w-56 text-slate-500">
            <h2 className="text-lg font-semibold">
              Total Orders -{" "}
              {isLoadingAllOrders ? (
                <>loading...</>
              ) : (
                dataAllOrders?.data?.length
              )}
            </h2>
          </div>
        </div>

        <div className="bg-white mt-5 p-3 rounded-md">
          <div className="grid grid-cols-12 items-center gap-5">
            <div className="col-span-3">
              <FormInput id="order-id" type="text" placeholder="Order ID" />
            </div>
            <div className="col-span-3">
              <FormInput id="store-id" type="text" placeholder="Store ID" />
            </div>
            <div className="col-span-3">
              <FormInput id="company-id" type="text" placeholder="Company ID" />
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
                Filter
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

        {isLoadingAllOrders ? (
          <p className="text-center mt-5 bg-white p-5 text-md">loading...</p>
        ) : (
          <div
            className="mt-8 overflow-auto intro-y lg:overflow-visible sm:mt-0"
            style={{ overflowX: "auto" }}
          >
            {dataAllOrders?.data?.length > 0 && (
              <div className="overflow-x-auto">
                <Table className="border-spacing-y-[10px] border-separate sm:mt-2">
                  <Table.Thead>
                    <Table.Tr>
                      <Table.Th className="border-b-0 whitespace-nowrap">
                        ORDER ID
                      </Table.Th>
                      <Table.Th className="border-b-0 whitespace-nowrap">
                        ORDER TYPE
                      </Table.Th>
                      <Table.Th className="border-b-0 whitespace-nowrap">
                        STORE ID
                      </Table.Th>
                      <Table.Th className="text-center border-b-0 whitespace-nowrap">
                        COMPANY ID
                      </Table.Th>
                      <Table.Th className="text-center border-b-0 whitespace-nowrap">
                        CART ID
                      </Table.Th>
                      <Table.Th className="text-center border-b-0 whitespace-nowrap">
                        EMPLOYEE ID
                      </Table.Th>
                      <Table.Th className="text-center border-b-0 whitespace-nowrap">
                        CUSTOMER ID
                      </Table.Th>
                      <Table.Th className="text-center border-b-0 whitespace-nowrap">
                        ADDRESS ID
                      </Table.Th>
                      <Table.Th className="text-center border-b-0 whitespace-nowrap">
                        TOTAL AMOUNT
                      </Table.Th>
                      <Table.Th className="text-center border-b-0 whitespace-nowrap">
                        TOTAL QUANTITY
                      </Table.Th>
                      <Table.Th className="text-center border-b-0 whitespace-nowrap">
                        CREATED AT
                      </Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    {dataAllOrders?.data?.map((order, i) => (
                      <Table.Tr key={i} className="intro-x">
                        <Table.Td className="first:rounded-l-md last:rounded-r-md bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                          <Link
                            to={`#`}
                            className="font-medium whitespace-nowrap"
                          >
                            {order.order_id || "-"}
                          </Link>
                        </Table.Td>
                        <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                          {order.order_type || "-"}
                        </Table.Td>
                        <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                          {order.store_id || "-"}
                        </Table.Td>
                        <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                          {order.company_id || "-"}
                        </Table.Td>
                        <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                          {order.cart_id || "-"}
                        </Table.Td>
                        <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                          {order.employee_id || "-"}
                        </Table.Td>
                        <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                          {order.customer_id || "-"}
                        </Table.Td>
                        <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                          {order.address_id || "-"}
                        </Table.Td>
                        <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                          {order.total_amount || "-"}
                        </Table.Td>
                        <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                          {order.total_qty || "-"}
                        </Table.Td>
                        <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                          {order.created_at
                            ? moment(order.created_at).format("DD/MM/YYYY")
                            : "-"}
                        </Table.Td>
                      </Table.Tr>
                    ))}
                  </Table.Tbody>
                </Table>
              </div>
            )}

            {dataAllOrders?.data?.length === 0 && (
              <p className="text-center mt-5 bg-white p-5 text-md">
                No Order Found
              </p>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default OrderList;
