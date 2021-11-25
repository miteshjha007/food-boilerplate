import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from './SearchBar';
import useResults from '../hooks/useResults';
import ResultsLists from '../Component/ResultsList';

const ScreenSearch = ( ) => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMsg] = useResults();
    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        });
    };
    return (
        <>
            <SearchBar
                term={term} onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMsg ? <Text>{errorMsg}</Text> : null}
            {/* <Text>We have founds {results.length} results</Text> */}
            <ScrollView>
                <ResultsLists results={filterResultsByPrice('$')} title="Cost Effective" />
                <ResultsLists results={filterResultsByPrice('$$')} title="Bit Pricier" />
                <ResultsLists results={filterResultsByPrice('$$$')} title="Big Spender" />
            </ScrollView>
        </>
    );
};

const style = StyleSheet.create({});

export default ScreenSearch;