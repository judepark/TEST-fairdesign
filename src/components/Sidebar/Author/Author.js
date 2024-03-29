import React from 'react';
import { withPrefix, Link } from 'gatsby';
import styles from './Author.module.scss';

const Author = ({ author, isIndex }) => (
  <div className={styles['author']}>
    <Link to="/">
      <img
        src={withPrefix(author.photo)}
        className={styles['author__photo']}
        width="75"
        height="75"
        alt={author.name}
      />
    </Link>

    { isIndex ? (
      <h1 className={styles['author__title']}>
        <Link className={styles['author__title-link']} to="/"></Link>
      </h1>
    ) : (
      <h2 className={styles['author__title']}>
        <Link className={styles['author__title-link']} to="/"></Link>
      </h2>
    )}
    <p className={styles['author__subtitle']}><p>Written by <a href="https://judepark.com/" rel="noopener noreferrer" target="_blank"><strong>{author.name}</strong></a>, a researcher from Toronto in pursuit of fair access.</p></p>
  </div>
);

export default Author;
