// evaluation-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function(app) {
  const mongooseClient = app.get('mongooseClient');
  const {
    Schema
  } = mongooseClient;
  const evaluation = new Schema({
    idStudent: {
      type: Student,
      required: true
    },
    idPreceptor: {
      type: Preceptor,
      required: true
    },
    date: {
      type: Date,
      required: true
    }
  }, {
    timestamps: true
  });

  return mongooseClient.model('evaluation', evaluation);
};
