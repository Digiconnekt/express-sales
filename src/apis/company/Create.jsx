import { useState } from "react";
import useAxios from "..";
import toast from "react-hot-toast";
import useAuthHeader from "../authHeader";

const useCreateCompany = () => {
  const axiosInstance = useAxios();
  const headers = useAuthHeader();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const createCompanyReq = async (payload) => {
    try {
      setIsLoading(true);
      const res = await axiosInstance.post(`/companies`, payload, headers);

      console.log("create company res", res);

      if (res.data.status) {
        setData(res?.data);
        toast.success(res?.data?.msg || "company created successfully");
      } else {
        setError(res?.data?.error_msg);
        toast.error(
          typeof res?.data?.error_msg === "string"
            ? res?.data?.error_msg
            : "Failed to create company"
        );
      }
    } catch (error) {
      setError(error?.response?.data);
      toast.error(error.response.data.message || "Failed to create company");
      console.log("create company error", error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, data, error, createCompanyReq };
};

export default useCreateCompany;
