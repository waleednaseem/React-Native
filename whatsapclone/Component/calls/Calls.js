import React from 'react'
import { View, Text,StyleSheet,Button } from 'react-native'
import CallList from './CallList'

export default function Calls() {
    return (
      <View >
        <CallList/>
        <CallList/>
      </View>
    );
  }
