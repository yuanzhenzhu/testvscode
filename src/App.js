const { useState, createContext, useContext } = React;

// 语言上下文
const LanguageContext = createContext();

// 多语言内容
const translations = {
    zh: {
        hero: {
            intro: '我是',
            roles: [
                { text: '数字产品经理', highlight: true },
                { text: '数据分析师', highlight: true },
                { text: '问题解决者', highlight: true },
                { text: '创新者', highlight: true },
                { text: '终身学习者', highlight: true }
            ],
            passion: '热衷于将数据转化为洞察，将创新理念转化为成功产品。',
            career: '在我的职业生涯中',
            careerDesc: '我曾在 CAF Digital Services、Autoscout24 和华为等知名公司工作，专注于数字产品管理和用户体验优化。',
            now: '现在',
            nowDesc: '我担任 CAF Digital Services 的产品经理，负责产品战略、数据分析和跨职能团队协作。'
        },
        about: {
            title: '关于我',
            content: '我是一名充满激情的数字产品经理，专注于创造优雅且高效的数字解决方案。我相信优秀的产品不仅要功能强大，更要为用户创造真正的价值。'
        },
        skills: {
            title: '技能'
        },
        experience: {
            title: '工作经历'
        },
        education: {
            title: '教育'
        },
        languages: {
            title: '语言'
        },
        contact: {
            title: '保持联系',
            description: '通过邮件或社交媒体与我联系'
        }
    },
    en: {
        hero: {
            intro: 'I am a',
            roles: [
                { text: 'digital product manager', highlight: true },
                { text: 'data analyst', highlight: true },
                { text: 'problem solver', highlight: true },
                { text: 'innovator', highlight: true },
                { text: 'lifelong learner', highlight: true }
            ],
            passion: 'Passionate about transforming data into insights and innovative ideas into successful products.',
            career: 'During my career',
            careerDesc: 'I have worked at renowned companies like CAF Digital Services, Autoscout24, and Huawei, focusing on digital product management and user experience optimization.',
            now: 'Now',
            nowDesc: 'I work as a Product Manager at CAF Digital Services, where I lead product strategy, data analysis, and cross-functional team collaboration.'
        },
        about: {
            title: 'About Me',
            content: 'I am a passionate Digital Product Manager focused on creating elegant and efficient digital solutions. I believe that great products should not only be powerful but also create real value for users.'
        },
        skills: {
            title: 'Skills'
        },
        experience: {
            title: 'Experience'
        },
        education: {
            title: 'Education'
        },
        languages: {
            title: 'Languages'
        },
        contact: {
            title: 'Let\'s Connect',
            description: 'Reach out to me via email or social media'
        }
    },
    es: {
        hero: {
            intro: 'Soy un',
            roles: [
                { text: 'digital product manager', highlight: true },
                { text: 'analista de datos', highlight: true },
                { text: 'solucionador de problemas', highlight: true },
                { text: 'innovador', highlight: true },
                { text: 'aprendizaje de por vida', highlight: true }
            ],
            passion: 'Apasionado por transformar datos en insights e ideas innovadoras en productos exitosos.',
            career: 'Durante mi carrera',
            careerDesc: 'He trabajado en empresas reconocidas como CAF Digital Services, Autoscout24 y Huawei, enfocándome en la gestión de productos digitales y la optimización de la experiencia del usuario.',
            now: 'Ahora',
            nowDesc: 'Trabajo como Product Manager en CAF Digital Services, donde lidero la estrategia de productos, análisis de datos y colaboración con equipos transversales.'
        },
        about: {
            title: 'Sobre Mí',
            content: 'Soy un apasionado Digital Product Manager enfocado en crear soluciones digitales elegantes y eficientes. Creo que los grandes productos no solo deben ser potentes, sino que también deben crear valor real para los usuarios.'
        },
        skills: {
            title: 'Habilidades'
        },
        experience: {
            title: 'Experiencia'
        },
        education: {
            title: 'Educación'
        },
        languages: {
            title: 'Idiomas'
        },
        contact: {
            title: 'Conectemos',
            description: 'Contáctame por email o redes sociales'
        }
    }
};

