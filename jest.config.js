/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  transform: {
    "^.+\\.tsx?$": "esbuild-jest",
  },
  testEnvironment: "node",
};
