import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../stores/authSlice";
import { useNavigate } from "react-router-dom";
import useAxios from "..";
import toast from "react-hot-toast";

const useLogin = () => {
  const axiosInstance = useAxios();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const loginReq = async (payload) => {
    try {
      setIsLoading(true);
      const res = await axiosInstance.post("/login", payload);
      setData(res?.data);
      dispatch(
        login({
          id: res?.data?.data?.user_id,
          name: res?.data?.data?.name,
          email: res?.data?.data?.email,
          role: res?.data?.data?.role,
          token: res?.data?.data?.token,
        })
      );
      toast.success("Logged in successfully");

      if (res?.data?.data?.role === "master") {
        navigate("/");
      }
      // else if (res?.data?.data?.role === "master") {
      //   navigate(`/company/${res?.data?.data?.user_id}`);
      // }
    } catch (error) {
      setError(error?.response?.data);
      toast.error(
        typeof error.response.data.msg === "string"
          ? error.response.data.msg
          : "Failed to login"
      );
      console.log("login error", error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, data, error, loginReq };
};

export default useLogin;
