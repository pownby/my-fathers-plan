import type { AppData } from "./types";

const appData: AppData = {
  state: {
    journal: {
      chem: 1,
      bio: 0,
      eng: 1,
      arc: 2
    },
    ingredients: {
      chem: 2,
      anim: 2,
      gear: 3,
      body: 1
    },
    knowledge: {
      bio: 1,
      eng: 2,
      arc: 1
    },
    experiments: {
      A: 2,
      B: 1
    }
  }
};

export default appData;