import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333/',
});

export default api;

export const apiDelete = (link: string) => {
  return api
    .delete(link, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(response => {
      if (response.status === 200) {
        return true;
      }
      return response.status;
    })
    .catch(error => {
      return 400;
    });
};

export const apiGet = <T>(link: string) => {
  return api
    .get(link, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(response => {
      if (response.status === 200) {
        return response.data as T;
      }
      return response.status;
    })
    .catch(error => {
      return 400;
    });
};

export const apiPost = <T>(link: string, resquest?: T) => {
  return api
    .post(link, resquest, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(response => {
      return response;
    })
    .catch(error => {
      return 400;
    });
};

export const apiUpdate = <T>(link: string, resquest?: T) => {
  return api
    .put(link, resquest, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(response => {
      if (response.status === 200) {
        return response;
      }
      return response.status;
    })
    .catch(error => {
      return 400;
    });
};

export const apiAuth = <T>(
  link: string,
  resquest: { email: string; password: string },
) => {
  return api
    .post(link, resquest)
    .then(response => {
      if (response.status === 200) {
        localStorage.setItem('@App:user', JSON.stringify(response.data.user));
        localStorage.setItem('@App:token', response.data.token);
        setTokenApi(response.data.token);
        return response;
      }
      return response.status;
    })
    .catch(error => {
      return 400;
    });
};

export const setTokenApi = (token: string) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};
