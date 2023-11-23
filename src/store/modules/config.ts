import { defineStore } from 'pinia';

export const useConfigStore = defineStore('config', {
  state: () => {
    return {
      loading: false,
      loadingText: ''
    };
  },
  getters: {
    isLoading() {
      return this.loading;
    }
  },
  actions: {
    startLoading() {
      this.loading = true;
    },
    endLoading() {
      this.loading = false;
    },
    setLoadingText(text: string) {
      this.loadingText = text;
    }
  }
});
