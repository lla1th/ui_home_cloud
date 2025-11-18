import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function DashboardHeader() {
    return (
        <View style={s.wrap}>
            <View>
                <Text style={s.title}>HomeCloud</Text>
                <Text style={s.subtitle}>Добро пожаловать — ваш персональный облачный центр</Text>
            </View>

            <View style={s.actions}>
                <Pressable style={s.actionBtn}>
                    <Entypo name="upload" size={18} color="#fff" />
                    <Text style={s.actionText}>Загрузить</Text>
                </Pressable>
                <Pressable style={[s.actionBtn, { marginLeft: 10 }]}>
                    <Entypo name="share" size={18} color="#fff" />
                    <Text style={s.actionText}>Поделиться</Text>
                </Pressable>
            </View>
        </View>
    );
}

const s = StyleSheet.create({
    wrap: {
        width: '100%',
        maxWidth: 1100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: { color: '#fff', fontFamily: 'Inter-Bold', fontSize: 28 },
    subtitle: { color: '#9aa6b2', marginTop: 4 },
    actions: { flexDirection: 'row', alignItems: 'center' },
    actionBtn: {
        backgroundColor: '#184e9f',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    actionText: { color: '#fff', marginLeft: 8, fontSize: 14 },
});
