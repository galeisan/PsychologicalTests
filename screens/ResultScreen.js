import { observer } from "mobx-react";
import React, { useEffect, useState } from 'react';
import { View} from 'react-native';
import {useRoute} from "@react-navigation/native";
import {ButtonSize, ButtonType, CustomButton} from "../components/CustomButton";
import {CustomContainer} from "../components/CustomContainer";
import { Button, StyleSheet, Text, TouchableOpacity, TextInput, FlatList, SafeAreaView, ActivityIndicator, ScrollView } from 'react-native';
import {testsMock} from "../mocks/TestsMock";

export const ResultScreen = ({ navigation }) => {
    const route = useRoute();
    const { testName, testId } = route.params;

    useEffect(() => {
        navigation.setOptions({ title: testName });
    }, [testName]);

    const handleTestPress = () => {
        navigation.navigate('Психологические тесты');
    };

    const testList = testsMock;

    return (
        <View style={styles.container}>
            <CustomContainer>
                <Text style={styles.title}>Ваш результат:</Text>
                <Text>{testList[testId].results[testId].title}</Text>
                <Text>{testList[testId].results[testId].description}</Text>
                <CustomButton
                    title={'На главную'}
                    size={ButtonSize.Medium}
                    type={ButtonType.Secondary}
                    onPress={() => {
                        handleTestPress()
                    }}
                />
            </CustomContainer>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    title: {
        fontWeight: 'bold'
    }
});
