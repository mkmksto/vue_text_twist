import { defineStore } from "pinia"
import { ref } from "vue"

export const useSettingsModal = defineStore("settingsModal", () => {
    const isSettingsModalVisible = ref(false)

    function showSettingsModal() {
        isSettingsModalVisible.value = true
    }

    function hideSettingsModal() {
        isSettingsModalVisible.value = false
    }

    return {
        isSettingsModalVisible,
        showSettingsModal,
        hideSettingsModal,
    }
})
