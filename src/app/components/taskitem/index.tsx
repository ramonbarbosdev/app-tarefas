
import {FlatList, Text, TouchableOpacity, View} from "react-native";
import { styles } from "./styles";
import ButtonCustom from "../buttoncustom";
import { useState } from "react";
import Checkbox from 'expo-checkbox';
import { Task } from "../../models/Task";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Feather } from "@expo/vector-icons";

type props =
{
    data: Task[],
    onRemove: (id: number) => void;
    onSelect: (task: any) => void
}

function TaskItem({data, onRemove, onSelect}:  props)
{
    const [isChecked, setChecked] = useState<number[]>([])

    function toggleCheckbox(id: number)
    {
        setChecked(prev =>
            prev.includes(id)  ? prev.filter(itemId => itemId !== id) : [...prev, id] // marca
        );
        onSelect(id)
    }

    const Item = ({ item }:{ item: Task }) => 
    {
        const checked = isChecked.includes(item.id);

        return(
              <View style={styles.list} >
                <Checkbox
                    style={styles.checkbox}
                    value={checked}
                    onValueChange={() => toggleCheckbox(item.id)}
                    color={checked ? "#f582ae" : undefined}
                    
                />

            <Text style={[ styles.taskText, checked && { textDecorationLine: "line-through", color: "gray" },]}>
                    {item.name}
            </Text>

           <TouchableOpacity onPress={() => onRemove(item.id)}>
                <Feather name="trash" size={24} color="#001858"   />
           </TouchableOpacity>

        </View>
        )
    };

    return(
        <View >
            <FlatList
            data={data}
            renderItem={({item}) => <Item item={item} />}
            keyExtractor={(item) => item.id.toString()}
            />
        </View>
    )
}


export default TaskItem;