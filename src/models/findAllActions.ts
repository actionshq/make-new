import type { Action } from "@/models/Action";

export const findAllActions = (): Promise<Action[]> => {
    const modules = import.meta.glob<false, any>('@/actions/*.json')
    return Promise.all(Object.keys(modules).map((key) => modules[key]().then(module => module.default)))
}