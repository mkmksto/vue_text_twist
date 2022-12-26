import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { fetchBackendWord } from '../functions/dataFetching'

export const useCurRandomWord = defineStore('curRandomWord', () => {
    const currentRandomWord = reactive({
        shuffled_word: [],
        sub_words: [],
        word: [],
    })

    function unTransferLetters() {
        currentRandomWord.shuffled_word.forEach((letter) => (letter.letter_transferred = false))
    }

    async function renewCurrentRandomWordStore(gameSettings) {
        const backendData = fetchBackendWord(gameSettings)
        const { shuffled_word, sub_words, word } = await backendData
        currentRandomWord.shuffled_word = shuffled_word
        currentRandomWord.sub_words = sub_words
        currentRandomWord.word = word
    }

    return { currentRandomWord, unTransferLetters, renewCurrentRandomWordStore }
})
