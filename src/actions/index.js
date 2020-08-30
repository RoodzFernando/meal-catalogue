const CHECK_BEVERAGE = 'CHECK_BEVERAGE';

const beverageAction = drinks => {
    return {
        type: CHECK_BEVERAGE,
        drinks
    }
}

export {
    CHECK_BEVERAGE,
    beverageAction
}