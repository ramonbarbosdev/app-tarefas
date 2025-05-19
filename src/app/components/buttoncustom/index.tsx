
import {Text, TouchableOpacity, TouchableOpacityProps, View} from "react-native";
import { styles } from "./styles";

type  Props = TouchableOpacityProps &
{
      title: string
}

function ButtonCustom({title ,...rest}: Props)
{
    return(
       <TouchableOpacity style={styles.button}  activeOpacity={0.3} {...rest}>
            <Text style={styles.title}>{title}</Text>
       </TouchableOpacity>
    )
}


export default ButtonCustom;