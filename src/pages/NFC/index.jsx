import _ from "lodash";
import moment from "moment";
import Lucide from "../../base-components/Lucide";
import Table from "../../base-components/Table";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "../../base-components/Button";
import { FormInput } from "../../base-components/Form";
import Litepicker from "../../base-components/Litepicker";
import useAllNfcs from "../../apis/nfc/Nfcs";

const index = () => {
  const navigate = useNavigate();

  const {
    allNfcsReq,
    data: dataAllNfcs,
    isLoading: isLoadingAllNfcs,
    reFetch: reFetchAllNfcs,
  } = useAllNfcs();

  const [salesReportFilter, setSalesReportFilter] = useState();

  useEffect(() => {
    allNfcsReq();
  }, []);

  return (
    <>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 mt-6">
              <div className="flex flex-wrap items-center justify-between col-span-12 mt-2 intro-y sm:flex-nowrap">
                <div className="w-56 text-slate-500">
                  <h2 className="text-lg font-semibold">
                    Total NFCs -{" "}
                    {isLoadingAllNfcs ? (
                      <>loading...</>
                    ) : (
                      dataAllNfcs?.data?.length
                    )}
                  </h2>
                </div>
              </div>

              <div className="bg-white mt-5 p-3 rounded-md">
                <div className="grid grid-cols-12 items-center gap-5">
                  <div className="col-span-3">
                    <FormInput
                      id="company-id"
                      type="text"
                      placeholder="Company ID"
                    />
                  </div>
                  <div className="col-span-3">
                    <FormInput
                      id="store-id"
                      type="text"
                      placeholder="Store ID"
                    />
                  </div>
                  <div className="col-span-3">
                    <FormInput id="barcode" type="text" placeholder="Barcode" />
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

              {isLoadingAllNfcs ? (
                <p className="text-center mt-5 bg-white p-5 text-md">
                  loading...
                </p>
              ) : (
                <div
                  className="mt-8 overflow-auto intro-y lg:overflow-visible sm:mt-0"
                  style={{ overflowX: "auto" }}
                >
                  {dataAllNfcs?.data?.length > 0 && (
                    <div className="overflow-x-auto">
                      <Table className="border-spacing-y-[10px] border-separate sm:mt-2">
                        <Table.Thead>
                          <Table.Tr>
                            <Table.Th className="border-b-0 whitespace-nowrap">
                              NFC ID
                            </Table.Th>
                            <Table.Th className="text-center border-b-0 whitespace-nowrap">
                              COMPANY ID
                            </Table.Th>
                            <Table.Th className="text-center border-b-0 whitespace-nowrap">
                              STORE ID
                            </Table.Th>
                            <Table.Th className="text-center border-b-0 whitespace-nowrap">
                              BARCODE
                            </Table.Th>
                            <Table.Th className="text-center border-b-0 whitespace-nowrap">
                              LAST UPDATED AT
                            </Table.Th>
                            <Table.Th className="text-center border-b-0 whitespace-nowrap">
                              ACTIONS
                            </Table.Th>
                          </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>
                          {dataAllNfcs?.data?.map((nfc, i) => (
                            <Table.Tr key={i} className="intro-x">
                              <Table.Td className="first:rounded-l-md last:rounded-r-md bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                                <Link
                                  to={`#`}
                                  className="font-medium whitespace-nowrap"
                                >
                                  {nfc?.id ? nfc?.id : "-"}
                                </Link>
                              </Table.Td>
                              <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                                {nfc?.company_id ? nfc?.company_id : "-"}
                              </Table.Td>
                              <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                                {nfc?.store_id ? nfc?.store_id : "-"}
                              </Table.Td>
                              <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                                {nfc?.barcode ? nfc?.barcode : "-"}
                              </Table.Td>
                              <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                                {nfc.updated_at
                                  ? moment(nfc.updated_at).format("DD/MM/YYYY")
                                  : "-"}
                              </Table.Td>
                              <Table.Td className="first:rounded-l-md last:rounded-r-md w-56 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b] py-0 relative before:block before:w-px before:h-8 before:bg-slate-200 before:absolute before:left-0 before:inset-y-0 before:my-auto before:dark:bg-darkmode-400">
                                <div className="flex items-center justify-center">
                                  <div
                                    className="flex items-center mr-3 cursor-pointer"
                                    onClick={() =>
                                      navigate(`/nfc/history/${nfc?.id}`)
                                    }
                                  >
                                    <Lucide
                                      icon="Clipboard"
                                      className="w-4 h-4 mr-1"
                                    />
                                    View History
                                  </div>
                                </div>
                              </Table.Td>
                            </Table.Tr>
                          ))}
                        </Table.Tbody>
                      </Table>
                    </div>
                  )}

                  {dataAllNfcs?.data?.length === 0 && (
                    <p className="text-center mt-5 bg-white p-5 text-md">
                      No NFC Found
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
