export default class HttpClient {
  constructor(baseURL, authErrorBus) {
    this.baseURL = baseURL;
    this.authErrorBUS = authErrorBus;
  }

  async fetch(url, options) {
    const res = await this.fetch(`${this.baseURL}${url}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });
    let data;
    try {
      data = await res.json();
    } catch (error) {
      console.log(error);
    }
  }
}
