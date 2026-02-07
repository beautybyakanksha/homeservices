// Update your business details here
const PHONE_NUMBER = "919589063593"; // e.g., 91XXXXXXXXXX for India; no + or spaces
const BUSINESS_NAME = "Beauty by Akanksha";
const DEFAULT_GREETING = "Hi! I’m interested in your services.";

// Optional: phone number for "Call Now" button (include country code if needed)
const CALL_NUMBER = "+919589063593";



// Define your services
const SERVICES = [
  
  // Makeup Services )
  { name: "HD Makeup", price: "₹16999", duration: "90 min", message: "Hi! I’d like to book HD Makeup." },
  { name: "Classic Bridal", price: "₹14999", duration: "80 min", message: "Hi! I’d like to book Classic Bridal Makeup." },
  { name: "Signature Makeup", price: "₹20000", duration: "145 min", message: "Hi! I’d like to book Signature Makeup" },
  { name: "Airbrush Makeup", price: "₹24999", duration: "120 min", message: "Hi! I’d like to book Airbrush Makeup" },
  { name: "Party Makeup", price: "₹2999", duration: "120 min", message: "Hi! I’d like to book Party Makeup" },
  { name: "Reception Makeup", price: "₹4999", duration: "60 min", message: "Hi! I’d like to book Reception Makeup" },
  { name: "Haldi Mehndi Makeup", price: "₹5999", duration: "60 min", message: "Hi! I’d like to book Haldi Mehndi Makeup" },

  // Hair Style (Sub-services)
  { name: "Hair Style – Pressing", price: "₹799", duration: "45 min", message: "Hi! I’d like to book Hair Pressing." },
  { name: "Hair Style – Curl", price: "₹999", duration: "60 min", message: "Hi! I’d like to book Hair Curl styling." },
  { name: "Hair Style – Bun / Choti", price: "₹699", duration: "45 min", message: "Hi! I’d like to book Bun / Choti hairstyle." },


  // Facials
  { name: "Facial (Glow)", price: "₹1299", duration: "60 min", message: "Hi! I’d like to book a Glow Facial." },
  { name: "Facial (O3 Glow)", price: "₹1499", duration: "70 min", message: "Hi! I’d like to book an O3 Glow Facial." },
  { name: "Facial (Anti-Aging)", price: "₹1599", duration: "75 min", message: "Hi! I’d like to book an Anti-Aging Facial." },
  { name: "Facial (Hydrating)", price: "₹1399", duration: "60 min", message: "Hi! I’d like to book a Hydrating Facial." },
  { name: "Facial (Acne Treatment)", price: "₹1499", duration: "70 min", message: "Hi! I’d like to book an Acne Treatment Facial." },

  // Waxing
  { name: "Waxing (Full Arms)", price: "₹499", duration: "30 min", message: "Hi! I’d like to book Full Arms Waxing." },
  { name: "Waxing (Full Legs)", price: "₹699", duration: "40 min", message: "Hi! I’d like to book Full Legs Waxing." },
  { name: "Waxing (Full Body)", price: "₹1799", duration: "90 min", message: "Hi! I’d like to book Full Body Waxing." },
  { name: "Waxing (Bikini)", price: "₹999", duration: "45 min", message: "Hi! I’d like to book a Bikini Wax." },

  // Skincare & Body
  { name: "Bleach", price: "₹499", duration: "30 min", message: "Hi! I’d like to book a Bleach service." },
  { name: "Body Polishing", price: "₹2499", duration: "90 min", message: "Hi! I’d like to book a Body Polishing session." },
];


// Customer Feedback (Demo)
const FEEDBACKS = [
  {
    name: "Sweta Verma",
    text: "Amazing bridal makeup! It stayed perfect the whole day. Highly recommended.",
    rating: "⭐⭐⭐⭐⭐"
  },
  {
    name: "Muskan Chauhan",
    text: "Very professional service. Makeup looked natural and beautiful.",
    rating: "⭐⭐⭐⭐⭐"
  },
  {
    name: "Tanu Singh",
    text: "I am so happy with the facial treatment! My skin feels rejuvenated and glowing.",
    rating: "⭐⭐⭐⭐⭐"
  },
  {
    name: "Chamak Kaur",
    text: "Very professional service. Makeup looked natural and beautiful.",
    rating: "⭐⭐⭐⭐⭐"
  }
];

// Define your packages
const PACKAGES = [
  {
    name: "Bridal Glow Package",
    price: "₹6999",
    duration: "5 hrs",
    includes: [
      "Bridal Makeup",
      "O3 Glow Facial",
      "Body Polishing",
      "Hair Styling"
    ],
    message: "Hi! I’d like to book the Bridal Glow Package."
  },
  {
    name: "Full Pamper Package",
    price: "₹4999",
    duration: "4 hrs",
    includes: [
      "Hydrating Facial",
      "Full Body Waxing",
      "Manicure & Pedicure",
      "Hair Curl"
    ],
    message: "Hi! I’d like to book the Full Pamper Package."
  }
];



