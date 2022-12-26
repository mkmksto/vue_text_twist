<script setup>
import { storeToRefs } from 'pinia'
import { useResetGame } from '../../composables/useNextRoundBtn'
import { useSettingsStore } from '../../stores/gameSettings'
import { useSettingsModal } from '../../stores/modalVisibility'

const settingsStore = useSettingsStore()
const { gameSettings } = storeToRefs(settingsStore)

const { hideSettingsModal } = useSettingsModal()

// function logUpdated() {
//     console.log(gameSettings.value)
// }
</script>

<template>
    <div @click.self="hideSettingsModal" class="modal">
        <div class="modal-card">
            <div class="setting">
                <label for="min-chars">Min Number of Characters</label>

                <input
                    type="range"
                    v-model="gameSettings.min_chars"
                    min="6"
                    max="10"
                    class="range"
                    id="min-chars"
                />

                <span class="label-val">{{ gameSettings.min_chars }}</span>
            </div>

            <div class="setting">
                <label for="max-chars">Max Number of Characters</label>

                <input
                    type="range"
                    v-model="gameSettings.max_chars"
                    min="9"
                    max="13"
                    class="range"
                    id="max-chars"
                />

                <span class="label-val">{{ gameSettings.max_chars }}</span>
            </div>

            <div class="setting">
                <label for="difficulty">Difficulty</label>
                <select
                    id="difficulty"
                    class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg block w-40 p-1.5 ml-auto"
                    v-model="gameSettings.difficulty"
                >
                    <option selected>Medium</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                    <option value="very_hard">Very Hard</option>
                </select>
                <!-- <span class="label-val">2</span> -->
            </div>

            <div class="setting">
                <label for="max-subwords">Max Number of Subwords</label>
                <input
                    type="range"
                    v-model="gameSettings.max_subwords"
                    min="10"
                    max="30"
                    class="range"
                    id="max-subwords"
                />
                <span class="label-val">{{ gameSettings.max_subwords }}</span>
            </div>

            <div class="setting">
                <label for="timer">Alloted Time</label>
                <input
                    type="range"
                    v-model="gameSettings.timer"
                    min="30"
                    max="300"
                    class="range"
                    id="timer"
                />
                <span class="label-val">{{ gameSettings.timer }}</span>
            </div>

            <button class="save" @click="hideSettingsModal">Save but don't Restart</button>
            <button class="restart" @click="useResetGame(), hideSettingsModal()">
                Save and Restart
            </button>
        </div>
    </div>
</template>

<style scoped>
button {
    @apply cursor-pointer mt-auto p-2;
}
.save {
    @apply bg-neutral-200 text-neutral-600 hover:bg-neutral-300;
}
.restart {
    @apply bg-red-700 text-white mt-2 hover:bg-red-800;
}

.setting {
    @apply flex items-center mb-4;
}
.setting input {
    @apply ml-auto;
}
.setting label {
    color: grey;
}
.label-val {
    @apply w-4 text-center ml-2;
}

.modal {
    font-family: 'Open Sans';
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(50, 50, 50, 0.4);
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
}
.modal-card {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 20%;
    width: 400px;
    height: 450px;
    border-radius: 1rem;
    background-color: white;
    padding: 1.5rem;
}
.range {
    @apply bg-gray-200 rounded-lg appearance-none h-2 mt-auto mb-auto;
}
</style>
