module.exports = {
  globals: {
    __GRAPHQL_SERVER__: "http://127.0.0.1:4000"
  },
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'vue'
  ],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/components/$1"
  },
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.jsx?$': 'babel-jest'
  },
  snapshotSerializers: [
    'jest-serializer-vue'
  ],
  testMatch: [
    '**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'
  ],
  testURL: 'http://localhost/'
};