import resolve from "@rollup/plugin-node-resolve";

export default [
  {
    input: "index.js",
    output: {
      file: "output.js",
      format: "iife",
    },
    plugins: [
      resolve()
    ],
  },
]