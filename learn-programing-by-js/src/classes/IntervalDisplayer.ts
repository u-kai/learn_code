export class CilculationDisplayer {
    private displayElements: HTMLElement[]
    private displayIndex: number
    constructor(displayElements: HTMLElement[]) {
        this.displayElements = displayElements
        this.displayIndex = 0
    }
    next = () => {
        if (this.displayIndex === this.displayElements.length - 1) {
            this.displayIndex = 0
            return
        }
        this.displayIndex += 1
        return
    }
    display = () => {
        const numberOfElements = this.displayElements.length
        for (let i = 0; i < numberOfElements; i++) {
            if (this.displayIndex === i) {
                this.displayElements[i].hidden = false
            }
            this.displayElements[i].hidden = true
        }
    }
}

export class IntervalFn {
    private isRun: boolean
    private intervalTime: number
    private callback: () => void
    private interval: NodeJS.Timeout
    constructor(intervalTime: number, callback: () => void) {
        this.isRun = false
        this.intervalTime = intervalTime
        this.callback = callback
        this.interval = setInterval(() => {
            this.callback()
        }, this.intervalTime)
    }
    start = () => {
        this.isRun = true
        this.interval
    }
    stop = () => {
        if (this.isRun === false) {
            return
        }
        clearInterval(this.interval)
    }
}
