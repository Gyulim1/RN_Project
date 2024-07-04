import React, { useCallback, useState } from 'react';
import type { FC } from 'react';
import { View, Text, Image, Alert } from 'react-native';
import { styles } from '../Person.style';
import * as D from '../../data';
import moment from 'moment-with-locales-es6';
import { Avatar} from '../../components';
import { MD2Colors } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PesronIcons from './PersonIcons';

moment.locale('ko');

export type PersonProps = {
    person: D.IPerson;
};

const PersonUsingPassingState: FC<PersonProps> = ({ person: initialPerson }) => {
    const avatarPressed = useCallback(() => Alert.alert('avatar pressed.'), []);
    const deletePressed = useCallback(() => Alert.alert('delete pressed.'), []);

    const [person, setPerson] = useState<D.IPerson>({
        ...initialPerson,
        counts: {comment: 0, retweet: 0, heart: 0}
    })
    
    return (
        <View style={[styles.view]}>
            <View style={styles.leftView}>
                <Avatar
                    imageStyle={[styles.avatar]}
                    uri={person.avatar}
                    size={50}
                    onPress={avatarPressed}
                />
            </View>
            <View style={styles.rightView}>
                <Text style={[styles.name]}>{person.name}</Text>
                <Text style={[styles.email]}>{person.email}</Text>
                <View style={[styles.dateView]}>
                    <Text style={[styles.text]}>
                        {moment(person.createDate).startOf('day').fromNow()}
                    </Text>
                    <Icon
                        name="trash-can-outline"
                        size={26}
                        color={MD2Colors.lightBlue500}
                        onPress={deletePressed}
                    />
                </View>
                <Text
                    numberOfLines={3}
                    ellipsizeMode="tail"
                    style={[styles.text, styles.comment]}
                >
                    {person.comments}
                </Text>
                <Image
                    style={[styles.image]}
                    source={{ uri: initialPerson.image }}
                ></Image>
                <PesronIcons person={person} setPerson={setPerson}/>
            </View>
        </View>
    );
};

export default PersonUsingPassingState;
