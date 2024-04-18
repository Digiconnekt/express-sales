import { useCallback, useState } from "react";
import useAxios from "..";
import toast from "react-hot-toast";
import useAuthHeader from "../authHeader";

const useAllNfcs = () => {
  const axiosInstance = useAxios();
  const headers = useAuthHeader();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const allNfcsReq = useCallback(async () => {
    try {
      setIsLoading(true);
      const res = await axiosInstance.get("/nfc", headers);
      setData(res?.data);
      // console.log("all nfc res", res);
    } catch (error) {
      setError(error?.response?.data);
      toast.error(error.response.data.message || "Failed to fetch all nfc");
      // console.log("all nfc error", error);
    } finally {
      setIsLoading(false);
    }
  }, [axiosInstance, headers]);

  const reFetch = useCallback(async () => {
    await allNfcsReq();
  }, [allNfcsReq]);

  return { isLoading, data, error, allNfcsReq, reFetch };
};

export default useAllNfcs;
