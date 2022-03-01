import React, {useState} from 'react';
import {Button, Pressable, StyleSheet, Text, TextInput, View} from 'react-native';

const ComponentsScreen = () => {
  const [userName, setUserName] = useState('');
  const [isEditable, setIsEditable] = useState(true);
  const onChange = ({nativeEvent: {text}}) => {
    setUserName(text)
  }
  const toggleEditable = () => {
    if(userName) {
      setIsEditable(!isEditable)
    }
  }

  return (
    <View style={styles.wrap}>
      <Text style={styles.title}>Getting started with React Native</Text>
      <View style={styles.textWrap}>

        <Text style={styles.text}>My name is </Text>
        {isEditable ? (
          <>
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
              color={'#67b047'}
            />
            <Button
              onPress={() => setUserName('')}
              title="  X  "
              color={'#ce0000'}
            />
          </>
        ) : (
          <Pressable
            onLongPress={toggleEditable}
          >
            <Text style={styles.text}>{userName}</Text>
          </Pressable>

        )}

      </View>

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
    marginLeft: 5,
    borderColor: '#afadad',
    borderStyle: 'solid',
    borderWidth: .5,
    padding: 3,
  },
  textWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  }
});

export default ComponentsScreen;