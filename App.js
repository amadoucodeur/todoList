import { StatusBar } from "expo-status-bar";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Keyboard,
} from "react-native";
import Tasks from "./components/Tasks";
import { useState } from "react";

const datas = [
  {
    text: "mimi",
    isDone: true,
  },
  {
    text: "mimi",
    isDone: false,
  },
  {
    text: "mimi",
    isDone: true,
  },
  {
    text: "Manger",
    isDone: true,
  },
  {
    text: "Dormir",
    isDone: false,
  },
  {
    text: "Courrir",
    isDone: false,
  },
  {
    text: "Omega",
    isDone: false,
  },
];

export default function App() {
  const [tasks, setTasks] = useState("");
  const [tasksItems, setTasksItems] = useState(datas);
  const handleAddTasks = () => {
    if (tasks) {
      const newTask = { text: tasks, isDone: false };

      setTasksItems([...tasksItems, newTask]);
      setTasks("");
      // Keyboard.dismiss();
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.tasksWrapper}>
        <Text style={styles.title}>Les Tâches du jour</Text>
        <View style={styles.items}>
          {tasksItems.map((el, ind) => (
            <Tasks
              data={el}
              key={ind}
              ind={ind}
              tasks={[tasksItems, setTasksItems]}
            />
          ))}
        </View>
      </ScrollView>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "heigth"}
        style={styles.inputWraper}
      >
        <TextInput
          style={styles.input}
          placeholder="Entrez une tâche..."
          value={tasks}
          onChangeText={(e) => {
            setTasks(e);
          }}
        />
        <TouchableOpacity
          onPress={() => {
            handleAddTasks();
          }}
        >
          <View style={styles.addWriper}>
            <Text style={styles.add}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#e8eaed",
  },
  tasksWrapper: {
    marginTop: 80,
    paddingHorizontal: 20,
    // maxHeight: "80%"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
  inputWraper: {
    position: "relative",
    bottom: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingHorizontal: 20,
  },
  input: {
    padding: 15,
    // paddingHorizontal: 15,
    backgroundColor: "#fff",
    width: 250,
    borderRadius: 60,
    borderColor: "#c0c0c0",
    borderWidth: 1,
  },
  addWriper: {
    height: 60,
    width: 60,
    backgroundColor: "#fff",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#c0c0c0",
    borderWidth: 1,
  },
  add: {
    fontWeight: "bold",
  },
});
