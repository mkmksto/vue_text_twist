<script setup>
import CurrentWord from './components/CurrentWord.vue'
import GameControls from './components/GameControls.vue'
import Header from './components/Header.vue'
import Subwords from './components/SubWords.vue'
</script>

<template>
    <Header />
    <main>
        <Subwords />
        <CurrentWord />
        <GameControls />
    </main>
</template>

<style>
:root {
    --card-width: 500px;
    /* --card-width: 1000px; */
    --card-height: 400px;
}
</style>

<style scoped>
main {
    @apply flex flex-col items-center justify-center h-screen;
}
</style>
