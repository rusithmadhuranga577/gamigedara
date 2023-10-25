import React from 'react';
import {
  View,
  TouchableOpacity,
  Text
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '@common';
import styles from './styles';

const NavBar = ({title}) => {

    const navigation = useNavigation();

    return(
        <View style={{width : '100%', height : 40, position : 'absolute', backgroundColor : Colors.white, alignItems : 'center', paddingLeft : 10, justifyContent : 'space-between', flexDirection : 'row'}}>
            <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.iconLeft}>
                <Icon name={'chevron-back-outline'} size={20} color={Colors.black}/>
            </TouchableOpacity>
            <Text numberOfLines={1} style={[styles.foodname]}>{title}</Text>
            <TouchableOpacity style={styles.iconRight} onPress={() => {}}>
                <Icon name={'search'} size={20} color={Colors.black}/>
            </TouchableOpacity>
        </View>
    );
}

export default NavBar;