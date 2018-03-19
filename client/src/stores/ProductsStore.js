import { observable, computed, action } from 'mobx';
import axios from 'axios';
import { fromPromise } from 'mobx-utils';
import ProductStore from './ProductStore';


export default class ProductsStore {

  @observable items = [];

  constructor() {
    this.getData();
  }

  @computed get getProducts() {
    return this.items;
  }

  @action.bound getData() {
    axios.get('/api/')
      .then((response) => {
        response.data.data.forEach(element => {
          console.log(element);
          this.items.push(
            new ProductStore({
              id: element.id,
              name: element.name,
              descript: element.descript
            })
          );          
        });;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
