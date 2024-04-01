import { useSelector } from "react-redux";

const useAuthHeader = (contentType = "application/json") => {
  const userAccessToken = useSelector((state) => state.auth.user.token);

  const headers = {
    headers: {
      Authorization: `Bearer ${userAccessToken}`,
      "Content-Type": contentType,
    },
  };

  return headers;
};

export default useAuthHeader;
