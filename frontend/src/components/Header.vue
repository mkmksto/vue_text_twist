<script setup>
import { storeToRefs } from 'pinia'
import { watch } from 'vue'
import { useCurRandomWord } from '../stores/currentRandomWord'
import { useSettingsStore } from '../stores/gameSettings'
import { useSettingsModal } from '../stores/modalVisibility'
import { useRoundTracker } from '../stores/roundTracker'
import { useGameScore } from '../stores/score'
import { useTimer } from '../stores/timer'

const { showSettingsModal } = useSettingsModal()

const score = useGameScore()
const { gameScore } = storeToRefs(score)

const round = useRoundTracker()
const { gameRound } = storeToRefs(round)

const randomWordStore = useCurRandomWord()
const { backendDataFetched } = storeToRefs(randomWordStore)

const timer = useTimer()
const { countdownString } = storeToRefs(timer)
const { renewCountdownSecondsLength, renewTimer, stopTimer } = timer

const settings = useSettingsStore()
const { gameSettings } = settings

watch(
    () => backendDataFetched.value,
    () => {
        if (backendDataFetched.value === true) {
            stopTimer()
            renewCountdownSecondsLength(gameSettings.timer)
            renewTimer()
        }
    }
)
</script>

<template>
    <nav class="header">
        <ul>
            <span class="game-info"
                >Score:
                <li class="current-info">{{ gameScore }}</li></span
            >
            <span class="game-info"
                >Time:
                <li class="current-info">{{ countdownString }}</li></span
            >
            <span class="game-info"
                >Round:
                <li class="current-info">{{ gameRound }}</li></span
            >
            <li @click="showSettingsModal" class="icons">
                <font-awesome-icon icon="fa-solid fa-gear"></font-awesome-icon>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
.header {
    @apply fixed top-0 left-0 w-full h-14 bg-white text-gray-500 mx-24;
}

.header ul {
    @apply list-none flex justify-around items-center h-full mx-3;
}

.game-info {
    @apply flex;
    font-family: 'Open Sans';
}

.current-info {
    @apply ml-4;
}

.icons {
    @apply cursor-pointer;
}
</style>
