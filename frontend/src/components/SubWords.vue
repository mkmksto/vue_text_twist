<script setup>
import { storeToRefs } from "pinia"
import { onMounted } from "vue"
import { useCurRandomWord } from "../stores/currentRandomWord"
import { useSettingsStore } from "../stores/gameSettings"

const settingStore = useSettingsStore()
const { gameSettings } = storeToRefs(settingStore)

const randomWordStore = useCurRandomWord()
const { currentRandomWord } = storeToRefs(randomWordStore)
const { renewCurrentRandomWordStore } = randomWordStore

onMounted(async () => {
    console.log("game settings: ", gameSettings)
    // const backend_resp = await fetchBackendWord(gameSettings)

    // randomWordStore.$patch({
    //     currentRandomWord: {
    //         shuffled_word: backend_resp.shuffled_word,
    //         sub_words: backend_resp.sub_words,
    //         word: backend_resp.word,
    //     },
    // })

    renewCurrentRandomWordStore(gameSettings.value)
})
</script>

<template>
    <div class="card">
        <div class="word-columns">
            <div
                v-for="{ sub_word, id, has_been_guessed } in currentRandomWord.sub_words"
                class="word"
                :key="id"
            >
                <div
                    v-for="letter in sub_word"
                    class="letter-cell cell"
                    :class="{ 'has-been-guessed': has_been_guessed }"
                >
                    {{ letter }}
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* dynamic styling */
.letter-cell.has-been-guessed {
    @apply bg-pink-600 text-white;
    transition: background-color 0.5s ease;
}

/* basic styling */
.card {
    @apply h-[var(--card-height)] min-w-fit max-w-fit flex flex-col bg-neutral-300 flex-wrap rounded-xl p-3;
}

.word-columns {
    @apply flex flex-col flex-wrap content-start gap-x-12 h-[calc(var(--card-height)-0.5rem)] w-[var(--card-width)];
}

.word {
    @apply flex select-none;
}

.letter-cell {
    @apply flex justify-center items-center uppercase h-8 w-7 my-1 mx-0.5 bg-white text-white rounded-sm;
}
</style>
