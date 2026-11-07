// Typewriter effect for the message
const message = "I'm so sorry for hurting you. You mean everything to me, and I never wanted to make you sad. I promise to do better and cherish you every single day. Can you find it in your heart to forgive me? 💕";
const messageElement = document.getElementById('message');
let charIndex = 0;

function typeWriter() {
    if (charIndex < message.length) {
        messageElement.innerHTML += message.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 50);
    }
}

// Start typewriter effect when page loads
window.onload = function() {
    setTimeout(typeWriter, 1000);
    createFloatingHearts();
};

// Create floating hearts in background
function createFloatingHearts() {
    const container = document.getElementById('floatingHearts');
    const hearts = ['❤️', '💕', '💗', '💖', '💝', '💘'];
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
        heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
        container.appendChild(heart);
        
        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, 7000);
    }, 500);
}

// Button interactions
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const mainContent = document.querySelector('.main-content');
const hiddenMessage = document.getElementById('hiddenMessage');

yesBtn.addEventListener('click', function() {
    // Create celebration effect
    createCelebration();
    
    // Hide buttons and message, show thank you
    document.querySelector('.message-box').style.display = 'none';
    document.querySelector('.buttons').style.display = 'none';
    document.querySelector('.title').style.display = 'none';
    
    hiddenMessage.style.display = 'block';
    
    // Add more hearts
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            createFloatingHeart();
        }, i * 100);
    }
});

noBtn.addEventListener('click', function() {
    // Make the no button run away
    const maxX = window.innerWidth - noBtn.offsetWidth - 50;
    const maxY = window.innerHeight - noBtn.offsetHeight - 50;
    
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
    noBtn.style.zIndex = '1000';
    
    // Change text
    noBtn.innerHTML = 'Please? 🥺';
    
    // Add shake animation
    noBtn.style.animation = 'shake 0.5s ease-in-out';
});

// Add shake animation dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
`;
document.head.appendChild(style);

function createCelebration() {
    // Create confetti/heart explosion
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            createSparkle();
        }, i * 30);
    }
}

function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = Math.random() * window.innerWidth + 'px';
    sparkle.style.top = Math.random() * window.innerHeight + 'px';
    sparkle.style.background = ['#ff6b8a', '#ff8fab', '#ffb6c1', '#ffc0cb', '#ff69b4'][Math.floor(Math.random() * 5)];
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
    }, 1000);
}

function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.innerHTML = ['❤️', '💕', '💗', '💖', '💝', '💘'][Math.floor(Math.random() * 6)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (Math.random() * 2 + 2) + 's';
    heart.style.fontSize = (Math.random() * 30 + 30) + 'px';
    document.getElementById('floatingHearts').appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 4000);
}

// Add hover effect to yes button
yesBtn.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.1)';
});

yesBtn.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
});
