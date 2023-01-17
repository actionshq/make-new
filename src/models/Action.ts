import type { Service } from "./Service"

export interface Action {

    /**
     * The name of an action
     * 
     * @example Document
     */
    name: string

    /**
     * The slug of an action
     * 
     * It is directly related to the action url.
     * 
     * @example make.dev/${slug}
     */
    slug: string

    /**
     * The css icon class
     * 
     * @example fa-solid fa-file
     */
    iconClass: string

    /**
     * Services offering this action
     */
    services: Service[]
}
