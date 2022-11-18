import { View, Text,Touchable,TextInput } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function InputsField({label, icon, inputType, keyboardType,fieldButtonLabel,fieldButtonFunction, value, onChangeText}) {
  return (
    <View>
      <View style={styles.inputView}>
      <MaterialCommunityIcons name="lock" size={20} />
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#333"
          value={password}
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
    </View>
  )
}