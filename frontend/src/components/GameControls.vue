<script setup>
import { storeToRefs } from 'pinia'
import { nextTick, onMounted, ref } from 'vue'
import { shuffleItems } from '../functions/math'
import { useCurrentGuessStore } from '../stores/currentGuess'
import { useCurRandomWord } from '../stores/currentRandomWord'

const randomWordStore = useCurRandomWord()
const { currentRandomWord, validLetters } = storeToRefs(randomWordStore)
const { unTransferLetters, renewCurrentRandomWordStore, clearCurrentRandomWordStore } =
    randomWordStore

const currentGuessStore = useCurrentGuessStore()
const { currentGuess } = storeToRefs(currentGuessStore)
const { clearGuess, addLetterToGuess } = currentGuessStore

// Element refs
/** @type {HTMLElement} */
const nextRoundBtn = ref(null)
const resetGameBtn = ref(null)

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
    // reset round score
    // reveal your secrets
    // game lost status to true ()
    // clear header interval
    nextRoundBtn.value.disabled = true
    nextRoundBtn.blur()
}

function onEnterBtn() {
    // test guess
    // update win state
}

async function onNextRound() {
    // clear header interval
    nextRoundBtn.value.disabled = true
    nextRoundBtn.value.blur()
    // reveal your secrets(export this function from subwords)
    await sleep(3000)
    await renewCurrentRandomWordStore()

    // renew header interval
    // reset guess store
    // reset valid letters (must be computed from randomWordStore)
    // set gameWonStatus to false

    // increment current round
}

async function onResetGame() {
    // clear header interval
    nextRoundBtn.value.disabled = true
    nextRoundBtn.value.blur()
    clearCurrentRandomWordStore()
    await renewCurrentRandomWordStore()

    // renew header interval
    // reset guess store
    // reset valid letters (must be computed from randomWordStore)
    // set gameWonStatus to false

    // reset Current Round
    // reset Score
    resetGameBtn.value.blur()
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
    if (e.repeat) return
    // if game lost, return

    if (e.key === 'Backspace') {
        removeLetterFromGuess()
        await sleep(200)
    } else if (e.key === ' ') {
        shuffle()
    } else if (e.key === 'Enter') {
        // test guess
        // update win state
    } else if (e.key === 'Escape') {
        returnLettersToOriginalPlace()
    } else if (Array.from(validLetters.value).includes(e.key)) {
        updateGuessStore(e.key)
        updateLetterTransfer(e.key)
    }

    // resetGameBtn.value.blur()
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
    console.log(currentGuess)
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
    <div
        class="controls"
        @keydown.space="shuffle"
        @keydown.delete=""
        @keydown.enter=""
        @keydown="onKeyDown"
        @keydown.tab=""
    >
        <button class="btn" @click="shuffle">Twist</button>
        <button class="btn" @click="onGiveUp">Give Up</button>
        <button class="btn" @click="returnLettersToOriginalPlace">Clear</button>
        <button class="btn" @click="onEnterBtn">Enter</button>
        <button class="btn reset-game-btn" @click="onResetGame" ref="resetGameBtn">
            Reset Game
        </button>
        <button class="btn next-round-btn" ref="nextRoundBtn" @click="onNextRound">
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
