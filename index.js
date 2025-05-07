/* For sending emails */
function sendMail() {
  let params = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
  };

  emailjs.send('service_60uyshx', 'template_i321zgr', params);
}

function validateAndSendMail(event) {
  // Prevent the default form submit behavior
  event.preventDefault();

  // Get form field values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Check if required fields are filled
  if (!name || !email || !message) {
    const modal = new bootstrap.Modal(document.getElementById('fillUpFields'));
    modal.show();
    return;
  }

  // If validation passes, send the email and show the modal
  sendMail(); // Call your sendMail function

  // Clear the form fields
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';

  // Programmatically trigger the modal
  const modal = new bootstrap.Modal(document.getElementById('submitConfirm'));
  modal.show();
}

/* For project list */

const techLogos = {
  React: './images/React.png',
  CSS: './images/css.png',
  Bootstrap: './images/Bootstrap.png',
  ReactBootstrap: './images/ReactBootstrap.png',
  HTML: './images/html.png',
  JavaScript: './images/javascript.png',
  Vue: './images/Vue.png',
  Quasar: './images/Quasar.png',
  PHP: './images/PHP.png',
  MySQL: './images/MySQL.png',
  Express: './images/Express.png',
  MongoDB: './images/mongoDB-min.png',
  Figma: './images/Figma.png',
  Postman: './images/Postman.png',
};

const projects = [
  {
    title: 'Health Office Management System',
    description:
      'A LAN-based system designed for efficient patient record management, medicine inventory tracking, and queueing system integration. It streamlines operations in healthcare facilities by providing real-time updates and organized workflows.',
    imgSrc: './images/projects/MHOCLPRMIMQS.png',
    links: [
      { text: 'Project Link', url: 'https://yhuhz.github.io/MHOCLPRMIMQS' },
      { text: 'Frontend Code', url: 'https://github.com/yhuhz/MHOCLPRMIMQS' },
      {
        text: 'Backend Code',
        url: 'https://github.com/yhuhz/MHOCLPRMIMQS-PHP',
        disabled: false,
      },
    ],
    technologies: [
      { name: 'Vue', logo: techLogos.Vue },
      { name: 'Quasar', logo: techLogos.Quasar },
      { name: 'PHP', logo: techLogos.PHP },
      { name: 'MySQL', logo: techLogos.MySQL },
    ],
  },
  {
    title: 'Online Education Hub Project',
    description:
      'Designed and developed a responsive website for a fictional online education platform, utilizing HTML, CSS, and Bootstrap. The project showcases clean UI design, mobile-friendly layouts, and intuitive navigation to enhance the user experience.',
    imgSrc: './images/projects/Alexandria.png',
    links: [
      {
        text: 'Project Link',
        url: 'https://yhuhz.github.io/educational-resource-hub/',
      },
    ],
    technologies: [
      { name: 'HTML', logo: techLogos.HTML },
      { name: 'CSS', logo: techLogos.CSS },
      { name: 'Bootstrap', logo: techLogos.Bootstrap },
    ],
  },
  {
    title: 'Pastry Shop Project',
    description:
      'Developed a vibrant and inviting website for Macaroon 5, a fictional pastry shop specializing in artisanal macarons and baked goods. Leveraging HTML, CSS, and JavaScript, I crafted user-friendly layouts and seamless navigation, ensuring an engaging browsing experience. The design highlights the shop’s dedication to quality ingredients and delightful flavors, effectively showcasing products and brand identity.',
    imgSrc: './images/projects/Macaroon5.png',
    links: [
      { text: 'Project Link', url: 'https://yhuhz.github.io/macaroon-5/' },
    ],
    technologies: [
      { name: 'HTML', logo: techLogos.HTML },
      { name: 'CSS', logo: techLogos.CSS },
      { name: 'Bootstrap', logo: techLogos.Bootstrap },
      { name: 'JS', logo: techLogos.JavaScript },
    ],
  },
  {
    title: 'Orders and Produce',
    description:
      'Created a website for a fictional store selling religious items, emphasizing its mission to support the poor and promote charity. Utilized HTML, CSS, and JavaScript to design user-friendly layouts and navigation, showcasing products and mission effectively.',
    imgSrc: './images/projects/OandP.png',
    links: [
      { text: 'Project Link', url: 'https://yhuhz.github.io/Orders-Produce/' },
    ],
    technologies: [
      { name: 'HTML', logo: techLogos.HTML },
      { name: 'CSS', logo: techLogos.CSS },
      { name: 'Bootstrap', logo: techLogos.Bootstrap },
      { name: 'JS', logo: techLogos.JavaScript },
    ],
  },
  {
    title: 'Costa de Salina',
    description:
      'Designed and developed a website for a resort in Oas, Albay, highlighting local attractions and accommodations. Integrated interactive features like booking forms and real-time feedback using HTML, CSS, JavaScript, and PHP. This student project demonstrates my ability to combine technical skills and creative design for engaging user experiences.',
    imgSrc: './images/projects/CDS.png',
    links: [
      {
        text: 'Project Link',
        url: 'https://yhuhz.github.io/Costa-de-Salina-Resort',
      },
    ],
    technologies: [
      { name: 'HTML', logo: techLogos.HTML },
      { name: 'CSS', logo: techLogos.CSS },
      { name: 'JS', logo: techLogos.JavaScript },
      { name: 'PHP', logo: techLogos.PHP },
      { name: 'MySQL', logo: techLogos.MySQL },
    ],
  },
  {
    title: 'E-Commerce API Documentation',
    description:
      'Dynamic E-Commerce Workflow Management. The system features dynamic routes for order processing, real-time inventory updates, and secure user authentication. It also supports seamless automated order reporting and comprehensive product management. Documented Backend API published publicly using Postman.',
    imgSrc: './images/projects/EcommerceAPI.png',
    links: [
      {
        text: 'View API Documentation',
        url: 'https://documenter.getpostman.com/view/40605097/2sB2ca7fWm',
      },
    ],
    technologies: [
      { name: 'JS', logo: techLogos.JavaScript },
      { name: 'Express', logo: techLogos.Express },
      { name: 'MongoDB', logo: techLogos.MongoDB },
      { name: 'Postman', logo: techLogos.Postman },
    ],
  },
  {
    title: 'E-Commerce App',
    description:
      'MERN E-Commerce Platform. The platform features dynamic product catalog with filtering and sorting, real-time search, seamless cart updates, secure checkout, and a comprehensive admin dashboard with real-time analytics and user management capabilities.',
    imgSrc: './images/projects/ecommerce-app.png',
    links: [
      {
        text: 'Project Link',
        url: 'https://jnstore.vercel.app/',
      },
    ],
    technologies: [
      { name: 'React', logo: techLogos.React },
      { name: 'React Bootstrap', logo: techLogos.ReactBootstrap },
      { name: 'JS', logo: techLogos.JavaScript },
    ],
  },
  {
    title: 'Course Booking API Documentation',
    description:
      'RESTful API for managing course enrollments, featuring user registration, authentication, and retrieval of user details. Supports course creation, updates, archiving, activation, and student enrollment. Publicly documented using Postman.',
    imgSrc: './images/projects/course-booking-app.jpg',
    links: [
      {
        text: 'View API Documentation',
        url: '#',
        disabled: true,
      },
    ],
    technologies: [
      { name: 'JS', logo: techLogos.JavaScript },
      { name: 'Express', logo: techLogos.Express },
      { name: 'MongoDB', logo: techLogos.MongoDB },
    ],
  },
  {
    title: 'Course Booking App',
    description:
      'Course booking App A MERN-stack course enrollment system featuring user registration, authentication, and profile management. Authenticated users can create, update, archive, and activate courses. The platform also allows users to browse available courses and enroll seamlessly.',
    imgSrc: './images/projects/course-booking-app.jpg',
    links: [
      {
        text: 'Project Link',
        url: '#',
        disabled: true,
      },
    ],
    technologies: [
      { name: 'React', logo: techLogos.React },
      { name: 'React Bootstrap', logo: techLogos.ReactBootstrap },
      { name: 'JS', logo: techLogos.JavaScript },
    ],
  },

  {
    title: 'Airline Booking System Mockup',
    description:
      'Side Project Conceptual design showcasing an intuitive UI for flight search, seat selection, and booking confirmation, focusing on user experience and workflow efficiency.',
    imgSrc: './images/projects/airline-booking-mockup.png',
    links: [
      {
        text: 'Project Link',
        url: '#',
        disabled: true,
      },
    ],
    technologies: [{ name: 'Figma', logo: techLogos.Figma }],
  },
  {
    title: 'Airline Booking System Prototype',
    description:
      'Side Project: Interactive prototype simulating end-to-end airline booking functionalities, including flight search, reservation, payment processing, and real-time ticket management.',
    imgSrc: './images/projects/airline-booking-prototype.png',
    links: [
      {
        text: 'Project Link',
        url: '#',
        disabled: true,
      },
    ],
    technologies: [
      { name: 'React', logo: techLogos.React },
      { name: 'React Bootstrap', logo: techLogos.ReactBootstrap },
      { name: 'JS', logo: techLogos.JavaScript },
    ],
  },
];

