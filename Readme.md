# Функциональное ядро

**Библиотека резделена на модули:**

- AOO - функции работы с коллекцией array of objects
  - AOO.finderList
  - AOO.findValues
  - AOO.paths
  - AOO.update
  - AOO.pUpdate
  - AOO.factory
- dateTime - утилиты для работы с датой
  - dateTime.addHours
  - dateTime.formatDate
  - dateTime.formateDateToString
  - dateTime.formatTime
  - dateTime.getDate
  - dateTime.isDate
  - dateTime.reformate
- mask - Работа с масками
  - mask.lowFirst
  - mask.captlzFrst
  - mask.wrapNumMsk
- Faker данных

## Тесты

функции работы с коллекцией array of objects полностью протестированы

- jest

## Взаимодействие

Состояние: тесты проведены

## Правила 
### работают только для коллекции массив из объектов

- каждая функция имеет последним параметром errorMod. Default value of errorMod = false. If errorMod = true. Мы получаем на значение в виде:
  {
    status: "OK" | "ERROR" - в случае если функция отработала с ошибкой во
    error: "*error message*" - В случае ошибки error
    answer: "*value of return*"
  }

## Категории

- /array
- /masks
- /notificators

### Дополнительно

- Библиотека написана на языке typescript
- Создание документации build:docs
