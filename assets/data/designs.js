
/* ============================================================
   SAJAN KHADKA — GRAPHIC DESIGN PORTFOLIO
   File: assets/data/designs.js
   Version: 5.0

   TOTAL DESIGNS: 39
   TOTAL CATEGORIES: 6

   CATEGORY BREAKDOWN
   01. Motion Graphics & Advertising    8
   02. Brand Identity & Promotional     5
   03. YouTube Thumbnail Design         8
   04. Finance & Business Graphics      3
   05. Food & Beverage Advertisement    7
   06. Poster & Creative Artwork        8

   FEATURES
   - English and Nepali titles
   - English and Nepali descriptions
   - Stable numeric design IDs
   - Consistent category identifiers
   - Canva software metadata
   - Global data access
   - Data validation
   - Automatic category counts

   IMPORTANT
   All image paths are relative to index.html.
============================================================ */

"use strict";

/* ============================================================
   01. PORTFOLIO CATEGORIES
============================================================ */

const portfolioCategories = [
    {
        id: "motion-graphics",
        nameEn: "Motion Graphics & Advertising",
        nameNe: "मोशन ग्राफिक्स तथा विज्ञापन",
        icon: "fa-film"
    },
    {
        id: "brand-identity",
        nameEn: "Brand Identity & Promotional Design",
        nameNe: "ब्रान्ड पहिचान तथा प्रचार डिजाइन",
        icon: "fa-briefcase"
    },
    {
        id: "youtube-thumbnails",
        nameEn: "YouTube Thumbnail Design",
        nameNe: "युट्युब थम्बनेल डिजाइन",
        icon: "fa-youtube"
    },
    {
        id: "finance-business",
        nameEn: "Finance & Business Graphics",
        nameNe: "वित्त तथा व्यवसाय ग्राफिक्स",
        icon: "fa-chart-line"
    },
    {
        id: "food-beverage",
        nameEn: "Food & Beverage Advertisement",
        nameNe: "खाना तथा पेय पदार्थ विज्ञापन",
        icon: "fa-utensils"
    },
    {
        id: "posters-artwork",
        nameEn: "Poster & Creative Artwork",
        nameNe: "पोस्टर तथा सिर्जनात्मक कलाकृति",
        icon: "fa-image"
    }
];

/* ============================================================
   02. COMPLETE DESIGN COLLECTION
============================================================ */

