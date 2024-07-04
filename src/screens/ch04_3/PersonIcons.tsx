import React, { useCallback } from 'react';
import type { Dispatch, FC, SetStateAction } from 'react';
import { View } from 'react-native';
import { styles } from '../Person.style';
import * as D from '../../data';
import moment from 'moment-with-locales-es6';
import { MD2Colors } from 'react-native-paper';
import { IconText } from '../../components';

moment.locale('ko');

export type PersonIconsProps = {
    person: D.IPerson;
    setPerson: Dispatch<SetStateAction<D.IPerson>>;
};

const PesronIcons: FC<PersonIconsProps> = ({ person, setPerson }) => {
    const commentPressed = useCallback(
        () =>
            setPerson((person) => ({
                ...person,
                counts: {
                    ...person.counts,
                    comment: person.counts.comment + 1,
                },
            })),
        []
    );
    const retweetPressed = useCallback(
        () =>
            setPerson((person) => ({
                ...person,
                counts: {
                    ...person.counts,
                    retweet: person.counts.retweet + 1,
                },
            })),
        []
    );
    const heartPressed = useCallback(
        () =>
            setPerson((person) => ({
                ...person,
                counts: {
                    ...person.counts,
                    heart: person.counts.heart + 1,
                },
            })),
        []
    );

    return (
        <View style={[styles.countsView]}>
            <IconText
                viewStyle={[styles.touchableIcon]}
                onPress={commentPressed}
                name="comment"
                size={24}
                color={MD2Colors.blue500}
                textStyle={[styles.iconText]}
                text={person.counts.comment}
            />
            <IconText
                viewStyle={[styles.touchableIcon]}
                onPress={retweetPressed}
                name="repeat"
                size={24}
                color={MD2Colors.purple500}
                textStyle={[styles.iconText]}
                text={person.counts.retweet}
            />
            <IconText
                viewStyle={[styles.touchableIcon]}
                onPress={heartPressed}
                name="heart"
                size={24}
                color={MD2Colors.red500}
                textStyle={[styles.iconText]}
                text={person.counts.heart}
            />
        </View>
    );
};

export default PesronIcons;
