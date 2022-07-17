import { defineStore } from 'pinia';

const useCommonStore = defineStore('common', {
    state: () => ({
        visibility: false,
    }),
    actions: {
        /**
         * @param {boolean} isVisible
         * @returns {void}
         */
        setVisibility(isVisible) {
            this.visibility = isVisible;
        },
    },
});

export default useCommonStore;
