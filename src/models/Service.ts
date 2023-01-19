export interface Service {

    /**
     * The provider of a service
     * 
     * @example Weeker
     */
    provider: string
    
    /**
     * The name of a service
     * 
     * @example Weeker
     */
    name: string

    /**
     * The icon of a service
     * 
     * @example base64 / url
     */
    icon?: string

    /**
     * The url of a service
     * 
     * @example https://make.new
     */
    url: string
}
