import React from 'react'
import classes from '../latest-news.module.css';
import Image from 'next/image';

interface IProps {
  isHighlighted: boolean;
  data: News.Item;
}

const Item = (props: IProps) => {
  const item = props.data;
  return (
    <div key={item.id} style={{ flex: '0 0 23%', padding: '10px', cursor: 'pointer', boxSizing: 'border-box', boxShadow: '0px 0px 4px #ddd, 0px 0px 5px #eee' }}>
      <h3 style={{ fontSize: '15px', margin: '0', height: '75px' }}>{item.title?.substring(0, 95)}</h3>
      <div style={{ width: '100%', height: '150px', position: 'relative' }}>
        {
          <Image
            src={item.img || '/cat1.png'}
            alt="new-img"
            fill
            style={{ objectFit: 'cover' }}
          />
        }
      </div>
      <p style={{ fontSize: '12px', fontFamily: 'var(--font-mulish)', color: '#999' }}>{item.content?.substring(0, 150)}...</p>
    </div>
  )
}

export default Item