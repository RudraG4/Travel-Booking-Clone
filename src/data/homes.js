const homes = [
  {
    city: "Rio de Janeiro",
    country: "Brazil",
    name: "Sugar Loft Apartments",
    price: "3,751",
    review_score: 9,
    review_count: 100,
    review_score_word: "Wonderful",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max500/74529578.jpg?k=a7fcefd47d7271daf44f6ce78a215b9505f9f8e5cac3af093b78b9c489fd8461&o=",
    currency: "Rs."
  },
  {
    city: "Barcelona",
    country: "Spain",
    name: "The Patio Barcelona",
    price: "61,337",
    review_score: 9.1,
    review_count: 62,
    review_score_word: "Wonderful",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max500/106393405.jpg?k=237d0a65974505ec4d34765c230ad8c6198e0cc4f807e4f8c542ef95c89a38ab&o=",
    currency: "Rs."
  },
  {
    city: "Rome",
    country: "Italy",
    name: "Appartamento Benincampi",
    price: "20,177",
    review_score: 9.7,
    review_count: 86,
    review_score_word: "Exceptional",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max500/40890517.jpg?k=cd55de5463af8988f78fd675904a43d02f77570debe9977c4c1fe658030b6d29&o=",
    currency: "Rs."
  },
  {
    city: "London",
    country: "United Kingdom",
    name: "Leman Locke",
    price: "14,824",
    review_score: 10,
    review_count: 1617,
    review_score_word: "Excellent",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max500/77446705.jpg?k=b4137b295019af2a0db1af044c725449adda502a6921fbb2b8931016a8a0a713&o=",
    currency: "Rs."
  },
  {
    city: "Madrid",
    country: "Spain",
    name: "Santa Ana Boutique",
    price: "21,306",
    review_score: 8.9,
    review_count: 21,
    review_score_word: "Excellent",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max500/112867518.jpg?k=1a5e62329482058280387f5c5daf59294667c6be0d47350afb43a2a00c5b3228&o=",
    currency: "Rs."
  }
];

export default async function getHomes() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(homes);
    }, 3000);
  });
}
