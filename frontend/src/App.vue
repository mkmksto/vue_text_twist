<script setup>
import { storeToRefs } from 'pinia'
import CurrentWord from './components/CurrentWord.vue'
import GameControls from './components/GameControls.vue'
import Header from './components/Header.vue'
import GameLostModal from './components/modals/GameLostModal.vue'
import SettingsModal from './components/modals/SettingsModal.vue'
import Subwords from './components/SubWords.vue'
import { useSettingsModal } from './stores/modalVisibility'

const store = useSettingsModal()
const { isSettingsModalVisible } = storeToRefs(store)

// const settingsStore = useSettingsStore()
// const { gameSettings } = storeToRefs(settingsStore)
</script>

<template>
    <SettingsModal v-if="isSettingsModalVisible" />
    <GameLostModal v-if="false" />
    <Header />
    <main>
        <Subwords />
        <CurrentWord />
        <GameControls />
    </main>
</template>

<style>
:root {
    /* --card-width: 500px; */
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
