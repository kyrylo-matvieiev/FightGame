// Create class Fighter

class Fighter {

    constructor(name, health, power) {
        this.name = name;
        this.health = health;
        this.power = power;
    }

    setDamage(damage) {
        this.health -= damage;
        console.log(`${this.health}`); 
    }

    hit(enemy, point) {
        let damage = null; 
        point.forEach(element => {
            damage = damage + (element * this.power);
        });
        enemy.setDamage(damage);
    }

    knockout() {
        return new Promise((resolve, reject) => {
            console.log("time is over");
            setTimeout(() => {
                resolve("result");
            }, 500);
        });
    }   

}
