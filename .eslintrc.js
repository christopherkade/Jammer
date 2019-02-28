module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
  ],
  // add your custom rules here
  rules: {
    'no-console': 0,
    'vue/attribute-hyphenation': 0
  }
}
