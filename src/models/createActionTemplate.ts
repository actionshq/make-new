import { startCase, template } from "lodash-es"

export async function createActionTemplate(
  actionSlug: string
): Promise<string> {
  const rawTemplate = (
    await import("@actionshq/actions/dist/actions/_template.yaml?raw")
  ).default

  const filledTemplate = template(rawTemplate)({
    actionName: startCase(actionSlug),
    actionSlug,
    iconName: "${iconName}",
  })

  return filledTemplate
}
