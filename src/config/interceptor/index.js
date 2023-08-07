import { useEffect } from "react";
import axios from "axios";

export const useInterceptor = (store) => {
  const handleRequestSuccess = (request) => {
    return request;
  };
  const handleRequestError = (error) => {
    console.error(`REQUEST ERROR! => ${error}`);
    return error;
  };

  const handleResponseSuccess = (response) => {
    return response;
  };
  const handleResponseError = (error) => {
    throw error;
  };

  useEffect(() => {
    axios.defaults.baseURL = `${process.env.REACT_APP_API_URL}`;
    axios.defaults.params = {};
    axios.interceptors.request.use(handleRequestSuccess, handleRequestError);
    axios.interceptors.response.use(handleResponseSuccess, handleResponseError);
  }, []);
};
