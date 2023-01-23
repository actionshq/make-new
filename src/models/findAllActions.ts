import type { Action } from "@actionshq/actions"

export const findAllActions = (): Promise<Action[]> => {
  const modules = import.meta.glob<false, any>(
    // absolute path is necessary because of glob import limitations
    "/node_modules/@actionshq/actions/dist/actions/*.json"
  )
  return Promise.all(
    Object.keys(modules)
      .filter((module) => !module.endsWith("_template.json"))
      .map((key) => modules[key]().then((module) => module.default))
  )
}
