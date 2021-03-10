import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Row from "./src/components/Row/Row";
import Button from "./src/components/Button/Button";

export default function App() {
  const [currentValue, setCurrentValue] = useState("0");
  const [previousValue, setPreviousValue] = useState("0");
  const [operator, setOperator] = useState(null);
  const handleTap = (type, value) => {
    if (type === 'result') {
      setCurrentValue(`${currentValue}${value}`)
    }
    if (type === 'operator') {
      setOperator(value);
      setPreviousValue(currentValue);
      setCurrentValue("0");
    }
    if (type === 'clear') {
      setCurrentValue("0");
      setOperator(null);
      setPreviousValue(null);
    }
    if (type === 'negation') {
      setCurrentValue(`${parseFloat(currentValue) * - 1}`)
    }
    if (type === 'percent') {
      setCurrentValue(`${parseFloat(currentValue) * 0.01}`)
    }
    if (type === 'equal') {
      const current = parseFloat(currentValue);
      const previous = parseFloat(previousValue);
      if (operator === '+') {
        setCurrentValue(previous + current);
        setOperator(null);
        setPreviousValue(null);
      } if (operator === '-') {
        setCurrentValue(previous - current);
        setOperator(null);
        setPreviousValue(null);
      } if (operator === '/') {
        setCurrentValue(previous / current);
        setOperator(null);
        setPreviousValue(null);
      } if (operator === '*') {
        setCurrentValue(previous * current);
        setOperator(null);
        setPreviousValue(null);
      }
    }
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <SafeAreaView style={styles.activeContainer}>
        <Text style={styles.value}>{currentValue}</Text>

        <Row>
          <Button title="C" onPress={() => handleTap('clear')}/>
          <Button title="+/-" onPress={() => handleTap('negation')}/>
          <Button title="%" onPress={() => handleTap('percent')}/>
          <Button title="/" color="orange" onPress={() => handleTap('operator', '/')}/>
        </Row>

        <Row>
          <Button title="7" color="grey" onPress={() => handleTap('result', 7)}/>
          <Button title="8" color="grey" onPress={() => handleTap('result', 8)}/>
          <Button title="9" color="grey" onPress={() => handleTap('result', 9)}/>
          <Button title="X" color="orange" onPress={() => handleTap('operator', '*')}/>
        </Row>

        <Row>
          <Button title="4" color="grey" onPress={() => handleTap('result', 4)}/>
          <Button title="5" color="grey" onPress={() => handleTap('result', 5)}/>
          <Button title="6" color="grey" onPress={() => handleTap('result', 6)}/>
          <Button title="-" color="orange" onPress={() => handleTap('operator', '-')}/>
        </Row>
        <Row>
          <Button title="1" color="grey" onPress={() => handleTap('result', 1)}/>
          <Button title="2" color="grey" onPress={() => handleTap('result', 2)}/>
          <Button title="3" color="grey" onPress={() => handleTap('result', 3)}/>
          <Button title="+" color="orange" onPress={() => handleTap('result', '+')}/>
        </Row>
        <Row>
          <Button double title="0" color="grey" onPress={() => handleTap('result', 0)}/>
          <Button title="." color="grey" onPress={() => handleTap('result', '.')}/>
          <Button title="=" color="orange" onPress={() => handleTap('equal')}/>
        </Row>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3c3c3d',
    justifyContent: 'flex-end',
  },
  activeContainer: {
    marginBottom: 50,
  },
  value: {
    color: '#fff',
    fontSize: 50,
    textAlign: 'right',
    marginRight: 20,
    marginBottom: 20,
  }
});
