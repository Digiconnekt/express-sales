import { useCallback, useState } from "react";
import useAxios from "..";
import toast from "react-hot-toast";
import useAuthHeader from "../authHeader";

const useCard = () => {
  const axiosInstance = useAxios();
  const headers = useAuthHeader();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const cardReq = useCallback(async () => {
    try {
      setIsLoading(true);
      const res = await axiosInstance.get("/dashboard", headers);
      setData(res?.data);
      // console.log("dashboard top cards res", res);
    } catch (error) {
      setError(error?.response?.data);
      toast.error(
        error.response.data.message || "Failed to fetch dashboard card details"
      );
      // console.log("Failed to fetch dashboard card details", error);
    } finally {
      setIsLoading(false);
    }
  }, [axiosInstance, headers]);

  const reFetch = useCallback(async () => {
    await cardReq();
  }, [cardReq]);

  return { isLoading, data, error, cardReq, reFetch };
};

export default useCard;
