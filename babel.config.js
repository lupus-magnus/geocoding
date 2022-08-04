module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
        },
      },
    ],
    "@babel/preset-typescript",
  ],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@config": "./src/config",
          "@services": "./src/services",
          "@controllers": "./src/controllers",
        },
      },
    ],
  ],
  ignore: ["**/*.spec.ts"],
};
