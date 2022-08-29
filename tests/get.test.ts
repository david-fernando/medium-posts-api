import supertest from "supertest";

import app from '../pages/api/[usermedium]'

describe("Get data from Medium Posts API", () => {
    
    const request = supertest(app);

    test("Should returns 200", async () => {

        const dataMedium = await request.get('/api/?usermedium=davidfernandodamata21');

        expect(dataMedium.status).toBe(200);
    });

  test("should return one post from API", async () => {
    const dataMedium = await (
        await request.get('/api/davidfernandodamata21')
    ).body

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

  test("Should return placeholder instead image", async() => {
    const dataMedium = await (
        await request.get('/api/getmehiredbootcamp')
    ).body

    const imageUrl = dataMedium.dataMedium[1].image;

    const placeholderUrl = 'https://placehold.jp/bdbdc2/ffffff/250x250.png?text=No%20image'

    expect(imageUrl).toBe(placeholderUrl)
  })
});