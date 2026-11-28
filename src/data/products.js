export const COMPANY_INFO = {
  name: "NARAYAN-VARCHAS FOODS PRIVATE LIMITED",
  shortName: "Narayan-Varchas",
  tagline: "Authentic Taste For Every Kitchen",
  industry: "Food Products",
  contactNumbers: [
    { display: "+91 94094 09159", raw: "9409409159" },
    { display: "+91 99934 19595", raw: "9993419595" }
  ],
  whatsappNumbers: ["919409409159", "919993419595"],
  defaultWhatsApp: "919409409159",
  location: "Hyderabad, Telangana",
  address: "Narayan-Varchas Foods Private Limited, Hyderabad, Telangana, India"
};

export const CATEGORIES = [
  {
    id: "gravy-bases-sauces",
    name: "Gravy Bases & Sauces",
    count: 15,
    tagline: "Rich, aromatic restaurant-style gravy bases and gourmet cooking sauces",
    image: "/products/red-gravy-base.jpg"
  },
  {
    id: "indian-snack-marinates",
    name: "Indian Snack Marinates",
    count: 7,
    tagline: "Authentic spiced marinades for tikkas, grills, biryanis and roasts",
    image: "/products/tandoori-marinate.jpg"
  },
  {
    id: "veg-pickles",
    name: "Veg Pickles",
    count: 7,
    tagline: "Traditional home-style pickles crafted with authentic recipes and spices",
    image: "/products/avakaya-mango-pickle.jpg"
  },
  {
    id: "non-veg-pickles",
    name: "Non-Veg Pickles",
    count: 10,
    tagline: "Delectable authentic Andhra & South Indian meat and seafood pickles",
    image: "/products/chicken-pickle.jpg"
  },
  {
    id: "karam-podi",
    name: "Karam Podi",
    count: 6,
    tagline: "Traditional spiced podi powders made with roasted lentils, spices and herbs",
    image: "/products/karivepaku-karam-podi.jpg"
  },
  {
    id: "instant-foods-premixes",
    name: "Instant Foods & Premixes",
    count: 16,
    tagline: "Healthy millet meals, wholesome pongals, upmas, sweets and traditional premixes",
    image: "/products/pesarattu-mix.jpg"
  },
  {
    id: "idli-dosa-batter-premix",
    name: "Idli/Dosa Batter & Premix",
    count: 14,
    tagline: "Freshly prepared natural and nutritious traditional fermented batters and mixes",
    image: "/products/ragi-idli-batter.jpg"
  }
];

