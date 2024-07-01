const interactiveBg = document.getElementById('interactive-bg');

for (let i = 0; i < 50; i++) {
    const dot = document.createElement('div');
    dot.classList.add('bg-dot');
    dot.style.left = `${Math.random() * 100}%`;
    dot.style.top = `${Math.random() * 100}%`;
    dot.style.animationDelay = `${Math.random() * 2}s`;
    interactiveBg.appendChild(dot);
}

const particlesContainer = document.getElementById('particles-js');

window.addEventListener('mousemove', (e) => {
    const { clientX: mouseX, clientY: mouseY } = e;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const offsetX = (mouseX / windowWidth - 0.5) * 30;
    const offsetY = (mouseY / windowHeight - 0.5) * 30;

    particlesContainer.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
});

const skillBubbles = [
    { name: 'Skill', color: '#f1c40f' },
    { name: 'Skill', color: '#3498db' },
    { name: 'Skill', color: '#61dafb' },
    { name: 'Skill', color: '#27ae60' },
    { name: 'Skill', color: '#e74c3c' },
    { name: 'Skill', color: '#e67e22' },
    { name: 'Skill', color: '#34495e' },
    { name: 'Skill', color: '#9b59b6' },
    { name: 'Skill', color: '#1abc9c' },
    { name: 'Skill', color: '#d35400' },
];

const skillBubbleContainer = document.getElementById('skill-container');

skillBubbles.forEach(skill => {
    const bubble = document.createElement('div');
    bubble.classList.add('skill-bubble');
    bubble.textContent = skill.name;
    bubble.style.backgroundColor = skill.color;
    bubble.style.color = '#fff';

    bubble.addEventListener('mouseover', () => {
        bubble.style.transform = 'scale(1.1)';
    });

    bubble.addEventListener('mouseout', () => {
        bubble.style.transform = 'scale(1)';
    });

    skillBubbleContainer.appendChild(bubble);
});

const projects = [
    { name: 'Project 1', description: 'Description of Project 1', color: '#3498db' },
    { name: 'Project 2', description: 'Description of Project 2', color: '#e74c3c' },
    { name: 'Project 3', description: 'Description of Project 3', color: '#2ecc71' },
    { name: 'Project 4', description: 'Description of Project 4', color: '#f39c12' },
];

const projectGrid = document.getElementById('project-grid');

projects.forEach(project => {
    const card = document.createElement('div');
    card.classList.add('project-card');
    card.innerHTML = `
        <div class="project-card-content">
            <h3>${project.name}</h3>
            <p>${project.description}</p>
        </div>
    `;
    card.style.borderTop = `5px solid ${project.color}`;

    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`);
    });

    projectGrid.appendChild(card);
});

const revealText = () => {
    const reveals = document.querySelectorAll('.reveal-text');
    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add('revealed');
        }
    });
}

window.addEventListener('scroll', revealText);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
    contactForm.reset();
});

window.addEventListener('scroll', () => {
    const parallaxElements = document.querySelectorAll('.parallax');
    parallaxElements.forEach(element => {
        const scrollPosition = window.pageYOffset;
        element.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    });
});

const typingEffect = (element, text, speed = 100) => {
    let i = 0;
    const timer = setInterval(() => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
            element.classList.add('typing-effect');
        }
    }, speed);
};

const skillsTitle = document.querySelector('#skills h3');
typingEffect(skillsTitle, 'Skills & Expertise');

particlesJS('particles-js', {
    particles: {
        number: { value: 80 },
        color: { value: '#3498db' },
        shape: { type: 'circle' },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        move: { enable: true, speed: 2 }
    }
});

VanillaTilt.init(document.querySelectorAll('.project-card'), {
    max: 15,
    speed: 400,
    glare: true,
    'max-glare': 0.2
});

const skills = [
    { name: 'Skill', level: 90 },
    { name: 'Skill', level: 85 },
    { name: 'Skill', level: 80 },
    { name: 'Skill', level: 75 },
    { name: 'Skill', level: 85 },
    { name: 'Skill', level: 95 },
    { name: 'Skill', level: 80 },
    { name: 'Skill', level: 70 },
];

const skillContainer = document.getElementById('skill-container');

skills.forEach(skill => {
    const skillBar = document.createElement('div');
    skillBar.classList.add('skill-bar');

    const skillProgress = document.createElement('div');
    skillProgress.classList.add('skill-progress');

    const skillName = document.createElement('span');
    skillName.textContent = `${skill.name} - ${skill.level}%`;

    skillBar.appendChild(skillProgress);
    skillBar.appendChild(skillName);
    skillContainer.appendChild(skillBar);

    setTimeout(() => {
        skillProgress.style.width = `${skill.level}%`;
    }, 200);
});