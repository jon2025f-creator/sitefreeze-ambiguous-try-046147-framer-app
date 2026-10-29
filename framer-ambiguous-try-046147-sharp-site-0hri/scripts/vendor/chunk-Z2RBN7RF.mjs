import { o as s } from "chunk-EHN3U6RC.mjs";
var t = class extends Promise {
  _state = "initial";
  resolve;
  reject;
  get state() {
    return this._state;
  }
  pending() {
    return ((this._state = "pending"), this);
  }
  isResolved() {
    return this._state === "fulfilled" || this._state === "rejected";
  }
  constructor() {
    let r, i;
    (super((e, n) => {
      ((r = e), (i = n));
    }),
      (this.resolve = (e) => {
        ((this._state = "fulfilled"), r(e));
      }),
      (this.reject = (e) => {
        ((this._state = "rejected"), i(e));
      }));
  }
};
t.prototype.constructor = Promise;
function o() {
  return new Map();
}
function d() {
  return s(o);
}
export { t as a, d as b };
//# sourceMappingURL=chunk-Z2RBN7RF.mjs.map
