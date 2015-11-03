//let Rx = require('rx');

module.exports = function(ddp) {
  return {
    createNewUser: async function (username, password, encWallet) {
      // TODO: create keypair/wallet, use the password to encrypt it (indirectly), then convert this await into (or just return?) an observable to be retried on connection failures
      let res = await ddp.call('createNewUser', [{username, password, encWallet}]);

      // if res is some sort of error:
      // throw it
      return res;
    },

    loginToServer: function () {
      // if no input, then trying to loginWithToken
      // do a ddp.call

    },

    logout: function () {

    }
  };
};

