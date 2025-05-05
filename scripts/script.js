// JavaScript to toggle the navigation menu on smaller screens
// const navLinks = document.getElementById('nav-links');

// hamburger.addEventListener('click', () => {
//   navLinks.classList.toggle('active');
// });

// function showDetails(projectId) {
//     const projectDetails = {
      // project1: {
      //   "title": "PawPal",
      //   "description": "PawPal is a web platform designed for pet owners and institutions to connect and manage pet-related activities seamlessly. Developed as part of the CS546 course at Stevens Institute of Technology, it offers user-friendly features such as pet management, appointment scheduling, adoption facilitation, and journaling. PawPal ensures secure user authentication, personalized dashboards, and efficient interaction between users and institutions. Built using modern technologies like Node.js, MongoDB, and Bootstrap, it provides a robust, intuitive solution for enhancing the pet care experience.",
      //   "technologies": "HTML, CSS, JavaScript ES6, Node.js , Express.js, Handlebars, MongoDB",
      //   "url": "https://github.com/yashdd/PawPal_Petcare_Website"
      // },
      // project2: {
      //   "title": "Student Information Management System (SIMS)",
      //   "description": "The <strong>Student Information Management System (SIMS)</strong> is a web-based platform designed to streamline the management of student data and academic processes for educational institutions. It allows <strong>administrators</strong>, <strong>faculty</strong>, and <strong>students</strong> to efficiently handle tasks like student profiles, attendance, and grade tracking.<br><br><strong>Key Features:</strong><ul><li><strong>Student Records Management:</strong> Centralized storage and easy retrieval of student profiles.</li><li><strong>Attendance and Grades:</strong> Faculty can manage attendance and upload exam results.</li><li><strong>Notifications:</strong> Updates for exams, assignments, and announcements.</li><li><strong>Role-Based Access:</strong> Secure logins for administrators, faculty, and students.</li></ul>",
      //   "technologies": "HTML, CSS, Javascript, PHP, Ajax, MySQL, Jquery",
      //   "url": "https://www.kjsieit.in/sims/php/home.php"
      // },
      
      // project3:{
      //   "title": "Social Media Engagement Analysis Using Tableau",
      //   "description": "Conducted a comprehensive analysis of social media engagement using a Kaggle dataset containing 80,000+ posts across platforms like LinkedIn, Instagram, Twitter, and Facebook. <strong>Key Insights:</strong><br><ul><li><strong>Demographic Impact:</strong> Investigated how factors like age, gender, and location influence engagement.</li><li><strong>Post Types and Sentiments:</strong> Analyzed the effects of post types (text, image, video) and sentiments (positive, neutral, negative) on user interaction.</li><li><strong>Optimal Schedules:</strong> Explored variations in engagement across days and times to identify the best posting schedules.</li></ul><strong>Visualizations:</strong><br><ul><li>Developed diverse visualizations including heatmaps, bar charts, line graphs, scatter plots, pie charts, area charts, and box plots to derive actionable insights.</li></ul>",
      //   "technologies": "Tableau, Data Visualization, Statistical Analysis",
      //   "url": "https://github.com/yashdd/SocialMediaCampaignEffectiveness/tree/main"
      // },
      // project4: {
      //   title: "Depression Detection using Tweets Data",
      //   description: "Depression is a prevalent mental health disorder affecting millions of people worldwide. It can have serious consequences on individuals' lives, including impaired functioning, decreased quality of life, and increased risk of suicide. Analyzing tweets data presents a promising opportunity for detecting signs of depression and providing support to those in need. Prepared a dataset which contained normal tweets as well as depressive tweets. The size of the dataset was 28190. Used Data Vectorization to convert text data into numerical representations. By extracting word vectors for each token in the text samples and averaging them to obtain a single vector per sample, we generated feature vectors capturing the semantic meaning of the tweets. Implemented Support Vector Machines and Decision Tree with respective accuracies of 85% and 73% respectively",
      //   technologies: "Python, Machine Learning, ",
      //   "url": "https://github.com/yashdd/Depression_Detection_using_Twitter_tweets_data"
      // },
      // project5: {
      //   "title": "Customer Conversion Prediction for Insurance Sales",
      //   "description": "Developed a classification model to predict customer conversion in insurance sales using a Kaggle dataset with over 45,000 entries. <strong>Key Highlights:</strong><br><ul><li><strong>Machine Learning Algorithms:</strong> Implemented <em>Random Forest</em> and <em>Logistic Regression</em>, achieving an accuracy of 93%.</li><li><strong>Data Imbalance Handling:</strong> Utilized the <code>SMOTE</code> library to address class imbalance effectively.</li><li><strong>Outcome:</strong> A reliable tool for identifying potential customers, optimizing insurance sales strategies.</li></ul>",
      //   "technologies": "Python, scikit-learn, SMOTE, Machine Learning Algorithms",
      //   "url": "https://github.com/yashdd/Customer_Conversion_Prediction"
      // },
      // project6: {
      //   "title": "SocialNex - Social Media Website",
      //   "description": "Developed a social media website using Django, incorporating essential features such as user registration, login, following other users, adding posts, liking posts, and updating profile pictures. <strong>Key Highlights:</strong><br><ul><li><strong>User Authentication:</strong> Implemented secure user creation and login functionality.</li><li><strong>Social Features:</strong> Enabled following/unfollowing users and interaction through likes on posts.</li><li><strong>Profile Management:</strong> Included the ability to update profile pictures and personal details.</li><li><strong>Learning Focus:</strong> Built the project to strengthen understanding of Django concepts and web development.</li></ul>",
      //   "technologies": "Django, Python, HTML, CSS, JavaScript, SQLite",
      //   "url": "https://github.com/yashdd/SocialNex"
      // },
      // project7: {
      //   "title": "Transforming Coffee Shop Supplier Management with AWS Microservices",
      //   "description": "Deployed a scalable microservices architecture on AWS, transitioning from a monolithic app to microservices using Docker, ECS, and ECR. Created CI/CD pipelines with CodeDeploy and CodePipeline for seamless deployment and management of customer and employee microservices.",
      //   "technologies": "AWS, Docker, ECS, ECR, CodeDeploy, CodePipeline, Git",
      //   "url": "#"
      // },     
      // project8: {
      //   "title": "Machine Learning Approach for Chemotherapy Suitability Prediction Using Genomic Data",
      //   "description": "Published a technical research paper exploring the application of <strong>Machine Learning</strong> to predict chemotherapy suitability using genomic data. <strong>Key Highlights:</strong><br><ul><li><strong>Objective:</strong> Developed a predictive model to assist oncologists in identifying personalized treatment plans.</li><li><strong>Machine Learning Techniques:</strong> Applied advanced algorithms to analyze complex genomic datasets for classification and pattern recognition.</li><li><strong>Impact:</strong> Provided a data-driven approach to improving chemotherapy outcomes and advancing precision medicine.</li><li><strong>Publication:</strong> Featured in the <em>Social Science Research Network (SSRN) Journal</em>.</li></ul>",
      //   "technologies": "Machine Learning, Python, Flask",
      //   "url": "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3866817"
      // },
      // project9: {
      //   "title": "SARI Disease Survey App for Solapur District",
      //   "description": "Developed a mobile-compatible application to streamline disease survey processes for <strong>Asha Workers</strong>, a community of health workers in Solapur District, Maharashtra, India. <br><br><strong>Key Highlights:</strong><br><ul><li><strong>Technology Stack:</strong> Built using <em>HTML</em>, <em>CSS</em>, <em>PHP</em>, and <em>JavaScript</em>, along with <strong>Progressive Web Application (PWA)</strong> features for mobile support.</li><li><strong>Form Handling and Database Module:</strong> Implemented secure form handling and efficient data collection using <em>JavaScript</em> and <em>SQL</em>.</li><li><strong>Impact:</strong> Reduced manual effort for health workers, enabling proper data collection and analysis.</li><li><strong>Recognition:</strong> Received an <strong>Appreciation Letter</strong> from the Solapur District Health Officer for significant contributions.</li></ul>",
      //   "technologies": "HTML, CSS, PHP, JavaScript, SQL, Progressive Web Application (PWA)",
      //   "url": "files/Yash_Deshpande_Sari Survey Certificate.pdf"
      // },
      // project10: {
      //   "title": "USA Border Crossing Data Analysis",
      //   "description": "Conducted an in-depth analysis of Border Crossing Entry Data to uncover key trends and insights. Using <strong>Tableau</strong>, developed an engaging interactive story with <strong>8+ story points</strong>, featuring:<br><ul><li><strong>Introduction:</strong> Provided contextual information with visually appealing overviews.</li><li><strong>Dashboards:</strong> Designed 2 comprehensive dashboards, each containing <em>2+ related graphs</em> to showcase patterns and trends.</li><li><strong>Plots:</strong> Created <em>4 independent plots</em> to highlight significant trends.</li><li><strong>Closing Point:</strong> Summarized findings and key takeaways based on the visualizations.</li></ul>The project adhered to data visualization best practices, emphasizing <strong>clear organization</strong>, <strong>engaging design</strong>, and a <strong>coherent narrative</strong> to enhance understanding of border crossing trends and their implications.",
      //   "technologies": "Tableau, Data Visualization",
      //   "url": "https://github.com/yashdd/USA_Border_Crossing_Data_Analysis"
      // }
      
       
      
