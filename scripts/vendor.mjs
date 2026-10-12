import { cpSync, mkdirSync, readdirSync, rmSync } from "node:fs";

const out = "www/vendor";
rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });

for (const font of ["bricolage-grotesque", "figtree"]) {
  const src = `node_modules/@fontsource-variable/${font}`;
  const dst = `${out}/fonts/${font}`;
  mkdirSync(`${dst}/files`, { recursive: true });
  cpSync(`${src}/index.css`, `${dst}/index.css`);
  for (const f of readdirSync(`${src}/files`)) {
    if (f.endsWith("-wght-normal.woff2")) cpSync(`${src}/files/${f}`, `${dst}/files/${f}`);
  }
}
cpSync("node_modules/jspdf/dist/jspdf.umd.min.js", `${out}/jspdf.umd.min.js`);
cpSync("node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.min.js", `${out}/jspdf.plugin.autotable.min.js`);
console.log("vendor assets copied to", out);
