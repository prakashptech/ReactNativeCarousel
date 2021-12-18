import axios from 'axios';
import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Modal,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
  AppState,
  Button,
} from 'react-native';
import Loader from '../../constants/Loader';
import Sound from 'react-native-sound';
import Api from '../../constants/Api';
import DeviceInfo from 'react-native-device-info';
import Toast from 'react-native-custom-toast';
class PionoRiyaaz extends React.Component {
  constructor(props) {
    super(props);
    this.scrollViewRef = React.createRef();
    const dimensions = Dimensions.get('window');
    const imageHeight = dimensions.height;
    const imageWidth = dimensions.width;
    this.timer1 =
      this.timer2 =
      this.timer3 =
      this.timer4 =
      this.timer5 =
      this.timer6 =
      this.timer7 =
      this.timer8 =
      this.timer9 =
      this.timer10 =
      null;
    // backgroundColor
    this.state = {
      keyLabelNames2: [
        'c4',
        'd4',
        'e4',
        'f4',
        'g4',
        'a4',
        'b4',
        'c5',
        'd5',
        'e5',
        'f5',
        'g5',
        'a5',
        'b5',
        'c6',
        'd6',
        'e6',
        'f6',
        'g6',
        'a6',
        'b6',
      ],
      keyLabelNames: [
        'Ṣ',
        'Ṛ',
        'G̣',
        'G̣',
        'P̣',
        'Ḍ',
        'Ṇ',
        'S',
        'R',
        'G',
        'M',
        'P',
        'D',
        'N',
        'Ṡ',
        'Ṙ',
        'Ġ',
        'Ṁ',
        'Ṗ',
        'Ḋ',
        'Ṅ',
      ],
      blackKeyLabelNames: [
        'ṛ',
        'g̣',
        'ṃ',
        'p̣',
        'ḍ',
        'r',
        'g',
        'm',
        'd',
        'n',
        'ṙ',
        'ġ',
        'ṁ',
        'ṗ',
        'ḋ',
      ],

      appState: AppState.currentState,
      // key color
      colorc4: 'white',
      colorcs4: 'black',
      colord4: 'white',
      colords4: 'black',
      colore4: 'white',
      colorf4: 'white',
      colorfs4: 'black',
      colorg4: 'white',
      colorgs4: 'black',
      colora4: 'white',
      coloras4: 'black',
      colorb4: 'white',
      colorc5: 'white',
      colorcs5: 'black',
      colord5: 'white',
      colords5: 'black',
      colore5: 'white',
      colorf5: 'white',
      colorfs5: 'black',
      colorg5: 'white',
      colorgs5: 'black',
      colora5: 'white',
      coloras5: 'black',
      colorb5: 'white',
      colorc6: 'white',
      colorcs6: 'black',
      colord6: 'white',
      colords6: 'black',
      colore6: 'white',
      colorf6: 'white',
      colorfs6: 'black',
      colorg6: 'white',
      colorgs6: 'black',
      colora6: 'white',
      coloras6: 'black',
      colorb6: 'white',

      modalVisible: false,
      questionArray: [],
      riyaazArray: [],
      keyRiyaaz: 0,
      keyQuestion: 0,
      i: 0,
      loading: true,
      wrongCount: 0,
      wrongAnswer: 0,
      wrongCountFromBackend: 0,
      playAudioSound: false,
      crashFreeKey: 0,
      riyaazTitle: '',
      lessonTitle: '',
      cid: '',
      questionType: Number,
      buttonArray: [],
      buttonColor: 'black',
      questionAnswers: [],
      correctAnswerLength: 0,
      soundList1: [
        'c4',
        'cs4',
        'd4',
        'ds4',
        'e4',
        'f4',
        'fs4',
        'g4',
        'gs4',
        'a4',
        'as4',
        'b4',
        'c5',
        'cs5',
        'd5',
        'ds5',
        'e5',
        'f5',
        'fs5',
        'g5',
        'gs5',
        'a5',
        'as5',
        'b5',
        'c6',
        'cs6',
        'd6',
        'ds6',
        'e6',
        'f6',
        'fs6',
        'g6',
        'gs6',
        'a6',
        'as6',
        'b6',
      ],
    };
    // this.state={
    //   modalVisible:false
    // }
    // chageQuestion = () => {
    //   this.setState({ i: 1 });
    // };
    // preload sounds
    this.sound = {};
    const soundList = [
      'c4',
      'cs4',
      'd4',
      'ds4',
      'e4',
      'f4',
      'fs4',
      'g4',
      'gs4',
      'a4',
      'as4',
      'b4',
      'c5',
      'cs5',
      'd5',
      'ds5',
      'e5',
      'f5',
      'fs5',
      'g5',
      'gs5',
      'a5',
      'as5',
      'b5',
      'c6',
      'cs6',
      'd6',
      'ds6',
      'e6',
      'f6',
      'fs6',
      'g6',
      'gs6',
      'a6',
      'as6',
      'b6',
    ];

    // key sound for piono instrument (folder name is sound/PionoAudioFiles)
    // if want  to use another instrument  sound then use another audio folder
    var key = [
      require('../sound/PionoAudioFiles/c4.mp3'),
      require('../sound/PionoAudioFiles/cs4.mp3'),
      require('../sound/PionoAudioFiles/d4.mp3'),
      require('../sound/PionoAudioFiles/ds4.mp3'),
      require('../sound/PionoAudioFiles/e4.mp3'),
      require('../sound/PionoAudioFiles/f4.mp3'),
      require('../sound/PionoAudioFiles/fs4.mp3'),
      require('../sound/PionoAudioFiles/g4.mp3'),
      require('../sound/PionoAudioFiles/gs4.mp3'),
      require('../sound/PionoAudioFiles/a4.mp3'),
      require('../sound/PionoAudioFiles/as4.mp3'),
      require('../sound/PionoAudioFiles/b4.mp3'),
      require('../sound/PionoAudioFiles/c5.mp3'),
      require('../sound/PionoAudioFiles/cs5.mp3'),
      require('../sound/PionoAudioFiles/d5.mp3'),
      require('../sound/PionoAudioFiles/ds5.mp3'),
      require('../sound/PionoAudioFiles/e5.mp3'),
      require('../sound/PionoAudioFiles/f5.mp3'),
      require('../sound/PionoAudioFiles/fs5.mp3'),
      require('../sound/PionoAudioFiles/g5.mp3'),
      require('../sound/PionoAudioFiles/gs5.mp3'),
      require('../sound/PionoAudioFiles/a5.mp3'),
      require('../sound/PionoAudioFiles/as5.mp3'),
      require('../sound/PionoAudioFiles/b5.mp3'),
      require('../sound/PionoAudioFiles/c6.mp3'),
      require('../sound/PionoAudioFiles/cs6.mp3'),
      require('../sound/PionoAudioFiles/d6.mp3'),
      require('../sound/PionoAudioFiles/ds6.mp3'),
      require('../sound/PionoAudioFiles/e6.mp3'),
      require('../sound/PionoAudioFiles/f6.mp3'),
      require('../sound/PionoAudioFiles/fs6.mp3'),
      require('../sound/PionoAudioFiles/g6.mp3'),
      require('../sound/PionoAudioFiles/gs6.mp3'),
      require('../sound/PionoAudioFiles/a6.mp3'),
      require('../sound/PionoAudioFiles/as6.mp3'),
      require('../sound/PionoAudioFiles/b6.mp3'),
    ];
    // soundList.forEach((note, i) => {
    //   this.sound[note] = new Sound(key[i], (error) => {
    //     if (error) {
    //       console.log("failed to load the sound.", error);
    //     }
    //   });
    // });

    if (Platform.OS === 'ios') {
      soundList.forEach((note, i) => {
        this.sound[note] = new Sound(key[i], error => {
          if (error) {
            console.log('failed to load the sound.', error);
          }
        });
      });

      // this.ss = new Sound(
      //   "http://68.183.25.24:8084/uploads/tanpura.mp3",
      //   null,
      //   (error) => {
      //     if (error) {
      //       console.log("failed to load the sound.", error);
      //     }
      //   }
      // );
    } else if (Platform.OS === 'android') {
      soundList.forEach((note, i) => {
        this.sound[note] = new Sound(note + '.ogg', null, error => {
          if (error) {
            console.log('failed to load the sound.', error);
          }
        });
      });

      // this.ss = new Sound(
      //   "http://68.183.25.24:8084/uploads/tanpura.mp3",
      //   Sound.MAIN_BUNDLE,
      //   (error) => {
      //     if (error) {
      //       console.log("failed to load the sound.", error);
      //     }
      //   }
      // );
    }
    if (true) {
    }
  }

