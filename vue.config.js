const apiPrefix = ['/app_v3', '/w'];
const proxy = {};
apiPrefix.forEach(item => {
  proxy[item] = {
    target: 'https://m.zuzuche.com',
    changeOrigin: true
  }
});
module.exports = {
  devServer: {
     proxy
  }
}