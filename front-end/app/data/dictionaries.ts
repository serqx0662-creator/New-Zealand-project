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
                    desc: "Новая Зеландия постоянно входит в число самых безопасных стран мира, offering стабильное общество и дружелюбную атмосферу для жизни и учёбы."
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
                { id: '01', title: 'Карьерное руководство и выбор будущей профессии', description: 'Мы помогаем определить подходящую сферу и будущую профессию.', image: '/image/services/service1.png' },
                { id: '02', title: 'Выбор программы и учебного заведения', description: 'Мы подбираем оптимальный курс и университет для ваших целей.', image: '/image/services/service2.png' },
                { id: '03', title: 'Подготовка к поступлению', description: 'Мы готовим документы, мотивационное письмо, портфолио и к интервью.', image: '/image/services/service3.png' },
                { id: '04', title: 'Зачисление', description: 'Мы обрабатываем заявку, отправляем документы и помогаем до подтверждения.', image: '/image/services/service4.png' },
                { id: '05', title: 'Стипендии', description: 'Мы ищем подходящие стипендии и помогаем с подачей заявки.', image: '/image/services/service5.png' },
                { id: '06', title: 'Поддержка по визам', description: 'Мы предоставляем консультации и помогаем собрать документы для получения визы.', image: '/image/services/service6.png' },
                { id: '07', title: 'Авиабилеты', description: 'Находим удобные и экономичные варианты перелетов.', image: '/image/services/service7.png' }
            ]
        },
        programs: {
            title: "Программы обучения",
            description: "Найдите подходящую программу для вашего будущего в Новой Зеландии",
            found: "НАЙДЕНО ПРОГРАММ",
            notFound: "По вашему запросу ничего не найдено",
            loading: "Загрузка программ...",
            card: { more: "Подробнее", apply: "Подать заявку", duration: "Уточняется", location: "Локация не указана", priceFrom: "От" }
        },
        filters: {
            title: "Фильтры и поиск",
            searchPlaceholder: "Поиск по названию программы или университета...",
            scholarshipOnly: "Только программы со стипендией",
            labels: { country: "Страна", level: "Уровень", direction: "Направление", sort: "Сортировка" },
            placeholders: { allCountries: "Все страны", allLevels: "Все уровни", allDirections: "Все направления", popularity: "По популярности" },
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
            tabs: { overview: "Обзор", requirements: "Требования", courses: "Курсы", price: "Стоимость", apply: "Как подать", campus: "Кампус", faq: "FAQ" },
            sections: {
                description: "Описание программы",
                admission: "Требования для поступления",
                mainCourses: "Основные курсы",
                coursesEmpty: "Информация о модулях обучения обновляется",
                tuition: "Стоимость обучения",
                yearly: "Стоимость за год",
                total: "Общая стоимость",
                scholarshipNote: "Стипендии доступны для квалифицированных студентов",
                applyProcess: "Процесс подачи заявки",
                applySteps: [
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
            fastFacts: { title: "Быстрые факты", capital: "Столица:", currency: "Валюта:", year: "Учебный год:", noData: "Данные отсутствуют" }
        },
        countryCard: { universities: "Университетов", programs: "Программ", students: "Студентов" },
        universitiesPage: {
            title: "Университеты-партнёры",
            description: "Лучшие университеты со всего мира",
            searchPlaceholder: "Поиск университета",
            loading: "Загрузка...",
            notFound: "Университеты не найдены",
            stats: { rating: "Рейтинг", programs: "Программ" },
            cardBtn: "Посмотреть программу",
            backBtn: "Назад к программам",
            aboutTitle: "О университете",
            programsTitle: "Программы обучения",
            noPrograms: "Программы пока не добавлены",
            applyBtn: "Подать заявку",
            quickInfo: "Быстрая информация",
            detailsBtn: "Подробнее"
        },
        programTypes: { Postgraduate: "Магистратура", Undergraduate: "Бакалавриат", Foundation: "Подготовительный курс" },
        events: {
            title: "Мероприятия",
            description: "Присоединяйтесь к нашим событиям и узнайте больше о возможностях",
            searchPlaceholder: "Поиск мероприятия...",
            loading: "Загрузка мероприятий...",
            notFound: "Мероприятия не найдены",
            applyBtn: "Подать заявку",
            left: "Осталось",
            register: "Зарегистрироваться",
            registration: "Регистрация",
            regDesc: "Оставьте заявку, чтобы забронировать место",
            success: "Успешно!",
            successDesc: "Вы успешно зарегистрированы на мероприятие. Мы свяжемся с вами в ближайшее время.",
            programTitle: "Программа мероприятия",
            back: "Назад к мероприятиям",
            types: { offline: "Офлайн", online: "Онлайн" },
            info: { location: "Место", slots: "Места", free: "Свободно", registered: "Зарегистрировано" },
            form: { name: "Имя", email: "Email", phone: "Телефон", namePlaceholder: "Ваше имя", emailPlaceholder: "Ваш email", sending: "Отправка..." }
        },
        aboutPage: {
            title: "О нас",
            subtitle: "Мы помогаем студентам осуществить мечту об обучении за рубежом",
            mission: {
                title: "Наша миссия",
                p1: "Мы стремимся сделать качественное образование доступным для всех. Наша команда профессионалов помогает студентам найти идеальную программу обучения и успешно поступить в лучшие университеты мира.",
                p2: "За годы работы мы помогли тысячам студентов осуществить свою мечту об обучении за рубежом. Мы гордимся каждым успешным поступлением и продолжаем расширять наши возможности."
            },
            values: {
                title: "Наши ценности",
                items: [
                    { title: "Целеустремленность", desc: "Мы помогаем студентам достигать их образовательных целей" },
                    { title: "Забота", desc: "Каждый студент важен для нас, мы обеспечиваем индивидуальный подход" },
                    { title: "Надежность", desc: "Мы гарантируем качественный сервис и поддержку на всех этапах" }
                ]
            },
            stats: [
                { value: "10,000+", label: "Успешных поступлений" },
                { value: "500+", label: "Университетов-партнёров" },
                { value: "50+", label: "Стран" },
                { value: "15", label: "Лет опыта" }
            ],
            cta: { title: "Готовы начать своё путешествие?", desc: "Свяжитесь с нами сегодня и получите бесплатную консультацию", consultBtn: "Запросить консультацию", programsBtn: "Посмотреть программы" }
        },
        contactsPage: {
            title: "Контакты",
            subtitle: "Свяжитесь с нами любым удобным способом",
            form: {
                title: "Написать нам",
                description: "Заполните форму, и мы ответим вам в ближайшее время",
                labels: { name: "Имя", email: "Email", subject: "Тема", phone: "Телефон", message: "Сообщение", privacy: "Я согласен с политикой конфиденциальности" },
                placeholders: { name: "Ваше имя", subject: "Тема обращения", message: "Ваше сообщение..." },
                button: "Отправить запрос",
                errors: { name: "Введите имя", email: "Некорректный email", subject: "Укажите тему", phone: "Введите корректный номер", message: "Введите сообщение (минимум 10 символов)", privacy: "Нужно согласие" }
            },
            info: {
                title: "Контактная информация",
                sections: {
                    phone: "Телефон",
                    email: "Email",
                    address: "Адрес",
                    hours: "Рабочие часы",
                    addressValues: ["Москва, ул. Тверская, 10", "Офис 205, 2 этаж"],
                    hoursValues: ["Пн - Пт: 9:00 - 18:00", "Сб: 10:00 - 16:00", "Вс: Выходной"]
                }
            },
            socials: "Социальные сети"
        },
        footer: {
            description: "Помогаем студентам найти идеальную программу обучения за рубежом.",
            newsletter: { title: "Подписка на новости", placeholder: "Ваш Email", button: "Подписаться", privacy: "Подписываясь, вы соглашаетесь с нашей", link: "политикой конфиденциальности" },
            categories: { programs: "Программы", countries: "Страны", company: "Компания", legal: "Правовая информация" },
            rights: "Все права защищены."
        },
        applyPage: {
            title: "Подача заявки на обучение",
            steps: ["Выбор программы", "Персональные данные", "Образование", "Документы", "Подтверждение"],
            stepLabel: "Шаг", from: "из", next: "Далее", prev: "Назад", finish: "Завершить",
            placeholders: { stepInfo: "Заполните информацию для шага", selectProgram: "Выберите программу обучения", selectEducation: "Выберите уровень образования", selectLanguage: "Выберите языковой тест", firstName: "Имя", lastName: "Фамилия" },
            errors: { program: "Пожалуйста, выберите программу обучения", firstName: "Введите имя", lastName: "Введите фамилию", email: "Введите корректный email", phone: "Введите полный номер телефона", education: "Выберите уровень образования", language: "Выберите языковой тест", files: "Загрузите хотя бы один документ для продолжения", accepted: "Необходимо подтвердить согласие" },
            success: { title: "Ваша заявка была успешно принята", subtitle: "Все шаги были выполнены", wait: "Ожидайте подтверждения вашей заявки", backHome: "Вернуться на главную" },
            review: { title: "Подтверждение заявки", filesLabel: "Прикрепленные документы", terms: "Я согласен с условиями обработки персональных данных" },
            docs: { uploadTitle: "Загрузите документ (до 10мб каждый)", uploadHint: "Нажмите для выбора или перетащите файлы сюда", requiredTitle: "Требуемые документы:", items: ['Аттестат или диплом', 'Языковой сертификат', 'Мотивационное письмо', 'Рекомендательные письма'] }
        },
        consultation: {
            title: "Запросить консультацию",
            subtitle: "Заполните форму, и наш консультант свяжется с вами в ближайшее время",
            formTitle: "Форма обратной связи",
            formSubtitle: "Мы ответим на все ваши вопросы о программах обучения",
            sidebar: {
                contacts: "Контактная информация", socials: "Социальные сети", phone: "Телефон", email: "Email", address: "Адрес", hours: "Рабочие часы",
                hoursDetail: ["Пн - Пт: 9:00 - 18:00", "Сб: 10:00 - 16:00", "Вс: Выходной"],
                addressDetail: ["Москва, ул. Тверская, 10", "Офис 205, 2 этаж"]
            },
            labels: { firstName: "Имя *", lastName: "Фамилия *", email: "Email *", phone: "Телефон *", country: "Страна интереса", program: "Программа интереса", message: "Ваш вопрос *", privacy: "Я согласен с политикой конфиденциальности", submit: "Отправить запрос" },
            placeholders: { firstName: "Введите имя", lastName: "Введите фамилию", message: "Опишите ваш запрос...", country: "Выберите страну", program: "Выберите программу" },
            errors: { firstName: "Введите имя", lastName: "Введите фамилию", email: "Некорректный email", phone: "Введите полный номер телефона", country: "Выберите страну", program: "Выберите программу", message: "Опишите подробнее (минимум 10 символов)", privacy: "Нужно ваше согласие" }
        }
    },
    en: {
        header: {
            programs: 'Programs',
            countries: 'countries',
            universities: 'Universities',
            events: 'Events',
            about: 'About Us',
            contacts: 'contacts',
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
                { label: "countries", value: "50+" },
                { label: "Success Rate", value: "98%" },
            ]
        },
        whyNZ: {
            title: "Why New Zealand?",
            description: "Modern education, safety, and unique nature make New Zealand the perfect choice.",
            cards: {
                safety: { title: "Safe and Peaceful Environment", desc: "New Zealand consistently ranks among the world's safest Countries, offering a stable society and a friendly atmosphere for living and studying." },
                education: { title: "World-Class Education", desc: "New Zealand universities are globally recognized for innovative teaching methods, practical learning, and strong industry links." },
                career: { title: "Career and Migration Opportunities", desc: "The country needs skilled and educated people — international graduates are encouraged to stay and build long-term careers." },
                culture: { title: "Open and Friendly Culture", desc: "Kiwis are known for their kindness, inclusivity, and respect for diversity. Students feel genuinely welcomed and quickly become part of the community." },
                quality: { title: "Quality of Life", desc: "Clean nature, fresh air, balanced lifestyle, and excellent healthcare make New Zealand one of the best places in the world." }
            }
        },
        services: {
            title: "Our services",
            items: [
                { id: '01', title: 'Career Guidance', description: 'We help identify the right field and future profession.', image: '/image/services/service1.png' },
                { id: '02', title: 'Program Selection', description: 'We select the optimal course and university for your goals.', image: '/image/services/service2.png' },
                { id: '03', title: 'Admission Preparation', description: 'We prepare documents, motivation letters, portfolios, and interviews.', image: '/image/services/service3.png' },
                { id: '04', title: 'Enrollment', description: 'We process the application and assist until final confirmation.', image: '/image/services/service4.png' },
                { id: '05', title: 'Scholarships', description: 'We search for suitable scholarships and help with applications.', image: '/image/services/service5.png' },
                { id: '06', title: 'Visa Support', description: 'We provide consultations and help collect documents for the visa.', image: '/image/services/service6.png' },
                { id: '07', title: 'Air Tickets', description: 'We find convenient and economical flight options.', image: '/image/services/service7.png' }
            ]
        },
        programs: {
            title: "Study Programs",
            description: "Find the right program for your future in New Zealand",
            found: "PROGRAMS FOUND",
            notFound: "Nothing found for your request",
            loading: "Loading programs...",
            card: { more: "Details", apply: "Apply Now", duration: "To be confirmed", location: "Location not specified", priceFrom: "From" }
        },
        filters: {
            title: "Filters & Search",
            searchPlaceholder: "Search by program or university name...",
            scholarshipOnly: "Scholarship programs only",
            labels: { country: "Country", level: "Level", direction: "Direction", sort: "Sort by" },
            placeholders: { allCountries: "All Countries", allLevels: "All levels", allDirections: "All directions", popularity: "By popularity" },
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
            tabs: { overview: "Overview", requirements: "Requirements", courses: "Courses", price: "Cost", apply: "How to Apply", campus: "Campus", faq: "FAQ" },
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
            loading: "Loading Countries...",
            notFound: "No Countries found. Check Strapi permissions.",
            back: "Back to Countries",
            about: "About the country",
            programsIn: "Programs in",
            noPrograms: "No programs added yet",
            more: "Details",
            fastFacts: { title: "Fast Facts", capital: "Capital:", currency: "Currency:", year: "Academic Year:", noData: "No data available" }
        },
        countryCard: { universities: "Universities", programs: "Programs", students: "Students" },
        universitiesPage: {
            title: "Partner Universities",
            description: "Top universities from around the world",
            searchPlaceholder: "Search for a university",
            loading: "Loading...",
            notFound: "No universities found",
            stats: { rating: "Rating", programs: "Programs" },
            cardBtn: "View Programs",
            backBtn: "Back to programs",
            aboutTitle: "About the University",
            programsTitle: "Study Programs",
            noPrograms: "No programs added yet",
            applyBtn: "Apply Now",
            quickInfo: "Quick Information",
            detailsBtn: "Details"
        },
        programTypes: { Postgraduate: "Postgraduate", Undergraduate: "Undergraduate", Foundation: "Foundation / Pathway" },
        events: {
            title: "Events",
            description: "Join our events and learn more About opportunities",
            searchPlaceholder: "Search events...",
            loading: "Loading events...",
            notFound: "No events found",
            applyBtn: "Apply Now",
            left: "Left",
            register: "Register Now",
            registration: "Registration",
            regDesc: "Apply to book a spot",
            success: "Success!",
            successDesc: "You have successfully registered for the event. We will contact you shortly.",
            programTitle: "Event Schedule",
            back: "Back to events",
            types: { offline: "Offline", online: "Online" },
            info: { location: "Location", slots: "Availability", free: "Free", registered: "Registered" },
            form: { name: "Name", email: "Email", phone: "Phone", namePlaceholder: "Your name", emailPlaceholder: "Your email", sending: "Sending..." }
        },
        aboutPage: {
            title: "About Us",
            subtitle: "We help students turn their dream of studying abroad into reality",
            mission: {
                title: "Our Mission",
                p1: "We strive to make high-quality education accessible to everyone. Our team of professionals helps students find the perfect study program and successfully enroll in the world's leading universities.",
                p2: "Over the years, we have helped thousands of students achieve their goals of international education. We take pride in every successful admission and continue to expand our global opportunities."
            },
            values: {
                title: "Our Values",
                items: [
                    { title: "Goal Orientation", desc: "We empower students to reach their full potential and achieve their educational milestones" },
                    { title: "Personal Care", desc: "Every student matters to us; we provide a dedicated individual approach to every case" },
                    { title: "Reliability", desc: "We guarantee high-quality service and expert support at every stage of the process" }
                ]
            },
            stats: [
                { value: "10,000+", label: "Successful Admissions" },
                { value: "500+", label: "Partner Universities" },
                { value: "50+", label: "countries" },
                { value: "15", label: "Years of Experience" }
            ],
            cta: { title: "Ready to start your journey?", desc: "Contact us today and get a free Consultation", consultBtn: "Request Consultation", programsBtn: "View Programs" }
        },
        contactsPage: {
            title: "contacts",
            subtitle: "Get in touch with us in any convenient way",
            form: {
                title: "Write to us",
                description: "Fill out the form and we will get back to you shortly",
                labels: { name: "Name", email: "Email", subject: "Subject", phone: "Phone", message: "Message", privacy: "I agree to the privacy policy" },
                placeholders: { name: "Your name", subject: "Subject of inquiry", message: "Your message..." },
                button: "Send Request",
                errors: { name: "Enter name", email: "Invalid email", subject: "Specify subject", phone: "Enter a valid number", message: "Enter message (minimum 10 characters)", privacy: "Consent required" }
            },
            info: {
                title: "Contact Information",
                sections: {
                    phone: "Phone",
                    email: "Email",
                    address: "Address",
                    hours: "Working Hours",
                    addressValues: ["Moscow, Tverskaya St, 10", "Office 205, 2nd floor"],
                    hoursValues: ["Mon - Fri: 9:00 - 18:00", "Sat: 10:00 - 16:00", "Sun: Closed"]
                }
            },
            socials: "Social Networks"
        },
        footer: {
            description: "We help students find their perfect study abroad program.",
            newsletter: { title: "Newsletter Subscription", placeholder: "Your Email", button: "Subscribe", privacy: "By subscribing, you agree to our", link: "privacy policy" },
            categories: { programs: "Programs", countries: "countries", company: "Company", legal: "Legal Info" },
            rights: "All rights reserved."
        },
        applyPage: {
            title: "Apply for Studies",
            steps: ["Program Selection", "Personal Data", "Education", "Documents", "Confirmation"],
            stepLabel: "Step", from: "of", next: "Next", prev: "Back", finish: "Finish",
            placeholders: { stepInfo: "Fill out the info for step", selectProgram: "Select a study program", selectEducation: "Select education level", selectLanguage: "Select language test", firstName: "First Name", lastName: "Last Name" },
            errors: { program: "Please select a study program", firstName: "Enter first name", lastName: "Enter last name", email: "Enter a valid email", phone: "Enter full phone number", education: "Select education level", language: "Select language test", files: "Upload at least one document to proceed", accepted: "Confirmation required" },
            success: { title: "Your application has been successfully received", subtitle: "All steps completed", wait: "Please wait for application confirmation", backHome: "Back to Home" },
            review: { title: "Application Confirmation", filesLabel: "Attached documents", terms: "I agree to the personal data processing terms" },
            docs: { uploadTitle: "Upload document (up to 10MB each)", uploadHint: "Click to select or drag files here", requiredTitle: "Required documents:", items: ['Certificate or Diploma', 'Language Certificate', 'Motivation Letter', 'Letters of Recommendation'] }
        },
        consultation: {
            title: "Request a Consultation",
            subtitle: "Fill out the form and our consultant will contact you shortly",
            formTitle: "Feedback Form",
            formSubtitle: "We will answer all your questions About study programs",
            sidebar: {
                contacts: "Contact Information", socials: "Social Networks", phone: "Phone", email: "Email", address: "Address", hours: "Working Hours",
                hoursDetail: ["Mon - Fri: 9:00 - 18:00", "Sat: 10:00 - 16:00", "Sun: Closed"],
                addressDetail: ["Moscow, Tverskaya St, 10", "Office 205, 2nd floor"]
            },
            labels: { firstName: "First Name *", lastName: "Last Name *", email: "Email *", phone: "Phone *", country: "Country of Interest", program: "Program of Interest", message: "Your Question *", privacy: "I agree to the privacy policy", submit: "Send Request" },
            placeholders: { firstName: "Enter name", lastName: "Enter last name", message: "Describe your request...", country: "Select country", program: "Select program" },
            errors: { firstName: "Enter name", lastName: "Enter last name", email: "Invalid email", phone: "Enter full phone number", country: "Select country", program: "Select program", message: "Describe in detail (minimum 10 characters)", privacy: "Your consent is required" }
        }
    }
} as const;