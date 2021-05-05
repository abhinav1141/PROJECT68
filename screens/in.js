import * as React from "react"
import {Text,View} from "react-native"

export default class InScreen extends React.Component{
    render(){
        return(
            <View style={{ flex: 1 ,backgroundColor:"green"}}>
                <Text style={{backgroundColor:"red",marginTop:10,fontSize:30,alignSelf:"center"}}>BUZZ APP</Text>
                 
                 <Text style={{color:"pink",fontSize:30,alignSelf:"center",marginTop:250}}>INSTAGRAM</Text> 
        
                 </View>
        
        )
    }
}