// 工作经历数据
const experiencesData = {
    zh: [
        {
            company: 'CAF Digital Services',
            role: 'Product Manager',
            period: '2022 - Presente',
            description: '负责数字产品管理，推动产品战略和路线图。'
        },
        {
            company: 'Sumauto / Vocento',
            role: 'Product Manager',
            period: '2021 - 2022',
            description: '管理汽车平台产品，协调产品开发流程。'
        },
        {
            company: 'Huawei CBG España',
            role: 'Product Manager',
            period: '2018 - 2021',
            description: '负责华为移动服务产品管理。'
        }
    ],
    en: [
        {
            company: 'CAF Digital Services',
            role: 'Product Manager',
            period: '2022 - Present',
            description: 'Leading digital product management and product strategy.'
        },
        {
            company: 'Sumauto / Vocento',
            role: 'Product Manager',
            period: '2021 - 2022',
            description: 'Managing automotive platform products.'
        },
        {
            company: 'Huawei CBG España',
            role: 'Product Manager',
            period: '2018 - 2021',
            description: 'Responsible for Huawei Mobile Services product management.'
        }
    ],
    es: [
        {
            company: 'CAF Digital Services',
            role: 'Product Manager',
            period: '2022 - Presente',
            description: 'Liderando la gestión de productos digitales y la estrategia de productos.'
        },
        {
            company: 'Sumauto / Vocento',
            role: 'Product Manager',
            period: '2021 - 2022',
            description: 'Gestionando productos de plataformas automotrices.'
        },
        {
            company: 'Huawei CBG España',
            role: 'Product Manager',
            period: '2018 - 2021',
            description: 'Responsable de la gestión de productos de Huawei Mobile Services.'
        }
    ]
};

// 教育数据
const educationData = {
    zh: [
        { school: 'The Hero Camp', degree: 'Digital Product Management', year: '2020' },
        { school: 'Universidad Autónoma de Madrid', degree: '亚洲与非洲研究', year: '2010 - 2014' },
        { school: 'IES Puerta Bonita', degree: '高级视听制作', year: '2008 - 2010' }
    ],
    en: [
        { school: 'The Hero Camp', degree: 'Digital Product Management', year: '2020' },
        { school: 'Universidad Autónoma de Madrid', degree: 'Asian and African Studies', year: '2010 - 2014' },
        { school: 'IES Puerta Bonita', degree: 'Higher Audiovisual Production', year: '2008 - 2010' }
    ],
    es: [
        { school: 'The Hero Camp', degree: 'Digital Product Management', year: '2020' },
        { school: 'Universidad Autónoma de Madrid', degree: 'Estudios de Asia y África', year: '2010 - 2014' },
        { school: 'IES Puerta Bonita', degree: 'Producción Audiovisual Superior', year: '2008 - 2010' }
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
            <span className="divider">/</span>
            <button
                className={`lang-btn ${language === 'en' ? 'active' : ''}`}
                onClick={() => setLanguage('en')}
            >
                EN
            </button>
            <span className="divider">/</span>
            <button
                className={`lang-btn ${language === 'es' ? 'active' : ''}`}
                onClick={() => setLanguage('es')}
            >
                ES
            </button>
        </div>
    );
}

// Hero 组件
function Hero() {
    const { t } = useContext(LanguageContext);

    return (
        <section className="hero">
            <LanguageSwitcher />
            <div className="hero-content">
                <p className="hero-intro">{t.hero.intro}</p>
                <div className="hero-roles">
                    {t.hero.roles.map((role, index) => (
                        <span key={index} className={role.highlight ? 'highlight' : ''}>
                            {role.text}{index < t.hero.roles.length - 1 ? ', ' : ''}
                        </span>
                    ))}
                </div>
                <div className="spacer"></div>
                <p className="hero-text">{t.hero.passion}</p>
                <div className="spacer"></div>
                <h3 className="section-heading">{t.hero.career}</h3>
                <p className="hero-text">{t.hero.careerDesc}</p>
                <div className="spacer"></div>
                <h3 className="section-heading">{t.hero.now}</h3>
                <p className="hero-text">{t.hero.nowDesc}</p>
            </div>
        </section>
    );
}

