const { useState, useEffect } = React;

// 粒子背景组件
function Particles() {
    useEffect(() => {
        const createParticles = () => {
            const container = document.getElementById('particles');
            if (!container) return;

            const particleCount = 50;

            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 15 + 's';
                particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
                container.appendChild(particle);
            }
        };

        createParticles();
    }, []);

    return <div className="particles" id="particles"></div>;
}

// 主页头部组件
function Hero() {
    return (
        <div className="hero">
            <div className="profile-image-container">
                <div className="profile-image">
                    <span>YZ</span>
                </div>
            </div>
            <h1 className="glitch-text" data-text="Yuanzhen Zhu">Yuanzhen Zhu</h1>
            <p className="title">Digital Product Manager</p>
            <p className="tagline">Innovating digital solutions, transforming user experiences</p>
            <p className="location">📍 Madrid, España</p>
        </div>
    );
}

// 关于我组件
function About() {
    return (
        <div className="section">
            <h2 className="section-title">关于我</h2>
            <p className="about-text">
                我是一名充满激情的数字产品经理，专注于创造优雅且高效的数字解决方案。
                拥有超过5年的产品管理经验，曾在 CAF Digital Services、Autoscout24 和华为等知名公司工作。
                我热爱将数据转化为洞察，并将创新理念转化为成功的产品。我相信优秀的产品不仅要功能强大，
                更要为用户创造真正的价值。在业余时间，我喜欢学习最新的技术趋势，参与数据分析项目，
                并持续提升自己在数字产品领域的能力。
            </p>
        </div>
    );
}

// 技能项组件
function SkillItem({ name, level }) {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setWidth(level);
                    }
                });
            },
            { threshold: 0.5 }
        );

        const element = document.getElementById(`skill-${name}`);
        if (element) observer.observe(element);

        return () => observer.disconnect();
    }, [name, level]);

    return (
        <div className="skill-item" id={`skill-${name}`}>
            <div className="skill-name">{name}</div>
            <div className="skill-level">
                <div className="skill-progress" style={{ width: `${width}%` }}></div>
            </div>
        </div>
    );
}

// 技能组件
function Skills() {
    const skills = [
        { name: 'Digital Product Management', level: 95 },
        { name: 'Análisis de datos', level: 90 },
        { name: 'Power BI', level: 85 },
        { name: 'SQL', level: 80 },
        { name: 'Agile Methodologies', level: 85 },
        { name: 'User Experience Design', level: 75 },
    ];

    return (
        <div className="section">
            <h2 className="section-title">技能专长</h2>
            <div className="skills-grid">
                {skills.map((skill) => (
                    <SkillItem key={skill.name} name={skill.name} level={skill.level} />
                ))}
            </div>
        </div>
    );
}

