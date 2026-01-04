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
                    <span>ZH</span>
                </div>
            </div>
            <h1 className="glitch-text" data-text="张三">张三</h1>
            <p className="title">全栈开发工程师</p>
            <p className="tagline">用代码构建未来，用创新改变世界</p>
        </div>
    );
}

// 关于我组件
function About() {
    return (
        <div className="section">
            <h2 className="section-title">关于我</h2>
            <p className="about-text">
                我是一名充满激情的全栈开发工程师，专注于创造优雅且高效的数字解决方案。
                拥有5年以上的开发经验，精通前端和后端技术栈。我热爱探索新技术，
                并将其应用于实际项目中。我相信优秀的代码不仅是功能性的，更是一门艺术。
                在业余时间，我喜欢参与开源项目，分享技术见解，并持续学习最新的技术趋势。
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
        { name: 'JavaScript / TypeScript', level: 95 },
        { name: 'React / Vue', level: 90 },
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 80 },
        { name: '云服务 (AWS/阿里云)', level: 75 },
        { name: 'Docker / Kubernetes', level: 70 },
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
            date: '2021 - 至今',
            title: '高级全栈工程师',
            subtitle: '科技创新公司',
            description: '负责公司核心产品的前后端开发，带领团队完成多个重要项目。优化系统性能，提升用户体验。引入微服务架构，提高系统可扩展性。'
        },
        {
            date: '2019 - 2021',
            title: '前端开发工程师',
            subtitle: '互联网创业公司',
            description: '参与多个Web应用的开发，使用React和Vue构建用户界面。与设计团队紧密合作，将设计稿高质量还原为代码。'
        },
        {
            date: '2018 - 2019',
            title: '初级开发工程师',
            subtitle: '软件解决方案公司',
            description: '参与企业级应用的开发和维护。学习并掌握了多种编程语言和开发工具。'
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
    return (
        <div className="section">
            <h2 className="section-title">教育背景</h2>
            <div className="timeline">
                <TimelineItem
                    date="2014 - 2018"
                    title="计算机科学与技术"
                    subtitle="某某大学 - 本科"
                    description="主修计算机科学核心课程，包括数据结构、算法、操作系统、数据库等。毕业设计获得优秀毕业论文奖。"
                />
            </div>
        </div>
    );
}

// 联系方式组件
function Contact() {
    const contacts = [
        { icon: '📧', text: 'zhangsan@example.com', href: 'mailto:zhangsan@example.com' },
        { icon: '💻', text: 'GitHub', href: 'https://github.com' },
        { icon: '💼', text: 'LinkedIn', href: 'https://linkedin.com' },
        { icon: '🐦', text: 'Twitter', href: 'https://twitter.com' },
    ];

    return (
        <div className="section">
            <h2 className="section-title">联系方式</h2>
            <div className="contact-links">
                {contacts.map((contact, index) => (
                    <a key={index} href={contact.href} className="contact-link" target="_blank" rel="noopener noreferrer">
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
