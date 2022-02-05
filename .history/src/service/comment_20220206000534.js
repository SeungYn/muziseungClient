export default class Comment {
  constructor(http) {
    this.http = http;
  }

  getComments(id) {
    return this.http.fetch(`/muziComments/${id}`, {
      method: 'GET',
    });
  }
}
