const nextJest = require('next/jest');
// const JsConfigPathsMapper = require('jsconfig-paths-jest-mapper');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testPathIgnorePatterns: ['<rootDir>/cypress/'],
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '^@/pages/(.*)$': '<rootDir>/pages/$1',
    '^@/styled-components/(.*)': '<rootDir>/components/styled-components/$1',
    '^@/lib/(.*)$': '<rootDir>/lib/$1',
    '^@/styles/(.*)$': '<rootDir>/styles/$1',
    '^@/utils/(.*)$': '<rootDir>/utils/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
};

module.exports = createJestConfig(customJestConfig);
