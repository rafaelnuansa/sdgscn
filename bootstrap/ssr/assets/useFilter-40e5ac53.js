import { useCallback, useEffect } from "react";
import { l as lodashExports } from "./lodash-d8bc076d.js";
import { router } from "@inertiajs/react";
function useFilter({ route, values, only }) {
  const reload = useCallback(
    lodashExports.debounce((query) => {
      router.get(route, lodashExports.pickBy(query), {
        only,
        preserveState: true,
        preserveScroll: true
      });
    }, 500),
    []
  );
  useEffect(() => reload(values), [values, reload]);
  return { values };
}
export {
  useFilter as u
};
