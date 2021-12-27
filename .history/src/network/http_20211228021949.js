export default class HttpClient {
  constructor(baseURL, authErrorBus) {
    this.baseURL = baseURL;
    this.authErrorBUS = authErrorBus;
  }
}
