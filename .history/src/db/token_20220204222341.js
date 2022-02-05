const TOKEN = 'token';

export default class TokenStorage {
  saveToken(token) {
    localStorage.setItem(TOKEN, JSON.stringify(token));
    console.log(token);

    console.log(JSON.parse(this.getToken()));
    console.log(this.getToken());
  }

  getToken() {
    return localStorage.getItem(TOKEN);
  }

  clearToken() {
    localStorage.clear(TOKEN);
  }
}
