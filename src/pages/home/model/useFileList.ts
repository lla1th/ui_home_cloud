import { useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';

type File = { id: string; name: string; size: string; date: string };

export default function useFileList(): File[] {
    const files = useMemo<File[]>(() => [
        { id: uuidv4(), name: 'Квитанция_МАЯ.pdf', size: '320 KB', date: '2025-11-01' },
        { id: uuidv4(), name: 'Фото_день_рождения.jpg', size: '2.3 MB', date: '2025-10-29' },
        { id: uuidv4(), name: 'Проект_архитектура.docx', size: '1.2 MB', date: '2025-10-12' },
        { id: uuidv4(), name: 'backup-db.sql', size: '45 MB', date: '2025-09-11' },
    ], []);
    return files;
}
