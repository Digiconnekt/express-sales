import { useCallback, useState } from "react";
import useAxios from "..";
import toast from "react-hot-toast";
import useAuthHeader from "../authHeader";

const useAllOrders = () => {
  const axiosInstance = useAxios();
  const headers = useAuthHeader();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const allOrdersReq = useCallback(async () => {
    try {
      setIsLoading(true);
      const res = await axiosInstance.get("/ecommerce/orders", headers);
      setData(res?.data);
      // console.log("all orders res", res);
    } catch (error) {
      setError(error?.response?.data);
      toast.error(error.response.data.message || "Failed to fetch all orders");
      // console.log("all orders error", error);
    } finally {
      setIsLoading(false);
    }
  }, [axiosInstance, headers]);

  const reFetch = useCallback(async () => {
    await allOrdersReq();
  }, [allOrdersReq]);

  return { isLoading, data, error, allOrdersReq, reFetch };
};

export default useAllOrders;
