import Ember from 'ember';
import ToriiFirebaseAdapter from 'emberfire/torii-adapters/firebase';
const {RSVP: {Promise}} = Ember;

export default ToriiFirebaseAdapter.extend({
  store: Ember.inject.service(),
  userSession: Ember.inject.service(),

  findOrCreateUser(uid, username, avatar) {
    new Promise((resolve) => {
      this.get('store').query('user', {orderBy: 'uid', equalTo: uid }).then( (records) =>{
        if(records.get('length') === 0){
          let u = this.get('store').createRecord('user',{
            uid: uid,
            username:username,
            avatar:avatar
          });
          resolve(u.save());
        }
        else{
          resolve(records.get('firstObject'));
        }
      });
    })

    .then((user) => {
      this.set('userSession.current', user);
    });
  },

  open(user) {
    let res = this._super(user);

    let avatarUrl = null;
    if(!Ember.isEmpty(user.providerData)) {
      avatarUrl = user.providerData[0].photoURL;
    }
    this.findOrCreateUser(user.uid, user.email, avatarUrl);

    return res;
  },
  close() {
    let res = this._super();
    this.set('userSession.current', null);
    return res;
  }
});
