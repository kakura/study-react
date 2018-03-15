import { observable, decorate, computed } from "mobx";

export default class ProductStore {
  @observable id;
  @observable name;
  @observable descript;

  constructor(product) {
    this.id = product.id;
    this.name = product.name;
    this.descript = product.descript;
  }
}
