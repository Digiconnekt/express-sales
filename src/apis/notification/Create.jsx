import { useState } from "react";
import useAxios from "..";
import toast from "react-hot-toast";
import useAuthHeader from "../authHeader";

const useCreateNotification = () => {
  const axiosInstance = useAxios();
  const headers = useAuthHeader();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const createNotificationReq = async (payload) => {
    try {
      setIsLoading(true);
      const res = await axiosInstance.post(`/notification`, payload, headers);

      console.log("create notification res", res);

      if (res.data.status) {
        setData(res?.data);
        toast.success(res?.data?.msg || "notification send successfully");
      } else {
        setError(res?.data?.error_msg);
        toast.error(
          typeof res?.data?.error_msg === "string"
            ? res?.data?.error_msg
            : "Failed to create notification"
        );
      }
    } catch (error) {
      setError(error?.response?.data);
      toast.error(
        error.response.data.message || "Failed to create notification"
      );
      console.log("create notification error", error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, data, error, createNotificationReq };
};

export default useCreateNotification;