  helperFunction() {
    let helperArray = [];
    this.state.buttonArray.forEach((e, i) => {
      helperArray.push({
        options: this.state.buttonArray[i],
        color: '#704985',
        radius: 12,
      });
    });
    this.setState({ buttonArray: helperArray });
  }
  clickEvent(i) {
    let helper = this.state.buttonArray;
    // console.log(helper);
    let x = this.state.questionAnswers[this.state.correctAnswerLength];
    if (
      this.state.buttonArray.findIndex(function (val) {
        return val.options === '' + x;
      }) == i
    ) {
      helper.splice(i, 1, {
        options: this.state.buttonArray[i].options,
        color: 'green',
        radius: 12,
      });
      this.refs.correct.showToast('Correct', 1000);

      console.log('frst', this.state.correctAnswerLength);
      this.setState(
        { correctAnswerLength: this.state.correctAnswerLength + 1 },
        () => {
          if (
            this.state.questionAnswers.length > this.state.correctAnswerLength
          ) {
            //
            console.log('scd', this.state.questionAnswers);
          } else {
            if (this.state.riyaazArray.length - 1 == this.state.keyRiyaaz) {
              this.setState({ loading: true });
              this.timer1 = setTimeout(() => {
                this.releaseSound();
                this.bm.stop().release();
                if (this.state.playAudioSound) {
                  this.ss.stop().release();
                }
              }, 900);
              this.timer2 = setTimeout(() => {
                this.props.navigation.navigate('RiyaazCompleted', {
                  id: this.props.route.params.id,
                  title: this.state.riyaazTitle,
                });
                this.setState({ loading: false, modalVisible: false });
              }, 1010);
            } else {
              // this.setState({ wrongCount: this.state.wrongCount + 1 }, () => {});

              this.timer3 = setTimeout(() => {
                this.setState({ correctAnswerLength: 0 });
                this.nextQuestion();
                console.log('thrd', this.state.correctAnswerLength);
              }, 1000);
            }
          }
        },
      );

      console.log('riyaazarray', this.state.riyaazArray.length);
      console.log('keyriyaaz', this.state.keyRiyaaz);
      console.log('question array', this.state.questionArray.length);
      console.log('key question array', this.state.keyQuestion);
    } else {
      this.refs.tryagain.showToast('Try Again', 1000);

      helper.splice(i, 1, {
        options: this.state.buttonArray[i].options,
        color: 'red',
        radius: 12,
      });
      this.setState({ wrongCount: this.state.wrongCount + 1 }, () => {
        console.log('one wrong count');
      });
    }
    // console.log(helper);

    this.setState({ buttonArray: helper });

    this.timer4 = setTimeout(() => {
      let helperArray = [];
      this.state.buttonArray.forEach((e, i) => {
        helperArray.push({
          options: this.state.buttonArray[i].options,
          color: '#704985',
          radius: 12,
        });
      });
      this.setState({ buttonArray: helperArray });

      console.log(helperArray);
    }, 2000);
    // //     let orgArr=Array.from(this.state.buttonArray);
    // //     console.log(orgArr);
    //   let arr=this.state.buttonArray.map((val,ind)=>{

    //   if(this.state.buttonArray.indexOf(this.state.questionAnswers[0])==i==i){
    //     val.isClecked='correct';
    //   }
    //   return {...val}
    // })
    // // console.log(orgArr);

    //   console.log(arr);
    // this.setState({buttonArray:arr});
    // ,()=>{
    // console.log(arr);
    //   setTimeout(()=>{
    //     this.setState({buttonArray:orgArr});
    // console.log(orgArr);

    //   },2000)
    // });
  }
  // release sound
  releaseSound() {
    this.state.soundList1.forEach((note, i) => {
      this.sound[note].release();
    });
  }

  // completed();
  viewModel = () => {
    this.setState({ modalVisible: true });
  };
  getRiyaaz(id) {
    this.startQuestion();
  }

  async fetchData() {
    this.setState({ loading: true });
    try {
      var deviceId = DeviceInfo.getUniqueId();

      console.log('aaaaaaaaaaaaaa' + this.props.route.params.id);

      const { data } = await axios.get(
        Api.baseUrl +
        Api.riyaazDetail +
        this.props.route.params.id +
        '/' +
        deviceId,
      );
      console.log('typeof', data);
      if (true) {
        console.log('object', data.course_id);
        this.setState({
          wrongCountFromBackend: data.lessonInfo.lessonMaxWrongCount,
        });
        this.setState(
          { riyaazArray: data.data, questionType: data.data[0].questionType },
          () => {
            this.setState(
              {
                riyaazTitle: data.lessonInfo.lessonRiyaazTitle,
                lessonTitle: data.lessonInfo.lessonTitle,
                cid: data.course_id,
              },
              () => {
                this.startQuestion();
              },
            );
          },
        );
      } else if (data.data[0].questionType == 2) {
        this.setState({
          wrongCountFromBackend: data.lessonInfo.lessonMaxWrongCount,
        });
        this.setState({ riyaazArray: data.data }, () => {
          this.setState({
            riyaazTitle: data.lessonInfo.lessonRiyaazTitle,
            lessonTitle: data.lessonInfo.lessonTitle,
            cid: data.course_id,
          });
        });
      }
    } catch (err) {
      alert('Opps! Something went wrong... please try later ');
      this.props.navigation.replace('RiyaazList');
    }
  }
  async startQuestion() {
    this.playAudio();

    this.setState({ loading: true });
    // console.log("bbbbbbbbbbbbb", this.state.riyaazArray);

    // console.log(
    //   "aaaaaaaa",
    //   this.state.riyaazArray[this.state.keyRiyaaz].questionKeySequence
    // );
    // console.log("bbbbbbbbb", this.state.riyaazArray[this.state.keyRiyaaz]);
    // console.log("cccccccccc", this.state.keyRiyaaz);

    this.setState({ keyQuestion: 0 }, () => {
      if (this.state.riyaazArray[this.state.keyRiyaaz].questionType == 1) {
        // if(this.state.questionType==1){
        this.timer5 = setTimeout(() => {
          this.scrollViewRef.current.scrollTo({
            x: 180,
            y: 0,
            animated: true,
          });
        }, 10);

        // }
        this.setState(
          {
            questionArray:
              this.state.riyaazArray[this.state.keyRiyaaz].questionKeySequence,
            questionType:
              this.state.riyaazArray[this.state.keyRiyaaz].questionType,
          },
          () => {
            // console.log("zzzzzzzzzzzzzzzzzzzz" + this.state.questionArray);
            this.setState({ loading: false }, () => { });
          },
        );
      } else {
        this.setState(
          {
            buttonArray:
              this.state.riyaazArray[this.state.keyRiyaaz].questionOptions,
            questionType:
              this.state.riyaazArray[this.state.keyRiyaaz].questionType,
            questionAnswers:
              this.state.riyaazArray[this.state.keyRiyaaz].questionAnswers,
          },
          () => {
            this.helperFunction();
            this.setState({ loading: false });
          },
        );
      }
    });
  }
  playAudio() {
    if (this.state.playAudioSound) {
      this.ss.stop();
      this.setState({ playAudioSound: false });
    } else {
      if (Platform.OS === 'ios') {
        this.ss = new Sound(
          'http://68.183.25.24:8084/uploads/' +
          (this.state.riyaazArray[this.state.keyRiyaaz]
            .questionKeySequenceAudio != ''
            ? this.state.riyaazArray[this.state.keyRiyaaz]
              .questionKeySequenceAudio
            : this.state.riyaazArray[this.state.keyRiyaaz].questionAudio),

          null,
          error => {
            if (error) {
              alert('No Audio File !');
              this.setState({ playAudioSound: false });

              console.log('failed to load the sound  ', error);
            } else {
              this.ss.stop(() => {
                this.ss.play(() => {
                  this.setState({ playAudioSound: false });
                });
                this.setState({ playAudioSound: true });
              });
            }
          },
        );
      } else if (Platform.OS === 'android') {
        this.ss = new Sound(
          'http://68.183.25.24:8084/uploads/' +
          (this.state.riyaazArray[this.state.keyRiyaaz]
            .questionKeySequenceAudio != ''
            ? this.state.riyaazArray[this.state.keyRiyaaz]
              .questionKeySequenceAudio
            : this.state.riyaazArray[this.state.keyRiyaaz].questionAudio),
          Sound.MAIN_BUNDLE,
          error => {
            if (error) {
              alert('No Audio File !');
              this.setState({ playAudioSound: false });

              console.log('failed to load the sound.', error);
            } else {
              console.log(
                'erooe',
                this.state.riyaazArray[this.state.keyRiyaaz]
                  .questionKeySequenceAudio,
              );

              this.ss.stop(() => {
                this.ss.play(() => {
                  console.log(
                    'erooe',
                    this.state.riyaazArray[this.state.keyRiyaaz]
                      .questionKeySequenceAudio,
                  );

                  this.setState({ playAudioSound: false });
                });
                this.setState({ playAudioSound: true });
              });
            }
          },
        );
      }
      this.setState({ playAudioSound: true });
    }
  }

