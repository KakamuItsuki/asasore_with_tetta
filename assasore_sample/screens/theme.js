import { useState } from 'react';
import {ImageBackground, SafeAreaView,
  StyleSheet,
  View,
  TouchableHighlight,
  Text, TextInput
 } from 'react-native';
import { Button, Image, Header, ThemeProvider } from 'react-native-elements';
//import { color } from 'react-native-elements/dist/helpers';
import { AdMobBanner, AdMobInterstitial } from 'expo-ads-admob';

export default function Theme(props) {
    let name = props.navigation.state.params.inputMsg;
    alert(name);
    return(
        <View style={{flex: 2, justifyContent: "center",}}>
                    <Button
                    title="次へ"
                    
                    onPress={() => {
                        
                        props.navigation.navigate('Theme', {name});
                    }}
                    />
         </View>
    )
}
