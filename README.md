## Запуск проекта

Команда терминала в директории проекта:

```
npm run start
```

### Настройка исходных данных

На данный момент передача исходных данных происходит через объект Window, путем задания массива интервалов INITIAL_INTERVALS:

```
window.INITIAL_INTERVALS
```

Формат исходных данных:

```
type InitialData = {
    title: string;
    start: number;
    end: number;
    data: {
        year: number;
        text: string;
    }[];
}[]
```
