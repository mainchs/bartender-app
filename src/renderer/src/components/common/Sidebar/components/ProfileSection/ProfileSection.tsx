import styles from './ProfileSection.module.css';

interface ProfileSectionProps {
  name: string;
  email: string;
  profileImage: string;
}

const ProfileSection = ({ name, email, profileImage }: ProfileSectionProps) => {
  return (
    <section className={styles.profileSection}>
      <figure className={styles.profileImage}>
        <img src={profileImage} alt="Profile" />
      </figure>
      <address className={styles.profileInfo}>
        <p className={styles.profileName}>{name}</p>
        <p className={styles.profileEmail}>{email}</p>
      </address>
    </section>
  );
};

export default ProfileSection;