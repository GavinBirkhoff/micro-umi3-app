import { defineConfig } from 'umi';
import routes from './config/routes';
import defaultSettings from './config/defaultSettings';

export default defineConfig({
  qiankun: {
    master: {},
  },
  access: {
    strictMode: true,
  },
  dva: {
    immer: true,
    hmr: false,
  },
  layout: {
    // 支持任何不需要 dom 的
    // https://procomponents.ant.design/components/layout#prolayout
    locale: false,
    ...defaultSettings,
  },
  theme: {
    '@primary-color': '#1DA57A',
    'root-entry-name': 'variable',
  },
  hash: true,
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  fastRefresh: {},
});
