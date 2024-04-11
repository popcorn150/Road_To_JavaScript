/** Factory Functions */
const robotFactory = (model, mobile) => {
    return {
        model: model,
        mobile: mobile,
        beep() {
            console.log('Beep Boop')
        }
    }
}
const tinCan = robotFactory('P-500', true)

console.log(`Robot says: `)
tinCan.beep()
console.log('\n')

/** Creating Monsters */
const monsterFactory = (name, age, energySource, catchPhrase) => {
    return {
        name: name,
        age: age,
        energySource: energySource,
        scare() {
            console.log(catchPhrase)
        }
    }
}

const teddyKiller = monsterFactory('The MAD Teddy Killerz', 10000, 'Love n Chocolate', 'I Love You')
const ghostManic = monsterFactory('Crazy Ghost', 5000, 'Ectoplasm', 'BOO Hahaha!')

console.log(`Info on the suspect: \n Name: ${teddyKiller.name} \n Age: ${teddyKiller.age} \n Energy Source: ${teddyKiller.energySource}`)
console.log('Catchphrase:') + teddyKiller.scare()

console.log(`Info on the suspect: \n Name: ${ghostManic.name} \n Age: ${ghostManic.age} \n Energy Source: ${ghostManic.energySource}`)
console.log('Catchphrase:') + ghostManic.scare()
console.log('\n')

/** Property Value Shorthand */
const iceCreamShop = (flavor, coneShape, isCold, isForKids, iceCreamTaste) => {
    return {
        flavor,
        coneShape,
        isCold,
        isForKids,
        thekidsSay() {
            console.log(iceCreamTaste)
        }
    }
}

const bola = iceCreamShop('Vanilla', 'Star', true, false, 'Delicious!')
console.log(`Bola info on her ice-cream: \n Ice-Cream Flavor: ${bola.flavor} \n Ice-Cream Cone Shape: ${bola.coneShape} \n Is it Cold? ${bola.isCold} \n Is It For Kids? ${bola.isForKids}`)
console.log('How does it taste?')
bola.thekidsSay()