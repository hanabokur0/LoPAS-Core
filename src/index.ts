export default {
  async fetch(request: Request): Promise<Response> {
    return new Response("LoPAS-Core API is running", {
      status: 200,
      headers: { "Content-Type": "text/plain; charset=utf-8" }
    });
  }
};
