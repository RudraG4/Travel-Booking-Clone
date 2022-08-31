const properties = [
  {
    image:
      "https://r-xx.bstatic.com/xdata/images/xphoto/300x240/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=",
    title: "Hotels",
    subtitle: "480005 Hotels"
  },
  {
    image:
      "https://r-xx.bstatic.com/xdata/images/hotel/300x240/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o=",
    title: "Apartments",
    subtitle: "480005 Apartments"
  },
  {
    image:
      "https://q-xx.bstatic.com/xdata/images/hotel/300x240/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o=",
    title: "Villas",
    subtitle: "480005 villas"
  },
  {
    image:
      "https://r-xx.bstatic.com/xdata/images/hotel/300x240/52979454.jpeg?k=6ac6d0afd28e4ce00a8f817cc3045039e064469a3f9a88059706c0b45adf2e7d&o=",
    title: "Cabins",
    subtitle: "480005 Cabins"
  },
  {
    image:
      "https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450074.jpeg?k=7039b03a94f3b99262c4b3054b0edcbbb91e9dade85b6efc880d45288a06c126&o=",
    title: "Cottages",
    subtitle: "480005 Cottages"
  },
  {
    image:
      "https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450073.jpeg?k=795a94c30433de1858ea52375e8190a962b302376be2e68aa08be345d936557d&o=",
    title: "Guest Houses",
    subtitle: "480005 Guest Houses"
  },
  {
    image:
      "https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450073.jpeg?k=795a94c30433de1858ea52375e8190a962b302376be2e68aa08be345d936557d&o=",
    title: "Hostels",
    subtitle: "480005 Hostels"
  }
];

export default async function getProperties() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(properties);
    }, 3000);
  });
}
