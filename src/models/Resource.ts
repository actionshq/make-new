export interface Resource<T> {
  /**
   * The api version of a resource
   *
   * @example make.new/v1alpha1
   */
  apiVersion: string

  /**
   * The kind of a resource
   *
   * @example Action
   */
  kind: string

  /**
   * Metadata
   */
  metadata: {
    /**
     * The resource name
     *
     * @example Document
     */
    name: string
  }

  /**
   * Specification
   */
  spec: T
}
