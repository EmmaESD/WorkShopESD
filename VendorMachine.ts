class VendorMachine {
  private isOn: boolean;
  private snacksQty: number;
  private money: number;

  public constructor() {
    this.isOn = false;
    this.snacksQty = 50;
    this.money = 0;
  }

  public buySnacks(): void {
    this.isOn = true;
    this.money = +2;
    if (this.snacksQty < 1) {
      throw new Error("machine vide !");
    }
    this.snacksQty = -1;
  }

  public reset(): void {
    this.isOn = false;
    this.snacksQty = 50;
    this.money = 0;
    this.isOn = true;
  }

  public shootWithFoot(): void {
    if (this.snacksQty < 5) {
      throw new Error("bien essayé, il n'y a plus rien !");
    }
    this.snacksQty = -5;
    this.isOn = false;

    if (this.money < 20) {
      throw new Error("bien essayé, il n'y a plus d'argent !");
    }
    this.money = -20;
  }
}

const vendorMachine = new VendorMachine();

vendorMachine.reset();
vendorMachine.shootWithFoot();
vendorMachine.buySnacks;
