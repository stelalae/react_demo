export default {
  namespace: 'my',
  state: {
    a: 1,
  },
  reducers: {
    updateState(state: any, { payload }: any) {
      return { ...state, ...payload };
    },
  },
  effects: {},
};
