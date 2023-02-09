import { createMocks } from 'node-mocks-http'

import handler from '../pages/api/[usermedium]'

describe("Get data from Medium Posts API", () => {

    test("Should returns 200", async () => {

        const { req, res } = createMocks({
          method: 'GET',
          query: {
            usermedium: 'davidfernandodamata21',
          },
        });

        await handler(req, res)

        const dataMediumStatus = res._getStatusCode()

        expect(dataMediumStatus).toBe(200);
    });

  test("should return one post from API", async () => {
    const { req, res } = createMocks({
      method: 'GET',
      query: {
        usermedium: 'davidfernandodamata21',
      },
    });

    await handler(req, res)

    const dataMedium = JSON.parse(res._getData())

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
    const { req, res } = createMocks({
      method: 'GET',
      query: {
        usermedium: 'getmehiredbootcamp',
      },
    });

    await handler(req, res)

    const dataMedium = JSON.parse(res._getData())

    const imageUrl = dataMedium.dataMedium[2].image;

    const placeholderUrl = 'https://placehold.jp/bdbdc2/ffffff/250x250.png?text=No%20image'

    expect(imageUrl).toBe(placeholderUrl)
  })
});