const portfolioDesigns = [

    /* ========================================================
       CATEGORY 01 — MOTION GRAPHICS & ADVERTISING
       TOTAL: 8
    ======================================================== */

    {
        id: 1,
        title: "Budget Offer Motion Campaign",
        titleEn: "Budget Offer Motion Campaign",
        titleNe: "बजेट अफर मोशन अभियान",
        category: "motion-graphics",
        description: "A promotional motion graphics campaign designed to present a budget-friendly offer.",
        descriptionEn: "A promotional motion graphics campaign designed to present a budget-friendly offer.",
        descriptionNe: "बजेटमैत्री अफर प्रस्तुत गर्न तयार गरिएको प्रचारात्मक मोशन ग्राफिक्स अभियान।",
        image: "assets/designs/motion-graphics/budget-offer-motion.jpg",
        alt: "Budget offer motion graphics campaign",
        software: "Canva"
    },

    {
        id: 2,
        title: "Creative Motion Advertisement",
        titleEn: "Creative Motion Advertisement",
        titleNe: "सिर्जनात्मक मोशन विज्ञापन",
        category: "motion-graphics",
        description: "A creative animated advertisement concept for digital promotion.",
        descriptionEn: "A creative animated advertisement concept for digital promotion.",
        descriptionNe: "डिजिटल प्रचारका लागि तयार गरिएको सिर्जनात्मक एनिमेटेड विज्ञापन।",
        image: "assets/designs/motion-graphics/creative-motion-ad.jpg",
        alt: "Creative motion advertisement",
        software: "Canva"
    },

    {
        id: 3,
        title: "Urban Streetwear Motion Intro",
        titleEn: "Urban Streetwear Motion Intro",
        titleNe: "अर्बन स्ट्रिटवेयर मोशन इन्ट्रो",
        category: "motion-graphics",
        description: "A dynamic motion intro concept inspired by urban streetwear fashion.",
        descriptionEn: "A dynamic motion intro concept inspired by urban streetwear fashion.",
        descriptionNe: "अर्बन स्ट्रिटवेयर फेसनबाट प्रेरित गतिशील मोशन इन्ट्रो।",
        image: "assets/designs/motion-graphics/urban-streetwear-intro.jpg",
        alt: "Urban streetwear motion intro",
        software: "Canva"
    },

    {
        id: 4,
        title: "Cozy Café Product Advertisement",
        titleEn: "Cozy Café Product Advertisement",
        titleNe: "आरामदायी क्याफे उत्पादन विज्ञापन",
        category: "motion-graphics",
        description: "A product advertisement concept created for a cozy café environment.",
        descriptionEn: "A product advertisement concept created for a cozy café environment.",
        descriptionNe: "क्याफेको वातावरण र उत्पादन प्रवर्द्धनका लागि तयार गरिएको विज्ञापन।",
        image: "assets/designs/motion-graphics/cozy-cafe-ad.jpg",
        alt: "Cozy cafe product advertisement",
        software: "Canva"
    },

    {
        id: 5,
        title: "Social Media Motion Campaign",
        titleEn: "Social Media Motion Campaign",
        titleNe: "सोसल मिडिया मोशन अभियान",
        category: "motion-graphics",
        description: "An engaging motion graphics concept for social media marketing.",
        descriptionEn: "An engaging motion graphics concept for social media marketing.",
        descriptionNe: "सामाजिक सञ्जाल मार्केटिङका लागि तयार गरिएको आकर्षक मोशन ग्राफिक्स।",
        image: "assets/designs/motion-graphics/social-media-motion.jpg",
        alt: "Social media motion campaign",
        software: "Canva"
    },

    {
        id: 6,
        title: "High-Impact Promotional Campaign",
        titleEn: "High-Impact Promotional Campaign",
        titleNe: "प्रभावशाली प्रचार अभियान",
        category: "motion-graphics",
        description: "A bold promotional campaign designed to capture audience attention.",
        descriptionEn: "A bold promotional campaign designed to capture audience attention.",
        descriptionNe: "दर्शकको ध्यान आकर्षित गर्न तयार गरिएको प्रभावशाली प्रचार अभियान।",
        image: "assets/designs/motion-graphics/high-impact-promotion.jpg",
        alt: "High impact promotional campaign",
        software: "Canva"
    },

    {
        id: 7,
        title: "Trending Social Media Campaign",
        titleEn: "Trending Social Media Campaign",
        titleNe: "ट्रेन्डिङ सामाजिक सञ्जाल अभियान",
        category: "motion-graphics",
        description: "A modern social media campaign concept inspired by digital trends.",
        descriptionEn: "A modern social media campaign concept inspired by digital trends.",
        descriptionNe: "डिजिटल ट्रेन्डबाट प्रेरित आधुनिक सामाजिक सञ्जाल अभियान।",
        image: "assets/designs/motion-graphics/trending-social-campaign.jpg",
        alt: "Trending social media campaign",
        software: "Canva"
    },

    {
        id: 8,
        title: "Digital Marketing Promotional Creative",
        titleEn: "Digital Marketing Promotional Creative",
        titleNe: "डिजिटल मार्केटिङ प्रचार सामग्री",
        category: "motion-graphics",
        description: "A digital marketing promotional creative for online brand communication.",
        descriptionEn: "A digital marketing promotional creative for online brand communication.",
        descriptionNe: "अनलाइन ब्रान्ड सञ्चार तथा प्रचारका लागि तयार गरिएको डिजिटल मार्केटिङ सामग्री।",
        image: "assets/designs/motion-graphics/digital-marketing-creative.jpg",
        alt: "Digital marketing promotional creative",
        software: "Canva"
    },

    /* ========================================================
       CATEGORY 02 — BRAND IDENTITY & PROMOTIONAL DESIGN
       TOTAL: 5
    ======================================================== */

    {
        id: 9,
        title: "Brand Identity Campaign",
        titleEn: "Brand Identity Campaign",
        titleNe: "ब्रान्ड पहिचान अभियान",
        category: "brand-identity",
        description: "A visual branding campaign created to communicate a consistent brand identity.",
        descriptionEn: "A visual branding campaign created to communicate a consistent brand identity.",
        descriptionNe: "एकरूप ब्रान्ड पहिचान प्रस्तुत गर्न तयार गरिएको दृश्यात्मक ब्रान्डिङ अभियान।",
        image: "assets/designs/brand-identity/brand-identity-campaign.jpg",
        alt: "Brand identity campaign design",
        software: "Canva"
    },

    {
        id: 10,
        title: "Digital Brand Promotion",
        titleEn: "Digital Brand Promotion",
        titleNe: "डिजिटल ब्रान्ड प्रचार",
        category: "brand-identity",
        description: "A promotional graphic designed for digital brand awareness.",
        descriptionEn: "A promotional graphic designed for digital brand awareness.",
        descriptionNe: "डिजिटल माध्यमबाट ब्रान्डको पहिचान बढाउन तयार गरिएको प्रचार डिजाइन।",
        image: "assets/designs/brand-identity/digital-brand-promotion.jpg",
        alt: "Digital brand promotion design",
        software: "Canva"
    },

    {
        id: 11,
        title: "Digital Marketing Course Advertisement",
        titleEn: "Digital Marketing Course Advertisement",
        titleNe: "डिजिटल मार्केटिङ कोर्स विज्ञापन",
        category: "brand-identity",
        description: "A course advertisement concept for digital marketing education and promotion.",
        descriptionEn: "A course advertisement concept for digital marketing education and promotion.",
        descriptionNe: "डिजिटल मार्केटिङ शिक्षा तथा प्रचारका लागि तयार गरिएको कोर्स विज्ञापन।",
        image: "assets/designs/brand-identity/digital-marketing-course.jpg",
        alt: "Digital marketing course advertisement",
        software: "Canva"
    },

    {
        id: 12,
        title: "Affiliate Marketing Infographic",
        titleEn: "Affiliate Marketing Infographic",
        titleNe: "एफिलिएट मार्केटिङ इन्फोग्राफिक",
        category: "brand-identity",
        description: "An infographic explaining affiliate marketing through visual information.",
        descriptionEn: "An infographic explaining affiliate marketing through visual information.",
        descriptionNe: "दृश्यात्मक जानकारीमार्फत एफिलिएट मार्केटिङ प्रस्तुत गर्ने इन्फोग्राफिक।",
        image: "assets/designs/brand-identity/affiliate-marketing-infographic.jpg",
        alt: "Affiliate marketing infographic",
        software: "Canva"
    },

    {
        id: 13,
        title: "Graphic Design Service Advertisement",
        titleEn: "Graphic Design Service Advertisement",
        titleNe: "ग्राफिक डिजाइन सेवा विज्ञापन",
        category: "brand-identity",
        description: "A promotional design showcasing graphic design services.",
        descriptionEn: "A promotional design showcasing graphic design services.",
        descriptionNe: "ग्राफिक डिजाइन सेवाहरू प्रस्तुत गर्न तयार गरिएको प्रचार सामग्री।",
        image: "assets/designs/brand-identity/graphic-design-service.jpg",
        alt: "Graphic design service advertisement",
        software: "Canva"
    },

    /* ========================================================
       CATEGORY 03 — YOUTUBE THUMBNAIL DESIGN
       TOTAL: 8
    ======================================================== */

    {
        id: 14,
        title: "Historical Documentary Thumbnail",
        titleEn: "Historical Documentary Thumbnail",
        titleNe: "ऐतिहासिक वृत्तचित्र थम्बनेल",
        category: "youtube-thumbnails",
        description: "A documentary thumbnail concept designed around a historical topic.",
        descriptionEn: "A documentary thumbnail concept designed around a historical topic.",
        descriptionNe: "ऐतिहासिक विषयलाई केन्द्रमा राखेर तयार गरिएको वृत्तचित्र थम्बनेल।",
        image: "assets/designs/youtube-thumbnails/historical-documentary.jpg",
        alt: "Historical documentary YouTube thumbnail",
        software: "Canva"
    },

    {
        id: 15,
        title: "Gaming YouTube Thumbnail",
        titleEn: "Gaming YouTube Thumbnail",
        titleNe: "गेमिङ युट्युब थम्बनेल",
        category: "youtube-thumbnails",
        description: "An energetic gaming thumbnail concept for video content.",
        descriptionEn: "An energetic gaming thumbnail concept for video content.",
        descriptionNe: "गेमिङ भिडियो सामग्रीका लागि तयार गरिएको आकर्षक थम्बनेल।",
        image: "assets/designs/youtube-thumbnails/gaming-gta6-thumbnail.jpg",
        alt: "Gaming YouTube thumbnail",
        software: "Canva"
    },

    {
        id: 16,
        title: "Business YouTube Thumbnail",
        titleEn: "Business YouTube Thumbnail",
        titleNe: "व्यवसायसम्बन्धी युट्युब थम्बनेल",
        category: "youtube-thumbnails",
        description: "A business-focused thumbnail concept for educational or informational videos.",
        descriptionEn: "A business-focused thumbnail concept for educational or informational videos.",
        descriptionNe: "शैक्षिक तथा जानकारीमूलक व्यवसायसम्बन्धी भिडियोका लागि थम्बनेल।",
        image: "assets/designs/youtube-thumbnails/business-thumbnail.jpg",
        alt: "Business YouTube thumbnail",
        software: "Canva"
    },

    {
        id: 17,
        title: "Creative YouTube Thumbnail",
        titleEn: "Creative YouTube Thumbnail",
        titleNe: "सिर्जनात्मक युट्युब थम्बनेल",
        category: "youtube-thumbnails",
        description: "A creative thumbnail design for engaging video presentation.",
        descriptionEn: "A creative thumbnail design for engaging video presentation.",
        descriptionNe: "भिडियो प्रस्तुति आकर्षक बनाउन तयार गरिएको सिर्जनात्मक थम्बनेल।",
        image: "assets/designs/youtube-thumbnails/creative-youtube-thumbnail.jpg",
        alt: "Creative YouTube thumbnail",
        software: "Canva"
    },

    {
        id: 18,
        title: "Professional Thumbnail Concept",
        titleEn: "Professional Thumbnail Concept",
        titleNe: "व्यावसायिक थम्बनेल अवधारणा",
        category: "youtube-thumbnails",
        description: "A professional thumbnail concept with a clear visual presentation.",
        descriptionEn: "A professional thumbnail concept with a clear visual presentation.",
        descriptionNe: "स्पष्ट दृश्य प्रस्तुतिसहित तयार गरिएको व्यावसायिक थम्बनेल अवधारणा।",
        image: "assets/designs/youtube-thumbnails/professional-thumbnail.jpg",
        alt: "Professional thumbnail concept",
        software: "Canva"
    },

    {
        id: 19,
        title: "Viral Content Thumbnail",
        titleEn: "Viral Content Thumbnail",
        titleNe: "भाइरल सामग्री थम्बनेल",
        category: "youtube-thumbnails",
        description: "A bold thumbnail concept designed for attention-grabbing video content.",
        descriptionEn: "A bold thumbnail concept designed for attention-grabbing video content.",
        descriptionNe: "दर्शकको ध्यान आकर्षित गर्ने भिडियो सामग्रीका लागि तयार गरिएको थम्बनेल।",
        image: "assets/designs/youtube-thumbnails/viral-content-thumbnail.jpg",
        alt: "Viral content thumbnail",
        software: "Canva"
    },

    {
        id: 20,
        title: "YouTube Shorts Thumbnail",
        titleEn: "YouTube Shorts Thumbnail",
        titleNe: "युट्युब शर्ट्स थम्बनेल",
        category: "youtube-thumbnails",
        description: "A thumbnail concept designed for short-form video content.",
        descriptionEn: "A thumbnail concept designed for short-form video content.",
        descriptionNe: "छोटो भिडियो सामग्रीका लागि तयार गरिएको थम्बनेल अवधारणा।",
        image: "assets/designs/youtube-thumbnails/youtube-shorts-thumbnail.jpg",
        alt: "YouTube Shorts thumbnail",
        software: "Canva"
    },

    {
        id: 21,
        title: "Finance & Business Thumbnail",
        titleEn: "Finance & Business Thumbnail",
        titleNe: "वित्त तथा व्यवसाय थम्बनेल",
        category: "youtube-thumbnails",
        description: "A finance and business themed thumbnail for online video content.",
        descriptionEn: "A finance and business themed thumbnail for online video content.",
        descriptionNe: "अनलाइन भिडियो सामग्रीका लागि वित्त तथा व्यवसाय विषयक थम्बनेल।",
        image: "assets/designs/youtube-thumbnails/finance-business-thumbnail.jpg",
        alt: "Finance and business thumbnail",
        software: "Canva"
    },

    /* ========================================================
       CATEGORY 04 — FINANCE & BUSINESS GRAPHICS
       TOTAL: 3
    ======================================================== */

    {
        id: 22,
        title: "Investment & Wealth Management Poster",
        titleEn: "Investment & Wealth Management Poster",
        titleNe: "लगानी तथा सम्पत्ति व्यवस्थापन पोस्टर",
        category: "finance-business",
        description: "A finance-themed poster concept focused on investment and wealth management.",
        descriptionEn: "A finance-themed poster concept focused on investment and wealth management.",
        descriptionNe: "लगानी तथा सम्पत्ति व्यवस्थापन विषयमा तयार गरिएको वित्तीय पोस्टर।",
        image: "assets/designs/finance-business/investment-wealth-poster.jpg",
        alt: "Investment and wealth management poster",
        software: "Canva"
    },

    {
        id: 23,
        title: "Trading & Investment Poster",
        titleEn: "Trading & Investment Poster",
        titleNe: "ट्रेडिङ तथा लगानी पोस्टर",
        category: "finance-business",
        description: "A promotional poster concept based on trading and investment.",
        descriptionEn: "A promotional poster concept based on trading and investment.",
        descriptionNe: "ट्रेडिङ तथा लगानी विषयमा आधारित प्रचारात्मक पोस्टर।",
        image: "assets/designs/finance-business/trading-investment-poster.jpg",
        alt: "Trading and investment poster",
        software: "Canva"
    },

    {
        id: 24,
        title: "Success & Motivation Poster",
        titleEn: "Success & Motivation Poster",
        titleNe: "सफलता तथा प्रेरणादायी पोस्टर",
        category: "finance-business",
        description: "A motivational poster concept communicating success and ambition.",
        descriptionEn: "A motivational poster concept communicating success and ambition.",
        descriptionNe: "सफलता र महत्वाकांक्षा प्रस्तुत गर्ने प्रेरणादायी पोस्टर।",
        image: "assets/designs/finance-business/success-motivation-poster.jpg",
        alt: "Success and motivation poster",
        software: "Canva"
    },

    /* ========================================================
       CATEGORY 05 — FOOD & BEVERAGE ADVERTISEMENT
       TOTAL: 7
    ======================================================== */

    {
        id: 25,
        title: "Pistachio Frappe Product Advertisement",
        titleEn: "Pistachio Frappe Product Advertisement",
        titleNe: "पिस्ता फ्रापे उत्पादन विज्ञापन",
        category: "food-beverage",
        description: "A product advertisement concept featuring a pistachio frappe.",
        descriptionEn: "A product advertisement concept featuring a pistachio frappe.",
        descriptionNe: "पिस्ता फ्रापे उत्पादन प्रस्तुत गर्ने विज्ञापन डिजाइन।",
        image: "assets/designs/food-beverage/pistachio-frappe.jpg",
        alt: "Pistachio frappe product advertisement",
        software: "Canva"
    },

    {
        id: 26,
        title: "Chocolate Milkshake Promotional Design",
        titleEn: "Chocolate Milkshake Promotional Design",
        titleNe: "चकलेट मिल्कशेक प्रचार डिजाइन",
        category: "food-beverage",
        description: "A promotional graphic concept featuring a chocolate milkshake.",
        descriptionEn: "A promotional graphic concept featuring a chocolate milkshake.",
        descriptionNe: "चकलेट मिल्कशेक प्रस्तुत गर्ने प्रचारात्मक ग्राफिक डिजाइन।",
        image: "assets/designs/food-beverage/chocolate-milkshake.jpg",
        alt: "Chocolate milkshake promotional design",
        software: "Canva"
    },

    {
        id: 27,
        title: "Halloween Beverage Campaign",
        titleEn: "Halloween Beverage Campaign",
        titleNe: "हेलोविन पेय पदार्थ अभियान",
        category: "food-beverage",
        description: "A seasonal beverage campaign concept inspired by Halloween.",
        descriptionEn: "A seasonal beverage campaign concept inspired by Halloween.",
        descriptionNe: "हेलोविनबाट प्रेरित मौसमी पेय पदार्थ प्रचार अभियान।",
        image: "assets/designs/food-beverage/halloween-fanta.jpg",
        alt: "Halloween beverage campaign",
        software: "Canva"
    },

    {
        id: 28,
        title: "Coca-Cola Inspired Beverage Advertisement",
        titleEn: "Coca-Cola Inspired Beverage Advertisement",
        titleNe: "कोका-कोला प्रेरित पेय विज्ञापन",
        category: "food-beverage",
        description: "A beverage advertisement concept inspired by Coca-Cola visual branding.",
        descriptionEn: "A beverage advertisement concept inspired by Coca-Cola visual branding.",
        descriptionNe: "कोका-कोलाको दृश्यात्मक ब्रान्डिङबाट प्रेरित पेय पदार्थ विज्ञापन।",
        image: "assets/designs/food-beverage/coca-cola-advertisement.jpg",
        alt: "Coca-Cola inspired beverage advertisement",
        software: "Canva"
    },

    {
        id: 29,
        title: "Energy Drink Promotional Campaign",
        titleEn: "Energy Drink Promotional Campaign",
        titleNe: "इनर्जी ड्रिंक प्रचार अभियान",
        category: "food-beverage",
        description: "An energetic promotional campaign concept for an energy drink.",
        descriptionEn: "An energetic promotional campaign concept for an energy drink.",
        descriptionNe: "इनर्जी ड्रिंकका लागि तयार गरिएको ऊर्जाशील प्रचार अभियान।",
        image: "assets/designs/food-beverage/monster-energy-campaign.jpg",
        alt: "Energy drink promotional campaign",
        software: "Canva"
    },

    {
        id: 30,
        title: "Creative Beverage Concept Advertisement",
        titleEn: "Creative Beverage Concept Advertisement",
        titleNe: "सिर्जनात्मक पेय पदार्थ अवधारणा विज्ञापन",
        category: "food-beverage",
        description: "A creative visual advertisement concept for a beverage product.",
        descriptionEn: "A creative visual advertisement concept for a beverage product.",
        descriptionNe: "पेय पदार्थ उत्पादनका लागि तयार गरिएको सिर्जनात्मक दृश्यात्मक विज्ञापन।",
        image: "assets/designs/food-beverage/creative-beverage-concept.jpg",
        alt: "Creative beverage concept advertisement",
        software: "Canva"
    },

    {
        id: 31,
        title: "Fast Food Promotional Flyer",
        titleEn: "Fast Food Promotional Flyer",
        titleNe: "फास्ट फुड प्रचार फ्लायर",
        category: "food-beverage",
        description: "A promotional flyer concept for a fast-food business.",
        descriptionEn: "A promotional flyer concept for a fast-food business.",
        descriptionNe: "फास्ट फुड व्यवसायका लागि तयार गरिएको प्रचारात्मक फ्लायर।",
        image: "assets/designs/food-beverage/fast-food-flyer.jpg",
        alt: "Fast food promotional flyer",
        software: "Canva"
    },

    /* ========================================================
       CATEGORY 06 — POSTER & CREATIVE ARTWORK
       TOTAL: 8
    ======================================================== */

    {
        id: 32,
        title: "Broken Prayer Typography Artwork",
        titleEn: "Broken Prayer Typography Artwork",
        titleNe: "ब्रोकन प्रेयर टाइपोग्राफी कलाकृति",
        category: "posters-artwork",
        description: "A typography-based creative artwork exploring expressive visual composition.",
        descriptionEn: "A typography-based creative artwork exploring expressive visual composition.",
        descriptionNe: "अभिव्यक्तिपूर्ण दृश्य संयोजन प्रस्तुत गर्ने टाइपोग्राफीमा आधारित कलाकृति।",
        image: "assets/designs/posters-artwork/broken-prayer.jpg",
        alt: "Broken Prayer typography artwork",
        software: "Canva"
    },

    {
        id: 33,
        title: "Basantapur Heritage Poster",
        titleEn: "Basantapur Heritage Poster",
        titleNe: "बसन्तपुर सम्पदा पोस्टर",
        category: "posters-artwork",
        description: "A creative poster highlighting the heritage and visual identity of Basantapur.",
        descriptionEn: "A creative poster highlighting the heritage and visual identity of Basantapur.",
        descriptionNe: "बसन्तपुरको सम्पदा तथा दृश्यात्मक पहिचान प्रस्तुत गर्ने पोस्टर।",
        image: "assets/designs/posters-artwork/basantapur-heritage.jpg",
        alt: "Basantapur heritage poster",
        software: "Canva"
    },

    {
        id: 34,
        title: "Nepali Typography Artwork",
        titleEn: "Nepali Typography Artwork",
        titleNe: "नेपाली टाइपोग्राफी कलाकृति",
        category: "posters-artwork",
        description: "A creative artwork focused on Nepali typography and lettering.",
        descriptionEn: "A creative artwork focused on Nepali typography and lettering.",
        descriptionNe: "नेपाली अक्षर तथा टाइपोग्राफीमा केन्द्रित सिर्जनात्मक कलाकृति।",
        image: "assets/designs/posters-artwork/nepali-typography.jpg",
        alt: "Nepali typography artwork",
        software: "Canva"
    },

    {
        id: 35,
        title: "Neymar Football Poster",
        titleEn: "Neymar Football Poster",
        titleNe: "नेयमार फुटबल पोस्टर",
        category: "posters-artwork",
        description: "A football-themed creative poster featuring Neymar.",
        descriptionEn: "A football-themed creative poster featuring Neymar.",
        descriptionNe: "नेयमारलाई प्रस्तुत गरिएको फुटबल विषयक सिर्जनात्मक पोस्टर।",
        image: "assets/designs/posters-artwork/neymar-football-poster.jpg",
        alt: "Neymar football poster",
        software: "Canva"
    },

    {
        id: 36,
        title: "Cricket Sports Poster",
        titleEn: "Cricket Sports Poster",
        titleNe: "क्रिकेट खेल पोस्टर",
        category: "posters-artwork",
        description: "A cricket-themed sports poster featuring Virat Kohli.",
        descriptionEn: "A cricket-themed sports poster featuring Virat Kohli.",
        descriptionNe: "विराट कोहलीलाई प्रस्तुत गरिएको क्रिकेट विषयक खेल पोस्टर।",
        image: "assets/designs/posters-artwork/virat-kohli-poster.jpg",
        alt: "Cricket sports poster",
        software: "Canva"
    },

    {
        id: 37,
        title: "New Year Celebration Poster",
        titleEn: "New Year Celebration Poster",
        titleNe: "नयाँ वर्ष उत्सव पोस्टर",
        category: "posters-artwork",
        description: "A celebratory poster concept created for a New Year occasion.",
        descriptionEn: "A celebratory poster concept created for a New Year occasion.",
        descriptionNe: "नयाँ वर्षको अवसरका लागि तयार गरिएको उत्सवमय पोस्टर।",
        image: "assets/designs/posters-artwork/new-year-celebration.jpg",
        alt: "New Year celebration poster",
        software: "Canva"
    },

    {
        id: 38,
        title: "Wolf Logo Concept",
        titleEn: "Wolf Logo Concept",
        titleNe: "ब्वाँसो लोगो अवधारणा",
        category: "posters-artwork",
        description: "A creative wolf logo concept exploring a distinctive visual identity.",
        descriptionEn: "A creative wolf logo concept exploring a distinctive visual identity.",
        descriptionNe: "विशिष्ट दृश्यात्मक पहिचान प्रस्तुत गर्ने सिर्जनात्मक ब्वाँसो लोगो अवधारणा।",
        image: "assets/designs/posters-artwork/wolf-logo-concept.jpg",
        alt: "Wolf logo concept",
        software: "Canva"
    },

    {
        id: 39,
        title: "Creative Digital Artwork",
        titleEn: "Creative Digital Artwork",
        titleNe: "सिर्जनात्मक डिजिटल कलाकृति",
        category: "posters-artwork",
        description: "A creative digital artwork exploring visual design and composition.",
        descriptionEn: "A creative digital artwork exploring visual design and composition.",
        descriptionNe: "दृश्यात्मक डिजाइन तथा संयोजन प्रस्तुत गर्ने सिर्जनात्मक डिजिटल कलाकृति।",
        image: "assets/designs/posters-artwork/creative-digital-artwork.jpg",
        alt: "Creative digital artwork",
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
