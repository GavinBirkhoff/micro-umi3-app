# micro-umi3-app

基于umi3 qiankun antd4的微前端应用，提供基本的登录鉴权能力，我们可以很容易在这套模版的基础之上，快速开始业务能功能。业余时间制作，离我想要的结果差很多，持续更新～点赞不迷路

现代浏览器，移步到[micro-umi4-app](https://github.com/GavinBirkhoff/micro-umi4-app)，但是它还没有开始，在我把当前项目做完事后，再开始～
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

- [ ] 登录鉴权 在大型系统的微前端架构中，子应用通常无法独立登录。这是因为登录通常涉及到用户身份验证和会话管理等功能，这些功能需要在主应用或中心化的认证系统中进行验证和管理。如果有历史原因或者需求是可以子应用独立登录。
- [ ] 路由管理
- [ ] 全局状态管理
- [ ] 父子应用通信 父子通信的方式除了官方有很多，这里只实现正规的方式，足以满足很多场景。如果你的不满足的话，你应该组织好你的业务逻辑，而不是让技术框架去适配一个你以为的合理场景。
- [ ] 模块共享
- [ ] 接口请求
- [ ] 开发集成 实现开发子应用的时候，不必非要启动主应用。
- [ ] CICD
- [ ] 其他
# 说明

在这套项目里，每个应用并不会做到拿来即用，很多和微前端没有直接关系的功能是不会去做的，比如说小到一个技术点，像token无痛刷新，路由拦截器，请求拦截器，响应拦截器，登录退出记住密码的加密等等；大到模块的封装，工程化配置，开发集成环境，生产性能优化，CICD等等；我认为使用微前端的项目，应该已经很熟悉单体项目的工程结构和生产构建的umi优化配置。只需要把以往成熟的单体项目整合到这套应用里即可。

# 大型微前端应用时，你可能需要实现的功能

1. 主应用和子应用的集成：将主应用和多个子应用进行集成，使它们能够独立运行和协同工作。

2. 路由管理：实现主应用和子应用之间的路由管理，包括路由切换、参数传递和嵌套路由等。

3. 状态管理：在整个微前端应用中管理共享状态，可以使用状态管理库（如 Redux、Mobx 或 dva）来实现。

4. 模块共享：确保主应用和子应用之间可以共享模块和组件，以减少重复代码和提高开发效率。

5. 数据通信：实现主应用和子应用之间的数据通信机制，例如使用事件总线、消息总线或共享状态管理器来实现跨应用的数据传递和更新。

6. 权限和认证：实现用户登录、权限管理和认证机制，确保只有经过认证的用户可以访问相应的应用和功能。

7. 异步加载和按需加载：支持子应用的异步加载和按需加载，以提高应用的性能和加载速度。

8. 构建和部署：实现整个微前端应用的构建和部署流程，包括打包子应用、编排和发布子应用等。

9. 错误处理和调试：提供统一的错误处理机制，包括捕获和处理子应用的错误，并提供调试工具来定位和修复问题。

10. 性能优化：优化应用的性能，包括减少网络请求、缓存数据、代码分割和懒加载等。

11. 日志和监控：实现应用的日志记录和监控，可以使用日志服务和监控工具来收集和分析应用的运行情况。
