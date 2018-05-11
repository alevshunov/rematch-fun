export default {

  name: 'my',

  state: {
    ready: false
  },

  reducers: {
    doIt({a, b}, playload) {
      console.log('doIt', arguments);
      return { ready: true, a: b, b: a+b+playload }
    },

    setInitialState(original, data) {
      console.log('setInitialState', arguments);
      return { ready: true, a: data.a, b: data.b };
    }
  },

  effects: {
    // handle state changes with impure functions.
    // use async/await for async actions
    async load(payload, rootState) {
      console.log('load');
      await new Promise(resolve => setTimeout(resolve, 3000));
      this.setInitialState({ready: true, a: 10, b: 20});
    }
  }

}