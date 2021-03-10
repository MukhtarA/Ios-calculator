import React from 'react';
import { Text, Pressable, Dimensions, TouchableOpacity } from 'react-native';
import styles from './styles'

const Button = ({onPress, title, double, color}) => {
    const buttonStyle = [styles.container];
    if(double){
        buttonStyle.push(styles.buttonDouble)
    }
    if(color === 'orange'){
        buttonStyle.push(styles.buttonOrange)
    }else if(color === 'grey'){
        buttonStyle.push(styles.buttonGray)
    }

    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
};

export default Button;

