import axios from "axios";

export const instance = axios.create({
  baseURL: "https://one855-product-code-1.onrender.com/api/calendly-events",
});
export const calendly = axios.create({
  baseURL: "https://auth.calendly.com",
});

export const setToken = (token: string) => {
  instance.defaults.headers.common["Token"] = token;
};

export const getToken = async () => {
  try {
    // const { data: token } = await calendly.get("/oauth/tokenn");
    // setToken(token.token);
  } catch (e) {
    // console.log(e);
  }
};
