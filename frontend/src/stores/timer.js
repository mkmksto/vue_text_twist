import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useTimer = defineStore('useTimer', () => {
    const secondsCountdown = ref(120)

    const countdownString = computed(() => {
        const minutes = Math.floor(secondsCountdown.value / 60)
        let seconds = (secondsCountdown.value - minutes * 60).toString()
        seconds = seconds.length > 1 ? seconds : `0${seconds}`
        return `0${minutes}: ${seconds}`
    })

    let timer
    function renewTimer() {
        timer = setInterval(() => {
            if (secondsCountdown.value <= 0) {
                clearInterval(timer)
                return
            }

            secondsCountdown.value--
        }, 1000)
    }

    function stopTimer() {
        clearInterval(timer)
    }

    function renewCountdownSecondsLength(seconds) {
        secondsCountdown.value = seconds
    }

    return { secondsCountdown, renewCountdownSecondsLength, renewTimer, stopTimer, countdownString }
})
