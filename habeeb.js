
class Habeeb {

    checkName(name){
        return new Promise( (resolve, reject) =>{
            if(name.length >3){
                resolve(name+' is valid');

            }
            reject(name+' is not valid')
        });
    }

     checkAge (age){
        try{
            if(age > 18){
            return true;
            }
            return false
        }
        catch(error){
            return error;
        }
    }
}
module.exports = new Abass;








class Habeeb {
    checkvalidity(numbers){
        return new promise ((resolve,reject)=>{
            if(numbers%2==0){
                resolve (numbers, `yes, it's even`);
            }
            reject (numbers, 'not even');
        }
        )
    }
}
