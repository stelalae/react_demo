import { IConfig } from 'umi-types';
const routes = require('./src/pages/routes');

// ref: https://umijs.org/config/
const config: IConfig = {
  treeShaking: true,
  routes,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: { immer: true, dynamicImport: undefined },
        dynamicImport: { webpackChunkName: true },
        title: 'react_demo',
        dll: true,

        routes: {
          exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,
            /components\//,
          ],
        },
      },
    ],
  ],
};

export default config;
