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
    this.snacksQty = -1;
  }

  public reset(): void {
    this.isOn = false;
    this.snacksQty = 50;
    this.money = 0;
    this.isOn = true;
  }

  public shootWithFoot(): void {
    this.snacksQty = -5;
    this.money = -20;
    this.isOn = false;
  }
}

const vendorMachine = new VendorMachine();

vendorMachine.reset();
vendorMachine.shootWithFoot();
vendorMachine.buySnacks;
