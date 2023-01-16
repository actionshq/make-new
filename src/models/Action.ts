import type { Service } from "./Service"

export interface Action {

    /**
     * The name of an action
     * 
     * It is directly related to the action url.
     * 
     * @example Document -> make.dev/document
     */
    name: string

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
