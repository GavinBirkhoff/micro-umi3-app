declare namespace API {
  type CurrentUser = {
    name?: string;
    userid?: string;
  };

  type LoginResult = {
    status?: string;
    type?: string;
    currentAuthority?: string;
    token?: string;
    expireIn?: number;
  };

  type LoginParams = {
    username?: string;
    password?: string;
    autoLogin?: boolean;
    type?: string;
  };

  type ErrorResponse = {
    /** 业务约定的错误码 */
    errorCode: string;
    /** 业务上的错误信息 */
    errorMessage?: string;
    /** 业务上的请求是否成功 */
    success?: boolean;
  };
}
