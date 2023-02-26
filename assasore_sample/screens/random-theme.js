//import React, { Component, useEffect } from 'react';
import { useState } from 'react';
import {ImageBackground, SafeAreaView,
  StyleSheet,
  View,
  TouchableHighlight, } from 'react-native';
import { Button, Text, Image, Header, ThemeProvider } from 'react-native-elements';
//import { color } from 'react-native-elements/dist/helpers';
import { AdMobBanner, AdMobInterstitial } from 'expo-ads-admob';
//import questions from '../theme';
//import characters from '../theme.js';
import * as Speech from 'expo-speech';
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';

const theme = {
    Button: {
        containerStyle: {
        margin: '6%',
    },
        titleStyle: {
        fontSize: 30,
    },
        raised: true,
    },
        colors: {
        primary: '#d2b48c',
    },
};

export const InterstitialAds = async() => {
  
  // AdMobInterstitial.setAdUnitID("ca-app-pub-3488366423563341/9380212758");
  // AdMobInterstitial.setTestDevices([AdMobInterstitial.simulatorId]);
  // AdMobInterstitial.requestAd().then(() => AdMobInterstitial.showAd());

  if(__DEV__){
    AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/4411468910'); // テスト広告
  }else{
    if(Platform.OS === 'ios'){
      AdMobInterstitial.setAdUnitID('ca-app-pub-3488366423563341/8693284215'); //iOS
    }else{
      AdMobInterstitial.setAdUnitID('広告ユニットID'); //android
    }
  }
  await AdMobInterstitial.requestAdAsync();
  await AdMobInterstitial.showAdAsync();
}

let charRandom = '○';
let questionsRandom = '△';
//const test = ['a','b'];
//let aa = characters[0];
const characters = 
['あ','い','う','え','お','か','き','く','け','こ','さ','し','す',
'せ','そ','た','ち','つ','て','と','な','に','ぬ','ね','の','は',
'ひ','ふ','へ','ほ','ま','み','む','め','も','や','ゆ','よ','ら',
'り','る','れ','ろ','わ'];
const questions = 
['秋','あざとい台詞','あたたかいもの','アニメのキャラクター','甘いもの','行きたい場所','偉人','今流行りのもの','言われて嫌な台詞','言われてみたい言葉','インスタ映えするもの','UberEatsで頼みたい物',
'生まれ変わったらなりたいもの','嬉しい出来事','エモいこと','おいしい食べ物','おうち時間の過ごし方','大きいもの','おじいちゃんが言いそうな台詞','おしゃれなもの','おばあちゃんが持っていそうな物',
'おふくろの味','覚えにくいもの','よく使うカタカナ英語','歌詞によくあるフレーズ','かっこいい男の子の名前','学校にあるもの','カップルが別れる原因','神様にお願いすること','かわいい女の子の名前','かわいいもの','気まずいこと','気まずい時に使う台詞','キラキラしているもの',
'結婚相手に求める条件','喧嘩になったときに使う言葉','恋人への不満','告白する時の台詞','心から信頼できるもの','こわいもの','壊れやすいもの','コンビニで買える物','コンプレックス','差し入れで嬉しい物','サラリーマンが持っているもの','四角いもの',
'趣味','小学生のなりたい職業','昭和','女子が持っているもの','女子高生が言いそうな台詞','人生で一度はやってみたいこと','心配なこと','好きなブランド',
'素敵なプレゼント','ストレス発散方法','生活必需品','先生が言いそうな台詞','尊敬する人物','大学生が集まる場所','大学生が好きなもの',
'楽しみなこと','使いきれないもの','月１で行くところ','手が届かないもの','テストに出る単語','電気屋に売っている物','特技','ドラえもんの道具にありそうな物','長いもの','夏','人気アニメ','人気のある動物',
'人間に欠けてはいけないもの','値段が高いもの','墓場まで持って行くこと','はやいもの','春','暇なときにやりたいこと','夫婦に欠かせないこと','冬','ふわふわなもの',
'平成','毎日すること','毎日使うもの','みんなが好きなもの','無人島に持って行きたいもの','難しいこと','目に入れても痛くないもの','面倒臭いこと','もどかしいこと','破ってはいけない約束','やりたくないこと','有名人','有名な地名','よく失くす物','私と〇〇どっちが大事なの?!'];

function arrayShuffle(array) {
  for(var i = (array.length - 1); 0 < i; i--){

    // 0〜(i+1)の範囲で値を取得
    var r = Math.floor(Math.random() * (i + 1));

    // 要素の並び替えを実行
    var tmp = array[i];
    array[i] = array[r];
    array[r] = tmp;
  }
  return array;
}

arrayShuffle(questions);

