import _ from "lodash";
import clsx from "clsx";
import Lucide from "../../base-components/Lucide";
import Table from "../../base-components/Table";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { FormInput } from "../../base-components/Form";
import Button from "../../base-components/Button";
import DeleteAlert from "../../components/Modals/DeleteAlert";
import EditModal from "../../components/Modals/Edit";
import AddOrEditStore from "../../components/Store/AddOrEditStore";
import Litepicker from "../../base-components/Litepicker";

import useAllStores from "../../apis/store/Stores";
import useDeleteStore from "../../apis/store/Delete";
import useShowStore from "../../apis/store/Show";
import useUpdateStore from "../../apis/store/Update";

const CompanyDashboard = () => {
  const navigate = useNavigate();
  const {
    allStoresReq,
    data: dataAllStores,
    isLoading: isLoadingAllStores,
    reFetch: reFetchAllStores,
  } = useAllStores();

  const {
    deleteStoreReq,
    data: dataDeleteStore,
    isLoading: isLoadingDeleteStore,
  } = useDeleteStore();

  const {
    showStoreReq,
    data: dataShowStore,
    isLoading: isLoadingShowStore,
  } = useShowStore();

  const {
    updateStoreReq,
    data: dataUpdateStore,
    isLoading: isLoadingUpdateStore,
    error: errorUpdateStore,
  } = useUpdateStore();

  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [cardType, setCardType] = useState("store");
  const [salesReportFilter, setSalesReportFilter] = useState();

  useEffect(() => {
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
                <div
                  className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2 intro-y"
                  onClick={() => setCardType("store")}
                >
                  <div
                    className={clsx([
                      "relative zoom-in",
                      "before:content-[''] before:w-[90%] before:shadow-[0px_3px_20px_#0000000b] before:bg-slate-50 before:h-full before:mt-3 before:absolute before:rounded-md before:mx-auto before:inset-x-0 before:dark:bg-darkmode-400/70",
                    ])}
                  >
                    <div
                      className={`p-5 box ${
                        cardType === "store"
                          ? "bg-primary text-white"
                          : "hover:bg-primary hover:text-white"
                      }`}
                    >
                      <div className="flex">
                        <Lucide
                          icon="CreditCard"
                          className="w-[28px] h-[28px]"
                        />
                      </div>
                      <div className="mt-6 text-3xl font-medium leading-8">
                        {isLoadingAllStores ? (
                          <>loading...</>
                        ) : (
                          dataAllStores?.data?.length
                        )}
                      </div>
                      <div className="mt-1 text-base">Stores</div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2 intro-y"
                  onClick={() => setCardType("revenue")}
                >
                  <div
                    className={clsx([
                      "relative zoom-in",
                      "before:content-[''] before:w-[90%] before:shadow-[0px_3px_20px_#0000000b] before:bg-slate-50 before:h-full before:mt-3 before:absolute before:rounded-md before:mx-auto before:inset-x-0 before:dark:bg-darkmode-400/70",
                    ])}
                  >
                    <div
                      className={`p-5 box ${
                        cardType === "revenue"
                          ? "bg-primary text-white"
                          : "hover:bg-primary hover:text-white"
                      }`}
                    >
                      <div className="flex">
                        <Lucide
                          icon="CreditCard"
                          className="w-[28px] h-[28px]"
                        />
                      </div>
                      <div className="mt-6 text-3xl font-medium leading-8">
                        {isLoadingAllStores ? (
                          <>loading...</>
                        ) : (
                          dataAllStores?.data?.length
                        )}
                      </div>
                      <div className="mt-1 text-base">Revenue</div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2 intro-y"
                  onClick={() => setCardType("order")}
                >
                  <div
                    className={clsx([
                      "relative zoom-in",
                      "before:content-[''] before:w-[90%] before:shadow-[0px_3px_20px_#0000000b] before:bg-slate-50 before:h-full before:mt-3 before:absolute before:rounded-md before:mx-auto before:inset-x-0 before:dark:bg-darkmode-400/70",
                    ])}
                  >
                    <div
                      className={`p-5 box ${
                        cardType === "order"
                          ? "bg-primary text-white"
                          : "hover:bg-primary hover:text-white"
                      }`}
                    >
                      <div className="flex">
                        <Lucide
                          icon="ShoppingCart"
                          className="w-[28px] h-[28px]"
                        />
                      </div>
                      <div className="mt-6 text-3xl font-medium leading-8">
                        {isLoadingAllStores ? (
                          <>loading...</>
                        ) : (
                          dataAllStores?.data?.length
                        )}
                      </div>
                      <div className="mt-1 text-base">Orders</div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2 intro-y"
                  onClick={() => setCardType("customer")}
                >
                  <div
                    className={clsx([
                      "relative zoom-in",
                      "before:content-[''] before:w-[90%] before:shadow-[0px_3px_20px_#0000000b] before:bg-slate-50 before:h-full before:mt-3 before:absolute before:rounded-md before:mx-auto before:inset-x-0 before:dark:bg-darkmode-400/70",
                    ])}
                  >
                    <div
                      className={`p-5 box ${
                        cardType === "customer"
                          ? "bg-primary text-white"
                          : "hover:bg-primary hover:text-white"
                      }`}
                    >
                      <div className="flex">
                        <Lucide icon="User" className="w-[28px] h-[28px]" />
                      </div>
                      <div className="mt-6 text-3xl font-medium leading-8">
                        {isLoadingAllStores ? (
                          <>loading...</>
                        ) : (
                          dataAllStores?.data?.length
                        )}
                      </div>
                      <div className="mt-1 text-base">Customers</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END: General Report */}

            {/* START: Stores Table */}
            {cardType === "store" && (
              <div className="col-span-12 mt-6">
                <div className="flex flex-wrap items-center justify-between col-span-12 mt-2 intro-y sm:flex-nowrap">
                  <div className="w-56 text-slate-500">
                    <h2 className="text-lg font-semibold">
                      Total Stores - {dataAllStores?.data?.length}
                    </h2>
                  </div>
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

                <div className="bg-white mt-5 p-3 rounded-md">
                  <div className="grid grid-cols-12 items-center gap-5">
                    <div className="col-span-3">
                      <FormInput
                        id="store-name"
                        type="text"
                        placeholder="Store Name"
                      />
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
                                EMAIL
                              </Table.Th>
                              <Table.Th className="text-center border-b-0 whitespace-nowrap">
                                CONTACT NO.
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
                            {dataAllStores?.data?.map((store, i) => (
                              <Table.Tr key={i} className="intro-x">
                                <Table.Td className="first:rounded-l-md last:rounded-r-md bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                                  <Link
                                    to={`/store`}
                                    className="font-medium whitespace-nowrap"
                                  >
                                    {store.store_title || "NA"}
                                  </Link>
                                </Table.Td>
                                <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                                  {store.email_id || "NA"}
                                </Table.Td>
                                <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                                  {store.contact_no || "NA"}
                                </Table.Td>
                                <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                                  {store.store_location || "NA"}
                                </Table.Td>
                                <Table.Td className="first:rounded-l-md last:rounded-r-md w-40 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                                  <div
                                    className={clsx([
                                      "flex items-center justify-center",
                                      { "text-success": store.status === 1 },
                                      { "text-danger": store.status === 2 },
                                    ])}
                                  >
                                    {store.status === 1
                                      ? "Active"
                                      : store.status === 2
                                      ? "Inactive"
                                      : "-"}
                                  </div>
                                </Table.Td>
                                <Table.Td className="first:rounded-l-md last:rounded-r-md w-56 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b] py-0 relative before:block before:w-px before:h-8 before:bg-slate-200 before:absolute before:left-0 before:inset-y-0 before:my-auto before:dark:bg-darkmode-400 text-center">
                                  <div className="flex items-center justify-center">
                                    <div
                                      className="flex items-center mr-3 cursor-pointer"
                                      onClick={() =>
                                        editModalHandler(store?.id)
                                      }
                                    >
                                      <Lucide
                                        icon="CheckSquare"
                                        className="w-4 h-4 mr-1"
                                      />
                                      Edit
                                    </div>
                                    <div
                                      className="flex items-center text-danger cursor-pointer"
                                      onClick={() => deleteHandler(store?.id)}
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
            )}
            {/* END: Stores Table */}

            {/* START: Revenue Table */}
            {cardType === "revenue" && (
              <div className="col-span-12 mt-6">
                <div className="flex flex-wrap items-center justify-between col-span-12 mt-2 intro-y sm:flex-nowrap">
                  <div className="w-56 text-slate-500">
                    <h2 className="text-lg font-semibold">
                      Total Revenue - {dataAllStores?.data?.length}
                    </h2>
                  </div>
                </div>

                <div className="bg-white mt-5 p-3 rounded-md">
                  <div className="grid grid-cols-12 items-center gap-5">
                    <div className="col-span-3">
                      <FormInput
                        id="store-name"
                        type="text"
                        placeholder="Store Name"
                      />
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
                                EMAIL
                              </Table.Th>
                              <Table.Th className="text-center border-b-0 whitespace-nowrap">
                                CONTACT NO.
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
                            {dataAllStores?.data?.map((store, i) => (
                              <Table.Tr key={i} className="intro-x">
                                <Table.Td className="first:rounded-l-md last:rounded-r-md bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                                  <Link
                                    to={`#`}
                                    className="font-medium whitespace-nowrap"
                                  >
                                    {store.store_title || "NA"}
                                  </Link>
                                </Table.Td>
                                <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                                  {store.email_id || "NA"}
                                </Table.Td>
                                <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                                  {store.contact_no || "NA"}
                                </Table.Td>
                                <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                                  {store.store_location || "NA"}
                                </Table.Td>
                                <Table.Td className="first:rounded-l-md last:rounded-r-md w-40 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                                  <div
                                    className={clsx([
                                      "flex items-center justify-center",
                                      { "text-success": store.status === 1 },
                                      { "text-danger": store.status === 2 },
                                    ])}
                                  >
                                    {store.status === 1
                                      ? "Active"
                                      : store.status === 2
                                      ? "Inactive"
                                      : "-"}
                                  </div>
                                </Table.Td>
                                <Table.Td className="first:rounded-l-md last:rounded-r-md w-56 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b] py-0 relative before:block before:w-px before:h-8 before:bg-slate-200 before:absolute before:left-0 before:inset-y-0 before:my-auto before:dark:bg-darkmode-400 text-center">
                                  <div className="flex items-center justify-center">
                                    <div
                                      className="flex items-center mr-3 cursor-pointer"
                                      onClick={() =>
                                        editModalHandler(store?.id)
                                      }
                                    >
                                      <Lucide
                                        icon="CheckSquare"
                                        className="w-4 h-4 mr-1"
                                      />
                                      Edit
                                    </div>
                                    <div
                                      className="flex items-center text-danger cursor-pointer"
                                      onClick={() => deleteHandler(store?.id)}
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
                        No Revenue Found
                      </p>
                    )}
                  </div>
                )}
              </div>
            )}
            {/* END: Revenue Table */}

            {/* START: Orders Table */}
            {cardType === "order" && (
              <div className="col-span-12 mt-6">
                <div className="flex flex-wrap items-center justify-between col-span-12 mt-2 intro-y sm:flex-nowrap">
                  <div className="w-56 text-slate-500">
                    <h2 className="text-lg font-semibold">
                      Total Orders - {dataAllStores?.data?.length}
                    </h2>
                  </div>
                </div>

                <div className="bg-white mt-5 p-3 rounded-md">
                  <div className="grid grid-cols-12 items-center gap-5">
                    <div className="col-span-3">
                      <FormInput
                        id="store-name"
                        type="text"
                        placeholder="Store Name"
                      />
                    </div>
                    <div className="col-span-3">
                      <FormInput
                        id="order-id"
                        type="text"
                        placeholder="Order Id"
                      />
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
                                EMAIL
                              </Table.Th>
                              <Table.Th className="text-center border-b-0 whitespace-nowrap">
                                CONTACT NO.
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
                            {dataAllStores?.data?.map((store, i) => (
                              <Table.Tr key={i} className="intro-x">
                                <Table.Td className="first:rounded-l-md last:rounded-r-md bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                                  <Link
                                    to={`#`}
                                    className="font-medium whitespace-nowrap"
                                  >
                                    {store.store_title || "NA"}
                                  </Link>
                                </Table.Td>
                                <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                                  {store.email_id || "NA"}
                                </Table.Td>
                                <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                                  {store.contact_no || "NA"}
                                </Table.Td>
                                <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                                  {store.store_location || "NA"}
                                </Table.Td>
                                <Table.Td className="first:rounded-l-md last:rounded-r-md w-40 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                                  <div
                                    className={clsx([
                                      "flex items-center justify-center",
                                      { "text-success": store.status === 1 },
                                      { "text-danger": store.status === 2 },
                                    ])}
                                  >
                                    {store.status === 1
                                      ? "Active"
                                      : store.status === 2
                                      ? "Inactive"
                                      : "-"}
                                  </div>
                                </Table.Td>
                                <Table.Td className="first:rounded-l-md last:rounded-r-md w-56 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b] py-0 relative before:block before:w-px before:h-8 before:bg-slate-200 before:absolute before:left-0 before:inset-y-0 before:my-auto before:dark:bg-darkmode-400 text-center">
                                  <div className="flex items-center justify-center">
                                    <div
                                      className="flex items-center mr-3 cursor-pointer"
                                      onClick={() =>
                                        editModalHandler(store?.id)
                                      }
                                    >
                                      <Lucide
                                        icon="CheckSquare"
                                        className="w-4 h-4 mr-1"
                                      />
                                      Edit
                                    </div>
                                    <div
                                      className="flex items-center text-danger cursor-pointer"
                                      onClick={() => deleteHandler(store?.id)}
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
                        No Order Found
                      </p>
                    )}
                  </div>
                )}
              </div>
            )}
            {/* END: Orders Table */}

            {/* START: Customer Table */}
            {cardType === "customer" && (
              <div className="col-span-12 mt-6">
                <div className="flex flex-wrap items-center justify-between col-span-12 mt-2 intro-y sm:flex-nowrap">
                  <div className="w-56 text-slate-500">
                    <h2 className="text-lg font-semibold">
                      Total Customers - {dataAllStores?.data?.length}
                    </h2>
                  </div>
                </div>

                <div className="bg-white mt-5 p-3 rounded-md">
                  <div className="grid grid-cols-12 items-center gap-5">
                    <div className="col-span-3">
                      <FormInput
                        id="store-name"
                        type="text"
                        placeholder="Store Name"
                      />
                    </div>
                    <div className="col-span-3">
                      <FormInput id="email" type="text" placeholder="Email" />
                    </div>
                    <div className="col-span-3">
                      <FormInput
                        id="contact"
                        type="text"
                        placeholder="Contact No."
                      />
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
                                EMAIL
                              </Table.Th>
                              <Table.Th className="text-center border-b-0 whitespace-nowrap">
                                CONTACT NO.
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
                            {dataAllStores?.data?.map((store, i) => (
                              <Table.Tr key={i} className="intro-x">
                                <Table.Td className="first:rounded-l-md last:rounded-r-md bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                                  <Link
                                    to={`#`}
                                    className="font-medium whitespace-nowrap"
                                  >
                                    {store.store_title || "NA"}
                                  </Link>
                                </Table.Td>
                                <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                                  {store.email_id || "NA"}
                                </Table.Td>
                                <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                                  {store.contact_no || "NA"}
                                </Table.Td>
                                <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                                  {store.store_location || "NA"}
                                </Table.Td>
                                <Table.Td className="first:rounded-l-md last:rounded-r-md w-40 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                                  <div
                                    className={clsx([
                                      "flex items-center justify-center",
                                      { "text-success": store.status === 1 },
                                      { "text-danger": store.status === 2 },
                                    ])}
                                  >
                                    {store.status === 1
                                      ? "Active"
                                      : store.status === 2
                                      ? "Inactive"
                                      : "-"}
                                  </div>
                                </Table.Td>
                                <Table.Td className="first:rounded-l-md last:rounded-r-md w-56 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b] py-0 relative before:block before:w-px before:h-8 before:bg-slate-200 before:absolute before:left-0 before:inset-y-0 before:my-auto before:dark:bg-darkmode-400 text-center">
                                  <div className="flex items-center justify-center">
                                    <div
                                      className="flex items-center mr-3 cursor-pointer"
                                      onClick={() =>
                                        editModalHandler(store?.id)
                                      }
                                    >
                                      <Lucide
                                        icon="CheckSquare"
                                        className="w-4 h-4 mr-1"
                                      />
                                      Edit
                                    </div>
                                    <div
                                      className="flex items-center text-danger cursor-pointer"
                                      onClick={() => deleteHandler(store?.id)}
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
                        No Customer Found
                      </p>
                    )}
                  </div>
                )}
              </div>
            )}
            {/* END: Customer Table */}
          </div>
        </div>
      </div>

      <DeleteAlert
        selectedId={selectedId}
        setSelectedId={setSelectedId}
        open={showDeleteAlert}
        setOpen={setShowDeleteAlert}
        data={dataDeleteStore}
        deleteReq={deleteStoreReq}
        reFetch={reFetchAllStores}
        isLoading={isLoadingDeleteStore}
        title={"Delete Store"}
        subTitle={
          "Are you sure that you want to delete this store? All of your data will be permanently removed. This action cannot be undone."
        }
      />

      <EditModal
        Component={AddOrEditStore}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
        open={showEditModal}
        setOpen={setShowEditModal}
        isLoadingShow={isLoadingShowStore}
        dataShow={dataShowStore?.data}
        showReq={showStoreReq}
        isLoading={isLoadingUpdateStore}
        data={dataUpdateStore}
        error={errorUpdateStore}
        submitReq={updateStoreReq}
        reFetch={reFetchAllStores}
      />
    </>
  );
};

function Main() {
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
