const { useState, useEffect, createContext, useContext } = React;

// 语言上下文
const LanguageContext = createContext();

// 多语言内容
const translations = {
    zh: {
        hero: {
            name: 'Yuanzhen Zhu',
            title: '数字产品经理',
            tagline: '用创新定义数字体验，用数据驱动产品成长',
            location: '马德里，西班牙'
        },
        about: {
            title: '关于我',
            content: '我是一名充满激情的数字产品经理，专注于创造优雅且高效的数字解决方案。拥有超过5年的产品管理经验，曾在 CAF Digital Services、Autoscout24 和华为等知名公司工作。我热爱将数据转化为洞察，并将创新理念转化为成功的产品。我相信优秀的产品不仅要功能强大，更要为用户创造真正的价值。'
        },
        skills: {
            title: '专业技能'
        },
        experience: {
            title: '工作经历'
        },
        education: {
            title: '教育背景'
        },
        languages: {
            title: '语言能力'
        },
        contact: {
            title: '联系方式'
        },
        certifications: {
            title: '专业认证'
        }
    },
    en: {
        hero: {
            name: 'Yuanzhen Zhu',
            title: 'Digital Product Manager',
            tagline: 'Innovating digital solutions, transforming user experiences',
            location: 'Madrid, Spain'
        },
        about: {
            title: 'About Me',
            content: 'I am a passionate Digital Product Manager focused on creating elegant and efficient digital solutions. With over 5 years of experience in product management, I have worked at renowned companies like CAF Digital Services, Autoscout24, and Huawei. I love transforming data into insights and turning innovative ideas into successful products. I believe that great products should not only be powerful but also create real value for users.'
        },
        skills: {
            title: 'Professional Skills'
        },
        experience: {
            title: 'Work Experience'
        },
        education: {
            title: 'Education'
        },
        languages: {
            title: 'Languages'
        },
        contact: {
            title: 'Contact'
        },
        certifications: {
            title: 'Certifications'
        }
    },
    es: {
        hero: {
            name: 'Yuanzhen Zhu',
            title: 'Digital Product Manager',
            tagline: 'Innovando soluciones digitales, transformando experiencias de usuario',
            location: 'Madrid, España'
        },
        about: {
            title: 'Sobre Mí',
            content: 'Soy un apasionado Digital Product Manager enfocado en crear soluciones digitales elegantes y eficientes. Con más de 5 años de experiencia en gestión de productos, he trabajado en empresas reconocidas como CAF Digital Services, Autoscout24 y Huawei. Me encanta transformar datos en insights y convertir ideas innovadoras en productos exitosos. Creo que los grandes productos no solo deben ser potentes, sino que también deben crear valor real para los usuarios.'
        },
        skills: {
            title: 'Habilidades Profesionales'
        },
        experience: {
            title: 'Experiencia Laboral'
        },
        education: {
            title: 'Educación'
        },
        languages: {
            title: 'Idiomas'
        },
        contact: {
            title: 'Contacto'
        },
        certifications: {
            title: 'Certificaciones'
        }
    }
};