//     };
  
//     const project = projectDetails[projectId];
//     if (project) {
//       const modalContent = `
//         <h2>${project.title}</h2>
//         <p>${project.description}</p>
//         <p><strong>Technologies Used:</strong> ${project.technologies}</p>
//       `;
//       document.getElementById("project-details").innerHTML = modalContent;
//       document.getElementById("project-details-modal").style.display = "block";
//       const viewProjectButton = document.getElementById("modal-link");

//       viewProjectButton.href = project.url;
//     }
//   }
  
//   function closeDetails() {
//     document.getElementById("project-details-modal").style.display = "none";
//   }
// Modal handling functions
function openModal(projectId) {
  const modal = document.getElementById("project-modal");
  const modalContent = document.getElementById("modal-project-content");

  const projects = {
    project1: {
      "title": "PawPal",
      "description": "PawPal is a web platform designed for pet owners and institutions to connect and manage pet-related activities seamlessly. Developed as part of the CS546 course at Stevens Institute of Technology, it offers user-friendly features such as pet management, appointment scheduling, adoption facilitation, and journaling. PawPal ensures secure user authentication, personalized dashboards, and efficient interaction between users and institutions. Built using modern technologies like Node.js, MongoDB, and Bootstrap, it provides a robust, intuitive solution for enhancing the pet care experience.",
      "technologies": "HTML, CSS, JavaScript ES6, Node.js , Express.js, Handlebars, MongoDB",
      "url": "https://github.com/yashdd/PawPal_Petcare_Website"
    },
    project2: {
      "title": "Student Information Management System (SIMS)",
      "description": "The Student Information Management System is a web-based platform designed to streamline student data and academic process management. It helps administrators, faculty, and students handle tasks such as managing student profiles, tracking attendance, and recording grades. Key features include centralized student records, attendance and grade management, notifications for exams and assignments, and secure role-based access for users. It is a Website as well as a Mobile Application.",
      "technologies": "HTML, CSS, JavaScript, PHP, Ajax, MySQL, jQuery",
      "url": "https://www.kjsieit.in/sims/php/home.php"
    },
    
    project3: {
      "title": "Social Media Engagement Analysis Using Tableau",
      "description": "This project involved analyzing social media engagement across platforms like LinkedIn, Instagram, Twitter, and Facebook using a Kaggle dataset of over 80,000 posts. The analysis explored demographic factors, post types, sentiments, and posting schedules to identify strategies for improved engagement. Key insights included the impact of demographics on engagement, the influence of content types and sentiments, and the best times to post. Data visualizations such as heatmaps, bar charts, and line graphs were used to present findings effectively.",
      "technologies": "Tableau, Data Visualization, Statistical Analysis",
      "url": "https://github.com/yashdd/SocialMediaCampaignEffectiveness/tree/main"
    },
    project4: {
      title: "Depression Detection using Tweets Data",
      description: "Depression is a prevalent mental health disorder affecting millions of people worldwide. It can have serious consequences on individuals' lives, including impaired functioning, decreased quality of life, and increased risk of suicide. Analyzing tweets data presents a promising opportunity for detecting signs of depression and providing support to those in need. Prepared a dataset which contained normal tweets as well as depressive tweets. The size of the dataset was 28190. Used Data Vectorization to convert text data into numerical representations. By extracting word vectors for each token in the text samples and averaging them to obtain a single vector per sample, we generated feature vectors capturing the semantic meaning of the tweets. Implemented Support Vector Machines and Decision Tree with respective accuracies of 85% and 73% respectively",
      technologies: "Python, Machine Learning",
      "url": "https://github.com/yashdd/Depression_Detection_using_Twitter_tweets_data"
    },
    
      project5: {
        "title": "Customer Conversion Prediction for Insurance Sales",
        "description": "Built a classification model to predict customer conversion in insurance sales using a Kaggle dataset with over 45,000 entries. Implemented Random Forest and Logistic Regression, achieving an accuracy of 93%. Addressed data imbalance using the SMOTE library, improving model performance. The final model serves as a reliable tool for identifying potential customers and optimizing insurance sales strategies.",
        "technologies": "Python, scikit-learn, SMOTE, Machine Learning Algorithms",
        "url": "https://github.com/yashdd/Customer_Conversion_Prediction"
      },
    
      project6: {
        "title": "SocialNex - Social Media Website",
        "description": "Developed a social media platform using Django, featuring user authentication, post creation, likes, and profile management. Implemented secure user registration and login, allowing users to follow/unfollow others, interact through likes, and update profile details. The project was built to strengthen Django and web development expertise.",
        "technologies": "Django, Python, HTML, CSS, JavaScript, SQLite",
        "url": "https://github.com/yashdd/SocialNex"
      },
    
      project7: {
        "title": "Transforming Coffee Shop Supplier Management with AWS Microservices",
        "description": "Designed and deployed a scalable microservices architecture for a coffee shop supplier management system, transitioning from a monolithic app to microservices using Docker, ECS, and ECR. Implemented CI/CD pipelines with AWS CodeDeploy and CodePipeline for seamless deployment and management of customer and employee microservices.",
        "technologies": "AWS, Docker, ECS, ECR, CodeDeploy, CodePipeline, Git",
        "url": "#"
      },
    
       
    project8: {
      "title": "Machine Learning Approach for Chemotherapy Suitability Prediction Using Genomic Data",
      "description": "This project presents a technical research paper that explores the application of <strong>Machine Learning</strong> to predict chemotherapy suitability using genomic data. The aim was to develop a predictive model that assists oncologists in determining personalized treatment plans. Key machine learning algorithms were applied to analyze complex genomic datasets for classification and pattern recognition, leading to a data-driven approach to improving chemotherapy outcomes. This work was published in the <em>Social Science Research Network (SSRN) Journal</em>, advancing the field of precision medicine.",
      "technologies": "Machine Learning, Python, Flask",
      "url": "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3866817"
    },
    project9: {
      "title": "SARI Disease Survey App for Solapur District",
      "description": "Developed a mobile-compatible application to streamline the disease survey process for <strong>Asha Workers</strong> in Solapur District, Maharashtra, India. The app includes features such as secure form handling and efficient data collection using <em>JavaScript</em> and <em>SQL</em>. Built with <em>HTML</em>, <em>CSS</em>, <em>PHP</em>, and <em>JavaScript</em>, the app integrates Progressive Web Application (PWA) features for mobile support. This application reduces manual effort and allows for proper data collection and analysis, making it a valuable tool for health workers. An appreciation letter was received from the Solapur District Health Officer for this contribution.",
      "technologies": "HTML, CSS, PHP, JavaScript, SQL, Progressive Web Application (PWA)",
      "url": "files/Yash_Deshpande_Sari Survey Certificate.pdf"
    },
    project10: {
      "title": "USA Border Crossing Data Analysis",
      "description": "In this project, I conducted an in-depth analysis of Border Crossing Entry Data using <strong>Tableau</strong>, uncovering trends and insights. The analysis features an engaging interactive story with over 8 story points, including two comprehensive dashboards with multiple graphs and four independent plots. The project emphasizes data visualization best practices, ensuring clear organization, engaging design, and a coherent narrative that enhances the understanding of border crossing trends and their implications.",
      "technologies": "Tableau, Data Visualization",
      "url": "https://github.com/yashdd/USA_Border_Crossing_Data_Analysis"
    },
    project12: {
      "title": "AttendEazy",
      "description": "AttendEazy is a full-stack event management and ticketing platform where users can discover, register, and book events. Organizers can add and manage events through a custom dashboard, with integrated Stripe payments, QR-based ticketing, and a real-time attendee tracker. Built with React, Node.js, Express, and MongoDB, the platform supports both user and host experiences with responsive design and secure routing.",
      "technologies": "React, Node.js, Express, MongoDB, Redux, Stripe",
      "url": "https://github.com/yashdd/Attendeazy"
    },
    project11: {
      "title": "SurroundShield",
  "description": "SurroundShield is an AI-powered risk analysis assistant that provides personalized safety guidance based on weather, location, and user profile. It features a React frontend, an Express backend for user handling, a Flask-based service for LLM prompt interaction, and integrates MongoDB for data management. LLaMA 3.3(70B) model was fine-tuned using Databricks for generating real-time responses tailored to contextual inputs.",
  "technologies": "React, Express, Flask, MongoDB, Databricks, LLaMA",
  "url": "https://github.com/yashdd/SurroundShield"
    }
  };

  const project = projects[projectId];

  modalContent.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p><br>
    <p><strong>Technologies Used:</strong> ${project.technologies}</p>
    <a href="${project.url}" target="_blank">Learn More</a>
  `;

  modal.style.display = "flex";
}

function closeModal() {
  document.getElementById("project-modal").style.display = "none";
}

const filterButtons = document.querySelectorAll('.filter-btn');
const projectBoxes = document.querySelectorAll('.project-box');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove 'active' class from all buttons
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const filter = button.getAttribute('data-filter');

    projectBoxes.forEach(box => {
      const category = box.getAttribute('data-category');

      if (filter === 'all' || category === filter) {
        box.style.display = 'block';
      } else {
        box.style.display = 'none';
      }
    });
  });
});

const chatButton = document.getElementById('chat-button');
const chatbotFrame = document.getElementById('chatbot-frame');
const closeButton = document.querySelector('.close-button');
const notificationBadge = document.querySelector('.notification-badge');
const messagePopup = document.getElementById('message-popup');

// Message templates for popups
const messages = [
  "Hello there! Need any assistance today?",
  "Got a question? I'm here to help!",
  "Welcome! How can I assist you today?",
  "Need some information? Just ask me!"
];

// Toggle chatbot visibility
chatButton.addEventListener('click', function() {
  chatbotFrame.classList.toggle('active');
  
  // Hide any active message popups
  messagePopup.style.display = 'none';
  
  // Add wave effect on click
  chatButton.classList.add('wave-effect');
  setTimeout(() => {
    chatButton.classList.remove('wave-effect');
  }, 1000);
  
  // Hide notification badge when opened
  if (chatbotFrame.classList.contains('active')) {
    notificationBadge.style.display = 'none';
  }
});

// Close chatbot when X is clicked
closeButton.addEventListener('click', function(e) {
  e.stopPropagation();
  chatbotFrame.classList.remove('active');
});

// Make message popup clickable to open chat
messagePopup.addEventListener('click', function() {
  chatbotFrame.classList.add('active');
  messagePopup.style.display = 'none';
  notificationBadge.style.display = 'none';
});

// Function to show message popup
function showMessagePopup() {
  if (!chatbotFrame.classList.contains('active')) {
    // Get random message
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    messagePopup.querySelector('.message-text').textContent = randomMessage;
    
    // Show popup with animation
    messagePopup.style.display = 'flex';
    
    // Reset the animation
    messagePopup.style.animation = 'none';
    messagePopup.offsetHeight; // Trigger reflow
    messagePopup.style.animation = 'slideIn 6s forwards';
    
    // Show notification badge
    setTimeout(() => {
      notificationBadge.style.display = 'flex';  
    }, 6000);
  }
}

// Show first message popup after delay
setTimeout(showMessagePopup, 5000);

// Show periodic message popups
setInterval(function() {
  if (!chatbotFrame.classList.contains('active')) {
    showMessagePopup();
  }
}, 30000);

// Add typing indicator functionality
function showTypingIndicator() {
  if (!chatbotFrame.classList.contains('active')) {
    const messageText = messagePopup.querySelector('.message-text');
    const typingIndicator = document.createElement('div');
    typingIndicator.className = 'typing-indicator';
    
    for (let i = 0; i < 3; i++) {
      const dot = document.createElement('span');
      dot.className = 'typing-dot';
      typingIndicator.appendChild(dot);
    }
    
    messageText.textContent = '';
    messageText.appendChild(typingIndicator);
    
    messagePopup.style.display = 'flex';
    messagePopup.style.animation = 'none';
    messagePopup.offsetHeight; // Trigger reflow
    
    setTimeout(() => {
      // Replace typing indicator with actual message
      const randomMessage = messages[Math.floor(Math.random() * messages.length)];
      messageText.textContent = randomMessage;
      messagePopup.style.animation = 'slideIn 6s forwards';
    }, 1500);
  }
}

// Occasionally show typing indicator before message
setInterval(function() {
  if (!chatbotFrame.classList.contains('active') && Math.random() > 0.5) {
    showTypingIndicator();
  }
}, 45000);

document.getElementById('chat-close-btn').addEventListener('click', function() {
  document.getElementById('chatbot-frame').classList.remove('active');
});