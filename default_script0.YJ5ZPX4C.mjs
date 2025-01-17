import { a as I, b as v } from "./chunk-VRFRDJ7T.mjs";
import {
  H as r,
  I as g,
  L as h,
  P as F,
  R,
  V as y,
  da as _,
  e as n,
  h as f,
} from "./chunk-N55JLCIT.mjs";
import { c as a } from "./chunk-ELYU6EKT.mjs";
a.__framer_importFromPackage = (e, c) => () =>
  n(F, {
    error: 'Package component not supported: "' + c + '" in "' + e + '"',
  });
a.process = {
  ...a.process,
  env: { ...(a.process ? a.process.env : void 0), NODE_ENV: "production" },
};
R();
a.__framer_events = a.__framer_events || [];
function k() {
  a.__framer_events.push(arguments);
}
(async () => {
  let e = {
      augiA20Il: {
        elements: {
          a0wTClzBn: "hero",
          gs5MxWgUo: "os",
          ikw_YCRTY: "ecosystem",
          TMUc_K7Xc: "points",
          TuXcdce3h: "points-1",
          XvOctOKYS: "ecosystem-1",
        },
        page: r(() =>
          import("./Hm7rS4hOqVZ8BpYVkVJuDoCWDC_oT_bD7TRehBMEZ_g.GUVSEL7C.mjs")
        ),
        path: "/",
      },
      MCjE7DAoz: {
        elements: {
          B7KIcuomw: "faq",
          eRltMwOIg: "02",
          J5_ZBZQsD: "03",
          RBGEHx2rx: "04",
          sbhzl5cCF: "01",
          ylIRT35KP: "onpage-nav-mobile",
        },
        page: r(() =>
          import("./q9jD2X2K0R_2jHxo5BdqiM6K5-SA1tpM3F-Fq41hvVU.ZFNYGXLP.mjs")
        ),
        path: "/about-fuel",
      },
      ZWxVqiuI4: {
        elements: {
          DtaAZlKXK: "faq",
          kGBO0cSSJ: "05",
          pBASFF6fA: "02",
          pIAVxU5Mu: "04",
          vub1AAPuA: "onpage-nav-mobile",
          YJ4TU4PWH: "03",
          yUK6VYD3B: "01",
        },
        page: r(() =>
          import("./uZABhavLDzL-54r4VafUr10e2C3uld1Tb02OEADAAt4.45NRTHWT.mjs")
        ),
        path: "/learn-execution",
      },
      JrRKNclDl: {
        elements: {},
        page: r(() =>
          import("./aXUQxfTMbT_H19XNLIdTEdw4EpDX2xkrL4rjXiantcw.VOQPUIHA.mjs")
        ),
        path: "/404",
      },
    },
    c = {},
    d = [{ code: "en", id: "default", name: "English", slug: "" }],
    E = r(() =>
      import("./aXUQxfTMbT_H19XNLIdTEdw4EpDX2xkrL4rjXiantcw.VOQPUIHA.mjs")
    ),
    s = document.getElementById("main"),
    o,
    l,
    i,
    m = !1;
  if ("framerHydrateV2" in s.dataset) {
    let t = JSON.parse(s.dataset.framerHydrateV2);
    (o = t.routeId), (l = t.localeId), (i = t.pathVariables), (m = !0);
  } else {
    let t = h(e, decodeURIComponent(location.pathname), !0, d);
    (o = t.routeId), (l = t.localeId), (i = t.pathVariables);
  }
  let p = await e[o].page.preload();
  e[o].page = p;
  let b = n(_, {
      RootComponent: p,
      isWebsite: !0,
      routeId: o,
      pathVariables: i,
      routes: e,
      collectionUtils: c,
      notFoundPage: E,
      isReducedMotion: void 0,
      localeId: l,
      locales: d,
      preserveQueryParams: void 0,
      enableSuspenseThatPreservesDom: !1,
      shouldMarkHydrationEnd: m,
    }),
    P = n(y, { children: b, value: { imgSizesWorkaroundEnabled: !1 } }),
    u = n(g, { children: P, value: { routes: {} } });
  m
    ? f(() => {
        performance.mark("framer-hydration-start"), v(s, u);
      })
    : I(s).render(u);
})().catch((e) => {
  throw (
    (k("published_site_load_error", {
      message: String(e),
      stack: e instanceof Error && typeof e.stack == "string" ? e.stack : null,
    }),
    e)
  );
});
//# sourceMappingURL=default_script0.YJ5ZPX4C.mjs.map
