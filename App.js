import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Alert, Pressable } from 'react-native';
import NumericInput from 'react-native-numeric-input'
import { RadioButton, Switch } from "react-native-paper"
import { useState } from 'react/cjs/react.development';
import { Styles, SpecialStyles } from "./styles/Styles"


export default function App() {

  const [gender, setGender] = useState("male");
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [hours, setHours] = useState(0);
  const [result, setResult] = useState(0);

  function calculate() {
    let litres = bottles * 0.33
    let grams = litres * 8 * 4.5
    let burning = weight / 10
    let gramsLeft = grams - burning * hours

    if (weight <= 0) {
      Alert.alert("Incorrect weight")
      return;
    }

    if(bottles === 0) {
      setResult(0)
    }

    if (gender == "male") {
      setResult(gramsLeft / (weight * 0.7))
    }
    else{
      setResult(gramsLeft / (weight * 0.6))
    }


  }


  const [isSpecial, setSpecial] = useState(false);

  const myStyle = isSpecial ? SpecialStyles : Styles;
  const info = isSpecial ? "Dark mode on" : "Dark mode off"
  const selected = isSpecial ? SpecialStyles: Styles;

  

  return (
    <View>
      <View style={myStyle.container}>
          <Switch
            value={isSpecial}
            onValueChange={() => setSpecial(!isSpecial)}
            thumbColor="#76c2e2"
            trackColor={{ false: "#99cde3", true: "#ababab" }}
            style={myStyle.darkmode}
          >
          </Switch>
          <Text>{info}</Text>
      
      
        <Text style={Styles.title}>Alcometer</Text>
        <Text style={Styles.text}>Weight:</Text>
        <TextInput
          keyboardType='number-pad'
          onChangeText={(n) => setWeight(Number.parseInt(n))}
          placeholder="Your weight (kg)"
          style={Styles.textInput}
        />
        <View>
        <Text style={Styles.text}>Bottles</Text>
        <NumericInput
          onChange={(b) => setBottles(b)}
          upDownButtonsBackgroundColor="#7cd0f4"
          type='up-down'
          rounded
          borderColor={"#00b3ff"}
          minValue={0}
        />
        </View>
        <View>
        <Text style={Styles.text}>Hours</Text>
        <NumericInput
          onChange={(h) => setHours(h)}
          upDownButtonsBackgroundColor="#7cd0f4"
          type='up-down'
          rounded
          borderColor={"#00b3ff"}
          minValue={0}
        />
        </View>
        <RadioButton.Group
          onValueChange={newValue => setGender(newValue)}
          value={gender}
        >
          <View style={Styles.radioStyle}>
            <RadioButton value="male" />
            <Text>Male</Text>
            <RadioButton value="female" />
            <Text>Female</Text>
          </View>
        </RadioButton.Group>
        <Pressable onPress={calculate} style={Styles.button}>
          <Text style={Styles.buttonText}>Calculate</Text>
        </Pressable>
        <Text style={Styles.result}>{result.toFixed(2)} ‰</Text>
      </View>
    </View>
  );
}

