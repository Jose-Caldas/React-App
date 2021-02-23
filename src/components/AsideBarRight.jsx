import Image from "./Ellipse 1.png";

export default function AsideBarRight() {
  return (
    <div class="asideBarRight">
      <header>
        <small>Lead Details</small>
        <small style={{ color: "var(--yellow)" }}>Pending signature</small>
      </header>
      <div>
        <div class="image">
          <img src={Image} alt="" srcset="" />
        </div>
        <div>
          <strong>Ham Chuwn</strong>
          <p>#224 - Airpark Industrial</p>
        </div>
      </div>
    </div>
  );
}
