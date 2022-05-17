import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,Button, TouchableOpacity, Image, ImageBackground, } from 'react-native';
import React from "react";



const Third =(props)=>{
    return(
        <View style={styles.container}>
            <View style={styles.container1}>
                
                <Text style={styles.shop1}>Payment Successful</Text>
                <Text style={styles.text}>online shopping here online shopping here online shopping
                online shopping here online shopping here online shopping here
                online shopping here online shopping here online shopping here
                online shopping here online shopping here online shopping here
                online shopping here online shopping here online shopping here
                </Text>
            </View>


            <View>
           <Image style= {styles.image} source={require("../assets/3.png")}></Image>
            </View>

            <View >
                <TouchableOpacity  style={styles.next} onPress={()=>{props.navigation.navigate("First")}}>
                    <Text style={{ color: "white" }}>Get started</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.btn}>
            <TouchableOpacity onPress={()=>{props.navigation.navigate("Second")}}>
            <Text style={styles.prv}>Previous</Text>
            </TouchableOpacity>
                <Text style={styles.round}></Text>
                <Text style={styles.round1}></Text>
                <Text style={styles.round2}></Text>
                {/* <TouchableOpacity onPress={()=>{props.navigation.navigate("First")}}>
                <Text style={styles.skp}>Skip</Text >
                </TouchableOpacity>
                 */}
            </View>
            </View>
    );
}

export default Third;

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

btn: {
    flexDirection: "row",
},

round: {
    width: 8,
    height: 8,
    backgroundColor: "grey",
    marginTop:30,
    marginLeft: 150,
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

round2:{
    width: 10,
    height: 10,
    backgroundColor: "blue",
    marginTop:30,
 marginLeft: 2,
},

prv: {
    color: "grey",
    marginTop:30,
    },
    
    skp: {
         color: "grey",
         marginTop:30,
         marginLeft: 80,
    
    },



})

  