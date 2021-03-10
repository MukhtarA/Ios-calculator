import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import styles from './styles'

const Row = ({children}) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
};

export default Row;
