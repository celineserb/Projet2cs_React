import axios from 'axios';
const URL_ROOT="http://localhost";

export const Services = {
    AUTH_URL: `${URL_ROOT}:8005`,
    USER_URL: `${URL_ROOT}:8100`,
    TRACKING_URL: `${URL_ROOT}:8003`,
    GEOLOC_URL: `${URL_ROOT}:8002`,
    VEHICLE_URL: `${URL_ROOT}:8200`,
    STAT_URL: `${URL_ROOT}:8089`,
    LOG_URL: `${URL_ROOT}:8004`,
    FACTURATION_ENDPOINT:'http://54.37.87.85:7000/'
}

export const CrudService = {
  Put,
  Get,
  Post,
  Patch,
  Delete,
  setAuthHeader,
};

/**
 * Authentification using Bearer token -JWT ex-
 * @param store to get the token of the athentified user
 * @return axios configured to use the given token for the authentication of all requests
 **/

function setAuthHeader(authToken) {
  axios.interceptors.request.use(
    (config) => {
      if (authToken) {
        config.headers.auth = authToken;
      }
      return config;
    },
    (err) => Promise.reject(err)
  );
}

/****************************************  
    * Get request to call an get endPoint
    * @param url The relative path of the service
    * @param params Query params of the get request
    * @param headers Any costum headers needed
    * @return Axios reqeust with the given configuration

****************************************/

function Get(service, url, params = {}, headers = {}) {
  return axios.get(`${service}${url}`, {
    headers: headers,
    params: params,
  });
}

/**
 * @param url The relative path of the service
 * @param data Body of the get request
 * @param headers Any costum headers needed
 * @return Axios reqeust with the given configuration
 **/

function Put(service, url, data, headers) {
  return axios.put(`${service}${url}`, data, {
    headers: headers,
  });
}
function Post(service, url, data, headers) {
  return axios.post(`${service}${url}`, data, {
    headers: headers,
  });
}
function Patch(service, url, data, headers) {
  return axios.patch(`${service}${url}`, data, {
    headers: headers,
  });
}
function Delete(service, url, data, headers) {
  var config = {
    method: "delete",
    url: `${service}${url}`,
    headers: headers,
    data: data,
  };
  return axios(config);
}
