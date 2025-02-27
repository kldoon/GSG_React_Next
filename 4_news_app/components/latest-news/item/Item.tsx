import React from 'react'
import classes from './item.module.css';
import Image from 'next/image';

interface IProps {
  isHighlighted: boolean;
  data: News.Item;
}

const Item = (props: IProps) => {
  const item = props.data;

  return (
    <div className={`${classes.newsItem} ${props.isHighlighted ? classes.highlighted : ''}`}>
      <h3 style={{ fontSize: '15px', margin: '0', marginBottom: '10px', maxHeight: '75px' }}>{item.title?.substring(0, 95)}</h3>
      <div style={{ position: 'relative', width: '100%', height: '150px', background: 'red' }}>
        {
          <Image
            src={item.img || '/cat1.png'}
            alt="new-img"
            style={{ objectFit: 'cover' }}
            fill
          />
        }
      </div>
      <p style={{ fontSize: '12px', fontFamily: 'var(--font-mulish)', color: '#999' }}>{item.content?.substring(0, 150)}...</p>
    </div>
  )
}

export default Item;