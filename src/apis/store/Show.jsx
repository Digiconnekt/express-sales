import { useState } from "react";
import useAxios from "..";
import toast from "react-hot-toast";
import useAuthHeader from "../authHeader";

const useShowStore = () => {
  const axiosInstance = useAxios();
  const headers = useAuthHeader();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const showStoreReq = async (id) => {
    try {
      setIsLoading(true);
      const res = await axiosInstance.get(`/stores/${id}`, headers);
      setData(res?.data);
      console.log("show store res", res);
    } catch (error) {
      setError(error?.response?.data);
      toast.error(error.response.data.message || "Failed to show store");
      console.log("show store error", error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, data, error, showStoreReq };
};

export default useShowStore;
