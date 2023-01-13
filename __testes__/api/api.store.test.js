const supertest = require("supertest");
const assert = require("chai").assert;

const request = supertest("https://petstore.swagger.io/v2");

describe("PetStore Swagger - Store Order", () => {
   
   
   
    it("POST Store Order", () => {
        const jsonFile = require("../../vendors/storeOrder.json");
        return request
        .post("/store/order/")
        .send(jsonFile)
        .then((resposta) =>{
            assert.equal(resposta.statusCode, 200);
            assert.equal(resposta.body.id, 1);
            assert.equal(resposta.body.petId, 991732181);
            assert.equal(resposta.body.complete, true);
           
        });
    });

    it("GET Store Order",() => {
        const orderId = 1;
        const petId = 991732181;
        return request              
            .get("/store/order/" + orderId)   
            .then((resposta) => {
                assert.equal(resposta.statusCode, 200); 
                assert.equal(resposta.body.petId, petId);  
                assert.equal(resposta.body.status, "placed");
                assert.equal(resposta.body.complete, true); 
               
            });
    });

    it("DELETE_Store",() => {
        const orderId = 1;
        return request
        .delete("/store/order/" + orderId)
        .then((resposta) => {
            assert.equal(resposta.statusCode, 200)
        });

    }); 


});