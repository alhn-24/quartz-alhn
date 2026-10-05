import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()

import * as ExternalPlugin from "./.quartz/plugins"

ExternalPlugin.Explorer({
  sortFn: (a, b) => {
    const customOrder = ["Beginner", "Intermediate 1", "Intermediate 2", "Intermediate 3", "Intermediate 4", "Intermediate 5", "Advanced"]
    const aIndex = customOrder.indexOf(a.name.toLowerCase())
    const bIndex = customOrder.indexOf(b.name.toLowerCase())
    if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex
    if (aIndex !== -1) return -1
    if (bIndex !== -1) return 1
    return a.name.localeCompare(b.name)
  },
})