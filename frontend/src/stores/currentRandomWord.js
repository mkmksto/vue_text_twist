import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useCurRandomWord = defineStore('curRandomWord', () => {
    const currentRandomWord = reactive({
        shuffled_word: [],
        sub_words: [],
        word: [],
    })

    return { currentRandomWord }
})