export default function RandomTheme(props) {
    
    const [charState,setCharState] = useState('○'); 
    const [questionState,setQuestionState] = useState('○△□'); 
    const [isTimerStart, setIsTimerStart] = useState(false);
    const [timerDuration, setTimerDuration] = useState(30000);
    const [resetTimer, setResetTimer] = useState(false);
    const [clickCount, setClickCount] = useState(1);
    const [arrayKey, setArrayKey] = useState(0);
    // oconst [five, setFive] = useState(false);
    // cnst [zero, setZero] = useState(false);

    const RandomClick = () => {
        //console.log(characters[0]);
        let charRandomNum = Math.floor(Math.random() * characters.length);
        //console.log(characters[charRandomNum]);
        //let questionsRandomNum = Math.floor(Math.random() * questions.length);
        
        let questionsRandomNum = arrayKey;
        if(arrayKey===questions.length-1){
          setArrayKey(0);
        }else{
          setArrayKey(arrayKey+1);
        }

        console.log(questions.length);
        charRandom = characters[charRandomNum];
        questionsRandom = questions[questionsRandomNum];
        console.log(charRandom);
        console.log(questionsRandom);
        setCharState(charRandom);
        setQuestionState(questionsRandom);

        setClickCount(clickCount+1);
        if (clickCount%7 === 0) {
          //alert('5time');
          InterstitialAds ();
        }
        var readText = charRandom + 'から始まる、' + questionsRandom + 'といえば？';
        Speech.speak(readText,
          {
              "language": "ja",
              // 低い声
              "pitch": 1,
              // 高い声
              // "pitch": 1,
          }
        );
        console.log('ok');
        setIsTimerStart(false);
        setResetTimer(true);
    }

    

    
    

    return (
        <ThemeProvider theme={theme}>
          <View style={{alignItems: 'center', backgroundColor: '#FFFAFA', height: '100%', padding:'0%'}}>
            <View style={{flex: 1, justifyContent: 'center', fontSize:50, paddingTop:'10%'}}>
              <Text style={{fontSize:20}}>「{charState}」から始まる</Text>
            </View>
            <View style={{flex:1, justifyContent: 'center',}}>
              <Text style={{fontSize:20}}>
                {questionState}と言えば？
              </Text>
            </View>
            
            <View style={{ flex:2, paddingTop:'10%'}}>
              <Button
                title='CLICK ME'
                onPress={() => RandomClick()}
                //containerStyle={{width: '50%', alignSelf: 'flex-end'}}
              />
            </View>
            <SafeAreaView style={{ flex:2 }}>
              <View >
                
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                  <Timer
                    totalDuration={timerDuration}
                    secs
                    //Time Duration
                    start={isTimerStart}
                    //To start
                    reset={resetTimer}
                    //To reset
                    options={options}
                    //options for the styling
                    
                    handleFinish={() => {

                      setIsTimerStart(false);
                      setResetTimer(true);

                      alert('時間です');
                      var alertText = '時間です。'
                      Speech.speak(alertText,
                        {
                            "language": "ja",
                            // 低い声
                            "pitch": 1,
                            // 高い声
                            // "pitch": 1,
                        }
                      );
                      var alertText = '準備はいいですか？'
                      Speech.speak(alertText,
                        {
                            "language": "ja",
                            // 低い声
                            "pitch": 1,
                            // 高い声
                            // "pitch": 1,
                        }
                      );
                      var alertText = '３,'
                      Speech.speak(alertText,
                        {
                            "language": "ja",
                            // 低い声
                            "pitch": 1,
                            // 高い声
                            // "pitch": 1,
                        }
                      );
                      var alertText = '2,'
                      Speech.speak(alertText,
                        {
                            "language": "ja",
                            // 低い声
                            "pitch": 1,
                            // 高い声
                            // "pitch": 1,
                        }
                      );
                      var alertText = '1,'
                      Speech.speak(alertText,
                        {
                            "language": "ja",
                            // 低い声
                            "pitch": 1,
                            // 高い声
                            // "pitch": 1,
                        }
                      );
                      var alertText = 'どんっ!'
                      Speech.speak(alertText,
                        {
                            "language": "ja",
                            // 低い声
                            "pitch": 1,
                            // 高い声
                            // "pitch": 1,
                        }
                      );
                    }}
                    //can call a function On finish of the time
                    getTime={(time) => {
                      console.log(time);
                      // if (time == '00:00:05' && five === false) {
                      //   var readText = '5秒前です';
                      //     Speech.speak(readText,
                      //       {
                      //           "language": "ja",
                      //           // 低い声
                      //           "pitch": 1,
                      //           // 高い声
                      //           // "pitch": 1,
                      //       }
                      //     );
                      //   setFive(true);
                      // }
                      // if (time == '00:00:01' && zero === false) {
                      //   setIsTimerStart(false);
                      //   setResetTimer(true);
                      //   setZero(true);
                      // }
                    }}
                  />
                  <TouchableHighlight
                    onPress={() => {
                      setIsTimerStart(!isTimerStart);
                      setResetTimer(false);
                    }}>
                    <Text style={styles.buttonText}>
                      {!isTimerStart ? 'START' : 'STOP'}
                    </Text>
                  </TouchableHighlight>
                  {/* <TouchableHighlight
                    onPress={() => {
                      setIsTimerStart(false);
                      setResetTimer(true);
                    }}>
                    <Text style={styles.buttonText}>RESET</Text>
                  </TouchableHighlight> */}
                </View>
              </View>
            </SafeAreaView>
          
          
            <View style={{ paddingBottom: '10%' }}>
              <AdMobBanner
                adUnitID={
                  __DEV__ ? "ca-app-pub-3940256099942544/6300978111" // テスト広告
                  : Platform.select({
                    ios: "ca-app-pub-3488366423563341/1096929442" , // iOS
                  })
                }
                onDidFailToReceiveAdWithError={this.bannerError} 
              />
            </View>
          </View>
        </ThemeProvider>
        )
}

const styles = StyleSheet.create({
  
  
  sectionStyle: {
    flex: 1,
    marginTop: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    marginTop: 10,
  },
});

const options = {
  container: {
    backgroundColor: '#d2b48c',
    padding: 5,
    borderRadius: 5,
    width: 200,
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    color: '#FFF',
    marginLeft: 7,
  },
};