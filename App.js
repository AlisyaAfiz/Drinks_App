import React from 'react';
import {View, Text, SectionList, StyleSheet, TouchableOpacity, StatusBar, Image, Button} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const datasource = [
  {data:[
      {key: 'Sprite', image: require('./img/sprite.png')},
      {key: 'Pepsi', image: require('./img/pepsi.jpg')}
    ],
    type: "Carbonated", bgColor: '#fff9ab', icon: 'bottle-soda-classic'},
  {data:[
      {key: 'lemon tea', image: require('./img/lemon-tea.jpg')},
      {key: 'Green tea', image: require('./img/green-tea.jpg')}
    ],
    type: "Tea", bgColor: '#ffb293', icon: 'tea'},
  {data:[
      {key: 'Latte', image: require('./img/latte.jpg')},
      {key: 'Mocha', image: require('./img/mocha.jpg')}
    ],
    type: "Coffee", bgColor: '#d69f9f', icon: 'coffee-maker'}
];

const styles = StyleSheet.create({
  opacityStyle: {
    borderWidth: 2,
    padding: 20,
    flexDirection: 'row',
      borderColor: '#485945'
  },
  textStyle: {
    fontSize: 15,
    padding: 40,
    textAlignVertical: 'center',
    fontWeight: 'bold',
    flex: 1
  },
  headerText: {
    fontSize: 25,
    margin: 10,
    fontWeight: 'bold',
      color: '#485945'
  }
});

const renderItem = ({item}) => {
  return (
      <TouchableOpacity style={styles.opacityStyle}>
        <Text style={styles.textStyle}>{item.key}</Text>
        <Image source={item.image} style={{width: 200, height: 200}}/>
      </TouchableOpacity>
  );
};

const App = () => {
  return (
      <View style={{backgroundColor: '#f2fcf0', marginBottom: 520}}>
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 60}}>
              <Icon name='coffee' size={40} color='#657d61'/>
              <Text style={{textAlign: 'center', padding: 20, textDecorationLine: 'underline', fontStyle: 'italic', fontWeight: 'bold', fontSize: 42, color: '#657d61'}}>Drinks Menu</Text>
              <Icon name='coffee' size={40} color='#657d61'/>
          </View>
          <View style={{margin: 20}}>
              <View style={{width: 360, height: 60, alignSelf: 'center'}}>
                  <Button title="Add to Menu" color="#7f9c7b"/>
              </View>
        <View style={{borderWidth: 1, backgroundColor: '#e2ecd2', borderColor: '#657d61'}}>
          <StatusBar hidden={true}/>
          <SectionList sections={datasource} renderItem={renderItem}
                       renderSectionHeader={({section:{type, bgColor, icon}})=>(
                           <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderWidth: 1, backgroundColor: bgColor}}>
                             <Icon name={icon} size={25} color='#485945'/>
                             <Text style={styles.headerText}>{type}</Text>
                           </View>
                       )}/>
        </View>
      </View>
      </View>
  );
};

export default App;
