import type { Engine } from "@tsparticles/engine"
import Particles from "@tsparticles/vue3"
import { loadSlim } from "@tsparticles/slim"

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Particles, {
    init: async (engine: Engine) => {
      await loadSlim(engine)
    }
  })
}) 