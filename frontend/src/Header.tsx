function Header(props: any) {
  return (
    <header className="row">
      <div className="col subtitle">
        <h1>{props.title}</h1>
        <h4>All the information you'll ever need about your bowling league</h4>
      </div>
    </header>
  );
}

export default Header;
