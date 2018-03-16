const users = require('./users/users.service.js');
const person = require('./person/person.service.js');
const preceptor = require('./preceptor/preceptor.service.js');
const student = require('./student/student.service.js');
const privilege = require('./privilege/privilege.service.js');
const rolePrivilege = require('./role-privilege/role-privilege.service.js');
const role = require('./role/role.service.js');
const grade = require('./grade/grade.service.js');
const preceptorGrade = require('./preceptor-grade/preceptor-grade.service.js');
const evaluation = require('./evaluation/evaluation.service.js');
const score = require('./score/score.service.js');
const value = require('./value/value.service.js');
const pillar = require('./pillar/pillar.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(person);
  app.configure(preceptor);
  app.configure(student);
  app.configure(privilege);
  app.configure(rolePrivilege);
  app.configure(role);
  app.configure(grade);
  app.configure(preceptorGrade);
  app.configure(evaluation);
  app.configure(score);
  app.configure(value);
  app.configure(pillar);
};
