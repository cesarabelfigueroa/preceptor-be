// person-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function(app) {
  const mongooseClient = app.get('mongooseClient');
  const {
    Schema
  } = mongooseClient;
  const person = new Schema({
    name: {
      type: String,
      required: true
    },
    identity: {
      type: String,
      required: true,
      unique: true
    },
    telephone: String,
    age: Number,
    type: String,
    photo: {
      data: Buffer,
      contentType: String
    }
  }, {
    timestamps: true
  });

  return mongooseClient.model('person', person);
};
