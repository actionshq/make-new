import type { Action } from "@actionshq/actions"

export const findActionByName = (name: string): Promise<Action> =>
  import(
    // vite doesn't support variable absolute imports
    `../../node_modules/@actionshq/actions/dist/actions/${name}.json`
  ).then((module) => module.default)
