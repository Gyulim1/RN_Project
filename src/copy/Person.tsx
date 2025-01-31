import React, { useCallback } from 'react';
import type { FC } from 'react';
import { View, Text, Image, Alert } from 'react-native';
import { styles } from './Person.style';
import * as D from '../data';
import moment from 'moment-with-locales-es6';
import { Avatar, IconText } from '../components';
import { MD2Colors } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

moment.locale('ko');

export type PersonProps = {
    person: D.IPerson;
};

const Person: FC<PersonProps> = ({ person }) => {
    const avatarPressed = useCallback(() => Alert.alert('avatar pressed.'), []);
    const deletePressed = useCallback(() => Alert.alert('delete pressed.'), []);
    const countIconPressed = useCallback(
        (name: string) => () => Alert.alert(`${name} pressed.`),
        []
    );

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
                    source={{ uri: person.image }}
                ></Image>
                <View style={[styles.countsView]}>
                    <IconText
                        viewStyle={[styles.touchableIcon]}
                        onPress={countIconPressed('comment')}
                        name="comment"
                        size={24}
                        color={MD2Colors.blue500}
                        textStyle={[styles.iconText]}
                        text={person.counts.comment}
                    />
                    <IconText
                        viewStyle={[styles.touchableIcon]}
                        onPress={countIconPressed('retweet')}
                        name="repeat"
                        size={24}
                        color={MD2Colors.purple500}
                        textStyle={[styles.iconText]}
                        text={person.counts.retweet}
                    />
                    <IconText
                        viewStyle={[styles.touchableIcon]}
                        onPress={countIconPressed('heart')}
                        name="heart"
                        size={24}
                        color={MD2Colors.red500}
                        textStyle={[styles.iconText]}
                        text={person.counts.heart}
                    />
                </View>
            </View>
        </View>
    );
};

export default Person;
