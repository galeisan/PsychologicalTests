import React, { useEffect } from 'react';
import {View} from 'react-native';
import { useRoute } from '@react-navigation/native';
import {ButtonSize, ButtonType, CustomButton} from "../components/CustomButton";
import { observer } from "mobx-react";
import { Button, StyleSheet, Text, TouchableOpacity, TextInput, FlatList, SafeAreaView, ActivityIndicator, ScrollView } from 'react-native';
import {testsMock} from "../mocks/TestsMock";
import {CustomContainer} from "../components/CustomContainer";

export const InfoScreen = ({ navigation }) => {
    const route = useRoute();
    const { testName, testId } = route.params;

    useEffect(() => {
        navigation.setOptions({ title: testName});
    }, [testName]);

    const handleTestPress = (testName, testId) => {
        navigation.navigate('Test', { testName, testId });
    };

    const testList = testsMock;

    return (
        <View style={styles.container}>
            <CustomContainer>
                <Text style={styles.title}>{testList[testId].name}</Text>
                <Text>{testList[testId].description}</Text>
                <CustomButton
                    title={'Начать'}
                    size={ButtonSize.Medium}
                    type={ButtonType.Secondary}
                    onPress={() => {
                        handleTestPress(testName, testId)
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
