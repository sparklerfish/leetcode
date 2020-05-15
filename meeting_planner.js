    function meetingPlanner(slotsA, slotsB, dur) {
    let a = 0;
    let b = 0;

    while (a < slotsA.length && b < slotsB.length) {
        let slotA = slotsA[a];
        let slotB = slotsB[b];
        let slotStart = Math.max(slotA[0], slotB[0]);
        let slotEnd = Math.min(slotA[1], slotB[1]);

        if (slotEnd - slotStart >= dur) {
        return [slotStart, slotStart + dur];
        } else {
        if (slotB[1] < slotA[1]) {
            b++;
        } else {
            a++;
        }
        }
    }
    return [];
}