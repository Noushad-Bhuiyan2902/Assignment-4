
function calculateVAT( price ) {
    if((typeof price)=="number" && price>=0 ){
        return price*(7.5/100);
    }

    return "Invalid";
}


function validContact( contact ) {
    if((typeof contact)=="string" ){
        if( contact.length === 11 && contact[0]==="0" && contact[1]==="1"){
            for(let i=2; i<contact.length; i++){
                if(contact[i] === " ")
                    return false;
            }
            return true;
        }
        else{
            return false;
        }
    }
    return "Invalid";
}


function willSuccess( marks ) {
    if(Array.isArray(marks) ){
        if( marks.length == 0){
            return false;
        }
        else{
            let x = 0;
            for(let i=0; i<marks.length; i++){
                if(marks[i] < 50)
                    x++;
            }
            if(x>=(marks.length/2))
                return false;
            else{
                return true;
            }
        }
    }
    return "Invalid";
}


function validProposal( person1 , person2 ) {
    if(!Array.isArray(person1) && !Array.isArray(person2) && (typeof person1) == 'object' && (typeof person2) == 'object'){
        if( person1.gender == person2.gender || Math.abs(person1.age-person2.age)>7 ){
            return false;
        }
        else{
            return true;
        }
    }
    return "Invalid";
}


function calculateSleepTime( times ) {

    let x=0;

    for(let i=0; i<times.length; i++){
        if((typeof times[i])!= 'number'){
            return "Invalid";
        }
        x=x+times[i];
    }
    return { hour: Math.floor(x/3600) , minute: Math.floor((x%3600)/60) , second: Math.floor((x%3600)%60) };
}

