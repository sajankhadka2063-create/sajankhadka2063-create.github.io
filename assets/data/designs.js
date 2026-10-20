
/* ============================================================
   SAJAN KHADKA — GRAPHIC DESIGN PORTFOLIO
   File: assets/data/designs.js
   Version: 4.0

   TOTAL DESIGNS: 31
   TOTAL CATEGORIES: 7

   CATEGORY BREAKDOWN
   01. Branding         6
   02. Editorial        3
   03. Festivals        2
   04. Invitations      4
   05. Logos            5
   06. Social Media     6
   07. Thumbnails       5

   FEATURES
   - Original image filenames preserved
   - English and Nepali titles
   - English and Nepali descriptions
   - Stable numeric design IDs
   - Consistent category identifiers
   - Canva software metadata
   - Global data access
   - Data validation
   - No duplicate initialization

   IMPORTANT
   All image paths are relative to index.html,
   not to this JavaScript file.
============================================================ */

"use strict";

/* ============================================================
   01. PORTFOLIO CATEGORIES
============================================================ */

const portfolioCategories = [
    {
        id: "branding",
        nameEn: "Branding",
        nameNe: "ब्रान्डिङ",
        icon: "fa-briefcase"
    },
    {
        id: "editorial",
        nameEn: "Editorial",
        nameNe: "सम्पादकीय",
        icon: "fa-newspaper"
    },
    {
        id: "festivals",
        nameEn: "Festivals",
        nameNe: "चाडपर्व",
        icon: "fa-gift"
    },
    {
        id: "invitations",
        nameEn: "Invitations",
        nameNe: "निमन्त्रणा",
        icon: "fa-envelope-open-text"
    },
    {
        id: "logos",
        nameEn: "Logos",
        nameNe: "लोगो",
        icon: "fa-pen-nib"
    },
    {
        id: "social-media",
        nameEn: "Social Media",
        nameNe: "सामाजिक सञ्जाल",
        icon: "fa-share-nodes"
    },
    {
        id: "thumbnails",
        nameEn: "YouTube Thumbnails",
        nameNe: "युट्युब थम्बनेल",
        icon: "fa-youtube"
    }
];

/* ============================================================
   02. COMPLETE DESIGN COLLECTION
============================================================ */

