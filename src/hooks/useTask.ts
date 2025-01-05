import { useContext, useMemo } from "react";

import AppContext from "../context/AppContext";

export default function useTask(id?: string) {
  const { appState: { tasks = [] } } = useContext(AppContext);

  return useMemo(() => {
    return !id ? null : tasks.find((t) => t.id === id)
  }, [id]);
}