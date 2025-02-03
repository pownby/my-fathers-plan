import { AppData } from "../types";

const CURR_VERSION = 0;
const NEXT_VERSION = 1;

export default function migrate_0_to_1(appData: AppData): AppData {
  // sanity check
  if ((appData.version || 0) !== CURR_VERSION) {
    console.error('Migration from version 0 failed');
    return { version: NEXT_VERSION };
  }

  console.log('migrating 0 to 1');
  // normally we'd imagine translating the old schema keys to the new, but since nobody on version 0 has actually used it, we'll just start fresh for simplicity
  return { version: NEXT_VERSION };
}