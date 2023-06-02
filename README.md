# micro-umi3-app
基于umi3 qiankun antd4的微前端应用，提供基本的登录鉴权能力，我们可以很容易在这套模版的基础之上，快速开始业务能功能。

# 快速开始

```shell
# 主应用
cd admin-app
yarn
yarn start

# 子应用
cd user-app
yarn
yarn start

# 子应用
cd other-app
yarn
yarn start
```

# 主要实现功能

下面是一套微前端的基本架构能力，只提供基本必要功能，过多的功能会让不同的业务场景，在使用上发生困惑和更多的代码调整。

- 登录鉴权
- 路由管理
- 全局状态管理
- 父子应用通信
- 模块共享
- CICD

# 说明

这套项目并不深度优化每个服务的工程化，我认为使用微前端的项目，应该已经很熟悉单体项目的工程结构和生产构建的umi优化配置。