  prevQuestion() {
    // this.setState({loading:true});

    if (this.state.playAudioSound) {
      this.ss.stop();
      this.setState({ playAudioSound: false });
    }
    if (0 == this.state.keyRiyaaz) {
    } else {
      this.setState({ keyRiyaaz: this.state.keyRiyaaz - 1 }, () => {
        this.startQuestion();
        this.playAudio();
      });
    }
  }

  nextQuestion() {
    // this.setState({loading:true});
    if (this.state.wrongCount > 0) {
      console.log('dasssssssssssssssssssss', this.state.wrongCount);

      this.setState({ wrongCount: 0 });
      this.setState({ wrongAnswer: this.state.wrongAnswer + 1 }, () => {
        if (this.state.wrongAnswer == this.state.wrongCountFromBackend) {
          this.setState({ modalVisible: true });
        }
      });
    }
    if (this.state.playAudioSound) {
      this.ss.stop();
      this.ss.release();
    }
    console.log('object', this.state.keyQuestion);
    this.setState({ playAudioSound: false });

    if (this.state.riyaazArray.length == this.state.keyRiyaaz + 1) {
    } else {
      this.setState({ keyRiyaaz: this.state.keyRiyaaz + 1 }, () => {
        this.startQuestion();
        // this.playAudio();
        this.playAudio();
      });
    }

    this.timer6 = setTimeout(() => {
      console.log('fghjfgjhgfjh' + this.state.wrongAnswer);
      if (this.state.wrongAnswer == this.state.wrongCountFromBackend) {
        this.setState({ modalVisible: true });
      }
    }, 1000);
  }

  componentDidMount() {
    this.fetchData();
    AppState.addEventListener('change', this._handleAppStateChange);

    this.bm = new Sound(
      'http://68.183.25.24:8084/uploads/tanpura.mp3',
      null,
      error => {
        if (error) {
          console.log('failed to load the sound.', error);
        } else {
          this.bm.setVolume(0.1);
          this.bm.setNumberOfLoops(-1);
          this.bm.play();
        }
      },
    );
  }

