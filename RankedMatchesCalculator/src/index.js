const LIMITS = {
    VICTORIES_DEFEATS_MIN: 0
};

function validateInputNumbers(value) {
    if (!Number.isInteger(value) || value < LIMITS.VICTORIES_DEFEATS_MIN) {
        throw new Error(
            `The value must be an integer greater than ${LIMITS.VICTORIES_DEFEATS_MIN}`
        );
    }
}

function calculateWinLossBalance(victories, defeats) {
    validateInputNumbers(victories);
    validateInputNumbers(defeats);

    return Math.abs(victories - defeats);
}

function validateRankedMatches(victories) {
    validateInputNumbers(victories);

    if (victories < 10) return "Iron";
    if (victories < 20) return "Bronze";
    if (victories < 50) return "Silver";
    if (victories < 80) return "Gold";
    if (victories < 90) return "Diamond";
    if (victories < 100) return "Legendary";
    return "Immortal";
}

function ranckedMatchesCalculator(victories, defeats) {
    try {
        const winLossBalance = calculateWinLossBalance(victories, defeats);
        const level = validateRankedMatches(winLossBalance);
        return `The Hero with a win-loss balance of ${winLossBalance} is at the level of ${level}`;
    } catch (error) {
        console.log(error.message);
    }
}

const result = ranckedMatchesCalculator(200, 102);
console.log(result);
