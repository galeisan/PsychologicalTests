import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useMemo} from 'react';

export const ButtonSize = {
    Large: 0,
    Medium: 1,
    Small: 2,
};

export const ButtonType = {
    Primary: 0,
    Secondary: 1,
    Flat: 2,
};

export const CustomButton = (props) => {
    const textStyle = useMemo(() => {
        switch (props.size) {
            case ButtonSize.Large:
                return styles.textLarge;

            case ButtonSize.Medium:
                return styles.textMedium;

            case ButtonSize.Small:
                return styles.textSmall;
        }
    }, [props.size]);

    const textWeight = useMemo(() => {
        switch (props.type) {
            case ButtonType.Primary:
                return styles.textBold;

            case ButtonType.Secondary:
                return styles.textBold;

            case ButtonType.Flat:
                return styles.textFlat;
        }
    }, [props.type]);

    const textColor = useMemo(() => {
        switch (props.type) {
            case ButtonType.Primary:
                return '#000000';

            case ButtonType.Secondary:
                return '#000000';

            case ButtonType.Flat:
                return '#000000';
        }
    }, [props.type]);


    const borderRadius = useMemo(() => {
        switch (props.size) {
            case ButtonSize.Large:
                return 18;

            case ButtonSize.Medium:
                return 16;

            case ButtonSize.Small:
                return 14;
        }
    }, [props.size]);

    const backgroundColor = useMemo(() => {
        switch (props.type) {
            case ButtonType.Primary:
                return '#A9E0B9';

            case ButtonType.Secondary:
                return '#FFFFFF';

            case ButtonType.Flat:
                return 'transparent';
        }
    }, [props.type]);

    const padding = useMemo(() => {
        switch (props.size) {
            case ButtonSize.Large:
                return 12;

            case ButtonSize.Medium:
                return 10;

            case ButtonSize.Small:
                return 6;
        }
    }, [props.size]);

    const minWidth = useMemo(() => {
        switch (props.size) {
            case ButtonSize.Large:
                return '100%';

            case ButtonSize.Medium:
                return '100%';

            case ButtonSize.Small:
                return '100%';
        }
    }, [props.size]);

    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={[styles.button, {backgroundColor, borderRadius, padding, minWidth}]}>
                <Text style={[styles.text, textStyle, textWeight, {color: textColor}]}>
                    {props.title}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor:'#A9E0B9',
        borderWidth: 2,
    },
    buttonLarge: {
        paddingVertical: 100,
        paddingHorizontal: 30,
    },
    buttonMedium: {
        paddingVertical: 10,
        paddingHorizontal: 16,
    },
    buttonSmall: {
        paddingVertical: 10,
        paddingHorizontal: 12,
    },
    text: {
        color: 'black',
    },
    textFlat: {
        fontWeight: '400',
    },
    textBold: {
        fontWeight: 'bold',
    },
    textLarge: {
        fontSize: 18,
        fontWeight: '500',
        lineHeight: 24,
    },
    textMedium: {
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 20,
    },
    textSmall: {
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 20,
        letterSpacing: 0.1,
    },
});
