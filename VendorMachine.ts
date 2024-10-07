class VendorMachine {
  private isOn: boolean;
  private snacksQty: number;
  private money: number;

  public buySnacks() {
    this.isOn = true;
    this.money = +2;
    this.snacksQty = -1;
  }

  public reset() {
    this.isOn = false;
    this.snacksQty = +50;
    this.money = 0;
    this.isOn = true;
  }

  public shootWithFoot() {
    this.snacksQty = -5;
    this.money = -20;
    this.isOn = false;
  }
}
