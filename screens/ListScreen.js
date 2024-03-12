import { observer } from "mobx-react";
import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    ActivityIndicator,
} from 'react-native';
import {ButtonSize, ButtonType, CustomButton} from "../components/CustomButton";
import {testsMock} from "../mocks/TestsMock";


export const ListScreen =() => {

    const testList = testsMock;

    return (
    <View style={styles.container}>
        {testList ? (
            <FlatList
                data={testList}
                renderItem={({item}) => (
                    <CustomButton
                        title={item.name}
                        size={ButtonSize.Medium}
                        type={ButtonType.Primary}
                        onPress={() => {
                            console.log(item)
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
  });
