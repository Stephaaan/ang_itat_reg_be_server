const state = require('app-state').init();
state('tokens', []);
state.subscribe("tokens", () => console.log(state('tokens')))
module.exports = state;