import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { API } from '@config/axios';
import store from '@redux/store';

import * as ActionTypes from '@constants/actionTypes';

export default function OAuthLogin() {
  const [isError, setIsError] = React.useState(false);
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');

  const getToken = async (code: string) => {
    try {
      const res = await API.get(`/auth/github-callback?code=${code}`);

      localStorage.setItem('token', res.data.token);
      localStorage.setItem('isAuthenticated', 'true');

      store.dispatch({
        type: ActionTypes.Auth.LOGIN,
        payload: {
          roles: res.data.roles || [],
          isAuthenticated: true,
        },
      });
      navigate('/admin/articles');
    } catch (e) {
      setIsError(true);
    }
  };

  React.useEffect(() => {
    getToken(code || '');
  }, [code]);

  if (!code || isError) return <div>Error</div>;

  console.log(searchParams.get('code'));
  return <div>OAuthLogin</div>;
}
