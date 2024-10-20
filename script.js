
    let words = document.querySelectorAll(".word");

    words.forEach((word) => {
        let letters = word.textContent.split(""); // Split each word into letters
        word.textContent = ""; // Clear the word's content
        letters.forEach((letter) => {
            let span = document.createElement("span"); // Create a span for each letter
            span.className = "letter"; // Add 'letter' class to span
            span.textContent = letter; // Add the letter content to the span
            word.append(span); // Append span to the word
        });
    });

    let currentWordIndex = 0;
    let maxWordIndex = words.length - 1;
    words[currentWordIndex].style.opacity = "1"; // Make the first word visible

    // Function to handle the text change with animation
    let changeText = () => {
        let currentWord = words[currentWordIndex]; // Get current word
        let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1]; // Get next word

        // Animate out the current word's letters
        Array.from(currentWord.children).forEach((letter, i) => {
            setTimeout(() => {
                letter.className = "letter out"; // Add 'out' class to fade out
            }, i * 80); // Stagger the animation by 80ms for each letter
        });

        nextWord.style.opacity = "1"; // Make next word visible
        Array.from(nextWord.children).forEach((letter, i) => {
            letter.className = "letter behind"; // Initialize next word's letters with 'behind' class
            setTimeout(() => {
                letter.className = "letter in"; // Transition to 'in' class for animation
            }, 340 + i * 80); // Delay for each letter to animate in
        });

        currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1; // Update current word index
    };

    changeText(); // Initial call to start the animation
    setInterval(changeText, 3000); // Repeat every 3 seconds


    // second JS
    //circle skills
    const circles = document.querySelectorAll('.circle');

    circles.forEach((elem) => {
        const dots = parseInt(elem.getAttribute("data-dots"), 10);
        const marked = parseInt(elem.getAttribute("data-percent"), 10);
        const percent = Math.floor((dots * marked) / 100); // Calculate how many dots to mark
        let points = '';
        const rotate = 360 / dots; // Calculate rotation for each point
    
        // Create points
        for (let i = 0; i < dots; i++) {
            points += `<div class="points" style="--i:${i}; --rot:${rotate * i}deg"></div>`;
        }
        elem.innerHTML = points;
    
        // Mark the points based on the percentage
        const pointsElements = elem.querySelectorAll('.points');
    
        // Mark points until the calculated percentage
        for (let i = 0; i < percent; i++) {
            if (i < pointsElements.length) {
                pointsElements[i].classList.add('marked'); // Add the 'marked' class
            }
        }
    });
    


// //mix it up portfolio sec
// var mixer = mixitup('.portfolio-galleryr');



//Active Menu___----------------------------------------
let menuLi=document.querySelectorAll('header ul li a');
let section =document.querySelectorAll('section');


function activeMenu(){
    let len = section.length;
    while (--len && window.scrollY + 97 < section[len].offsetTop) {}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll", activeMenu);



//Sticky Navbar
const header = document.querySelector("header");
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 50);
});

//toggle icon bar
let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("open");
};


window.onscroll = () => {
    menuIcon.classList.remove("bx-x");
    navlist.classList.remove("open");
};

// parallax

const observer=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show-items");
        }else{
            entry.target.classList.remove("show-items");
        }
    });
});

const scrollScale=document.querySelectorAll(".scroll-scale");
scrollScale.forEach((e1)=>observer.observe(e1));

const scrollBottom=document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((e1)=>observer.observe(e1));

const scrollTop=document.querySelectorAll(".scroll-top");
scrollTop.forEach((e1)=>observer.observe(e1));
