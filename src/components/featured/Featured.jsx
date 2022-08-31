import "./featured.css";

export default function Featured() {
  return (
    <div className="featured">
      <div className="featured-item">
        <img
          className="featured-image"
          src="https://cf.bstatic.com/xdata/images/city/square600/684534.webp?k=d1fe86c22f2433f4e2dda14ddcbe80feb024b0fb30305e5684a1241fba5d4cff&o="
          alt="Banglore"
          srcSet="https://cf.bstatic.com/xdata/images/city/square600/684534.webp?k=d1fe86c22f2433f4e2dda14ddcbe80feb024b0fb30305e5684a1241fba5d4cff&o="
        />
        <div className="featured-header">
          <h2 className="featured-city">Bangalore</h2>
          <p className="featured-props">2040 properties</p>
        </div>
      </div>
      <div className="featured-item">
        <img
          className="featured-image"
          src="https://cf.bstatic.com/xdata/images/city/540x270/684764.webp?k=6c3c9e920a39ca4f9eddcdfaa916999ea5d2765844610dd59349f4271f7596b3&o="
          alt="Banglore"
          srcSet="https://cf.bstatic.com/xdata/images/city/540x270/684764.webp?k=6c3c9e920a39ca4f9eddcdfaa916999ea5d2765844610dd59349f4271f7596b3&o="
        />
        <div className="featured-header">
          <h2 className="featured-city">New Delhi</h2>
          <p className="featured-props">2913 properties</p>
        </div>
      </div>
      <div className="featured-item">
        <img
          className="featured-image"
          src="https://cf.bstatic.com/xdata/images/city/540x270/971345.webp?k=9bf85dfa10a224e2855ca2f8ca3fcd96916a962d87cdfcc48d6d57c09bef3c65&o="
          alt="Banglore"
          srcSet="https://cf.bstatic.com/xdata/images/city/540x270/971345.webp?k=9bf85dfa10a224e2855ca2f8ca3fcd96916a962d87cdfcc48d6d57c09bef3c65&o="
        />
        <div className="featured-header">
          <h2 className="featured-city">Mumbai</h2>
          <p className="featured-props">1654 properties</p>
        </div>
      </div>
    </div>
  );
}
