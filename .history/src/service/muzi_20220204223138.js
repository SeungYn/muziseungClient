export default class MuziService {
  constructor(http, tokenStorage) {
    this.http = http;
    this.tokenStorage = tokenStorage;
  }

  async getMuzis(username) {
    console.log(username);

    const query = username ? `?username=${username}` : '';
    return this.http.fetch(`/muzis${query}`, {
      method: 'GET',
    });
  }

  async postMuzi(text) {
    return this.http.fetch(`/muzis`, {
      method: 'POST',
      headers: this.getHeaders(),

      body: JSON.stringify({
        text,
        username: 'test111',
        name: 'test1111',
      }),
    });
  }

  getHeaders() {
    const token = this.tokenStorage.getToken();
    console.log(token);
    return {
      Authorization: `Bearer ${token}`,
    };
  }
}
