import { useCallback, useState } from "react";
import useAxios from "..";
import toast from "react-hot-toast";
import useAuthHeader from "../authHeader";

const useNfcHistory = () => {
  const axiosInstance = useAxios();
  const headers = useAuthHeader();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const nfcHistoryReq = useCallback(
    async (nfcId, query) => {
      try {
        setIsLoading(true);
        const res = await axiosInstance.get(
          `/nfc/history${query ? `?${query}` : ""}`,
          headers
        );
        setData(res?.data);
        console.log("nfc history res", res);
      } catch (error) {
        setError(error?.response?.data);
        toast.error(
          error.response.data.message || "Failed to fetch nfc history"
        );
        console.log("nfc history error", error);
      } finally {
        setIsLoading(false);
      }
    },
    [axiosInstance, headers]
  );

  const reFetch = useCallback(
    async (nfcId, query) => {
      await nfcHistoryReq(nfcId, query);
    },
    [nfcHistoryReq]
  );

  return { isLoading, data, error, nfcHistoryReq, reFetch };
};

export default useNfcHistory;
