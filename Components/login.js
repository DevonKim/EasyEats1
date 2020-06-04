import React from 'react';
import { StyleSheet, Text, View, Image, TextImput, Button } from 'react-native';

export default function App() {
    return(
<View>
<Image
style={styles.image}
source={require('./assets/capstone-logo.png')}
/>
</View>

    );
}

const styles = StyleSheet.create({
image:{
flex:2,
height: 300,
width: 300,
justifyContent: 'center',
},
});