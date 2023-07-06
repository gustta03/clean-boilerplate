export class MissingParamError extends Error {
  constructor(paramName: string) {
    super(`Missing required parameter: ${paramName}`);
    this.name = "MissingParamError";
  }
}
