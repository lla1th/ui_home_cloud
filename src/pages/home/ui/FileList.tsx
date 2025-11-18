import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

import useFileList from '../model/useFileList';
import {Card} from "@shared/ui/Card";

function FileRow({ name, size, date }: { name: string; size: string; date: string }) {
    return (
        <View style={s.row}>
            <View style={s.left}>
                <Image source={{ uri: 'https://via.placeholder.com/44' }} style={s.thumb} />
                <View>
                    <Text style={s.fname}>{name}</Text>
                    <Text style={s.meta}>{size} • {date}</Text>
                </View>
            </View>
            <Text style={s.action}>⋯</Text>
        </View>
    );
}

export default function FileList() {
    const files = useFileList();

    return (
        <Card style={{ padding: 10 }}>
            <Text style={s.title}>Недавние файлы</Text>
            <FlatList
                data={files}
                keyExtractor={(i) => i.id}
                renderItem={({ item }) => <FileRow name={item.name} size={item.size} date={item.date} />}
                ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
                style={{ marginTop: 8, maxHeight: 380 }}
            />
        </Card>
    );
}

const s = StyleSheet.create({
    title: { color: '#fff', fontFamily: 'Inter-Bold', fontSize: 16 },
    row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    left: { flexDirection: 'row', alignItems: 'center' },
    thumb: { width: 44, height: 44, borderRadius: 8, marginRight: 10 },
    fname: { color: '#fff' },
    meta: { color: '#9aa6b2', fontSize: 12 },
    action: { color: '#9aa6b2', fontSize: 24 },
});
