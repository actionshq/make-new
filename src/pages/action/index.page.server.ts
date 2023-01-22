import { findAllActions } from "@/models/findAllActions"

export async function prerender(): Promise<string[]> {
  const allActions = await findAllActions()
  return allActions.map((action) => `/${action.spec.slug}`)
}
