


exports.isUpper = function(char_){
    
    var  LETTERS= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var index = LETTERS.indexOf(char_);

    if(index == -1)
        return false;
    else
        return true;

    
}

exports.arrToStr = function(arr){

    var str = "";
    for(var index = 0; index < arr.length ; index++)
        str += arr[index];

    return str;
}

exports.is_negative = function(val){
    if(val < 0)
        return true;
    return false;
}

exports.calculate_modular = function(dividend , diviser){
    // this makes the modulas bahave like
    // the like modulas behave when
    // dividend is negative

    return diviser + dividend;
}
