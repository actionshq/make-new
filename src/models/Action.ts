import type { Resource } from "./Resource";
import type { Service } from "./Service";

interface ActionSpec {
  /**
   * The slug of an action
   *
   * It is directly related to the action url.
   *
   * @example make.dev/${slug}
   */
  slug: string;

  /**
   * The css icon class
   *
   * @example fa-solid fa-file
   */
  iconClass: string;

  /**
   * Services offering this action
   */
  services: Service[];
}

export interface Action extends Resource<ActionSpec> {}
