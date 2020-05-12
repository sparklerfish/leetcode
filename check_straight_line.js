var checkStraightLine = function(coordinates) {
    let xOne = coordinates[0][0];
    let xTwo = coordinates[1][0];
    let yOne = coordinates[0][1];
    let yTwo = coordinates[1][1];
    
    let slope = (yTwo - yOne) / (xTwo - xOne)
    
    for (let i = 2; i < coordinates.length; i++) {
        xOne = coordinates[i - 1][0];
        xTwo = coordinates[i][0];
        yOne = coordinates[i - 1][1];
        yTwo = coordinates[i][1];
        
        if ((yTwo - yOne) / (xTwo - xOne) !== slope) return false;
        
    }
    
    return true;
};