import { InputWathcer } from './classes/InputWatcher'
import { JANKEN } from './classes/JANKEN'

//const atachEvent = () => {
//const input = document.getElementById('count')
//input?.addEventListener('change', (e) => {
//const { target } = e
//if (target instanceof HTMLInputElement) {

//}
//})
//}
const getNumberOfDuel = (): number | Error => {
    const input = document.getElementById('count')
    if (input instanceof HTMLInputElement) {
        const { value } = input
        if (/[1-9]+$/.test(value)) {
            const numberOfDuel = Number(value)
            return numberOfDuel
        }
    }
    return new Error('数値を入れてね')
}
class CpJ {
    private iter: HTMLElement[]
    private nowIndex: number
    constructor() {
        const ch = document.getElementById('cpCh')
        const gu = document.getElementById('cpGu')
        const pa = document.getElementById('cpPa')
        if (ch === null || gu === null || pa === null) {
            throw new Error('error')
        }
        this.iter = [ch, gu, pa]
        this.nowIndex = 0
    }
    displayNext = (): void => {
        this.changeIndex()
        this.iter.map((i) => {
            i.hidden = true
        })
        console.log(this.nowIndex)
        this.iter[this.nowIndex].hidden = false
    }
    changeIndex = (): void => {
        if (this.nowIndex === this.iter.length - 1) {
            console.log('odjfal')
            this.nowIndex = 0
            return
        }
        console.log('odjfal')
        this.nowIndex = this.nowIndex + 1
        return
    }
}
const rundom = () => {
    const cp = new CpJ()
    setInterval(() => {
        console.log('jodp')
        cp.displayNext()
    }, 200)
}
const button = document.getElementById('startBtn')
if (button) {
    const errorChildren = document.createElement('div')
    errorChildren.textContent = '数値を入れてね'
    errorChildren.id = 'errorMessage'
    errorChildren.style.color = 'red'
    const inputElement = document.getElementById('count')
    const parentElement = document.getElementById('inputContainer')
    if (!(inputElement instanceof HTMLInputElement)) {
        throw new Error('not input')
    }
    if (parentElement && inputElement) {
        const wathcer = new InputWathcer(inputElement, parentElement, errorChildren)
        wathcer.setInputEvent()

        button.addEventListener('click', () => console.log(wathcer.getNumberValue()))
    }
    rundom()
}
