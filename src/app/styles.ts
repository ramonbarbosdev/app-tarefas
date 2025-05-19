import { StyleSheet } from "react-native";

export const styles = StyleSheet.create
({
    container:
    {
        backgroundColor:'#fef6e4',
        flex: 1,
        justifyContent: "flex-start",
        padding: 15,


    },
    container_header:
    {
        height:'13%',
        justifyContent:"center",
        alignItems:"center",
    },
    header_text:
    {
        fontSize:20,
        fontWeight: "600",
        color:'#172c66'

    },
    container_add:
    {
        flexDirection:"row",
        width:'100%',
        height:'7%',
        justifyContent:"space-between",
        alignItems:"center",

    },
    container_list:
    {
        // justifyContent: 'flex-start',
        // alignItems:"center",
        height: '70%',
        width:'100%',

    },
     button:
    {
        backgroundColor:'#f582ae',
        borderRadius:12,
        alignItems:'center',
        justifyContent:"center",
        width:'20%',
        height:'100%' ,
    },
    container_footer:
    {
        height:'10%',
        flexDirection:"row"
    },
    footer_box:
    {
        width:'33.33%',
        justifyContent: "center",
        alignItems: "center"
    },
    footer_text:
    {
        fontSize: 15
    }
  
  

})