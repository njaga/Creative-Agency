import { defineStore } from 'pinia'

interface LoadingState {
  isLoading: boolean
}

export const useLoadingStore = defineStore('loading', {
  state: (): LoadingState => ({
    isLoading: false
  }),

  actions: {
    start() {
      this.isLoading = true
    },
    finish() {
      this.isLoading = false
    }
  }
})
