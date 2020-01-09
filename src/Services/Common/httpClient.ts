import axios from 'axios';

 const httpClient = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      "Accept"      : "application/json",
      // "token"       : ""
      // anything you want to add to the headers
  }
  });

  const authInterceptor = (config: any) => {
    console.log('config', config);
    return config;
}

httpClient.interceptors.request.use(authInterceptor);
httpClient.interceptors.response.use(response => {
  /** TODO: Add any response interceptors */
  return response;
},
error => {
  /** TODO: Do something with response error */
  return Promise.reject(error);
})

export { httpClient };
  
//   export function setJWT(jwt: string) {
//     conduitApi.defaults.headers.common['Authorization'] = `Token ${jwt}`;
//   }
  
//   export function clearJWT() {
//     delete conduitApi.defaults.headers.common['Authorization'];
//   }


