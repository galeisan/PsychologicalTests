import { observer } from "mobx-react";
import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import {ButtonSize, ButtonType, CustomButton} from "../components/CustomButton";
import {CustomContainer} from "../components/CustomContainer";


export const ListScreen = () => {
    return (
    <View style={styles.container}>
        <CustomContainer>
      <Text>Скоро здесь будут психологические тесты!</Text>
        <CustomButton
            title="Начать"
            size={ButtonSize.Medium}
            type={ButtonType.Primary}
            onPress={() => {
                console.log('Button pressed')
            }}
        />
        <CustomButton
            title="Начать"
            size={ButtonSize.Medium}
            type={ButtonType.Secondary}
            onPress={() => {
                console.log('Button pressed')
            }}
        />
        <CustomButton
            title="Я не чувствую себя расстроенным, печальным"
            size={ButtonSize.Medium}
            type={ButtonType.Flat}
            onPress={() => {
                console.log('Button pressed')
            }}
        />
      </CustomContainer>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      gap: 15,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 20,
    },
  });
