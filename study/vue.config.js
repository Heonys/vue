module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:19090",
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
};