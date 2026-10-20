
/* ============================================================
   SAJAN KHADKA — PORTFOLIO TRANSLATIONS
   File: translations.js
   Version: 4.0

   Languages:
   - English (en)
   - Nepali (ne)

   Covers:
   Navigation, Hero, About, Skills, Projects,
   Designs, Education, CV, Services, Journey,
   Reviews, Contact, Footer and Status Messages.

   Compatible with:
   - script.js Version 4.0
   - assets/data/designs.js Version 4.0

   SECURITY:
   All translations are plain text, not HTML.
============================================================ */

"use strict";

/* ============================================================
   01. TRANSLATION DICTIONARY
============================================================ */

const translations = {

    /* ========================================================
       ENGLISH
    ======================================================== */

    en: {

        /* NAVIGATION */

        navHome: "Home",
        navAbout: "About",
        navSkills: "Skills",
        navProjects: "Projects",
        navDesigns: "Designs",
        navEducation: "Education",
        navServices: "Services",
        navReviews: "Reviews",
        navContact: "Contact",

        /* HERO */

        heroBadge: "Learning, Designing & Building",
        heroGreeting: "Hello, I'm",

        heroDescription:
            "I'm Sajan Khadka, an aspiring Full-Stack Developer and Canva Graphic Designer from Nepal. I enjoy creating useful websites, engaging visual designs and practical digital solutions.",

        viewProjects: "Explore Projects",
        viewDesigns: "Explore Designs",
        contactMe: "Contact Me",
        hireMe: "Work With Me",
        connectWithMe: "Connect with me",
        floatingText: "Creative Developer",
        scrollDown: "Scroll to explore",

        typingTexts: [
            "Aspiring Full-Stack Developer",
            "Canva Graphic Designer",
            "Web Development Enthusiast",
            "Technology & AI Explorer",
            "Lifelong Learner"
        ],

        /* ABOUT */

        aboutLabel: "01 / INTRODUCTION",
        aboutHeading: "About Me",
        aboutSubtitle:
            "A learner, creator and future developer.",

        aboutTitle:
            "Turning curiosity into real-world skills.",

        aboutParagraph1:
            "I'm Sajan Khadka, an aspiring Full-Stack Developer and Canva Graphic Designer from Nepal with a passion for technology, creativity and problem-solving.",

        aboutParagraph2:
            "I am learning web development while preparing for competitive examinations such as Lok Sewa. I develop my skills through hands-on projects and consistent practice.",

        aboutParagraph3:
            "My interests include AI-powered applications, educational technology, productivity tools and graphic design. I believe in discipline, consistency and lifelong learning.",

        infoName: "Name",
        infoLocation: "Location",
        infoFocus: "Current Focus",
        infoGoal: "Career Goal",
        infoGoalValue: "Full-Stack Developer",

        interestAI: "AI & Technology",
        interestAIDesc:
            "Exploring intelligent applications and modern technologies.",

        interestEdtech: "Educational Technology",
        interestEdtechDesc:
            "Interested in tools that make learning more accessible.",

        interestProductivity: "Productivity",
        interestProductivityDesc:
            "Creating ideas for better organization and personal growth.",

        /* SKILLS */

        skillsLabel: "02 / SKILLS & TRAINING",
        skillsHeading: "Technical Skills",

        skillsSubtitle:
            "My technical skills, completed training and learning roadmap.",

        currentlyLearning: "Currently Learning",
        futureSkills: "Learning Roadmap",
        completedCourses: "Completed Courses & Training",
        completedCoursesTitle: "Completed Courses & Training",

        learningStatus: "Learning",
        completedStatus: "Completed",
        courseCompleted: "Course Completed",
        inProgressStatus: "In Progress",
        plannedStatus: "Planned",

        skillHTML: "HTML5",
        skillCSS: "CSS3",
        skillJavaScript: "JavaScript",
        skillCanva: "Canva Graphic Design",
        skillOffice: "Microsoft Office",
        skillGit: "Git & GitHub",
        skillReact: "React.js",
        skillBackend: "Backend Development",

        /* PROJECTS */

        projectsLabel: "03 / MY PROJECTS",
        projectsHeading: "Featured Projects",

        projectsSubtitle:
            "Concepts and ongoing work from my development journey.",

        projectStatus: "Concept / In Development",
        demoPending: "Demo coming later",
        viewProject: "View Project",

        omsaDescription:
            "A personal AI assistant concept exploring intelligent assistance, productivity features, voice interaction and user-authorized device actions.",

        examDescription:
            "An educational platform concept for Lok Sewa and banking exam preparation, with planned notes, quizzes, progress tracking and AI support.",

        dashboardDescription:
            "A personal organization application concept exploring task management, goals, schedules, progress tracking and productivity statistics.",

        /* GRAPHIC DESIGN GALLERY */

        designsLabel: "04 / CREATIVE WORK",
        designsHeading: "Graphic Designs",

        designsSubtitle:
            "Explore my creative designs, including social media posts, advertisements, logos, thumbnails, invitations and branding concepts.",

        designGalleryTitle: "My Creative Portfolio",

        designGalleryDescription:
            "Selected graphic design projects created through creativity and practical design work.",

        allDesigns: "All Designs",
        designAll: "All Designs",
        galleryAll: "All Designs",

        designBranding: "Branding",
        designEditorial: "Editorial",
        designFestivals: "Festival Designs",
        designInvitations: "Invitations",
        designLogos: "Logos",
        designSocialMedia: "Social Media",
        designThumbnails: "YouTube Thumbnails",
        designRestaurant: "Restaurant Designs",
        designPosters: "Posters",

        designView: "View Design",
        designViewFull: "View Full Image",
        designClose: "Close",
        designPrevious: "Previous",
        designNext: "Next",

        designNoResults:
            "No designs found in this category.",

        galleryEmpty:
            "No designs found in this category.",

        galleryUnavailable:
            "Graphic design data is unavailable.",

        designMenuTitle: "Restaurant Menu Design",

        designMenuDesc:
            "Explore a sample restaurant menu design.",

        designMenuButton: "View Menu",

        designContactText:
            "Need creative designs for your business or social media?",

        designContactButton: "Let's Work Together",

        /* EDUCATION */

        educationLabel: "05 / ACADEMICS",
        educationHeading: "My Education",

        educationSubtitle:
            "My academic background and learning journey.",

        higherSecondary: "Higher Secondary Education (+2)",
        secondary: "Secondary Education (SEE)",
        educationGPA: "GPA",

        /* CV */

        cvLabel: "MY RESUME",
        cvHeading: "Explore My Professional Profile",
        cvTitle: "Curriculum Vitae",

        cvDescription:
            "Learn more about my education, skills and development journey.",

        viewCV: "View CV",
        downloadCV: "Download CV",

        cvNotice:
            "View or download my CV in PDF format.",

        /* SERVICES */

        servicesLabel: "06 / SERVICES",
        servicesHeading: "What I Can Create",

        servicesSubtitle:
            "Creative design services and web development skills I am developing.",

        service1: "Portfolio Websites",
        service1Desc:
            "Personal websites that present professional skills and projects.",

        service2: "Responsive Web Design",
        service2Desc:
            "Layouts designed for desktop, tablet and mobile devices.",

        service3: "Landing Pages",
        service3Desc:
            "Focused web pages for products, services and personal brands.",

        service4: "Frontend Development",
        service4Desc:
            "Interactive website interfaces using modern web technologies.",

        service5: "Website Customization",
        service5Desc:
            "Improving layouts, styling and basic website functionality.",

        service6: "Educational Web Apps",
        service6Desc:
            "Exploring practical applications for learning and productivity.",

        service7: "Social Media Graphic Design",
        service7Desc:
            "Creative promotional posts and advertisements for social media.",

        service8: "YouTube Thumbnail Design",
        service8Desc:
            "Eye-catching thumbnails for YouTube videos.",

        service9: "Posters & Flyers",
        service9Desc:
            "Promotional posters, business offers and event flyers.",

        service10: "Logo & Branding Concepts",
        service10Desc:
            "Creative logo ideas and visual branding concepts.",

        service11: "Festival & Invitation Designs",
        service11Desc:
            "Festival greetings, invitations and celebration graphics.",

        service12: "Restaurant Menu Design",
        service12Desc:
            "Restaurant menus and food promotion designs.",

        /* LEARNING JOURNEY */

        journeyLabel: "07 / GROWTH",
        journeyHeading: "My Learning Journey",

        journeySubtitle:
            "A roadmap toward becoming a professional full-stack developer.",

        journey1: "Web Fundamentals",
        journey2: "Developer Tools",
        journey3: "Frontend Frameworks",
        journey4: "Backend Development",

        /* REVIEWS */

        reviewsLabel: "08 / FEEDBACK",
        reviewsHeading: "Client Reviews",

        reviewsSubtitle:
            "Feedback and testimonials related to my creative work.",

        reviewsEmptyTitle:
            "Client Reviews Coming Soon",

        reviewsEmptyDesc:
            "Genuine client feedback will be shared here as projects are completed.",

        reviewSampleLabel: "Illustrative Sample",

        reviewSampleNotice:
            "Sample reviews are fictional examples for design demonstration and are not verified client testimonials.",

        reviewContactButton: "Start a Project",

        
        
/* REVIEW FORM — ENGLISH */

        /* REVIEW FORM */
en: {
        reviewFormHeading: "Share Your Experience",
        reviewFormDescription:
            "Have you worked with me? Share your honest feedback below. Your review will appear after approval.",

        reviewNameLabel: "Your Name *",
        reviewNamePlaceholder: "Enter your name",

        reviewServiceLabel: "Service Received *",
        reviewServicePlaceholder: "Select a service",

        reviewServiceLogo: "Logo Design",
        reviewServiceSocial: "Social Media Design",
        reviewServicePoster: "Poster Design",
        reviewServiceBusinessCard: "Business Card Design",
        reviewServiceThumbnail: "YouTube Thumbnail",
        reviewServiceWeb: "Web Development",
        reviewServiceOther: "Other Design Service",

        reviewRatingLabel: "Your Rating *",
        reviewRatingPlaceholder: "Select your rating",
        reviewRatingExcellent: "Excellent",
        reviewRatingVeryGood: "Very Good",
        reviewRatingGood: "Good",
        reviewRatingFair: "Fair",
        reviewRatingPoor: "Poor",

        reviewMessageLabel: "Your Feedback *",
        reviewMessagePlaceholder: "Tell us about your experience...",

        reviewSubmitButton: "Submit Review",
        reviewSubmitting: "Submitting your review...",

        reviewSuccess:
            "Thank you! Your review has been submitted and is awaiting approval.",

        reviewError:
            "Unable to submit your review. Please try again.",

        reviewValidationError:
            "Please enter valid review details.",
    },
/* REVIEW FORM — NEPALI */
/* यो भाग ne: {} भित्र राख्नुहोस् */

ne: {
    reviewFormHeading: "आफ्नो अनुभव साझा गर्नुहोस्",
reviewFormDescription:
    "तपाईंले मसँग काम गर्नुभएको छ? आफ्नो वास्तविक अनुभव र प्रतिक्रिया लेख्नुहोस्। स्वीकृत भएपछि मात्र समीक्षा वेबसाइटमा देखिनेछ।",
reviewNameLabel: "तपाईंको नाम *",
reviewNamePlaceholder: "आफ्नो नाम लेख्नुहोस्",
reviewServiceLabel: "लिनुभएको सेवा *",
reviewServicePlaceholder: "सेवा छान्नुहोस्",
reviewServiceLogo: "लोगो डिजाइन",
reviewServiceSocial: "सामाजिक सञ्जाल डिजाइन",
reviewServicePoster: "पोस्टर डिजाइन",
reviewServiceBusinessCard: "बिजनेस कार्ड डिजाइन",
reviewServiceThumbnail: "YouTube थम्बनेल",
reviewServiceWeb: "वेब डेभलपमेन्ट",
reviewServiceOther: "अन्य डिजाइन सेवा",
reviewRatingLabel: "तपाईंको मूल्याङ्कन *",
reviewRatingPlaceholder: "मूल्याङ्कन छान्नुहोस्",
reviewRatingExcellent: "उत्कृष्ट",
reviewRatingVeryGood: "धेरै राम्रो",
reviewRatingGood: "राम्रो",
reviewRatingFair: "ठीकै",
reviewRatingPoor: "कमजोर",
reviewMessageLabel: "तपाईंको प्रतिक्रिया *",
reviewMessagePlaceholder: "आफ्नो अनुभव लेख्नुहोस्...",
reviewSubmitButton: "समीक्षा पठाउनुहोस्",
reviewSubmitting: "समीक्षा पठाउँदै...",
reviewSuccess:
    "धन्यवाद! तपाईंको समीक्षा प्राप्त भयो। स्वीकृत भएपछि वेबसाइटमा देखिनेछ।",
reviewError: "समीक्षा पठाउन सकिएन। कृपया फेरि प्रयास गर्नुहोस्।",
reviewValidationError: "कृपया सही विवरण भर्नुहोस्।",
},

        /* CONTACT */

        contactLabel: "09 / GET IN TOUCH",
        contactHeading: "Let's Connect",

        contactSubtitle:
            "Have a design project, website idea or collaboration opportunity? Feel free to reach out.",

        contactInfoTitle:
            "Let's start a conversation.",

        contactInfoDesc:
            "I'm interested in creative collaborations, graphic design projects and meaningful technology discussions.",

        contactFormTitle: "Send Me a Message",

        formName: "Your Name",
        formEmail: "Your Email",
        formSubject: "Subject",
        formMessage: "Message",

        namePlaceholder: "Your name",
        emailPlaceholder: "Your email address",
        subjectPlaceholder: "What is this about?",
        messagePlaceholder: "Write your message...",

        sendMessage: "Send Message",

        formNote:
            "Your message will be submitted through the contact form.",

        formSending: "Sending...",

        formSuccess:
            "Thank you! Your message was submitted successfully.",

        formError:
            "Your message could not be sent. Please contact me through WhatsApp or email.",

        formConfigurationError:
            "The contact form is not configured correctly.",

        /* FOOTER */

        footerText:
            "Learning. Designing. Building. Growing.",

        footerCopyright:
            "All rights reserved.",

        backToTop: "Back to Top"
    },

    /* ========================================================
       NEPALI
    ======================================================== */

    ne: {

        /* NAVIGATION */

        navHome: "गृहपृष्ठ",
        navAbout: "मेरो बारेमा",
        navSkills: "सीपहरू",
        navProjects: "परियोजनाहरू",
        navDesigns: "डिजाइनहरू",
        navEducation: "शिक्षा",
        navServices: "सेवाहरू",
        navReviews: "समीक्षाहरू",
        navContact: "सम्पर्क",

        /* HERO */

        heroBadge:
            "सिक्दै, डिजाइन गर्दै र निर्माण गर्दै",

        heroGreeting: "नमस्कार, म",

        heroDescription:
            "म सजन खड्का हुँ। म नेपालबाट फुल-स्ट्याक डेभलपर बन्ने लक्ष्य राखेको विद्यार्थी तथा Canva ग्राफिक डिजाइनर हुँ। उपयोगी वेबसाइट, आकर्षक डिजाइन र व्यावहारिक डिजिटल समाधान निर्माण गर्न रुचि राख्छु।",

        viewProjects: "परियोजनाहरू हेर्नुहोस्",
        viewDesigns: "डिजाइनहरू हेर्नुहोस्",
        contactMe: "सम्पर्क गर्नुहोस्",
        hireMe: "कामका लागि सम्पर्क गर्नुहोस्",
        connectWithMe: "मसँग जोडिनुहोस्",
        floatingText: "सिर्जनशील डेभलपर",
        scrollDown: "थप जानकारी हेर्नुहोस्",

        typingTexts: [
            "फुल-स्ट्याक डेभलपर बन्ने लक्ष्य",
            "Canva ग्राफिक डिजाइनर",
            "वेब डेभलपमेन्टमा रुचि",
            "प्रविधि र AI को अध्ययन",
            "निरन्तर सिक्ने विद्यार्थी"
        ],

        /* ABOUT */

        aboutLabel: "०१ / परिचय",
        aboutHeading: "मेरो बारेमा",

        aboutSubtitle:
            "सिक्ने, सिर्जना गर्ने र विकास गर्ने यात्रा।",

        aboutTitle:
            "जिज्ञासालाई व्यावहारिक सीपमा बदल्दै।",

        aboutParagraph1:
            "म सजन खड्का हुँ। म नेपालबाट फुल-स्ट्याक डेभलपर बन्ने लक्ष्य राखेको विद्यार्थी तथा Canva ग्राफिक डिजाइनर हुँ। मलाई प्रविधि, सिर्जनशीलता र उपयोगी डिजिटल समाधान निर्माण गर्न रुचि छ।",

        aboutParagraph2:
            "म हाल लोक सेवा जस्ता प्रतिस्पर्धात्मक परीक्षाको तयारीसँगै वेब डेभलपमेन्ट र ग्राफिक डिजाइन सिक्दै छु। व्यावहारिक परियोजना र नियमित अभ्यासमार्फत आफ्ना सीपहरू विकास गर्दै छु।",

        aboutParagraph3:
            "मलाई AI आधारित अनुप्रयोग, शैक्षिक प्रविधि, उत्पादकत्वसम्बन्धी उपकरण र ग्राफिक डिजाइनमा रुचि छ। निरन्तरता, अनुशासन र आजीवन सिकाइमा विश्वास गर्छु।",

        infoName: "नाम",
        infoLocation: "स्थान",
        infoFocus: "हालको अध्ययन",
        infoGoal: "करियर लक्ष्य",
        infoGoalValue: "फुल-स्ट्याक डेभलपर",

        interestAI: "AI र प्रविधि",

        interestAIDesc:
            "आधुनिक प्रविधि र बुद्धिमान अनुप्रयोगहरूको अध्ययन।",

        interestEdtech: "शैक्षिक प्रविधि",

        interestEdtechDesc:
            "शिक्षालाई सहज र पहुँचयोग्य बनाउने उपकरणहरूमा रुचि।",

        interestProductivity: "उत्पादकत्व",

        interestProductivityDesc:
            "समय व्यवस्थापन र व्यक्तिगत विकासका उपयोगी उपायहरू।",

        /* SKILLS */

        skillsLabel: "०२ / सीप तथा तालिम",
        skillsHeading: "प्राविधिक सीपहरू",

        skillsSubtitle:
            "मेरो प्राविधिक सीप, तालिम र आगामी सिकाइ योजना।",

        currentlyLearning: "हाल सिक्दै",
        futureSkills: "भविष्यको सिकाइ योजना",
        completedCourses: "पूरा गरिएका कोर्स तथा तालिम",
        completedCoursesTitle:
            "पूरा गरिएका कोर्स तथा तालिम",

        learningStatus: "सिक्दै",
        completedStatus: "पूरा भएको",
        courseCompleted: "कोर्स पूरा भएको",
        inProgressStatus: "सिकाइ जारी",
        plannedStatus: "योजनामा",

        skillHTML: "HTML5",
        skillCSS: "CSS3",
        skillJavaScript: "JavaScript",
        skillCanva: "Canva ग्राफिक डिजाइन",
        skillOffice: "Microsoft Office",
        skillGit: "Git र GitHub",
        skillReact: "React.js",
        skillBackend: "ब्याकएन्ड डेभलपमेन्ट",

        /* PROJECTS */

        projectsLabel: "०३ / मेरा परियोजनाहरू",
        projectsHeading: "मुख्य परियोजनाहरू",

        projectsSubtitle:
            "मेरो विकास यात्राका अवधारणा र निर्माणाधीन परियोजनाहरू।",

        projectStatus:
            "अवधारणा / विकासको क्रममा",

        demoPending: "डेमो पछि उपलब्ध हुनेछ",
        viewProject: "परियोजना हेर्नुहोस्",

        omsaDescription:
            "बुद्धिमान सहायता, उत्पादकत्व, आवाजमार्फत अन्तरक्रिया र प्रयोगकर्ताको अनुमतिमा उपकरण सञ्चालन गर्ने सुविधाहरूको अवधारणा भएको व्यक्तिगत AI सहायक।",

        examDescription:
            "लोक सेवा र बैंकिङ परीक्षाको तयारीका लागि अध्ययन सामग्री, प्रश्नोत्तर, प्रगति ट्र्याकिङ र AI सहयोगको योजना भएको शैक्षिक प्लेटफर्म।",

        dashboardDescription:
            "दैनिक कार्य, लक्ष्य, समयतालिका, प्रगति र उत्पादकत्व तथ्याङ्क व्यवस्थापन गर्ने अनुप्रयोगको अवधारणा।",

        /* GRAPHIC DESIGN GALLERY */

        designsLabel: "०४ / सिर्जनात्मक कार्य",
        designsHeading: "ग्राफिक डिजाइनहरू",

        designsSubtitle:
            "सामाजिक सञ्जालका पोस्ट, विज्ञापन, लोगो, थम्बनेल, निमन्त्रणा तथा ब्रान्डिङसम्बन्धी मेरा डिजाइनहरू।",

        designGalleryTitle:
            "मेरा सिर्जनात्मक डिजाइनहरू",

        designGalleryDescription:
            "सिर्जनशीलता र अभ्यासमार्फत तयार गरिएका डिजाइन परियोजनाहरू।",

        allDesigns: "सबै डिजाइन",
        designAll: "सबै डिजाइन",
        galleryAll: "सबै डिजाइन",

        designBranding: "ब्रान्डिङ",
        designEditorial: "सम्पादकीय डिजाइन",
        designFestivals: "चाडपर्वका डिजाइन",
        designInvitations: "निमन्त्रणा",
        designLogos: "लोगो",
        designSocialMedia: "सामाजिक सञ्जाल",
        designThumbnails: "YouTube थम्बनेल",
        designRestaurant: "रेस्टुरेन्ट डिजाइन",
        designPosters: "पोस्टर",

        designView: "डिजाइन हेर्नुहोस्",
        designViewFull: "पूरा तस्वीर हेर्नुहोस्",
        designClose: "बन्द गर्नुहोस्",
        designPrevious: "अघिल्लो",
        designNext: "अर्को",

        designNoResults:
            "यस वर्गमा कुनै डिजाइन भेटिएन।",

        galleryEmpty:
            "यस वर्गमा कुनै डिजाइन भेटिएन।",

        galleryUnavailable:
            "ग्राफिक डिजाइनको विवरण उपलब्ध छैन।",

        designMenuTitle: "रेस्टुरेन्ट मेनु डिजाइन",

        designMenuDesc:
            "रेस्टुरेन्ट मेनुको नमुना डिजाइन हेर्नुहोस्।",

        designMenuButton: "मेनु हेर्नुहोस्",

        designContactText:
            "तपाईंको व्यवसाय वा सामाजिक सञ्जालका लागि आकर्षक डिजाइन चाहिन्छ?",

        designContactButton: "सँगै काम गरौँ",

        /* EDUCATION */

        educationLabel: "०५ / शैक्षिक विवरण",
        educationHeading: "मेरो शिक्षा",

        educationSubtitle:
            "मेरो शैक्षिक पृष्ठभूमि र सिकाइ यात्रा।",

        higherSecondary:
            "उच्च माध्यमिक शिक्षा (+२)",

        secondary:
            "माध्यमिक शिक्षा (SEE)",

        educationGPA: "जीपीए",

        /* CV */

        cvLabel: "मेरो बायोडाटा",
        cvHeading: "मेरो व्यावसायिक परिचय",
        cvTitle: "बायोडाटा (CV)",

        cvDescription:
            "मेरो शिक्षा, सीप र विकास यात्राबारे थप जानकारी हेर्नुहोस्।",

        viewCV: "CV हेर्नुहोस्",
        downloadCV: "CV डाउनलोड गर्नुहोस्",

        cvNotice:
            "मेरो CV PDF ढाँचामा हेर्न वा डाउनलोड गर्न सकिन्छ।",

        /* SERVICES */

        servicesLabel: "०६ / सेवाहरू",
        servicesHeading: "मैले बनाउन सक्ने कामहरू",

        servicesSubtitle:
            "ग्राफिक डिजाइनसम्बन्धी काम र विकास गर्दै गरेका वेब डेभलपमेन्ट सीपहरू।",

        service1: "पोर्टफोलियो वेबसाइट",

        service1Desc:
            "व्यक्तिगत सीप र परियोजनाहरू प्रस्तुत गर्ने वेबसाइट।",

        service2: "रेस्पोन्सिभ वेब डिजाइन",

        service2Desc:
            "मोबाइल, ट्याब्लेट र कम्प्युटरमा मिल्ने डिजाइन।",

        service3: "ल्यान्डिङ पेज",

        service3Desc:
            "उत्पादन, सेवा र व्यक्तिगत ब्रान्डका वेब पेजहरू।",

        service4: "फ्रन्टएन्ड डेभलपमेन्ट",

        service4Desc:
            "आधुनिक प्रविधि प्रयोग गरेर वेबसाइटको इन्टरफेस निर्माण।",

        service5: "वेबसाइट कस्टमाइजेसन",

        service5Desc:
            "वेबसाइटको डिजाइन र आधारभूत कार्यक्षमता सुधार।",

        service6: "शैक्षिक वेब एपहरू",

        service6Desc:
            "शिक्षा र उत्पादकत्वका लागि उपयोगी अनुप्रयोगहरू।",

        service7: "सामाजिक सञ्जाल ग्राफिक डिजाइन",

        service7Desc:
            "सामाजिक सञ्जालका लागि आकर्षक पोस्ट र विज्ञापन डिजाइन।",

        service8: "YouTube थम्बनेल डिजाइन",

        service8Desc:
            "YouTube भिडियोका लागि आकर्षक थम्बनेल डिजाइन।",

        service9: "पोस्टर तथा फ्लायर",

        service9Desc:
            "व्यावसायिक प्रचार, अफर र कार्यक्रमका पोस्टरहरू।",

        service10: "लोगो तथा ब्रान्डिङ",

        service10Desc:
            "सिर्जनात्मक लोगो र ब्रान्डिङसम्बन्धी अवधारणाहरू।",

        service11: "चाडपर्व तथा निमन्त्रणा डिजाइन",

        service11Desc:
            "चाडपर्वका शुभकामना र निमन्त्रणा डिजाइनहरू।",

        service12: "रेस्टुरेन्ट मेनु डिजाइन",

        service12Desc:
            "रेस्टुरेन्ट मेनु र खानाको प्रचारसम्बन्धी डिजाइन।",

        /* LEARNING JOURNEY */

        journeyLabel: "०७ / विकास यात्रा",
        journeyHeading: "मेरो सिकाइ यात्रा",

        journeySubtitle:
            "व्यावसायिक फुल-स्ट्याक डेभलपर बन्ने मेरो योजना।",

        journey1: "वेबको आधारभूत ज्ञान",
        journey2: "डेभलपर उपकरणहरू",
        journey3: "फ्रन्टएन्ड फ्रेमवर्क",
        journey4: "ब्याकएन्ड डेभलपमेन्ट",

        /* REVIEWS */

        reviewsLabel: "०८ / प्रतिक्रिया",
        reviewsHeading: "ग्राहकका समीक्षाहरू",

        reviewsSubtitle:
            "मेरा सिर्जनात्मक कामसम्बन्धी प्रतिक्रिया र समीक्षाहरू।",

        reviewsEmptyTitle:
            "ग्राहकका समीक्षाहरू चाँडै उपलब्ध हुनेछन्",

        reviewsEmptyDesc:
            "परियोजनाहरू पूरा भएपछि वास्तविक ग्राहकका प्रतिक्रियाहरू यहाँ राखिनेछन्।",

        reviewSampleLabel: "नमुना समीक्षा",

        reviewSampleNotice:
            "नमुना समीक्षाहरू डिजाइन प्रदर्शनका लागि तयार गरिएका काल्पनिक उदाहरण हुन्। यी प्रमाणित ग्राहकका प्रतिक्रिया होइनन्।",

        reviewContactButton:
            "परियोजना सुरु गर्नुहोस्",

        /* CONTACT */

        contactLabel: "०९ / सम्पर्क",
        contactHeading: "मसँग जोडिनुहोस्",

        contactSubtitle:
            "डिजाइन परियोजना, वेबसाइटसम्बन्धी विचार वा सहकार्यको अवसर भए सम्पर्क गर्नुहोस्।",

        contactInfoTitle:
            "कुराकानी सुरु गरौँ।",

        contactInfoDesc:
            "म सिर्जनात्मक सहकार्य, ग्राफिक डिजाइन र प्रविधिसम्बन्धी उपयोगी छलफल गर्न इच्छुक छु।",

        contactFormTitle:
            "मलाई सन्देश पठाउनुहोस्",

        formName: "तपाईंको नाम",
        formEmail: "इमेल",
        formSubject: "विषय",
        formMessage: "सन्देश",

        namePlaceholder:
            "तपाईंको नाम लेख्नुहोस्",

        emailPlaceholder:
            "तपाईंको इमेल लेख्नुहोस्",

        subjectPlaceholder:
            "कुन विषयमा सम्पर्क गर्न चाहनुहुन्छ?",

        messagePlaceholder:
            "आफ्नो सन्देश लेख्नुहोस्...",

        sendMessage: "सन्देश पठाउनुहोस्",

        formNote:
            "तपाईंको सन्देश सम्पर्क फाराममार्फत पठाइनेछ।",

        formSending: "पठाउँदै...",

        formSuccess:
            "धन्यवाद! तपाईंको सन्देश सफलतापूर्वक पठाइयो।",

        formError:
            "सन्देश पठाउन सकिएन। कृपया WhatsApp वा इमेलबाट सम्पर्क गर्नुहोस्।",

        formConfigurationError:
            "सम्पर्क फाराम सही रूपमा सेट गरिएको छैन।",

        /* FOOTER */

        footerText:
            "सिक्दै। डिजाइन गर्दै। निर्माण गर्दै। अघि बढ्दै।",

        footerCopyright:
            "सर्वाधिकार सुरक्षित।",

        backToTop:
            "माथि जानुहोस्"
    }
};

