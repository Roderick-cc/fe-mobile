import { createModel } from "@rematch/core";
import { RootModel } from "./index";

export const commonModel = createModel<RootModel>()({
  name: "commonModel",
  state: {},
  reducers: {
    SUCCESS_MSG(state, payload: string) {
      // showToast({
      //   title: payload,
      //   icon: "success",
      //   duration: 2000,
      //   mask: true,
      // });
      return state;
    },
    FAILED_MSG(state, payload: string) {
      if (!payload) {
        return state;
      }
      // showToast({
      //   title: payload,
      //   icon: "none",
      //   duration: 2000,
      //   mask: true,
      // });
      return state;
    },
    // msg: true  || msg:{ title: '加加加loading'}
    LOADING_MSG(state, msg?: string | boolean) {
      return state;
    },
    INFO_MSG(state, payload: string) {
      // showToast({
      //   title: payload,
      //   icon: "none",
      //   duration: 2000,
      //   mask: true,
      // });
      return state;
    },
  },
});
