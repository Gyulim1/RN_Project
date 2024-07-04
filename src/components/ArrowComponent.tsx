import React from 'react';
import {Text} from 'react-native';
import * as D from '../data';

const person = D.createRandomPerson();

const ArrowComponent = () => {
  return (
    <Text>
      <Text>{JSON.stringify(person, null, 2)}</Text>
    </Text>
  );
};

export default ArrowComponent;
