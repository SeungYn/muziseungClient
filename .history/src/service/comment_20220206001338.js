export default class CommentService {
  constructor(http) {
    this.http = http;
  }

  async getComments(id) {
    return this.http.fetch(`/muziComments/${id}`, {
      method: 'GET',
    });
  }

  async postComment(text) {
    return this.http.fetch('/muziComments', {
      method: 'POST',
      body: JSON.stringify({
        text,
        username: '댓글테스트',
        name: '댓글테스트',
      }),
    });
  }
}
