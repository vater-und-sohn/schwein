import axios from 'axios';

const request = axios.create({
  baseURL: '/api',
});

const post = <R, T>(url: string, data: T): Promise<R> => {
  return request.post<T, R>(url, data);
};

export default { post, request };
