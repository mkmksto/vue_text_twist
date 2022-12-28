import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'
import { fetchBackendWord } from '../functions/dataFetching'

export const useCurRandomWord = defineStore('curRandomWord', () => {
    const currentRandomWord = reactive({
        shuffled_word: [],
        sub_words: [],
        word: '',
    })

    const backendDataFetched = computed(() => {
        return Boolean(currentRandomWord.word)
    })

    const validLetters = computed(() => {
        return new Set(currentRandomWord.word)
    })

    const longestWordHasBeenGuessed = computed(() => {
        // because there can be more than 1 longest word
        const wordLen = currentRandomWord.word.length
        const longestWords = currentRandomWord.sub_words.filter(
            (w) => w.sub_word.length === wordLen
        )
        return longestWords.some((w) => w.has_been_guessed)
    })

    // function isBackendDataFetched() {
    //     return new Promise((res) => {
    //         if (backendDataFetched) {
    //             res(backendDataFetched)
    //         }
    //     })
    // }

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

    function revealYourSecrets() {
        currentRandomWord.sub_words.forEach((w) => (w.has_been_guessed = true))
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
        longestWordHasBeenGuessed,
        revealYourSecrets,
        backendDataFetched,
    }
})
