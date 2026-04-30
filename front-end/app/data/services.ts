export interface Service {
    id: string;
    title: string;
    description: string;
    image: string;
}

export const SERVICES_DATA: Service[] = [
    {
        id: '01',
        title: 'Карьерное руководство и выбор будущей профессии',
        description: 'Мы помогаем определить подходящую сферу и будущую профессию.',
        image: '/image/services/service1.png'
    },
    {
        id: '02',
        title: 'Выбор программы и учебного заведения',
        description: 'Мы подбираем оптимальный курс и университет для ваших целей.',
        image: '/image/services/service2.png'
    },
    {
        id: '03',
        title: 'Подготовка к поступлению',
        description: 'Мы готовим документы, мотивационное письмо, портфолио и к интервью.',
        image: '/image/services/service3.png'
    },
    {
        id: '04',
        title: 'Зачисление',
        description: 'Мы обрабатываем заявку, отправляем документы и помогаем до подтверждения.',
        image: '/image/services/service4.png'
    },
    {
        id: '05',
        title: 'Стипендии',
        description: 'Мы ищем подходящие стипендии и помогаем с подачей заявки.',
        image: '/image/services/service5.png'
    },
    {
        id: '06',
        title: 'Поддержка по визам',
        description: 'Мы предоставляем консультации и помогаем собрать документы для получения визы.',
        image: '/image/services/service6.png'
    },
    {
        id: '07',
        title: 'Авиабилеты',
        description: 'Находим удобные и экономичные варианты перелетов.',
        image: '/image/services/service7.png'
    },
];