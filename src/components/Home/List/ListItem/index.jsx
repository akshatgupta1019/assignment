import React from 'react';
import './styles.css';

const ListItem = ({
  item: { coverSrc, title, price,  Brand },
}) => (
  <div className='listItem-wrap'>
    <img src={coverSrc} alt='' />
    <header>
      <h4>{title}</h4>
     
    </header>
    <footer>
      <p>
        <b>{Brand}</b> 
      </p>
      <p>
        <b>Rs.{price}</b>
      </p>
    </footer>
  </div>
);

export default ListItem;
