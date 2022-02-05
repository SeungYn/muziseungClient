export default class CommentService {
  constructor(http) {
    this.http = http;
  }

  async getComments(id) {
    return this.http.fetch(`/muziComments/${id}`, {
      method: 'GET',
    });
  }
}
