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

<style scoped>
main {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
