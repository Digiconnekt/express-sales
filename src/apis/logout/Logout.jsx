import { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../stores/authSlice";
import { useNavigate } from "react-router-dom";
import useAxios from "..";

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
      // const res = await axiosInstance.get("/logout");
      // setData(res?.data);
      console.log("Logout success");
      dispatch(logout());
      navigate("/login");
    } catch (error) {
      setError(error?.response?.data);
      console.log("Logout error", error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, data, error, logoutReq };
};

export default useLogout;
