// preceptor_grade-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function(app) {
  const mongooseClient = app.get('mongooseClient');
  const {
    Schema
  } = mongooseClient;
  const preceptorGrade = new Schema({
    idPreceptor: {
      type: Preceptor,
      required: true
    },
    idGrade: {
      type: Grade,
      required: true
    },
    year: {
      type: Number,
      required: true
    }
  }, {
    timestamps: true
  });

  return mongooseClient.model('preceptorGrade', preceptorGrade);
};
