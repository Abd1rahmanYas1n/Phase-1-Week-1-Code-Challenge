// we start by creating a function which will check speed and calculate demerit points
function checkSpeed(speed) {
    const speedLimit = 70;
    const PointOverSpeedLimit = 5;

    let points = 0;

    // we then detrmine if speed is equal to the speed limit

    if (speed <= speedLimit){
        console/log ('OK')
        return
    }
    // we then determine the demerit points
    if (speed > speedLimit){
        points = Math.ceil ((speed - speedLimit)/PointOverSpeedLimit)
    }
console.log (`points : ${points}`)

// to check f the license should be suspended
if (points > 12) {
    console.log (' License Suspended')
}

}