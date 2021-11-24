import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ResultsDetails from './ResultsDetail';

const ResultsLists = ({ title, results }) => {
    return (
        <View>
            <Text style={style.title}>{title}</Text>
            <FlatList
                horizontal={true}
                data={results}
                keyExtractor={result => result.id}
                renderItem={({ item }) => {
                    return <ResultsDetails result = {item}/>
                    
                }}
            />
            {/* <Text>Results: {results.length}</Text> */}
        </View>
    );
};

const style = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default ResultsLists;