import {useRef} from 'react';
import {Animated, Easing} from 'react-native';

export const useAnimation = () => {
  const animatedOpacity = useRef(new Animated.Value(0)).current;
  const animatedTop = useRef(new Animated.Value(0)).current;

  const fadeIn = ({duration = 500, toValue = 1, callBack = () => {}}) => {
    // Animated.timing(animatedTop, {
    //   toValue: 0,
    //   duration: 700,
    //   useNativeDriver: true,
    //   easing: Easing.bounce,
    // }).start(() => console.log('Animation ended'));

    Animated.timing(animatedOpacity, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: true,
    }).start(callBack);
  };

  const fadeOut = ({duration = 500, toValue = 0, callBack = () => {}}) => {
    Animated.timing(animatedOpacity, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: true,
    }).start(callBack);
  };
  //() => animatedTop.resetAnimation();

  const startMovingTopPosition = ({
    initialPosition = 0,
    toValue = 0,
    duration = 300,
    easing = Easing.linear,
    callBack = () => {},
  }) => {
    animatedTop.setValue(initialPosition);
    Animated.timing(animatedTop, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: true,
      easing: easing,
    }).start(callBack);
  };

  return {
    //properties
    animatedOpacity,
    animatedTop,
    //Methods
    fadeIn,
    fadeOut,
    startMovingTopPosition,
  };
};
