import styles from './Header.module.css';

interface HeaderProps {
  title?: string;
}

const Header = ({ title = '홈' }: HeaderProps = {}) => {
  return (
    <header className={styles.header}>
      <section className={styles.headerTitle}>
        <h1>{title}</h1>
      </section>
    </header>
  );
};

export default Header;