const portfolioDesigns = [

    /* ========================================================
       CATEGORY 01 — BRANDING
       TOTAL: 6
    ======================================================== */

    {
        id: 1,

        title: "Professional Business Card",

        titleEn: "Professional Business Card",
        titleNe: "व्यावसायिक बिजनेस कार्ड",

        category: "branding",

        description:
            "A professional business card design with a clean layout and modern typography.",

        descriptionEn:
            "A professional business card design with a clean layout and modern typography.",

        descriptionNe:
            "आधुनिक अक्षर शैली र आकर्षक लेआउटसहितको व्यावसायिक बिजनेस कार्ड।",

        image:
            "assets/designs/branding/Business Card.jpg",

        alt: "Professional business card graphic design",

        software: "Canva"
    },

    {
        id: 2,

        title: "Cafe Menu Design",

        titleEn: "Cafe Menu Design",
        titleNe: "क्याफे मेनु डिजाइन",

        category: "branding",

        description:
            "A visually appealing cafe menu designed for easy reading.",

        descriptionEn:
            "A visually appealing cafe menu designed for easy reading.",

        descriptionNe:
            "ग्राहकले सजिलै पढ्न सक्ने आकर्षक क्याफे मेनु डिजाइन।",

        image:
            "assets/designs/branding/cafe menu.jpg",

        alt: "Cafe menu graphic design",

        software: "Canva"
    },

    {
        id: 3,

        title: "Coffee Menu Concept 1",

        titleEn: "Coffee Menu Concept 1",
        titleNe: "कफी मेनु डिजाइन १",

        category: "branding",

        description:
            "A creative coffee menu layout for a modern cafe.",

        descriptionEn:
            "A creative coffee menu layout for a modern cafe.",

        descriptionNe:
            "आधुनिक क्याफेका लागि सिर्जनात्मक कफी मेनु।",

        image:
            "assets/designs/branding/coffee menu1.jpg",

        alt: "Coffee menu concept one",

        software: "Canva"
    },

    {
        id: 4,

        title: "Coffee Menu Concept 2",

        titleEn: "Coffee Menu Concept 2",
        titleNe: "कफी मेनु डिजाइन २",

        category: "branding",

        description:
            "An alternative coffee menu design with an organized presentation.",

        descriptionEn:
            "An alternative coffee menu design with an organized presentation.",

        descriptionNe:
            "व्यवस्थित प्रस्तुतिसहितको अर्को कफी मेनु डिजाइन।",

        image:
            "assets/designs/branding/coffee menu2.jpg",

        alt: "Coffee menu concept two",

        software: "Canva"
    },

    {
        id: 5,

        title: "Corporate Marketing Flyer",

        titleEn: "Corporate Marketing Flyer",
        titleNe: "कर्पोरेट मार्केटिङ फ्लायर",

        category: "branding",

        description:
            "A corporate promotional flyer for professional business communication.",

        descriptionEn:
            "A corporate promotional flyer for professional business communication.",

        descriptionNe:
            "व्यावसायिक प्रचारका लागि कर्पोरेट फ्लायर डिजाइन।",

        image:
            "assets/designs/branding/Corporate Flyer.jpg",

        alt: "Corporate marketing flyer",

        software: "Canva"
    },

    {
        id: 6,

        title: "Restaurant Menu Design",

        titleEn: "Restaurant Menu Design",
        titleNe: "रेस्टुरेन्ट मेनु डिजाइन",

        category: "branding",

        description:
            "A restaurant menu layout with organized food information.",

        descriptionEn:
            "A restaurant menu layout with organized food information.",

        descriptionNe:
            "खानाका विवरणहरू व्यवस्थित रूपमा प्रस्तुत गरिएको रेस्टुरेन्ट मेनु।",

        image:
            "assets/designs/branding/restaurant-menu.png",

        alt: "Restaurant menu design",

        software: "Canva"
    },

    /* ========================================================
       CATEGORY 02 — EDITORIAL
       TOTAL: 3
    ======================================================== */

    {
        id: 7,

        title: "Aesthetic Editorial Collage",

        titleEn: "Aesthetic Editorial Collage",
        titleNe: "सिर्जनात्मक सम्पादकीय कोलाज",

        category: "editorial",

        description:
            "An aesthetic collage exploring visual composition and creative layout.",

        descriptionEn:
            "An aesthetic collage exploring visual composition and creative layout.",

        descriptionNe:
            "सिर्जनात्मक लेआउट र दृश्य संयोजन प्रस्तुत गर्ने कोलाज डिजाइन।",

        image:
            "assets/designs/editorial/aesthetic-collage.png",

        alt: "Aesthetic editorial collage",

        software: "Canva"
    },

    {
        id: 8,

        title: "Breaking News Graphic",

        titleEn: "Breaking News Graphic",
        titleNe: "ब्रेकिङ न्यूज ग्राफिक",

        category: "editorial",

        description:
            "A breaking-news-style graphic designed for digital media.",

        descriptionEn:
            "A breaking-news-style graphic designed for digital media.",

        descriptionNe:
            "डिजिटल मिडियाका लागि तयार गरिएको ब्रेकिङ न्यूज शैलीको डिजाइन।",

        image:
            "assets/designs/editorial/breaking-news-post.png",

        alt: "Breaking news editorial graphic",

        software: "Canva"
    },

    {
        id: 9,

        title: "Nepal Flood News Graphic",

        titleEn: "Nepal Flood News Graphic",
        titleNe: "नेपाल बाढीसम्बन्धी समाचार ग्राफिक",

        category: "editorial",

        description:
            "A news-style visual design covering a flood-related topic in Nepal.",

        descriptionEn:
            "A news-style visual design covering a flood-related topic in Nepal.",

        descriptionNe:
            "नेपालको बाढीसम्बन्धी विषय प्रस्तुत गर्ने समाचार शैलीको डिजाइन।",

        image:
            "assets/designs/editorial/nepal-flood-news.png",

        alt: "Nepal flood news graphic",

        software: "Canva"
    },

    /* ========================================================
       CATEGORY 03 — FESTIVALS
       TOTAL: 2
    ======================================================== */

    {
        id: 10,

        title: "Dashain 2083 Graphic Design Offer",

        titleEn: "Dashain 2083 Graphic Design Offer",
        titleNe: "दशैँ २०८३ ग्राफिक डिजाइन अफर",

        category: "festivals",

        description:
            "A festive promotional graphic for a Dashain 2083 design offer.",

        descriptionEn:
            "A festive promotional graphic for a Dashain 2083 design offer.",

        descriptionNe:
            "दशैँ २०८३ को अवसरमा तयार गरिएको ग्राफिक डिजाइन अफर पोस्ट।",

        image:
            "assets/designs/festivals/Dashain 2083 Graphic Design Offer.png",

        alt: "Dashain 2083 graphic design promotional offer",

        software: "Canva"
    },

    {
        id: 11,

        title: "Traditional Dashain Greeting",

        titleEn: "Traditional Dashain Greeting",
        titleNe: "परम्परागत दशैँ शुभकामना",

        category: "festivals",

        description:
            "A Dashain greeting design featuring a traditional thali and jamara.",

        descriptionEn:
            "A Dashain greeting design featuring a traditional thali and jamara.",

        descriptionNe:
            "परम्परागत थाली र जमरा समावेश गरिएको दशैँ शुभकामना डिजाइन।",

        image:
            "assets/designs/festivals/Festive Dashain Greeting with Thali and Jamara.png",

        alt: "Traditional Dashain greeting with thali and jamara",

        software: "Canva"
    },

    /* ========================================================
       CATEGORY 04 — INVITATIONS
       TOTAL: 4
    ======================================================== */

    {
        id: 12,

        title: "Birthday Invitation Design 1",

        titleEn: "Birthday Invitation Design 1",
        titleNe: "जन्मदिन निमन्त्रणा डिजाइन १",

        category: "invitations",

        description:
            "A colorful birthday invitation concept.",

        descriptionEn:
            "A colorful birthday invitation concept.",

        descriptionNe:
            "जन्मदिनको कार्यक्रमका लागि रंगीन निमन्त्रणा डिजाइन।",

        image:
            "assets/designs/invitations/Birthday Invitation 1.jpg",

        alt: "Birthday invitation design one",

        software: "Canva"
    },

    {
        id: 13,

        title: "Birthday Invitation Design 2",

        titleEn: "Birthday Invitation Design 2",
        titleNe: "जन्मदिन निमन्त्रणा डिजाइन २",

        category: "invitations",

        description:
            "An alternative birthday invitation with a festive presentation.",

        descriptionEn:
            "An alternative birthday invitation with a festive presentation.",

        descriptionNe:
            "उत्सवमय शैलीमा तयार गरिएको अर्को जन्मदिन निमन्त्रणा।",

        image:
            "assets/designs/invitations/Birthday Invitation 2.jpg",

        alt: "Birthday invitation design two",

        software: "Canva"
    },

    {
        id: 14,

        title: "Traditional Invitation",

        titleEn: "Traditional Invitation",
        titleNe: "परम्परागत निमन्त्रणा",

        category: "invitations",

        description:
            "An invitation design inspired by traditional decorative elements.",

        descriptionEn:
            "An invitation design inspired by traditional decorative elements.",

        descriptionNe:
            "परम्परागत सजावटबाट प्रेरित निमन्त्रणा डिजाइन।",

        image:
            "assets/designs/invitations/Traditional Invitation.jpg",

        alt: "Traditional invitation graphic design",

        software: "Canva"
    },

    {
        id: 15,

        title: "Wedding Invitation",

        titleEn: "Wedding Invitation",
        titleNe: "विवाह निमन्त्रणा",

        category: "invitations",

        description:
            "An elegant wedding invitation design concept.",

        descriptionEn:
            "An elegant wedding invitation design concept.",

        descriptionNe:
            "विवाह समारोहका लागि आकर्षक निमन्त्रणा डिजाइन।",

        image:
            "assets/designs/invitations/Wedding Invitation.jpg",

        alt: "Elegant wedding invitation",

        software: "Canva"
    },

    /* ========================================================
       CATEGORY 05 — LOGOS
       TOTAL: 5
    ======================================================== */

    {
        id: 16,

        title: "Cafe Logo Concept 1",

        titleEn: "Cafe Logo Concept 1",
        titleNe: "क्याफे लोगो डिजाइन १",

        category: "logos",

        description:
            "A creative logo concept for a cafe brand.",

        descriptionEn:
            "A creative logo concept for a cafe brand.",

        descriptionNe:
            "क्याफे ब्रान्डका लागि सिर्जनात्मक लोगो अवधारणा।",

        image:
            "assets/designs/logos/Cafe Logo 1.jpg",

        alt: "Cafe logo concept one",

        software: "Canva"
    },

    {
        id: 17,

        title: "Cafe Logo Concept 2",

        titleEn: "Cafe Logo Concept 2",
        titleNe: "क्याफे लोगो डिजाइन २",

        category: "logos",

        description:
            "An alternative visual identity concept for a cafe.",

        descriptionEn:
            "An alternative visual identity concept for a cafe.",

        descriptionNe:
            "क्याफेका लागि अर्को आकर्षक लोगो डिजाइन।",

        image:
            "assets/designs/logos/Cafe Logo 2.jpg",

        alt: "Cafe logo concept two",

        software: "Canva"
    },

    {
        id: 18,

        title: "Corporate Logo",

        titleEn: "Corporate Logo",
        titleNe: "कर्पोरेट लोगो",

        category: "logos",

        description:
            "A modern logo concept for a corporate business.",

        descriptionEn:
            "A modern logo concept for a corporate business.",

        descriptionNe:
            "कर्पोरेट व्यवसायका लागि आधुनिक लोगो अवधारणा।",

        image:
            "assets/designs/logos/Corporate Logo.jpg",

        alt: "Corporate logo design",

        software: "Canva"
    },

    {
        id: 19,

        title: "Monogram Logo",

        titleEn: "Monogram Logo",
        titleNe: "मोनोग्राम लोगो",

        category: "logos",

        description:
            "A monogram-style logo exploring letter-based branding.",

        descriptionEn:
            "A monogram-style logo exploring letter-based branding.",

        descriptionNe:
            "अक्षरहरूको संयोजनबाट तयार गरिएको मोनोग्राम लोगो।",

        image:
            "assets/designs/logos/Monogram Logo.jpg",

        alt: "Monogram logo concept",

        software: "Canva"
    },

    {
        id: 20,

        title: "Technology Logo",

        titleEn: "Technology Logo",
        titleNe: "प्रविधि लोगो",

        category: "logos",

        description:
            "A modern technology-inspired logo concept.",

        descriptionEn:
            "A modern technology-inspired logo concept.",

        descriptionNe:
            "आधुनिक प्रविधिबाट प्रेरित लोगो डिजाइन।",

        image:
            "assets/designs/logos/Tech Logo.jpg",

        alt: "Technology-inspired logo",

        software: "Canva"
    },

    /* ========================================================
       CATEGORY 06 — SOCIAL MEDIA
       TOTAL: 6
    ======================================================== */

    {
        id: 21,

        title: "Burger Promotion",

        titleEn: "Burger Promotion",
        titleNe: "बर्गर प्रचार डिजाइन",

        category: "social-media",

        description:
            "A promotional graphic for a burger or fast-food business.",

        descriptionEn:
            "A promotional graphic for a burger or fast-food business.",

        descriptionNe:
            "बर्गर तथा फास्टफुड व्यवसायका लागि प्रचार डिजाइन।",

        image:
            "assets/designs/social-media/burger-promotion.png",

        alt: "Burger promotional graphic",

        software: "Canva"
    },

    {
        id: 22,

        title: "Marketing Banner Design 1",

        titleEn: "Marketing Banner Design 1",
        titleNe: "मार्केटिङ ब्यानर डिजाइन १",

        category: "social-media",

        description:
            "A digital marketing banner with a promotional layout.",

        descriptionEn:
            "A digital marketing banner with a promotional layout.",

        descriptionNe:
            "प्रचारका लागि तयार गरिएको डिजिटल मार्केटिङ ब्यानर।",

        image:
            "assets/designs/social-media/Marketing Banner 1.jpg",

        alt: "Marketing banner design one",

        software: "Canva"
    },

    {
        id: 23,

        title: "Marketing Banner Design 2",

        titleEn: "Marketing Banner Design 2",
        titleNe: "मार्केटिङ ब्यानर डिजाइन २",

        category: "social-media",

        description:
            "An alternative promotional banner for social media marketing.",

        descriptionEn:
            "An alternative promotional banner for social media marketing.",

        descriptionNe:
            "सामाजिक सञ्जाल प्रचारका लागि अर्को ब्यानर डिजाइन।",

        image:
            "assets/designs/social-media/Marketing Banner 2.jpg",

        alt: "Marketing banner design two",

        software: "Canva"
    },

    {
        id: 24,

        title: "Restaurant Food Poster",

        titleEn: "Restaurant Food Poster",
        titleNe: "रेस्टुरेन्ट खाना पोस्टर",

        category: "social-media",

        description:
            "A food promotion poster designed for restaurant marketing.",

        descriptionEn:
            "A food promotion poster designed for restaurant marketing.",

        descriptionNe:
            "रेस्टुरेन्टको खाना प्रचारका लागि तयार गरिएको पोस्टर।",

        image:
            "assets/designs/social-media/restaurant-food-poster.png",

        alt: "Restaurant food promotion poster",

        software: "Canva"
    },

    {
        id: 25,

        title: "Seafood Promotion",

        titleEn: "Seafood Promotion",
        titleNe: "समुद्री खाना प्रचार डिजाइन",

        category: "social-media",

        description:
            "A seafood promotional design for a restaurant or food brand.",

        descriptionEn:
            "A seafood promotional design for a restaurant or food brand.",

        descriptionNe:
            "समुद्री खानाको प्रचारका लागि तयार गरिएको डिजाइन।",

        image:
            "assets/designs/social-media/seafood-promotion.png.png",

        alt: "Seafood promotional graphic",

        software: "Canva"
    },

    {
        id: 26,

        title: "Social Media Banner",

        titleEn: "Social Media Banner",
        titleNe: "सामाजिक सञ्जाल ब्यानर",

        category: "social-media",

        description:
            "A promotional banner concept for social media.",

        descriptionEn:
            "A promotional banner concept for social media.",

        descriptionNe:
            "सामाजिक सञ्जालमा प्रचारका लागि तयार गरिएको ब्यानर।",

        image:
            "assets/designs/social-media/Social Media Banner.jpg",

        alt: "Social media promotional banner",

        software: "Canva"
    },

    /* ========================================================
       CATEGORY 07 — YOUTUBE THUMBNAILS
       TOTAL: 5
    ======================================================== */

    {
        id: 27,

        title: "Diwali YouTube Thumbnail",

        titleEn: "Diwali YouTube Thumbnail",
        titleNe: "दिवाली YouTube थम्बनेल",

        category: "thumbnails",

        description:
            "A festive YouTube thumbnail inspired by Diwali.",

        descriptionEn:
            "A festive YouTube thumbnail inspired by Diwali.",

        descriptionNe:
            "दिवाली पर्वबाट प्रेरित YouTube थम्बनेल।",

        image:
            "assets/designs/thumbnails/diwali-thumbnail.png",

        alt: "Diwali YouTube thumbnail",

        software: "Canva"
    },

    {
        id: 28,

        title: "Gaming YouTube Thumbnail",

        titleEn: "Gaming YouTube Thumbnail",
        titleNe: "गेमिङ YouTube थम्बनेल",

        category: "thumbnails",

        description:
            "An energetic thumbnail design for gaming content.",

        descriptionEn:
            "An energetic thumbnail design for gaming content.",

        descriptionNe:
            "गेमिङ भिडियोका लागि आकर्षक थम्बनेल डिजाइन।",

        image:
            "assets/designs/thumbnails/Gaming Thumbnail.jpg",

        alt: "Gaming YouTube thumbnail",

        software: "Canva"
    },

    {
        id: 29,

        title: "Holi YouTube Thumbnail",

        titleEn: "Holi YouTube Thumbnail",
        titleNe: "होली YouTube थम्बनेल",

        category: "thumbnails",

        description:
            "A colorful YouTube thumbnail inspired by the Holi festival.",

        descriptionEn:
            "A colorful YouTube thumbnail inspired by the Holi festival.",

        descriptionNe:
            "होली पर्वबाट प्रेरित रंगीन YouTube थम्बनेल।",

        image:
            "assets/designs/thumbnails/holi-thumbnail.png",

        alt: "Holi festival YouTube thumbnail",

        software: "Canva"
    },

    {
        id: 30,

        title: "Travel Vlog Thumbnail",

        titleEn: "Travel Vlog Thumbnail",
        titleNe: "यात्रा भ्लग थम्बनेल",

        category: "thumbnails",

        description:
            "A thumbnail concept for travel and adventure videos.",

        descriptionEn:
            "A thumbnail concept for travel and adventure videos.",

        descriptionNe:
            "यात्रा तथा साहसिक भिडियोका लागि थम्बनेल डिजाइन।",

        image:
            "assets/designs/thumbnails/travel-vlog-thumbnail.png.png",

        alt: "Travel vlog YouTube thumbnail",

        software: "Canva"
    },

    {
        id: 31,

        title: "Vlog YouTube Thumbnail",

        titleEn: "Vlog YouTube Thumbnail",
        titleNe: "भ्लग YouTube थम्बनेल",

        category: "thumbnails",

        description:
            "A creative thumbnail design for personal vlog content.",

        descriptionEn:
            "A creative thumbnail design for personal vlog content.",

        descriptionNe:
            "व्यक्तिगत भ्लग भिडियोका लागि सिर्जनात्मक थम्बनेल।",

        image:
            "assets/designs/thumbnails/Vlog Thumbnail.jpg",

        alt: "Personal vlog YouTube thumbnail",

        software: "Canva"
    }

];

