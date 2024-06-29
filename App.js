import React, { useState } from 'react';
import { SafeAreaView, View, TextInput, Text, FlatList, TouchableOpacity } from 'react-native';
import Task from './Components/Task';
import { styles } from './styles';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState('');

  const addTask = () => {
    if (taskTitle.trim().length === 0) return;

    const newTask = {
      id: Date.now().toString(),
      title: taskTitle,
      status: 'due'
    };
    setTasks([...tasks, newTask]);
    setTaskTitle('');
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const toggleTaskStatus = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, status: task.status === 'due' ? 'done' : 'due' } : task
    ));
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
            onToggleStatus={toggleTaskStatus} 
            onDelete={deleteTask} 
          />
        )}
      />
    </SafeAreaView>
  );
};

export default App;
