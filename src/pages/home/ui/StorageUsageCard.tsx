import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import useStorageStats from '../model/useStorageStats';
import { Card } from "react-native-paper";

type Props = { style?: any };

export default function StorageUsageCard({ style }: Props) {
    const { usedBytes, quotaBytes, percent } = useStorageStats();

    const usedGB = (usedBytes / 1024 / 1024 / 1024).toFixed(2);
    const quotaGB = (quotaBytes / 1024 / 1024 / 1024).toFixed(0);

    return (
        <Card style={style}>
            <LinearGradient colors={['#2257bb', '#2fa4ff']} style={s.gradient}>
                <Text style={s.h1}>Хранилище</Text>
                <Text style={s.small}>Использовано {usedGB} ГБ из {quotaGB} ГБ</Text>
                <View style={s.barBg}>
                    <View style={[s.barFill, { width: `${Math.min(100, percent)}%` }]} />
                </View>
                <Text style={s.percent}>{Math.round(percent)}%</Text>
            </LinearGradient>
        </Card>
    );
}

const s = StyleSheet.create({
    gradient: {
        padding: 12,
        borderRadius: 8,
    },
    h1: { color: '#fff', fontSize: 16, fontFamily: 'Inter-Bold' },
    small: { color: '#e6f0ff', marginTop: 6 },
    barBg: {
        backgroundColor: 'rgba(255,255,255,0.12)',
        height: 10,
        marginTop: 12,
        borderRadius: 8,
        overflow: 'hidden',
    },
    barFill: {
        height: 10,
        backgroundColor: '#fff',
    },
    percent: { color: '#fff', marginTop: 8, fontSize: 14 },
});
