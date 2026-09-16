import { j as t, n as o } from "chunk-6BQLHAAI.mjs";
var r = "https://ec6f39c7d6654defa8ab3d67acd9f94f@o20425.ingest.sentry.io/1860728",
  p = r.split("/").pop() ?? "";
var i = 0.1;
function s(e) {
  return !!e?.originalException?.skipSentry;
}
function S() {
  t({
    dsn: r,
    release: "7e6a191d02cf65b8905da97d411d14b3932fe35c",
    environment: "production",
    tracePropagationTargets: [],
    tracesSampleRate: i,
    beforeSend(e, n) {
      return s(n) ? null : (o(e, n), e);
    },
  });
}
function d() {
  t({
    dsn: "https://6673e0d10436437a91575c80a59959cc@o20425.ingest.sentry.io/5026406",
    release: "7e6a191d02cf65b8905da97d411d14b3932fe35c",
    environment: "production",
    ignoreErrors: ["Component exceeded time limit"],
    integrations: (e) => e.filter((n) => n.name !== "GlobalHandlers"),
    tracesSampleRate: i,
    tracePropagationTargets: [],
    beforeSend(e, n) {
      return s(n) ? null : e;
    },
  });
}
function y() {
  t({
    dsn: "https://66e90dac3a594415ba30098b9f9fcac4@sentry.io/92817",
    environment: "production",
    release: "7e6a191d02cf65b8905da97d411d14b3932fe35c",
  });
}
function l() {
  t({
    dsn: "https://6334759d5f8d49868b7d831eef45097b@sentry.io/1365185",
    release: "7e6a191d02cf65b8905da97d411d14b3932fe35c",
    environment: "production",
  });
}
export { S as a, d as b, y as c, l as d };
//# sourceMappingURL=chunk-KBRHYGU7.mjs.map
