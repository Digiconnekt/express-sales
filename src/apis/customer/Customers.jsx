import { useCallback, useState } from "react";
import useAxios from "..";
import toast from "react-hot-toast";
import useAuthHeader from "../authHeader";

const useAllCustomers = () => {
  const axiosInstance = useAxios();
  const headers = useAuthHeader();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const allCustomersReq = useCallback(async () => {
    try {
      setIsLoading(true);
      const res = await axiosInstance.get("/customers", headers);
      setData(res?.data);
      // console.log("all customers res", res);
    } catch (error) {
      setError(error?.response?.data);
      toast.error(
        error.response.data.message || "Failed to fetch all customers"
      );
      // console.log("all customers error", error);
    } finally {
      setIsLoading(false);
    }
  }, [axiosInstance, headers]);

  const reFetch = useCallback(async () => {
    await allCustomersReq();
  }, [allCustomersReq]);

  return { isLoading, data, error, allCustomersReq, reFetch };
};

export default useAllCustomers;