/* ============================================================
   03. DATA VALIDATION
============================================================ */

function validatePortfolioDesigns() {
    const ids = new Set();

    const validCategories = new Set(
        portfolioCategories.map(category => category.id)
    );

    portfolioDesigns.forEach((design, index) => {
        if (ids.has(design.id)) {
            console.warn(
                `[Designs] Duplicate ID: ${design.id}`
            );
        }

        ids.add(design.id);

        if (!validCategories.has(design.category)) {
            console.warn(
                `[Designs] Unknown category at item ${index + 1}:`,
                design.category
            );
        }

        if (!design.image) {
            console.warn(
                `[Designs] Missing image path: ${design.title}`
            );
        }

        if (!design.titleEn || !design.titleNe) {
            console.warn(
                `[Designs] Missing translation: ${design.id}`
            );
        }
    });

    return {
        totalDesigns: portfolioDesigns.length,
        totalCategories: validCategories.size,
        uniqueIds: ids.size
    };
}

/* ============================================================
   04. CATEGORY COUNTS
============================================================ */

function getPortfolioCategoryCounts() {
    const counts = {};

    portfolioCategories.forEach(category => {
        counts[category.id] = 0;
    });

    portfolioDesigns.forEach(design => {
        if (Object.hasOwn(counts, design.category)) {
            counts[design.category]++;
        }
    });

    return counts;
}

