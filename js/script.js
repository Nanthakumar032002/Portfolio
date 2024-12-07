const toggler = document.querySelector('.navbar-toggler');
const fullscreenMenu = document.getElementById('fullscreenMenu');

toggler.addEventListener('click', () => {
  fullscreenMenu.classList.toggle('show');
});

var uploadprogress = document.getElementById("uploadprogress");

setInterval(() => {
  uploadprogress.classList.toggle("progress-bar-animated")
}, 3000);

// nav
window.addEventListener('scroll', function () {
  const navbar = document.getElementById('main-navbar');

  if (window.scrollY > 50) {
    navbar.classList.add('scrolled'); 
  } else {
    navbar.classList.remove('scrolled'); 
  }
});

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show-up');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 }); 
const elements = document.querySelectorAll('.about-us-heading, .about-us-righ-content, .about-us-left, .deatails');
elements.forEach(element => {
  observer.observe(element);
});

// resume
// Create an IntersectionObserver
const scrollObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {

      entry.target.classList.add('visible');
      
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });


const resumeSections = document.querySelectorAll('.resume-heading, .resume-left-content, .resume-left-content-1');


resumeSections.forEach(section => {
  scrollObserver.observe(section);
});

// skills

const skillsSectionElement = document.querySelector('.my-skills');
const skillsObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      skillsSectionElement.classList.add('visible');
      const skillBars = document.querySelectorAll('.progress-bar');
      skillBars.forEach(skillBar => {
        skillBar.classList.add('show-progress');
      });
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });
skillsObserver.observe(skillsSectionElement);


// Interestin-work

// Select the section elements
const workSection = document.querySelector('.intersting-work');
const heading = document.querySelector('.intersting-work-h1');
const button = document.querySelector('.intersting-work-button');

const workObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      heading.classList.add('visible');
      button.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 }); 


workObserver.observe(workSection);

// skills
function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
}

// Function to handle the animation trigger
function checkVisibility() {
  const skills = document.querySelectorAll('.skills'); // Select all skill sections
  skills.forEach(skill => {
    if (isInViewport(skill)) {
      skill.classList.add('show'); // Add 'show' class when element is in view
    }
  });
}
window.addEventListener('scroll', checkVisibility);


document.addEventListener('DOMContentLoaded', checkVisibility);

// portfolio


const sections = document.querySelectorAll('.portfolio, .intersting-work, .mydetails, .my-footer');

const observerss = new IntersectionObserver((entries, observerss) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      
      entry.target.classList.add('visible');
      observerss.unobserve(entry.target); 
    }
  });
}, { threshold: 0.5 });

// Observe each section
sections.forEach(section => {
  observerss.observe(section);
});

// Add the animation for tab switching panels
const radioButtons = document.querySelectorAll('.radio');
const panels = document.querySelectorAll('.panel');

radioButtons.forEach(button => {
  button.addEventListener('change', () => {
    // Hide all panels
    panels.forEach(panel => panel.classList.remove('visible'));

    // Show the corresponding panel based on the selected radio button
    const panelId = `${button.id}-panel`;
    const activePanel = document.getElementById(panelId);
    activePanel.classList.add('visible');
  });
});
