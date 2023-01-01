// ********************************************************************************************************************
// function:    abs
// ********************************************************************************************************************
// parameters:  value - the value
// ********************************************************************************************************************
// returns:     the result
// ********************************************************************************************************************
export function abs(value: number): number {

    const result = Math.abs(value);

    return result;
}

// ********************************************************************************************************************
// function:    ceiling
// ********************************************************************************************************************
// parameters:  value - the value
// ********************************************************************************************************************
// returns:     the result
// ********************************************************************************************************************
export function ceiling(value: number): number {

    const result = Math.ceil(value);

    return result;
}

// ********************************************************************************************************************
// function:    clamp
// ********************************************************************************************************************
// parameters:  value - the value
// ********************************************************************************************************************
//              min - the min
// ********************************************************************************************************************
//              max - the max
// ********************************************************************************************************************
// returns:     the result
// ********************************************************************************************************************
export function clamp(value: number, min: number, max: number): number {

    value = Math.min(value, max);

    value = Math.max(value, min);

    return value;
}

// ********************************************************************************************************************
// function:    clampZeroOne
// ********************************************************************************************************************
// parameters:  value - the value
// ********************************************************************************************************************
// returns:     the result
// ********************************************************************************************************************
export function clampZeroOne(value: number): number {

    const result = clamp(value, 0, 1);

    return result;
}

// ********************************************************************************************************************
// function:    floor
// ********************************************************************************************************************
// parameters:  value - the value
// ********************************************************************************************************************
// returns:     the result
// ********************************************************************************************************************
export function floor(value: number): number {

    const result = Math.floor(value);

    return result;
}

// ********************************************************************************************************************
// function:    lerp
// ********************************************************************************************************************
// parameters:  value1 - the value 1
// ********************************************************************************************************************
//              value2 - the value 2
// ********************************************************************************************************************
//              amount - the amount
// ********************************************************************************************************************
// returns:     the result
// ********************************************************************************************************************
export function lerp(value1: number, value2: number, amount: number = 0.5): number {

    const result = value1 + (amount * (value2 - value1));

    return result;
}

// ********************************************************************************************************************
// function:    max
// ********************************************************************************************************************
// parameters:  value1 - the value 1
// ********************************************************************************************************************
//              value2 - the value 2
// ********************************************************************************************************************
// returns:     the result
// ********************************************************************************************************************
export function max(value1: number, value2: number): number {

    const result = Math.max(value1, value2);

    return result;
}

// ********************************************************************************************************************
// function:    min
// ********************************************************************************************************************
// parameters:  value1 - the value 1
// ********************************************************************************************************************
//              value2 - the value 2
// ********************************************************************************************************************
// returns:     the result
// ********************************************************************************************************************
export function min(value1: number, value2: number): number {

    const result = Math.min(value1, value2);

    return result;
}

// ********************************************************************************************************************
// function:    normalize
// ********************************************************************************************************************
// parameters:  value - the value
// ********************************************************************************************************************
//              min - the min
// ********************************************************************************************************************
//              max - the max
// ********************************************************************************************************************
// returns:     the result
// ********************************************************************************************************************
export function normalize(value: number, min: number, max: number): number {

    const result = scale(value, min, max, 0, 1);

    return result;
}

// ********************************************************************************************************************
// function:    scale
// ********************************************************************************************************************
// parameters:  value - the value
// ********************************************************************************************************************
//              oldMin - the old min
// ********************************************************************************************************************
//              oldMax - the old max
// ********************************************************************************************************************
//              newMin - the new min
// ********************************************************************************************************************
//              newMax - the new max
// ********************************************************************************************************************
// returns:     the result
// ********************************************************************************************************************
export function scale(value: number, oldMin: number, oldMax: number, newMin: number, newMax: number): number {

    const range = oldMax - oldMin;

    const result = range ? ((newMax - newMin) * (value - oldMin) / range) + newMin : 0;

    return result;
}