// 语言组件
function Languages() {
    const languages = [
        { name: 'Chino (simplificado)', level: 'Native or Bilingual', flag: '🇨🇳' },
        { name: 'Español', level: 'Full Professional', flag: '🇪🇸' },
        { name: 'Inglés', level: 'Full Professional', flag: '🇬🇧' },
    ];

    return (
        <div className="section">
            <h2 className="section-title">语言能力</h2>
            <div className="skills-grid">
                {languages.map((lang, index) => (
                    <div className="skill-item" key={index}>
                        <div className="skill-name">{lang.flag} {lang.name}</div>
                        <div className="skill-level-text">{lang.level}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// 认证组件
function Certifications() {
    const certs = [
        { name: 'Digital Product Management', issuer: 'The Hero Camp', year: '2020' },
        { name: 'SQL for Data Science', issuer: 'Certification', year: '' },
        { name: 'Técnica Superior de Audiovisuales', issuer: 'IES Puerta Bonita', year: '2010' },
    ];

    return (
        <div className="section">
            <h2 className="section-title">专业认证</h2>
            <div className="timeline">
                {certs.map((cert, index) => (
                    <div className="timeline-item" key={index}>
                        <div className="timeline-date">{cert.year}</div>
                        <div className="timeline-title">{cert.name}</div>
                        <div className="timeline-subtitle">{cert.issuer}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// 时间线项组件
function TimelineItem({ date, title, subtitle, description }) {
    return (
        <div className="timeline-item">
            <div className="timeline-date">{date}</div>
            <div className="timeline-title">{title}</div>
            <div className="timeline-subtitle">{subtitle}</div>
            <div className="timeline-description">{description}</div>
        </div>
    );
}

// 工作经历组件
function Experience() {
    const experiences = [
        {
            date: 'Mayo 2022 - Presente',
            title: 'Product Manager',
            subtitle: 'CAF Digital Services',
            description: '负责数字产品管理，推动产品战略和 roadmap。与跨职能团队协作，开发创新的数字解决方案。通过数据分析优化产品性能，提升用户体验。'
        },
        {
            date: 'Abril 2021 - Mayo 2022',
            title: 'Product Manager',
            subtitle: 'Sumauto / Vocento (Autoscout24/Autocasión)',
            description: '管理汽车平台产品，协调产品开发流程。分析市场趋势和用户需求，推动产品功能迭代和优化。'
        },
        {
            date: 'Abril 2018 - Abril 2021',
            title: 'Product Manager',
            subtitle: 'Huawei CBG España - HUAWEI Mobile Services',
            description: '负责华为移动服务产品管理。与全球团队协作，推动产品在欧洲市场的落地和本地化。'
        },
        {
            date: 'Septiembre 2017 - Marzo 2018',
            title: 'Client Advisor',
            subtitle: 'Salvatore Ferragamo',
            description: '为客户提供高端购物体验，维护客户关系，提升品牌价值和客户满意度。'
        },
        {
            date: 'Marzo 2017 - Septiembre 2017',
            title: 'Client Advisor',
            subtitle: 'young promotion GmbH - Yves Saint Laurent, Helena Rubinstein',
            description: '在马德里机场为奢侈品牌提供客户咨询服务，提升客户购物体验。'
        },
        {
            date: 'Enero 2010 - Febrero 2017',
            title: 'Freelance',
            subtitle: 'Translation and Language Classes',
            description: '提供翻译服务和语言课程，帮助客户提升语言能力和跨文化交流。'
        },
        {
            date: 'Septiembre 2011 - Junio 2012',
            title: 'Language Teacher',
            subtitle: 'International Institute Of Languages',
            description: '教授语言课程，帮助学生掌握语言技能和跨文化交流能力。'
        },
        {
            date: 'Febrero 2010 - Junio 2010',
            title: 'Intern Web Development',
            subtitle: 'Laborla. Co. Ltd',
            description: '参与网页开发项目，学习前端和后端开发技术。'
        }
    ];

    return (
        <div className="section">
            <h2 className="section-title">工作经历</h2>
            <div className="timeline">
                {experiences.map((exp, index) => (
                    <TimelineItem key={index} {...exp} />
                ))}
            </div>
        </div>
    );
}

// 教育背景组件
function Education() {
    const education = [
        {
            date: '2020',
            title: 'Digital Product Management',
            subtitle: 'The Hero Camp',
            description: '专注于数字产品管理的专业培训课程，学习产品策略、用户研究和敏捷开发方法。'
        },
        {
            date: '2010 - 2014',
            title: 'Estudio de Asia y África',
            subtitle: 'Universidad Autónoma de Madrid',
            description: '深入学习亚洲和非洲的文化、历史和政治，培养国际视野和跨文化理解能力。'
        },
        {
            date: '2008 - 2010',
            title: 'Formación Profesional Superior - Realización de audiovisuales y espectáculos',
            subtitle: 'IES Puerta Bonita',
            description: '学习视听制作和娱乐行业的专业技术，包括视频制作、音频处理和多媒体设计。'
        }
    ];

    return (
        <div className="section">
            <h2 className="section-title">教育背景</h2>
            <div className="timeline">
                {education.map((edu, index) => (
                    <TimelineItem key={index} {...edu} />
                ))}
            </div>
        </div>
    );
}

// 联系方式组件
function Contact() {
    const contacts = [
        { icon: '📧', text: 'holazhu@icloud.com', href: 'mailto:holazhu@icloud.com' },
        { icon: '💼', text: 'LinkedIn', href: 'https://www.linkedin.com/in/yuanzhenzhu' },
        { icon: '🌍', text: 'Madrid, España', href: '#' },
    ];

    return (
        <div className="section">
            <h2 className="section-title">联系方式</h2>
            <div className="contact-links">
                {contacts.map((contact, index) => (
                    <a key={index} href={contact.href} className="contact-link" target={contact.href !== '#' ? '_blank' : ''} rel="noopener noreferrer">
                        {contact.icon} {contact.text}
                    </a>
                ))}
            </div>
        </div>
    );
}

// 鼠标拖尾效果组件
function MouseTrail() {
    useEffect(() => {
        const handleMouseMove = (e) => {
            const trail = document.createElement('div');
            trail.style.position = 'fixed';
            trail.style.left = e.clientX + 'px';
            trail.style.top = e.clientY + 'px';
            trail.style.width = '5px';
            trail.style.height = '5px';
            trail.style.background = 'linear-gradient(135deg, var(--neon-cyan), var(--neon-pink))';
            trail.style.borderRadius = '50%';
            trail.style.pointerEvents = 'none';
            trail.style.zIndex = '9999';
            trail.style.boxShadow = '0 0 10px var(--neon-cyan)';
            trail.style.transition = 'all 0.5s ease-out';
            document.body.appendChild(trail);

            setTimeout(() => {
                trail.style.opacity = '0';
                trail.style.transform = 'scale(0)';
            }, 100);

            setTimeout(() => {
                trail.remove();
            }, 600);
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return null;
}

// 主应用组件
function App() {
    return (
        <React.Fragment>
            <div className="grid-background"></div>
            <div className="scanlines"></div>
            <Particles />
            <MouseTrail />

            <div className="container">
                <Hero />
                <About />
                <Skills />
                <Languages />
                <Certifications />
                <Experience />
                <Education />
                <Contact />
            </div>
        </React.Fragment>
    );
}

// 渲染应用
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
