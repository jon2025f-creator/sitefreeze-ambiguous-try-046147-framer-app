import { h as n } from "chunk-EHED2EQW.mjs";
import { c as o } from "chunk-4JY5UMT2.mjs";
function h(e, t) {
  return e
    ? t === "harness2"
      ? i(e)
      : t === "agentBranchScriptApi"
        ? c(e)
        : t === "agentUI"
          ? l(e)
          : t === "agentVersionHistory" || t === "agentProjectMembers"
            ? i(e) && n.isOn(t)
            : t === "agentWebSearch" && r(e)
              ? !0
              : n.isOn(t)
    : n.isOn(t);
}
function r(e) {
  return e.agent === "api" && e.caller === "automation";
}
function p(e) {
  return r(e) ? e.metadata.commentBranchId : void 0;
}
function a(e) {
  return e.agent === "api" && e.caller === "slack";
}
function A(e) {
  if (!r(e)) return {};
  let { automationId: t, runId: s, trigger: m } = e.metadata;
  return {
    ...(t ? { automationId: t } : {}),
    ...(s ? { automationRunId: s } : {}),
    automationTriggerType: m,
  };
}
function g(e) {
  return e.agent === "api" || e.agent === "app" ? e.caller : void 0;
}
function b(e) {
  return a(e) ? "slack-agent" : r(e) ? "automation" : "agents";
}
function u(e) {
  return e.agent === "app" || e.agent === "user-agent";
}
function x(e) {
  return u(e);
}
function l(e) {
  return u(e) && i(e) && n.isOn("agentUI");
}
function i(e) {
  switch (e.agent) {
    case "mcp":
      return !0;
    case "api":
      return a(e) ? n.isOn("harness2") : r(e);
    case "app":
    case "user-agent":
      return n.isOn("harness2");
    default:
      return o(e);
  }
}
function C(e) {
  return e.prompt === "in-app" && !c(e) && p(e) === void 0;
}
function c(e) {
  return (
    e.prompt === "in-app" &&
    i(e) &&
    p(e) === void 0 &&
    (e.agent === "mcp" || n.isOn("agentBranchScriptApi"))
  );
}
function y(e) {
  return c(e) || p(e) !== void 0;
}
function T(e) {
  switch (e.agent) {
    case "app":
    case "user-agent":
    case "mcp":
      return { scope: "all" };
    case "api":
      return a(e)
        ? { scope: "all" }
        : r(e) && e.metadata.trigger === "commentCreated"
          ? { scope: "thread", threadId: e.metadata.threadId }
          : void 0;
    default:
      return o(e);
  }
}
function v(e) {
  return e.agent !== "user-agent";
}
function U(e) {
  return u(e) && g(e) === void 0;
}
function B(e) {
  return e.agent === "app" || r(e) || a(e);
}
function f(e) {
  return e.agent !== "mcp";
}
function w(e) {
  if (!f(e)) throw new Error("This operation is unavailable.");
}
function d(e) {
  switch (e.agent) {
    case "app":
    case "user-agent":
      return !0;
    case "mcp":
      return !1;
    case "api":
      return !a(e);
    default:
      return o(e);
  }
}
function O(e) {
  if (!d(e)) throw new Error("This operation is unavailable.");
}
export {
  h as a,
  r as b,
  p as c,
  a as d,
  A as e,
  g as f,
  b as g,
  u as h,
  x as i,
  l as j,
  i as k,
  C as l,
  c as m,
  y as n,
  T as o,
  v as p,
  U as q,
  B as r,
  f as s,
  w as t,
  d as u,
  O as v,
};
//# sourceMappingURL=chunk-W7RY7MYO.mjs.map