const container = document.getElementById('projects-container');

projects.forEach((project, index) => {
  const projectCard = document.createElement('div');
  projectCard.className = 'col-12 col-md-4 col-lg-3 text-center card p-0';

  const bgColor = index % 2 === 0 ? '#f4f1e8' : '#ffe8d2';

  projectCard.innerHTML = `
    <img src="${project.imgSrc}" class="card-img-top" />
    <div class="card-body" style="background-color: ${bgColor}; padding: 10px;">
      <h4 class="pt-md-3 pb-md-2">${project.title}</h4>
      <p>${project.description}</p>
      <div class="technologies mt-3">
        ${project.technologies
          .map(
            (tech) => `
            <img src="${tech.logo}" alt="${tech.name} logo" 
            title="${tech.name}" class="tech-logo" />
          `
          )
          .join('')}
      </div>
      <div class="links mt-3">
        ${project.links
          .map((link) =>
            link.disabled
              ? `<button type="button" class="btn btn-outline-secondary" disabled>${link.text}</button>`
              : `<a href="${link.url}" target="_blank">
                   <button type="button" class="btn btn-outline-secondary">${link.text}</button>
                 </a>`
          )
          .join('')}
      </div>
    </div>
  `;

  container.appendChild(projectCard);
});

/* Carousel animation for tools */
document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.querySelector('.carousel');
  const images = document.querySelectorAll('.carousel .col-auto');

  // Clone images for seamless looping
  const clones = Array.from(images).map((img) => {
    const clone = img.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    return clone;
  });

  // Append clones
  carousel.append(...clones);

  // Adjust animation speed based on screen size
  function adjustAnimationSpeed() {
    const speed =
      window.innerWidth < 480
        ? 20 // Faster on small screens
        : window.innerWidth < 768
        ? 20
        : window.innerWidth < 992
        ? 10
        : 10;
    carousel.style.animationDuration = `${speed}s`;
  }

  // Initial setup
  adjustAnimationSpeed();

  // Update on resize
  window.addEventListener('resize', function () {
    adjustAnimationSpeed();
  });
});