  componentDidUpdate() {
    console.log('khbjyu,uuuuuuuuuuuuuuuuu');
  }
  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
    if (this.state.playAudioSound) {
      this.ss.stop();
      this.ss.release();
      this.bm.stop().release();
    }
    if (this.timer1) {
      clearTimeout(this.timer1);
    }
    if (this.timer2) {
      clearTimeout(this.timer2);
    }
    if (this.timer3) {
      clearTimeout(this.timer3);
    }
    if (this.timer4) {
      clearTimeout(this.timer4);
    }
    if (this.timer5) {
      clearTimeout(this.timer5);
    }
    if (this.timer6) {
      clearTimeout(this.timer6);
    }
    if (this.timer7) {
      clearTimeout(this.timer7);
    }
    if (this.timer8) {
      clearTimeout(this.timer8);
    }
    if (this.timer9) {
      clearTimeout(this.timer9);
    }
    if (this.timer10) {
      clearTimeout(this.timer10);
    }
  }
  _handleAppStateChange = nextAppState => {
    this.setState({ appState: nextAppState });

    if (nextAppState === 'background') {
      this.ss.stop();
      this.ss.release();
      this.bm.stop().release();

      // Do something here on app background.
      console.log('App is in Background Mode.');
    }

    if (nextAppState === 'active') {
      // Do something here on app active foreground mode.
      console.log('App is in Active Foreground Mode.');
    }

    if (nextAppState === 'inactive') {
      // Do something here on app inactive mode.
      console.log('App is in inactive Mode.');
    }
  };
  refreshMethod() {
    if (this.state.playAudioSound) {
      this.ss.stop();
      this.setState({ playAudioSound: false });
    }

    this.setState(
      {
        modalVisible: false,

        keyRiyaaz: 0,
        keyQuestion: 0,
        i: 0,
        loading: true,
      },
      () => {
        this.startQuestion();
      },
    );
  }
  keyFormatter(key) {
    // if(key.includes('6')){

    //   this.scrollViewRef.current.scrollTo({x: 5000, y: 0, animated: true})
    // }
    // if(key.includes('4')){

    //   this.scrollViewRef.current.scrollTo({x: -5000, y: 0, animated: true})

    // }
    console.log('test ' + key);
    let key2 = key.replace(/#/gi, 's');
    // .replace(/4/gi, "6")
    // .replace(/2/gi, "4")
    // .replace(/3/gi, "5")
    let key3 = key2.substring(0, 1);
    let key4 = key2.substring(1, 3);
    let final3 = ('color' + key4 + key3).toLowerCase();
    console.log('test2 ' + final3);

    return final3;
  }
  stroke(note) {
    // change backgroundColor
    switch (note) {
      case 'c4':
        this.setState({ colorc4: 'rgba(1, 1, 1, 0.1)' });
        break;
      case 'cs4':
        this.setState({ colorcs4: 'rgba(0, 0, 0, 0.5)' });
        break;
      case 'd4':
        this.setState({ colord4: 'rgba(1, 1, 1, 0.1)' });
        break;
      case 'ds4':
        this.setState({ colords4: 'rgba(0, 0, 0, 0.5)' });
        break;
      case 'e4':
        this.setState({ colore4: 'rgba(1, 1, 1, 0.1)' });
        break;
      case 'f4':
        this.setState({ colorf4: 'rgba(1, 1, 1, 0.1)' });
        break;
      case 'fs4':
        this.setState({ colorfs4: 'rgba(0, 0, 0, 0.5)' });
        break;
      case 'g4':
        this.setState({ colorg4: 'rgba(1, 1, 1, 0.1)' });
        break;
      case 'gs4':
        this.setState({ colorgs4: 'rgba(0, 0, 0, 0.5)' });
        break;
      case 'a4':
        this.setState({ colora4: 'rgba(1, 1, 1, 0.1)' });
        break;
      case 'as4':
        this.setState({ coloras4: 'rgba(0, 0, 0, 0.5)' });
        break;
      case 'b4':
        this.setState({ colorb4: 'rgba(1, 1, 1, 0.1)' });
        break;
      case 'c5':
        this.setState({ colorc5: 'rgba(1, 1, 1, 0.1)' });
        break;
      case 'cs5':
        this.setState({ colorcs5: 'rgba(0, 0, 0, 0.5)' });
        break;
      case 'd5':
        this.setState({ colord5: 'rgba(1, 1, 1, 0.1)' });
        break;
      case 'ds5':
        this.setState({ colords5: 'rgba(0, 0, 0, 0.5)' });
        break;
      case 'e5':
        this.setState({ colore5: 'rgba(1, 1, 1, 0.1)' });
        break;
      case 'f5':
        this.setState({ colorf5: 'rgba(1, 1, 1, 0.1)' });
        break;
      case 'fs5':
        this.setState({ colorfs5: 'rgba(0, 0, 0, 0.5)' });
        break;
      case 'g5':
        this.setState({ colorg5: 'rgba(1, 1, 1, 0.1)' });
        break;
      case 'gs5':
        this.setState({ colorgs5: 'rgba(0, 0, 0, 0.5)' });
        break;
      case 'a5':
        this.setState({ colora5: 'rgba(1, 1, 1, 0.1)' });
        break;
      case 'as5':
        this.setState({ coloras5: 'rgba(0, 0, 0, 0.5)' });
        break;
      case 'b5':
        this.setState({ colorb5: 'rgba(1, 1, 1, 0.1)' });
        break;
      case 'c6':
        this.setState({ colorc6: 'rgba(1, 1, 1, 0.1)' });
        break;
      case 'cs6':
        this.setState({ colorcs6: 'rgba(0, 0, 0, 0.5)' });
        break;
      case 'd6':
        this.setState({ colord6: 'rgba(1, 1, 1, 0.1)' });
        break;
      case 'ds6':
        this.setState({ colords6: 'rgba(0, 0, 0, 0.5)' });
        break;
      case 'e6':
        this.setState({ colore6: 'rgba(1, 1, 1, 0.1)' });
        break;
      case 'f6':
        this.setState({ colorf6: 'rgba(1, 1, 1, 0.1)' });
        break;
      case 'fs6':
        this.setState({ colorfs6: 'rgba(0, 0, 0, 0.5)' });
        break;
      case 'g6':
        this.setState({ colorg6: 'rgba(1, 1, 1, 0.1)' });
        break;
      case 'gs6':
        this.setState({ colorgs6: 'rgba(0, 0, 0, 0.5)' });
        break;
      case 'a6':
        this.setState({ colora6: 'rgba(1, 1, 1, 0.1)' });
        break;
      case 'as6':
        this.setState({ coloras6: 'rgba(0, 0, 0, 0.5)' });
        break;
      case 'b6':
        this.setState({ colorb6: 'rgba(1, 1, 1, 0.1)' });
        break;
    }
    var prenote = 'c4';
    this.sound[prenote].stop(() => {
      this.sound[note].stop(() => {
        this.sound[note].play(() => {
          console.log('played ', note);
        });
      });
    });
    prenote = note;
    this.setState({ crashFreeKey: this.state.crashFreeKey + 1 }, () => {
      if (this.state.crashFreeKey == this.state.keyQuestion) {
      } else {
        if (this.state.riyaazArray.length - 1 >= this.state.keyRiyaaz) {
          let final2 = this.keyFormatter(
            this.state.questionArray[this.state.keyQuestion],
          );

          if ('color' + note == final2) {
            if (this.state.questionArray.length - 1 >= this.state.keyQuestion) {
            } else {
              //
            }
            this.refs.correct.showToast('Correct', 1000);
            this.setState({ ['color' + note]: 'green' });
            this.timer7 = setTimeout(() => {
              if (note.includes('s')) {
                this.setState({ ['color' + note]: 'black' });
              } else {
                this.setState({ ['color' + note]: 'white' });
              }
            }, 1000);
            // for next question
            this.setState({ keyQuestion: this.state.keyQuestion + 1 }, () => {
              if (
                this.state.questionArray.length - 1 >=
                this.state.keyQuestion
              ) {
              } else {
                this.nextQuestion();
              }
            });
            if (
              this.state.riyaazArray.length - 1 == this.state.keyRiyaaz &&
              this.state.questionArray.length - 1 == this.state.keyQuestion
            ) {
              this.setState({ loading: true });
              this.timer8 = setTimeout(() => {
                this.releaseSound();
                this.bm.stop().release();
                if (this.state.playAudioSound) {
                  this.ss.stop().release();
                }
              }, 900);
              this.timer9 = setTimeout(() => {
                this.props.navigation.navigate('RiyaazCompleted', {
                  id: this.props.route.params.id,
                  title: this.state.riyaazTitle,
                });
                this.setState({ loading: false, modalVisible: false });
              }, 1010);
            }
          } else {
            this.setState({ wrongCount: this.state.wrongCount + 1 }, () => { });

            this.setState({ ['color' + note]: 'red' });
            this.refs.tryagain.showToast('Try again', 1000);

            this.timer10 = setTimeout(() => {
              if (note.includes('s')) {
                this.setState({ ['color' + note]: 'black' });
              } else {
                this.setState({ ['color' + note]: 'white' });
              }
            }, 2000);
          }
        } else {
          // this.props.navigation.navigate("RiyaazCompleted");
        }
      }
    });
  }
  stop(note) {
    // change backgroundColor
    switch (note) {
      case 'c4':
        this.setState({ colorc4: 'white' });
        break;
      case 'cs4':
        this.setState({ colorcs4: 'black' });
        break;
      case 'd4':
        this.setState({ colord4: 'white' });
        break;
      case 'ds4':
        this.setState({ colords4: 'black' });
        break;
      case 'e4':
        this.setState({ colore4: 'white' });
        break;
      case 'f4':
        this.setState({ colorf4: 'white' });
        break;
      case 'fs4':
        this.setState({ colorfs4: 'black' });
        break;
      case 'g4':
        this.setState({ colorg4: 'white' });
        break;
      case 'gs4':
        this.setState({ colorgs4: 'black' });
        break;
      case 'a4':
        this.setState({ colora4: 'white' });
        break;
      case 'as4':
        this.setState({ coloras4: 'black' });
        break;
      case 'b4':
        this.setState({ colorb4: 'white' });
        break;
      case 'c5':
        this.setState({ colorc5: 'white' });
        break;
      case 'cs5':
        this.setState({ colorcs5: 'black' });
        break;
      case 'd5':
        this.setState({ colord5: 'white' });
        break;
      case 'ds5':
        this.setState({ colords5: 'black' });
        break;
      case 'e5':
        this.setState({ colore5: 'white' });
        break;
      case 'f5':
        this.setState({ colorf5: 'white' });
        break;
      case 'fs5':
        this.setState({ colorfs5: 'black' });
        break;
      case 'g5':
        this.setState({ colorg5: 'white' });
        break;
      case 'gs5':
        this.setState({ colorgs5: 'black' });
        break;
      case 'a5':
        this.setState({ colora5: 'white' });
        break;
      case 'as5':
        this.setState({ coloras5: 'black' });
        break;
      case 'b5':
        this.setState({ colorb5: 'white' });
        break;
      case 'c6':
        this.setState({ colorc6: 'white' });
        break;
      case 'cs6':
        this.setState({ colorcs6: 'black' });
        break;
      case 'd6':
        this.setState({ colord6: 'white' });
        break;
      case 'ds6':
        this.setState({ colords6: 'black' });
        break;
      case 'e6':
        this.setState({ colore6: 'white' });
        break;
      case 'f6':
        this.setState({ colorf6: 'white' });
        break;
      case 'fs6':
        this.setState({ colorfs6: 'black' });
        break;
      case 'g6':
        this.setState({ colorg6: 'white' });
        break;
      case 'gs6':
        this.setState({ colorgs6: 'black' });
        break;
      case 'a6':
        this.setState({ colora6: 'white' });
        break;
      case 'as6':
        this.setState({ coloras6: 'black' });
        break;
      case 'b6':
        this.setState({ colorb6: 'white' });
        break;
    }
  }
  render() {
    return (
      <>
        <Toast ref="correct" backgroundColor="green" position="top" />
        <Toast ref="tryagain" backgroundColor="red" position="top" />

        <Modal
          animationType="slide"
          transparent={true}
          supportedOrientations={[
            'portrait',
            'landscape',
            'landscape-left',
            'landscape-right',
          ]}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            this.setState({ modalVisible: false });
          }}>
          <TouchableWithoutFeedback
            onPress={() => this.setState({ modalVisible: false })}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Image source={require('../images/smiley.png')}></Image>

                <Text style={styles.modalText}>
                  Incorrect Selection! Go through lessons to refresh memory.{' '}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{ marginRight: 25 }}>
                    <TouchableOpacity
                      onPress={() => {
                        this.releaseSound();
                        this.bm.stop().release();
                        if (this.state.playAudioSound) {
                          this.ss.stop().release();
                        }
                        this.props.navigation.replace('PionoLesson', {
                          id: this.props.route.params.id,
                          cid: this.state.cid,
                        });
                        this.setState({ modalVisible: false });
                      }}>
                      <Text
                        style={{
                          color: 'blue',
                          fontWeight: 'bold',
                          textDecorationLine: 'underline',
                        }}>
                        Go to Current Lesson
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      height: 40,
                      width: 2,
                      color: 'black',
                      backgroundColor: 'black-faded',
                    }}></View>
                  <View style={{ marginLeft: 25 }}>
                    <TouchableOpacity
                      onPress={() => {
                        this.setState({ modalVisible: false });
                      }}>
                      <Text
                        style={{
                          color: 'blue',
                          fontWeight: 'bold',
                          textDecorationLine: 'underline',
                        }}>
                        Not Now
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
        <View style={{ flex: 1 }}>
          <ImageBackground
            source={require('../images/image_bg.png')}
            style={{
              width: Dimensions.get('window').width,
              height: Dimensions.get('window').height,
            }}>
            <View
              style={{
                flexDirection: 'row',
                height: '20%',
                alignItems: 'center',
              }}>
              <View style={{ flex: 1, marginLeft: 35 }}>
                <TouchableOpacity
                  onPress={() => {
                    this.releaseSound();
                    this.bm.stop().release();
                    if (this.state.playAudioSound) {
                      this.ss.stop().release();
                    }
                    this.props.navigation.navigate('RiyaazList');
                  }}
                  style={{ width: 35, height: 35 }}>
                  <Image
                    source={require('../images/backarrow.png')}
                    style={{ alignSelf: 'flex-start' }}></Image>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flex: 2,
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    alignSelf: 'center',
                    fontWeight: 'bold',
                    fontSize: 30,
                  }}>
                  {this.state.riyaazTitle}
                </Text>
                <View
                  style={{
                    height: 3,
                    width: 50,
                    alignSelf: 'center',
                    backgroundColor: '#6D5CEF',
                  }}></View>
                <Text
                  style={{
                    fontWeight: '600',
                    textAlign: 'center',
                    fontSize: 20,
                  }}>
                  {this.state.lessonTitle}
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'flex-end',
                  flexDirection: 'row',
                  marginRight: 30,
                }}>
                <TouchableOpacity
                  onPress={() => {
                    this.releaseSound();
                    this.bm.stop().release();
                    if (this.state.playAudioSound) {
                      this.ss.stop().release();
                    }
                    this.props.navigation.navigate('Feedback');
                  }}>
                  <Image
                    source={require('../images/feedback.png')}
                    style={{ alignSelf: 'flex-end', marginRight: 20 }}></Image>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    this.releaseSound();
                    this.bm.stop().release();
                    if (this.state.playAudioSound) {
                      this.ss.stop().release();
                    }
                    this.props.navigation.navigate('RiyaazCourse');
                  }}>
                  <Image
                    source={require('../images/Home.png')}
                    style={{ alignSelf: 'flex-end' }}></Image>
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                width: Dimensions.get('window').width - 100,
                height: 50,
                backgroundColor: 'rgba(255,255,255,.5)',

                justifyContent: 'center',
                borderRadius: 10,
                marginLeft: 50,
                height: '15%',
              }}>
              {this.state.loading ? (
                <Loader loading={this.state.loading} />
              ) : (
                <Text
                  style={{
                    padding: 13,
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: 'black',
                  }}>
                  {
                    this.state.riyaazArray[this.state.keyRiyaaz]
                      .questionStatement
                  }
                </Text>
              )}
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginLeft: 60,
                marginRight: 50,
                marginTop: 10,
                justifyContent: 'space-between',
                marginBottom: 0,
                height: '15%',
              }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => this.refreshMethod()}>
                  <Image
                    source={require('../images/refresh.png')}
                    style={{ marginRight: 20 }}></Image>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    this.playAudio();
                  }}>
                  {this.state.playAudioSound ? (
                    <Image source={require('../images/pause_icon.png')}></Image>
                  ) : (
                    <Image source={require('../images/play.png')}></Image>
                  )}
                </TouchableOpacity>
              </View>
              <View style={{ alignItems: 'center' }}>
                <Image
                  source={require('../images/scale_c.png')}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}></Image>
                <Text style={{ fontSize: 18 }}>
                  Question {this.state.keyRiyaaz + 1} of{' '}
                  {this.state.riyaazArray.length}
                </Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity
                  onPress={() => {
                    this.prevQuestion();
                  }}>
                  <Image
                    source={require('../images/backarrow.png')}
                    style={{ marginRight: 20 }}></Image>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    this.nextQuestion();
                  }}>
                  <Image
                    source={require('../images/forward_arrow.png')}></Image>
                </TouchableOpacity>
              </View>
            </View>

            {this.state.questionType == 1 ? (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '40%',
                }}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                  }}>
                  <TouchableOpacity
                    onPress={() =>
                      this.scrollViewRef.current.scrollTo({
                        x: -5000,
                        y: 0,
                        animated: true,
                      })
                    }>
                    <Image
                      source={require('../images/backarrow2.png')}
                      style={{}}></Image>
                  </TouchableOpacity>
                </View>

                <View
                  style={{
                    flex: 12,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 20,
                  }}>
                  <ScrollView
                    ref={this.scrollViewRef}
                    horizontal={true}
                    centerContent={true}>
                    <View style={styles.container}>
                      <View
                        style={{
                          flex: 1,
                          flexDirection: 'column',
                          alignItems: 'center',
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}>
                          <View
                            style={{
                              backgroundColor: this.state.colorc4,
                              height: 100,
                              width: 32,
                              borderLeftWidth: 1,
                              borderTopWidth: 1,
                            }}></View>
                          <View
                            onTouchStart={() => this.stroke('cs4')}
                            onTouchEnd={() => this.stop('cs4')}
                            style={{
                              justifyContent: 'flex-end',
                              backgroundColor: this.state.colorcs4,
                              height: 100,
                              width: 32,
                              borderTopWidth: 1,
                              borderLeftWidth: 1,
                              justifyContent: 'flex-end',
                            }}>
                            <Text
                              style={{
                                color: 'white',
                                marginTop: 25,
                                textAlign: 'center',
                                marginBottom: 5,
                              }}>
                              {' '}
                              {this.state.blackKeyLabelNames[0]}{' '}
                            </Text>
                          </View>
                          <View
                            style={{
                              backgroundColor: this.state.colord4,
                              height: 100,
                              width: 16,
                              borderTopWidth: 1,
                            }}></View>
                          <View
                            onTouchStart={() => this.stroke('ds4')}
                            onTouchEnd={() => this.stop('ds4')}
                            style={{
                              justifyContent: 'flex-end',
                              backgroundColor: this.state.colords4,
                              height: 100,
                              width: 32,
                              borderTopWidth: 1,
                              borderLeftWidth: 1,
                              justifyContent: 'flex-end',
                            }}>
                            <Text
                              style={{
                                color: 'white',
                                marginTop: 25,
                                textAlign: 'center',
                                marginBottom: 5,
                              }}>
                              {' '}
                              {this.state.blackKeyLabelNames[1]}{' '}
                            </Text>
                          </View>
                          <View
                            style={{
                              backgroundColor: this.state.colore4,
                              height: 100,
                              width: 32,
                              borderTopWidth: 1,
                            }}></View>
                          <View
                            style={{
                              backgroundColor: this.state.colorf4,
                              height: 100,
                              width: 32,
                              borderTopWidth: 1,
                              borderLeftWidth: 1,
                            }}></View>
                          <View
                            onTouchStart={() => this.stroke('fs4')}
                            onTouchEnd={() => this.stop('fs4')}
                            style={{
                              justifyContent: 'flex-end',
                              backgroundColor: this.state.colorfs4,
                              height: 100,
                              width: 32,
                              borderTopWidth: 1,
                              justifyContent: 'flex-end',
                            }}>
                            <Text
                              style={{
                                color: 'white',
                                marginTop: 25,
                                textAlign: 'center',
                                marginBottom: 5,
                              }}>
                              {' '}
                              {this.state.blackKeyLabelNames[2]}{' '}
                            </Text>
                          </View>
                          <View
                            style={{
                              backgroundColor: this.state.colorg4,
                              height: 100,
                              width: 16,
                              borderTopWidth: 1,
                            }}></View>
                          <View
                            onTouchStart={() => this.stroke('gs4')}
                            onTouchEnd={() => this.stop('gs4')}
                            style={{
                              justifyContent: 'flex-end',
                              backgroundColor: this.state.colorgs4,
                              height: 100,
                              width: 32,
                              borderTopWidth: 1,
                              justifyContent: 'flex-end',
                            }}>
                            <Text
                              style={{
                                color: 'white',
                                marginTop: 25,
                                textAlign: 'center',
                                marginBottom: 5,
                              }}>
                              {' '}
                              {this.state.blackKeyLabelNames[3]}{' '}
                            </Text>
                          </View>
                          <View
                            style={{
                              backgroundColor: this.state.colora4,
                              height: 100,
                              width: 16,
                              borderTopWidth: 1,
                            }}></View>
                          <View
                            onTouchStart={() => this.stroke('as4')}
                            onTouchEnd={() => this.stop('as4')}
                            style={{
                              justifyContent: 'flex-end',
                              backgroundColor: this.state.coloras4,
                              height: 100,
                              width: 32,
                              borderTopWidth: 1,
                              justifyContent: 'flex-end',
                            }}>
                            <Text
                              style={{
                                color: 'white',
                                marginTop: 25,
                                textAlign: 'center',
                                marginBottom: 5,
                              }}>
                              {' '}
                              {this.state.blackKeyLabelNames[4]}{' '}
                            </Text>
                          </View>
                          <View
                            style={{
                              backgroundColor: this.state.colorb4,
                              height: 100,
                              width: 32,
                              borderRightWidth: 1,
                              borderTopWidth: 1,
                            }}></View>

                          <View
                            style={{
                              backgroundColor: this.state.colorc5,
                              height: 100,
                              width: 32,
                              borderLeftWidth: 1,
                              borderTopWidth: 1,
                            }}></View>
                          <View
                            onTouchStart={() => this.stroke('cs5')}
                            onTouchEnd={() => this.stop('cs5')}
                            style={{
                              backgroundColor: this.state.colorcs5,
                              height: 100,
                              width: 32,
                              borderTopWidth: 1,
                              borderLeftWidth: 1,
                              justifyContent: 'flex-end',
                            }}>
                            <Text
                              style={{
                                color: 'white',
                                marginTop: 25,
                                textAlign: 'center',
                                marginBottom: 5,
                              }}>
                              {' '}
                              {this.state.blackKeyLabelNames[5]}{' '}
                            </Text>
                          </View>
                          <View
                            style={{
                              backgroundColor: this.state.colord5,
                              height: 100,
                              width: 16,
                              borderTopWidth: 1,
                            }}></View>
                          <View
                            onTouchStart={() => this.stroke('ds5')}
                            onTouchEnd={() => this.stop('ds5')}
                            style={{
                              backgroundColor: this.state.colords5,
                              height: 100,
                              width: 32,
                              borderTopWidth: 1,
                              borderLeftWidth: 1,
                              justifyContent: 'flex-end',
                            }}>
                            <Text
                              style={{
                                color: 'white',
                                marginTop: 25,
                                textAlign: 'center',
                                marginBottom: 5,
                              }}>
                              {' '}
                              {this.state.blackKeyLabelNames[6]}{' '}
                            </Text>
                          </View>
                          <View
                            style={{
                              backgroundColor: this.state.colore5,
                              height: 100,
                              width: 32,
                              borderTopWidth: 1,
                            }}></View>
                          <View
                            style={{
                              backgroundColor: this.state.colorf5,
                              height: 100,
                              width: 32,
                              borderTopWidth: 1,
                              borderLeftWidth: 1,
                            }}></View>
                          <View
                            onTouchStart={() => this.stroke('fs5')}
                            onTouchEnd={() => this.stop('fs5')}
                            style={{
                              backgroundColor: this.state.colorfs5,
                              height: 100,
                              width: 32,
                              borderTopWidth: 1,
                              justifyContent: 'flex-end',
                            }}>
                            <Text
                              style={{
                                color: 'white',
                                marginTop: 25,
                                textAlign: 'center',
                                marginBottom: 5,
                              }}>
                              {' '}
                              {this.state.blackKeyLabelNames[7]}{' '}
                            </Text>
                          </View>
                          <View
                            style={{
                              backgroundColor: this.state.colorg5,
                              height: 100,
                              width: 16,
                              borderTopWidth: 1,
                            }}></View>
                          <View
                            onTouchStart={() => this.stroke('gs5')}
                            onTouchEnd={() => this.stop('gs5')}
                            style={{
                              backgroundColor: this.state.colorgs5,
                              height: 100,
                              width: 32,
                              borderTopWidth: 1,

                              justifyContent: 'flex-end',
                            }}>
                            <Text
                              style={{
                                color: 'white',
                                marginTop: 25,
                                textAlign: 'center',
                                marginBottom: 5,
                              }}>
                              {' '}
                              {this.state.blackKeyLabelNames[8]}{' '}
                            </Text>
                          </View>
                          <View
                            style={{
                              backgroundColor: this.state.colora5,
                              height: 100,
                              width: 16,
                              borderTopWidth: 1,
                            }}></View>
                          <View
                            onTouchStart={() => this.stroke('as5')}
                            onTouchEnd={() => this.stop('as5')}
                            style={{
                              backgroundColor: this.state.coloras5,
                              height: 100,
                              width: 32,
                              borderTopWidth: 1,
                              justifyContent: 'flex-end',
                            }}>
                            <Text
                              style={{
                                color: 'white',
                                marginTop: 25,
                                textAlign: 'center',
                                marginBottom: 5,
                              }}>
                              {' '}
                              {this.state.blackKeyLabelNames[9]}{' '}
                            </Text>
                          </View>
                          <View
                            style={{
                              backgroundColor: this.state.colorb5,
                              height: 100,
                              width: 32,
                              borderRightWidth: 1,
                              borderTopWidth: 1,
                            }}></View>

                          <View
                            style={{
                              backgroundColor: this.state.colorc6,
                              height: 100,
                              width: 32,
                              borderLeftWidth: 1,
                              borderTopWidth: 1,
                            }}></View>
                          <View
                            onTouchStart={() => this.stroke('cs6')}
                            onTouchEnd={() => this.stop('cs6')}
                            style={{
                              backgroundColor: this.state.colorcs6,
                              height: 100,
                              width: 32,
                              borderTopWidth: 1,
                              borderLeftWidth: 1,

                              justifyContent: 'flex-end',
                            }}>
                            <Text
                              style={{
                                color: 'white',
                                marginTop: 25,
                                textAlign: 'center',
                                marginBottom: 5,
                              }}>
                              {' '}
                              {this.state.blackKeyLabelNames[10]}{' '}
                            </Text>
                          </View>
                          <View
                            style={{
                              backgroundColor: this.state.colord6,
                              height: 100,
                              width: 16,
                              borderTopWidth: 1,
                            }}></View>
                          <View
                            onTouchStart={() => this.stroke('ds6')}
                            onTouchEnd={() => this.stop('ds6')}
                            style={{
                              backgroundColor: this.state.colords6,
                              height: 100,
                              width: 32,
                              borderTopWidth: 1,
                              borderLeftWidth: 1,

                              justifyContent: 'flex-end',
                            }}>
                            <Text
                              style={{
                                color: 'white',
                                marginTop: 25,
                                textAlign: 'center',
                                marginBottom: 5,
                              }}>
                              {' '}
                              {this.state.blackKeyLabelNames[11]}{' '}
                            </Text>
                          </View>
                          <View
                            style={{
                              backgroundColor: this.state.colore6,
                              height: 100,
                              width: 32,
                              borderTopWidth: 1,
                            }}></View>
                          <View
                            style={{
                              backgroundColor: this.state.colorf6,
                              height: 100,
                              width: 32,
                              borderTopWidth: 1,
                              borderLeftWidth: 1,
                            }}></View>
                          <View
                            onTouchStart={() => this.stroke('fs6')}
                            onTouchEnd={() => this.stop('fs6')}
                            style={{
                              backgroundColor: this.state.colorfs6,
                              height: 100,
                              width: 32,
                              borderTopWidth: 1,

                              justifyContent: 'flex-end',
                            }}>
                            <Text
                              style={{
                                color: 'white',
                                marginTop: 25,
                                textAlign: 'center',
                                marginBottom: 5,
                              }}>
                              {' '}
                              {this.state.blackKeyLabelNames[12]}{' '}
                            </Text>
                          </View>
                          <View
                            style={{
                              backgroundColor: this.state.colorg6,
                              height: 100,
                              width: 16,
                              borderTopWidth: 1,
                            }}></View>
                          <View
                            onTouchStart={() => this.stroke('gs6')}
                            onTouchEnd={() => this.stop('gs6')}
                            style={{
                              backgroundColor: this.state.colorgs6,
                              height: 100,
                              width: 32,
                              borderTopWidth: 1,
                              justifyContent: 'flex-end',
                            }}>
                            <Text
                              style={{
                                color: 'white',
                                marginTop: 25,
                                textAlign: 'center',
                                marginBottom: 5,
                              }}>
                              {' '}
                              {this.state.blackKeyLabelNames[13]}{' '}
                            </Text>
                          </View>
                          <View
                            style={{
                              backgroundColor: this.state.colora6,
                              height: 100,
                              width: 16,
                              borderTopWidth: 1,
                            }}></View>
                          <View
                            onTouchStart={() => this.stroke('as6')}
                            onTouchEnd={() => this.stop('as6')}
                            style={{
                              backgroundColor: this.state.coloras6,
                              height: 100,
                              width: 32,
                              borderTopWidth: 1,
                              justifyContent: 'flex-end',
                            }}>
                            <Text
                              style={{
                                color: 'white',
                                marginTop: 25,
                                textAlign: 'center',
                                marginBottom: 5,
                              }}>
                              {' '}
                              {this.state.blackKeyLabelNames[14]}{' '}
                            </Text>
                          </View>
                          <View
                            style={{
                              backgroundColor: this.state.colorb6,
                              height: 100,
                              width: 32,
                              borderRightWidth: 1,
                              borderTopWidth: 1,
                            }}></View>
                        </View>

                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}>
                          <View
                            onTouchStart={() => this.stroke('c4')}
                            onTouchEnd={() => this.stop('c4')}
                            style={{
                              backgroundColor: this.state.colorc4,
                              height: 100,
                              width: 48,
                              borderBottomWidth: 1,
                              borderLeftWidth: 1,
                            }}>
                            <Text
                              style={{
                                color: 'black',
                                marginTop: 25,
                                textAlign: 'center',
                              }}>
                              {this.state.keyLabelNames[0]}
                            </Text>
                          </View>
                          <View
                            onTouchStart={() => this.stroke('d4')}
                            onTouchEnd={() => this.stop('d4')}
                            style={{
                              backgroundColor: this.state.colord4,
                              height: 100,
                              width: 48,
                              borderBottomWidth: 1,
                              borderLeftWidth: 1,
                            }}>
                            <Text
                              style={{
                                color: 'black',
                                marginTop: 25,
                                textAlign: 'center',
                              }}>
                              {this.state.keyLabelNames[1]}
                            </Text>
                          </View>
                          <View
                            onTouchStart={() => this.stroke('e4')}
                            onTouchEnd={() => this.stop('e4')}
                            style={{
                              backgroundColor: this.state.colore4,
                              height: 100,
                              width: 48,
                              borderBottomWidth: 1,
                              borderLeftWidth: 1,
                            }}>
                            <Text
                              style={{
                                color: 'black',
                                marginTop: 25,
                                textAlign: 'center',
                              }}>
                              {this.state.keyLabelNames[2]}
                            </Text>
                          </View>
                          <View
                            onTouchStart={() => this.stroke('f4')}
                            onTouchEnd={() => this.stop('f4')}
                            style={{
                              backgroundColor: this.state.colorf4,
                              height: 100,
                              width: 48,
                              borderBottomWidth: 1,
                              borderLeftWidth: 1,
                            }}>
                            <Text
                              style={{
                                color: 'black',
                                marginTop: 25,
                                textAlign: 'center',
                              }}>
                              {this.state.keyLabelNames[3]}
                            </Text>
                          </View>
                          <View
                            onTouchStart={() => this.stroke('g4')}
                            onTouchEnd={() => this.stop('g4')}
                            style={{
                              backgroundColor: this.state.colorg4,
                              height: 100,
                              width: 48,
                              borderBottomWidth: 1,
                              borderLeftWidth: 1,
                            }}>
                            <Text
                              style={{
                                color: 'black',
                                marginTop: 25,
                                textAlign: 'center',
                              }}>
                              {this.state.keyLabelNames[4]}
                            </Text>
                          </View>
                          <View
                            onTouchStart={() => this.stroke('a4')}
                            onTouchEnd={() => this.stop('a4')}
                            style={{
                              backgroundColor: this.state.colora4,
                              height: 100,
                              width: 48,
                              borderBottomWidth: 1,
                              borderLeftWidth: 1,
                            }}>
                            <Text
                              style={{
                                color: 'black',
                                marginTop: 25,
                                textAlign: 'center',
                              }}>
                              {this.state.keyLabelNames[5]}
                            </Text>
                          </View>
                          <View
                            onTouchStart={() => this.stroke('b4')}
                            onTouchEnd={() => this.stop('b4')}
                            style={{
                              backgroundColor: this.state.colorb4,
                              height: 100,
                              width: 48,
                              borderBottomWidth: 1,
                              borderLeftWidth: 1,
                              borderRightWidth: 1,
                            }}>
                            <Text
                              style={{
                                color: 'black',
                                marginTop: 25,
                                textAlign: 'center',
                              }}>
                              {this.state.keyLabelNames[6]}
                            </Text>
                          </View>

                          <View
                            onTouchStart={() => this.stroke('c5')}
                            onTouchEnd={() => this.stop('c5')}
                            style={{
                              backgroundColor: this.state.colorc5,
                              height: 100,
                              width: 48,
                              borderBottomWidth: 1,
                              borderLeftWidth: 1,
                            }}>
                            <Text
                              style={{
                                color: 'black',
                                marginTop: 25,
                                textAlign: 'center',
                              }}>
                              {this.state.keyLabelNames[7]}
                            </Text>
                          </View>
                          <View
                            onTouchStart={() => this.stroke('d5')}
                            onTouchEnd={() => this.stop('d5')}
                            style={{
                              backgroundColor: this.state.colord5,
                              height: 100,
                              width: 48,
                              borderBottomWidth: 1,
                              borderLeftWidth: 1,
                            }}>
                            <Text
                              style={{
                                color: 'black',
                                marginTop: 25,
                                textAlign: 'center',
                              }}>
                              {this.state.keyLabelNames[8]}
                            </Text>
                          </View>
                          <View
                            onTouchStart={() => this.stroke('e5')}
                            onTouchEnd={() => this.stop('e5')}
                            style={{
                              backgroundColor: this.state.colore5,
                              height: 100,
                              width: 48,
                              borderBottomWidth: 1,
                              borderLeftWidth: 1,
                            }}>
                            <Text
                              style={{
                                color: 'black',
                                marginTop: 25,
                                textAlign: 'center',
                              }}>
                              {this.state.keyLabelNames[9]}
                            </Text>
                          </View>
                          <View
                            onTouchStart={() => this.stroke('f5')}
                            onTouchEnd={() => this.stop('f5')}
                            style={{
                              backgroundColor: this.state.colorf5,
                              height: 100,
                              width: 48,
                              borderBottomWidth: 1,
                              borderLeftWidth: 1,
                            }}>
                            <Text
                              style={{
                                color: 'black',
                                marginTop: 25,
                                textAlign: 'center',
                              }}>
                              {this.state.keyLabelNames[10]}
                            </Text>
                          </View>
                          <View
                            onTouchStart={() => this.stroke('g5')}
                            onTouchEnd={() => this.stop('g5')}
                            style={{
                              backgroundColor: this.state.colorg5,
                              height: 100,
                              width: 48,
                              borderBottomWidth: 1,
                              borderLeftWidth: 1,
                            }}>
                            <Text
                              style={{
                                color: 'black',
                                marginTop: 25,
                                textAlign: 'center',
                              }}>
                              {this.state.keyLabelNames[11]}
                            </Text>
                          </View>
                          <View
                            onTouchStart={() => this.stroke('a5')}
                            onTouchEnd={() => this.stop('a5')}
                            style={{
                              backgroundColor: this.state.colora5,
                              height: 100,
                              width: 48,
                              borderBottomWidth: 1,
                              borderLeftWidth: 1,
                            }}>
                            <Text
                              style={{
                                color: 'black',
                                marginTop: 25,
                                textAlign: 'center',
                              }}>
                              {this.state.keyLabelNames[12]}
                            </Text>
                          </View>
                          <View
                            onTouchStart={() => this.stroke('b5')}
                            onTouchEnd={() => this.stop('b5')}
                            style={{
                              backgroundColor: this.state.colorb5,
                              height: 100,
                              width: 48,
                              borderBottomWidth: 1,
                              borderLeftWidth: 1,
                              borderRightWidth: 1,
                            }}>
                            <Text
                              style={{
                                color: 'black',
                                marginTop: 25,
                                textAlign: 'center',
                              }}>
                              {this.state.keyLabelNames[13]}
                            </Text>
                          </View>

                          <View
                            onTouchStart={() => this.stroke('c6')}
                            onTouchEnd={() => this.stop('c6')}
                            style={{
                              backgroundColor: this.state.colorc6,
                              height: 100,
                              width: 48,
                              borderBottomWidth: 1,
                              borderLeftWidth: 1,
                            }}>
                            <Text
                              style={{
                                color: 'black',
                                marginTop: 25,
                                textAlign: 'center',
                              }}>
                              {this.state.keyLabelNames[14]}
                            </Text>
                          </View>
                          <View
                            onTouchStart={() => this.stroke('d6')}
                            onTouchEnd={() => this.stop('d6')}
                            style={{
                              backgroundColor: this.state.colord6,
                              height: 100,
                              width: 48,
                              borderBottomWidth: 1,
                              borderLeftWidth: 1,
                            }}>
                            <Text
                              style={{
                                color: 'black',
                                marginTop: 25,
                                textAlign: 'center',
                              }}>
                              {this.state.keyLabelNames[15]}
                            </Text>
                          </View>
                          <View
                            onTouchStart={() => this.stroke('e6')}
                            onTouchEnd={() => this.stop('e6')}
                            style={{
                              backgroundColor: this.state.colore6,
                              height: 100,
                              width: 48,
                              borderBottomWidth: 1,
                              borderLeftWidth: 1,
                            }}>
                            <Text
                              style={{
                                color: 'black',
                                marginTop: 25,
                                textAlign: 'center',
                              }}>
                              {this.state.keyLabelNames[16]}
                            </Text>
                          </View>
                          <View
                            onTouchStart={() => this.stroke('f6')}
                            onTouchEnd={() => this.stop('f6')}
                            style={{
                              backgroundColor: this.state.colorf6,
                              height: 100,
                              width: 48,
                              borderBottomWidth: 1,
                              borderLeftWidth: 1,
                            }}>
                            <Text
                              style={{
                                color: 'black',
                                marginTop: 25,
                                textAlign: 'center',
                              }}>
                              {this.state.keyLabelNames[17]}
                            </Text>
                          </View>
                          <View
                            onTouchStart={() => this.stroke('g6')}
                            onTouchEnd={() => this.stop('g6')}
                            style={{
                              backgroundColor: this.state.colorg6,
                              height: 100,
                              width: 48,
                              borderBottomWidth: 1,
                              borderLeftWidth: 1,
                            }}>
                            <Text
                              style={{
                                color: 'black',
                                marginTop: 25,
                                textAlign: 'center',
                              }}>
                              {this.state.keyLabelNames[18]}
                            </Text>
                          </View>
                          <View
                            onTouchStart={() => this.stroke('a6')}
                            onTouchEnd={() => this.stop('a6')}
                            style={{
                              backgroundColor: this.state.colora6,
                              height: 100,
                              width: 48,
                              borderBottomWidth: 1,
                              borderLeftWidth: 1,
                            }}>
                            <Text
                              style={{
                                color: 'black',
                                marginTop: 25,
                                textAlign: 'center',
                              }}>
                              {this.state.keyLabelNames[19]}
                            </Text>
                          </View>
                          <View
                            onTouchStart={() => this.stroke('b6')}
                            onTouchEnd={() => this.stop('b6')}
                            style={{
                              backgroundColor: this.state.colorb6,
                              height: 100,
                              width: 48,
                              borderBottomWidth: 1,
                              borderLeftWidth: 1,
                              borderRightWidth: 1,
                            }}>
                            <Text
                              style={{
                                color: 'black',
                                marginTop: 25,
                                textAlign: 'center',
                              }}>
                              {this.state.keyLabelNames[20]}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </ScrollView>
                </View>

                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                  }}>
                  <TouchableOpacity
                    onPress={() =>
                      this.scrollViewRef.current.scrollTo({
                        x: 5000,
                        y: 0,
                        animated: true,
                      })
                    }>
                    <Image
                      source={require('../images/forward_arrow2.png')}
                      style={{}}></Image>
                  </TouchableOpacity>
                </View>
              </View>
            ) : (
              <>
                <View
                  style={{
                    flexDirection: 'row',
                    marginLeft: 90,
                    marginRight: 50,
                    marginTop: 0,
                    justifyContent: 'center',
                    marginBottom: 0,
                    height: '7%',
                  }}>
                  <View></View>
                  <View style={{ marginLeft: 20 }}>
                    <Text style={{ fontSize: 17 }}>
                      Select the correct answer below
                    </Text>
                  </View>
                  <View></View>
                </View>

                <View
                  style={{
                    flex: 1,
                    margin: 20,
                    marginLeft: 24,
                    padding: 5,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  {this.state.buttonArray.map((item, i) => (
                    <TouchableOpacity
                      key={i}
                      onPress={() => this.clickEvent(i)}>
                      <View
                        style={{
                          ...styles.button,
                          backgroundColor: item.color,
                          borderRadius: item.radius,
                          width: 100,
                          height: 35,
                          marginRight: 10,
                          justifyContent: 'center',
                          marginBottom: 14,
                        }}>
                        <Text
                          style={{
                            color: 'white',
                            textAlign: 'center',
                            fontWeight: 'bold',
                          }}>
                          {item.options}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  ))}
                </View>
              </>
            )}
          </ImageBackground>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  button: { borderRadius: 20 },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#F5FCFF',
    flexDirection: 'row',
    marginTop: 30,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    width: 300,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    paddingBottom: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 10,
  },
  opac: {
    opacity: 0.9,
  },
});

export default PionoRiyaaz;
