import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { observer, inject } from "mobx-react";
import { hook } from 'cavy';

@inject("counterStore")
@observer
class Counter extends Component {
  render() {
    return <Text ref={this.props.generateTestHook('counter')}>Count: {this.props.counterStore.count}</Text>;
  }
}

const TestableCounter = hook(Counter);

@inject("counterStore")
class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <TestableCounter/>
        </View>

        <View style={styles.row}>
          <View style={styles.container}>
            <Button
              ref={this.props.generateTestHook('button')}
              onPress={() => this.props.counterStore.increment()}
              title="Increment counter"
            />
            <Button
              onPress={() => this.props.counterStore.decrement()}
              title="Decrement counter"
            />
          </View>
        </View>
      </View>
    );
  }
}

const TestableHome = hook(Home);
export default TestableHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  row: {
    flex: 1,
    justifyContent: "center"
  }
});
