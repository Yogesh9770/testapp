import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card,styles.Elevated]}>
            <Text> Tap </Text>
        </View>
        <View style={[styles.card,styles.Elevated]}>
            <Text> me </Text>
        </View>
        <View style={[styles.card,styles.Elevated]}>
            <Text> To </Text>
        </View>
        <View style={[styles.card,styles.Elevated]}>
            <Text> Scroll </Text>
        </View>
        <View style={[styles.card,styles.Elevated]}>
            <Text> More </Text>
        </View>
        <View style={[styles.card,styles.Elevated]}>
            <Text> And </Text>
        </View>
        <View style={[styles.card,styles.Elevated]}>
            <Text> More </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    headingText:{
        fontSize: 76,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },
    container:{},
    card:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        borderRadius : 4,
        margin: 5,
    },
    Elevated:{
        backgroundColor:'grey',
        // elevation:4,
        // shadowOffset:{
        //     height:1,
        //     width:1,
        // },
        // shadowColor:'red',
    },
});
