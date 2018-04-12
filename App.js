import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import stores from "./src/mobx/index";
import AppSpec from './specs/AppSpec';
import { Tester, TestHookStore } from 'cavy';

import Home from "./src/home";

const testHookStore = new TestHookStore();

export default class App extends Component {
  render() {
    return(
      <Tester specs={[AppSpec]} store={testHookStore} waitTime={4000}>
        <Provider {...stores}>
          <Home />
        </Provider>
      </Tester>
    )
  }
}
