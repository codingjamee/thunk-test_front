import axios from "axios";

const config = {
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
};

export const api = axios.create(config); // 인스턴스

// //refresh token api
export async function postRefreshToken() {
  const autorizationData = `Bearer ${localStorage.getItem("refreshToken")}`;
  const response = await api.post("/accessToken", {
    Authorization: autorizationData,
  });
  return response;
}

// [Client] ------[ Interceptor ] -----> [Server]
api.interceptors.request.use(
  (req) => {
    //요청 data가 formData일때
    if (req.data && req.data instanceof FormData) {
      req.headers["Content-Type"] = "multipart/form-data";
    }
    //요청 data가 Object일 때
    else if (req.data && req.data instanceof Object) {
      req.headers["Content-Type"] = "application/json";
    }

    return req;
  },
  (err) => {
    console.log("인터셉터에서 요청에러", err);
  }
);

// [Client] <------[ Interceptor ] ----- [Server]

api.interceptors.response.use(
  (res) => {
    // console.log("응답이 도착했음", res);
    // alert("요청에 성공했습니다!");
    return res;
  },
  (err) => {
    console.log("인터셉터에서 응답에러", err);
  }
);

const getFetcher = async (path, params) => {
  return await api.get(path, { params });
};
const postFetcher = async (path, body) => {
  return await api.post(path, body);
};
const patchFetcher = async (path, body) => {
  return await api.put(path, body);
};
const putFetcher = async (path, body) => {
  return await api.put(path, body);
};
const deleteFetcher = async (path, params) => {
  return await api.delete(path, { params });
};

export const API_FETCHER = {
  get: (...args) => getFetcher(...args),
  post: (...args) => postFetcher(...args),
  put: (...args) => putFetcher(...args),
  patch: (...args) => patchFetcher(...args),
  delete: (...args) => deleteFetcher(...args),
};

export default api;
