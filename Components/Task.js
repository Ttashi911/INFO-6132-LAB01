import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles';

const Task = ({ task, onToggleStatus, onDelete }) => {
  const statusButtonStyle = task.status === 'done' ? styles.doneButton : styles.dueButton;

  return (
    <View style={styles.task}>
      <Text style={styles.title}>{task.title}</Text>
      <TouchableOpacity
        style={[styles.taskButton, statusButtonStyle]}
        onPress={() => onToggleStatus(task.id)}
      >
        <Text style={styles.taskButtonText}>
          {task.status === 'done' ? 'Done' : 'Due'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.taskButton, styles.deleteButton]}
        onPress={() => onDelete(task.id)}
      >
        <Text style={styles.taskButtonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Task;
