
import {FlatList, Text, TouchableOpacity, View} from "react-native";
import { styles } from "./styles";
import InputCustom from "./components/inputcustom";
import { useEffect, useState } from "react";
import ButtonCustom from "./components/buttoncustom";
import TaskItem from "./components/taskitem";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Task } from "./models/Task";
import { Feather } from '@expo/vector-icons'; // Se estiver usando Expo


function Index()
{
    const [text , setText] = useState("");
    const [list, setList] = useState<Task[]>([]);
    const [contTotal, setContTotal] = useState(0);
    const [contCheck, setContCheck] = useState<number[]>([]);
    const [contPendente, setContPendente] = useState(0);

    const setData= async (value: any) => {
        try {
        //    return  await AsyncStorage.setItem('list', value);
        } catch (e) {
        }
    };


    async function getData()
    {
        try {
            const data = await AsyncStorage.getItem("list");
            if (data)  setList(JSON.parse(data));
            setContTotal(list.length )
            setContPendente(list.length - contCheck.length);
            

        } catch (e) {
            console.error("Erro ao carregar dados do AsyncStorage", e);
        }
    }

    useEffect(() => {
        getData();
    },[list, contCheck]);

    function addTask()
    {
        if(text.trim())
        {
            setList(anteriorList => [...anteriorList, newTask()]);
            setText("");
        }
        setData(list);
    }

    function removeTask(id: number)
    {
        
        setList(anterior => {
                const updated = anterior.filter(t => t.id !== id);
                setData(updated);
                return updated;
                });

        setContCheck(anterior =>
                    anterior.includes(id)
                        ? anterior.filter(i => i !== id)
                        : anterior
                    );
        }

    function newTask()
    {
       const novaTarefa: Task = {
                id: Date.now(), 
                name: text.trim()
            };
        return novaTarefa
    }

    const  selectTask = (task: any) =>
    {
        setContCheck(anterior =>  anterior.includes(task)  ? anterior.filter(id => id !== task) // desmarca
                                                    : [...anterior, task] // marca
                    );
    }


    return(
        <View style={styles.container} >

            <View style={styles.container_header}>
                <Text style={styles.header_text}>Lista de Tarefas</Text>
            </View>

            <View style={styles.container_add}>
                <InputCustom onChangeText={setText} value={text}/>
                <TouchableOpacity style={styles.button} onPress={() => addTask()}>
                    <Feather name="plus" size={24} color="white" />
                </TouchableOpacity>
            </View>

            <View style={styles.container_list}>
                <TaskItem data={list} onRemove={removeTask} onSelect={(task) => selectTask(task)} />
            </View>

            <View style={styles.container_footer}>
                <View style={styles.footer_box}>
                    <Text style={styles.footer_text}>{contPendente} Pendentes</Text>
                </View>
                <View style={styles.footer_box}>
                    <Text style={styles.footer_text}>{contCheck.length} Concluidos</Text>
                </View>
                <View style={styles.footer_box}>
                    <Text style={styles.footer_text}>{contTotal} Total</Text>
                </View>
            </View>
              
        </View>
    )
}


export default Index;