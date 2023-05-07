const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // path to next.js app
  dir: "./",
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
};

// createJestConfig is exported
module.exports = createJestConfig(customJestConfig);
