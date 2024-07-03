import React from 'react';
import {SafeAreaView} from 'react-native';
import ClassComponent from './src/screens/ClassComponent';
import ArrowComponent from './src/screens/ArrowComponent';

export default function App() {
  return (
    <SafeAreaView>
      <ClassComponent/>
      <ArrowComponent/>
    </SafeAreaView>
  );
}
