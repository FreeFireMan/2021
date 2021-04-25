// Необхідно реалізувати базовий клас комютера. Який має лише параметри:
// Оперативна память.
// Потужність процесора. (цифра від 0 до 1000)
// Назва.
// В кожного компютера має бути метод включання.
class Pc{
    constructor(op,cpu,name){
        this.op = op;
        this.cpu=cpu;
        this.name = name;
    
    }
    powerOn(){
    console.log(` ${this.name}PC   power is on`);
}
}



let pentium3 = new Pc(2, 0.8, 'puntium3');
console.log(pentium3);

pentium3.powerOn()

// ===
// Від базового компютрера треба реалізувати ноутбук.
// Він має нову властивість дюймаж монітора
// У нього зявляється нова змінна роботи батареї. 
// Ця змінна визначається як потужність / (дюйми * оперативку)


class Laptop extends Pc{
    constructor(op,cpu,name, display){
        super(op,cpu,name);
        this.display = display;
        
    }
    powerB(){
         this.p=this.cpu/(this.display*this.op);
                
             return this.p
    }
         
    }
   
let Lenovo = new Laptop(8, 3, 'Lenovo IdeaPad S340', 14)

console.log(Lenovo)

// Від ноутбука потрібно зробити ультрабук.
// Він має нову змінну ваги.
// При включенні ультрабуку має видаватися помилка, 
// якшо вага більша за 2кг та батарея тримаж менше ніж 4 години.
class UltraBook extends Laptop{
    constructor(op,cpu,name, display, weight){
        super(op,cpu,name, display)
        this.weight = weight;
    
    }
    powerOn(){
        
        if(this.weight >2  && this.powerB()<4) {
            console.log('Ошибка запусакa');
          
        } 
    }
}


let mac = new UltraBook(8,4,'mac book', 13.1, 3)

mac.powerOn()
mac.powerB()

// Від базвого класу потрібно створити базовий ПК.
// В нього має бути новий метод запуску ігор.
// Кількість FPS визначається як потужність / опервтивку.
// Example: `You are playing *GAME_NAME* with *FPS_COUNT* FSP`

class PC_Base extends Pc{
    constructor(op,cpu,name='UserPC', gameName){
        super(op,cpu,name)
        this.gameName = gameName;
    }

    DateFPS(){
        return this.fps = this.cpu/this.op;
    }

launchGame(){
    console.log(`You are playing ${this.gameName} with ${this.DateFPS()} FSP`);
}

cpuUp(){
    
     this._maxCpuP = this.cpuUp *0.1

    if(this.cpu<this.cpu+this._maxCpuP){
        this.cpu += 100

    }
}

} 




basePCHome = new PC_Base(8,5000, undefined, 'NFS 3 ')
basePCHome.launchGame()
basePCHome.cpuUp()


