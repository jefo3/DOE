/* eslint-disable arrow-body-style */
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333'
});

export default api;

export const apiDelete = (link: string) => api.delete(link).then((response) => {
  if (response.status === 200) {
    return true;
  }
  throw response.status;
}).catch((error) => {
  throw error;
});

export const apiGet = <T>(link: string) => api.get(link).then((response) => {
  if (response.status === 200) {
    return response.data as T;
  }
  throw response.status;
}).catch((error) => {
  throw error;
});

export const apiPost = <T>(link: string, resquest?: T) => {
  return api.post(link, resquest).then((response) => {
    if (response.status === 200) {
      return response.data as T;
    }
    throw response.status;
  }).catch((error) => {
    throw error;
  });
};

export const apiUpdate = <T>(link: string, resquest?: T) => {
  return api.put(link, resquest).then((response) => {
    if (response.status === 200) {
      return response.data;
    }
    throw response.status;
  }).catch((error) => {
    throw error;
  });
};

export const apiPatch = <T>(link: string, resquest?: T) => {
  return api.patch(link, resquest, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }).then((response) => {
    if (response.status === 200) {
      return response.data;
    }
    throw response.status;
  }).catch((error) => {
    throw error;
  });
};

export const setTokenApi = (token: string) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// eslint-disable-next-line arrow-body-style
export const apiAuth = <T>(link: string, resquest: {email: string, password: string}) => {
  return api.post(link, resquest).then((response) => {
    if (response.status === 200) {
      localStorage.setItem('@App:user', JSON.stringify(response.data.user));
      localStorage.setItem('@App:token', response.data.token);
      setTokenApi(response.data.token);
      return response.data as T;
    }
    throw response.status;
  }).catch((error) => {
    throw error;
  });
};

export const apiLogOut = (link: string) => api.post(link).then((response) => {
  if (response.status === 200) {
    localStorage.removeItem('@App:user');
    localStorage.removeItem('@App:token');
    delete api.defaults.headers.common.Authorization;
    return true;
  }
  throw response.status;
}).catch((error) => {
  throw error;
});
