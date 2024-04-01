import _ from "lodash";
import clsx from "clsx";
import Pagination from "../../base-components/Pagination";
import { FormSelect } from "../../base-components/Form";
import Lucide from "../../base-components/Lucide";
import Table from "../../base-components/Table";

import {
  PreviewComponent,
  Preview,
} from "../../base-components/PreviewComponent";
import { Tab } from "../../base-components/Headless";
import RevenueLineChart from "../../components/RevenueLineChart";
import { Link } from "react-router-dom";

const ordersList = [
  {
    id: "1",
    customerName: "John Doe",
    orderId: "2365364",
    amount: "9856",
    paymentMode: "COD",
  },
  {
    id: "2",
    customerName: "Alex Doe",
    orderId: "2365364",
    amount: "9856",
    paymentMode: "COD",
  },
  {
    id: "3",
    customerName: "Poonam Doe",
    orderId: "2365364",
    amount: "9856",
    paymentMode: "UPI",
  },
];

function Main() {
  return (
    <>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 mt-5">
              <PreviewComponent className="intro-y box">
                {({ toggle }) => (
                  <>
                    <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                      <h2 className="mr-auto text-base font-medium">Store 1</h2>
                    </div>
                    <div className="p-5">
                      <Preview>
                        <Tab.Group>
                          <Tab.List variant="boxed-tabs">
                            <Tab>
                              <Tab.Button className="w-full py-2" as="button">
                                Revenue
                              </Tab.Button>
                            </Tab>
                            <Tab>
                              <Tab.Button className="w-full py-2" as="button">
                                Order
                              </Tab.Button>
                            </Tab>
                          </Tab.List>
                          <Tab.Panels className="mt-5">
                            <Tab.Panel className="leading-relaxed">
                              <div
                                className={clsx([
                                  "relative my-10",
                                  "before:content-[''] before:block before:absolute before:w-16 before:left-0 before:top-0 before:bottom-0 before:ml-10 before:mb-7 before:bg-gradient-to-r before:from-white before:via-white/80 before:to-transparent before:dark:from-darkmode-600",
                                  "after:content-[''] after:block after:absolute after:w-16 after:right-0 after:top-0 after:bottom-0 after:mb-7 after:bg-gradient-to-l after:from-white after:via-white/80 after:to-transparent after:dark:from-darkmode-600",
                                ])}
                              >
                                <RevenueLineChart
                                  height={275}
                                  className="mt-6 -mb-6"
                                />
                              </div>
                              <div>
                                <div className="items-center block h-10 intro-y sm:flex">
                                  <h2 className="mr-5 text-lg font-medium truncate">
                                    Revenue - ₹3705
                                  </h2>
                                </div>
                                <div className="mt-8 overflow-auto intro-y lg:overflow-visible sm:mt-0">
                                  <Table className="border-spacing-y-[10px] border-separate sm:mt-2">
                                    <Table.Thead>
                                      <Table.Tr>
                                        <Table.Th className="border-b-0 whitespace-nowrap">
                                          CUSTOMER NAME
                                        </Table.Th>
                                        <Table.Th className="text-center border-b-0 whitespace-nowrap">
                                          ORDER ID
                                        </Table.Th>
                                        <Table.Th className="text-center border-b-0 whitespace-nowrap">
                                          AMOUNT
                                        </Table.Th>
                                        <Table.Th className="text-center border-b-0 whitespace-nowrap">
                                          PAYMENT MODE
                                        </Table.Th>
                                      </Table.Tr>
                                    </Table.Thead>
                                    <Table.Tbody>
                                      {ordersList.map((order, i) => (
                                        <Table.Tr key={i} className="intro-x">
                                          <Table.Td className="first:rounded-l-md last:rounded-r-md bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                                            <Link
                                              to={`#`}
                                              className="font-medium whitespace-nowrap"
                                            >
                                              {order.customerName}
                                            </Link>
                                          </Table.Td>
                                          <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                                            {order.orderId}
                                          </Table.Td>
                                          <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                                            {order.amount}
                                          </Table.Td>
                                          <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                                            {order.paymentMode}
                                          </Table.Td>
                                        </Table.Tr>
                                      ))}
                                    </Table.Tbody>
                                  </Table>
                                </div>
                              </div>
                            </Tab.Panel>
                            <Tab.Panel className="leading-relaxed">
                              <div
                                className={clsx([
                                  "relative my-10",
                                  "before:content-[''] before:block before:absolute before:w-16 before:left-0 before:top-0 before:bottom-0 before:ml-10 before:mb-7 before:bg-gradient-to-r before:from-white before:via-white/80 before:to-transparent before:dark:from-darkmode-600",
                                  "after:content-[''] after:block after:absolute after:w-16 after:right-0 after:top-0 after:bottom-0 after:mb-7 after:bg-gradient-to-l after:from-white after:via-white/80 after:to-transparent after:dark:from-darkmode-600",
                                ])}
                              >
                                <RevenueLineChart
                                  height={275}
                                  className="mt-6 -mb-6"
                                />
                              </div>
                              <div>
                                <div className="items-center block h-10 intro-y sm:flex">
                                  <h2 className="mr-5 text-lg font-medium truncate">
                                    Orders - 370
                                  </h2>
                                </div>
                                <div className="mt-8 overflow-auto intro-y lg:overflow-visible sm:mt-0">
                                  <Table className="border-spacing-y-[10px] border-separate sm:mt-2">
                                    <Table.Thead>
                                      <Table.Tr>
                                        <Table.Th className="border-b-0 whitespace-nowrap">
                                          CUSTOMER NAME
                                        </Table.Th>
                                        <Table.Th className="text-center border-b-0 whitespace-nowrap">
                                          ORDER ID
                                        </Table.Th>
                                        <Table.Th className="text-center border-b-0 whitespace-nowrap">
                                          AMOUNT
                                        </Table.Th>
                                        <Table.Th className="text-center border-b-0 whitespace-nowrap">
                                          PAYMENT MODE
                                        </Table.Th>
                                      </Table.Tr>
                                    </Table.Thead>
                                    <Table.Tbody>
                                      {ordersList.map((order, i) => (
                                        <Table.Tr key={i} className="intro-x">
                                          <Table.Td className="first:rounded-l-md last:rounded-r-md bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                                            <Link
                                              to={`#`}
                                              className="font-medium whitespace-nowrap"
                                            >
                                              {order.customerName}
                                            </Link>
                                          </Table.Td>
                                          <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                                            {order.orderId}
                                          </Table.Td>
                                          <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                                            {order.amount}
                                          </Table.Td>
                                          <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                                            {order.paymentMode}
                                          </Table.Td>
                                        </Table.Tr>
                                      ))}
                                    </Table.Tbody>
                                  </Table>
                                </div>
                              </div>
                            </Tab.Panel>
                          </Tab.Panels>
                        </Tab.Group>
                      </Preview>
                    </div>
                  </>
                )}
              </PreviewComponent>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
