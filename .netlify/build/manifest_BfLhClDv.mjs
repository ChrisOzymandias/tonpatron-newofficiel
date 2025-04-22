import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import { o as NOOP_MIDDLEWARE_HEADER, p as decodeKey } from './chunks/astro/server_DQq-9Zo_.mjs';
import 'clsx';
import 'cookie';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/chris/OneDrive/Bureau/Windsurf/tonpatron-new/","cacheDir":"file:///C:/Users/chris/OneDrive/Bureau/Windsurf/tonpatron-new/node_modules/.astro/","outDir":"file:///C:/Users/chris/OneDrive/Bureau/Windsurf/tonpatron-new/dist/","srcDir":"file:///C:/Users/chris/OneDrive/Bureau/Windsurf/tonpatron-new/src/","publicDir":"file:///C:/Users/chris/OneDrive/Bureau/Windsurf/tonpatron-new/public/","buildClientDir":"file:///C:/Users/chris/OneDrive/Bureau/Windsurf/tonpatron-new/dist/","buildServerDir":"file:///C:/Users/chris/OneDrive/Bureau/Windsurf/tonpatron-new/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/blog.Cehq34E2.css"},{"type":"external","src":"/_astro/blog.BCDqCc5J.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/blog.Cehq34E2.css"},{"type":"external","src":"/_astro/blog.BCDqCc5J.css"}],"routeData":{"route":"/admin/blog","isIndex":false,"type":"page","pattern":"^\\/admin\\/blog\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}],[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/admin/blog.astro","pathname":"/admin/blog","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/blog.Cehq34E2.css"},{"type":"external","src":"/_astro/blog.BCDqCc5J.css"}],"routeData":{"route":"/ajouter-avis","isIndex":false,"type":"page","pattern":"^\\/ajouter-avis\\/?$","segments":[[{"content":"ajouter-avis","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/ajouter-avis.astro","pathname":"/ajouter-avis","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/blog.Cehq34E2.css"},{"type":"external","src":"/_astro/blog.BCDqCc5J.css"}],"routeData":{"route":"/blog/[id]","isIndex":false,"type":"page","pattern":"^\\/blog\\/([^/]+?)\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/blog/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/blog.Cehq34E2.css"},{"type":"external","src":"/_astro/blog.BCDqCc5J.css"}],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/blog.Cehq34E2.css"},{"type":"external","src":"/_astro/blog.BCDqCc5J.css"}],"routeData":{"route":"/categories","isIndex":false,"type":"page","pattern":"^\\/categories\\/?$","segments":[[{"content":"categories","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/categories.astro","pathname":"/categories","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/blog.Cehq34E2.css"}],"routeData":{"route":"/entreprise/creer","isIndex":false,"type":"page","pattern":"^\\/entreprise\\/creer\\/?$","segments":[[{"content":"entreprise","dynamic":false,"spread":false}],[{"content":"creer","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/entreprise/creer.astro","pathname":"/entreprise/creer","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/blog.Cehq34E2.css"}],"routeData":{"route":"/entreprise/[nomentreprise]/[siren]/creer","isIndex":false,"type":"page","pattern":"^\\/entreprise\\/([^/]+?)\\/([^/]+?)\\/creer\\/?$","segments":[[{"content":"entreprise","dynamic":false,"spread":false}],[{"content":"nomentreprise","dynamic":true,"spread":false}],[{"content":"siren","dynamic":true,"spread":false}],[{"content":"creer","dynamic":false,"spread":false}]],"params":["nomentreprise","siren"],"component":"src/pages/entreprise/[nomentreprise]/[siren]/creer.astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/blog.Cehq34E2.css"}],"routeData":{"route":"/entreprise/[siren]","isIndex":false,"type":"page","pattern":"^\\/entreprise\\/([^/]+?)\\/?$","segments":[[{"content":"entreprise","dynamic":false,"spread":false}],[{"content":"siren","dynamic":true,"spread":false}]],"params":["siren"],"component":"src/pages/entreprise/[siren].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/blog.Cehq34E2.css"},{"type":"external","src":"/_astro/blog.BCDqCc5J.css"}],"routeData":{"route":"/entreprises","isIndex":false,"type":"page","pattern":"^\\/entreprises\\/?$","segments":[[{"content":"entreprises","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/entreprises.astro","pathname":"/entreprises","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/blog.Cehq34E2.css"},{"type":"external","src":"/_astro/blog.BCDqCc5J.css"}],"routeData":{"route":"/faq","isIndex":false,"type":"page","pattern":"^\\/faq\\/?$","segments":[[{"content":"faq","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/faq.astro","pathname":"/faq","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/blog.Cehq34E2.css"},{"type":"external","src":"/_astro/blog.BCDqCc5J.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://tonpatron.fr","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/chris/OneDrive/Bureau/Windsurf/tonpatron-new/src/pages/entreprise/creer.astro",{"propagation":"none","containsHead":true}],["C:/Users/chris/OneDrive/Bureau/Windsurf/tonpatron-new/src/pages/entreprise/[nomentreprise]/[siren]/creer.astro",{"propagation":"none","containsHead":true}],["C:/Users/chris/OneDrive/Bureau/Windsurf/tonpatron-new/src/pages/entreprise/[siren].astro",{"propagation":"none","containsHead":true}],["C:/Users/chris/OneDrive/Bureau/Windsurf/tonpatron-new/src/pages/404.astro",{"propagation":"none","containsHead":true}],["C:/Users/chris/OneDrive/Bureau/Windsurf/tonpatron-new/src/pages/admin/blog.astro",{"propagation":"none","containsHead":true}],["C:/Users/chris/OneDrive/Bureau/Windsurf/tonpatron-new/src/pages/ajouter-avis.astro",{"propagation":"none","containsHead":true}],["C:/Users/chris/OneDrive/Bureau/Windsurf/tonpatron-new/src/pages/blog/[id].astro",{"propagation":"none","containsHead":true}],["C:/Users/chris/OneDrive/Bureau/Windsurf/tonpatron-new/src/pages/blog/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/chris/OneDrive/Bureau/Windsurf/tonpatron-new/src/pages/categories.astro",{"propagation":"none","containsHead":true}],["C:/Users/chris/OneDrive/Bureau/Windsurf/tonpatron-new/src/pages/entreprises.astro",{"propagation":"none","containsHead":true}],["C:/Users/chris/OneDrive/Bureau/Windsurf/tonpatron-new/src/pages/faq.astro",{"propagation":"none","containsHead":true}],["C:/Users/chris/OneDrive/Bureau/Windsurf/tonpatron-new/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/admin/blog@_@astro":"pages/admin/blog.astro.mjs","\u0000@astro-page:src/pages/ajouter-avis@_@astro":"pages/ajouter-avis.astro.mjs","\u0000@astro-page:src/pages/blog/[id]@_@astro":"pages/blog/_id_.astro.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/categories@_@astro":"pages/categories.astro.mjs","\u0000@astro-page:src/pages/entreprise/creer@_@astro":"pages/entreprise/creer.astro.mjs","\u0000@astro-page:src/pages/entreprise/[nomentreprise]/[siren]/creer@_@astro":"pages/entreprise/_nomentreprise_/_siren_/creer.astro.mjs","\u0000@astro-page:src/pages/entreprise/[siren]@_@astro":"pages/entreprise/_siren_.astro.mjs","\u0000@astro-page:src/pages/entreprises@_@astro":"pages/entreprises.astro.mjs","\u0000@astro-page:src/pages/faq@_@astro":"pages/faq.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_BfLhClDv.mjs","C:/Users/chris/OneDrive/Bureau/Windsurf/tonpatron-new/node_modules/unstorage/drivers/fs-lite.mjs":"chunks/fs-lite_COtHaKzy.mjs","C:/Users/chris/OneDrive/Bureau/Windsurf/tonpatron-new/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_BHMVmS52.mjs","C:/Users/chris/OneDrive/Bureau/Windsurf/tonpatron-new/src/components/BlogEditorReact.jsx":"_astro/BlogEditorReact.CLHY7uAj.js","C:/Users/chris/OneDrive/Bureau/Windsurf/tonpatron-new/src/components/EntrepriseSearch.jsx":"_astro/EntrepriseSearch.CNuA8eiI.js","@astrojs/react/client.js":"_astro/client.DHn7wJxm.js","C:/Users/chris/OneDrive/Bureau/Windsurf/tonpatron-new/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts":"_astro/Layout.astro_astro_type_script_index_0_lang.C-F3AgCG.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/chris/OneDrive/Bureau/Windsurf/tonpatron-new/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts","const t=document.getElementById(\"mobile-menu-btn\"),e=document.getElementById(\"mobile-menu\");t&&t.addEventListener(\"click\",()=>{e.classList.toggle(\"hidden\")});e&&e.querySelectorAll(\"a\").forEach(n=>n.addEventListener(\"click\",()=>e.classList.add(\"hidden\")));"]],"assets":["/_astro/blog.Cehq34E2.css","/_astro/blog.BCDqCc5J.css","/favicon.svg","/_redirects","/_astro/BlogEditorReact.CLHY7uAj.js","/_astro/client.DHn7wJxm.js","/_astro/EntrepriseSearch.CNuA8eiI.js","/_astro/index.6otl1p8d.js","/_astro/index.CGqfUJ1b.js","/_astro/jsx-runtime.D_zvdyIk.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"m0jXT8q+9WwOYyLF50ZaAGTOi6MNqOK3cjYCVFLW5s4=","sessionConfig":{"driver":"fs-lite","options":{"base":"C:\\Users\\chris\\OneDrive\\Bureau\\Windsurf\\tonpatron-new\\node_modules\\.astro\\sessions"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/fs-lite_COtHaKzy.mjs');

export { manifest };
