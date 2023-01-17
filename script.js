// classes 
// methods
// properties

class Car {
  constructor(name, color, topSpeed) {
    this.name = name
    this.color = color
    this.topSpeed = topSpeed
    this.currentSpeed = 0
  }

  zeroToSixty() {
    setTimeout(() => {
      console.log('pheww! That was fast!')
      this.currentSpeed = 60
      console.log(ferrari.currentSpeed)
    }, 2900)
  }

  drive() {
    this.currentSpeed += 10
    console.log('driving at ' + this.currentSpeed + ' km/h')

  }

  brake() {
    this.currentSpeed -= 10
    console.log('slowing down, moving at ' + this.currentSpeed + ' km/h')
  }
}

const ferrari = new Car('ferrari', 'red', 250)

// console.log(ferrari)
ferrari.drive()
ferrari.drive()
ferrari.brake()
ferrari.brake()
// ferrari.zeroToSixty()
// console.log(ferrari.currentSpeed)