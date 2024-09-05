import { View, Text, FlatList, StyleSheet, TouchableOpacity, Button, Dimensions, Pressable   } from 'react-native';

export default function App() {
  const ScreenHeight = Dimensions.get("window").height;
  const ScreenWidth = Dimensions.get("window").width;

  const menuItems = [
    {key: 'Devin'},
    {key: 'Dan'},
    {key: 'Dominic'},
    {key: 'Jackson'},
    {key: 'James'},
    {key: 'Joel'},
    {key: 'John'},
    {key: 'Jillian'},
    {key: 'Jimmy'},
    {key: 'Julie'},
  ];

  const listStyle = StyleSheet.create({
   justifyContent: 'center',
   marginTop: 50,
  });

  const menuItemStyle = StyleSheet.create({
    fontSize: 20,
    paddingTop: 5,
    paddingBottom: 5,
    textAlign: 'center'
  });

  const bottomBar = StyleSheet.create({
    position: 'absolute',
    alignItems: 'flex-end',
    bottom: 0,
    width: '100%',
    padding: 50,
  });

  const mainView = StyleSheet.create({
    height: ScreenHeight
  })

  const addButtonStyle = StyleSheet.create({
    height: 50,
    width: 50,
  });

  const styles = StyleSheet.create({
    button: {
      width: 50,
      height: 50,
      backgroundColor: 'blue',
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold',
    },
  });

  return (
    <View style={mainView}>
      <View style={listStyle}>
        <FlatList 
          data={menuItems}
          renderItem={({item}) => <Text style={menuItemStyle}>{item.key}</Text>}
        ></FlatList>
      </View>
      <View style={bottomBar}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
