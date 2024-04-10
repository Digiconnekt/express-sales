import { useState } from "react";
import useAxios from "..";
import toast from "react-hot-toast";
import useAuthHeader from "../authHeader";

const useCreateStore = () => {
  const axiosInstance = useAxios();
  const headers = useAuthHeader();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const createStoreReq = async (payload) => {
    try {
      setIsLoading(true);
      const res = await axiosInstance.post(`/stores`, payload, headers);

      console.log("create store res", res);

      if (res.data.status) {
        setData(res?.data);
        toast.success(res?.data?.msg || "store created successfully");
      } else {
        setError(res?.data?.error_msg);
        toast.error(
          typeof res?.data?.error_msg === "string"
            ? res?.data?.error_msg
            : "Failed to create store"
        );
      }
    } catch (error) {
      setError(error?.response?.data);
      toast.error(error.response.data.message || "Failed to create store");
      console.log("create store error", error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, data, error, createStoreReq };
};

export default useCreateStore;
