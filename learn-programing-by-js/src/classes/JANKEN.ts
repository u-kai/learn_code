type JankenPattern = 'choki' | 'gu' | 'pa'

export class JANKEN {
    private numberOfDuel: number
    constructor(numberOfDuel: number) {
        this.numberOfDuel = numberOfDuel
    }
    duel = (hands: JankenPattern[]) => {}
}
