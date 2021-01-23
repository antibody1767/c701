import * as React from "react"
import {View, Text, StyleSheet} from "react-native"
export default class SearchScreen extends React.Component{
    render(){
        return(
            <View style={styles.conainer}>
                <Text>
                    SearchScreen
                </Text>
            </View>
        )
    }
} 
const styles = StyleSheet.create(
    {
        conainer: {
            alignItems: "center",
            justifyContent:"center",
        }
    }
)