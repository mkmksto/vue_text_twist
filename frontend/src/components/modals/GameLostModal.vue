<script setup>
import { useResetGame } from '../../composables/useResetGame'
</script>

<template>
    <div class="modal">
        <div class="modal-card">
            <span class="you-lose-msg">Game Over</span
            ><button @click="useResetGame">Restart</button>
        </div>
    </div>
</template>

<style scoped>
.modal {
    @apply fixed top-0 left-0 h-screen w-screen z-10 flex items-center justify-center;
    background-color: rgba(50, 50, 50, 0.6);
}
.modal-card {
    @apply w-96 h-80 bg-red-500 text-white flex flex-col items-center justify-between rounded-lg text-4xl opacity-70;
}
.you-lose-msg {
    @apply mt-20;
}

button {
    @apply bg-white bottom-1 text-neutral-700 text-xl mb-6;
}
</style>
