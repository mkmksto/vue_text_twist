<script setup>
import { storeToRefs } from 'pinia'
import { watch } from 'vue'

import CurrentWord from './components/CurrentWord.vue'
import GameControls from './components/GameControls.vue'
import Header from './components/Header.vue'
import GameLostModal from './components/modals/GameLostModal.vue'
import SettingsModal from './components/modals/SettingsModal.vue'
import Subwords from './components/SubWords.vue'

import { useCurRandomWord } from './stores/currentRandomWord'
import { useGameState } from './stores/gameState'
import { useSettingsModal } from './stores/modalVisibility'
import { useTimer } from './stores/timer'

const store = useSettingsModal()
const { isSettingsModalVisible } = storeToRefs(store)

const gameState = useGameState()
const { loseState, winState } = storeToRefs(gameState)
const { setLoseState } = gameState

const timer = useTimer()
const { secondsCountdown } = storeToRefs(timer)

const randomWordStore = useCurRandomWord()
const { revealYourSecrets } = randomWordStore

watch(
    () => secondsCountdown.value,
    () => {
        if (secondsCountdown.value <= 0 && !winState.value) {
            setLoseState(true)
        } else if (secondsCountdown.value <= 0 && winState.value) {
            revealYourSecrets()
        }
    }
)
</script>

<template>
    <SettingsModal v-if="isSettingsModalVisible" />
    <GameLostModal v-if="loseState" />
    <Header />
    <main>
        <Subwords />
        <CurrentWord />
        <GameControls />
    </main>
</template>

<style>
:root {
    --card-width: 1000px;
    --card-height: 400px;
}

button {
    @apply rounded-lg;
}
</style>

<style scoped>
main {
    @apply flex flex-col items-center justify-center h-screen;
}
</style>
