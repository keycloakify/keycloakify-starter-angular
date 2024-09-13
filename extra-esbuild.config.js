import path from "node:path";

/** @type {import('esbuild').Plugin} */
export default {
  name: "define-static",
  setup(build) {
    const options = build.initialOptions;
    console.log(options.entryPoints);
    options.entryPoints = [
      {
        in: "./src/main.ts",
        out: path.resolve(import.meta.url, "build/static/js/")
      }
    ];
  }
};
