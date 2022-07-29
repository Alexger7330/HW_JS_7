let Car = function () {
    this.getParams = function () {
        this.brand = prompt(`Введите марку автомобиля`);
        this.number = prompt(`Ввеедите номер вашего автомобиля`);
        this.hp = prompt(`Введите мощность вашего автомобиля h/p`);
        this.engine = false;
        this.moving = false;
        this.mileage = 0;
        this.speed = 0;
    }

    this.getInfo = () => {
        document.write(`Марка автомобиля: ${this.brand}<br>`)
        document.write(`Номер вашего автомобиля: ${this.number}<br>`)
        document.write(`Количесво лошадиных сил в вашем авто: ${this.hp} h/p<br>`)
        document.write(`Пробег автомобиля: ${this.mileage} km<br>`)
    }

    this.startEngine = () => {
        let a = confirm(`Включить двигатель?`);
        if (a === true && this.engine === false) {
            alert(`Двигатель включен`);
            this.engine = true;
        } else {
            alert(`Двигатель выключен`)
        }
    }
    this.stopEngine = () => {
        let a = confirm(`Выключить двигатель?`);
        if (a === true && this.engine === true) {
            alert(`Двигатель выключен`);
            this.engine = false;
        } else {
            alert(`Двигатель включен`)
        }
    }
    this.startMoving = () => {
        let a = confirm(`Начать движение?`);
        if (a === true && this.engine === true) {
            let drive = prompt(`Введите передачу: N,R,D`);
            switch (true) {
                case drive == `N`:
                    this.speed = 0;
                    alert(`Предача N, speed = ${this.speed} km/h`);
                    break;
                case drive == `D`:
                    let s = +prompt(`С какой скоростью вы хотите ехать?`);
                    if (s > 200) {
                        this.speed = 200;
                    } else {
                        this.speed = s;
                    }
                    this.mileage += this.speed / 2;
                    alert(`Предача D, speed = ${this.speed} km/h`);
                    break;
                case drive == `R`:
                    let d = +prompt(`С какой скоростью вы хотите ехать?`);
                    if (d > 45) {
                        this.speed = 45;
                    } else {
                        this.speed = d;
                    }
                    this.mileage += this.speed / 2;
                    alert(`Предача R, speed = ${this.speed} km/h`);
                    break;
                default:
                    this.speed = 0;
                    alert(`Предача P, speed = ${this.speed} km/h`);
            }
        }
    }
}
let car = new Car();
car.getParams();
car.startEngine();
car.startMoving();
car.stopEngine();
car.getInfo();