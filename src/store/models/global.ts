import { createModel } from "@rematch/core";
import { RootModel } from "./index";

export const GlobalModel = createModel<RootModel>()({
  name: "global",
  state: {},
  effects: (dispatch) => ({
    /** 登录 */
    async loginEff(payload, state) {
      try {
      } catch (err) {
        return false;
      }
    },
  }),
  reducers: {
    SET_locationObj(state, payload) {
      return { ...state, locationObj: payload };
    },
  },
});
