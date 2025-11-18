import { useMemo } from 'react';

export default function useSystemStatus() {
    const online = true;
    const cpu = useMemo(() => Math.round(12 + Math.random() * 20), []);
    const ram = useMemo(() => Math.round(30 + Math.random() * 40), []);
    const devices = 3;
    return { online, cpu, ram, devices };
}
