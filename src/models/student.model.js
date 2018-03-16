// student-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function(app) {
  const mongooseClient = app.get('mongooseClient');
  const {
    Schema
  } = mongooseClient;
  const student = new Schema({
    idPerson: {
      type: Person,
      required: true
    },
    idPreceptor: {
      type: Preceptor,
      required: true
    },
    idGrade: {
      type: Grade,
      required: true
    }
  }, {
    timestamps: true
  });

  return mongooseClient.model('student', student);
};
