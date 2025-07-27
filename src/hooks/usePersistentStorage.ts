import { useEffect } from 'react';
import debounce from 'lodash.debounce';

import { AppData, PersistentData } from "../types";
import { STORAGE_KEY } from "../constants";

function writeStorage(value: string) {
  localStorage.setItem(STORAGE_KEY, value);
}

const debouncedWriteStorage = debounce(writeStorage, 300);

function writePersistentData(persistentData: PersistentData) {
  debouncedWriteStorage(JSON.stringify(persistentData));
}

export default function usePersistentStorage(appData: AppData) {
  // take properties that we want to be persistent
  const { version, tableau, tasks } = appData;

  useEffect(() => {
    writePersistentData({
      version,
      tableau,
      tasks
    });
  }, [version, tableau, tasks]);
}