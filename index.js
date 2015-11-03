let DDPClient = require('@sunnyg/ddp-client/promise');
let Identity = require('./src/identity/index.js');
let { Auth } = require('./src/auth/index.js');
//let StellarSDK = require('stellar-sdk');

module.exports = class Whuffie {
  constructor(options) {
    this.debug = options.debug;

    this.ddp = new DDPClient(ddpDefaults(options));
    //this.stellarServer = new StellarSDK.server(stellarDefaults(options));

    this.Identity = Identity;
    this.auth = Auth(this.ddp);
  }

  /**
   * Initializes DDP connection
   * @returns {Promise}
   */
  connect() {
    return this.ddp.connect();
  }

  call(name, params) {
    return this.ddp.call(name, params);
  }

};

function ddpDefaults(options) {
  return {
    host: options.host || 'localhost',
    port: options.port || 8000,
    ssl: options.ssl || false,
    autoReconnect: options.autoReconnect || true,
    autoReconnectTimer: options.autoReconnectTimer || 500,
    maintainCollections: false,
    ddpVersion: '1',
    debug: options.debug
  };
}

function stellarDefaults(options) {
  return {
    // TODO: better defaults
    hostname: options.hostname || 'horizon-testnet.stellar.org',
    secure: options.secure || true,
    port: options.port || 443
  }
}