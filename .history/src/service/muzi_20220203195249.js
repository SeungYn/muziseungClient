export default class MuziService {
  constructor(http, tokenStorage) {
    this.http = http;
    this.tokenStorage = tokenStorage;
  }

  async getMuzis(username) {
    console.log(username);

    const query = username ? `?username=${username}` : '';
    console.log(query);
    console.log(
      this.http.fetch(`/muzis${query}`, {
        method: 'GET',
      })
    );
  }

  async postMuzi(text) {
    return this.http.fetch(`/muzis`, {
      metod: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...this.getHeaders(),
      },
      body: JSON.stringify({
        text,
        username: 'test111',
        name: 'test1111',
      }),
    });
  }

  getHeaders() {
    const token = this.tokenStorage.getToken();
    return {
      Authorization: `Bearer ${token}`,
    };
  }
}
