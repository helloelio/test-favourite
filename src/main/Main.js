import './Main.css';
import { useState } from 'react';

function Main(props) {
  const [size, setSize] = useState(document.documentElement.clientWidth);

  window.addEventListener('resize', () => {
    setSize(document.documentElement.clientWidth);
  });

  const style = {
    left: props.sideBarStatus ? '210px' : '70px',
    width: props.sideBarStatus ? 'calc(100% - 210px)' : 'calc(100% - 70px )',
    top:
      props.filterStatus && size > 1050
        ? '220px'
        : size < 1050 && props.filterStatus
        ? '280px'
        : '115px',
  };

  return (
    <main style={style}>
      <h1>Main title</h1>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, illo
      doloribus! Tempora inventore dolor distinctio rem explicabo incidunt vitae
      saepe, modi tenetur voluptatibus possimus odio nobis maiores quo illo
      atque! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores,
      illo doloribus! Tempora inventore dolor distinctio rem explicabo incidunt
      vitae saepe, modi tenetur voluptatibus possimus odio nobis maiores quo
      illo atque! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Maiores, illo doloribus! Tempora inventore dolor distinctio rem explicabo
      incidunt vitae saepe, modi tenetur voluptatibus possimus odio nobis
      maiores quo illo atque! Lorem ipsum dolor sit amet, consectetur
      adipisicing elit. Maiores, illo doloribus! Tempora inventore dolor
      distinctio rem explicabo incidunt vitae saepe, modi tenetur voluptatibus
      possimus odio nobis maiores quo illo atque! Lorem ipsum dolor sit amet,
      consectetur adipisicing elit. Maiores, illo doloribus! Tempora inventore
      dolor distinctio rem explicabo incidunt vitae saepe, modi tenetur
      voluptatibus possimus odio nobis maiores quo illo atque! Lorem ipsum dolor
      sit amet, consectetur adipisicing elit. Maiores, illo doloribus! Tempora
      inventore dolor distinctio rem explicabo incidunt vitae saepe, modi
      tenetur voluptatibus possimus odio nobis maiores quo illo atque! Lorem
      ipsum dolor sit amet, consectetur adipisicing elit. Maiores, illo
      doloribus! Tempora inventore dolor distinctio rem explicabo incidunt vitae
      saepe, modi tenetur voluptatibus possimus odio nobis maiores quo illo
      atque! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores,
      illo doloribus! Tempora inventore dolor distinctio rem explicabo incidunt
      vitae saepe, modi tenetur voluptatibus possimus odio nobis maiores quo
      illo atque! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Maiores, illo doloribus! Tempora inventore dolor distinctio rem explicabo
      incidunt vitae saepe, modi tenetur voluptatibus possimus odio nobis
      maiores quo illo atque! Lorem ipsum dolor sit amet, consectetur
      adipisicing elit. Maiores, illo doloribus! Tempora inventore dolor
      distinctio rem explicabo incidunt vitae saepe, modi tenetur voluptatibus
      possimus odio nobis maiores quo illo atque! Lorem ipsum dolor sit amet,
      consectetur adipisicing elit. Maiores, illo doloribus! Tempora inventore
      dolor distinctio rem explicabo incidunt vitae saepe, modi tenetur
      voluptatibus possimus odio nobis maiores quo illo atque! Lorem ipsum dolor
      sit amet, consectetur adipisicing elit. Maiores, illo doloribus! Tempora
      inventore dolor distinctio rem explicabo incidunt vitae saepe, modi
      tenetur voluptatibus possimus odio nobis maiores quo illo atque! Lorem
      ipsum dolor sit amet, consectetur adipisicing elit. Maiores, illo
      doloribus! Tempora inventore dolor distinctio rem explicabo incidunt vitae
      saepe, modi tenetur voluptatibus possimus odio nobis maiores quo illo
      atque! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores,
      illo doloribus! Tempora inventore dolor distinctio rem explicabo incidunt
      vitae saepe, modi tenetur voluptatibus possimus odio nobis maiores quo
      illo atque! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Maiores, illo doloribus! Tempora inventore dolor distinctio rem explicabo
      incidunt vitae saepe, modi tenetur voluptatibus possimus odio nobis
      maiores quo illo atque! Lorem ipsum dolor sit amet, consectetur
      adipisicing elit. Maiores, illo doloribus! Tempora inventore dolor
      distinctio rem explicabo incidunt vitae saepe, modi tenetur voluptatibus
      possimus odio nobis maiores quo illo atque! Lorem ipsum dolor sit amet,
      consectetur adipisicing elit. Maiores, illo doloribus! Tempora inventore
      dolor distinctio rem explicabo incidunt vitae saepe, modi tenetur
      voluptatibus possimus odio nobis maiores quo illo atque! Lorem ipsum dolor
      sit amet, consectetur adipisicing elit. Maiores, illo doloribus! Tempora
      inventore dolor distinctio rem explicabo incidunt vitae saepe, modi
      tenetur voluptatibus possimus odio nobis maiores quo illo atque! Lorem
      ipsum dolor sit amet, consectetur adipisicing elit. Maiores, illo
      doloribus! Tempora inventore dolor distinctio rem explicabo incidunt vitae
      saepe, modi tenetur voluptatibus possimus odio nobis maiores quo illo
      atque! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores,
      illo doloribus! Tempora inventore dolor distinctio rem explicabo incidunt
      vitae saepe, modi tenetur voluptatibus possimus odio nobis maiores quo
      illo atque! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Maiores, illo doloribus! Tempora inventore dolor distinctio rem explicabo
      incidunt vitae saepe, modi tenetur voluptatibus possimus odio nobis
      maiores quo illo atque! Lorem ipsum dolor sit amet, consectetur
      adipisicing elit. Maiores, illo doloribus! Tempora inventore dolor
      distinctio rem explicabo incidunt vitae saepe, modi tenetur voluptatibus
      possimus odio nobis maiores quo illo atque! Lorem ipsum dolor sit amet,
      consectetur adipisicing elit. Maiores, illo doloribus! Tempora inventore
      dolor distinctio rem explicabo incidunt vitae saepe, modi tenetur
      voluptatibus possimus odio nobis maiores quo illo atque! Lorem ipsum dolor
      sit amet, consectetur adipisicing elit. Maiores, illo doloribus! Tempora
      inventore dolor distinctio rem explicabo incidunt vitae saepe, modi
      tenetur voluptatibus possimus odio nobis maiores quo illo atque! Lorem
      ipsum dolor sit amet, consectetur adipisicing elit. Maiores, illo
      doloribus! Tempora inventore dolor distinctio rem explicabo incidunt vitae
      saepe, modi tenetur voluptatibus possimus odio nobis maiores quo illo
      atque! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores,
      illo doloribus! Tempora inventore dolor distinctio rem explicabo incidunt
      vitae saepe, modi tenetur voluptatibus possimus odio nobis maiores quo
      illo atque! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Maiores, illo doloribus! Tempora inventore dolor distinctio rem explicabo
      incidunt vitae saepe, modi tenetur voluptatibus possimus odio nobis
      maiores quo illo atque! Lorem ipsum dolor sit amet, consectetur
      adipisicing elit. Maiores, illo doloribus! Tempora inventore dolor
      distinctio rem explicabo incidunt vitae saepe, modi tenetur voluptatibus
      possimus odio nobis maiores quo illo atque! Lorem ipsum dolor sit amet,
      consectetur adipisicing elit. Maiores, illo doloribus! Tempora inventore
      dolor distinctio rem explicabo incidunt vitae saepe, modi tenetur
      voluptatibus possimus odio nobis maiores quo illo atque! Lorem ipsum dolor
      sit amet, consectetur adipisicing elit. Maiores, illo doloribus! Tempora
      inventore dolor distinctio rem explicabo incidunt vitae saepe, modi
      tenetur voluptatibus possimus odio nobis maiores quo illo atque! Lorem
      ipsum dolor sit amet, consectetur adipisicing elit. Maiores, illo
      doloribus! Tempora inventore dolor distinctio rem explicabo incidunt vitae
      saepe, modi tenetur voluptatibus possimus odio nobis maiores quo illo
      atque! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores,
      illo doloribus! Tempora inventore dolor distinctio rem explicabo incidunt
      vitae saepe, modi tenetur voluptatibus possimus odio nobis maiores quo
      illo atque! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Maiores, illo doloribus! Tempora inventore dolor distinctio rem explicabo
      incidunt vitae saepe, modi tenetur voluptatibus possimus odio nobis
      maiores quo illo atque! Lorem ipsum dolor sit amet, consectetur
      adipisicing elit. Maiores, illo doloribus! Tempora inventore dolor
      distinctio rem explicabo incidunt vitae saepe, modi tenetur voluptatibus
      possimus odio nobis maiores quo illo atque! Lorem ipsum dolor sit amet,
      consectetur adipisicing elit. Maiores, illo doloribus! Tempora inventore
      dolor distinctio rem explicabo incidunt vitae saepe, modi tenetur
      voluptatibus possimus odio nobis maiores quo illo atque! Lorem ipsum dolor
      sit amet, consectetur adipisicing elit. Maiores, illo doloribus! Tempora
      inventore dolor distinctio rem explicabo incidunt vitae saepe, modi
      tenetur voluptatibus possimus odio nobis maiores quo illo atque! Lorem
      ipsum dolor sit amet, consectetur adipisicing elit. Maiores, illo
      doloribus! Tempora inventore dolor distinctio rem explicabo incidunt vitae
      saepe, modi tenetur voluptatibus possimus odio nobis maiores quo illo
      atque! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores,
      illo doloribus! Tempora inventore dolor distinctio rem explicabo incidunt
      vitae saepe, modi tenetur voluptatibus possimus odio nobis maiores quo
      illo atque! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Maiores, illo doloribus! Tempora inventore dolor distinctio rem explicabo
      incidunt vitae saepe, modi tenetur voluptatibus possimus odio nobis
      maiores quo illo atque! Lorem ipsum dolor sit amet, consectetur
      adipisicing elit. Maiores, illo doloribus! Tempora inventore dolor
      distinctio rem explicabo incidunt vitae saepe, modi tenetur voluptatibus
      possimus odio nobis maiores quo illo atque! Lorem ipsum dolor sit amet,
      consectetur adipisicing elit. Maiores, illo doloribus! Tempora inventore
      dolor distinctio rem explicabo incidunt vitae saepe, modi tenetur
      voluptatibus possimus odio nobis maiores quo illo atque! Lorem ipsum dolor
      sit amet, consectetur adipisicing elit. Maiores, illo doloribus! Tempora
      inventore dolor distinctio rem explicabo incidunt vitae saepe, modi
      tenetur voluptatibus possimus odio nobis maiores quo illo atque! Lorem
      ipsum dolor sit amet, consectetur adipisicing elit. Maiores, illo
      doloribus! Tempora inventore dolor distinctio rem explicabo incidunt vitae
      saepe, modi tenetur voluptatibus possimus odio nobis maiores quo illo
      atque! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores,
      illo doloribus! Tempora inventore dolor distinctio rem explicabo incidunt
      vitae saepe, modi tenetur voluptatibus possimus odio nobis maiores quo
      illo atque! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Maiores, illo doloribus! Tempora inventore dolor distinctio rem explicabo
      incidunt vitae saepe, modi tenetur voluptatibus possimus odio nobis
      maiores quo illo atque! Lorem ipsum dolor sit amet, consectetur
      adipisicing elit. Maiores, illo doloribus! Tempora inventore dolor
      distinctio rem explicabo incidunt vitae saepe, modi tenetur voluptatibus
      possimus odio nobis maiores quo illo atque! Lorem ipsum dolor sit amet,
      consectetur adipisicing elit. Maiores, illo doloribus! Tempora inventore
      dolor distinctio rem explicabo incidunt vitae saepe, modi tenetur
      voluptatibus possimus odio nobis maiores quo illo atque! Lorem ipsum dolor
      sit amet, consectetur adipisicing elit. Maiores, illo doloribus! Tempora
      inventore dolor distinctio rem explicabo incidunt vitae saepe, modi
      tenetur voluptatibus possimus odio nobis maiores quo illo atque! Lorem
      ipsum dolor sit amet, consectetur adipisicing elit. Maiores, illo
      doloribus! Tempora inventore dolor distinctio rem explicabo incidunt vitae
      saepe, modi tenetur voluptatibus possimus odio nobis maiores quo illo
      atque! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores,
      illo doloribus! Tempora inventore dolor distinctio rem explicabo incidunt
      vitae saepe, modi tenetur voluptatibus possimus odio nobis maiores quo
      illo atque! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Maiores, illo doloribus! Tempora inventore dolor distinctio rem explicabo
      incidunt vitae saepe, modi tenetur voluptatibus possimus odio nobis
      maiores quo illo atque! Lorem ipsum dolor sit amet, consectetur
      adipisicing elit. Maiores, illo doloribus! Tempora inventore dolor
      distinctio rem explicabo incidunt vitae saepe, modi tenetur voluptatibus
      possimus odio nobis maiores quo illo atque! Lorem ipsum dolor sit amet,
      consectetur adipisicing elit. Maiores, illo doloribus! Tempora inventore
      dolor distinctio rem explicabo incidunt vitae saepe, modi tenetur
      voluptatibus possimus odio nobis maiores quo illo atque! Lorem ipsum dolor
      sit amet, consectetur adipisicing elit. Maiores, illo doloribus! Tempora
      inventore dolor distinctio rem explicabo incidunt vitae saepe, modi
      tenetur voluptatibus possimus odio nobis maiores quo illo atque! Lorem
      ipsum dolor sit amet, consectetur adipisicing elit. Maiores, illo
      doloribus! Tempora inventore dolor distinctio rem explicabo incidunt vitae
      saepe, modi tenetur voluptatibus possimus odio nobis maiores quo illo
      atque! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores,
      illo doloribus! Tempora inventore dolor distinctio rem explicabo incidunt
      vitae saepe, modi tenetur voluptatibus possimus odio nobis maiores quo
      illo atque! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Maiores, illo doloribus! Tempora inventore dolor distinctio rem explicabo
      incidunt vitae saepe, modi tenetur voluptatibus possimus odio nobis
      maiores quo illo atque! Lorem ipsum dolor sit amet, consectetur
      adipisicing elit. Maiores, illo doloribus! Tempora inventore dolor
      distinctio rem explicabo incidunt vitae saepe, modi tenetur voluptatibus
      possimus odio nobis maiores quo illo atque! Lorem ipsum dolor sit amet,
      consectetur adipisicing elit. Maiores, illo doloribus! Tempora inventore
      dolor distinctio rem explicabo incidunt vitae saepe, modi tenetur
      voluptatibus possimus odio nobis maiores quo illo atque! Lorem ipsum dolor
      sit amet, consectetur adipisicing elit. Maiores, illo doloribus! Tempora
      inventore dolor distinctio rem explicabo incidunt vitae saepe, modi
      tenetur voluptatibus possimus odio nobis maiores quo illo atque! Lorem
      ipsum dolor sit amet, consectetur adipisicing elit. Maiores, illo
      doloribus! Tempora inventore dolor distinctio rem explicabo incidunt vitae
      saepe, modi tenetur voluptatibus possimus odio nobis maiores quo illo
      atque! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores,
      illo doloribus! Tempora inventore dolor distinctio rem explicabo incidunt
      vitae saepe, modi tenetur voluptatibus possimus odio nobis maiores quo
      illo atque! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Maiores, illo doloribus! Tempora inventore dolor distinctio rem explicabo
      incidunt vitae saepe, modi tenetur voluptatibus possimus odio nobis
      maiores quo illo atque! Lorem ipsum dolor sit amet, consectetur
      adipisicing elit. Maiores, illo doloribus! Tempora inventore dolor
      distinctio rem explicabo incidunt vitae saepe, modi tenetur voluptatibus
      possimus odio nobis maiores quo illo atque! Lorem ipsum dolor sit amet,
      consectetur adipisicing elit. Maiores, illo doloribus! Tempora inventore
      dolor distinctio rem explicabo incidunt vitae saepe, modi tenetur
      voluptatibus possimus odio nobis maiores quo illo atque!
    </main>
  );
}

export default Main;
