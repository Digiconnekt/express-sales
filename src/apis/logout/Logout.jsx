import { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../stores/authSlice";
import { useNavigate } from "react-router-dom";
import useAxios from "..";
import toast from "react-hot-toast";

const useLogout = () => {
  const axiosInstance = useAxios();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const logoutReq = async () => {
    try {
      setIsLoading(true);
      const res = await axiosInstance.get("/logout");

      if (res) {
        setData(res?.data);
        console.log("Logout success");
        dispatch(logout());
        navigate("/login");
      }
    } catch (error) {
      setError(error?.response?.data);
      toast.error(error?.response?.data?.message || "Failed to Logout");
      console.log("Logout error", error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, data, error, logoutReq };
};

export default useLogout;
