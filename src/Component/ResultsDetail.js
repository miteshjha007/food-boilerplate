import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import ResultsLists from './ResultsList';

const ResultsDetails = ({ result }) => {
    return <View style={style.container}>
        <Image style={style.image} source={{ uri: result.image_url }} />
        <Text style={style.name}>{result.name}</Text>
        <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
    </View>
}

const style = StyleSheet.create({
    container: {
        marginLeft: 15
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom:5
    },
    name: {
        fontWeight: 'bold',
        fontSize: 14
    }
});

export default ResultsDetails;