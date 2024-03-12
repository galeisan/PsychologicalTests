import { observer } from "mobx-react";
import React, { useEffect, useState } from 'react';
import { View} from 'react-native';
import {useRoute} from "@react-navigation/native";
import {ButtonSize, ButtonType, CustomButton} from "../components/CustomButton";

export const ResultScreen = ({ navigation }) => {
    const route = useRoute();
    const { testName } = route.params;

    useEffect(() => {
        navigation.setOptions({ title: testName });
    }, [testName]);

    const handleTestPress = () => {
        navigation.navigate('Психологические тесты');
    };

    return (
        <View>
            <CustomButton
                title='На главную'
                size={ButtonSize.Medium}
                type={ButtonType.Primary}
                onPress={() => {
                    handleTestPress()
                }}
            />
        </View>
    )
};
