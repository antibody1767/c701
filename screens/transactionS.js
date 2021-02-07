import * as React from "react"
import {View, Text, StyleSheet,TouchableOpacity, Button, TextInput} from "react-native"
import * as Permissions from "expo-permissions";
import {BarCodeScanner} from "expo-barcode-scanner";
import * as firebase from "firebase";
import db from "../config";
export default class TransactionScreen extends React.Component{
    constructor(){
        super();
        this.state={
            hasCameraPermission: null,
            scanned: false,
            scannedBookId: "",
            scannedStudentID:"",
            buttonState:"normal"
        }
    }
    getPermissions=async(id)=>{
        const {status}= await Permissions.askAsync(Permissions.CAMERA)
        this.setState({
            hasCameraPermission: status==="granted",
            buttonState: id,
            scanned:false
        })
    }
    handleBarcodeScanner=async({ type,data})=>{
        var {bookState}=this.state
        if(bookState==="bookId"){
            this.setState({
                scanned: true,
                scannedBookId:data,
                buttonState: "normal",
            })
        }else if(bookState==="studentId"){
            this.setState({
                scanned: true,
                scannedStudentID:data,
                buttonState: "normal",
            })
        }
        
    }

    handleTransaction=()=>{
        db.collection("books")
    }
    render(){
        if(this.state.hasCameraPermission===true&& this.state.buttonState !== "normal" ){
            return(
                <BarCodeScanner style={StyleSheet.absoluteFillObject} onBarCodeScanned={
                    this.state.scanned?undefined: this.handleBarcodeScanner
                }/>
            )
        }else if(this.state.buttonState==="normal"){

        
        return(
            <View style={styles.conainer} > 
            <Image style={{width:4,height:4}}source={require("../assets/booklogo.jpg")}/>
                <Text>
                    {this.state.hasCameraPermission===true? this.state.scannedData:"requestCameraPermission"}
                </Text>
                <View>
                    <TextInput style = {styles.input} placeholder="book ID" value={this.state.scannedBookId}>

                    </TextInput> 
                    <TouchableOpacity style={styles.QR} onPress={()=>{
                        this.getPermissions("bookId")
                    }}>
                        <Text>Scan</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TextInput style = {styles.input} placeholder="student ID" value={this.state.scannedStudentID}>
                    
                    </TextInput> 
                    <TouchableOpacity style={styles.QR} onPress={()=>{
                        this.getPermissions("StudentId")}}>
                        <Text>Scan</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity 
            </View>
        )}
    }
} 
const styles = StyleSheet.create(
    {
        conainer: {
            alignItems: "center",
            justifyContent:"center",
            marginTop: 50,
        },
        QR:{
            backgroundColor:"red",
            padding:20,
            marginTop: 100,
        },
        input: {
            borderWidth: 2
        }
    }
)