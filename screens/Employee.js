import * as React from 'react';
import { Text, View, TextInput, Button, Alert ,Input, StyleSheet} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { addItem } from '../redux_folder/reducer';
import {useState} from "react";


export default function EmployeeScreen(props) {
    const {register, control, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const [value, setValue,firstName,lastName,text] = useState('')

const dispatch = useDispatch()

const onSaveNote = value => {
  dispatch(addItem(value))
  props.navigation.navigate('Home')
}
  
    return (
<View style={styles.MainContainer}>
        <Controller
          control={control}
          rules={{
           required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
              
            <TextInput
          
          placeholder="Enter First Name in TextInput"

          underlineColorAndroid='transparent'
          
          style={styles.TextInputStyleClass}/>

          )}
          name="firstName"
          defaultValue=""
          onChangeText={firstName => setValue(firstName)}

          //onChangeText={(text) => this.setState({firstName: text})}
//

        />
        {errors.firstName && <Text>This is required.</Text>}
        <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={text => setValue(text)}
        defaultValue={text}
      />

        <Controller
          control={control}
          rules={{
           maxLength: 20,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
          
          placeholder="Enter Last Name in TextInput"

          underlineColorAndroid='transparent'
          
          style={styles.TextInputStyleClass}/>

          )}
          name="lastName"
          defaultValue=""
          onChangeText={lastName => (lastName)}
          //onChangeText={(text) => this.setState({lastName: text})}


        />
  
        <Button title="Submit" 
          onPress={() => onSaveNote(firstName,lastName,text)}/>

      </View>
      
      );
    }

    const styles = StyleSheet.create({

        MainContainer :{
        
        justifyContent: 'center',
        flex:1,
        margin: 10,
        padding:10
        
        },
        
        TextInputStyleClass:{
        
        textAlign: 'center',
        
        height: 50,
        
         borderWidth: 2,
         
         borderColor: '#e91e63',
         
         borderRadius: 20 ,
        
         backgroundColor : "#FFFFFF"
        
        }
        
        });
        
