const TOKEN = 'token';

export default class TokenStorage {
  saveToken(token) {
    localStorage.setItem(TOKEN, token);
    console.log(token);
    console.log(...this.getToken());
    console.log(JSON.stringify(this.getToken()));
  }

  getToken() {
    return localStorage.getItem(TOKEN);
  }

  clearToken() {
    localStorage.clear(TOKEN);
  }
}
