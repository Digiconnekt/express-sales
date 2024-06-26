import { useState } from "react";
import useAxios from "..";
import toast from "react-hot-toast";
import useAuthHeader from "../authHeader";

const useUpdateCompany = () => {
  const axiosInstance = useAxios();
  const headers = useAuthHeader();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const updateCompanyReq = async (id, payload) => {
    try {
      setIsLoading(true);
      const res = await axiosInstance.put(`/companies/${id}`, payload, headers);
      setData(res?.data);
      console.log("update company res", res);
      if (res.data.status) {
        toast.success(res?.data?.msg || "Successfully updated Company");
      } else {
        toast.error(res?.data?.error_msg || "Failed to update Company");
      }
    } catch (error) {
      setError(error?.response?.data);
      toast.error(error?.response?.data?.message || "Failed to update company");
      console.log("update company error", error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, data, error, updateCompanyReq };
};

export default useUpdateCompany;
