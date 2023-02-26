//import React, { Component, useEffect } from 'react';
import { View, ImageBackground, FlatList } from 'react-native';
import { Button, Text, Image, Header, ThemeProvider } from 'react-native-elements';


const theme = {
    Button: {
        containerStyle: {
        margin: '6%',
    },
        titleStyle: {
        fontSize: 40
    },
        raised: true,
    },
        colors: {
        primary: 'brown',
    },
};

    //let questionRandom = Math.floor(Math.random() * questions.length);
    //console.log(questionRandom);

export default function Rule(props) {
    // const random = () => {
    //     questionRandom = Math.floor(Math.random() * questions.length);
    // };

    return (
    <ThemeProvider theme={theme}>
        <View style={{flex: 5, justifyContent: 'center', backgroundColor: '#FFFAFA', padding:'3%'}} >
          <View style={{  backgroundColor: '#FFFAFA', height: '100%', padding:'5%',}}>
            <View style={{flex: 3, justifyContent: 'center',}}>
              <Text style={{lineHeight:25}}>例：「あ」から始まる冷たいものと言えば？</Text>
              <Text style={{lineHeight:25}}>　　→答え「アイスクリーム」</Text>
            </View>
            {/* <View style={{flex:2, justifyContent: 'center',backgroundColor:'#FAF0E6',marginBottom:'30%', borderRadius:'10%',padding:'5%'}}>
            <Text style={{lineHeight:35}}>
                遊び方
              </Text>
              <Text style={{lineHeight:25}}>
                　３人以上でゲームをし、多数派の答えが正解
              </Text>
              <Text style={{lineHeight:25}}>
                　答えが被らなかった場合は一番しっくりくるものをみんなで選んで正解とする
              </Text>
              <Text style={{lineHeight:25}}>
                　LINEでグループを作り、答えを同時に送信するのがおすすめ
              </Text>
              <Text style={{lineHeight:25}}>
                　一番に思いついた人が思いついた時点からカウントし30秒経てば全員強制的に回答
              </Text>
              <Text style={{lineHeight:25}}>
                濁点・半濁点はあり（例：「は」→「ば」「ぱ」もOK）
              </Text>
            </View>
             */}
            <View style={{flex:9, alignItems:'center', justifyContent:'center',backgroundColor:'#FAF0E6',marginBottom:'10%', borderRadius:'10%',padding:'5%'}}>
              
                <Text style={{lineHeight:35}}>
                  遊び方
                </Text>
                <FlatList
                  data={[
                    {key: '３人以上でゲームをし、多数派の答えが正解'},
                    {key: '答えが被らなかった場合は一番しっくりくるものをみんなで選んで正解とする'},
                    {key: '一番に思いついた人が思いついた時点でタイマーのSTARTボタンを押しアラートが鳴れば全員強制的に回答'},
                    {key: '濁点・半濁点はあり（例：「は」→「ば」「ぱ」もOK）'},
                    {key: '対面の時は①LINEでグループを作り答えを同時に送信するor②それぞれホワイトボードに答えを書くのがおすすめ'},
                    {key: 'ビデオ通話の時はチャットに答えを同時に送信するのがおすすめ'},
                    {key: '(このアプリが制作者の推しに届きました(歓喜)🎉実践例として是非ラジオAuDeeの「No BUDDiiS」第42回配信をお聞きになってください♪)'},
                  ]}
                  renderItem={({item}) => <Text style={{marginTop:8,lineHeight:20}}>{item.key}</Text>}
                />
              
            </View>
          </View>
        </View>
    </ThemeProvider>
    )
}