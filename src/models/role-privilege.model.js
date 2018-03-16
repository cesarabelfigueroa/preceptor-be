// role_privilege-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function(app) {
  const mongooseClient = app.get('mongooseClient');
  const {
    Schema
  } = mongooseClient;
  const rolePrivilege = new Schema({
    idRole: {
      type: Role,
      required: true
    },
    idPrivilege: {
      type: Privilege,
      required: true
    }
  }, {
    timestamps: true
  });

  return mongooseClient.model('rolePrivilege', rolePrivilege);
};