/* ============================================================
   02. GLOBAL LANGUAGE STATE
============================================================ */

function getSavedPortfolioLanguage() {
    try {
        const saved = localStorage.getItem(
            "sajan-portfolio-language"
        );

        return Object.prototype.hasOwnProperty.call(
            translations,
            saved
        )
            ? saved
            : "en";
    } catch {
        return "en";
    }
}

window.currentLanguage =
    getSavedPortfolioLanguage();

/* ============================================================
   03. GET COMPLETE DICTIONARY
============================================================ */

function getPortfolioTranslations(language) {
    const selectedLanguage =
        language || window.currentLanguage || "en";

    return translations[selectedLanguage] ||
        translations.en;
}

/* ============================================================
   04. TRANSLATE INDIVIDUAL TEXT
============================================================ */

function translatePortfolioText(key, language) {
    const selectedLanguage =
        language || window.currentLanguage || "en";

    const dictionary =
        getPortfolioTranslations(selectedLanguage);

    if (
        Object.prototype.hasOwnProperty.call(
            dictionary,
            key
        )
    ) {
        return dictionary[key];
    }

    if (
        Object.prototype.hasOwnProperty.call(
            translations.en,
            key
        )
    ) {
        return translations.en[key];
    }

    return key;
}

/* ============================================================
   05. LANGUAGE-AWARE DESIGN HELPERS
============================================================ */

