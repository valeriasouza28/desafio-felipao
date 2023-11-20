const LIMITS = {
    NAME_MIN: 5,
    NAME_MAX: 15,
    XP_MIN: 0,
    XP_MAX: 10001
};

function validateHeroName(name) {
    const characterRule = /^[a-zA-Z]{3}[a-zA-Z0-9]*$/;

    if (name.length < LIMITS.NAME_MIN || name.length > LIMITS.NAME_MAX) {
        throw new Error(
            `The hero's name must be between ${LIMITS.NAME_MIN} and ${LIMITS.NAME_MAX} characters.`
        );
    } else if (!characterRule.test(name)) {
        throw new Error(
            "The hero's name must start with at least 3 letters, followed by 3 or more characters, either letters or numbers."
        );
    }
}

function validateHeroLevel(xp) {
    if (!Number.isInteger(xp)) {
        throw new Error("You did not enter an integer.");
    } else if (xp < LIMITS.XP_MIN || xp > LIMITS.XP_MAX) {
        throw new Error(
            `The hero's XP must be a number between ${LIMITS.XP_MIN} and ${LIMITS.XP_MAX}.`
        );
    }

    if (xp <= 1000) return "Iron";
    if (xp <= 2000) return "Bronze";
    if (xp <= 5000) return "Silver";
    if (xp <= 7000) return "Gold";
    if (xp <= 8000) return "Platinum";
    if (xp <= 9000) return "Ascendant";
    if (xp <= 10000) return "Immortal";
    return "Radiant";
}

function createHero(name, xp) {
    try {
        validateHeroName(name);
        const level = validateHeroLevel(xp);
        return `The hero named ${name} is at the level of ${level}`;
    } catch (error) {
        console.error(error.message);
    }
}

const firstHero = createHero("valeriasouza28", 9000);
console.log(firstHero);
