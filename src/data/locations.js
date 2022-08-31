const locations = [
  {
    location: "Goa",
    country: "India"
  },
  {
    location: "Bengaluru",
    country: "India"
  },
  {
    location: "Mysore",
    country: "India"
  },
  {
    location: "Chikmagalur",
    country: "India"
  },
  {
    location: "Sussex Square, Westminster Borough, London, W2 2SJ",
    country: "United Kingdom"
  }
];

export const getLocations = async (keyword) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (!keyword) return res(locations);
      const list = locations.filter((data) =>
        keyword
          .split(",")
          .some(
            (_key) =>
              data.location.toUpperCase().includes(_key.trim().toUpperCase()) ||
              data.country.toUpperCase().includes(_key.trim().toUpperCase())
          )
      );
      res(list);
    }, 1000);
  });
};
