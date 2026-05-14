export type Locale = 'ru' | 'en';

export const dictionaries = {
    ru: {
        header: {
            programs: 'Программы',
            countries: 'Страны',
            universities: 'Университеты',
            events: 'Мероприятия',
            about: 'О нас',
            contacts: 'Контакты',
            apply: 'Подать заявку',
            menu: 'Меню'
        },
        hero: {
            badge: "Образование мирового уровня",
            title: "Найдите идеальную программу обучения за рубежом",
            description: "Помогаем студентам поступить в лучшие университеты мира. Более 10,000 успешных поступлений.",
            applyBtn: "Подать заявку",
            consultBtn: "Запросить консультацию",
            stats: [
                { label: "Успешных поступлений", value: "10,000+" },
                { label: "Университетов-партнеров", value: "500+" },
                { label: "Стран", value: "50+" },
                { label: "Успешность поступления", value: "98%" },
            ]
        },
        whyNZ: {
            title: "Почему Новая Зеландия?",
            description: "Современное образование, безопасность и уникальная природа делают Новую Зеландию идеальным выбором.",
            cards: {
                safety: {
                    title: "Безопасная и спокойная среда",
                    desc: "Новая Зеландия постоянно входит в число самых безопасных стран мира, предлагая стабильное общество и дружелюбную атмосферу для жизни и учёбы."
                },
                education: {
                    title: "Образование мирового класса",
                    desc: "Университеты Новой Зеландии признаны во всём мире за инновационные методы преподавания, практическое обучение и тесные связи с индустрией."
                },
                career: {
                    title: "Карьерные и миграционные возможности",
                    desc: "Страна нуждается в квалифицированных и образованных людях — международные выпускники поощряются оставаться и строить долгосрочную карьеру."
                },
                culture: {
                    title: "Открытая и дружелюбная культура",
                    desc: "Киви известны своей добротой, инклюзивностью и уважением к разнообразию. Студенты чувствуют себя искренне принятыми и быстро становятся частью сообщества."
                },
                quality: {
                    title: "Качество жизни",
                    desc: "Чистая природа, свежий воздух, сбалансированный образ жизни и отличное здравоохранение делают Новую Зеландию одним из лучших мест в мире."
                }
            }
        },
        services: {
            title: "Наши услуги",
            items: [
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
                }
            ]
        },
        programs: {
            title: "Программы обучения",
            description: "Найдите подходящую программу для вашего будущего в Новой Зеландии",
            found: "НАЙДЕНО ПРОГРАММ",
            notFound: "По вашему запросу ничего не найдено",
            loading: "Загрузка программ...",
            card: {
                more: "Подробнее",
                apply: "Подать заявку",
                duration: "Уточняется",
                location: "Локация не указана",
                priceFrom: "От"
            }
        },
        filters: {
            title: "Фильтры и поиск",
            searchPlaceholder: "Поиск по названию программы или университета...",
            scholarshipOnly: "Только программы со стипендией",
            labels: {
                country: "Страна",
                level: "Уровень",
                direction: "Направление",
                sort: "Сортировка"
            },
            placeholders: {
                allCountries: "Все страны",
                allLevels: "Все уровни",
                allDirections: "Все направления",
                popularity: "По популярности"
            },
            options: {
                levels: ["Бакалавриат", "Магистратура", "Языковые курсы"],
                directions: ["Бизнес", "IT", "Дизайн", "Медицина"],
                sorting: ["Сначала новые", "Цена: по возрастанию", "Цена: по убыванию"]
            }
        },
        programPage: {
            back: "Назад к программам",
            loading: "Загрузка...",
            notFound: "Программа не найдена",
            goBack: "Вернуться назад",
            tabs: {
                overview: "Обзор",
                requirements: "Требования",
                courses: "Курсы",
                price: "Стоимость",
                apply: "Как подать",
                campus: "Кампус",
                faq: "FAQ"
            },
            sections: {
                description: "Описание программы",
                admission: "Требования для поступления",
                mainCourses: "Основные курсы",
                coursesEmpty: "Информация о модулях обучения обновляется", // Добавлено
                tuition: "Стоимость обучения",
                yearly: "Стоимость за год",
                total: "Общая стоимость",
                scholarshipNote: "Стипендии доступны для квалифицированных студентов",
                applyProcess: "Процесс подачи заявки",
                applySteps: [ // Добавлено
                    "1. Заполните онлайн-форму заявки",
                    "2. Загрузите необходимые документы",
                    "3. Оплатите регистрационный взнос",
                    "4. Дождитесь рассмотрения заявки",
                    "5. Получите письмо о зачислении"
                ],
                applyNow: "Подать заявку сейчас",
                facilities: "Кампус и удобства",
                facilitiesEmpty: "Информация об удобствах дополняется...",
                questions: "Часто задаваемые вопросы"
            }
        },
        sidebar: {
            title: "Краткая информация",
            duration: "Длительность",
            start: "Начало обучения",
            price: "Стоимость",
            rating: "Рейтинг",
            apply: "Подать заявку",
            ask: "Задать вопрос",
            download: "Скачать брошюру",
            helpTitle: "Нужна помощь?",
            helpDesc: "Наши консультанты помогут вам выбрать подходящую программу",
            consult: "Запросить консультацию"
        },
        popularPrograms: {
            title: "Популярные программы",
            description: "Самые востребованные направления для обучения",
            allBtn: "Все программы",
            loading: "Загрузка популярных программ..."
        },
        countriesPage: {
            title: "Страны для обучения",
            description: "Выберите страну для обучения за рубежом",
            loading: "Загрузка стран...",
            notFound: "Страны не найдены. Проверьте права доступа в Strapi.",
            back: "Назад к странам",
            about: "О стране",
            programsIn: "Программы в",
            noPrograms: "Программы пока не добавлены",
            more: "Подробнее",
            fastFacts: {
                title: "Быстрые факты",
                capital: "Столица:",
                currency: "Валюта:",
                year: "Учебный год:",
                noData: "Данные отсутствуют"
            }
        },
        countryCard: {
            universities: "Университетов",
            programs: "Программ",
            students: "Студентов"
        },
        universitiesPage: {
            title: "Университеты-партнёры",
            description: "Лучшие университеты со всего мира",
            searchPlaceholder: "Поиск университета",
            loading: "Загрузка...",
            notFound: "Университеты не найдены",
            stats: {
                rating: "Рейтинг",
                programs: "Программ"
            },
            cardBtn: "Посмотреть программу",
            backBtn: "Назад к программам",
            aboutTitle: "О университете",
            programsTitle: "Программы обучения",
            noPrograms: "Программы пока не добавлены",
            applyBtn: "Подать заявку",
            quickInfo: "Быстрая информация",
            detailsBtn: "Подробнее"
        },
        programTypes: {
            Postgraduate: "Магистратура",
            Undergraduate: "Бакалавриат",
            Foundation: "Подготовительный курс",
        }
    },
    en: {
        header: {
            programs: 'Programs',
            countries: 'Countries',
            universities: 'Universities',
            events: 'Events',
            about: 'About Us',
            contacts: 'Contacts',
            apply: 'Apply Now',
            menu: 'Menu'
        },
        hero: {
            badge: "World-class education",
            title: "Find your perfect study abroad program",
            description: "We help students get into the world's best universities. Over 10,000 successful admissions.",
            applyBtn: "Apply Now",
            consultBtn: "Request a Consultation",
            stats: [
                { label: "Successful Admissions", value: "10,000+" },
                { label: "Partner Universities", value: "500+" },
                { label: "Countries", value: "50+" },
                { label: "Success Rate", value: "98%" },
            ]
        },
        whyNZ: {
            title: "Why New Zealand?",
            description: "Modern education, safety, and unique nature make New Zealand the perfect choice.",
            cards: {
                safety: {
                    title: "Safe and Peaceful Environment",
                    desc: "New Zealand consistently ranks among the world's safest countries, offering a stable society and a friendly atmosphere for living and studying."
                },
                education: {
                    title: "World-Class Education",
                    desc: "New Zealand universities are globally recognized for innovative teaching methods, practical learning, and strong industry links."
                },
                career: {
                    title: "Career and Migration Opportunities",
                    desc: "The country needs skilled and educated people — international graduates are encouraged to stay and build long-term careers."
                },
                culture: {
                    title: "Open and Friendly Culture",
                    desc: "Kiwis are known for their kindness, inclusivity, and respect for diversity. Students feel genuinely welcomed and quickly become part of the community."
                },
                quality: {
                    title: "Quality of Life",
                    desc: "Clean nature, fresh air, balanced lifestyle, and excellent healthcare make New Zealand one of the best places in the world."
                }
            }
        },
        services: {
            title: "Our Services",
            items: [
                {
                    id: '01',
                    title: 'Career Guidance',
                    description: 'We help identify the right field and future profession.',
                    image: '/image/services/service1.png'
                },
                {
                    id: '02',
                    title: 'Program Selection',
                    description: 'We select the optimal course and university for your goals.',
                    image: '/image/services/service2.png'
                },
                {
                    id: '03',
                    title: 'Admission Preparation',
                    description: 'We prepare documents, motivation letters, portfolios, and interviews.',
                    image: '/image/services/service3.png'
                },
                {
                    id: '04',
                    title: 'Enrollment',
                    description: 'We process the application and assist until final confirmation.',
                    image: '/image/services/service4.png'
                },
                {
                    id: '05',
                    title: 'Scholarships',
                    description: 'We search for suitable scholarships and help with applications.',
                    image: '/image/services/service5.png'
                },
                {
                    id: '06',
                    title: 'Visa Support',
                    description: 'We provide consultations and help collect documents for the visa.',
                    image: '/image/services/service6.png'
                },
                {
                    id: '07',
                    title: 'Air Tickets',
                    description: 'We find convenient and economical flight options.',
                    image: '/image/services/service7.png'
                }
            ]
        },
        programs: {
            title: "Study Programs",
            description: "Find the right program for your future in New Zealand",
            found: "PROGRAMS FOUND",
            notFound: "Nothing found for your request",
            loading: "Loading programs...",
            card: {
                more: "Details",
                apply: "Apply Now",
                duration: "To be confirmed",
                location: "Location not specified",
                priceFrom: "From"
            }
        },
        filters: {
            title: "Filters & Search",
            searchPlaceholder: "Search by program or university name...",
            scholarshipOnly: "Scholarship programs only",
            labels: {
                country: "Country",
                level: "Level",
                direction: "Direction",
                sort: "Sort by"
            },
            placeholders: {
                allCountries: "All countries",
                allLevels: "All levels",
                allDirections: "All directions",
                popularity: "By popularity"
            },
            options: {
                levels: ["Bachelor's", "Master's", "Language Courses"],
                directions: ["Business", "IT", "Design", "Medicine"],
                sorting: ["Newest first", "Price: low to high", "Price: high to low"]
            }
        },
        programPage: {
            back: "Back to programs",
            loading: "Loading...",
            notFound: "Program not found",
            goBack: "Go back",
            tabs: {
                overview: "Overview",
                requirements: "Requirements",
                courses: "Courses",
                price: "Cost",
                apply: "How to Apply",
                campus: "Campus",
                faq: "FAQ"
            },
            sections: {
                description: "Program Description",
                admission: "Admission Requirements",
                mainCourses: "Main Courses",
                coursesEmpty: "Module information is being updated",
                tuition: "Tuition Fees",
                yearly: "Yearly Cost",
                total: "Total Cost",
                scholarshipNote: "Scholarships available for qualified students",
                applyProcess: "Application Process",
                applySteps: [
                    "1. Fill out the online application form",
                    "2. Upload the required documents",
                    "3. Pay the registration fee",
                    "4. Wait for application review",
                    "5. Receive your Letter of Acceptance"
                ],
                applyNow: "Apply Now",
                facilities: "Campus & Facilities",
                facilitiesEmpty: "Facility information is being updated...",
                questions: "Frequently Asked Questions"
            }
        },
        sidebar: {
            title: "Quick Info",
            duration: "Duration",
            start: "Start Date",
            price: "Tuition",
            rating: "Rating",
            apply: "Apply Now",
            ask: "Ask a Question",
            download: "Download Brochure",
            helpTitle: "Need Help?",
            helpDesc: "Our consultants will help you choose the right program",
            consult: "Request Consultation"
        },
        popularPrograms: {
            title: "Popular Programs",
            description: "Our most sought-after study destinations",
            allBtn: "All Programs",
            loading: "Loading popular programs..."
        },
        countriesPage: {
            title: "Study Destinations",
            description: "Choose a country for your studies abroad",
            loading: "Loading countries...",
            notFound: "No countries found. Check Strapi permissions.",
            back: "Back to countries",
            about: "About the country",
            programsIn: "Programs in",
            noPrograms: "No programs added yet",
            more: "Details",
            fastFacts: {
                title: "Fast Facts",
                capital: "Capital:",
                currency: "Currency:",
                year: "Academic Year:",
                noData: "No data available"
            }
        },
        countryCard: {
            universities: "Universities",
            programs: "Programs",
            students: "Students"
        },
        universitiesPage: {
            title: "Partner Universities",
            description: "Top universities from around the world",
            searchPlaceholder: "Search for a university",
            loading: "Loading...",
            notFound: "No universities found",
            stats: {
                rating: "Rating",
                programs: "Programs"
            },
            cardBtn: "View Programs",
            backBtn: "Back to programs",
            aboutTitle: "About the University",
            programsTitle: "Study Programs",
            noPrograms: "No programs added yet",
            applyBtn: "Apply Now",
            quickInfo: "Quick Information",
            detailsBtn: "Details"
        },
        programTypes: {
            Postgraduate: "Postgraduate",
            Undergraduate: "Undergraduate",
            Foundation: "Foundation / Pathway",
        },
    }
};