const NavigationBar = () => {
  return (
    <>
      <nav className="container">
        <div className="logo">
          <img src="/images/logo.jpg" alt="logo" width={120} height={80} />
        </div>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavigationBar;
