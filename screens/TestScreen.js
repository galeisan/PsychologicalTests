import React, { useEffect, useState } from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import {useRoute} from "@react-navigation/native";
import {ButtonSize, ButtonType, CustomButton} from "../components/CustomButton";
import {CustomAnswerButton} from "../components/CustomAnswerButton";
import { observer } from "mobx-react";
import { Button, StyleSheet, Text, TouchableOpacity, TextInput,  SafeAreaView, ScrollView } from 'react-native';
import {testsMock} from "../mocks/TestsMock";
import {answersMock} from "../mocks/AnswersMock";

export const TestScreen = ({ navigation }) => {
    const route = useRoute();
    const { testName, testId } = route.params;
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [isTestComplete, setIsTestComplete] = useState(false);

    useEffect(() => {
        navigation.setOptions({ title: testName });
    }, [testName]);

    useEffect(() => {
        console.log(currentQuestionIndex)
    }, [currentQuestionIndex]);

    useEffect(() => {
        if(isTestComplete){
            navigation.navigate('Result', { testName, testId });
        }
    }, [isTestComplete]);

    const handleQuestionPress = () => {
        if (currentQuestionIndex+1 === testsMock[testId].questions.length){
            setIsTestComplete(true)
        }
        if (!isTestComplete){
            setCurrentQuestionIndex(currentQuestionIndex+1)
        }
    };

    const testList = testsMock;
    const answersList = answersMock.filter(el => el.test_id === testId);

    return (
        <View style={styles.container}>
            {testList && answersList && !isTestComplete ? (
                <>
                    <Text style={styles.title}>{testList[testId].questions[currentQuestionIndex].text}</Text>
                    <FlatList
                        data={answersList[currentQuestionIndex].answers}
                        renderItem={({item}) => (
                            <CustomAnswerButton
                                title={item.text}
                                size={ButtonSize.Medium}
                                type={ButtonType.Secondary}
                                onPress={() => {
                                    handleQuestionPress(testName, testId)
                                }}
                            />
                        )}
                    />
                </>
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
