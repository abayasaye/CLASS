class Bulding {
    constructor(city,street,floor,numberOfRooms){
        this.city = city;
        this.sreet = street;
        this.floor = floor;
        this.numberOfRooms = numberOfRooms;


    }
}
const bulding = new Bulding( haifa , sholomo , 5 , 5 )

class Villa extends bulding {
    constructor(city,street,floor,numberOfRooms ,poolSize , yardSize ,){
        super(city, street,floor , numberOfRooms)
        this.poolSize = poolSize;
        this.yardSize = yardSize;

    }
}
const newVilla = new Villa (haifa , david , 0 ,8, 100, 40) 
console.log(Villa);

class Movies {
    constructor(year , ){

    }
}