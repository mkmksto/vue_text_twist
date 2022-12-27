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
    /**
     * valid key presses
     */
    const validLetters = computed(() => {
        return new Set(currentRandomWord.word)
    })

    // actions
    function getGuessIdx(guessString) {
        return currentRandomWord.sub_words.findIndex((w) => w.sub_word === guessString)
    }

    function isGuessInSubwords(guessString) {
        return currentRandomWord.sub_words.some((w) => w.sub_word === guessString)
    }

    /**
     * Update the has_been_guessed status of a subword
     * @param {String} guessString - guess string derived from curreGuess store (from its guessStringOnly prop)
     * @param {boolean} bool
     */
    function updateSubwordGuessedState(guessString, bool) {
        currentRandomWord.sub_words.find((w) => w.sub_word === guessString).has_been_guessed = bool
    }

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
        getGuessIdx,
        isGuessInSubwords,
        updateSubwordGuessedState,
    }
})
