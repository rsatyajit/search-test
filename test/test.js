
const searchModel = require('../model/search.model');
const app = require('../app');

describe('search results', () => {
    it('there should be a search results function', async () => {
        expect(searchModel.selectSearchResults({})).toBeDefined();
    });
    it('should insert search results successfully', async () => {
        let totalitems = 200, search = "test data";
        const res = await searchModel.insertSearchResults({
            totalitems, search
        })
        expect(res).toHaveProperty("totalitems", totalitems);
        expect(res).toHaveProperty("search", search);
        expect(res).toHaveProperty("created");
    });

    it('should fetch search results successfully according to search query', async () => {
        let query = "test data";
        const res = await searchModel.selectSearchResults({
            query
        })
        expect(res).toHaveProperty("items");
        expect(res).toHaveProperty("total_count");
    });

})