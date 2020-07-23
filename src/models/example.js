import {channelBanner} from '../services/example'
export default {

  namespace: 'example',

  state: {
    result:[]
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      const result=yield call(channelBanner,payload);
      console.log(result);
      const data=result.data;
      if(data){
        yield put(
          { type: 'save',
          payload:{result:data.result} }
          );
      }
   
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
