import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,Button, TouchableOpacity, Image, ImageBackground, } from 'react-native';
import React from "react";



const First =(props)=>{
    return(
        <View style={styles.container}>
            <View style={styles.container1}>
                
                <Text style={styles.shop1}>Online Shopping</Text>
                <Text style={styles.text}>online shopping here online shopping here online shopping
                online shopping here online shopping here online shopping here
                online shopping here online shopping here online shopping here
                online shopping here online shopping here online shopping here
                online shopping here online shopping here online shopping here
                </Text>
            </View>


            <View>
           <Image style= {styles.image} source={require("../assets/1.png")}></Image>
            </View>

            <View >
                <TouchableOpacity style={styles.next} onPress={()=>{props.navigation.navigate("Second")}}>
                    <Text style={{ color: "white" }}>Next</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.btn}>
                <Text style={styles.round}></Text>
                <Text style={styles.round1}></Text>
                <Text style={styles.round1}></Text>
                <TouchableOpacity onPress={()=>{props.navigation.navigate("Second")}}>
                <Text style={styles.skp}>Skip</Text >
                </TouchableOpacity>
                
            </View>
            </View>
    );
}

export default First;

const styles = StyleSheet.create({
    container: {
      flex: 10,
    //   alignItems: "center",
    //   justifyContent: "center",
    },

shop: {
    backgroundColor: "red",

},

shop1: {
    marginLeft: 50,
    marginTop: 20,
    marginBottom: 10,
    fontSize: 20,
      fontWeight: "bold",
    // alignItems: "center",
    // justifyContent: "center",
},

image: {
    height: 100,
    width: 100,
    // position: "absolute",
      top: 20,
      width: 400,
      height: 350,
      marginBottom:30,
      marginLeft: 30,
      
},

container1: {
    // flex: 3,
},

skp: {
    color: "grey",
    marginTop:30,
    marginLeft: 80,

},

btn: {
    flexDirection: "row",
},

round: {
    width: 10,
    height: 10,
    backgroundColor: "blue",
    marginTop:30,
    marginLeft: 180,
},

next: {
    padding: 16,
    width: "60%",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
    marginLeft: 80,
    marginTop: 50,
},

round1:{
    width: 8,
    height: 8,
    backgroundColor: "grey",
    marginTop:30,
 marginLeft: 2,
},



})

  

