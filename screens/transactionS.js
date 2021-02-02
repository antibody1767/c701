import * as React from "react"
import {View, Text, StyleSheet,TouchableOpacity, Button} from "react-native"
import * as Permissions from "expo-permissions";
import {BarCodeScanner} from "expo-barcode-scanner";
export default class TransactionScreen extends React.Component{
    constructor(){
        super();
        this.state={
            hasCameraPermission: null,
            scanned: false,
            scannedData: "",
            buttonState:"normal"
        }
    }
    getPermissions=async()=>{
        const {status}= await Permissions.askAsync(Permissions.CAMERA)
        this.setState({
            hasCameraPermission: status==="granted",
            buttonState: "clicked",
            scanned:false
        })
    }
    handleBarcodeScanner=async({ type,data})=>{
        this.setState({
            scanned: true,
            scannedData:data,
            buttonState: "normal",
        })
    }
    render(){
        if(this.state.hasCameraPermission===true&& this.state.buttonState=== "clicked" ){
            return(
                <BarCodeScanner style={StyleSheet.absoluteFillObject} onBarCodeScanned={
                    this.state.scanned?undefined: this.handleBarcodeScanner
                }/>
            )
        }else if(this.state.buttonState==="normal"){

        
        return(
            <View style={styles.conainer}>
                <Text>
                    this.state.hasCameraPermission===true? this.state.scannedData:"requestCameraPermission"
                </Text>
                <TouchableOpacity style={styles.QR} onPress={this.getPermissions}>
                    <Text>Scan QR code </Text>
                    
                </TouchableOpacity>
            </View>
        )}
    }
} 
const styles = StyleSheet.create(
    {
        conainer: {
            alignItems: "center",
            justifyContent:"center",
        },
        QR:{
            backgroundColor:"red",
            padding:20,
            marginTop: 100,
        }
    }
)