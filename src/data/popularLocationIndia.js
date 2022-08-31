const locations = [
  {
    country: "India",
    location: "Goa",
    properties: 5244,
    title: "Goa",
    label: "Goa, India",
    subtitle: "5244 properties",
    image:
      "https://cf.bstatic.com/xdata/images/region/square250/49646.webp?k=b7f38878b9164ee38e0b99c4d4646dbea76b7bf4add8464b1aa75e4c9d0efc6e&o="
  },
  {
    country: "India",
    location: "Mumbai",
    properties: 5244,
    title: "Mumbai",
    label: "Mumbai, India",
    subtitle: "5244 properties",
    image:
      "https://cf.bstatic.com/xdata/images/city/square250/971346.webp?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o="
  },
  {
    country: "India",
    location: "New Delhi",
    properties: 5244,
    title: "New Delhi",
    label: "New Delhi, India",
    subtitle: "5244 properties",
    image:
      "https://cf.bstatic.com/xdata/images/city/square250/684765.webp?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o="
  },
  {
    country: "India",
    location: "Lonavala",
    properties: 5244,
    title: "Lonavala",
    label: "Lonavala, India",
    subtitle: "5244 properties",
    image:
      "https://cf.bstatic.com/xdata/images/city/square250/684682.webp?k=30cf9de93f2a0f87eed7d2d0d9b3e6eccd5dcf3a4b68b4e0151c0800ddc84af7&o="
  },
  {
    country: "India",
    location: "Bangalore",
    properties: 5244,
    title: "Bangalore",
    label: "Bangalore, India",
    subtitle: "5244 properties",
    image:
      "https://cf.bstatic.com/xdata/images/city/square250/684534.webp?k=d1fe86c22f2433f4e2dda14ddcbe80feb024b0fb30305e5684a1241fba5d4cff&o="
  },
  {
    country: "India",
    location: "Jaipur",
    properties: 5244,
    title: "Jaipur",
    label: "Jaipur, India",
    subtitle: "5244 properties",
    image:
      "https://cf.bstatic.com/xdata/images/city/square250/684657.webp?k=66dc5035b43e9bb86b756e381e4fec2558064af4a63a8af17836725a854c03ee&o="
  },

  {
    country: "India",
    location: "Pondicherry",
    properties: 5244,
    title: "Pondicherry",
    label: "Pondicherry, India",
    subtitle: "5244 properties",
    image:
      "https://cf.bstatic.com/xdata/images/city/square250/684769.webp?k=146b18e42b9eb74078f2e80e07e573e8dbac879208b86bae451f99882f566a99&o="
  },
  {
    country: "India",
    location: "Udaipur",
    properties: 5244,
    title: "Udaipur",
    label: "Udaipur, India",
    subtitle: "5244 properties",
    image:
      "https://cf.bstatic.com/xdata/images/city/square250/684938.webp?k=9d07ff707ce59768769b5e9a5381a4c705d921209dafd8fd0e2f1a6acdf0c68a&o="
  },
  {
    country: "India",
    location: "Hyderabad",
    properties: 5244,
    title: "Hyderabad",
    label: "Hyderabad, India",
    subtitle: "5244 properties",
    image:
      "https://cf.bstatic.com/xdata/images/city/square250/684653.webp?k=306ccafcc8a4a7e23b9e8a05b183453fe885b312a4daa5ce76ec39a1b79cbc6f&o="
  },
  {
    country: "India",
    location: "Manali",
    properties: 5244,
    title: "Manali",
    label: "Manali, India",
    subtitle: "5244 properties",
    image:
      "https://cf.bstatic.com/xdata/images/region/square250/49646.webp?k=b7f38878b9164ee38e0b99c4d4646dbea76b7bf4add8464b1aa75e4c9d0efc6e&o="
  }
];

export default async function getLocations() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(locations);
    }, 3000);
  });
}
