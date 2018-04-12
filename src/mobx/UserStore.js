/* @flow */
import { observable, action } from "mobx";
export default class UserStore {
  @observable firstName = "Sen";
  @observable lastName = "Appleseed";

  @action data(data: Object) {
    if (data.firstName) {
      this.firstName = data.firstName;
    }
    if (data.lastName) {
      this.lastName = data.lastName;
    }
  }
}
