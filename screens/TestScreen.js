import React, { useEffect, useState } from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import {useRoute} from "@react-navigation/native";
import {ButtonSize, ButtonType, CustomButton} from "../components/CustomButton";
import {CustomAnswerButton} from "../components/CustomAnswerButton";
import { observer } from "mobx-react";
import { Button, StyleSheet, Text, TouchableOpacity, TextInput,  SafeAreaView, ScrollView } from 'react-native';
import {testsMock} from "../mocks/TestsMock";

export const TestScreen = ({ navigation }) => {
    const route = useRoute();
    const { testName } = route.params;

    useEffect(() => {
        navigation.setOptions({ title: testName });
    }, [testName]);

    const handleTestPress = (testName) => {
        navigation.navigate('Result', { testName });
    };

    const testList = testsMock;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{testList[0].questions[0].text}</Text>
            {testList ? (
                <FlatList
                    data={testList[0].answers}
                    renderItem={({item}) => (
                        <CustomAnswerButton
                            title={item.text}
                            size={ButtonSize.Medium}
                            type={ButtonType.Secondary}
                            onPress={() => {
                                handleTestPress(testName)
                            }}
                        />
                    )}
                />
            ) : (
                <ActivityIndicator />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16
    },
});
