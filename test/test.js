const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app'); // Adjust the path to your app.js file

chai.use(chaiHttp);
const should = chai.should();

describe('Task API Tests', () => {

  it('should list all tasks', (done) => {
    chai
      .request(app)
      .get('/tasks')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.be.eql(0);
        done();
      });
  });

  it('should create a task', (done) => {
    chai
      .request(app)
      .post('/tasks')
      .send({ title: 'Sample Task' })
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.be.a('object');
        res.body.should.have.property('title').eql('Sample Task');
        done();
      });
  });

  it('should update a task', (done) => {
    chai
      .request(app)
      .post('/tasks')
      .send({ title: 'Original Task' })
      .end((err, res) => {
        chai
          .request(app)
          .put(`/tasks/0`)
          .send({ title: 'Updated Task' })
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('title').eql('Updated Task');
            done();
          });
      });
  });

  it('should delete a task', (done) => {
    chai
      .request(app)
      .post('/tasks')
      .send({ title: 'Task to Delete' })
      .end((err, res) => {
        chai
          .request(app)
          .delete(`/tasks/0`)
          .end((err, res) => {
            res.should.have.status(204);
            done();
          });
      });
  });
});
