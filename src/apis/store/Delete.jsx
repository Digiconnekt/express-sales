import { useState } from "react";
import useAxios from "..";
import toast from "react-hot-toast";
import useAuthHeader from "../authHeader";

const useDeleteStore = () => {
  const axiosInstance = useAxios();
  const headers = useAuthHeader();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const deleteStoreReq = async (id) => {
    try {
      setIsLoading(true);
      const res = await axiosInstance.delete(`/stores/${id}`, headers);
      setData(res?.data);
      toast.success(res?.data?.msg || "store deleted successfully");
      console.log("delete store res", res);
    } catch (error) {
      setError(error?.response?.data);
      toast.error(error.response.data.message || "Failed to delete store");
      console.log("delete store error", error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, data, error, deleteStoreReq };
};

export default useDeleteStore;
