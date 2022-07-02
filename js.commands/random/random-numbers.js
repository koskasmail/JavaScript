

function fnRandom() {


    /**
     * random (0-9)
     **/ 
    this.random_0_9 = function(){
        var randomNumber = 0;
            randomNumber = Math.floor(Math.random() * 10 );
        return randomNumber;
    }


    /**
     * random (1-9)
     **/ 
    this.random_1_9 = function(){
        var randomNumber = 0;
            randomNumber = Math.floor(Math.random() * 10 );
        return randomNumber;
    }


    /**
     * random (min-max)
     **/ 
    this.randomMinToMax = function(min,max){
        var randomNumber = 0;
            randomNumber = ( Math.floor(Math.random() * (max - min) ) + min );
        return randomNumber;
    }


    
}


var fnr = new fnRandom();

// 0 - 9
console.log(`randomTill (0-9):: ${fnr.random_0_9()} `) ;

// 1 - 9
console.log(`randomTill (1-9):: ${fnr.random_1_9()} `) ;

// 1 - 46
console.log(`randomTill (1-45):: ${fnr.randomMinToMax(1,46)} `) ;