import { View, Text, StatusBar, Image, FlatList, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import styles from './Style';
import Colors from '../../constants/Colors';
import Images from '../../Assets/Index';

const ChatScreen = ({ navigation, route }) => {
  const item = route.params.item;
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi ", sender: "user" },
    { id: 2, text: "Welcome to IndusTour GoodAfterNoon", sender: "agent" },
    { id: 3, text: "Sure! What service would you like to book?", sender: "agent" },
  ]);
  const [inputText, setInputText] = useState('');

  const sendMessage = () => {
    const trimmedInput = inputText.trim();
    if (trimmedInput === '') {
      return;
    }

    let newMessage;
    if (trimmedInput.toLowerCase() === 'hi') {
      newMessage = {
        id: messages.length + 1,
        text: 'Welcome to IndusTour',
        sender: 'agent',
      };
    } else if (trimmedInput.toLowerCase() === 'bookingslot') {
      newMessage = {
        id: messages.length + 1,
        text: "Click on the continue button to proceed with booking",
        sender: 'agent',
        action: 'navigate', // Adding an action property to handle navigation
        screen: 'BookingScreen' // The screen to navigate to
      };
    } else {
      newMessage = {
        id: messages.length + 1,
        text: trimmedInput,
        sender: 'user',
      };
    }

    setMessages([...messages, newMessage]);
    setInputText('');
  };

  const handlePressMessage = (item) => {
    if (item.action && item.screen) {
      navigation.navigate(item.screen);
    }
  };

  return (
    <View style={styles.rootContainer}>
      <StatusBar backgroundColor={Colors.primary500} />
      <View style={styles.headerComp}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={Images.ic_back} style={styles.ic_back} />
        </TouchableOpacity>
        <Image source={{ uri: item.image }} style={styles.chat_ic} />
        <View style={styles.chatname}>
          <Text style={{ fontSize: 16, fontWeight: '600', color: '#FFFFFF' }}>{item.title}</Text>
          <Text style={{ fontSize: 12, color: '#FFFFFF' }}>Industrial Equipment Supplier</Text>
        </View>
        <Image source={Images.ic_more} style={styles.ic_more} />
      </View>

      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePressMessage(item)} disabled={!item.action}>
            <View style={{ alignSelf: item.sender === 'user' ? 'flex-end' : 'flex-start', margin: 5 }}>
              <View
                style={item.sender === 'user' ? styles.messageBubbleUser : styles.messageBubbleAgent}
              >
                <Text>{item.text}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />

      <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, marginVertical: 10 }}>
        <TextInput
          style={{ flex: 1, borderWidth: 1, borderColor: '#CCCCCC', borderRadius: 20, paddingHorizontal: 10, backgroundColor: 'white' }}
          placeholder="Type a message..."
          value={inputText}
          onChangeText={setInputText}
        />
        <TouchableOpacity
          style={{ marginLeft: 10, backgroundColor: '#007AFF', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 20 }}
          onPress={sendMessage}
        >
          <Text style={{ color: '#FFFFFF' }}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatScreen;
