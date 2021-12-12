const fetchData = require('../src/methods/Method');

describe("Method - basic test", () => {

    it('Should be not undefined and json array returned',  async ()=> {
        const data =await fetchData('lawndale5','proj');

        console.log("data is "+JSON.stringify(data));
        console.log("length "+data.length);
        expect(Array.isArray(data)).toEqual(true);
        expect(data.length).not.toBe(undefined);
      
        //expect(data.length).not.toEqual(0)
     });
});