import axios from 'axios'

describe("Get data from Medium Posts API", () => {

  const baseUrl = 'https://localhost:3000/api'

  test("Should returns 200", async () => {

    const dataMedium = await axios.get(`${baseUrl}/api/davidfernandodamata21`);

    expect(dataMedium.status).toBe(200);
  });

  test("should return one post from API", async () => {
    const dataMedium = await axios.get(`${baseUrl}/api/usermedium=davidfernandodamata21`)

    const data = dataMedium.data.dataMedium[0];

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
    const dataMedium = await axios.get(`${baseUrl}/api/getmehiredbootcamp`)

    const imageUrl = dataMedium.data.dataMedium[1].image;

    const placeholderUrl = 'https://placehold.jp/bdbdc2/ffffff/250x250.png?text=No%20image'

    expect(imageUrl).toBe(placeholderUrl)
  })
});