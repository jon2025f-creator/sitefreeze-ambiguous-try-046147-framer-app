import { b as e } from "chunk-4JY5UMT2.mjs";
var s = class {
  constructor(t = "message-channel") {
    this.communicationMethod = t;
  }
  communicationMethod;
  _id;
  get id() {
    return (e(this._id, "Channel defined outside of ChannelInterface"), this._id);
  }
  setId(t) {
    (e(!this._id, "Cannot set id twice."), (this._id = t));
  }
};
var r = class {
  constructor(t, o) {
    this.name = t;
    this.channels = o;
    let n = 0;
    for (let i in o) (o[i]?.setId(i), n++);
    this.size = n;
  }
  name;
  channels;
  size;
};
export { s as a, r as b };
//# sourceMappingURL=chunk-IHWNO6UM.mjs.map
