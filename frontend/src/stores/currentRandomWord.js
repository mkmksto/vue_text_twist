import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'
import { fetchBackendWord } from '../functions/dataFetching'

export const useCurRandomWord = defineStore('curRandomWord', () => {
    const currentRandomWord = reactive({
        shuffled_word: [],
        sub_words: [],
        word: [],
    })

    // getters
    const validLetters = computed(() => {
        return new Set(currentRandomWord.word)
    })

    // actions
    function unTransferLetters() {
        currentRandomWord.shuffled_word.forEach((letter) => (letter.letter_transferred = false))
    }

    async function renewCurrentRandomWordStore(gameSettings) {
        const backendData = await fetchBackendWord(gameSettings)
        // currentRandomWord = backendData
        const { shuffled_word, sub_words, word } = backendData
        currentRandomWord.shuffled_word = shuffled_word
        currentRandomWord.sub_words = sub_words
        currentRandomWord.word = word
    }

    function clearCurrentRandomWordStore() {
        currentRandomWord.shuffled_word = []
        currentRandomWord.sub_words = []
        currentRandomWord.word = []
    }

    return {
        currentRandomWord,
        unTransferLetters,
        renewCurrentRandomWordStore,
        clearCurrentRandomWordStore,
        validLetters,
    }
})
