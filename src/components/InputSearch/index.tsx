/* eslint-disable react-native/no-inline-styles */
import React, { useRef, forwardRef, useState } from "react";
import {
  Animated,
  Easing,
  TextInputProps,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  Dimensions,
} from "react-native";
import {
  Container,
  Input,
  IconContainer,
  SearchIcon,
  BackIcon,
  IconButton,
  CloseIcon,
} from "./styles";

export const { width } = Dimensions.get("window");

interface InputSearch extends TextInputProps {
  onBackPress(): void;
  onClear(): void;
}

const InputSearch = forwardRef<React.ReactNode, InputSearch>(
  (
    {
      onFocus,
      onBlur,
      onBackPress,
      onEndEditing,
      onClear,
      onChangeText,
      ...rest
    },
    ref: any
  ) => {
    const iconTranslateX = useRef(new Animated.Value(60)).current;

    const inputContainerWidth = width * 0.8;

    const [text, setText] = useState("");
    const [expanded, setExpanded] = useState(false);

    const animateTo = (to: number) => {
      Animated.timing(iconTranslateX, {
        toValue: to,
        duration: 300,
        easing: Easing.bezier(0.2, 1.07, 0.84, 0.98),
        useNativeDriver: false,
      }).start();
    };

    const _onFocus = (evt: NativeSyntheticEvent<TextInputFocusEventData>) => {
      onFocus && onFocus(evt);
      animateTo(10);
      setExpanded(true);
      ref.current.focus();
    };

    const _onBackPress = (
      evt: NativeSyntheticEvent<TextInputFocusEventData>
    ) => {
      onBackPress && onBackPress();
      animateTo(60);
      setExpanded(false);
      setText("");
      ref.current.clear();
      ref.current.blur();
    };

    const _onBlur = (evt: NativeSyntheticEvent<TextInputFocusEventData>) => {
      onBlur && onBlur(evt);
      animateTo(60);
      setExpanded(false);
    };

    const _onClear = (evt: NativeSyntheticEvent<TextInputFocusEventData>) => {
      onClear && onClear();
      ref.current.clear();
      setText("");
    };

    const _onChangeText = (textSearch: string) => {
      onChangeText && onChangeText(textSearch);
      setText(textSearch);
    };

    const isCleanActive = expanded && text.trim() !== "";

    return (
      <Container style={{ width: inputContainerWidth }}>
        <Input
          ref={ref}
          numberOfLines={1}
          onFocus={_onFocus}
          onBlur={_onBlur}
          onChangeText={_onChangeText}
          {...rest}
          expanded={expanded}
          onEndEditing={onEndEditing}
          style={{
            textAlign: expanded ? "left" : "center",
          }}
        />

        <IconContainer
          style={{
            transform: [{ translateX: iconTranslateX }],
          }}
        >
          {expanded ? (
            <IconButton onPress={_onBackPress}>
              <BackIcon />
            </IconButton>
          ) : (
            <IconButton onPress={_onFocus}>
              <SearchIcon />
            </IconButton>
          )}
        </IconContainer>
        {isCleanActive && (
          <IconContainer style={{ right: 20 }}>
            <IconButton onPress={_onClear}>
              <CloseIcon />
            </IconButton>
          </IconContainer>
        )}
      </Container>
    );
  }
);

export default InputSearch;
