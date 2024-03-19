module.exports = {
  root: true, // 此项是用来告诉eslint找当前配置文件不能往父级查找
  env: { // 指定环境变量
    node: true
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended"
  ],
  parserOptions: {
    parser: "@babel/eslint-parser"
  },
  rules: {
    /**
     * "规则名": [规则值, 规则配置]
     * "off" 或者 0 -- 关闭规则
     * "warn" 或者 1  --  开启规则，使用警告级别的错误：warn (不会导致程序退出)
     * "error" 或者 2  --  开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
     */
    'no-unused-vars': 'warn',
    'no-debugger': 'off',
    'no-var': 'error'
  }
}