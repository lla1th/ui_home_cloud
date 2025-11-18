import React from 'react';
import { View, StyleSheet } from "react-native";

type Props = {
    children: React.ReactNode;
    style?: any;
};

export const Card: React.FC<Props> = ({ children, style }) => {
    return <View style={[styles.card, style]}>{children}</View>
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#0f1720',
        borderRadius: 12,
        padding: 12,
        shadowColor: '#000',
        shadowOpacity: 0.15,
        shadowRadius: 10,
        elevation: 4,
    }
})