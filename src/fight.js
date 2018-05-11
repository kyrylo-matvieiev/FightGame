// create async function fight

async function fight(fighter, improvedFighter, points) {
    while(fighter.health >= 0 && improvedFighter.health >= 0) {
        fighter.hit(improvedFighter, points);
        improvedFighter.doubleHit(fighter, points);
    }
    if(fighter.health <= 0) {
        console.log("user in knockout");
        let promise = fighter.knockout();
        promise
            .then(
                result => {console.log(improvedFighter.name + " win")}
            );
    } else if(improvedFighter.health <= 0) {
        console.log("user in knockout");
        let promise = improvedFighter.knockout();
        promise
            .then(
                result => {console.log(fighter.name + " win")}
            );
    }
}