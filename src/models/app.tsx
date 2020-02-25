export default {
  namespace: 'app',
  state: {
    a: 1,
  },
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    updateState(state: any, { payload }: any) {
      return { ...state, ...payload };
    },
  },
  effects: {},
};
