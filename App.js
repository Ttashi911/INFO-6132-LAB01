import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, TextInput, Text, FlatList, TouchableOpacity } from 'react-native';
import Task from './Components/Task';
import { styles } from './styles';
import { firestore } from './config/firebase';
import { collection, addDoc, deleteDoc, doc, updateDoc, onSnapshot } from "firebase/firestore";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState('');

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(firestore, 'tasks'), (snapshot) => {
      const fetchedTasks = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setTasks(fetchedTasks);
    });

    return () => unsubscribe();
  }, []);

  const addTask = async () => {
    if (taskTitle.trim().length === 0) return;

    const newTask = {
      title: taskTitle,
      status: 'due'
    };

    try {
      await addDoc(collection(firestore, 'tasks'), newTask);
      setTaskTitle('');
    } catch (error) {
      console.error("Error adding task: ", error);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      await deleteDoc(doc(firestore, 'tasks', taskId));
    } catch (error) {
      console.error("Error deleting task: ", error);
    }
  };

  const toggleTaskStatus = async (taskId, currentStatus) => {
    const newStatus = currentStatus === 'due' ? 'done' : 'due';

    try {
      await updateDoc(doc(firestore, 'tasks', taskId), { status: newStatus });
    } catch (error) {
      console.error("Error updating task status: ", error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter task title"
          value={taskTitle}
          onChangeText={setTaskTitle}
        />
        <TouchableOpacity
          style={[styles.button, taskTitle.trim().length === 0 && styles.disabledButton]}
          onPress={addTask}
          disabled={taskTitle.trim().length === 0}
        >
          <Text style={styles.buttonText}>Add Task</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Task 
            task={item} 
            onToggleStatus={() => toggleTaskStatus(item.id, item.status)} 
            onDelete={() => deleteTask(item.id)} 
          />
        )}
      />
    </SafeAreaView>
  );
};

export default App;
