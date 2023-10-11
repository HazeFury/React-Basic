import FlexCard from "./FlexCard";
import styles from "./FlexBox.module.css";
import Data from '../Data.json' with {type: 'json'};

export default function FlexBox() {
const array = Data
  return (
    <section className={styles.flexbox_container}>
      {array.map((person) => (
        <FlexCard key={person.id} data={person} />
      ))}
    </section>
  );
}
