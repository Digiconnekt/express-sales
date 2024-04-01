import _ from "lodash";
import clsx from "clsx";
import Lucide from "../../base-components/Lucide";
import Table from "../../base-components/Table";
import Button from "../../base-components/Button";
import { Link, Navigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import useCompanyDashboard from "../../apis/companyDashboard/companyDashboard";
import { useEffect } from "react";
import { Menu } from "../../base-components/Headless";

function Main() {
  const { id } = useParams();
  const user = useSelector((state) => state.auth.user);

  if (user && user.role === "master" && user.id == id) {
    return <CompanyDashboard />;
  } else if (user && user.id !== id) {
    return <Navigate to={`/company/${user.id}`} />;
  } else {
    return null;
  }
}

const storeList = [
  {
    id: "1",
    name: "Store 1",
    isActive: true,
  },
  {
    id: "2",
    name: "Store 2",
    isActive: false,
  },
  {
    id: "3",
    name: "Store 3",
    isActive: true,
  },
];

const CompanyDashboard = () => {
  const { companyDashboardReq, data, error, isLoading } = useCompanyDashboard();

  useEffect(() => {
    companyDashboardReq();
  }, []);

  console.log("data", data);

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
                          icon="CreditCard"
                          className="w-[28px] h-[28px] text-pending"
                        />
                      </div>
                      <div className="mt-6 text-3xl font-medium leading-8">
                        {data?.home?.["Total Company"]}
                      </div>
                      <div className="mt-1 text-base text-slate-500">
                        Total Stores
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
                          icon="User"
                          className="w-[28px] h-[28px] text-success"
                        />
                      </div>
                      <div className="mt-6 text-3xl font-medium leading-8">
                        {data?.home?.["Total Income"]}
                      </div>
                      <div className="mt-1 text-base text-slate-500">
                        Total Sales
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
                          icon="User"
                          className="w-[28px] h-[28px] text-success"
                        />
                      </div>
                      <div className="mt-6 text-3xl font-medium leading-8">
                        ₹ {data?.home?.["Total Sales"]}
                      </div>
                      <div className="mt-1 text-base text-slate-500">
                        Total Income
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END: General Report */}

            {/* BEGIN: Companies */}
            <div className="col-span-12 mt-6">
              <div className="items-center block h-10 intro-y sm:flex">
                <h2 className="mr-5 text-lg font-medium truncate">
                  Stores - 37
                </h2>
              </div>
              <div className="mt-8 overflow-auto intro-y lg:overflow-visible sm:mt-0">
                <div className="overflow-x-auto">
                  <Table className="border-spacing-y-[10px] border-separate sm:mt-2">
                    <Table.Thead>
                      <Table.Tr>
                        <Table.Th className="border-b-0 whitespace-nowrap">
                          STORE NAME
                        </Table.Th>
                        <Table.Th className="text-center border-b-0 whitespace-nowrap">
                          STORE ID
                        </Table.Th>
                        <Table.Th className="text-center border-b-0 whitespace-nowrap">
                          GST NO.
                        </Table.Th>
                        <Table.Th className="text-center border-b-0 whitespace-nowrap">
                          LOCATION
                        </Table.Th>
                        <Table.Th className="text-center border-b-0 whitespace-nowrap">
                          CONTACT NO.
                        </Table.Th>
                        <Table.Th className="text-center border-b-0 whitespace-nowrap">
                          EMAIL
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
                      {data?.home?.Company?.map((store, i) => (
                        <Table.Tr key={i} className="intro-x">
                          <Table.Td className="first:rounded-l-md last:rounded-r-md bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                            <Link
                              to={`/store/${store.id}`}
                              className="font-medium whitespace-nowrap"
                            >
                              {store.name || "NA"}
                            </Link>
                          </Table.Td>
                          <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                            {store.id || "NA"}
                          </Table.Td>
                          <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                            {store.gst_number || "NA"}
                          </Table.Td>
                          <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                            {store.location || "NA"}
                          </Table.Td>
                          <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                            {store.contact_number || "NA"}
                          </Table.Td>
                          <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                            {store.contact_email || "NA"}
                          </Table.Td>
                          <Table.Td className="first:rounded-l-md last:rounded-r-md w-40 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                            <div
                              className={clsx([
                                "flex items-center justify-center",
                                { "text-success": store.status === 1 },
                                { "text-danger": store.status === 2 },
                              ])}
                            >
                              {store.status === 1 ? "Active" : "Inactive"}
                            </div>
                          </Table.Td>
                          <Table.Td className="first:rounded-l-md last:rounded-r-md w-56 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b] py-0 relative before:block before:w-px before:h-8 before:bg-slate-200 before:absolute before:left-0 before:inset-y-0 before:my-auto before:dark:bg-darkmode-400 text-center">
                            <Menu>
                              <Menu.Button as={Button} variant="">
                                <Lucide
                                  icon="MoreVertical"
                                  className="block mx-auto"
                                />
                              </Menu.Button>
                              <Menu.Items className="w-48">
                                <Menu.Item>
                                  <Lucide
                                    icon="Edit2"
                                    className="w-4 h-4 mr-2"
                                  />
                                  Edit
                                </Menu.Item>
                                <Menu.Item>
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
                </div>
              </div>
            </div>
            {/* END: Companies */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