export const PRODUCTS = [
  // 1. GRAVY BASES & SAUCES (15)
  {
    id: "yellow-gravy-base",
    name: "Yellow Gravy Base",
    categoryId: "gravy-bases-sauces",
    categoryName: "Gravy Bases & Sauces",
    image: "/products/yellow-gravy-base.jpg",
    description: "Versatile golden-hued culinary gravy base prepared with slow-cooked onions, turmeric, aromatic herbs, and traditional spices. Ideal for rich restaurant-style gravies and curries.",
    isFeatured: true
  },
  {
    id: "red-gravy-base",
    name: "Red Gravy Base",
    categoryId: "gravy-bases-sauces",
    categoryName: "Gravy Bases & Sauces",
    image: "/products/red-gravy-base.jpg",
    description: "Classic rich tomato-onion base cooked to perfection with traditional spices. Forms the authentic foundation for North and South Indian curries and gravies.",
    isFeatured: true
  },
  {
    id: "white-gravy-base",
    name: "White Gravy Base",
    categoryId: "gravy-bases-sauces",
    categoryName: "Gravy Bases & Sauces",
    image: "/products/white-gravy-base.jpg",
    description: "Velvety smooth, mildly spiced gourmet base prepared with cashew nuts, melon seeds, and fragrant whole spices. Perfect for regal Mughlai curries.",
    isFeatured: false
  },
  {
    id: "green-gravy-base",
    name: "Green Gravy Base",
    categoryId: "gravy-bases-sauces",
    categoryName: "Gravy Bases & Sauces",
    image: "/products/green-gravy-base.jpg",
    description: "Herbaceous and fresh base made with vibrant green chilies, cilantro, mint, and balanced spices. Imparts an authentic zesty punch to curries.",
    isFeatured: false
  },
  {
    id: "multi-south-indian-gravy-base",
    name: "Multi South Indian Gravy Base",
    categoryId: "gravy-bases-sauces",
    categoryName: "Gravy Bases & Sauces",
    image: "/products/multi-south-indian-gravy-base.jpg",
    description: "A master blend crafted for South Indian kurmas, curries, and vegetable stews with roasted coconut, curry leaves, and regional spices.",
    isFeatured: false
  },
  {
    id: "korma-gravy-base",
    name: "Korma Gravy Base",
    categoryId: "gravy-bases-sauces",
    categoryName: "Gravy Bases & Sauces",
    image: "/products/korma-gravy-base.jpg",
    description: "Aromatic, thick korma base cooked with slow-browned onions, curd, warm spices, and nut paste. Delivers royal depth of flavor.",
    isFeatured: false
  },
  {
    id: "malabar-gravy-base",
    name: "Malabar Gravy Base",
    categoryId: "gravy-bases-sauces",
    categoryName: "Gravy Bases & Sauces",
    image: "/products/malabar-gravy-base.jpg",
    description: "Coastal-style gravy base infused with the subtle richness of coconut milk, fennel, curry leaves, and crushed black pepper.",
    isFeatured: false
  },
  {
    id: "salan-gravy-base",
    name: "Salan Gravy Base",
    categoryId: "gravy-bases-sauces",
    categoryName: "Gravy Bases & Sauces",
    image: "/products/salan-gravy-base.jpg",
    description: "Signature Hyderabadi salan base cooked with roasted peanuts, sesame seeds, tamarind, and green chilies. The quintessential companion for biryani.",
    isFeatured: false
  },
  {
    id: "butter-gravy-sauce",
    name: "Butter Gravy Sauce",
    categoryId: "gravy-bases-sauces",
    categoryName: "Gravy Bases & Sauces",
    image: "/products/butter-gravy-sauce.jpg",
    description: "Silky, buttery tomato gravy balanced with aromatic kasuri methi and honey. Ready to transform paneer or chicken into makhani masterpieces.",
    isFeatured: true
  },
  {
    id: "shahi-gravy-sauce",
    name: "Shahi Gravy Sauce",
    categoryId: "gravy-bases-sauces",
    categoryName: "Gravy Bases & Sauces",
    image: "/products/shahi-gravy-sauce.jpg",
    description: "Opulent shahi cooking sauce simmered with almonds, cream, cardamom, and saffron. Creates rich royal dishes effortlessly.",
    isFeatured: false
  },
  {
    id: "hyderabad-gravy-sauce",
    name: "Hyderabad Gravy Sauce",
    categoryId: "gravy-bases-sauces",
    categoryName: "Gravy Bases & Sauces",
    image: "/products/hyderabad-gravy-sauce.jpg",
    description: "Authentic spicy and tangy Hyderabadi sauce packed with dry coconut, poppy seeds, and traditional spices of the Deccan.",
    isFeatured: true
  },
  {
    id: "afghani-gravy-sauce",
    name: "Afghani Gravy Sauce",
    categoryId: "gravy-bases-sauces",
    categoryName: "Gravy Bases & Sauces",
    image: "/products/afghani-gravy-sauce.jpg",
    description: "Mild, creamy white sauce infused with roasted garlic, freshly cracked black pepper, and rich cream.",
    isFeatured: false
  },
  {
    id: "kadai-gravy-sauce",
    name: "Kadai Gravy Sauce",
    categoryId: "gravy-bases-sauces",
    categoryName: "Gravy Bases & Sauces",
    image: "/products/kadai-gravy-sauce.jpg",
    description: "Robust, chunky tomato sauce flavored with freshly pounded coriander seeds, dried red chilies, and bell peppers.",
    isFeatured: false
  },
  {
    id: "pulusu-gravy-sauce",
    name: "Pulusu Gravy Sauce",
    categoryId: "gravy-bases-sauces",
    categoryName: "Gravy Bases & Sauces",
    image: "/products/pulusu-gravy-sauce.jpg",
    description: "Traditional Andhra pulusu sauce featuring tangy tamarind extract, fenugreek, jaggery notes, and aromatic tempering.",
    isFeatured: false
  },
  {
    id: "onion-tomato-gravy-sauce",
    name: "Onion Tomato Gravy Sauce",
    categoryId: "gravy-bases-sauces",
    categoryName: "Gravy Bases & Sauces",
    image: "/products/onion-tomato-gravy-sauce.jpg",
    description: "Everyday staple masala sauce prepared with slowly caramelized onions, ripe tomatoes, ginger, and garlic.",
    isFeatured: false
  },

  // 2. INDIAN SNACK MARINATES (7)
  {
    id: "grilled-marinate",
    name: "Grilled Marinate",
    categoryId: "indian-snack-marinates",
    categoryName: "Indian Snack Marinates",
    image: "/products/grilled-marinate.jpg",
    description: "Flavor-packed marinade blending smoky spices, lime juice, and herbs designed to seal in moisture and intense flavor on the grill.",
    isFeatured: false
  },
  {
    id: "tandoori-marinate",
    name: "Tandoori Marinate",
    categoryId: "indian-snack-marinates",
    categoryName: "Indian Snack Marinates",
    image: "/products/tandoori-marinate.jpg",
    description: "Authentic Punjabi tandoori paste crafted with hung curd, roasted mustard oil, degi mirch, and garam masala.",
    isFeatured: true
  },
  {
    id: "thecha-marinate",
    name: "Thecha Marinate",
    categoryId: "indian-snack-marinates",
    categoryName: "Indian Snack Marinates",
    image: "/products/thecha-marinate.jpg",
    description: "Fiery Maharashtrian style marinate prepared from coarse hand-pounded green chilies, roasted garlic, and cumin.",
    isFeatured: false
  },
  {
    id: "tikka-marinate",
    name: "Tikka Marinate",
    categoryId: "indian-snack-marinates",
    categoryName: "Indian Snack Marinates",
    image: "/products/tikka-marinate.jpg",
    description: "Classic tikka marinade seasoned with aromatic spices, ginger-garlic paste, and lemon for paneer, soya, and meats.",
    isFeatured: false
  },
  {
    id: "achari-tikka-marinate",
    name: "Achari Tikka Marinate",
    categoryId: "indian-snack-marinates",
    categoryName: "Indian Snack Marinates",
    image: "/products/achari-tikka-marinate.jpg",
    description: "Tangy pickle-spiced marinade combining mustard seeds, kalonji, saunf, and fenugreek for an unmistakable pickled barbecue flavor.",
    isFeatured: false
  },
  {
    id: "hyderabad-biryani-marinate",
    name: "Hyderabad Biryani Marinate",
    categoryId: "indian-snack-marinates",
    categoryName: "Indian Snack Marinates",
    image: "/products/hyderabad-biryani-marinate.jpg",
    description: "Heritage Nizami marinade featuring fried onions (birista), mint, coriander, shahi jeera, and stone-ground spices.",
    isFeatured: true
  },
  {
    id: "zafrani-biryani-marinate",
    name: "Zafrani Biryani Marinate",
    categoryId: "indian-snack-marinates",
    categoryName: "Indian Snack Marinates",
    image: "/products/zafrani-biryani-marinate.jpg",
    description: "Luxurious royal marinade elevated with saffron threads, mace, nutmeg, and aromatic rose water.",
    isFeatured: false
  },

  // 3. VEG PICKLES (7)
  {
    id: "tomato-pickle",
    name: "Tomato Pickle",
    categoryId: "veg-pickles",
    categoryName: "Veg Pickles",
    image: "/products/tomato-pickle.jpg",
    description: "Sun-ripened tomatoes slowly simmered with tamarind, fiery red chilies, mustard powder, and sesame oil in authentic Andhra style.",
    isFeatured: false
  },
  {
    id: "gongura-pickle",
    name: "Gongura Pickle",
    categoryId: "veg-pickles",
    categoryName: "Veg Pickles",
    image: "/products/gongura-pickle.jpg",
    description: "The pride of Andhra culinary heritage. Fresh sorrel leaves sautéed and pounded with garlic cloves, red chilies, and cold-pressed oil.",
    isFeatured: true
  },
  {
    id: "lemon-pickle",
    name: "Lemon Pickle",
    categoryId: "veg-pickles",
    categoryName: "Veg Pickles",
    image: "/products/lemon-pickle.jpg",
    description: "Juicy, sun-cured lemons steeped with roasted fenugreek, red chili, and rock salt for a bright, tangy and digestive kick.",
    isFeatured: false
  },
  {
    id: "mango-allam-pickle",
    name: "Mango Allam Pickle",
    categoryId: "veg-pickles",
    categoryName: "Veg Pickles",
    image: "/products/mango-allam-pickle.jpg",
    description: "Exquisite fusion of crisp raw mango pieces with fresh spicy ginger, tamarind, and aromatic traditional tempering.",
    isFeatured: false
  },
  {
    id: "avakaya-mango-pickle",
    name: "Avakaya Mango Pickle",
    categoryId: "veg-pickles",
    categoryName: "Veg Pickles",
    image: "/products/avakaya-mango-pickle.jpg",
    description: "Authentic Andhra style mango pickle made with hard raw mangoes, freshly ground mustard, fiery red chilies, and cold pressed sesame oil.",
    isFeatured: true
  },
  {
    id: "amla-pickle",
    name: "Amla Pickle",
    categoryId: "veg-pickles",
    categoryName: "Veg Pickles",
    image: "/products/amla-pickle.jpg",
    description: "Nutritious whole Indian gooseberries pickled with garlic, fenugreek, and cold-pressed oil. Packed with traditional immunity benefits.",
    isFeatured: false
  },
  {
    id: "mix-veg-pickle",
    name: "Mix Veg Pickle",
    categoryId: "veg-pickles",
    categoryName: "Veg Pickles",
    image: "/products/mix-veg-pickle.jpg",
    description: "Crunchy seasonal vegetables including carrots, cauliflower, and turnip cured with whole aromatic spices and pure oil.",
    isFeatured: false
  },

  // 4. NON-VEG PICKLES (10)
  {
    id: "chicken-pickle",
    name: "Chicken Pickle",
    categoryId: "non-veg-pickles",
    categoryName: "Non-Veg Pickles",
    image: "/products/chicken-pickle.jpg",
    description: "Tender chunks of chicken marinated with freshly pounded spices, deep-fried to perfection, and infused with traditional spicy Andhra masala.",
    isFeatured: true
  },
  {
    id: "natu-kodi-pickle",
    name: "Natu Kodi Pickle",
    categoryId: "non-veg-pickles",
    categoryName: "Non-Veg Pickles",
    image: "/products/natu-kodi-pickle.jpg",
    description: "Country chicken pickle prepared with robust regional spices, garlic, ginger, and sesame oil according to age-old village traditions.",
    isFeatured: false
  },
  {
    id: "chicken-bone-less-pickle",
    name: "Chicken Bone Less Pickle",
    categoryId: "non-veg-pickles",
    categoryName: "Non-Veg Pickles",
    image: "/products/chicken-bone-less-pickle.jpg",
    description: "Succulent boneless chicken bites seasoned with rich ground spices, roasted garlic, and tangy lemon juice in every bite.",
    isFeatured: true
  },
  {
    id: "mutton-bone-less-pickle",
    name: "Mutton Bone Less Pickle",
    categoryId: "non-veg-pickles",
    categoryName: "Non-Veg Pickles",
    image: "/products/mutton-bone-less-pickle.jpg",
    description: "Premium tender pieces of boneless mutton slow-cooked with aromatic garam masalas and preserved in fragrant oil.",
    isFeatured: true
  },
  {
    id: "bocha-rahu-fish-pickle",
    name: "Bocha / Rahu Fish Pickle",
    categoryId: "non-veg-pickles",
    categoryName: "Non-Veg Pickles",
    image: "/products/bocha-rahu-fish-pickle.jpg",
    description: "Crisp fried Bocha/Rahu freshwater fish pieces preserved in a spicy, tangy Andhra style masala blend.",
    isFeatured: false
  },
  {
    id: "koramenu-fish-pickle",
    name: "Koramenu Fish Pickle",
    categoryId: "non-veg-pickles",
    categoryName: "Non-Veg Pickles",
    image: "/products/koramenu-fish-pickle.jpg",
    description: "Prized Koramenu (Murrel) fish delicacies pickled with mustard seed powder, garlic cloves, and regional chili.",
    isFeatured: false
  },
  {
    id: "salman-fish-pickle",
    name: "Salman Fish Pickle",
    categoryId: "non-veg-pickles",
    categoryName: "Non-Veg Pickles",
    image: "/products/salman-fish-pickle.jpg",
    description: "Rich Salmon fish cuts infused with delicate coastal seasonings, ginger, garlic, and vinegar-tamarind blend.",
    isFeatured: false
  },
  {
    id: "pandugappa-fish-pickle",
    name: "Pandugappa Fish Pickle",
    categoryId: "non-veg-pickles",
    categoryName: "Non-Veg Pickles",
    image: "/products/pandugappa-fish-pickle.jpg",
    description: "Exquisite coastal Asian Seabass (Pandugappa) fish pieces cooked and preserved in an aromatic spicy gravy.",
    isFeatured: false
  },
  {
    id: "tuna-fish-pickle",
    name: "Tuna Fish Pickle",
    categoryId: "non-veg-pickles",
    categoryName: "Non-Veg Pickles",
    image: "/products/tuna-fish-pickle.jpg",
    description: "Firm tuna fillets pickled with cracked pepper, curry leaves, fenugreek, and cold-pressed sesame oil.",
    isFeatured: false
  },
  {
    id: "prawn-pickle",
    name: "Prawn Pickle",
    categoryId: "non-veg-pickles",
    categoryName: "Non-Veg Pickles",
    image: "/products/prawn-pickle.jpg",
    description: "Plump, fresh prawns delicately fried and tossed with tangy lemon, crushed garlic, and authentic Andhra spices.",
    isFeatured: true
  },

  // 5. KARAM PODI (6)
  {
    id: "nalla-karam-podi",
    name: "Nalla Karam Podi",
    categoryId: "karam-podi",
    categoryName: "Karam Podi",
    image: "/products/nalla-karam-podi.jpg",
    description: "Iconic traditional black pepper and roasted chili podi made with coriander seeds, cumin, garlic, and tamarind. Ideal with hot rice and ghee.",
    isFeatured: true
  },
  {
    id: "kandi-podi",
    name: "Kandi Podi",
    categoryId: "karam-podi",
    categoryName: "Karam Podi",
    image: "/products/kandi-podi.jpg",
    description: "Classic roasted toor dal and Bengal gram spiced powder, offering a mild, nutty comfort when mixed with piping hot rice and ghee.",
    isFeatured: false
  },
  {
    id: "karivepaku-karam-podi",
    name: "Karivepaku Karam Podi",
    categoryId: "karam-podi",
    categoryName: "Karam Podi",
    image: "/products/karivepaku-karam-podi.jpg",
    description: "Aromatic curry leaf powder ground with roasted lentils, garlic, and dried red chilies. Rich in natural iron and flavor.",
    isFeatured: true
  },
  {
    id: "nuvvula-karam-podi",
    name: "Nuvvula Karam Podi",
    categoryId: "karam-podi",
    categoryName: "Karam Podi",
    image: "/products/nuvvula-karam-podi.jpg",
    description: "Toasted sesame seeds ground with red chilies, garlic, and cumin. Offers a fragrant, nutty, and nutritious South Indian side.",
    isFeatured: false
  },
  {
    id: "palli-karam-podi",
    name: "Palli Karam Podi",
    categoryId: "karam-podi",
    categoryName: "Karam Podi",
    image: "/products/palli-karam-podi.jpg",
    description: "Crunchy roasted peanut powder seasoned with red chili flakes, garlic, and salt. The perfect companion for hot dosas and idlis.",
    isFeatured: false
  },
  {
    id: "munuga-akku-karam-podi",
    name: "Munuga Akku Karam Podi",
    categoryId: "karam-podi",
    categoryName: "Karam Podi",
    image: "/products/munuga-akku-karam-podi.jpg",
    description: "Wholesome drumstick leaves (Moringa) powder slowly roasted with lentils, garlic, and spices. Packed with essential antioxidants.",
    isFeatured: false
  },

  // 6. INSTANT FOODS & PREMIXES (16)
  {
    id: "millet-samber-rice",
    name: "Millet Samber Rice",
    categoryId: "instant-foods-premixes",
    categoryName: "Instant Foods & Premixes",
    image: "/products/millet-samber-rice.jpg",
    description: "Nutritious instant meal combining wholesome barnyard millets with lentils, vegetables, and authentic sambar spices.",
    isFeatured: true
  },
  {
    id: "millet-kichidi",
    name: "Millet Kichidi",
    categoryId: "instant-foods-premixes",
    categoryName: "Instant Foods & Premixes",
    image: "/products/millet-kichidi.jpg",
    description: "Hearty and soothing comfort food prepared with foxtail millet, yellow moong dal, whole black pepper, and cumin.",
    isFeatured: false
  },
  {
    id: "samber-rice",
    name: "Samber Rice",
    categoryId: "instant-foods-premixes",
    categoryName: "Instant Foods & Premixes",
    image: "/products/samber-rice.jpg",
    description: "Classic South Indian bisibele/sambar rice premix cooked with premium rice, toor dal, and aromatic ground spices.",
    isFeatured: false
  },
  {
    id: "veg-rice-kichidi",
    name: "Veg Rice Kichidi",
    categoryId: "instant-foods-premixes",
    categoryName: "Instant Foods & Premixes",
    image: "/products/veg-rice-kichidi.jpg",
    description: "Balanced traditional one-pot meal made with fine rice, lentils, dried vegetables, and mild gentle spices.",
    isFeatured: false
  },
  {
    id: "upma",
    name: "Upma",
    categoryId: "instant-foods-premixes",
    categoryName: "Instant Foods & Premixes",
    image: "/products/upma.jpg",
    description: "Pre-roasted semolina tempered with mustard seeds, chana dal, ginger, green chilies, and curry leaves. Ready in minutes.",
    isFeatured: false
  },
  {
    id: "rice-plain-pongal",
    name: "Rice Plain Pongal",
    categoryId: "instant-foods-premixes",
    categoryName: "Instant Foods & Premixes",
    image: "/products/rice-plain-pongal.jpg",
    description: "Temple-style Ven Pongal mix with roasted moong dal, rice, crushed black pepper, cumin seeds, and ginger.",
    isFeatured: false
  },
  {
    id: "millet-plain-pongal",
    name: "Millet Plain Pongal",
    categoryId: "instant-foods-premixes",
    categoryName: "Instant Foods & Premixes",
    image: "/products/millet-plain-pongal.jpg",
    description: "Low-glycemic wholesome pongal mix crafted with foxtail millet and moong dal, spiced with cumin and pepper.",
    isFeatured: false
  },
  {
    id: "rava-kesari",
    name: "Rava Kesari",
    categoryId: "instant-foods-premixes",
    categoryName: "Instant Foods & Premixes",
    image: "/products/rava-kesari.jpg",
    description: "Traditional festival dessert premix with roasted rava, fragrant cardamom, cashew bits, and golden sweetness.",
    isFeatured: true
  },
  {
    id: "semya-payasam",
    name: "Semya Payasam",
    categoryId: "instant-foods-premixes",
    categoryName: "Instant Foods & Premixes",
    image: "/products/semya-payasam.jpg",
    description: "Rich vermicelli kheer mix flavored with green cardamom, roasted nuts, and raisin pieces.",
    isFeatured: false
  },
  {
    id: "pesarattu-mix",
    name: "Pesarattu Mix",
    categoryId: "instant-foods-premixes",
    categoryName: "Instant Foods & Premixes",
    image: "/products/pesarattu-mix.jpg",
    description: "Nutritious whole green gram (moong) flour blend ground with cumin and ginger for authentic Andhra pesarattus.",
    isFeatured: false
  },
  {
    id: "idiyappam-mix",
    name: "Idiyappam Mix",
    categoryId: "instant-foods-premixes",
    categoryName: "Instant Foods & Premixes",
    image: "/products/idiyappam-mix.jpg",
    description: "Fine, specially steamed rice flour designed to create ultra-soft, delicate string hoppers (Idiyappam).",
    isFeatured: false
  },
  {
    id: "ragi-idiyappam-mix",
    name: "Ragi Idiyappam Mix",
    categoryId: "instant-foods-premixes",
    categoryName: "Instant Foods & Premixes",
    image: "/products/ragi-idiyappam-mix.jpg",
    description: "Calcium-rich finger millet (Ragi) flour blend formulated for wholesome, soft steamed string hoppers.",
    isFeatured: false
  },
  {
    id: "appam-mix",
    name: "Appam Mix",
    categoryId: "instant-foods-premixes",
    categoryName: "Instant Foods & Premixes",
    image: "/products/appam-mix.jpg",
    description: "Authentic fermenting blend for crisp-laced, fluffy-centered Kerala style Appams and vellappams.",
    isFeatured: false
  },
  {
    id: "millet-appam-mix",
    name: "Millet Appam Mix",
    categoryId: "instant-foods-premixes",
    categoryName: "Instant Foods & Premixes",
    image: "/products/millet-appam-mix.jpg",
    description: "Health-conscious fermented millet flour mix yielding airy, delicate appams with wholesome grain benefits.",
    isFeatured: false
  },
  {
    id: "sambar-premix",
    name: "Sambar Premix",
    categoryId: "instant-foods-premixes",
    categoryName: "Instant Foods & Premixes",
    image: "/products/sambar-premix.jpg",
    description: "Complete gourmet sambar blend with lentils, tamarind powder, and hand-roasted South Indian sambar spices.",
    isFeatured: true
  },
  {
    id: "green-gravy-premix",
    name: "Green Gravy Premix",
    categoryId: "instant-foods-premixes",
    categoryName: "Instant Foods & Premixes",
    image: "/products/green-gravy-premix.jpg",
    description: "Dehydrated natural herb and spice premix for instant preparation of fragrant green gravies and curries.",
    isFeatured: false
  },

  // 7. IDLI/DOSA BATTER & PREMIX (14)
  {
    id: "plain-rice-dosa-batter",
    name: "Plain Rice Dosa Batter",
    categoryId: "idli-dosa-batter-premix",
    categoryName: "Idli/Dosa Batter & Premix",
    image: "/products/plain-rice-dosa-batter.jpg",
    description: "Naturally fermented batter made from high-grade rice and urad dal with pure RO water. Yields golden, crispy dosas.",
    isFeatured: true
  },
  {
    id: "red-rice-dosa-batter",
    name: "Red Rice Dosa Batter",
    categoryId: "idli-dosa-batter-premix",
    categoryName: "Idli/Dosa Batter & Premix",
    image: "/products/red-rice-dosa-batter.jpg",
    description: "Nutritious batter stone-ground with antioxidant-rich Himalayan red rice and fermented to perfection.",
    isFeatured: false
  },
  {
    id: "black-rice-dosa-batter",
    name: "Black Rice Dosa Batter",
    categoryId: "idli-dosa-batter-premix",
    categoryName: "Idli/Dosa Batter & Premix",
    image: "/products/black-rice-dosa-batter.jpg",
    description: "Exotic 'forbidden' black rice batter loaded with anthocyanins, providing a rich earthy taste and striking hue.",
    isFeatured: false
  },
  {
    id: "brown-rice-dosa-batter",
    name: "Brown Rice Dosa Batter",
    categoryId: "idli-dosa-batter-premix",
    categoryName: "Idli/Dosa Batter & Premix",
    image: "/products/brown-rice-dosa-batter.jpg",
    description: "High-fiber whole brown rice dosa batter offering wholesome health benefits without compromising on crispness.",
    isFeatured: false
  },
  {
    id: "brown-rice-idli-dosa-batter",
    name: "Brown Rice Idli Dosa Batter",
    categoryId: "idli-dosa-batter-premix",
    categoryName: "Idli/Dosa Batter & Premix",
    image: "/products/brown-rice-idli-dosa-batter.jpg",
    description: "Versatile batter blend ideal for both fluffy steamed idlis and golden roasted dosas with wholesome brown rice.",
    isFeatured: false
  },
  {
    id: "millet-rice-idli-dosa-batter",
    name: "Millet Rice Idli Dosa Batter",
    categoryId: "idli-dosa-batter-premix",
    categoryName: "Idli/Dosa Batter & Premix",
    image: "/products/millet-rice-idli-dosa-batter.jpg",
    description: "Wholesome combination of millets and rice fermented with urad dal for balanced everyday nutrition.",
    isFeatured: false
  },
  {
    id: "millet-dosa-batter",
    name: "Millet Dosa Batter",
    categoryId: "idli-dosa-batter-premix",
    categoryName: "Idli/Dosa Batter & Premix",
    image: "/products/millet-dosa-batter.jpg",
    description: "Pure multi-millet dosa batter prepared from barnyard, kodo, and foxtail millets for light and crunchy dosas.",
    isFeatured: true
  },
  {
    id: "rava-idli-batter",
    name: "Rava Idli Batter",
    categoryId: "idli-dosa-batter-premix",
    categoryName: "Idli/Dosa Batter & Premix",
    image: "/products/rava-idli-batter.jpg",
    description: "Ready-to-steam tempered semolina batter with mustard seeds, ginger, curry leaves, and roasted cashews.",
    isFeatured: false
  },
  {
    id: "ragi-idli-batter",
    name: "Ragi Idli Batter",
    categoryId: "idli-dosa-batter-premix",
    categoryName: "Idli/Dosa Batter & Premix",
    image: "/products/ragi-idli-batter.jpg",
    description: "Traditional finger millet (ragi) batter formulated to steam into soft, spongy, and nutritious dark idlis.",
    isFeatured: true
  },
  {
    id: "thate-idli-batter",
    name: "Thate Idli Batter",
    categoryId: "idli-dosa-batter-premix",
    categoryName: "Idli/Dosa Batter & Premix",
    image: "/products/thate-idli-batter.jpg",
    description: "Special Bidadi-style plate idli batter creating large, super-soft, pillowy flat idlis with a velvety texture.",
    isFeatured: false
  },
  {
    id: "millet-thate-idli-batter",
    name: "Millet Thate Idli Batter",
    categoryId: "idli-dosa-batter-premix",
    categoryName: "Idli/Dosa Batter & Premix",
    image: "/products/millet-thate-idli-batter.jpg",
    description: "Health-focused thatte idli batter blending rich millets for large, fluffy, guilt-free breakfast idlis.",
    isFeatured: false
  },
  {
    id: "chennai-idly-batter",
    name: "Chennai Idly Batter",
    categoryId: "idli-dosa-batter-premix",
    categoryName: "Idli/Dosa Batter & Premix",
    image: "/products/chennai-idly-batter.jpg",
    description: "Classic Chennai restaurant style idly batter ground with high-ratio urad dal for cloud-like softness.",
    isFeatured: false
  },
  {
    id: "kanchipuram-idli-batter",
    name: "Kanchipuram Idli Batter",
    categoryId: "idli-dosa-batter-premix",
    categoryName: "Idli/Dosa Batter & Premix",
    image: "/products/kanchipuram-idli-batter.jpg",
    description: "Temple-recipe idli batter tempered with crushed black pepper, cumin seeds, dry ginger (sukku), and asafoetida.",
    isFeatured: false
  },
  {
    id: "millet-idli-batter",
    name: "Millet Idli Batter",
    categoryId: "idli-dosa-batter-premix",
    categoryName: "Idli/Dosa Batter & Premix",
    image: "/products/millet-idli-batter.jpg",
    description: "Nutritious idli batter stone-ground with select wholesome millets for a light, digestible, and soft breakfast.",
    isFeatured: true
  }
];

export const getCategoryById = (id) => CATEGORIES.find(c => c.id === id);

export const getProductsByCategory = (categoryId) => {
  if (!categoryId || categoryId === 'all') return PRODUCTS;
  return PRODUCTS.filter(p => p.categoryId === categoryId);
};

export const getProductById = (id) => PRODUCTS.find(p => p.id === id);

export const getFeaturedProducts = () => PRODUCTS.filter(p => p.isFeatured);
