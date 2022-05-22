const config = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
    '^@Pages(.*)$': '<rootDir>/src/pages',
    '^@Components(.*)$': '<rootDir>/src/components',
  },
}

export default config
