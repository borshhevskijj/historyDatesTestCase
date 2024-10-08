# Тестовое задание

В соответствии с ТЗ, на тестовую страницу добавлено 2 компонента, которые работают независимо.

Git: https://github.com/consultapp/test-history-dates

Тестовый сервер: https://test-history-dates.netlify.app/

## Запуск проекта

Команда терминала в директории проекта:

```
npm run start
```

## Настройка исходных данных

На данный момент передача исходных данных в приложение осуществляется через объект Window, путем задания массива интервалов INITIAL_INTERVALS:

```
<script>
      window.INITIAL_INTERVALS = [
        {
          title: "Наука",
          start: 1907,
          end: 1913,
          data: [
            {
              year: 1907,
              text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores facere nihil eaque repudiandae nulla numquam.",
            },
          ...
          ]
        },
        ...
      ]
</script>
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
