class Terminator {
    constructor (name, model, hp){
    this.name = name;
    this.model = model;
    this.hp = hp;
    }

    kill(otherTerminator = Terminator) {
        otherTerminator.hp = 0;
        console.log(`You've killed ${otherTerminator.name}` )
    }

    heal(otherTerminator = Terminator) {
        otherTerminator.hp += 50;
        console.log(`You've healed ${otherTerminator.name}, the hp is now increased to ${otherTerminator.hp}`  )
    }

    selfDestroy () {
        this.hp = 0;
    }
}

