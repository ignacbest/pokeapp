import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  input: {
    fontSize: 15,
    paddingLeft: 0,
    borderBottomColor: 'primary.500',
  },
  errorText: {
    color: 'red.500',
  },
  invalid: {
    borderColor: 'red.500'
  },
});

export default styles;