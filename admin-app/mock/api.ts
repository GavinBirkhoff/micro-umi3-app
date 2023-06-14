import { Request, Response } from 'express';
import { sleep } from 'ts-copilot';
export default {
  '/api/config': async (req: Request, res: Response) => {
    await sleep(2000);
    res.send({
      // 注册子应用信息
      apps: [
        {
          name: 'user-app', // 唯一 id
          entry: '/user-app/', // html entry
          devPort: 7011,
        },
        {
          name: 'other-app', // 唯一 id
          entry: '/other-app/', // html entry
          devPort: 7012,
        },
      ],
      // 注册子应用路由
      routes: [
        {
          path: '/user',
          microApp: 'user-app',
          microAppProps: {
            autoSetLoading: true,
          },
          name: 'User',
          access: 'guest',
        },
        {
          path: '/other',
          microApp: 'other-app',
          microAppProps: {
            autoSetLoading: true,
          },
          name: 'Other',
          access: 'guest',
        },
      ],
    });
  },
};
