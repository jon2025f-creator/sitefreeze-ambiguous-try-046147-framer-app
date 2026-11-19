import { a as B } from "chunk-T3EFZ3JU.mjs";
import {
  Bc as Be,
  Cc as Ne,
  E as $e,
  Ub as Ve,
  Vb as We,
  b as qe,
  n as Fe,
} from "chunk-XG5C2GXB.mjs";
import { u as xe, x as De } from "chunk-V3GYZX3X.mjs";
import { A as Ee } from "chunk-TISHAYM3.mjs";
import { a as ke, b as Te } from "chunk-CM5VK6C3.mjs";
import { a as ee } from "chunk-TVCAVVAF.mjs";
import { fa as je } from "chunk-46VEXFF2.mjs";
import { a as Me } from "chunk-NJTTZDII.mjs";
import { Xa as Ce, Ya as Se } from "chunk-BLLWCJ4E.mjs";
import { Rk as we, Yl as W, pa as ge } from "chunk-AT5OE6HK.mjs";
import { c as Le, d as Ue } from "chunk-BOKEPQOD.mjs";
import {
  $d as D,
  cj as A,
  ej as ce,
  fj as ue,
  gr as he,
  hj as me,
  jr as ye,
  kd as ae,
  mb as ne,
  se as de,
  te as w,
  xr as F,
} from "chunk-HB6AHKYH.mjs";
import { B as pe } from "chunk-Q5OEXSCG.mjs";
import { a as Ge } from "chunk-YKTCSMFP.mjs";
import { b as Re } from "chunk-YVCWATMP.mjs";
import { aa as V } from "chunk-JI2W5YLW.mjs";
import { l as Ie } from "chunk-A3YWU7XQ.mjs";
import { a as ve } from "chunk-K6L5GVTR.mjs";
import { a as Ae, v as r } from "chunk-5FU3YIBF.mjs";
import { b as Pe } from "chunk-OPXUE75P.mjs";
import { a as $ } from "chunk-O63GQI5X.mjs";
import { h as le } from "chunk-AAHMUU7O.mjs";
import { e as L } from "chunk-3CKYEPG2.mjs";
import { c as fe } from "chunk-52KW6HPC.mjs";
import { a as re, b as x } from "chunk-WRBBN7SY.mjs";
import { a as M } from "chunk-RNHTTH2C.mjs";
import { k as ie } from "chunk-D563A37T.mjs";
import { b as be } from "chunk-GBWZWM2Q.mjs";
import { a as oe } from "chunk-2FCXHKEL.mjs";
import { b as j, p as k } from "chunk-ARJ7WQTJ.mjs";
import { a as E } from "chunk-SWYZG2NI.mjs";
import { b as S } from "chunk-HJ6ZWR7D.mjs";
import { j as Z } from "chunk-PFWVXZ76.mjs";
import { b as te, c as se } from "chunk-4JY5UMT2.mjs";
import { a as X } from "chunk-YRQ7G4QH.mjs";
import { e as b } from "chunk-WLHSDIGQ.mjs";
function bt(n) {
  let e = be(),
    t = new URL(e.app);
  return (
    (t.protocol = t.protocol === "http:" ? "ws:" : "wss:"),
    (t.pathname = `/projects/${n}/socket`),
    t.href
  );
}
function ze() {
  ve("https://www.framer.com/downloads/");
}
var Oe = b(E(), 1),
  at = {
    type: "add",
    variant: "info",
    action: { title: "Install", onClick: ze },
    primaryText: "Use latest desktop app",
    secondaryText: "to sample colors.",
    key: "install-desktop-app",
    duration: 5e3,
    showCloseButton: "never",
  };
function jt({ channel: n, toast: e }) {
  (0, Oe.useEffect)(() => {
    if (!n) return;
    let t,
      s = {
        async sampleColor() {
          if (window.EyeDropper) {
            t?.abort();
            let i = new AbortController();
            t = i;
            let a = new window.EyeDropper();
            try {
              return {
                color: (
                  await a.open({ signal: i.signal }).catch((p) => {
                    if (p?.name === "AbortError") return { sRGBHex: void 0 };
                    throw p;
                  })
                ).sRGBHex,
              };
            } finally {
              t === i && (t = void 0);
            }
          }
          return (e(at), {});
        },
      },
      o = ee.on(n).register(s);
    return () => {
      (t?.abort(), o());
    };
  }, [n, e]);
}
var R = b(E(), 1);
var m = b(oe(), 1),
  U = "link",
  He = ["*"];
