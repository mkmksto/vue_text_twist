<script setup>
import { storeToRefs } from 'pinia'
import { nextTick, onMounted, ref } from 'vue'
import { useResetGame } from '../composables/useResetGame'
import { shuffleItems } from '../functions/math'
import { useCurrentGuessStore } from '../stores/currentGuess'
import { useCurRandomWord } from '../stores/currentRandomWord'
import { useGameState } from '../stores/gameState'
import { useRoundTracker } from '../stores/roundTracker'
import { useGameScore } from '../stores/score'

// stores
const randomWordStore = useCurRandomWord()
const { currentRandomWord, validLetters, longestWordHasBeenGuessed } = storeToRefs(randomWordStore)
const {
    unTransferLetters,
    renewCurrentRandomWordStore,
    clearCurrentRandomWordStore,
    getGuessIdx,
    isGuessInSubwords,
    updateSubwordGuessedState,
    revealYourSecrets,
} = randomWordStore

const currentGuessStore = useCurrentGuessStore()
const { currentGuess, guessStringOnly } = storeToRefs(currentGuessStore)
const { clearGuess, addLetterToGuess, testGuessIfValid } = currentGuessStore

const gameState = useGameState()
const { setWinState, setLoseState } = gameState
const { winState } = storeToRefs(gameState)

const score = useGameScore()
const { updateScore, resetScore } = score

const round = useRoundTracker()
const { moveToNextRound, resetRound } = round

// Element refs
/** @type {HTMLElement} */
const nextRoundBtn = ref(null)
const resetGameBtn = ref(null)
const giveUpBtn = ref(null)

// local functions
function shuffle() {
    const curShuffledWord = currentRandomWord.value.shuffled_word
    const shuffledWordArr = Array.from(curShuffledWord)
    const newArr = shuffleItems(shuffledWordArr)

    randomWordStore.$patch((state) => {
        state.currentRandomWord.shuffled_word = newArr
    })
}

async function returnLettersToOriginalPlace() {
    await nextTick()

    unTransferLetters()
    clearGuess()
}

function onGiveUp() {
    resetScore()
    resetRound()
    revealYourSecrets()

    setLoseState(true)
    // clear header interval
    nextRoundBtn.value.disabled = true
    nextRoundBtn.value.blur()
}

function onEnterBtn() {
    const isGuessValid = isGuessInSubwords(guessStringOnly.value)
    if (!isGuessValid) return

    // const guessIdx = getGuessIdx(guessStringOnly.value)
    updateSubwordGuessedState(guessStringOnly.value, true)
    updateScore(guessStringOnly.value)

    if (longestWordHasBeenGuessed.value) {
        setWinState(true)
        nextRoundBtn.value.disabled = false
    }
}

async function onNextRound() {
    clearGuess()
    setWinState(false)

    // clear header interval
    nextRoundBtn.value.disabled = true
    nextRoundBtn.value.blur()
    revealYourSecrets()
    await sleep(3000)
    await renewCurrentRandomWordStore()

    // renew header interval

    moveToNextRound()
}

async function onResetGame() {
    useResetGame()
}

function sleep(ms) {
    return new Promise((res) => setTimeout(res, ms))
}

/**
 * keyboard inputs
 */
onMounted(() => {
    window.addEventListener('keydown', (e) => {
        onKeyDown(e)
    })
})

/** @param {KeyboardEvent} e */
async function onKeyDown(e) {
    await nextTick()
    if (e.repeat) return
    // if game lost, return, i implemented this as game over

    if (e.key === 'Backspace') {
        removeLetterFromGuess()
        await sleep(200)
    } else if (e.key === ' ') {
        shuffle()
    } else if (e.key === 'Enter') {
        onEnterBtn()
    } else if (e.key === 'Escape') {
        returnLettersToOriginalPlace()
    } else if (Array.from(validLetters.value).includes(e.key)) {
        updateGuessStore(e.key)
        updateLetterTransfer(e.key)
    }

    resetGameBtn.value.blur()
    giveUpBtn.value.blur()
}

function updateGuessStore(key) {
    // search for letters that haven't been transferred yet
    let clickedLetter = currentRandomWord.value.shuffled_word
        .filter((l) => !l.letter_transferred)
        .find((l) => key === l.letter)
    if (!clickedLetter) return

    // stop if letter with the same uniqueID is already in guess
    // checks for same IDs
    const letterAlreadyInGuess = currentGuess.value.some((l) => l.id === clickedLetter.id)
    if (letterAlreadyInGuess) return

    addLetterToGuess(clickedLetter.letter, clickedLetter.id)
}

function updateLetterTransfer(key) {
    let clickedLetter = currentRandomWord.value.shuffled_word
        .filter((l) => !l.letter_transferred)
        .find((l) => key === l.letter)
    if (!clickedLetter) return
    clickedLetter.letter_transferred = true
}

function removeLetterFromGuess() {
    if (currentGuess.value.length <= 0) return

    const lastItem = currentGuess.value[currentGuess.value.length - 1]
    const correspondingLetterFromCurrentWordStore = currentRandomWord.value.shuffled_word
        .filter((l) => l.letter_transferred)
        .find((l) => lastItem.id === l.id)
    if (!correspondingLetterFromCurrentWordStore) return

    currentGuess.value.pop()
    correspondingLetterFromCurrentWordStore.letter_transferred = false
}
</script>

<template>
    <div class="controls">
        <button class="btn" @click="shuffle">Twist</button>
        <button class="btn" @click="onGiveUp" ref="giveUpBtn">Give Up</button>
        <button class="btn" @click="returnLettersToOriginalPlace">Clear</button>
        <button class="btn" @click="onEnterBtn">Enter</button>
        <button class="btn reset-game-btn" @click="onResetGame" ref="resetGameBtn">
            Reset Game
        </button>
        <button class="btn next-round-btn" ref="nextRoundBtn" @click="onNextRound" disabled>
            Next Round
        </button>
    </div>
</template>

<style scoped>
.controls {
    @apply mt-4;
}

.btn {
    @apply mx-4 py-2 px-4 bg-neutral-400 hover:bg-neutral-500 text-neutral-50 rounded-lg;
}

.next-round-btn {
    @apply bg-orange-500 hover:bg-orange-700;
}

.btn:disabled {
    @apply bg-neutral-200;
}
</style>
