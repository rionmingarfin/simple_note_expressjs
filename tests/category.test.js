import chai, { expect } from "chai"
import chaiHttp from "chai-http"
import app from "../server"
// var expect = require('chai').expect;


//konfigurasi chai menggunkan plugin chaihttp 
chai.use(chaiHttp)
//untuk mengunakan antarmuka chai harus menjalankan chai.should
chai.should();
//menyimpan koleksi tes (memberi sebuah nama)
describe("category", () => {
    describe("GET /POST/UPDATE/DELETE/", () => {
        // it adalah fungsi dari test itu sendiri,mengambil dua parameter, parameter pertama adalah nama untuk tes sendiri nama itu boleh bebas,parameter kedua adalah fungsi pada tesnya
        it("get all category", (done) => {
            chai.request(app)
                .get('/category')
                .end((err, res) => {
                    res.should.have.status(200)
                    expect({ data: res.body }).to.be.an('object');
                    done();
                })
        });
        //by id
        it("get by id category", (done) => {
            const id = 77
            chai.request(app)
                .get(`/category/${id}`)
                .end((err, res) => {
                    res.should.have.status(202)
                    expect({ data: res.body }).to.be.an('object');
                    done();
                })
        });
        // post category
        it("post category", (done) => {
            const id = 6
            chai.request(app)
                .post(`/category`)
                .send({'name' : 'rion','image' : 'hhtpimage'})
                .end((err, res) => {
                    res.should.have.status(202)
                    expect({ data: res.body }).to.be.an('object');
                    done();
                })
        });
        // update category
        it("update category", (done) => {
            const id = 79
            chai.request(app)
                .put(`/category/${id}`)
                .send({'name' : 'rion','image' : 'hhtpimage'})
                .end((err, res) => {
                    res.should.have.status(202)
                    expect({ data: res.body }).to.be.an('object');
                    done();
                })
        });

        // delete category
        it("delete category", (done) => {
            const id = 91
            chai.request(app)
                .delete(`/category/${id}`)
                .end((err, res) => {
                    res.should.have.status(202)
                    expect({ data: res.body }).to.be.an('object');
                    done();
                })
        });
    })
})