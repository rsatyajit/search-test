const request = require('supertest')
const app = require('../app');
describe('post search results', () => {
    it('should post some search results successfully', async () => {
        let totalitems = 200, search = "test data", statusCode = 201;
        const res = await request(app)
            .post('/api/user/search')
            .send({
                totalitems: totalitems,
                search: search,
            })
        expect(res.statusCode).toEqual(statusCode)
        expect(res.body).toHaveProperty("message", "successfully inserted");
        expect(res.body).toHaveProperty("status", "success");
        expect(res.body).toHaveProperty("_status_code", statusCode);
        expect(res.body).toHaveProperty("result.totalitems", totalitems);
        expect(res.body).toHaveProperty("result.search", search);
        expect(res.body).toHaveProperty("result.created");
    });

    it('should post some search results missing search value', async () => {
        let search = "", statusCode = 401;
        const res = await request(app)
            .post('/api/user/search')
            .send({
                search: search
            })
        expect(res.statusCode).toEqual(statusCode)
        expect(res.body).toHaveProperty("message", "search is mandatory");
        expect(res.body).toHaveProperty("status", "error");
        expect(res.body).toHaveProperty("_status_code", statusCode);
    });
})