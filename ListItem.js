import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight
} from "react-native";

const ListItem = props => (
  <TouchableHighlight onPress={props.clicke.bind(this, props.title)}>
    <View>
      <Text
        style={{
          width: 300,
          height: 30,
          color: "white",
          fontSize: 25
        }}
      >
        --> {props.title}
      </Text>
    </View>
  </TouchableHighlight>
);

export default ListItem;
