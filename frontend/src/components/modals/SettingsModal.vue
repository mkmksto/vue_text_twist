<script setup>
import { useSettingsStore } from '../../stores/gameSettings'

const { gameSettings } = useSettingsStore()
console.log(gameSettings)
</script>

<template>
    <div class="modal">
        <div class="modal-card">
            <div class="setting">
                <label for="min-chars">Min Number of Characters</label>
                <input type="range" />
                <span class="label-val">2</span>
            </div>
            <div class="setting">
                <label for="max-chars">Max Number of Characters</label> <input type="range" />
                <span class="label-val">2</span>
            </div>
            <div class="setting">
                <label for="difficulty">Difficulty</label>
                <select id="difficulty">
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                    <option value="very_hard">Very Hard</option>
                </select>
                <span class="label-val">2</span>
            </div>
            <div class="setting">
                <label for="timer">Alloted Time</label>
                <input type="range" />
                <span class="label-val">200</span>
            </div>
            <div class="setting">
                <label for="max-subwords">Max Number of Subwords</label>
                <input type="range" />
                <span class="label-val">2</span>
            </div>

            <button class="save">Save but don't Restart</button>
            <button class="restart">Save and Restart</button>
        </div>
    </div>
</template>

<style scoped>
button {
    @apply cursor-pointer mt-auto;
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
