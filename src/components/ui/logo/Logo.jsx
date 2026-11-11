import "./Logo.css";

export default function Logo() {
  return (
    <div className="creative-web">
      <div className="creative-web-block">
        <div className="block-left">
          <h1 className="creative-web__title" aria-label="JAKVORA">
            <span className="creative-web__letters" aria-hidden="true">
              <span className="creative-web__brand">J</span>
              <span className="creative-web__brand creative-web__a">V</span>
              <span className="creative-web__brand">K</span>
              <span className="creative-web__brand--accent">
                VOR<span className="creative-web__a">V</span>
              </span>
            </span>
          </h1>
        </div>
        <div className="block-right"></div>
      </div>
    </div>
  );
}
