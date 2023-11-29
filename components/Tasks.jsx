import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

export default function Tasks({ data, ind, tasks }) {
  const supTask = (n) => {
    tasks[1](tasks[0].filter((el, ind) => ind !== n));
  };

  const isdone = (n) => {
    const ndata = [...tasks[0]];
    ndata[n].isDone = !ndata[n].isDone;
    tasks[1]([...ndata]);
  };

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: tasks[0][ind].isDone ? "#d8d8d8" : "white",
      }}
    >
      <View style={styles.leftItems}>
        <TouchableOpacity
          onPress={() => {
            isdone(ind);
          }}
          style={styles.squard}
        >
          {data.isDone && <View style={styles.isDone}></View>}
        </TouchableOpacity>
        <Text
          style={{
            ...styles.text,
            textDecorationLine: tasks[0][ind].isDone ? "line-through" : "none",
          }}
        >
          {data.text}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.circle}
        onPress={() => {
          supTask(ind);
        }}
      ></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  leftItems: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  squard: {
    backgroundColor: "#55bcf6",
    width: 24,
    height: 24,
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    width: 12,
    height: 12,
    borderColor: "red",
    borderWidth: 2,
    borderRadius: 5,
    // backgroundColor: "black",
  },
  text: {
    maxWidth: "80%",
  },
  isDone: {
    backgroundColor: "black",
    width: 12,
    height: 12,
    borderRadius: 20,
  },
});
