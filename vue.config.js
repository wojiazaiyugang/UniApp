"use strict"
const path = require("path")

function resolve(dir) {
  return path.join(__dirname, dir)
}


module.exports = {
  lintOnSave: process.env.NODE_ENV === "development",
  // 路径别名
  configureWebpack: {
    name: "HiCoachAdmin",
    resolve: {
      alias: {
        "wxcomponents": resolve("src/wxcomponents/"),
        "@": resolve("src"),
      },
    },
  },
}