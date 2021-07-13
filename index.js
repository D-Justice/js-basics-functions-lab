// Code your solution in this file!

function distanceFromHqInBlocks(blocksFromHq) {
    
    const distance = Math.abs(blocksFromHq - 42);
    return distance;
} 

function distanceFromHqInFeet(blocksFromHq) {
    const distance = distanceFromHqInBlocks(blocksFromHq);

    const feet = 264
    const distanceTravelledInFeet = distance * feet;
    return distanceTravelledInFeet;
}

function distanceTravelledInFeet(blocks1, blocks2) {
    const howMany = blocks1 - blocks2;
    const inFeet = Math.abs(howMany * 264);
    return inFeet;
}

function calculatesFarePrice(start, destination) {
    let price;
    const inFeet = distanceTravelledInFeet(start, destination);
    
    if (inFeet < 400) {
        return price = 0;
    } else if ((inFeet > 400) && (inFeet < 2000)) {
        return price = (inFeet - 400) * 0.02;
    } else if ((inFeet >= 2000) && (inFeet < 2500)) {
        return price = 25;
    }else if (inFeet >= 2500) {
        return price = 'cannot travel that far';
    }


}

