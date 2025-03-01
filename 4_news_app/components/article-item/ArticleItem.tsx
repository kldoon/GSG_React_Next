import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface IProps {
  item: News.Item_;
}

const ArticleItem = (props: IProps) => {
  const { item } = props;

  return (
    <Link
      href={`/news/${item.slug}`}
      style={{ flex: '0 0 23%', padding: '10px', cursor: 'pointer', boxSizing: 'border-box', boxShadow: '0px 0px 4px #ddd, 0px 0px 5px #eee', textDecoration: 'none' }}
    >
      <h3 style={{ fontSize: '15px', margin: '0', height: '75px' }}>{item.title?.substring(0, 95)}</h3>
      <div style={{ width: '100%', height: '150px', position: 'relative' }}>
        {
          <Image
            src={item.image || '/cat1.png'}
            alt="new-img"
            fill
            style={{ objectFit: 'cover' }}
          />
        }
      </div>
      <p style={{ fontSize: '12px', fontFamily: 'var(--font-mulish)', color: '#999' }}>{item.summary}</p>
    </Link>
  )
}

export default ArticleItem;