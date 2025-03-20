import config from "../config";

export const login = () => {
    window.location.href = `${config.API_BASE_URL}/auth/login`;
  };