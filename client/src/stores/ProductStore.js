import { observable, decorate, computed, action } from "mobx";
import axios from 'axios';

export default class ProductStore {
  @observable id;
  @observable name;
  @observable descript;

  constructor(product = null) {

    this.id = null;
    this.name = null;
    this.descript = null;

    if(product) {
      this.id = product.id;
      this.name = product.name;
      this.descript = product.descript;
    }
  }

  @action.bound getData(id) {
    axios.get(`/api/${id}`)
      .then((response) => {
        console.log(response.data.data);
          this.id =  response.data.data.id,
          this.name = response.data.name,
          this.descript = response.data.descript
      })
      .catch((error) => {
        console.log(error);
      });

  }
  
}
