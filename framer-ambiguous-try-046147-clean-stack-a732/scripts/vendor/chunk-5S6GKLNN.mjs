import { b as u, d as p } from "chunk-L5AQ4LH7.mjs";
var d = { Alt: !0, Control: !0, Meta: !0, Shift: !0 };
function o(t, e, n) {
  let s = [...t];
  return ((s[e] = n), c(s));
}
function c(t) {
  let e = [];
  for (let n = 0; n < t.length; n++) {
    let s = t[n];
    if (s !== void 0)
      switch (s) {
        case "CommandOrControl":
          t[n] = p() ? "Meta" : "Control";
          break;
        case "Command":
          t[n] = "Meta";
          break;
        case "Control":
          t[n] = "Control";
          break;
        case "Delete":
          e.push(...o(t, n, "Backspace"));
          break;
        case "Down":
        case "Left":
        case "Right":
        case "Up":
          t[n] = `Arrow${s}`;
          break;
        case "Enter":
        case "Return":
          (e.push(...o(t, n, "NumpadEnter")), (t[n] = "Enter"));
          break;
        case "Option":
          t[n] = "Alt";
          break;
        case "Plus":
          (e.push(...o(t, n, "NumpadAdd")),
            e.push(...o(t, n, "Shift+=")),
            e.push(...o(t, n, "+")),
            (t[n] = "="));
          break;
        case "-":
          (e.push(...o(t, n, "NumpadSubtract")), e.push(...o(t, n, "Shift+-")), (t[n] = "-"));
          break;
        default:
          s.match(/^[.;A-Z]$/u)
            ? (t[n] = s)
            : s.match(/^\d$/u) && (e.push(...o(t, n, `Digit${s}`)), (t[n] = s));
      }
  }
  return (t.splice(0, t.length - 1, ...t.slice(0, t.length - 1).sort()), e.push(t.join("+")), e);
}
var b = /^[=+\-.;/]$/u,
  h = /^[a-z\d=+\-.;/]$/i;
function k(t) {
  return u() && t.getModifierState("AltGraph");
}
function A(t) {
  let e = [],
    n = k(t);
  ((t.altKey || n) && e.push("Alt"),
    (t.ctrlKey || n) && e.push("Control"),
    t.metaKey && e.push("Meta"),
    t.shiftKey && !b.test(t.key) && e.push("Shift"));
  let s = String.fromCharCode(t.keyCode);
  if (h.test(t.key)) e.push(t.key.toUpperCase());
  else if (h.test(s)) e.push(s.toUpperCase());
  else {
    let { code: i } = t;
    switch (i) {
      case "BracketLeft":
        e.push("[");
        break;
      case "BracketRight":
        e.push("]");
        break;
      case "Comma":
        e.push(",");
        break;
      case "Period":
        e.push(".");
        break;
      case "Quote":
        e.push("'");
        break;
      case "Semicolon":
        e.push(";");
        break;
      case "Slash":
        e.push("/");
        break;
      default: {
        if (i === void 0) break;
        e.push(i.match(/^Key([A-Z])/u)?.[1] ?? i);
        break;
      }
    }
  }
  return e.join("+");
}
var l = class {
  map;
  constructor() {
    this.map = new Map();
  }
  get(e) {
    if (e.key in d) return;
    let n = A(e);
    return this.map.get(n);
  }
  set(e, n, s) {
    c(e.split("+")).forEach((r) => {
      let a = this.map.get(r);
      (a &&
        console.warn("Duplicate key binding", {
          accelerator: r,
          framerAccelerator: e,
          actionName: s,
          existing: a.actionName,
        }),
        this.map.set(r, { action: n, actionName: s }));
    });
  }
  remove(e) {
    c(e.split("+")).forEach((s) => {
      this.map.delete(s);
    });
  }
};
export { k as a, A as b, l as c };
//# sourceMappingURL=chunk-5S6GKLNN.mjs.map
