import { useState } from "react";
import useAxios from "..";
import toast from "react-hot-toast";
import useAuthHeader from "../authHeader";

const useCompanyDashboard = () => {
  const axiosInstance = useAxios();
  const headers = useAuthHeader();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const companyDashboardReq = async () => {
    try {
      setIsLoading(true);
      const res = await axiosInstance.get("/dashboard", headers);
      setData(res?.data);
    } catch (error) {
      setError(error?.response?.data);
      toast.error(
        typeof error.response.data.message === "string"
          ? error.response.data.message
          : "Failed to get company dashboard data"
      );
      console.log("company dashboard error", error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, data, error, companyDashboardReq };
};

export default useCompanyDashboard;
