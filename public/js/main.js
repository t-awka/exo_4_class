class Lieu {
    constructor(nom, personnes) {
        this.nom = nom,
        this.personnes = personnes
    }
}

let molengeek = new Lieu("MolenGeek", []);
let snack = new Lieu("Snack", []);
let maison = new Lieu("la maison", []);

class Personne {
    constructor(nom, prenom, argent) {
        this.nom = nom,
        this.prenom = prenom,
        this.argent = argent,
        this.seDeplacer = (bus) => {
            return bus.embarquer(perso)
        }
    }
}

let perso = new Personne("Dank", "Memes", 100);

class Bus {
    constructor(personnes, caisse) {
        this.personnes = personnes,
        this.caisse = caisse,
        this.embarquer = (passager) => {
            if (passager.argent >= 2.8) {
                passager.argent -= 2.8;
                bus.caisse += 2.8;
                console.log(`Il vous reste ${perso.argent}`);
                bus.personnes.push(perso.prenom);
                console.log(bus.caisse);
            } else {
                return console.log(`T'es pauvre msk`);
            }
        }
    }
}

let bus = new Bus([], 0)


// 8h
console.log(`${perso.prenom} est à ${maison.nom}`);
// 8h30
perso.seDeplacer(bus);
// 8h45
bus.personnes.pop();
molengeek.personnes.push(perso.prenom);
console.log(molengeek);
// 12h45
molengeek.personnes.pop()
console.log(molengeek);
perso.seDeplacer(bus);
bus.personnes.pop();
snack.personnes.push(perso.prenom);
console.log(snack);
snack.personnes.pop();
console.log(snack);
// 13h30
molengeek.personnes.push(perso.prenom)
console.log(molengeek);
// 17h10
molengeek.personnes.pop();
console.log(molengeek);
perso.seDeplacer(bus)


console.log(bus.caisse);