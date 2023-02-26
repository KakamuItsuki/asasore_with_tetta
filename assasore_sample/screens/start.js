import { View, ImageBackground, StyleSheet, SafeAreaView,Linking } from 'react-native';
import { Button, Text, Image, Header, ThemeProvider } from 'react-native-elements';

const theme = {
    Button: {
      containerStyle: {
        margin: '6%',
      },
      titleStyle: {
        fontSize: 20
      },
      raised: true,
    },
    colors: {
      primary: '#d2b48c',
    },
};
  
  export default function Start(props) {
  
    
    
  
    return (
      <ThemeProvider theme={theme}>
        
        <View style={styles.container}>
            
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <View style={{flex: 1, justifyContent: "center",marginTop:'20%'}}>
                <Image source={require('../assets/start2.png')}
                  style={{
                    width: 190,
                    height: 190,
                    justifyContent: 'center',
                  }} />
              </View>
              <View style={{flex: 2, justifyContent: "center",}}>
                <Button
                  title="遊び方"
                  
                  onPress={() => {
                    
                    props.navigation.navigate('Rule');
                  }}
                />
                <Button
                  title="お題を提供する"
                  
                  onPress={() => {
                    
                    Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLScuvF7qp8jpuog6HhMdJ_KhZQYeoPbKiU3ZRVlTsHCjN26y4Q/viewform?usp=sf_link');
                    //Linking.openURL(url).catch(err => console.error('An error occurred', err));
                  }}
                />
                <Button
                  title="ゲームを始める"
                  onPress={() => {
                    
                    props.navigation.navigate('SelectNumber');
                  }}
                />
                
              </View>
            </View>
            </View>
        
      </ThemeProvider>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      // flexDirection: 'row',
      backgroundColor: '#FFFAFA',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });