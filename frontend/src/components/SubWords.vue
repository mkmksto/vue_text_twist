<script setup>
//
</script>

<template>
    <div class="card">
        <div class="word-columns">
            <div v-for="_ in 10" class="word">
                <div v-for="_ in 4" class="letter-cell">A</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* dynamic styling */
.cell.has-been-guessed {
    @apply bg-pink-600 text-white;
    transition: background-color 0.5s ease;
}
/*  */

/* basic styling */
.card {
    @apply h-[var(--card-height)] w-[var(--card-width)] max-w-4xl flex flex-col bg-neutral-300 flex-wrap rounded-xl p-3;
}

.word-columns {
    @apply flex flex-col flex-wrap content-start gap-x-12 h-[calc(var(--card-height)-0.5rem)] w-[var(--card-width)];
}

.word {
    @apply flex select-none;
}

.letter-cell {
    @apply flex justify-center items-center uppercase h-8 w-7 my-1 mx-0.5 bg-white text-black rounded-sm;
}
</style>
