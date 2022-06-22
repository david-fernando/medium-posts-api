import supertest from "supertest";

import app from "../index";

describe("Get data from Medium Posts API", () => {
  const request = supertest(app);
  test("Should returns 200", async () => {
    const dataMedium = await request.get("/?usermedium=davidfernandodamata21");

    expect(dataMedium.status).toBe(200);
  });

  test("should return one post from API", async () => {
    const dataMedium = await (
      await request.get("/?usermedium=davidfernandodamata21")
    ).body;

    const data = dataMedium.dataMedium[0];

    expect(data).toEqual(
      expect.objectContaining({
        title: expect.any(String),
        date: expect.any(String),
        link: expect.any(String),
        image: expect.any(String),
        description: expect.any(String),
        tags: expect.any(Array),
      })
    );
  });

  afterAll(() => {
    app.close();
  });
});
