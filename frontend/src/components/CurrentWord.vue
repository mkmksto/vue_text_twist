<script setup>
//
</script>

<template>
    <div class="letter-upper-row letter">
        <div v-for="_ in 5" class="cell letter-cell">X</div>
    </div>

    <div class="letter-lower-row letter">
        <div v-for="_ in 5" class="cell letter-cell">B</div>
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
