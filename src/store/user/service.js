import 'isomorphic-fetch';
import { URL, getRequestHeader, parseResponse } from '../../utils/utils';

class User {
  async login(email, password) {
    const response = await fetch(`${URL()}/auth`, {
      method: 'POST',
      headers: getRequestHeader(true),
      body: JSON.stringify({ email, password }),
    });

    return parseResponse(response);
  }

  async getMe() {
    const response = await fetch(`${URL()}/getme`, {
      method: 'GET',
      headers: getRequestHeader(),
    });

    return parseResponse(response);
  }
}

export default new User();
