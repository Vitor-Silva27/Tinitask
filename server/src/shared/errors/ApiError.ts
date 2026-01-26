export class ApiError extends Error {
  constructor(
    public readonly message: string,
    public readonly statusCode = 400
  ) {
    super(message);
  }

  static badRequest(message: string) {
    return new ApiError(message, 400);
  }

  static conflict(message: string) {
    return new ApiError(message, 409);
  }

  static notFound(message: string) {
    return new ApiError(message, 404);
  }
}