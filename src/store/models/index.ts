import { Models } from "@rematch/core";
import { GlobalModel } from "./global";

export interface RootModel extends Models<RootModel> {
  global: typeof GlobalModel;
}

const models: RootModel = {
  global: GlobalModel,
};

export default models;
