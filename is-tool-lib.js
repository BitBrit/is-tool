'use strict';
const load = require('./lib/load');
const save = require('./lib/save.js');
const convert = require('./lib/convert-r4-to-r6');
const clear = require('./lib/clear-all');
const remove = require('./lib/remove');
const set = require('./lib/set');
const get = require('./lib/getConfig');

module.exports = {
  load,
  save,
  convert,
  clear,
  remove,
  get,
  set,
};