// 工作经历数据
const experiencesData = {
    zh: [
        {
            date: '2022年5月 - 至今',
            title: 'Product Manager',
            subtitle: 'CAF Digital Services',
            description: '负责数字产品管理，推动产品战略和路线图。与跨职能团队协作，开发创新的数字解决方案。通过数据分析优化产品性能，提升用户体验。'
        },
        {
            date: '2021年4月 - 2022年5月',
            title: 'Product Manager',
            subtitle: 'Sumauto / Vocento (Autoscout24/Autocasión)',
            description: '管理汽车平台产品，协调产品开发流程。分析市场趋势和用户需求，推动产品功能迭代和优化。'
        },
        {
            date: '2018年4月 - 2021年4月',
            title: 'Product Manager',
            subtitle: 'Huawei CBG España - HUAWEI Mobile Services',
            description: '负责华为移动服务产品管理。与全球团队协作，推动产品在欧洲市场的落地和本地化。'
        },
        {
            date: '2017年9月 - 2018年3月',
            title: 'Client Advisor',
            subtitle: 'Salvatore Ferragamo',
            description: '为客户提供高端购物体验，维护客户关系，提升品牌价值和客户满意度。'
        },
        {
            date: '2017年3月 - 2017年9月',
            title: 'Client Advisor',
            subtitle: 'young promotion GmbH - Yves Saint Laurent, Helena Rubinstein',
            description: '在马德里机场为奢侈品牌提供客户咨询服务，提升客户购物体验。'
        }
    ],
    en: [
        {
            date: 'May 2022 - Present',
            title: 'Product Manager',
            subtitle: 'CAF Digital Services',
            description: 'Leading digital product management, driving product strategy and roadmap. Collaborating with cross-functional teams to develop innovative digital solutions. Optimizing product performance through data analysis.'
        },
        {
            date: 'April 2021 - May 2022',
            title: 'Product Manager',
            subtitle: 'Sumauto / Vocento (Autoscout24/Autocasión)',
            description: 'Managing automotive platform products, coordinating product development processes. Analyzing market trends and user needs to drive product iterations.'
        },
        {
            date: 'April 2018 - April 2021',
            title: 'Product Manager',
            subtitle: 'Huawei CBG España - HUAWEI Mobile Services',
            description: 'Responsible for Huawei Mobile Services product management. Collaborating with global teams to drive product launch and localization in European markets.'
        },
        {
            date: 'September 2017 - March 2018',
            title: 'Client Advisor',
            subtitle: 'Salvatore Ferragamo',
            description: 'Providing premium shopping experience for clients, maintaining client relationships, and enhancing brand value and satisfaction.'
        },
        {
            date: 'March 2017 - September 2017',
            title: 'Client Advisor',
            subtitle: 'young promotion GmbH - Yves Saint Laurent, Helena Rubinstein',
            description: 'Providing client advisory services for luxury brands at Madrid airport, enhancing customer shopping experience.'
        }
    ],
    es: [
        {
            date: 'Mayo 2022 - Presente',
            title: 'Product Manager',
            subtitle: 'CAF Digital Services',
            description: 'Liderando la gestión de productos digitales, impulsando la estrategia y roadmap de productos. Colaborando con equipos transversales para desarrollar soluciones digitales innovadoras. Optimizando el rendimiento del producto mediante análisis de datos.'
        },
        {
            date: 'Abril 2021 - Mayo 2022',
            title: 'Product Manager',
            subtitle: 'Sumauto / Vocento (Autoscout24/Autocasión)',
            description: 'Gestionando productos de plataformas automotrices, coordinando procesos de desarrollo de productos. Analizando tendencias del mercado y necesidades de los usuarios para impulsar iteraciones de productos.'
        },
        {
            date: 'Abril 2018 - Abril 2021',
            title: 'Product Manager',
            subtitle: 'Huawei CBG España - HUAWEI Mobile Services',
            description: 'Responsable de la gestión de productos de Huawei Mobile Services. Colaborando con equipos globales para impulsar el lanzamiento y localización de productos en mercados europeos.'
        },
        {
            date: 'Septiembre 2017 - Marzo 2018',
            title: 'Client Advisor',
            subtitle: 'Salvatore Ferragamo',
            description: 'Proporcionando experiencia de compra premium a clientes, manteniendo relaciones con clientes y mejorando el valor de marca y satisfacción.'
        },
        {
            date: 'Marzo 2017 - Septiembre 2017',
            title: 'Client Advisor',
            subtitle: 'young promotion GmbH - Yves Saint Laurent, Helena Rubinstein',
            description: 'Proporcionando servicios de asesoría a clientes de marcas de lujo en el aeropuerto de Madrid, mejorando la experiencia de compra.'
        }
    ]
};

