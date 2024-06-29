import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  inputContainer: {
    flexDirection: 'column',
    alignItems: 'stretch',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    alignSelf: 'center',
    minWidth: 100,
  },
  disabledButton: {
    backgroundColor: '#b0c4de',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    flex: 1,
  },
  taskButton: {
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
    minWidth: 60,
    marginHorizontal: 5,
  },
  taskButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  dueButton: {
    backgroundColor: 'red',
  },
  doneButton: {
    backgroundColor: 'green',
  },
  deleteButton: {
    backgroundColor: 'gray',
  },
});
