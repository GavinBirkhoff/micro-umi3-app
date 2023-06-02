import { Request, Response } from 'express';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export default {
  'GET /api/currentUser': (req: Request, res: Response) => {
    console.log(req.headers);
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      res.status(401).send({
        data: {
          isLogin: false,
        },
        errorCode: '401',
        errorMessage: '请先登录！',
        success: true,
      });
      return;
    }
    res.send({
      success: true,
      data: {
        name: 'Gavin',
        userid: '00000001',
        email: 'gavinbirkhoff@gmail.com'
      },
    });
  },

  'POST /api/login': async (req: Request, res: Response) => {
    const { password, username, type } = req.body;
    await waitTime(2000);
    if (password === '123456' && username === 'admin') {
      res.send({
        status: 'ok',
        type,
        currentAuthority: 'admin',
        token:'Bearer xxxx-xxxx-xxxx-xxxx',
        expireIn:60*1000

      });
      return;
    }

    res.send({
      status: 'error',
      type,
      currentAuthority: 'guest',
    });
  },
  'POST /api/logout': (req: Request, res: Response) => {
    res.send({ data: {}, success: true });
  },

  'GET /api/500': (req: Request, res: Response) => {
    res.status(500).send({
      timestamp: 1513932555104,
      status: 500,
      error: 'error',
      message: 'error',
      path: '/base/category/list',
    });
  },
  'GET /api/404': (req: Request, res: Response) => {
    res.status(404).send({
      timestamp: 1513932643431,
      status: 404,
      error: 'Not Found',
      message: 'No message available',
      path: '/base/category/list/2121212',
    });
  },
  'GET /api/403': (req: Request, res: Response) => {
    res.status(403).send({
      timestamp: 1513932555104,
      status: 403,
      error: 'Forbidden',
      message: 'Forbidden',
      path: '/base/category/list',
    });
  },
  'GET /api/401': (req: Request, res: Response) => {
    res.status(401).send({
      timestamp: 1513932555104,
      status: 401,
      error: 'Unauthorized',
      message: 'Unauthorized',
      path: '/base/category/list',
    });
  },
};
