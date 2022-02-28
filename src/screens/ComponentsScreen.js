import React, {useState} from 'react';
import {Button, Pressable, StyleSheet, Text, TextInput, View} from 'react-native';

const ComponentsScreen = () => {
  const [userName, setUserName] = useState('');
  const [isEditable, setIsEditable] = useState(true);
  const onChange = ({nativeEvent: {eventCount, target, text}}) => {
    setUserName(text)
  }
  const toggleEditable = () => {
    setIsEditable(!isEditable)
  }

  return (
    <View style={styles.wrap}>
      <Text style={styles.title}>Getting started with React Native</Text>
      {isEditable && (
        <View style={styles.inputWithButton}>
          <TextInput
            type="text"
            style={styles.input}
            placeholder="Enter your name"
            value={userName}
            onChange={onChange}
          />
          <Button
            onPress={toggleEditable}
            title="OK"
            style={styles.button}
          />
        </View>


      )}
      <Pressable onPress={toggleEditable}>
        <Text style={styles.text}>My name is {userName}</Text>
      </Pressable>

    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    marginHorizontal: 10,
    flex: 1,
  },
  title: {
    fontSize: 45,
  },
  text: {
    fontSize: 20,
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'solid',
    padding: 10,
    flex: 2,
  },
  button: {
    flex: 1,
    padding: 3,

  },
  inputWithButton: {
    flexDirection: 'row',
  }
});

export default ComponentsScreen;