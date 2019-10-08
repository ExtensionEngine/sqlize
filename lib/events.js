'use strict';

const { EventEmitter } = require('events');

module.exports = Ctor => class extends Ctor {
  constructor(...args) {
    super(...args);
    this.$events = new EventEmitter();
  }

  on(event, listener) {
    return this.$events.on(event, listener);
  }

  once(event, listener) {
    return this.$events.once(event, listener);
  }

  off(event, listener) {
    return this.$events.off(event, listener);
  }

  removeAllListeners(event) {
    return this.$events.removeAllListeners(event);
  }

  emit(event, ...args) {
    return this.$events.emit(event, ...args);
  }
};
