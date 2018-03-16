// grade-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function(app) {
  const mongooseClient = app.get('mongooseClient');
  const {
    Schema
  } = mongooseClient;
  const grade = new Schema({
    grade: {
      type: String,
      required: true
    },
    seccion: {
      type: String,
      required: true
    },
    time: String
  }, {
    timestamps: true
  });

  return mongooseClient.model('grade', grade);
};
