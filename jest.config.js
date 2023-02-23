module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  testMatch: ["<rootDir>/tests/**/*.test.ts"],
  //   collectCoverage: true,
  //   collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
  //   coverageDirectory: "coverage",
  //   coverageReporters: ["text-summary", "lcov"],
};
