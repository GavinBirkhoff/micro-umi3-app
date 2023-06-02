import store from 'local-store-pro';
import { RequestInterceptor } from 'umi-request';

export const  requestInterceptors: RequestInterceptor = (url, options) =>{
  let headers = {};
  if (store('token')) {
    headers = {
      Authorization: store('token'),
    };
  }
  return {
    url,
    options: {
      ...options,
      headers,
    },
  };
}
