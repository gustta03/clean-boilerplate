export class HttpResponse {
  static ok(body: any): HttpResponse {
    return {
      statusCode: 200,
      body: body,
    };
  }
}
