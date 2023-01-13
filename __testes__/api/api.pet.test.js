const supertest = require("supertest");
const assert = require("chai").assert;

const petId = 991732181;   

describe("Petstore Swagger - Pet", () =>{
    
    const request = supertest("https://petstore.swagger.io/v2");

    
    it("POST Pet", ()=>{
        
        const jsonFile = require("../../vendors/pet.json");

        return request         
            .post("/pet")     
            
            .send(jsonFile) 
            .then((resposta) => {
                assert.equal(resposta.statusCode, 200); 
                assert.equal(resposta.body.id, petId);  
                assert.equal(resposta.body.name, "Snoopy"); 
                assert.equal(resposta.body.status, "available");
                assert.equal(resposta.body.category [1, "dog"]);
                assert.equal(resposta.body.tags [1, "castrado"]);  
            });
    
    
    });
     
     it("GET Pet",() => {
        return request            
            .get("/pet/" + petId)   
            .then((resposta) => {
                assert.equal(resposta.statusCode, 200); 
                assert.equal(resposta.body.id, petId);  
                assert.equal(resposta.body.name, "Snoopy");  
                assert.equal(resposta.body.status, "available");
                assert.equal(resposta.body.category [1, "dog"]);
                assert.equal(resposta.body.tags [1, "castrado"]); 
            });
    }); 

    it("PUT Pet", () => {
        
        const jsonFile = require("../../vendors/pet1.json");
        return request         
            .put("/pet")        
            .send(jsonFile)     
            .then((resposta) => {
                assert.equal(resposta.statusCode, 200);
                assert.equal(resposta.body.id, petId);
                assert.equal(resposta.body.name, "Snoopy");
                assert.equal(resposta.body.status, "solded");
                assert.equal(resposta.body.category [1, "dog"]);
                assert.equal(resposta.body.tags [1, "castrado"]);
            })         
    });

    it("DELETE_Pet",() => {
        return request
        .delete("/pet/" + petId)
        .then((resposta) => {
            assert.equal(resposta.statusCode, 200)
        });

    }); 

    
    
}); 