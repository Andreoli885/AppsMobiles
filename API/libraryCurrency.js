const rp=require("request-promise");

function buscanumero(fbase){
    
    var options={
        uri:"http://apilayer.net/api/validate?access_key=2fcf610cd1c1d5f0a7f795e8c6d5dad6&number="+fbase,
        json:true
        
    }
    return rp(options);
}

module.exports=buscanumero;