function N(n) {
  return `computed-link-${n}`;
}
var cs = R.default.memo(function ({
  control: e,
  controlKey: t,
  controlProp: s,
  onChange: o,
  onContextMenu: i,
  sortable: a,
  traitTypeKeys: d,
  deleteEnabled: p,
  deleteTitle: I,
  onDelete: T,
  supportsVariables: v = !1,
  supportsComputedValues: C = !1,
  supportsFetchDataValues: O = !1,
  nodeIds: H,
}) {
  let u = fe(),
    _ = (0, R.useMemo)(() => H ?? [], [H]),
    Ye = (0, R.useMemo)(() => $e(t || pe()), [t]),
    { value: f } = s,
    l = w(f) || A(f) ? f : re,
    y = (c) => {
      (o(t, (h) => ({ ...h, value: c }), _), qe(l, c));
    },
    q = (c) => {
      let { defaultValue: h } = e;
      return j(h) ? h : c;
    },
    Qe = () => {
      let c = q();
      k(c) && y(c);
    },
    Xe = () => {
      y(void 0);
    },
    Ze = u.scheduler.wrapHandler((c) => {
      let h = e.title || L(t),
        nt = j(l) ? l : q("");
      u.beginUndoGroup();
      let Q = we({ engine: u, scopeId: c, type: U, name: h, initialValue: nt });
      (Q && y(Q), u.endUndoGroup());
    }),
    K = u.scheduler.wrapHandler(() => {
      w(l) && y(void 0);
    }),
    et = u.scheduler.wrapHandler(() => {
      let c = ae({ type: "link", value: A(f) ? f : void 0 }),
        h = de("link", c, []);
      return (J(h), h);
    }),
    J = u.scheduler.wrapHandler((c) => {
      (y(c), je.navigation.presentPopout(N(t)));
    }),
    tt = a ? void 0 : e.title || L(t),
    Y = q(),
    st = !D(l) && !A(l),
    ot = Ve(u, l),
    rt = lt(u, l),
    it = j(Y) && A(f) && !me(f, ue({ url: Y }));
  return (0, m.jsx)(Ee, {
    title: tt,
    onContextMenu: i,
    onResetToDefault: Qe,
    resetToDefaultEnabled: it,
    variableType: W[U],
    allowedFileTypes: He,
    variableCreationType: U,
    onCreateVariable: Ze,
    onRemoveDynamicValue: K,
    dynamicValue: w(f) ? f : null,
    onSelectVariable: y,
    traitTypeKeys: d,
    withReorderControl: a,
    reorderColumnCount: 2,
    deleteEnabled: p,
    deleteTitle: I,
    onDelete: T,
    supportsVariables: v,
    supportsComputedValues: C,
    computedValuePopoutId: N(t),
    onSelectComputedValue: J,
    supportsFetchDataValues: O,
    onSelectFetchDataValue: et,
    children: w(l)
      ? (0, m.jsx)(Fe, {
          title: e.title || L(t),
          value: l,
          outputControl: e,
          expectedType: W[U],
          allowedFileTypes: He,
          popoutId: N(t),
          onRemove: K,
          onChangeDynamicValue: y,
          nodeIds: _,
          supportsComputedValues: C,
          supportsFetchDataValues: O,
          controlReferenceInfo: void 0,
        })
      : (0, m.jsx)(De, {
          id: Ye,
          sortable: a,
          popout: (0, m.jsx)(We, {
            link: x(l) ? void 0 : l,
            onChange: y,
            supportsVariables: v,
            supportsPageLinks: pt(u),
            supportsSlugVariables: v,
          }),
          navigationTitle: "Link",
          displayDivider: !0,
          title: x(l) ? "Add\u2026" : ot,
          previewWithoutWrapper: !0,
          preview: (0, m.jsx)(dt, { icon: rt }),
          onDelete: A(l) ? Xe : void 0,
          titleColor: st ? $.inputLabel : void 0,
        }),
  });
});
function dt({ icon: n }) {
  return (0, m.jsx)("span", {
    style: { display: "flex", marginLeft: 3, color: $.popupButtonPreviewIconBackground },
    children: n ?? (0, m.jsx)(xe, { type: "link" }),
  });
}
function pt(n) {
  if (!Pe(n)) return !0;
  let { scopeType: e } = n.stores.scopeStore;
  switch (e) {
    case "CanvasPage":
    case "DesignPage":
      return !1;
    default:
      return !0;
  }
}
function lt(n, e) {
  if (!ce(e)) return;
  let { webPageId: t, pathVariables: s } = e;
  if (!s) return;
  let o = n.tree.getNodeWithTrait(t, ne);
  if (!o) return;
  let i = n.componentLoader.dataForIdentifier(o.dataIdentifier);
  if (!i) return;
  let a = i.annotations?.framerSlug;
  if (!a) return;
  let d = s[a];
  if (!D(d)) return;
  let p = F(he, a);
  if (d.id === p) return (0, m.jsx)(Ne, {});
  let I = F(ye, a);
  if (d.id === I) return (0, m.jsx)(Be, {});
}
function G(n) {
  return `${n.ownerType}::${n.key}`;
}
var _e = class {
  constructor(e) {
    this.api = e;
    this.assetUpdatesEmitter.emit({});
  }
  api;
  assetUpdatesEmitter = new S();
  currentAssets = new Map();
  lastUpdatedAt = void 0;
  #t = 0;
  #e = 0;
  get latestUpdateTimestamp() {
    return this.lastUpdatedAt;
  }
  #s = new ge({
    delay: 16,
    maxDelay: 64,
    task: async () => {
      let e = ++this.#t,
        t = this.lastUpdatedAt,
        s = await this.api.getAssets({ updatedFrom: t });
      e < this.#e ||
        (t !== void 0 && this.lastUpdatedAt === void 0) ||
        ((this.#e = e),
        t === void 0 ? this.updateAll(s.assets) : this.updatePartial(s.assets),
        s.lastUpdatedAt && (this.lastUpdatedAt = s.lastUpdatedAt));
    },
  });
  assetUpdatesStream = this.assetUpdatesEmitter.newStream;
  async refresh() {
    this.#s.debounce();
  }
  async refreshFully() {
    ((this.lastUpdatedAt = void 0), await this.refresh());
  }
  updateAll(e) {
    ((this.currentAssets = new Map(e.map((t) => [G(t), t]))),
      this.assetUpdatesEmitter.emit({ assets: Array.from(this.currentAssets.values()) }));
  }
  updatePartial(e) {
    for (let t of e) this.currentAssets.set(G(t), t);
    this.assetUpdatesEmitter.emit({ assets: Array.from(this.currentAssets.values()) });
  }
  addAssets(e) {
    this.updatePartial(e);
  }
  deleteProjectAssets(e) {
    let t = !1;
    for (let s of e) t ||= this.currentAssets.delete(G({ ownerType: "project", key: s }));
    t && this.assetUpdatesEmitter.emit({ assets: Array.from(this.currentAssets.values()) });
  }
  uploadAsset = async (e) => {
    if (!this.api.uploadAsset) throw Error("Asset service is read only");
    let t = await this.api.uploadAsset(e);
    return (await this.refresh(), t);
  };
  duplicateAssets = async (e, t) => {
    if (!this.api.duplicateAssets) throw Error("Asset service is read only");
    let s = await this.api.duplicateAssets(e, t);
    return (this.addAssets(s), s);
  };
  async duplicateModuleAssets(e, t, s) {
    if (!this.api.duplicateModuleAssets) throw Error("Asset service is read only");
    let o = await this.api.duplicateModuleAssets(e, t, s);
    return (this.addAssets(o), o);
  }
  async duplicateWorkspaceAssets(e, t) {
    if (!this.api.duplicateWorkspaceAssets) throw Error("Asset service is read only");
    let s = await this.api.duplicateWorkspaceAssets(e, t);
    this.addAssets(s);
  }
  getAssetByFilename(e) {
    for (let t of this.currentAssets.values()) if (le(t) === e) return t;
  }
};
var Ke = class {
  constructor(e, t) {
    this.api = e;
    this.socket = t;
    t.onMessage(async (s) => {
      if (s.type !== "moduleEvents" || !this.emitter.hasStreams()) return;
      let o = await Promise.all(
        s.value.events.map(async (i) => {
          switch (i.type) {
            case "delete":
              return i;
            case "save":
              return { type: "save", module: await e.getModule({ moduleId: i.id }) };
            default:
              se(i);
          }
        })
      );
      this.emitter.emit({ events: o });
    });
  }
  api;
  socket;
  emitter = new S();
  notify(e) {
    this.socket.send({ type: "moduleEvents", value: { events: e } });
  }
  async create(e) {
    let t = await this.api.createModule(e);
    return (this.notify([{ type: "save", id: t.id, saveId: t.saveId }]), t);
  }
  async delete(e) {
    (await this.api.deleteModule(e), this.notify([{ type: "delete", id: e.moduleId }]));
  }
  async restore(e) {
    let t = await this.api.restoreModule(e);
    return (this.notify([{ type: "save", id: t.id, saveId: t.saveId }]), t);
  }
  async getModuleDependencies(e) {
    return this.api.getModuleDependencies(e);
  }
  async list(e) {
    return this.api.listModules(e);
  }
  async listNamespaces() {
    return this.api.listNamespaces();
  }
  async listPublishedModules(e) {
    return this.api.listPublishedModules(e);
  }
  async lookUpModules(e) {
    return this.api.lookUpModules(e);
  }
  async publish(e) {
    return this.api.publishModule(e);
  }
  async promoteSaves(e) {
    let t = await this.api.promoteModuleSaves(e);
    return (this.notify(t.data.map((s) => ({ type: "save", id: s.id, saveId: s.saveId }))), t);
  }
  async save(e) {
    let t = await this.api.saveModule(e);
    return (this.notify([{ type: "save", id: t.id, saveId: t.saveId }]), t);
  }
  async saveBatch(e) {
    let t = await this.api.saveModules(e);
    return (this.notify(t.data.map((s) => ({ type: "save", id: s.id, saveId: s.saveId }))), t);
  }
  async update(e) {
    let t = await this.api.updateModule(e);
    return (this.notify([{ type: "save", id: t.id, saveId: t.saveId }]), t);
  }
  moduleEventsStream(e) {
    return this.emitter.newStream(e);
  }
  async createNamespace(e) {
    return this.api.createNamespace(e);
  }
};
var g = b(E(), 1);
async function Je(n, e, t) {
  let s = `upload${Math.random()}`;
  try {
    t({
      type: "add",
      key: s,
      variant: "progress",
      primaryText: "Uploading remote file\u2026",
      duration: 1 / 0,
      showCloseButton: "never",
    });
    let o = await r.post(n, { url: e });
    return (
      t({
        type: "add",
        key: s,
        variant: "success",
        primaryText: "Your file",
        secondaryText: "has been uploaded.",
        duration: 1e4,
        moveToTop: !0,
      }),
      o
    );
  } catch (o) {
    throw (
      t({
        type: "add",
        key: s,
        variant: "error",
        primaryText: "Error uploading file.",
        secondaryText: "Please try again.",
        duration: 3e4,
        moveToTop: !0,
      }),
      o
    );
  }
}
var P = Z("useAPI"),
  z = class {
    constructor(e, t, s = M) {
      this.socket = e;
      this.projectId = t;
      this.dispatch = s;
    }
    socket;
    projectId;
    dispatch;
    apiBaseURL = X().api;
    wait(e) {
      r.wait(e);
    }
    getACL() {
      let e = ie.isOn("granularPermissions")
        ? `/web/v2/projects/${this.projectId}/acl`
        : `/web/projects/${this.projectId}/acl/`;
      return r
        .get(e, { contentCollaboratorEnabled: !0 })
        .then(({ users: t, invites: s, accessRequests: o }) => {
          let i = t.map((d) => ({
              ...d,
              kind: "user",
              role: d.role,
              permissions: d.grants ? Ie(d.grants) : d.permissions,
            })),
            a = s.map((d) => ({ ...d, kind: "invite", role: d.role, permissions: d.permissions }));
          return (
            this.dispatch({
              type: "resetACL",
              acl: [...i, ...a],
              accessRequests: o.map((d) => ({ ...d, kind: "accessRequest" })),
            }),
            i
          );
        })
        .catch((t) => {
          P.error("Failed to get ACL:", t);
        });
    }
    setInitialProject(e) {
      e.then((t) => {
        this.dispatch({ type: "setProject", project: t });
      }).catch((t) => P.error("Failed to set initial project:", t));
    }
    getProject() {
      r.get(`/web/projects/${this.projectId}`, { includeAiCreditLimit: "true" })
        .then((e) => {
          this.dispatch({ type: "setProject", project: e });
        })
        .catch((e) => P.error("Failed to get project:", e));
    }
    async pollProject({ intervalMillis: e, attempts: t, stopCondition: s }) {
      let o = await Me(this.projectId, { intervalMillis: e, attempts: t, stopCondition: s });
      return (
        o.status === 0 &&
          (this.dispatch({ type: "setProject", project: o.project }),
          this.notifyProjectChange("metadata")),
        o
      );
    }
    async invite(e) {
      let t = await ke(this.projectId, e);
      return (
        t.status === 0 &&
          (this.dispatch({ type: "updateACL", acl: [t.aclEntry] }),
          this.notifyProjectChange("acl")),
        t
      );
    }
    async removeInvite({ id: e }) {
      (await r.deleteRaw(`/web/projects/${this.projectId}/invites/${e}`),
        this.notifyProjectChange("acl"),
        this.getACL());
    }
    async updateUserPermissions(e) {
      let t = await Te(this.projectId, e);
      return (t.status === 0 && (this.notifyProjectChange("acl"), this.getACL()), t);
    }
    grantsWrites = new Map();
    updateUserGrants({ userId: e, grants: t, baseRevisionId: s }) {
      let o = this.grantsWrites.get(e);
      if (o) return ((o.pending = t), o.done);
      let i = { pending: t, baseRevisionId: s, done: Promise.resolve() };
      return (
        this.grantsWrites.set(e, i),
        (i.done = this.sendGrants(e, i).finally(() => this.grantsWrites.delete(e))),
        i.done
      );
    }
    async sendGrants(e, t) {
      for (; t.pending;) {
        let s = t.pending;
        t.pending = void 0;
        try {
          let o = await r.put(`/web/v2/projects/${this.projectId}/grants/${e}`, {
            grants: s,
            baseRevisionId: t.baseRevisionId,
          });
          ((t.baseRevisionId = o.revisionId),
            this.dispatch({
              type: "updateUserGrants",
              userId: e,
              grants: o.grants,
              grantsRevisionId: o.revisionId,
            }),
            this.notifyProjectChange("acl"));
        } catch (o) {
          if (!(o instanceof Ae && o.status === 409)) throw o;
          t.pending = void 0;
          let i = await this.getACL();
          t.baseRevisionId = i?.find((a) => a.user.id === e)?.grantsRevisionId ?? null;
        }
      }
    }
    async requestAccess(e) {
      let t = await Ge(e);
      return (this.notifyProjectChange("acl"), t);
    }
    async grantProjectAccessRequest({ id: e }) {
      let t = await Le(e);
      return (t.status === 0 && (this.notifyProjectChange("acl"), this.getACL()), t);
    }
    async denyProjectAccessRequest({ id: e }) {
      let t = await Ue(e);
      return (t.status === 0 && (this.notifyProjectChange("acl"), this.getACL()), t);
    }
    async forceRefreshACL() {
      (this.notifyProjectChange("acl"), this.getACL());
    }
    async removeUserPermissions({ id: e }) {
      (await r.deleteRaw(`/web/projects/${this.projectId}/acl/${e}`),
        this.notifyProjectChange("acl"),
        this.getACL());
    }
    async updateProject(e, t = !0) {
      t && this.dispatch({ type: "updateProject", changes: e });
      try {
        (await Re(this.projectId, e), this.getProject(), this.notifyProjectChange("metadata"));
      } catch (s) {
        throw (P.error("Failed to update project:", s), s);
      }
    }
    async subscribeToNotifications() {
      await Ce(this.projectId);
    }
    async unsubscribeFromNotifications() {
      await Se(this.projectId);
    }
    async getAssets(e = {}) {
      let { updatedFrom: t } = e,
        s = `/web/v2/projects/${this.projectId}/assets/`;
      if (t) {
        let i = new URLSearchParams({ updatedFrom: t });
        s += `?${i.toString()}`;
      }
      let o = await r.get(s);
      if (!Array.isArray(o.assets)) {
        let i = new Error("malformed /projects/./assets/ response");
        throw (P.reportError(i, o), i);
      }
      return o;
    }
    async uploadAsset(e, { maxFileSize: t, onExceedsCustomMaxSize: s, onToast: o = M } = {}) {
      let i = new URL(`/web/projects/${this.projectId}/assets`, this.apiBaseURL).href,
        a = await V({
          endpoint: i,
          fieldName: "file",
          file: e,
          onToast: o,
          customMaxSize: t,
          onExceedsCustomMaxSize: s,
        });
      return (a && this.notifyProjectChange("assets"), a);
    }
    async uploadUserAsset(e, { maxFileSize: t, onExceedsCustomMaxSize: s, onToast: o = M } = {}) {
      let i = new URL("/web/users/assets", this.apiBaseURL).href;
      return V({
        endpoint: i,
        fieldName: "file",
        file: e,
        onToast: o,
        customMaxSize: t,
        onExceedsCustomMaxSize: s,
      });
    }
    async uploadAssetByURL(e, t = M) {
      let s = await Je(`/web/projects/${this.projectId}/assets/fetch`, e, t);
      return (s && this.notifyProjectChange("assets"), s);
    }
    async duplicateAssets(e, t) {
      if (this.projectId === t)
        return (P.warn("Attempted to duplicate assets for current project"), []);
      let s = await r.post(`/web/projects/${this.projectId}/assets/duplicate`, {
        sourceProjectId: t,
        keys: e,
      });
      return (s && this.notifyProjectChange("assets"), s.assets);
    }
    async duplicateWorkspaceAssets(e, t) {
      let s = await r.post(`/web/projects/${this.projectId}/assets/duplicate`, {
        sourceTeamId: t,
        keys: e,
      });
      return (s && this.notifyProjectChange("assets"), s.assets);
    }
    async duplicateModuleAssets(e, t, s) {
      let o = { moduleId: e, saveId: t };
      s && s.length > 0 && (o.keys = s);
      let i = await r.post(`/web/projects/${this.projectId}/assets/duplicate-module`, o);
      return (i && this.notifyProjectChange("assets"), i.assets);
    }
    async deleteAssets(e) {
      let t = await r.delete(`/web/projects/${this.projectId}/assets/batch`, { keys: e });
      return (this.notifyProjectChange("assetsInvalidated"), t);
    }
    async createModule(e) {
      let t = new FormData();
      return (
        this.addModuleRequestToForm(e, t),
        await r.postRaw("/modules/v1/modules/", t).then((o) => o.json())
      );
    }
    async deleteModule({ moduleId: e }) {
      await r.deleteRaw(`/modules/v1/modules/${e}${this.modulesCopyOnWriteParam()}`);
    }
    async restoreModule({ moduleId: e, name: t }) {
      let s = {};
      return (t !== void 0 && (s.name = t), await r.post(`/modules/v1/modules/${e}/restore`, s));
    }
    async getModule({ moduleId: e, saveId: t }) {
      let s;
      return (
        t ? (s = `/modules/v1/modules/${e}/saves/${t}`) : (s = `/modules/v1/modules/${e}`),
        r.get(s)
      );
    }
    async getModuleDependencies({ moduleId: e, saveId: t }) {
      return r.get(`/modules/v1/modules/${e}/saves/${t}/dependencies/`);
    }
    async listModules({ types: e } = {}) {
      let t = new URLSearchParams();
      if (e) for (let o of e) t.append("type", o);
      return await r.get(`/modules/v1/modules/?${t.toString()}`, { projectId: this.projectId });
    }
    async listNamespaces() {
      return await r.get("/modules/v1/namespaces/");
    }
    async createNamespace(e) {
      return await r.post("/modules/v1/namespaces/", e);
    }
    async listPublishedModules({ namespace: e }) {
      let t = `/modules/v1/modules/namespaces/${encodeURIComponent(e)}/published/`;
      return await r.get(t);
    }
    async lookUpModules(e) {
      return r.post("/modules/v1/modules/batch/lookup/?respectIncludeStatus=true", e);
    }
    async publishModule({ namespace: e, name: t, ...s }) {
      let o = `/modules/v1/namespaces/${encodeURIComponent(e)}/published/${encodeURIComponent(t)}`;
      return await r.post(o, s);
    }
    async updateModule({ moduleId: e, ...t }) {
      return await r.post(`/modules/v1/modules/${e}${this.modulesCopyOnWriteParam()}`, t);
    }
    async saveModule(e) {
      let t = new FormData();
      return (
        await this.addModuleRequestToForm(e, t),
        await r
          .postRaw(`/modules/v1/modules/${e.moduleId}/saves/${this.modulesCopyOnWriteParam()}`, t)
          .then((o) => o.json())
      );
    }
    async saveModules({ batch: e }) {
      let t = new FormData();
      return (
        await Promise.all(e.map((o) => this.addModuleRequestToForm(o, t))),
        await r
          .postRaw(`/modules/v1/modules/batch/saves/${this.modulesCopyOnWriteParam()}`, t)
          .then((o) => o.json())
      );
    }
    async promoteModuleSaves({ promotions: e }) {
      return r.post("/modules/v1/modules/batch/promote-saves/", {
        ownerId: this.projectId,
        ownerType: "project",
        promotions: e,
        skipOwnerMismatch: !0,
      });
    }
    async addModuleRequestToForm(e, t) {
      let { files: s, ...o } = e,
        i = t.getAll("metadata").length;
      (B && window.CompressionStream && (o.transferEncoding = "gzip"),
        t.append(
          "metadata",
          JSON.stringify({
            ...o,
            projectId: this.projectId,
            files: s.map(({ content: a, bytes: d, ...p }) => p),
          })
        ),
        await Promise.all(
          s.map(async (a) => {
            let d = a.content ?? a.bytes;
            te(!k(d), "File needs content or bytes");
            let p = new Blob([d]);
            if (B && window.CompressionStream) {
              let I = new window.CompressionStream("gzip"),
                T = p.stream();
              p = await new Response(T.pipeThrough(I)).blob();
              let v = d.length - p.size,
                C = (v / d.length) * 100;
              P.debug("Saved", v, "bytes", `(${C.toFixed(1)}%)`, "compressing", a.name);
            }
            t.append(`files[${i}]`, new File([p], a.name));
          })
        ));
    }
    modulesCopyOnWriteParam() {
      return `?copyOnWrite=${this.projectId}`;
    }
    async requestAgentScreenshot(e) {
      return r.post("/web/agents/screenshot", e);
    }
    async getFileList() {
      return r.getRaw(`/web/vekter/projects/${this.projectId}/files`);
    }
    async getFile(e) {
      return r.getRaw(`/web/vekter/projects/${this.projectId}/files/${e}`);
    }
    async saveFile(e, t) {
      let s = new FormData(),
        o = new File([t], e, { type: "text/plain" });
      return (
        s.set("file", o),
        r.postRaw(`/web/vekter/projects/${this.projectId}/files/${e}`, s, void 0)
      );
    }
    async deleteFile(e) {
      return r.deleteRaw(`/web/vekter/projects/${this.projectId}/files/${e}`);
    }
    async getBuildOutput(e) {
      return r.getRaw(`/web/projects/${this.projectId}/files/${e}`);
    }
    async getPackagesMetadata(e) {
      return r.post("/store/meta/get-many", e);
    }
    async listPhotos(e) {
      return r.get("/web/unsplash/photos", e);
    }
    async searchPhotos(e) {
      return r.get("/web/unsplash/search/photos", e);
    }
    async getRandomPhoto(e) {
      return r.get("/web/unsplash/photos/random", e);
    }
    async downloadPhoto(e) {
      return r.get(`/web/unsplash/photos/${e.id}/download`);
    }
    async checkControlRequest() {
      return r.get("/auth/analysis/account-sharing");
    }
    async takeControl(e) {
      return r.post("/auth/analysis/account-sharing/take-control", e);
    }
    async linkUserAttachmentAssetToProject(e) {
      (await r.post(`/web/projects/${this.projectId}/assets/duplicate-from-user`, { keys: [e] })) &&
        this.notifyProjectChange("assets");
    }
    notifyProjectChange(e) {
      this.socket.send({ type: "notifyProjectChange", value: { scope: e } });
    }
  };
function Ks(n, e, t) {
  let s = (0, g.useMemo)(() => new z(n, e.projectId, t), [n, e.projectId, t]);
  (0, g.useEffect)(() => {
    s.getACL();
  }, [s]);
  let o = (0, g.useRef)(e);
  return (
    (o.current = e),
    (0, g.useEffect)(
      () =>
        n.onMessage((i) => {
          let a = o.current;
          if (i.type === "join") {
            if (a.aclById[i.id]) return;
          } else if (i.type === "welcome") {
            if (a.acl.length === 0) return;
            let d = !1;
            for (let p of a.activeIds)
              if (!a.aclById[p]) {
                d = !0;
                break;
              }
            if (!d) return;
          } else return;
          s.getACL();
        }),
      [s, n]
    ),
    s
  );
}
export { jt as a, cs as b, _e as c, Ke as d, z as e, Ks as f, bt as g };
//# sourceMappingURL=chunk-6CIDL5ZZ.mjs.map
