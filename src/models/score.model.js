// score-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function(app) {
  const mongooseClient = app.get('mongooseClient');
  const {
    Schema
  } = mongooseClient;
  const score = new Schema({
    idValue: {
      type: Value,
      required: true
    },
    idEvaluation: {
      type: Evaluation,
      required: true
    },
    score: {
      type: Number,
      required: true
    }
  }, {
    timestamps: true
  });

  return mongooseClient.model('score', score);
};
