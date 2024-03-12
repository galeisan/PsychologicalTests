import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export const CustomAnswerButton = (props) => {

    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={styles.button}>
                <Text style={styles.text}>
                    {props.title}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        textAlign: 'left',
        borderColor:'#A9E0B9',
        borderWidth: 2,
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 16
    },
    text: {
        color: 'black',
        fontWeight: 'bold',
    },
    textMedium: {
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 20,
    },
});