/* ============================================================
   05. LANGUAGE-AWARE DATA HELPERS
============================================================ */

function getPortfolioDesignTitle(design, language = "en") {
    return language === "ne"
        ? design.titleNe || design.titleEn || design.title
        : design.titleEn || design.title;
}

function getPortfolioDesignDescription(
    design,
    language = "en"
) {
    return language === "ne"
        ? design.descriptionNe || design.descriptionEn || ""
        : design.descriptionEn || design.description || "";
}

function getPortfolioCategoryName(
    categoryId,
    language = "en"
) {
    const category = portfolioCategories.find(
        item => item.id === categoryId
    );

    if (!category) return categoryId;

    return language === "ne"
        ? category.nameNe
        : category.nameEn;
}

/* ============================================================
   06. PUBLIC DATA ACCESS
============================================================ */

window.portfolioDesigns = portfolioDesigns;

window.portfolioCategories = portfolioCategories;

window.getPortfolioDesignTitle =
    getPortfolioDesignTitle;

window.getPortfolioDesignDescription =
    getPortfolioDesignDescription;

window.getPortfolioCategoryName =
    getPortfolioCategoryName;

window.getPortfolioCategoryCounts =
    getPortfolioCategoryCounts;

/* ============================================================
   07. INITIAL VALIDATION AND SUMMARY
============================================================ */

const portfolioDesignSummary =
    validatePortfolioDesigns();

console.info(
    "[Sajan Portfolio] Design data loaded:",
    portfolioDesignSummary
);

console.info(
    "[Sajan Portfolio] Category counts:",
    getPortfolioCategoryCounts()
);

/* ============================================================
   END OF DESIGNS.JS
============================================================ */
