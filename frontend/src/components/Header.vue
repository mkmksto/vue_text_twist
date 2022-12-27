<script setup>
import { storeToRefs } from 'pinia'
import { useSettingsModal } from '../stores/modalVisibility'
import { useGameScore } from '../stores/score'

const { isSettingsModalVisible, showSettingsModal, hideSettingsModal } = useSettingsModal()

const score = useGameScore()
const { gameScore } = storeToRefs(score)
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
                <li class="current-info">00:00</li></span
            >
            <span class="game-info"
                >Round:
                <li class="current-info">1</li></span
            >
            <li @click="showSettingsModal" class="icons">Settings</li>
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
