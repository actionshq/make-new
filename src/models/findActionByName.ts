import type { Action } from "@/models/Action"

export const findActionByName = (name: string): Promise<Action> =>
  import(
    `../../node_modules/@actionshq/actions/dist/actions/${name}.json`
  ).then((module) => module.default)
