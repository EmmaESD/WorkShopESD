class Car {
  private motor;
  private brakesPads;
  private wheels;

  public brake() {
    this.brakesPads = true;
    this.wheels = "straight";
  }
  public turnLeft() {
    this.motor = true;
    this.wheels = "left";
    this.brakesPads = false;
  }
  public turnRight() {
    this.motor = true;
    this.wheels = "right";
    this.brakesPads = false;
  }
  public stop() {
    this.motor = false;
    this.brakesPads = true;
    this.wheels = "straight";
  }
  public drive() {
    //mettre le moteur on
    this.motor = true;
    //desserer les freins
    this.brakesPads = false;
  }
}

const car = new Car();
//mot clefs new permet de créer une instance de la classe
