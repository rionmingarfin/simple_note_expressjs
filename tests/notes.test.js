import chai, { expect } from "chai"
import chaiHttp from "chai-http"
import app from "../server"
// var expect = require('chai').expect;


//konfigurasi chai menggunkan plugin chaihttp 
chai.use(chaiHttp)
//untuk mengunakan antarmuka chai harus menjalankan chai.should
chai.should();
//menyimpan koleksi tes (memberi sebuah nama)
describe("notes", () => {
    describe("GET /POST/UPDATE/DELETE/", () => {
        // it adalah fungsi dari test itu sendiri,mengambil dua parameter, parameter pertama adalah nama untuk tes sendiri nama itu boleh bebas,parameter kedua adalah fungsi pada tesnya
        it("get all notes", (done) => {
            chai.request(app)
                .get('/notes')
                .end((err, res) => {
                    res.should.have.status(200)
                    expect({ data: res.body }).to.be.an('object');
                    done();
                })
        });
        //by id
        it("get by id notes", (done) => {
            const id = 106
            chai.request(app)
                .get(`/notes/${id}`)
                .end((err, res) => {
                    res.should.have.status(200)
                    expect({ data: res.body }).to.be.an('object');
                    done();
                })
        });
        //by id category
        it("get by id category", (done) => {
            const id = 8
            chai.request(app)
                .get(`/notes/category/${id}`)
                .end((err, res) => {
                    res.should.have.status(202)
                    expect({ data: res.body }).to.be.an('object');
                    done();
                })
        });
        // post notes
        it("post notes", (done) => {
            const id = 6
            chai.request(app)
                .post(`/notes`)
                .send({'title' : 'rion','note' : 'note','category_id' : 8})
                .end((err, res) => {
                    res.should.have.status(202)
                    expect({ data: res.body }).to.be.an('object');
                    done();
                })
        });
        // update notes
        it("update notes", (done) => {
            const id = 106
            chai.request(app)
                .patch(`/notes/${id}`)
                .send({'title' : 'rion update','note' : 'note','category_id' : 9})
                .end((err, res) => {
                    res.should.have.status(202)
                    expect({ data: res.body }).to.be.an('object');
                    done();
                })
        });

        // delete notes
        it("delete notes", (done) => {
            const id = 189
            chai.request(app)
                .delete(`/notes/${id}`)
                .end((err, res) => {
                    res.should.have.status(202)
                    expect({ data: res.body }).to.be.an('object');
                    done();
                })
        });
    })
})