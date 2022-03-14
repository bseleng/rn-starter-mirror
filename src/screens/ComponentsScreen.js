import React, {useState} from 'react';
import {Button, Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import * as Haptics from 'expo-haptics';

const ComponentsScreen = () => {
  const [userName, setUserName] = useState('');
  const [errorMessage, setErrorMessage] = useState('')
  const [isEditable, setIsEditable] = useState(true);
  const onChange = ({nativeEvent: {text}}) => {
    if(userName !== text) {
      setErrorMessage('')
    }
    setUserName(text)
  }
  const validateUserName = (userName) => {
    switch (true) {
      case userName.length === 0:
        return 'cannot be empty'
      case userName.length < 3:
        return 'too short (min 3 chars)'
      case userName.length > 15:
        return 'too long (max 15 chars)'
      default:
        return '';
    }
  }
  const toggleEditable = () => {
    if(!validateUserName(userName)) {
      return Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
        .then(() => setIsEditable(!isEditable))
    } else {
      setErrorMessage(validateUserName(userName))
    }
    return  Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error)
  }

  const clearInput = () => {
    return Haptics.notificationAsync(Haptics.NotificationFeedbackType.Light)
      .then(()=> setUserName(''))
  }

  return (
    <View style={styles.wrap}>
      <Text style={styles.title}>Long press the name to reenable editing</Text>
      <View style={styles.textWrap}>

        <Text style={styles.text}>My name is </Text>
        {isEditable ? (
          <View style={styles.editableWrap}>
            <View style={styles.editableBlock}>
            <TextInput
              type="text"
              style={[styles.input, errorMessage ? styles.errorInput : '']}
              placeholder="Enter your name"
              value={userName}
              onChange={onChange}
              autoCapitalize="words"
              autoCorrect={false}
            />
            <Button
              onPress={toggleEditable}
              title="OK"
              color={'#67b047'}
            />
            <Button
              onPress={clearInput}
              title="  X  "
              color={'#ce0000'}
            />

            </View>
            <View>
              <Text style={styles.errorMessage}>
                {errorMessage}
              </Text>
            </View>

          </View>
        ) : (
          <Pressable
            onLongPress={toggleEditable}
            hitSlop={50}
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
    alignSelf: "flex-start",
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
  },
  errorInput: {
    borderColor: 'rgba(225,0,0,0.93)',
  },
  errorMessage: {
    fontSize: 15,
    color: '#c90f0f'
  },
  editableBlock: {
    flexDirection: 'row'
  },
  editableWrap: {
    flexDirection: 'column',
    alignItems: 'center',
  }
});

export default ComponentsScreen;