import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useSystemStatus from '../model/useSystemStatus';

export default function SystemStatus() {
    const { online, cpu, ram, devices } = useSystemStatus();

    return (
        <View>
            <Text style={s.h}>Система</Text>
            <Text style={s.line}>Статус: <Text style={{ color: online ? '#7ee787' : '#ff7b7b' }}>{online ? 'Online' : 'Offline'}</Text></Text>
            <Text style={s.line}>CPU: {cpu}%</Text>
            <Text style={s.line}>RAM: {ram}%</Text>
            <Text style={s.line}>Устройств: {devices}</Text>
        </View>
    );
}

const s = StyleSheet.create({
    h: { fontFamily: 'Inter-Bold', color: '#fff', fontSize: 14, marginBottom: 8 },
    line: { color: '#c3d2db', marginBottom: 6 },
});
