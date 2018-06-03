/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { connect } from "react-redux";
import ListItem from "./ListItem";
import reducers from "./reducers";
import * as actions from "./actions";

//const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

class HomeScreen extends Component {
  state = {
    term: "",
    enableButton: true
  };

  //changer defined...

  changer = text => {
    this.setState({ term: text, enableButton: false });

    if (text === "") {
      this.setState({ term: text, enableButton: true });
    }
  };
  /*
  Add = () => {
    const updatedItems = [...this.state.items, this.state.term];

    this.setState({ term: "", items: updatedItems });
  };
*/
  /*
  dele = title => {
    const updatedele = this.state.items.filter(eachItem => eachItem !== title);

    this.setState({ items: updatedele });
  };
*/

  AddHandler = () => {
    if (this.state.term !== "") {
      this.props.addNewTask(this.state.term);
      this.setState({ term: "" });
    } else {
      this.setState({ enableButton: true });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: "row", marginTop: 3 }}>
          <TextInput
            style={{
              height: 40,
              width: 350,
              backgroundColor: "tomato",
              color: "white",
              fontSize: 13,
              padding: 10
            }}
            underlineColorAndroid={"transparent"}
            onChangeText={text => this.changer(text)}
            value={this.state.term}
          />
          <Button
            title="Add"
            style={{ width: "30" }}
            onPress={this.AddHandler}
            disabled={this.state.enableButton}
          />
        </View>
        <View style={{ backgroundColor: "#90A4AE", alignItems: "center" }}>
          {this.props.tasky.itemsy.map((eachItem, i) => (
            <ListItem
              key={i}
              title={eachItem}
              clicke={this.props.deleteTask}
              index={i}
            />
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    backgroundColor: "beige"
  }
});

function mapStateToProps(state) {
  return {
    tasky: state.tasky
  };
}

export default connect(mapStateToProps, actions)(HomeScreen);
