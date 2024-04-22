import { useState, useCallback } from "react";
import useAxios from "..";
import toast from "react-hot-toast";
import useAuthHeader from "../authHeader";

const useAllCompanies = () => {
  const axiosInstance = useAxios();
  const headers = useAuthHeader();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const allCompaniesReq = useCallback(
    async (query) => {
      try {
        setIsLoading(true);
        const res = await axiosInstance.get(
          `/companies${query ? `?${query}` : ""}`,
          headers
        );
        setData(res?.data);
        // console.log("all companies res", res);
      } catch (error) {
        setError(error?.response?.data);
        toast.error(
          error.response.data.message || "Failed to fetch all companies"
        );
        // console.log("all companies error", error);
      } finally {
        setIsLoading(false);
      }
    },
    [axiosInstance, headers]
  );

  const reFetch = useCallback(
    async (query) => {
      await allCompaniesReq(query);
    },
    [allCompaniesReq]
  );

  return { isLoading, data, error, allCompaniesReq, reFetch };
};

export default useAllCompanies;
