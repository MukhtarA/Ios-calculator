import {Dimensions, StyleSheet} from "react-native";

const screen = Dimensions.get('window');
const buttonWidth = screen.width / 4;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3c3c3d',
        alignItems: 'center',
        justifyContent: 'center',
        height: buttonWidth - 10,
        borderColor: '#222224',
        borderWidth: 0.5,
    },
    buttonDouble: {
        width: screen.width / 2,
        flex: 0,
        alignItems: 'center',
    },
    buttonOrange: {
        backgroundColor: '#ff9f00'
    },

    buttonGray: {
        backgroundColor: '#717476'
    },
    title: {
        color: '#fff',
        fontSize: 25,
    }
});

export default styles;
