import * as React from "react"
import {Text,View} from "react-native"

export default class FbScreen extends React.Component{
    render(){
        return(
            <View style={{ flex: 1 ,backgroundColor:"yellow"}}>
                <Text style={{backgroundColor:"red",marginTop:10,fontSize:30,alignSelf:"center"}}>BUZZ APP</Text>
                <Text style={{color:"blue",fontSize:30,alignSelf:"center",marginTop:250}}>FACEBOOK</Text>
    
                 </View>
        
        )
    }
}