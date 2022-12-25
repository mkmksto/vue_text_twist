<script setup>
import { storeToRefs } from 'pinia'
import { useCurrentGuessStore } from '../stores/currentGuess'
import { useCurRandomWord } from '../stores/currentRandomWord'

const randomWordStore = useCurRandomWord()
const { currentRandomWord } = storeToRefs(randomWordStore)

const currentGuessStore = useCurrentGuessStore()
const { currentGuess, addToCurrentGuess, sayHello } = storeToRefs(currentGuessStore)

function moveLetter(letterId) {
    /** @type {Object} */
    const clickedLetter = currentRandomWord.value.shuffled_word.find(
        (letter) => letter.id === letterId
    )
    clickedLetter.letter_transferred = true
    sayHello()
}
</script>

<template>
    <div class="letter-upper-row letter">
        <div
            v-for="{ letter, id, letter_transferred } in currentRandomWord.shuffled_word.filter(
                (letter) => letter.letter_transferred
            )"
            :key="id"
            :v-if="!letter_transferred"
            class="cell letter-cell"
        >
            <span v-if="letter_transferred">{{ letter }}</span>
        </div>
    </div>

    <div class="letter-lower-row letter">
        <div
            v-for="{ letter, id, letter_transferred } in currentRandomWord.shuffled_word"
            :key="id"
            :v-if="letter_transferred"
            class="cell letter-cell"
        >
            <span v-if="!letter_transferred" @click="moveLetter(id)">{{ letter }}</span>
        </div>
    </div>
</template>

<style scoped>
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
</style>
