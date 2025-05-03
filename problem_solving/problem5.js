function calculateWatchTime(times) {
    if (!Array.isArray(times)) {
        return "Invalid";
    }
    let totalSeconds = 0;
    
    for (let time of times) {
        if (typeof time !== 'number') {
            return "Invalid";
        }
    totalSeconds = time+totalSeconds;
    }
    const hours = Math.floor(totalSeconds / 3600);
    const remainingAfterHours = totalSeconds % 3600;
    const minutes = Math.floor(remainingAfterHours / 60);
    const seconds = remainingAfterHours % 60;
    
    return {
        hour: hours,
        minute: minutes,
        second: seconds
    };
}

const x = [100,99,119,300];

const answer =calculateWatchTime(x);
console.log(answer);
