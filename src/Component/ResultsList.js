import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ResultsDetails from './ResultsDetail';
import { withNavigation } from 'react-navigation';

const ResultsLists = ({ title, results, navigation }) => {
    if(!results.length){
        return null;
    }
    return (
        <View style={style.container}>
            <Text style={style.title}>{title}</Text>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={result => result.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('ResultShow', { id: item.id })}>
                            <ResultsDetails result={item} />
                        </TouchableOpacity>
                    )

                }}
            />
            {/* <Text>Results: {results.length}</Text> */}
        </View>
    );
};

const style = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    container: {
        marginBottom: 10
    }
});

export default withNavigation(ResultsLists);