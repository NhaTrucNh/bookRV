import { authApi } from '~/api/api';

export async function loginUser(dispatch, loginPayload) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(loginPayload),
  };

  try {
    dispatch({ type: 'REQUEST_LOGIN' });
    let response = await authApi.login(requestOptions);
    let data = await response.json();

    if (data.user) {
      dispatch({ type: 'LOGIN_SUCCESS', payload: data });
      localStorage.setItem('currentUser', JSON.stringify(data));
      return data;
    }

    dispatch({ type: 'LOGIN_ERROR', error: data.errors[0] });
    return;
  } catch (error) {
    dispatch({ type: 'LOGIN_ERROR', error: error });
  }
}

export async function logout(dispatch) {
  const email = JSON.parse(localStorage.getItem('user')).email;
  const logout = await authApi.logout(email);

  if (logout.data.code === 200) {
    dispatch({ type: 'LOGOUT' });
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
  } else {
    dispatch({ type: 'LOGOUT_ERROR', error: logout.data.message });
  }
}
