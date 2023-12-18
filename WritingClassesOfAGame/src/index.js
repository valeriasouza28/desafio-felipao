class Hero {
    constructor(name, age, type) {
        this.name = this.validateHeroName(name);
        this.type = this.validateHeroType(type);
        this.age = this.validateHeroAge(age);
    }

    static LIMITS = {
        NAME_MIN: 5,
        NAME_MAX: 15,
        TYPEHERO_MIN: 4,
        TYPEHERO_MAX: 7,
        AGE_MIN: 10,
        AGE_MAX: 100
    };

    validateHeroName(name) {
        const characterRule = /^[a-zA-Z]{3}[a-zA-Z0-9]*$/;

        if (
            name.length < Hero.LIMITS.NAME_MIN ||
            name.length > Hero.LIMITS.NAME_MAX
        ) {
            throw new Error(
                `The hero's name must be between ${Hero.LIMITS.NAME_MIN} and ${Hero.LIMITS.NAME_MAX} characters.`
            );
        } else if (!characterRule.test(name)) {
            throw new Error(
                "The hero's name must start with at least 3 letters, followed by 3 or more characters, either letters or numbers."
            );
        }

        return name;
    }

    validateHeroType(type) {
        try {
            const typesHero = {
                warrior: "sword",
                mage: "magic",
                monk: "martial arts",
                ninja: "shuriken"
            };
            const allowedCharacters = /^[a-zA-Z]+$/;
            type = type.toLowerCase();

            if (typeof type !== "string") {
                throw new Error("The argument must be a string.");
            } else if (
                type.length < Hero.LIMITS.TYPEHERO_MIN ||
                type.length > Hero.LIMITS.TYPEHERO_MAX
            ) {
                throw new Error(
                    `The length of the string must be between ${Hero.LIMITS.TYPEHERO_MIN} and ${Hero.LIMITS.TYPEHERO_MAX} characters.`
                );
            } else if (!allowedCharacters.test(type)) {
                throw new Error(
                    "The string must contain only alphabetic characters."
                );
            } else if (!(type in typesHero)) {
                throw new Error("The type don't exists");
            }

            this.typeAttack = typesHero[type];
            return type;
        } catch (error) {
            console.error(error.message);
        }
    }

    validateHeroAge(age) {
        try {
            const allowedCharacters = /^[0-9]+$/;
            if (
                typeof age !== "number" ||
                !allowedCharacters.test(age) ||
                age < Hero.LIMITS.AGE_MIN ||
                age > Hero.LIMITS.AGE_MAX
            ) {
                throw new Error(
                    `The argument must be an integer between ${Hero.LIMITS.AGE_MIN} and ${Hero.LIMITS.AGE_MAX}.`
                );
            }
            return age;
        } catch (error) {
            console.error(error.message);
        }
    }

    displayHeroInfo() {
        console.log(`Hero Name: ${this.name}`);
        console.log(`Hero Type: ${this.type}`);
        console.log(`Hero Age: ${this.age}`);
    }

    toAttack() {
        try {
            const attack = `The hero ${this.type} attacked using (${this.typeAttack})`;
            console.log(attack);
            return attack;
        } catch (error) {
            console.error(error.message);
        }
    }
}

// Função de teste
function testHero() {
    try {
        const hero = new Hero("HeroName", 25, "mage");
        hero.displayHeroInfo();
        hero.toAttack();
    } catch (error) {
        console.error(error.message);
    }
}

// Chamar a função de teste
testHero();
