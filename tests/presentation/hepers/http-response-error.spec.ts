import { HttpResponse } from "@/presentation/helper/httpResponse";
import { MissingParamError } from "@/utils/missing-param-error";

describe("HttpReponse Helper", () => {
  it("should returns a httpReponse 200 Ok ih has an body request", () => {
    expect(HttpResponse.ok({ id: "fakeId", name: "fakename" })).toEqual({
      statusCode: 200,
      body: { id: "fakeId", name: "fakename" },
    });
  });

  it("should returns a httpReponse 400 Bad Request", () => {
    expect(HttpResponse.badRequest(new MissingParamError("name"))).toEqual({
      statusCode: 400,
      body: "Missing required parameter: name",
    });
  });

  it("should returns a httpReponse 201 Created", () => {
    expect(HttpResponse.created({ id: "fakeId", name: "fakename" })).toEqual({
      statusCode: 201,
      body: { id: "fakeId", name: "fakename" },
    });
  })

  it("should returns a httpReponse 500 Internal Server Error", () => {
    expect(HttpResponse.InteanlError()).toEqual({
      statusCode: 500,
      body: "Internal Server Error",
    });
  })
});
