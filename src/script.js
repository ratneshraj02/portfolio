
        // Mobile Menu Toggle
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Navigation Active Link
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');
        
        window.addEventListener('scroll', () => {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (pageYOffset >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === current) {
                    link.classList.add('active');
                }
            });
        });
        
        // Back to Top Button
        const backToTopButton = document.getElementById('back-to-top');
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.remove('opacity-0', 'invisible');
                backToTopButton.classList.add('opacity-100', 'visible');
            } else {
                backToTopButton.classList.remove('opacity-100', 'visible');
                backToTopButton.classList.add('opacity-0', 'invisible');
            }
        });
        
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Contact Form Submission
        const contactForm = document.getElementById('contact-form');
        
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // In a real application, you would send the form data to a server
            // For this demo, we'll just show a success message
            
            const formData = new FormData(contactForm);
            const formValues = Object.fromEntries(formData.entries());
            
            // Clear the form
            contactForm.reset();
            
            // Show success message
            alert('Thank you for your message! I will get back to you soon.');
        });
        
        // Project Modal
        const projectModal = document.getElementById('project-modal');
        const modalTitle = document.getElementById('modal-title');
        const modalContent = document.getElementById('modal-content');
        
        function showProjectDetails(projectId) {
            let title = '';
            let content = '';
            
            if (projectId === 'ecommerce') {
                title = 'E-Commerce Platform';
                content = `
                    <div class="space-y-4">
                        <div class="bg-gradient-to-r from-blue-500 to-indigo-600 h-48 rounded-lg flex items-center justify-center mb-4">
                            <svg class="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                            </svg>
                        </div>
                        
                        <div class="flex justify-between items-center">
                            <div>
                                <span class="text-xs font-medium bg-green-100 text-green-800 py-1 px-2 rounded">Internship Project</span>
                                <span class="text-xs font-medium bg-blue-100 text-blue-800 py-1 px-2 rounded ml-2">3 Months</span>
                            </div>
                            <div class="flex space-x-2">
                                <a href="#" class="text-blue-600 hover:text-blue-800">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        
                        <div>
                            <h4 class="text-lg font-medium mb-2 text-gray-800">Project Overview</h4>
                            <p class="text-gray-600 mb-4">
                                Developed a comprehensive e-commerce platform during my internship at Digital Innovations Inc. 
                                The platform provides a complete online shopping experience with product catalog, user accounts, 
                                shopping cart functionality, and secure payment processing integration.
                            </p>
                        </div>
                        
                        <div>
                            <h4 class="text-lg font-medium mb-2 text-gray-800">Key Features</h4>
                            <ul class="list-disc list-inside text-gray-600 space-y-1">
                                <li>User authentication and profile management</li>
                                <li>Product catalog with search and filtering capabilities</li>
                                <li>Shopping cart and wishlist functionality</li>
                                <li>Secure payment processing integration</li>
                                <li>Order tracking and history</li>
                                <li>Admin dashboard for inventory and order management</li>
                                <li>Responsive design for mobile and desktop</li>
                            </ul>
                        </div>
                        
                        <div>
                            <h4 class="text-lg font-medium mb-2 text-gray-800">Technologies Used</h4>
                            <div class="flex flex-wrap gap-2">
                                <span class="bg-gray-100 text-gray-800 px-3 py-1 rounded">React</span>
                                <span class="bg-gray-100 text-gray-800 px-3 py-1 rounded">Node.js</span>
                                <span class="bg-gray-100 text-gray-800 px-3 py-1 rounded">Express</span>
                                <span class="bg-gray-100 text-gray-800 px-3 py-1 rounded">MongoDB</span>
                                <span class="bg-gray-100 text-gray-800 px-3 py-1 rounded">Bootstrap</span>
                                <span class="bg-gray-100 text-gray-800 px-3 py-1 rounded">Redux</span>
                                <span class="bg-gray-100 text-gray-800 px-3 py-1 rounded">Stripe API</span>
                            </div>
                        </div>
                        
                        <div>
                            <h4 class="text-lg font-medium mb-2 text-gray-800">My Role & Contributions</h4>
                            <ul class="list-disc list-inside text-gray-600 space-y-1">
                                <li>Designed and implemented the frontend UI using React and Bootstrap</li>
                                <li>Developed RESTful APIs for product and user data</li>
                                <li>Implemented shopping cart functionality with Redux</li>
                                <li>Integrated Stripe payment processing</li>
                                <li>Created admin dashboard for inventory management</li>
                                <li>Collaborated with UX designers to ensure a user-friendly interface</li>
                                <li>Participated in code reviews and implemented feedback</li>
                            </ul>
                        </div>
                        
                        <div>
                            <h4 class="text-lg font-medium mb-2 text-gray-800">Challenges & Solutions</h4>
                            <p class="text-gray-600 mb-2">
                                One of the main challenges was implementing secure payment processing. I researched various 
                                payment gateways and ultimately integrated Stripe for its robust security features and 
                                developer-friendly API. I implemented server-side validation and secure handling of payment 
                                information to ensure customer data protection.
                            </p>
                            <p class="text-gray-600">
                                Another challenge was optimizing the product catalog for performance with a large number of items. 
                                I implemented pagination, lazy loading of images, and database indexing to improve load times and 
                                overall system responsiveness, resulting in a 35% improvement in page load speed.
                            </p>
                        </div>
                    </div>
                `;
            } else if (projectId === 'taskapp') {
                title = 'Task Management App';
                content = `
                    <div class="space-y-4">
                        <div class="bg-gradient-to-r from-cyan-500 to-teal-500 h-48 rounded-lg flex items-center justify-center mb-4">
                            <svg class="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                            </svg>
                        </div>
                        
                        <div class="flex justify-between items-center">
                            <div>
                                <span class="text-xs font-medium bg-blue-100 text-blue-800 py-1 px-2 rounded">Academic Project</span>
                                <span class="text-xs font-medium bg-yellow-100 text-yellow-800 py-1 px-2 rounded ml-2">Team Project</span>
                            </div>
                            <div class="flex space-x-2">
                                <a href="#" class="text-blue-600 hover:text-blue-800">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        
                        <div>
                            <h4 class="text-lg font-medium mb-2 text-gray-800">Project Overview</h4>
                            <p class="text-gray-600 mb-4">
                                Developed a collaborative task management application as part of a team project for my 
                                Web Application Development course. The application allows teams to create, assign, and 
                                track tasks with real-time updates, progress tracking, and deadline notifications.
                            </p>
                        </div>
                        
                        <div>
                            <h4 class="text-lg font-medium mb-2 text-gray-800">Key Features</h4>
                            <ul class="list-disc list-inside text-gray-600 space-y-1">
                                <li>User authentication and team management</li>
                                <li>Task creation, assignment, and tracking</li>
                                <li>Real-time updates using WebSockets</li>
                                <li>Kanban board view for visual task management</li>
                                <li>Deadline notifications and reminders</li>
                                <li>Task commenting and file attachments</li>
                                <li>Progress tracking and reporting</li>
                            </ul>
                        </div>
                        
                        <div>
                            <h4 class="text-lg font-medium mb-2 text-gray-800">Technologies Used</h4>
                            <div class="flex flex-wrap gap-2">
                                <span class="bg-gray-100 text-gray-800 px-3 py-1 rounded">Vue.js</span>
                                <span class="bg-gray-100 text-gray-800 px-3 py-1 rounded">Firebase</span>
                                <span class="bg-gray-100 text-gray-800 px-3 py-1 rounded">Tailwind CSS</span>
                                <span class="bg-gray-100 text-gray-800 px-3 py-1 rounded">Socket.io</span>
                                <span class="bg-gray-100 text-gray-800 px-3 py-1 rounded">Express</span>
                                <span class="bg-gray-100 text-gray-800 px-3 py-1 rounded">Vuex</span>
                            </div>
                        </div>
                        
                        <div>
                            <h4 class="text-lg font-medium mb-2 text-gray-800">My Role & Contributions</h4>
                            <ul class="list-disc list-inside text-gray-600 space-y-1">
                                <li>Led the frontend development using Vue.js and Tailwind CSS</li>
                                <li>Implemented the Kanban board interface with drag-and-drop functionality</li>
                                <li>Integrated real-time updates using Socket.io</li>
                                <li>Developed the notification system for deadlines and updates</li>
                                <li>Created responsive layouts for mobile and desktop</li>
                                <li>Conducted user testing and incorporated feedback</li>
                                <li>Collaborated with team members on API integration</li>
                            </ul>
                        </div>
                        
                        <div>
                            <h4 class="text-lg font-medium mb-2 text-gray-800">Challenges & Solutions</h4>
                            <p class="text-gray-600 mb-2">
                                A significant challenge was implementing real-time updates across multiple users and devices. 
                                We addressed this by using Socket.io to establish WebSocket connections, allowing instant 
                                updates when tasks were created, modified, or completed. This ensured all team members had 
                                the most current information without needing to refresh the page.
                            </p>
                            <p class="text-gray-600">
                                Another challenge was creating an intuitive drag-and-drop interface for the Kanban board. 
                                I researched various libraries and implemented a solution using Vue.js directives that 
                                provided a smooth user experience while maintaining accurate task status updates in the 
                                backend.
                            </p>
                        </div>
                    </div>
                `;
            } else if (projectId === 'fitness') {
                title = 'Fitness Tracking App';
                content = `
                    <div class="space-y-4">
                        <div class="bg-gradient-to-r from-amber-500 to-orange-500 h-48 rounded-lg flex items-center justify-center mb-4">
                            <svg class="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                            </svg>
                        </div>
                        
                        <div class="flex justify-between items-center">
                            <div>
                                <span class="text-xs font-medium bg-green-100 text-green-800 py-1 px-2 rounded">Internship Project</span>
                                <span class="text-xs font-medium bg-blue-100 text-blue-800 py-1 px-2 rounded ml-2">4 Months</span>
                            </div>
                            <div class="flex space-x-2">
                                <a href="#" class="text-blue-600 hover:text-blue-800">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns```
            }
        }