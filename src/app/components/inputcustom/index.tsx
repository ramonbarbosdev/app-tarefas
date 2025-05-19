
import {TextInput, TextInputProps, View} from "react-native";
import { styles } from "./styles";

function InputCustom({...rest}: TextInputProps)
{
    return(
        <TextInput  style={styles.input} {...rest} />
    )
}


export default InputCustom;