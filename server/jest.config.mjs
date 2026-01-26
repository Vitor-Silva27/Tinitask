/** @type {import('jest').Config} */
export default {
  clearMocks: true,
  testEnvironment: 'node',
  testMatch: [
    '<rootDir>/src/modules/**/service/**/*.spec.ts',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
  ],
  moduleNameMapper: {
    '^@app/(.*)$': '<rootDir>/src/$1',
  },
  extensionsToTreatAsEsm: ['.ts'],

  transform: {
    '^.+\\.ts$': [
      'ts-jest',
      {
        useESM: true,
        tsconfig: 'tsconfig.json',
      },
    ],
  },

  coverageProvider: 'v8',
};
