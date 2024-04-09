import { useState } from "react";
import useAxios from "..";
import toast from "react-hot-toast";
import useAuthHeader from "../authHeader";

const useShowCompany = () => {
  const axiosInstance = useAxios();
  const headers = useAuthHeader();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const showCompanyReq = async (id) => {
    try {
      setIsLoading(true);
      const res = await axiosInstance.get(`/companies/${id}`, headers);
      setData(res?.data);
      // console.log("show company res", res);
    } catch (error) {
      setError(error?.response?.data);
      toast.error(error.response.data.message || "Failed to show company");
      // console.log("show company error", error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, data, error, showCompanyReq };
};

export default useShowCompany;
