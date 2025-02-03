import { AppData } from "../types";
import { SCHEMA_VERSION } from "../constants";
import migrate_0_to_1 from "../migrations/0";

/* With more migrations, we'd prefer dynamically importing the ones we need, but we'll use a simpler approach for now */
const MIGRATIONS_MAP: Record<number, (appData: AppData) => AppData> = {
  0: migrate_0_to_1
};

export default function migrateAppData(appData: AppData): AppData {
  const currentVersion = appData.version || 0;

  let result = appData;
  for (let i = currentVersion; i < SCHEMA_VERSION; i++) {
    const migration = MIGRATIONS_MAP[i];
    if (migration) {
      result = migration(result);
    } else {
      console.error(`No migration found for version ${i}`);
      return { version: SCHEMA_VERSION };
    }
  }

  return result;
}