import axios from 'axios';

const request = axios.create({
  baseURL: import.meta.env.DEV ? '/api' : 'http://121.4.178.95:8080',
});

const post = <R, T>(url: string, data: T): Promise<R> => {
  return request.post<T, R>(url, data);
};

export default { post, request };
