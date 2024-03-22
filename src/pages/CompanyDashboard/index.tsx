import _ from "lodash";
import clsx from "clsx";
import fakerData from "../../utils/faker";
import Pagination from "../../base-components/Pagination";
import { FormSelect } from "../../base-components/Form";
import Lucide from "../../base-components/Lucide";
import RevenueLineChart from "../../components/RevenueLineChart";
import OrderLineChart from "../../components/OrderLineChart";
import ReportPieChart from "../../components/ReportPieChart";
import Table from "../../base-components/Table";

import {
  PreviewComponent,
  Preview,
} from "../../base-components/PreviewComponent";
import { Tab } from "../../base-components/Headless";

function Main() {
  return (
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
                        icon="CreditCard"
                        className="w-[28px] h-[28px] text-pending"
                      />
                    </div>
                    <div className="mt-6 text-3xl font-medium leading-8">
                      37
                    </div>
                    <div className="mt-1 text-base text-slate-500">Stores</div>
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
                        icon="User"
                        className="w-[28px] h-[28px] text-success"
                      />
                    </div>
                    <div className="mt-6 text-3xl font-medium leading-8">
                      1520
                    </div>
                    <div className="mt-1 text-base text-slate-500">
                      Employees
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END: General Report */}

          {/* BEGIN: Sales Report */}
          <div className="col-span-12 mt-8 lg:col-span-8">
            <div className="items-center block h-10 intro-y sm:flex">
              <h2 className="mr-5 text-lg font-medium truncate">
                Overall Statistics - Stores
              </h2>
            </div>
            <div className="p-5 mt-12 intro-y box sm:mt-5">
              <PreviewComponent>
                {({ toggle }) => (
                  <>
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
                              <div className="flex flex-col md:flex-row md:items-center">
                                <div className="flex">
                                  <div>
                                    <div className="text-lg font-medium text-primary dark:text-slate-300 xl:text-xl">
                                      $15000
                                    </div>
                                    <div className="mt-0.5 text-slate-500">
                                      Total Revenue
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className={clsx([
                                  "relative",
                                  "before:content-[''] before:block before:absolute before:w-16 before:left-0 before:top-0 before:bottom-0 before:ml-10 before:mb-7 before:bg-gradient-to-r before:from-white before:via-white/80 before:to-transparent before:dark:from-darkmode-600",
                                  "after:content-[''] after:block after:absolute after:w-16 after:right-0 after:top-0 after:bottom-0 after:mb-7 after:bg-gradient-to-l after:from-white after:via-white/80 after:to-transparent after:dark:from-darkmode-600",
                                ])}
                              >
                                <RevenueLineChart
                                  height={275}
                                  className="mt-6 -mb-6"
                                />
                              </div>
                            </Tab.Panel>
                            <Tab.Panel className="leading-relaxed">
                              <div className="flex flex-col md:flex-row md:items-center">
                                <div className="flex">
                                  <div>
                                    <div className="text-lg font-medium text-primary dark:text-slate-300 xl:text-xl">
                                      32000
                                    </div>
                                    <div className="mt-0.5 text-slate-500">
                                      Total Orders
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className={clsx([
                                  "relative",
                                  "before:content-[''] before:block before:absolute before:w-16 before:left-0 before:top-0 before:bottom-0 before:ml-10 before:mb-7 before:bg-gradient-to-r before:from-white before:via-white/80 before:to-transparent before:dark:from-darkmode-600",
                                  "after:content-[''] after:block after:absolute after:w-16 after:right-0 after:top-0 after:bottom-0 after:mb-7 after:bg-gradient-to-l after:from-white after:via-white/80 after:to-transparent after:dark:from-darkmode-600",
                                ])}
                              >
                                <OrderLineChart
                                  height={275}
                                  className="mt-6 -mb-6"
                                />
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
          {/* END: Sales Report */}

          {/* BEGIN: Total Sells */}
          <div className="col-span-12 mt-8 sm:col-span-6 lg:col-span-4">
            <div className="flex items-center h-10 intro-y">
              <h2 className="mr-5 text-lg font-medium truncate">Total Sells</h2>
            </div>
            <div className="p-5 mt-5 intro-y box">
              <div className="mt-3">
                <ReportPieChart height={213} />
              </div>
              <div className="mx-auto mt-8 w-52 sm:w-auto">
                <div className="flex items-center">
                  <div className="w-2 h-2 mr-3 rounded-full bg-primary"></div>
                  <span className="truncate">UPI</span>
                  <span className="ml-auto font-medium">62%</span>
                </div>
                <div className="flex items-center mt-4">
                  <div className="w-2 h-2 mr-3 rounded-full bg-pending"></div>
                  <span className="truncate">Cash</span>
                  <span className="ml-auto font-medium">33%</span>
                </div>
                <div className="flex items-center mt-4">
                  <div className="w-2 h-2 mr-3 rounded-full bg-warning"></div>
                  <span className="truncate">Card</span>
                  <span className="ml-auto font-medium">10%</span>
                </div>
              </div>
            </div>
          </div>
          {/* END: Total Sells */}

          {/* BEGIN: Companies */}
          <div className="col-span-12 mt-6">
            <div className="items-center block h-10 intro-y sm:flex">
              <h2 className="mr-5 text-lg font-medium truncate">
                Companies - 7
              </h2>
            </div>
            <div className="mt-8 overflow-auto intro-y lg:overflow-visible sm:mt-0">
              <Table className="border-spacing-y-[10px] border-separate sm:mt-2">
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th className="border-b-0 whitespace-nowrap">
                      COMPANY ID
                    </Table.Th>
                    <Table.Th className="text-center border-b-0 whitespace-nowrap">
                      COMPANY NAME
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
                  {_.take(fakerData, 4).map((faker, fakerKey) => (
                    <Table.Tr key={fakerKey} className="intro-x">
                      <Table.Td className="first:rounded-l-md last:rounded-r-md bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                        <a href="" className="font-medium whitespace-nowrap">
                          {faker.products[0].name}
                        </a>
                        <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                          {faker.products[0].category}
                        </div>
                      </Table.Td>
                      <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                        {faker.stocks[0]}
                      </Table.Td>
                      <Table.Td className="first:rounded-l-md last:rounded-r-md w-40 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                        <div
                          className={clsx([
                            "flex items-center justify-center",
                            { "text-success": faker.trueFalse[0] },
                            { "text-danger": !faker.trueFalse[0] },
                          ])}
                        >
                          <Lucide icon="CheckSquare" className="w-4 h-4 mr-2" />
                          {faker.trueFalse[0] ? "Active" : "Inactive"}
                        </div>
                      </Table.Td>
                      <Table.Td className="first:rounded-l-md last:rounded-r-md w-56 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b] py-0 relative before:block before:w-px before:h-8 before:bg-slate-200 before:absolute before:left-0 before:inset-y-0 before:my-auto before:dark:bg-darkmode-400">
                        <div className="flex items-center justify-center">
                          <a className="flex items-center mr-3" href="">
                            <Lucide
                              icon="CheckSquare"
                              className="w-4 h-4 mr-1"
                            />
                            Edit
                          </a>
                          <a className="flex items-center text-danger" href="">
                            <Lucide icon="Trash2" className="w-4 h-4 mr-1" />{" "}
                            Delete
                          </a>
                        </div>
                      </Table.Td>
                    </Table.Tr>
                  ))}
                </Table.Tbody>
              </Table>
            </div>
            <div className="flex flex-wrap items-center mt-3 intro-y sm:flex-row sm:flex-nowrap">
              <Pagination className="w-full sm:w-auto sm:mr-auto">
                <Pagination.Link>
                  <Lucide icon="ChevronsLeft" className="w-4 h-4" />
                </Pagination.Link>
                <Pagination.Link>
                  <Lucide icon="ChevronLeft" className="w-4 h-4" />
                </Pagination.Link>
                <Pagination.Link>...</Pagination.Link>
                <Pagination.Link>1</Pagination.Link>
                <Pagination.Link active>2</Pagination.Link>
                <Pagination.Link>3</Pagination.Link>
                <Pagination.Link>...</Pagination.Link>
                <Pagination.Link>
                  <Lucide icon="ChevronRight" className="w-4 h-4" />
                </Pagination.Link>
                <Pagination.Link>
                  <Lucide icon="ChevronsRight" className="w-4 h-4" />
                </Pagination.Link>
              </Pagination>
              <FormSelect className="w-20 mt-3 !box sm:mt-0">
                <option>10</option>
                <option>25</option>
                <option>35</option>
                <option>50</option>
              </FormSelect>
            </div>
          </div>
          {/* END: Companies */}
        </div>
      </div>
    </div>
  );
}

export default Main;
