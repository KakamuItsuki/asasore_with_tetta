import { useState } from 'react';
import {ImageBackground, SafeAreaView,
  StyleSheet,
  View,
  TouchableHighlight, } from 'react-native';
import { Button, Text, Image, Header, ThemeProvider } from 'react-native-elements';
//import { color } from 'react-native-elements/dist/helpers';
import { AdMobBanner, AdMobInterstitial } from 'expo-ads-admob';
import DropDownPicker from 'react-native-dropdown-picker';

export default function SelectNumber(props) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: '1人', value: '1'},
    {label: '2人', value: '2'},
    {label: '3人', value: '3'},
    {label: '4人', value: '4'},
    {label: '5人', value: '5'},
    {label: '6人', value: '6'},
    {label: '7人', value: '7'},
    {label: '8人', value: '8'}
  ]);

  return (
    <View style={{flex: 1}}>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder={"人数を選択してください。"}
      />
      <View style={{flex: 2, justifyContent: "center",}}>
                  <Button
                    title="次へ"
                    
                    onPress={() => {
                      
                      props.navigation.navigate('InputName', {value});
                    }}
                  />
      </View>
    </View>
  );
}