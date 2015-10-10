import mongoose, { Schema } from 'mongoose';

const schema = new Schema({
  _id: Number,
  displayName: String,
  email: String,
  photo: String,
  role: { type: String, default: 'guest' }
});

schema.statics.authGoogle = function(profile, done) {
  return this.findById(profile.id, (err, user) => {
    if (!user) {
      this.create({
        _id: profile.id,
        displayName: profile.displayName,
        email: profile.email,
        photo: profile.photos && profile.photos.length ? profile.photos[0].value : null
      }, (err, user) => {
        done(err, user);
      });
    } else {
      done(err, user);
    }
  });
};

schema.statics.serialize = function(user, done) {
  done(null, user.id);
};

schema.statics.deserialize = function(id, done) {
  console.log('deserialize', id);
  this.findById(id, (err, user) => {
    done(err, user);
  });
};

export default mongoose.model('User', schema);
