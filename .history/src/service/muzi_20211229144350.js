export default class MuziService {
  constructor(http, tokenStorage) {
    this.http = http;
    this.tokenStorage = tokenStorage;
  }

  async getMuzis(username) {
    const query = username ? `?username=${username}` : '';
    return this.http.fetch(`/muzis${query}`, {
      method: 'GET',
    });
  }

  getHeaders() {
    const token = this.tokenStorage.getToken();
    return {
      Authorization: `Bearer ${token}`,
    };
  }
}
