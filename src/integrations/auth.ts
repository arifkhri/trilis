
import fetchClient from '@/utils/fetch';


const login = <P, R>(payload: P) => {
  const { post } = fetchClient();

  return post<P, R>('/auth/login', JSON.stringify(payload));
}

const getAuthorizationData = <R>(token: string) => {
  const { get } = fetchClient();
  const headers = {
    Authorization: `Bearer ${token}`
  }

  return get<R>('/auth/me', {headers});
}
const auth = { login, getAuthorizationData };

export default  auth;
