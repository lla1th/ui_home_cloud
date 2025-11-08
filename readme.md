Архитектура проекта
```bash
запуск проекта
- npx expo start --host tunnel
- npx expo start --tunnel
```
---
```bash
/src
  /app
    App.tsx                 # Точка входа приложения
    navigation.tsx          # Настройка навигации (React Navigation)
    store.ts                # Конфигурация Redux store
    services.ts             # Инициализация сервисов (API, хранилища)

  /features
    /auth                   # Фича авторизации и аутентификации
      /api
        authApi.ts          # REST API запросы (axios, fetch)
      /model
        authSlice.ts        # Redux slice для auth (state, reducers, actions)
        authTypes.ts        # Типы и интерфейсы
      /services
        authService.ts      # Бизнес-логика (usecases): login, logout, refreshToken
      /ui
        LoginScreen.tsx     # Экран логина (React Components)
        LogoutButton.tsx    # Компоненты UI, связанные с auth

    /files                  # Управление файлами (upload, download, access)
      /api
        filesApi.ts         # API для работы с файлами
      /model
        filesSlice.ts       # Redux slice для файлов
        fileTypes.ts
      /services
        filesService.ts     # Usecases: загрузка, удаление, права доступа
      /ui
        FilesScreen.tsx
        FileItem.tsx

  /entities                 # Доменные сущности, модели (User, File, Access)
    User.ts                 # Классы/интерфейсы доменных сущностей
    File.ts
    Access.ts

  /shared
    /ui                     # Общие UI-компоненты (кнопки, инпуты, иконки)
      Button.tsx
      Input.tsx
    /lib                    # Вспомогательные утилиты, helper functions
      formatDate.ts
      logger.ts
    /config                 # Конфигурация, константы, темы
      apiConfig.ts
      colors.ts
    /hooks                  # Кастомные React хуки
      useAuth.ts
      useNetworkStatus.ts
    /services               # Общие сервисы (Notification, Storage)
      storageService.ts
      notificationService.ts

  /infrastructure
    /apiClients             # Конфигурация HTTP клиентов (axios instance)
      apiClient.ts          # axios с interceptors (JWT refresh, ошибки)
    /storage                # Работа с AsyncStorage / SecureStore
      localStorage.ts
      secureStorage.ts

  /utils
    helpers.ts              # Универсальные функции
  /types
    global.d.ts             # Глобальные типы

```