import { init, RematchDispatch, RematchRootState } from "@rematch/core";
import loadingPlugin, { ExtraModelsFromLoading } from "@rematch/loading";
import models, { RootModel } from "./models/index";

type FullModel = ExtraModelsFromLoading<RootModel>;

const store = init<RootModel, FullModel>({
  plugins: [loadingPlugin()],
  models,
});

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel, FullModel>;
export default store;
