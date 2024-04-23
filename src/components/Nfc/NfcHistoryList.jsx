import _ from "lodash";
import moment from "moment";
import Lucide from "../../base-components/Lucide";
import Table from "../../base-components/Table";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "../../base-components/Button";
import { FormInput } from "../../base-components/Form";
import Litepicker from "../../base-components/Litepicker";
import FilterNfcHistory from "./FilterNfcHistory";

import useNfcHistory from "../../apis/nfc/NfcHistory";

const NfcHistoryList = () => {
  const navigate = useNavigate();

  const {
    nfcHistoryReq,
    data: dataNfcHistory,
    isLoading: isLoadingNfcHistory,
    reFetch: reFetchNfcHistory,
  } = useNfcHistory();

  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    nfcHistoryReq();
  }, []);

  return (
    <>
      <div className="col-span-12">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 mt-6">
            <div className="flex flex-wrap items-center justify-between col-span-12 mt-2 intro-y sm:flex-nowrap">
              <div className="w-56 text-slate-500">
                <h2 className="text-lg font-semibold">
                  Total NFC History -{" "}
                  {isLoadingNfcHistory ? (
                    <>loading...</>
                  ) : (
                    dataNfcHistory?.data?.length
                  )}
                </h2>
              </div>
              <div className="flex w-full mt-3 sm:w-auto sm:mt-0 sm:ml-auto md:ml-0">
                <Button
                  variant="outline-primary"
                  onClick={() => setShowFilter(!showFilter)}
                >
                  <Lucide
                    icon={showFilter ? "X" : "Filter"}
                    className="w-5 h-5"
                  />
                </Button>
              </div>
            </div>

            {showFilter && (
              <FilterNfcHistory reFetchNfcHistory={reFetchNfcHistory} />
            )}

            {isLoadingNfcHistory ? (
              <p className="text-center mt-5 bg-white p-5 text-md">
                loading...
              </p>
            ) : (
              <div
                className="mt-8 overflow-auto intro-y lg:overflow-visible sm:mt-0"
                style={{ overflowX: "auto" }}
              >
                {dataNfcHistory?.data?.length > 0 && (
                  <div className="overflow-x-auto">
                    <Table className="border-spacing-y-[10px] border-separate sm:mt-2">
                      <Table.Thead>
                        <Table.Tr>
                          <Table.Th className="border-b-0 whitespace-nowrap">
                            BARCODE
                          </Table.Th>
                          <Table.Th className="text-center border-b-0 whitespace-nowrap">
                            EMPLOYEE NAME
                          </Table.Th>
                          <Table.Th className="text-center border-b-0 whitespace-nowrap">
                            PRODUCT DESCRIPTION
                          </Table.Th>
                          <Table.Th className="text-center border-b-0 whitespace-nowrap">
                            LAST UPDATED AT
                          </Table.Th>
                        </Table.Tr>
                      </Table.Thead>
                      <Table.Tbody>
                        {dataNfcHistory?.data?.map((nfc, i) => (
                          <Table.Tr key={i} className="intro-x">
                            <Table.Td className="first:rounded-l-md last:rounded-r-md bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                              <Link
                                to={`#`}
                                className="font-medium whitespace-nowrap"
                              >
                                {nfc?.barcode ? nfc?.barcode : "-"}
                              </Link>
                            </Table.Td>
                            <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                              {nfc?.employeeName ? nfc?.employeeName : "-"}
                            </Table.Td>
                            <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                              {nfc?.productDescription
                                ? nfc?.productDescription
                                : "-"}
                            </Table.Td>
                            <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                              {nfc?.lastUpdatedAt ? nfc?.lastUpdatedAt : "-"}
                            </Table.Td>
                          </Table.Tr>
                        ))}
                      </Table.Tbody>
                    </Table>
                  </div>
                )}

                {dataNfcHistory?.data?.length === 0 && (
                  <p className="text-center mt-5 bg-white p-5 text-md">
                    No NFC History Found
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NfcHistoryList;
