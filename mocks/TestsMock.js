export const testsMock = [
    {
        id: 0,
        name: 'Шкала депрессии Бека',
        description: 'Шкала содержит 21 категорию симптомов и жалоб из числа наиболее частовстречающихся у пациентов с депрессией. Каждая категория состоит из 4-5 утверждений,соответствующих специфическим признакам депрессии. Утверждения распределены сучетом повышения значимости вклада определяемых показателей в общую степеньтяжести депрессии',
        // questions: { type: 'list', objectType: 'Question' },
        // results: { type: 'list', objectType: 'Result' },
        questions: [
            { id: 0, text: 'Как Вы чувствовали себя на этой неделе и сегодня?'},
            { id: 1, text: 'Интерес к другим людям падает'},
        ],
        answers: [
            { id: 0, text: 'Я не чувствую себя расстроенным, печальным'},
            { id: 1, text: 'Я расстроен'},
            { id: 2, text: 'Я все время расстроен и не могу от этого отключиться'},
            { id: 3, text: 'Я настолько расстроен и несчастлив, что не могу это выдержать'},
        ],
        results: [
            { id: 0, title: 'Легкая депрессия', description: 'Люди с легкой депрессией могут испытывать чувство печали, усталости, потери интереса к удовольствиям, изменения в аппетите или сна, но эти симптомы могут быть менее интенсивными и могут меняться со временем. Важно обратиться к специалисту для оценки и поддержки при любых симптомах депрессии, включая легкую' },
            { id: 1, title: 'Средняя депрессия', description: 'Описание средней депрессии' },
        ],
        profiles: { type: 'list', objectType: 'Profile' },
    },
    {
        id: 1,
        name: 'Шкала самоуважения Розенберга',
        description: 'Описание теста',
        questions: { type: 'list', objectType: 'Question' },
        results: { type: 'list', objectType: 'Result' },
        profiles: { type: 'list', objectType: 'Profile' },
    },
];
