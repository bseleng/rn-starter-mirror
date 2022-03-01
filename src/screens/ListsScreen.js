import React from 'react';
import {View, Text, StyleSheet, FlatList} from  'react-native'

const ListsScreen = () => {
  const  makeFriends = (structure, number) => {
    let tempFriends = [];
    do {
      tempFriends.push({...structure, name: structure.name+(tempFriends.length+1)})
    } while (tempFriends.length < number)

    return tempFriends
  }

  const friends = makeFriends({name: 'Friend #', newFriend: true}, 355)
  return(
    <View style={styles.wrap}>
      <Text style={styles.title}> Lists Screen</Text>
      <FlatList
        keyExtractor={(friend, i) => i+friend.name}
        data={friends}
        renderItem={({item}) => <Text> {item.name} </Text>}
      />
    </View>
  )
}

const styles =StyleSheet.create({
  title: {
    fontSize: 40,
  },
  wrap: {
    paddingVertical: 5
  }
})

export default ListsScreen