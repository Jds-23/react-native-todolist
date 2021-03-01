import React, { useState } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Platform, Keyboard } from 'react-native'
import Task from './components/Task'

export default function App() {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])


  const handleAddTask = () => {
    Keyboard.dismiss();
    setTasks([...tasks, task])
    setTask('')
  }

  const completeTask = (index) => {
    let tasksCopy = [...tasks]
    tasksCopy.splice(index, 1)
    setTasks([...tasksCopy])
  }
  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's Task</Text>
        <View style={styles.items}>
          {
            tasks.map((item, index) => {
              return (
              <TouchableOpacity key={index} onPress={()=>completeTask(index)}>
              <Task key={index} text={item} />
              </TouchableOpacity>
              )
            })
          }
        </View>
      </View>

      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={"Write a task"} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={handleAddTask}>
          <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8eaed',
  }, taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30
  }, writeTaskWrapper: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 7,
    width: 260,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#c0c0c0',
    borderWidth: 1
  },
  addWrapper: {
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 60,
    justifyContent: "center",
    alignItems: 'center',
    borderColor: '#c0c0c0',
    borderWidth: 1
  },
  addText: {

  },
});
