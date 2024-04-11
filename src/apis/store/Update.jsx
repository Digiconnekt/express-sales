import { useState } from "react";
import useAxios from "..";
import toast from "react-hot-toast";
import useAuthHeader from "../authHeader";

const useUpdateStore = () => {
  const axiosInstance = useAxios();
  const headers = useAuthHeader();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const updateStoreReq = async (id, payload) => {
    try {
      setIsLoading(true);
      const res = await axiosInstance.put(`/stores/${id}`, payload, headers);
      setData(res?.data);
      console.log("update store res", res);
      if (res.data.status) {
        toast.success(res?.data?.msg || "Successfully updated store");
      } else {
        toast.error(res?.data?.error_msg || "Failed to update store");
      }
    } catch (error) {
      setError(error?.response?.data);
      toast.error(error?.response?.data?.message || "Failed to update store");
      console.log("update store error", error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, data, error, updateStoreReq };
};

export default useUpdateStore;
