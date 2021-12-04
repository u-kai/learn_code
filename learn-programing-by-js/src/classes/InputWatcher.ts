const castInputElement = (element: HTMLElement | null | EventTarget): HTMLInputElement | undefined => {
    if (element === null) {
        return undefined
    }
    if (!(element instanceof HTMLInputElement)) {
        return undefined
    }
    return element
}
export class InputWathcer {
    private value: number | undefined
    private parentElement: HTMLElement
    private element: HTMLInputElement
    private errorElement: HTMLElement
    constructor(element: HTMLInputElement, parentElement: HTMLElement, errorElement: HTMLElement) {
        this.parentElement = parentElement
        this.element = element
        this.value = undefined
        this.errorElement = errorElement
    }

    getNumberValue = (): number | undefined => {
        return this.value
    }
    setInputEvent = (): void => {
        this.element.addEventListener('input', (e) => {
            const { target } = e
            const castInput = castInputElement(target)
            if (castInput?.value) {
                this.changeHndler(castInput.value)
            }
        })
    }
    private changeHndler = (inputValue: string): void => {
        if (this.validateInput(inputValue)) {
            this.element.style.color = 'black'
            this.value = Number(inputValue)
            this.removeErrorChildren()
            return
        }
        if (!this.validateInput(inputValue)) {
            this.value = undefined
            this.element.style.color = 'red'
            this.appendErrorChildren()
        }
        return
    }
    private validateInput = (value: string): boolean => /[1-9]+[0-9]*$/.test(value)
    private appendErrorChildren = (): void => {
        const errorChildrenId = this.errorElement.id
        const errorChildrenElement = document.getElementById(errorChildrenId)
        if (!errorChildrenElement) {
            this.parentElement.appendChild(this.errorElement)
        }
        return
    }
    private removeErrorChildren = (): void => {
        const errorChildrenId = this.errorElement.id
        const errorChildrenElement = document.getElementById(errorChildrenId)
        if (errorChildrenElement) {
            errorChildrenElement.remove()
        }
        return
    }
}