function translateDesignTitle(design, language) {
    const selectedLanguage =
        language || window.currentLanguage || "en";

    if (!design || typeof design !== "object") {
        return "";
    }

    if (selectedLanguage === "ne") {
        return design.titleNe ||
            design.titleEn ||
            design.title ||
            "";
    }

    return design.titleEn ||
        design.title ||
        "";
}

function translateDesignDescription(design, language) {
    const selectedLanguage =
        language || window.currentLanguage || "en";

    if (!design || typeof design !== "object") {
        return "";
    }

    if (selectedLanguage === "ne") {
        return design.descriptionNe ||
            design.descriptionEn ||
            design.description ||
            "";
    }

    return design.descriptionEn ||
        design.description ||
        "";
}

/* ============================================================
   06. CATEGORY TRANSLATIONS
============================================================ */

const designCategoryTranslationKeys = {
    branding: "designBranding",
    editorial: "designEditorial",
    festivals: "designFestivals",
    invitations: "designInvitations",
    logos: "designLogos",
    "social-media": "designSocialMedia",
    thumbnails: "designThumbnails"
};

function translateDesignCategory(category, language) {
    const key =
        designCategoryTranslationKeys[category];

    if (!key) {
        return category;
    }

    return translatePortfolioText(key, language);
}

/* ============================================================
   07. SET LANGUAGE HELPER
============================================================ */

