const TOKEN = 'token';

export default class TokenStorage {
  saveToken(token) {
    localStorage.setItem(TOKEN, token);
  }

  getToken() {
    const data = localStorage.getItem(TOKEN);
    console.log(JSON.stringify(data));
    return localStorage.getItem(TOKEN);
  }

  clearToken() {
    localStorage.clear(TOKEN);
  }
}
