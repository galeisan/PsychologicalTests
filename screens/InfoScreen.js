import React, { useEffect } from 'react';
import {View} from 'react-native';
import { useRoute } from '@react-navigation/native';
import {ButtonSize, ButtonType, CustomButton} from "../components/CustomButton";

export const InfoScreen = ({ navigation }) => {
    const route = useRoute();
    const { testName } = route.params;

    useEffect(() => {
        navigation.setOptions({ title: testName });
    }, [testName]);

    const handleTestPress = (testName) => {
        navigation.navigate('Test', { testName });
    };

    return (
        <View>
            <CustomButton
                title='Начать'
                size={ButtonSize.Medium}
                type={ButtonType.Primary}
                onPress={() => {
                    handleTestPress(testName)
                }}
            />
        </View>
    );
};
