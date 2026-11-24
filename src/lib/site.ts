export const GOOGLE = {
  reviewLink: "https://g.page/r/CTQ4psHjfZhBEAI/review",
  mapsLink: "https://g.page/r/CTQ4psHjfZhBEAI",
  businessName: "Lakshmi Rasoi and Tiffin Service",
} as const;

export const SITE = {
  name: "Lakshmi Rasoi",
  tagline: "Homemade Food, Made with Love",
  url: "https://lakshmirasoi.vercel.app",
  city: "Hisar, Haryana",
  address: "111SF, Marvel City, SEC-1, Hisar, Haryana – 125001",
  mapsUrl: "https://maps.google.com/maps?q=29.235105629799417,75.77704615506661",
  phoneDisplay: "+91 79882 67228",
  phoneHref: "tel:+917988267228",
  whatsappNumber: "917988267228",
  instagramUrl: "https://www.instagram.com/lakshmirasoi",
  instagramHandle: "@lakshmirasoi",
} as const;

export const WHATSAPP_MESSAGES = {
  general: "Hello Lakshmi Rasoi! I'd like to know more about your tiffin service.",
  order: "Hello Lakshmi Rasoi! I'd like to order your tiffin service.",
  trial: "Hello Lakshmi Rasoi! I'd like to try one trial tiffin before subscribing.",
  monthly: "Hello Lakshmi Rasoi! I'm interested in your monthly meal plan. Please share details.",
  todaysMenu: "Hello Lakshmi Rasoi! Can you share today's menu?",
  deliveryCheck: "Hello Lakshmi Rasoi! Can you check if you deliver to my location? (I'll share my location here.)",
  specialOrder: "Hello Lakshmi Rasoi! I'd like to discuss a special order. Details: ",
} as const;

export function waLink(message: string) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function planEnquiryLink(planName: string) {
  return waLink(`Hello Lakshmi Rasoi! I'm interested in the ${planName} plan. Please share details.`);
}
