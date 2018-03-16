// preceptor-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function(app) {
  const mongooseClient = app.get('mongooseClient');
  const {
    Schema
  } = mongooseClient;
  const preceptor = new Schema({
    idPerson: {
      type: Person,
      required: true
    },
    idRole: {
      type: Role,
      required: true
    },
    user: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    email: {
      type: String,
      lowercase: true,
      unique: true
    },
    status: Number
  }, {
    timestamps: true
  });

  return mongooseClient.model('preceptor', preceptor);
};
