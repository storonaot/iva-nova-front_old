import React from 'react';

const Header = () => (
  <div>
    <div className="mobile">Burger</div>
    <div>Logo</div>
    <div className="desktop">
      <div>Афиша</div>
      <div>Новости</div>
      <div>О группе</div>
      <div>Музыка</div>
      <div>Фото</div>
      <div>Видео</div>
      <div>Контакты</div>
    </div>
    <div className="desktop">
      <div>vk</div>
      <div>fb</div>
      <div>youtube</div>
      <div>instagram</div>
    </div>
    <div>
      <div>eng</div>
      <div>ru</div>
    </div>
    {/* <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link> */}
  </div>
);

export default Header;
