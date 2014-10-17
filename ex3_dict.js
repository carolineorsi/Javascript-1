var votesToGoEatCake = [true, true, true, true];

var hackbrightStudents = ["katie", "amy", "jenny", "katie", "kelley", "katie", "amy"];

var classroomIds = ["47","12", "19", "22", "26", "99", "30", "50", "324", "003", "44",
    "33", "346", "354", "44", "235", "45", "34", "44", "590", "09", "099", "0", "1", "3", 
    "33", "999", "9"];
    
var randomJunkIFound = ["katie", "true", true, 19, "gargoyles", "!", 2 + 3, "2 + 3", 
    19, "19", 19 === "19", 6, false, false];

function duplicates(list) {
    dupl = {};
    duplicate_list = [];

    for (var n=0; n < list.length; n++) {

            if (!(list[n] in dupl)) { 
                dupl[list[n]] = [];
                dupl[list[n]].push(typeof list[n]);
            }
            
            else if (list[n] in dupl && !(if_in(typeof list[n], dupl[list[n]])))
            {
                dupl[list[n]].push(typeof list[n]);
            }
            else {
                if (!(if_in(list[n], duplicate_list))){
                    duplicate_list.push(list[n]);
                }
            }

    }

    return duplicate_list;
}

function if_in(item, list) {
    is_in = false;
    for (var i = 0; i < list.length; i++) {
        if (item === list[i]) {
            is_in = true;
        }
    }
    return is_in;
}

console.log(duplicates(randomJunkIFound));