// 技能组件
function Skills() {
    const { t, language } = useContext(LanguageContext);

    const skills = language === 'zh' ? [
        '数字产品管理', '数据分析', 'Power BI', 'SQL',
        '敏捷开发', '用户体验设计', '产品策略', '团队协作'
    ] : [
        'Digital Product Management', 'Data Analysis', 'Power BI', 'SQL',
        'Agile Development', 'UX Design', 'Product Strategy', 'Team Collaboration'
    ];

    return (
        <section className="section">
            <h3 className="section-heading">{t.skills.title}</h3>
            <div className="skills-list">
                {skills.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                ))}
            </div>
        </section>
    );
}

// 工作经历组件
function Experience() {
    const { t, language } = useContext(LanguageContext);
    const experiences = experiencesData[language];

    return (
        <section className="section">
            <h3 className="section-heading">{t.experience.title}</h3>
            {experiences.map((exp, index) => (
                <div key={index} className="experience-item">
                    <h4 className="company-name">{exp.company}</h4>
                    <p className="role">{exp.role}</p>
                    <p className="period">{exp.period}</p>
                    <p className="description">{exp.description}</p>
                </div>
            ))}
        </section>
    );
}

// 教育组件
function Education() {
    const { t, language } = useContext(LanguageContext);
    const education = educationData[language];

    return (
        <section className="section">
            <h3 className="section-heading">{t.education.title}</h3>
            {education.map((edu, index) => (
                <div key={index} className="education-item">
                    <p className="school">{edu.school}</p>
                    <p className="degree">{edu.degree}</p>
                    <p className="year">{edu.year}</p>
                </div>
            ))}
        </section>
    );
}

// 语言组件
function Languages() {
    const { t } = useContext(LanguageContext);

    const languages = [
        { name: 'Chinese', level: 'Native', flag: '🇨🇳' },
        { name: 'Spanish', level: 'Professional', flag: '🇪🇸' },
        { name: 'English', level: 'Professional', flag: '🇬🇧' }
    ];

    return (
        <section className="section">
            <h3 className="section-heading">{t.languages.title}</h3>
            {languages.map((lang, index) => (
                <p key={index} className="language-item">
                    {lang.flag} {lang.name} ({lang.level})
                </p>
            ))}
        </section>
    );
}

// 联系组件
function Contact() {
    const { t } = useContext(LanguageContext);

    const contacts = [
        { name: 'Email', link: 'mailto:holazhu@icloud.com', url: 'holazhu@icloud.com' },
        { name: 'LinkedIn', link: 'https://www.linkedin.com/in/yuanzhenzhu', url: 'linkedin.com/in/yuanzhenzhu' },
        { name: 'Location', link: null, url: 'Madrid, España' }
    ];

    return (
        <section className="section">
            <h3 className="section-heading">{t.contact.title}</h3>
            <p className="contact-description">{t.contact.description}</p>
            <div className="spacer"></div>
            {contacts.map((contact, index) => (
                <p key={index} className="contact-item">
                    <span className="contact-name">{contact.name}</span>
                    {contact.link ? (
                        <a href={contact.link} target="_blank" rel="noopener noreferrer" className="contact-link">
                            {contact.url}
                        </a>
                    ) : (
                        <span>{contact.url}</span>
                    )}
                </p>
            ))}
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
                <main className="main-content">
                    <Hero />
                    <Skills />
                    <Experience />
                    <Education />
                    <Languages />
                    <Contact />
                </main>
            </div>
        </LanguageContext.Provider>
    );
}

// 渲染应用
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
