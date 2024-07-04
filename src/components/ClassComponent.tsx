import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native';
import * as D from '../data';

const person = D.createRandomPerson();

export default class ClassComponent extends Component {
  render() {
    return (
      <SafeAreaView>
        <Text>{JSON.stringify(person, null, 2)}</Text>
      </SafeAreaView>
    );
  }
}
