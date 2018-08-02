const path = require('path');

export default {
  hd: true,
  exportStatic: {
    htmlSuffix: true,
  },
  plugins: [
    ['umi-plugin-datahub', {
      proxy: { //代理,匹配一个规则，改写到hub,拦截，代理请求
        '^/restapi': {
          hub: 'eleme-demo',
        },
      },
      store: path.join(__dirname, 'data'),
    }],
  ],
  disableServiceWorker: true,
  disableDynamicImport: !!process.env.COVERAGE,
};
