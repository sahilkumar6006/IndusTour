import { View, Text, StatusBar, Image, FlatList, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import styles from './Style'
import Colors from '../../constants/Colors'
import Images from '../../Assets/Index';


const ChatScreen = ({navigation, route}) => {
  console.log("in the route params", route.params)
  const item= route.params.item
  console.log("in the item", item)
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi ", sender: "user" },
    { id: 2, 
    text: "Welcome to IndusTour GoodAfterNoon", 
    sender: "agent" },
    { id: 3, text: "Sure! What service would you like to book?", sender: "agent" },
    
  ]);
  const [inputText, setInputText] = useState('');

  const sendMessage = () => {
    if (inputText.trim() === '') {
      return;
    }

    if(inputText.trim().toLowerCase() === 'hi') {
      const WelcomeMessage = {
        id: messages.length +1,
        text: 'Welcome to IndusTour',
        sender: 'agent',
      }

      setMessages([...messages, WelcomeMessage]);
    } else {
      const newMessage = { id: messages.length + 1, text: inputText, sender: 'user' };
      setMessages([...messages, newMessage]);
      setInputText('');
    }
   

  };

  return (
    <View style={styles.rootContainer}>
      <StatusBar backgroundColor={Colors.primary500}/>
      <View style={styles.headerComp}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={Images.ic_back}  style={styles.ic_back}/>
        </TouchableOpacity>
        <Image source={{uri: item.image}} style={styles.chat_ic} />
        <View style={styles.chatname}>
          <Text style={{fontSize:16, fontWeight:'600', color:'#FFFFFF'}}>{item.title}</Text>
          <Text  style={{fontSize:12, color:'#FFFFFF'}}>industrial Equipment Supplier</Text>
        </View>
        <Image source={Images.ic_more} style={styles.ic_more}/>
      </View>








      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ alignSelf: item.sender === 'user' ? 'flex-end' : 'flex-start', margin: 5 }}>
            <View
              style={{
                backgroundColor: item.sender === 'user' ? '#DCF8C6' : '#FFFFFF',
                padding: 10,
                borderRadius: 8,
              }}>
              <Text>{item.text}</Text>
            </View>
          </View>
        )}
      />
      <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, marginVertical:10 }}>
        <TextInput
          style={{ flex: 1, borderWidth: 1, borderColor: '#CCCCCC', borderRadius: 20, paddingHorizontal: 10 , backgroundColor:'white' }}
          placeholder="Type a message..."
          value={inputText}
          onChangeText={(text) => setInputText(text)}
        />
        <TouchableOpacity
          style={{ marginLeft: 10, backgroundColor: '#007AFF',paddingVertical:10,  paddingHorizontal: 20, borderRadius: 20 }}
          onPress={sendMessage}>
          <Text style={{ color: '#FFFFFF' }}>Send</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default ChatScreen