import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardRed]}>
            <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardGreen]}>
            <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.cardBlue]}>
            <Text>Blue</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    headingText:{
        fontSize: 100,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },
    container : {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
    },
    card : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        width: 100,
        borderRadius: 10,
        margin: 8,
    },
    cardRed:{
        backgroundColor: 'red',

    },
    cardBlue:{
        backgroundColor: 'blue',
    },
    cardGreen:{
        backgroundColor: 'green',
    },
});
