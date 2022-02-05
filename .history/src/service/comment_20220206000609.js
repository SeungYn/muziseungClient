export default class CommentService {
  constructor(http) {
    this.http = http;
  }

  getComments(id) {
    return this.http.fetch(`/muziComments/${id}`, {
      method: 'GET',
    });
  }
}
