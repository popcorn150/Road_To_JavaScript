/** Privacy */
const robot = {
    _energyLevel: 'high',
    recharge() {
        this._energyLevel += 30;
        console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
    }
};


