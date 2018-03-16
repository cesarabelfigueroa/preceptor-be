// value-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function(app) {
  const mongooseClient = app.get('mongooseClient');
  const {
    Schema
  } = mongooseClient;
  const value = new Schema({
    idPillar: {
      type: Pillar,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    description: String
  }, {
    timestamps: true
  });

  return mongooseClient.model('value', value);
};
