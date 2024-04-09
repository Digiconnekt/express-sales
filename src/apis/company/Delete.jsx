import { useState } from "react";
import useAxios from "..";
import toast from "react-hot-toast";
import useAuthHeader from "../authHeader";

const useDeleteCompany = () => {
  const axiosInstance = useAxios();
  const headers = useAuthHeader();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const deleteCompanyReq = async (id) => {
    try {
      setIsLoading(true);
      const res = await axiosInstance.delete(`/companies/${id}`, headers);
      setData(res?.data);
      toast.success(res?.data?.msg || "company deleted successfully");
      console.log("delete company res", res);
    } catch (error) {
      setError(error?.response?.data);
      toast.error(error.response.data.message || "Failed to delete company");
      console.log("delete company error", error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, data, error, deleteCompanyReq };
};

export default useDeleteCompany;
