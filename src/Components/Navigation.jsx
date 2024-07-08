const Navigation = () => {
  return (
    <nav>
      {/* ---------logo------------------------ */}
      <div className="logo">
        <img src="/public/images/brand_logo.png" alt="logo" />
      </div>
      {/* ----------------list---------------- */}
      <ul>
        <li>MENU</li>
        <li>LOCATION</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ul>
      {/* -------------button----------------- */}
      <button>Login</button>
    </nav>
  );
};
export default Navigation;
