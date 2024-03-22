import { useState } from "react";

interface loginPayload {
  email: string;
  password: string;
}

const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const loginReq = async (payload: loginPayload) => {
    try {
      console.log("login success", payload);
    } catch (error) {
      console.log("login error", error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, data, error, loginReq };
};

export default useLogin;
