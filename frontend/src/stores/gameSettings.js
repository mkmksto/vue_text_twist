import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useSettingsStore = defineStore('settings', () => {
    const gameSettings = reactive({
        min_chars: 6,
        max_chars: 12,
        difficulty: 'medium',
        max_subwords: 20,
        timer: 120,
    })

    return { gameSettings }
})
