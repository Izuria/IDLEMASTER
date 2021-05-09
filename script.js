


/////////////////////////////////////////////////////////
//           GAME STATE FUNCTIONS/METHODS             //
///////////////////////////////////////////////////////
var money;
var tempIdolList = new Array();
var idolList = new Array();
var idolCounter = 0;

function initializeGame()
{
    money = 50000;
}




/////////////////////////////////////////////////////////
//           IDOL STATE FUNCTIONS/METHODS             //
///////////////////////////////////////////////////////
//TODO: add an experience modifier?


var idolFloor, idolCeiling;

var priceToScout = 10000;

class Idol {
    constructor(first, last, age) {
        this.idolID = idolCounter;
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.group = null;
        this.cool = Math.floor(Math.random() * 100) + 1; // index of 0
        this.cute = Math.floor(Math.random() * 100) + 1; // index of 1
        this.pretty = Math.floor(Math.random() * 100) + 1; // index of 2
        this.vocal = Math.floor(Math.random() * 100) + 1;
        this.dance = Math.floor(Math.random() * 100) + 1; 
        idolCounter++;
    }
}


function scoutIdols()
{
    for(let i = 0; i < 5; i++)
    {
        tempIdolList.push(new Idol("Placeholder", "Name", 18));
    }
    money -= priceToScout;
}




/////////////////////////////////////////////////////////
//           JOBS STATE FUNCTIONS/METHODS             //
///////////////////////////////////////////////////////

// Index is the job type. As of now, there is only 1 job
// These are jobs that every idol as an invidivdual can do.
function individualJob(idol, type)
{
    let multiplier = 1;
    if (type === "photoshoot")
    {
        let payment = Math.floor(Math.random() * 91) + 10; // probably make this better
        let attribute = Math.floor(Math.random() * 3); // The attribute to be boosted
        switch(attribute)
        {
            case 0: // cool
                multiplier += (idol.cool * 0.25);
                break;
            case 1: // cute
                multiplier += (idol.cute * 0.25);
                break;
            case 2: // pretty
                multiplier += (idol.pretty * 0.25);
                break;
        }

        money += payment * multiplier;
    }
}