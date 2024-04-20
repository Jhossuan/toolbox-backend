import * as chai from 'chai';
import FileServices from '../services/fileServices.js';
import chaiHttp from 'chai-http';

chai.use(chaiHttp)

const expect = chai.expect

describe("Backend toolbox testing", () => {

  // it("Chai HTTP not found in ES6 :(", async()=> {
  //   const response = await FileServices.getFiles()
  //   expect(response.code).to.equal(200)
  //   expect(response.success).to.equal(true)
  // })

  // it("Test get file list", (done) => {
  //   chai.request('http://localhost:5000')
  //   .get('/files/list')
  //   .end((err, res) => {
  //     console.log(res.body)
  //     expect(res).to.have.status(200)
  //     done()
  //   })
  // })

  // it("Test get all formatted files", (done) => {
  //   chai.request('http://localhost:5000')
  //   .get('/files/data')
  //   .end((err, res) => {
  //     console.log(res.body)
  //     expect(res).to.have.status(200)
  //     done()
  //   })
  // })


})