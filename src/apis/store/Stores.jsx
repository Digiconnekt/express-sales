import { useCallback, useState } from "react";
import useAxios from "..";
import toast from "react-hot-toast";
import useAuthHeader from "../authHeader";

const useAllStores = () => {
  const axiosInstance = useAxios();
  const headers = useAuthHeader();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const allStoresReq = useCallback(async () => {
    try {
      setIsLoading(true);
      const res = await axiosInstance.get("/stores", headers);
      setData(res?.data);
      // console.log("all stores res", res);
    } catch (error) {
      setError(error?.response?.data);
      toast.error(error.response.data.message || "Failed to fetch all stores");
      console.log("all stores error", error);
    } finally {
      setIsLoading(false);
    }
  }, [axiosInstance, headers]);

  const reFetch = useCallback(async () => {
    await allStoresReq();
  }, [allStoresReq]);

  return { isLoading, data, error, allStoresReq, reFetch };
};

export default useAllStores;
