import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSettingsModal = defineStore('settingsModal', () => {
    const isSettingsModalVisible = ref(false)
    function showSettingsModal() {
        // console.log('dasdas')
        isSettingsModalVisible.value = true
        console.log(isSettingsModalVisible.value)
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
