document.addEventListener("DOMContentLoaded", function () {
    // Hamburger menu functions
    window.hamburg = function () {
      const navbar = document.querySelector(".dropdown");
      navbar.style.transform = "translateY(0px)";
    };
  
    window.cancel = function () {
      const navbar = document.querySelector(".dropdown");
      navbar.style.transform = "translateY(-500px)";
    };
  
    // Typewriter Effect
    const texts = [
      "DATA SCIENTIST",
      "MACHINE LEARNING ENGINEER",
      "NLP-ENGINEER"
    ];
    const speed = 100;
    const textElement = document.querySelector(".typewriter-text");
    let textIndex = 0;
    let characterIndex = 0;
  
    function typeWriter() {
      if (characterIndex < texts[textIndex].length) {
        textElement.innerHTML += texts[textIndex].charAt(characterIndex);
        characterIndex++;
        setTimeout(typeWriter, speed);
      } else {
        setTimeout(eraseText, 1000);
      }
    }
  
    function eraseText() {
      if (textElement.innerHTML.length > 0) {
        textElement.innerHTML = textElement.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50);
      } else {
        textIndex = (textIndex + 1) % texts.length;
        characterIndex = 0;
        setTimeout(typeWriter, 500);
      }
    }
    
    // Start the typewriter effect
    typeWriter();
  
    // About Me Tabs Functionality
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanels = document.querySelectorAll('.tab-panel');
  
    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active state from all buttons
        tabButtons.forEach(btn => btn.classList.remove('active'));
        // Activate the clicked button
        button.classList.add('active');
  
        // Hide all tab panels
        tabPanels.forEach(panel => panel.classList.remove('active'));
  
        // Show target panel
        const targetSelector = button.getAttribute('data-target');
        const targetPanel = document.querySelector(targetSelector);
        if (targetPanel) {
          targetPanel.classList.add('active');
        }
      });
    });
  
    // Winner Bounce Effect (applied silently)
    const winnerImage = document.getElementById("winnerImage");
    if (winnerImage) {
      setInterval(() => {
        winnerImage.classList.toggle("bounce");
      }, 2000);
    }
  
    /* --- Contact Modal Functionality --- */
    const openContactBtn = document.getElementById("openContactBtn"); // Trigger button for modal
    const contactModal = document.getElementById("contactModal");       // Modal container
    const closeContactBtn = document.getElementById("closeContactBtn"); // Close button inside modal
  
    if (openContactBtn && contactModal && closeContactBtn) {
      // Open the modal when trigger is clicked
      openContactBtn.addEventListener("click", function () {
        contactModal.style.display = "block";
      });
  
      // Close modal when X button is clicked
      closeContactBtn.addEventListener("click", function () {
        contactModal.style.display = "none";
      });
  
      // Close modal if user clicks outside modal content
      window.addEventListener("click", function (event) {
        if (event.target === contactModal) {
          contactModal.style.display = "none";
        }
      });
    }
    
    /* --- Contact Form Submission Functionality --- */
    const contactForm = document.getElementById("contactFormModal");
if (contactForm) {
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const modalUserEmail = document.getElementById("modalUserEmail").value.trim();
    const modalUserQuestion = document.getElementById("modalUserQuestion").value.trim();
    if (modalUserEmail && modalUserQuestion) {
      const mailtoLink = `mailto:hemandadishr@gmail.com?subject=Contact Inquiry&body=From:%20${encodeURIComponent(modalUserEmail)}%0A%0A${encodeURIComponent(modalUserQuestion)}`;
      window.location.href = mailtoLink;
    } else {
      alert("Please fill in both your email and question.");
    }
      });
    }
  });
  