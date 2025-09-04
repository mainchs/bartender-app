import profileImage from '../../../assets/mock/audrbs.jpg';
import styles from './Header.module.css';

const mockProfile = {
  name: '서명균',
  email: 'joohee0831@gmail.com',
};

const mockTitle = '홈';

interface HeaderProps {
  name?: string;
  email?: string;
  title?: string;
}

const Header = ({
  name = mockProfile.name,
  email = mockProfile.email,
  title = mockTitle,
}: HeaderProps = {}) => {
  return (
    <header className={styles.header}>
      <section className={styles.profileSection}>
        <figure className={styles.profileImage}>
          <img src={profileImage} alt="Profile" />
        </figure>

        <address className={styles.profileInfo}>
          <p className={styles.profileName}>{name}</p>
          <p className={styles.profileEmail}>{email}</p>
        </address>
      </section>

      <section className={styles.headerTitle}>
        <h1>{title}</h1>
      </section>
    </header>
  );
};

export default Header;