// 教育背景数据
const educationData = {
    zh: [
        {
            date: '2020',
            title: 'Digital Product Management',
            subtitle: 'The Hero Camp',
            description: '专注于数字产品管理的专业培训课程，学习产品策略、用户研究和敏捷开发方法。'
        },
        {
            date: '2010 - 2014',
            title: '亚洲与非洲研究',
            subtitle: '马德里自治大学',
            description: '深入学习亚洲和非洲的文化、历史和政治，培养国际视野和跨文化理解能力。'
        },
        {
            date: '2008 - 2010',
            title: '高级视听制作',
            subtitle: 'IES Puerta Bonita',
            description: '学习视听制作和娱乐行业的专业技术，包括视频制作、音频处理和多媒体设计。'
        }
    ],
    en: [
        {
            date: '2020',
            title: 'Digital Product Management',
            subtitle: 'The Hero Camp',
            description: 'Professional training course focused on digital product management, learning product strategy, user research, and agile development methods.'
        },
        {
            date: '2010 - 2014',
            title: 'Asian and African Studies',
            subtitle: 'Universidad Autónoma de Madrid',
            description: 'In-depth study of Asian and African culture, history, and politics, developing international vision and cross-cultural understanding.'
        },
        {
            date: '2008 - 2010',
            title: 'Higher Audiovisual Production',
            subtitle: 'IES Puerta Bonita',
            description: 'Learned professional techniques in audiovisual production and entertainment industry, including video production, audio processing, and multimedia design.'
        }
    ],
    es: [
        {
            date: '2020',
            title: 'Digital Product Management',
            subtitle: 'The Hero Camp',
            description: 'Curso de formación profesional centrado en la gestión de productos digitales, aprendiendo estrategia de productos, investigación de usuarios y métodos de desarrollo ágil.'
        },
        {
            date: '2010 - 2014',
            title: 'Estudios de Asia y África',
            subtitle: 'Universidad Autónoma de Madrid',
            description: 'Estudio en profundidad de la cultura, historia y política de Asia y África, desarrollando visión internacional y comprensión intercultural.'
        },
        {
            date: '2008 - 2010',
            title: 'Producción Audiovisual Superior',
            subtitle: 'IES Puerta Bonita',
            description: 'Aprendizaje de técnicas profesionales en producción audiovisual y industria del entretenimiento, incluyendo producción de video, procesamiento de audio y diseño multimedia.'
        }
    ]
};

// 语言切换组件
function LanguageSwitcher() {
    const { language, setLanguage } = useContext(LanguageContext);

    return (
        <div className="language-switcher">
            <button
                className={`lang-btn ${language === 'zh' ? 'active' : ''}`}
                onClick={() => setLanguage('zh')}
            >
                中文
            </button>
            <button
                className={`lang-btn ${language === 'en' ? 'active' : ''}`}
                onClick={() => setLanguage('en')}
            >
                English
            </button>
            <button
                className={`lang-btn ${language === 'es' ? 'active' : ''}`}
                onClick={() => setLanguage('es')}
            >
                Español
            </button>
        </div>
    );
}

// 主页头部组件
function Hero() {
    const { language, t } = useContext(LanguageContext);

    return (
        <div className="hero">
            <div className="hero-content">
                <h1 className="hero-name">{t.hero.name}</h1>
                <p className="hero-title">{t.hero.title}</p>
                <p className="hero-tagline">{t.hero.tagline}</p>
                <p className="hero-location">📍 {t.hero.location}</p>
            </div>
        </div>
    );
}

// 关于我组件
function About() {
    const { t } = useContext(LanguageContext);

    return (
        <section className="section">
            <h2 className="section-title">{t.about.title}</h2>
            <p className="about-text">{t.about.content}</p>
        </section>
    );
}

