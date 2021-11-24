import React from "react";
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons'; //getting icons from https://github.com/expo/vector-icons

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return <View style={style.backgroundStyle}>
        <Feather name='search' style={style.iconStyle} />
        <TextInput
            placeholder="Search"
            style={style.inputStyle}
            value={term}
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}
            autoCapitalize="none"
            autoCorrect={false}
        />
    </View>
}

const style = StyleSheet.create({
    backgroundStyle: {
        marginTop: 15,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row'
    },
    inputStyle: {
        fontSize: 18,
        flex: 1
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 12
    }
});

export default SearchBar;