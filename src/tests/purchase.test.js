const request = require('supertest')
const app = ('../app')

BASE_URL = '/api/v1/purchases'

const purchases = {
    quantity: 1
}

test("POST -> 'BASE_URl', should return status code 201, and re.body.quantity === purchase.quantity", async () => {
    const res = await request(app)
        .post(BASE_URL)
        .send(purchases)

        expect(res.statusCode).toBe(201)
        expect(res.body).toBeDefined()
        expect(res.body.quantity).toBe(purchases.quantity)
}) 

test("GET -> 'BASE_URL', should return status 200 and res.body.length === 1", async () => {
    const res = await request(app)
    .get(BASE_URL)

    expect(res.status).toBe(200)
    expect(res.body).toBeDefined()
    expect(res.body).toHaveLength(1)
})