// 技能组件
function Skills() {
    const { t, language } = useContext(LanguageContext);

    const skills = [
        { name: language === 'zh' ? '数字产品管理' : 'Digital Product Management', level: 95 },
        { name: language === 'zh' ? '数据分析' : 'Data Analysis', level: 90 },
        { name: 'Power BI', level: 85 },
        { name: 'SQL', level: 80 },
        { name: language === 'zh' ? '敏捷方法论' : 'Agile Methodologies', level: 85 },
        { name: language === 'zh' ? '用户体验设计' : 'UX Design', level: 75 },
    ];

    return (
        <section className="section">
            <h2 className="section-title">{t.skills.title}</h2>
            <div className="skills-list">
                {skills.map((skill, index) => (
                    <div className="skill-item" key={index}>
                        <div className="skill-info">
                            <span className="skill-name">{skill.name}</span>
                            <span className="skill-percent">{skill.level}%</span>
                        </div>
                        <div className="skill-bar">
                            <div className="skill-fill" style={{ width: `${skill.level}%` }}></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

// 时间线项组件
function TimelineItem({ date, title, subtitle, description }) {
    return (
        <div className="timeline-item">
            <div className="timeline-date">{date}</div>
            <h3 className="timeline-title">{title}</h3>
            <div className="timeline-subtitle">{subtitle}</div>
            <p className="timeline-description">{description}</p>
        </div>
    );
}

// 工作经历组件
function Experience() {
    const { t, language } = useContext(LanguageContext);
    const experiences = experiencesData[language];

    return (
        <section className="section">
            <h2 className="section-title">{t.experience.title}</h2>
            <div className="timeline">
                {experiences.map((exp, index) => (
                    <TimelineItem key={index} {...exp} />
                ))}
            </div>
        </section>
    );
}

// 教育背景组件
function Education() {
    const { t, language } = useContext(LanguageContext);
    const education = educationData[language];

    return (
        <section className="section">
            <h2 className="section-title">{t.education.title}</h2>
            <div className="timeline">
                {education.map((edu, index) => (
                    <TimelineItem key={index} {...edu} />
                ))}
            </div>
        </section>
    );
}

// 语言组件
function Languages() {
    const { t } = useContext(LanguageContext);

    const languages = [
        { name: 'Chinese (Simplified)', level: t.hero.name === 'Yuanzhen Zhu' ? 'Native or Bilingual' : 'Nativo o Bilingüe', flag: '🇨🇳' },
        { name: 'Spanish', level: 'Full Professional', flag: '🇪🇸' },
        { name: 'English', level: 'Full Professional', flag: '🇬🇧' },
    ];

    return (
        <section className="section">
            <h2 className="section-title">{t.languages.title}</h2>
            <div className="languages-grid">
                {languages.map((lang, index) => (
                    <div className="language-card" key={index}>
                        <span className="lang-flag">{lang.flag}</span>
                        <div className="lang-info">
                            <h3 className="lang-name">{lang.name}</h3>
                            <p className="lang-level">{lang.level}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

// 联系方式组件
function Contact() {
    const { t } = useContext(LanguageContext);

    const contacts = [
        { icon: '📧', text: 'holazhu@icloud.com', href: 'mailto:holazhu@icloud.com' },
        { icon: '💼', text: 'LinkedIn', href: 'https://www.linkedin.com/in/yuanzhenzhu' },
        { icon: '🌍', text: 'Madrid, España', href: '#' },
    ];

    return (
        <section className="section contact-section">
            <h2 className="section-title">{t.contact.title}</h2>
            <div className="contact-links">
                {contacts.map((contact, index) => (
                    <a
                        key={index}
                        href={contact.href}
                        className="contact-link"
                        target={contact.href !== '#' ? '_blank' : ''}
                        rel="noopener noreferrer"
                    >
                        <span className="contact-icon">{contact.icon}</span>
                        <span>{contact.text}</span>
                    </a>
                ))}
            </div>
        </section>
    );
}

// 主应用组件
function App() {
    const [language, setLanguage] = useState('en');

    const t = translations[language];

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            <div className="app">
                <LanguageSwitcher />
                <div className="container">
                    <Hero />
                    <About />
                    <Skills />
                    <Experience />
                    <Education />
                    <Languages />
                    <Contact />
                </div>
            </div>
        </LanguageContext.Provider>
    );
}

// 渲染应用
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
