module.exports = {
  moduleFileExtensions: ['js', 'vue'],
  modulePaths: ['<rootDir>/src', '<rootDir>/node_modules'],
  transformIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@atoms(.*)$': '<rootDir>/src/atoms/$1',
    '^@molecules(.*)$': '<rootDir>/src/molecules/$1',
    '^@organisms(.*)$': '<rootDir>/src/organisms/$1',
    '^@features(.*)$': '<rootDir>/src/features/$1',
  },
  transform: {
    '.*\\.(vue)$': 'vue3-jest',
  },
  testEnvironment: 'jsdom',
  // collectCoverage: true,
  // collectCoverageFrom: ['**/*.{js,vue}'],
}
