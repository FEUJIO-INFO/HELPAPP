import React from "react";
import { View, Text, StyleSheet, FlatList ,Image } from "react-native";

import datas from "../Slides";


export default Onboarding = () => {
      
       
    const renderOnbording=({item})=>{
        return(
            <View style={StyleSheet.container}>
            <Image source={item.image} style={{ width: 100, height: 100, resizeMode: 'contain' }}/>

            <View style={{ flex: 0.3}}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
                

            </View>

        </View>
        )
    }


    return (
        <View style={styles.container}>
               <FlatList data={ datas } 
                    renderItem={renderOnbording}
                    keyExtractor={item =>item.id}
                />

        </View>
    );
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '0fff',
            alignItems: 'center',
            justifyContent: 'center',
        },
         
        image: {
            flex: 0.7,
            justifyContent: 'center',
        },
        title: {
            fontWeight:  '800',
        }
    });