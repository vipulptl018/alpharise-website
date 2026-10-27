import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/**
 * False on the server and during hydration, true once the page's scripts are running.
 * Forms use it to keep their submit button disabled until their onSubmit handler exists,
 * otherwise an early click would submit natively and put the visitor's details in the URL.
 */
export function useHydrated(): boolean {
  return useSyncExternalStore(subscribe, () => true, () => false);
}
