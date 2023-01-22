import { startCase } from "lodash-es"

export const createActionTemplate = (actionSlug: string) =>
  encodeURIComponent(`apiVersion: make.new/v1alpha1
kind: Action
metadata:
  name: ${startCase(actionSlug)}
spec:
  # find appropriate icon https://fontawesome.com/search?o=r&m=free&s=solid
  iconClass: fa-solid {{icon}}
  services: []
`)
