import { observer } from "mobx-react";
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList, SafeAreaView, ActivityIndicator, ScrollView } from 'react-native';

export const ListScreen = () => {
    return (
    <View style={styles.container}>
      <Text>Скоро здесь будут психологические тесты!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });