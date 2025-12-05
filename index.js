class NationalTeam{
    constructor(country,league){
        this.country=country;
        this.league=league;
    }
    getCountry(){
        return this.country;
    }
    getLeague(){
        return this.league;
    }
}

class Pot{
    constructor(number){
            this.number=number;
    }
    getNumber(){
        if(this.number>0 && this.number<5){
            return this.number;
        }
        else{
            return Error("Pot has to be a number between 1 and 4");
        }
    }
    setTeam(NationalTeam){
        var teams=[];
        var adicionar=teams.push(NationalTeam)
    }
    getTeams(){
        //return adicionar;
    }
}

class Group{
    constructor(letter){
       this.letter=letter;
    }
    getLetter(){
        const letterAux=this.letter;
        const arrayLetters = ["A","B","C","D","E","F","G","H"];
        for(let i=0;i<arrayLetters.length;i++){
            if(letterAux==arrayLetters[i]){
                return letterAux;
            }
            else{
                continue;
            }
        }
    }
}

class Raffle{
    drawTeam(){
        
    }
}
const pot2=new Pot(2);
console.log("Pot "+pot2.getNumber())
const groupA = new Group("A");
console.log("Group "+groupA.getLetter())
const deutschland = new NationalTeam("deutschland","europe");
console.log(deutschland.getCountry()+" from "+deutschland.getLeague())
pot2.setTeam(deutschland)
console.log(pot2.getTeams())
console.log("///---///---///---///---///")

const s="data da venda: 27/07/21. cliente: ZG soluções"
console.log(s.trim())

function findSubstring(str, subs){
    for(let i=0; i<s.length; i++){
        
    }
}