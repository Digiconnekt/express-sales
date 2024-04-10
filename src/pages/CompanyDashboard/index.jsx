import _ from "lodash";
import clsx from "clsx";
import Lucide from "../../base-components/Lucide";
import Table from "../../base-components/Table";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { FormInput } from "../../base-components/Form";
import Button from "../../base-components/Button";

import useAllStores from "../../apis/store/Stores";

const CompanyDashboard = () => {
  const navigate = useNavigate();
  const {
    allStoresReq,
    data: dataAllStores,
    isLoading: isLoadingAllStores,
  } = useAllStores();

  useEffect(() => {
    allStoresReq();
  }, []);

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
                        12 static
                      </div>
                      <div className="mt-1 text-base text-slate-500">Sales</div>
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
                        ₹ 15 static
                      </div>
                      <div className="mt-1 text-base text-slate-500">
                        Income
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END: General Report */}

            {/* BEGIN: Companies */}
            <div className="col-span-12 mt-6">
              <div className="flex flex-wrap items-center justify-between col-span-12 mt-2 intro-y sm:flex-nowrap">
                <div className="w-56 text-slate-500">
                  <h2 className="text-lg font-semibold">
                    Total Stores - {dataAllStores?.data?.length}
                  </h2>
                </div>
                {/* <div className="hidden mx-auto md:block text-slate-500">
                  <FormInput
                    type="text"
                    className="w-56 pr-10 !box"
                    placeholder="Search..."
                  />
                  <Lucide
                    icon="Search"
                    className="absolute inset-y-0 right-0 w-4 h-4 my-auto mr-3"
                  />
                </div> */}
                <div className="w-full mt-3 sm:w-auto sm:mt-0 sm:ml-auto md:ml-0">
                  <Button
                    variant="primary"
                    className="mr-2 shadow-md"
                    onClick={() => navigate(`/store/create`)}
                  >
                    Add New Store
                  </Button>
                </div>
              </div>

              {isLoadingAllStores ? (
                <p className="text-center mt-5 bg-white p-5 text-md">
                  loading...
                </p>
              ) : (
                <div
                  className="mt-8 overflow-auto intro-y lg:overflow-visible sm:mt-0"
                  style={{ overflowX: "auto" }}
                >
                  {dataAllStores?.data?.length > 0 && (
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
                          {dataAllStores?.data?.map((store, i) => (
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
                                <div className="flex items-center justify-center">
                                  <div
                                    className="flex items-center mr-3 cursor-pointer"
                                    // onClick={() => editModalHandler(company?.id)}
                                  >
                                    <Lucide
                                      icon="CheckSquare"
                                      className="w-4 h-4 mr-1"
                                    />
                                    Edit
                                  </div>
                                  <div
                                    className="flex items-center text-danger cursor-pointer"
                                    // onClick={() => deleteHandler(company?.id)}
                                  >
                                    <Lucide
                                      icon="Trash2"
                                      className="w-4 h-4 mr-1"
                                    />
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

                  {dataAllStores?.data?.length === 0 && (
                    <p className="text-center mt-5 bg-white p-5 text-md">
                      No Stores Found
                    </p>
                  )}
                </div>
              )}
            </div>
            {/* END: Companies */}
          </div>
        </div>
      </div>
    </>
  );
};

function Main() {
  const { id } = useParams();
  const user = useSelector((state) => state.auth.user);

  if (user && (user.role === "company-manager" || user.role === "master")) {
    return <CompanyDashboard />;
  }
  // else if (user && user.id !== id) {
  //   return <Navigate to={`/company/${user.id}`} />;
  // }
  else {
    return null;
  }
}

export default Main;
