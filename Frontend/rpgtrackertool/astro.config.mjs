// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
  renderers: [
    '@astrojs/renderer-svelte',
  ],
  packageOptions: {
    types: true,
  },
  buildOptions: {
    out: "dist",
    sourcemap: true,
  },
});
