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

export default function InputName(props) {
    let number = props.navigation.state.params.value;
    // alert(number);
    // const [name, setName] = useState(null);
    const [inputMsg, setInputMsg] = useState([]);
    let textInput = Array(number); // returnの外側で定義
    var Views = [];
    for (let i = 0; i < number; i++) {
        Views.push(
            <View>
            <TextInput
                ref={(input) => textInput[i] = input} // 上で定義したtextInputに代入
                style={styles.inputs}
                placeholder='ここに文字を入力してください'
                // value={inputMsg[i]}
                onChangeText={(text) => {
                inputMsg[i] = text
                setInputMsg(inputMsg);
                }}
            />
        </View>
        );
    }
    return(
        <View style={{flex: 1}}>

            {/* <View>
            {inputMsgs.map((inputMsg, i) => (
                <View>
                <TextInput
                    ref={(input) => textInput[i] = input} // 上で定義したtextInputに代入
                    style={styles.inputs}
                    placeholder='ここに文字を入力してください'
                    value={inputMsg}
                    onChangeText={(text) => {
                    setInputMsg(text);
                    }}
                />
                </View>
            ))}
            
            </View> */}
            {Views}
            <View style={{flex: 2, justifyContent: "center",}}>
                    <Button
                    title="次へ"
                    
                    onPress={() => {
                        
                        props.navigation.navigate('Theme', {inputMsg});
                    }}
                    />
            </View>
        </View>
    )
    
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    inputs: {
      margin: 10,
      padding: 5,
      borderWidth: 1,
    },
});

