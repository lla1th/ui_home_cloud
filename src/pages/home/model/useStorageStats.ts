import { useMemo } from 'react';

export default function useStorageStats() {
    // моковые данные — позже заменить API вызовом
    const usedBytes = 132 * 1024 * 1024 * 1024; // 132 GB
    const quotaBytes = 500 * 1024 * 1024 * 1024; // 500 GB
    const percent = useMemo(() => (usedBytes / quotaBytes) * 100, [usedBytes, quotaBytes]);
    return { usedBytes, quotaBytes, percent };
}
