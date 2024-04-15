const skillLogos = document.querySelectorAll('.skill img');

skillLogos.forEach(skillLogo => {
    skillLogo.addEventListener('mouseover', () => {
        skillLogo.nextElementSibling.style.display = 'block';
    });

    skillLogo.addEventListener('mouseout', () => {
        skillLogo.nextElementSibling.style.display = 'none';
    });
});



    const navLinks = document.querySelectorAll('.nav-link a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
          
            navLinks.forEach(link => link.classList.remove('active'));
  
            this.classList.add('active');
        });
    });
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    dropdownToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
        dropdownToggle.classList.toggle('active');
    });
    
    document.addEventListener('click', (event) => {
        const target = event.target;
        if (!target.closest('.navbar')) {
            navMenu.classList.remove('show');
            dropdownToggle.classList.remove('active');
        }
    });
    
    