import {StyleSheet, Text, View} from 'react-native';


export const CustomContainer = ({children}) => {
    return (
            <View style={styles.container}>
                {children}
            </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 20,
        gap: 20,
        borderRadius: 15,
        elevation: 12,
    },
    text: {
        color: 'black',
        fontSize: 18,
        fontWeight: '500',
        lineHeight: 24,
    },
});
