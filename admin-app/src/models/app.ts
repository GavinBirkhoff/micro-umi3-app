import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';

export interface AppModelState {
  theme: string;
}

export interface AppModelType {
  namespace: 'app';
  state: AppModelState;
  effects: {
    query: Effect;
  };
  reducers: {
    // 启用 immer 之前
    // save: Reducer<AppModelState>;
    // 启用 immer 之后
    changeTheme: ImmerReducer<AppModelState>;
  };
  subscriptions: { setup: Subscription };
}

const AppModel: AppModelType = {
  namespace: 'app',

  state: {
    theme: 'light',
  },

  effects: {
    *query({ payload }, { call, put }) {},
  },
  reducers: {
    // 启用 immer 之前
    // save(state, action) {
    //   return {
    //     ...state,
    //     ...action.payload,
    //   };
    // },
    // 启用 immer 之后
    changeTheme(state, action) {
      state.theme = action.payload;
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/') {
          dispatch({
            type: 'query',
          });
        }
      });
    },
  },
};

export default AppModel;
