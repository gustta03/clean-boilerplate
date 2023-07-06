export class InternalServerError extends Error {
  constructor(public override readonly message: string) {
    super('Internal Server Error');
    this.name = "InternalServerError";
  }
}
