export default class MuziService {
  constructor(http, tokenStorage) {
    this.http = http;
    this.tokenStorage = tokenStorage;
  }

  async getMuzis(username) {
    const query = username ? `?username=${username}` : '';
    return this.http.fetch(`/muzis${query}`, {
      headers: this.getHeaders(),
      method: 'GET',
    });
  }

  async postMuzi(text) {
    console.log('post');
    return this.http.fetch(`/muzis`, {
      method: 'POST',
      headers: this.getHeaders(),

      body: JSON.stringify({
        text,
        username: 'tmddbs',
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
