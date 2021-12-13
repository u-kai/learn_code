//import { InputWathcer } from './classes/InputWatcher'
//import { JANKEN } from './classes/JANKEN'

import { IntervalFn } from './classes/IntervalDisplayer'

//const atachEvent = () => {
//const input = document.getElementById('count')
//input?.addEventListener('change', (e) => {
//const { target } = e
//if (target instanceof HTMLInputElement) {

//}
//})
//}
//const getNumberOfDuel = (): number | Error => {
//const input = document.getElementById('count')
//if (input instanceof HTMLInputElement) {
//const { value } = input
//if (/[1-9]+$/.test(value)) {
//const numberOfDuel = Number(value)
//return numberOfDuel
//}
//}
//return new Error('数値を入れてね')
//}
//class CpJ {
//private iter: HTMLElement[]
//private nowIndex: number
//constructor() {
//const ch = document.getElementById('cpCh')
//const gu = document.getElementById('cpGu')
//const pa = document.getElementById('cpPa')
//if (ch === null || gu === null || pa === null) {
//throw new Error('error')
//}
//this.iter = [ch, gu, pa]
//this.nowIndex = 0
//}
//displayNext = (): void => {
//this.changeIndex()
//this.iter.map((i) => {
//i.hidden = true
//})
//console.log(this.nowIndex)
//this.iter[this.nowIndex].hidden = false
//}
//changeIndex = (): void => {
//if (this.nowIndex === this.iter.length - 1) {
//this.nowIndex = 0
//return
//}
//this.nowIndex = this.nowIndex + 1
//return
//}
//}
//const rundom = () => {
//const cp = new CpJ()
//setInterval(() => {
//cp.displayNext()
//}, 200)
//}
//const button = document.getElementById('startBtn')
//if (button) {
//const errorChildren = document.createElement('div')
//errorChildren.textContent = '数値を入れてね'
//errorChildren.id = 'errorMessage'
//errorChildren.style.color = 'red'
//const inputElement = document.getElementById('count')
//const parentElement = document.getElementById('inputContainer')
//if (!(inputElement instanceof HTMLInputElement)) {
//throw new Error('not input')
//}
//if (parentElement && inputElement) {
//const wathcer = new InputWathcer(inputElement, parentElement, errorChildren)
//wathcer.setInputEvent()

//button.addEventListener('click', () => console.log(wathcer.getNumberValue()))
//}
//rundom()

const infn = new IntervalFn(200, () => console.log('hello'))
const start = new Promise((r) => {
    console.log('fa')
    infn.start()
    return r
})
const stop = new Promise((r) => {
    console.log('da')
    infn.stop()
    return r
})
const wait = new Promise((res, rej) => {
    setTimeout(() => {
        console.log('timeout')
    }, 1000)
    return res
})
;async () => {
    await start
    await wait
    await stop
}