function setPortfolioLanguage(language) {
    if (
        !Object.prototype.hasOwnProperty.call(
            translations,
            language
        )
    ) {
        return false;
    }

    window.currentLanguage = language;

    document.documentElement.lang = language;

    try {
        localStorage.setItem(
            "sajan-portfolio-language",
            language
        );
    } catch {
        // Storage is optional.
    }

    return true;
}

/* ============================================================
   08. GLOBAL INTEGRATION
============================================================ */

window.translations = translations;

window.getPortfolioTranslations =
    getPortfolioTranslations;

window.translatePortfolioText =
    translatePortfolioText;

window.translateDesignTitle =
    translateDesignTitle;

window.translateDesignDescription =
    translateDesignDescription;

window.translateDesignCategory =
    translateDesignCategory;

window.setPortfolioLanguage =
    setPortfolioLanguage;

/* ============================================================
   09. VALIDATION
============================================================ */

function validateTranslations() {
    const englishKeys = Object.keys(translations.en);
    const nepaliKeys = Object.keys(translations.ne);

    const missingNepali = englishKeys.filter(
        key => !Object.prototype.hasOwnProperty.call(
            translations.ne,
            key
        )
    );

    const missingEnglish = nepaliKeys.filter(
        key => !Object.prototype.hasOwnProperty.call(
            translations.en,
            key
        )
    );

    if (missingNepali.length) {
        console.warn(
            "[Translations] Missing Nepali keys:",
            missingNepali
        );
    }

    if (missingEnglish.length) {
        console.warn(
            "[Translations] Missing English keys:",
            missingEnglish
        );
    }

    return {
        englishKeys: englishKeys.length,
        nepaliKeys: nepaliKeys.length,
        missingNepali,
        missingEnglish
    };
}

/* ============================================================
   10. INITIALIZATION SUMMARY
============================================================ */

console.info(
    "[Sajan Portfolio] Translations loaded.",
    validateTranslations()
);

/* ============================================================
   END OF TRANSLATIONS.JS
============================================================ */
