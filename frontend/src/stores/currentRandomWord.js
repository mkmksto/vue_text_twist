import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useCurRandomWord = defineStore('curRandomWord', () => {
    const currentRandomWord = reactive({
        shuffled_word: [],
        sub_words: [],
        word: [],
    })

    function unTransferLetters() {
        currentRandomWord.shuffled_word.forEach((letter) => (letter.letter_transferred = false))
    }

    return { currentRandomWord, unTransferLetters }
})
