<script setup>
import { storeToRefs } from 'pinia'
import { shuffleItems } from '../functions/math'
import { useCurRandomWord } from '../stores/currentRandomWord'

const randomWordStore = useCurRandomWord()
const { currentRandomWord } = storeToRefs(randomWordStore)

function shuffle() {
    const curShuffledWord = currentRandomWord.value.shuffled_word
    const shuffledWordArr = Array.from(curShuffledWord)
    const newArr = shuffleItems(shuffledWordArr)

    randomWordStore.$patch((state) => {
        state.currentRandomWord.shuffled_word = newArr
    })
    console.log(currentRandomWord.value.shuffled_word)
}
</script>

<template>
    <div class="controls">
        <button class="btn" @click="shuffle">Twist</button>
        <button class="btn">Give Up</button>
        <button class="btn">Clear</button>
        <button class="btn">Enter</button>
        <button class="btn">Reset Game</button>
        <button class="btn next-round-btn">Next Round</button>
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
