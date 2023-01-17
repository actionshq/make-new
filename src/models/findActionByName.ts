import type { Action } from "@/models/Action";

export const findActionByName = (name: string): Promise<Action> => import(`@/actions/${name}.json`)
    .then(module => module.default)
