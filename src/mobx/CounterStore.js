// observable adds observable capabilities to existing data structures like
// objects, arrays and class instances
import { observable, action } from 'mobx';

export default class CounterStore {
  // Creat an observable array
  @observable count = 0;

  @action increment() {
    this.count += 1;
  }

  @action decrement() {
    this.count -= 1;
  }
}
