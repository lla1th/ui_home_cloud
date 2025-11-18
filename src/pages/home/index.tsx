import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import DashboardHeader from "@pages/home/ui/DashBoardHeader";
import StorageUsageCard from "@pages/home/ui/StorageUsageCard";
import {Card} from "react-native-paper";
import SystemStatus from "@pages/home/ui/SystemStatus";
import FileList from "@pages/home/ui/FileList";

export default function HomeScreen() {
    return (
        <ScrollView contentContainerStyle={s.container}>
            <DashboardHeader />
            <View style={s.row}>
                <StorageUsageCard style={{ flex: 1, marginRight: 12 }} />
                <Card style={{ flex: 1, minHeight: 140 }}>
                    <SystemStatus />
                </Card>
            </View>

            <View style={{ marginTop: 18, width: '100%' }}>
                <FileList />
            </View>
        </ScrollView>
    );
}

const s = StyleSheet.create({
    container: {
        padding: 18,
        paddingBottom: 40,
        backgroundColor: '#071022',
        minHeight: '100%',
        alignItems: 'center',
    },
    row: {
        width: '100%',
        maxWidth: 1100,
        flexDirection: 'row',
        marginTop: 12,
    },
});
