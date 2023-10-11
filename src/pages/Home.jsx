import NavBar from "../components/NavBar";
import FlexBox from "../components/FlexBox";
import Footer from "../components/Footer";
import "../App.css";

export default function Home() {
  const username = "";

  
  return (
    <>
      <header>
        <NavBar />
        {username !== ""  && <h1>Bienvenue {username}</h1>}
      </header>
      <section>
        <FlexBox />
      </section>
      <aside>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti,
          laboriosam voluptas animi officia odit consequatur laborum
          necessitatibus sint, quae facilis corporis reprehenderit possimus
          ratione maiores obcaecati maxime. Doloribus quod dolore quos
          recusandae neque cum magnam officiis corrupti, voluptatem, laboriosam
          sint blanditiis, illo quo eligendi accusantium quis excepturi ex
          aliquam cupiditate! Dolor quaerat dolores sunt enim corporis facere
          sit nisi alias aut totam ullam temporibus dignissimos consectetur,
          eligendi itaque doloribus modi optio excepturi et quam facilis ipsa
          vitae deleniti. Nisi quo recusandae quidem delectus itaque quaerat
          molestias quibusdam, animi esse, officia, ipsam et sapiente iure
          doloremque minus voluptate repudiandae iusto commodi voluptas veniam
          voluptatibus. Nam ratione alias, laborum, doloribus eos ut similique
          excepturi soluta iure ex eligendi, beatae officia corrupti laudantium!
          Ducimus eius eveniet alias tempore dignissimos facilis aliquam sequi
          vel voluptatum sint in doloribus labore quibusdam officiis dolores
          quisquam sed quasi, sit libero repudiandae odio voluptas error
          pariatur. Voluptate, reiciendis?
        </p>
      </aside>
      <Footer />
    </>
  );
}
