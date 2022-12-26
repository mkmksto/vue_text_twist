<script setup>
import { storeToRefs } from 'pinia'
import { useCurrentGuessStore } from '../stores/currentGuess'
import { useCurRandomWord } from '../stores/currentRandomWord'

const randomWordStore = useCurRandomWord()
const { currentRandomWord } = storeToRefs(randomWordStore)

const currentGuessStore = useCurrentGuessStore()
const { addLetterToGuess, removeLetterFromGuess } = currentGuessStore

function moveLetter(letterId) {
    const clickedLetter = currentRandomWord.value.shuffled_word.find(
        (letter) => letter.id === letterId
    )
    clickedLetter.letter_transferred = !clickedLetter.letter_transferred
}

function updateGuessStore(letter, letterId) {
    const clickedLetterObj = currentRandomWord.value.shuffled_word.find(
        (letter) => letter.id === letterId
    )
    if (clickedLetterObj.letter_transferred) {
        addLetterToGuess(letter, letterId)
    } else {
        removeLetterFromGuess(letterId)
    }
}

function onLetterClicked(letter, letterId) {
    moveLetter(letterId)
    updateGuessStore(letter, letterId)
}
</script>

<template>
    <div class="letter-upper-row letter">
        <TransitionGroup name="circles">
            <div
                v-for="{ letter, id, letter_transferred } in currentRandomWord.shuffled_word.filter(
                    (letter) => letter.letter_transferred
                )"
                :key="id"
                class="cell letter-cell"
                @click="onLetterClicked(letter, id)"
            >
                <span v-if="letter_transferred"> {{ letter }}</span>
            </div>
        </TransitionGroup>
    </div>

    <div class="letter-lower-row letter">
        <TransitionGroup name="circles">
            <div
                v-for="{ letter, id, letter_transferred } in currentRandomWord.shuffled_word.filter(
                    (letter) => !letter.letter_transferred
                )"
                :key="id"
                class="cell letter-cell"
                @click="onLetterClicked(letter, id)"
            >
                {{ letter }}
            </div>
            <div v-if="currentRandomWord.word.length <= 0" class="fetching">...</div>
        </TransitionGroup>
    </div>
</template>

<style scoped>
/* Animations */
.circles-move {
    transition: all 0.4s ease;
}
/* Transitions */
.circles-enter-from {
    opacity: 0;
}

.circles-enter-active {
    transition: all 0.4s ease;
}

/* styling */
.letter {
    @apply flex mt-4 h-14;
}

.letter-lower-row {
    background-color: white;
    border-color: 3px solid var(--pink);
}

.cell {
    @apply flex justify-center items-center mx-2 text-4xl w-14 h-14 bg-white rounded text-neutral-500 font-bold;
}

.letter-cell {
    @apply rounded-full uppercase cursor-pointer text-neutral-600 hover:text-neutral-400 bg-white border border-solid border-neutral-400;
}

.fetching {
    @apply text-gray-300 w-14 h-14;
}
</style>
