
var helper = require("./helper");


function Chiper(key){

    this.key = key.toUpperCase();
    this.CODE_KEY = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.translated = [];

    this.calculate_according_to_mode = function(mode , num , keyIndex){

        if(mode == "encrypt")
            num += this.CODE_KEY.indexOf(this.key[keyIndex]);
        else if(mode == "decrypt"){

            var current_key = this.key[keyIndex];
            num -= this.CODE_KEY.indexOf(current_key);
        }


        if(helper.is_negative(num)){
            num = helper.calculate_modular(num , this.CODE_KEY.length);
        }else
            num = num % this.CODE_KEY.length;


        return num;
            
    }

    this.run = function(message , mode){

        this.translated = []
        this.message = message;
        var keyIndex = 0;


        for(var index = 0 ; index < this.message.length ; index++){

            var symbol = this.message[index];
            var num = this.CODE_KEY.indexOf(symbol.toUpperCase());

            if(num != -1){

                num = this.calculate_according_to_mode(mode , num , keyIndex);

                if(helper.isUpper(symbol)){
                    this.translated.push(this.CODE_KEY[num]);
                }else{

                    this.translated.push(this.CODE_KEY[num].toLowerCase());
                }

                keyIndex +=1;


                if(keyIndex == this.key.length)
                    keyIndex = 0;

            }else{
                this.translated.push(symbol);
            }
        }

        return helper.arrToStr(this.translated);
    }



};


var message = "This is a message"
console.log("Message the first time")
var vine = new Chiper( "AGWRT");
message = vine.run(message , "encrypt");

console.log(message);
console.log("Message the second time");
message = vine.run(message , "decrypt");
console.log(message);
