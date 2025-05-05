import Badge from "../components/Badge";
import Banner from "../components/Banner";
import Card from "../components/Card";
import { FaBagShopping } from "react-icons/fa6";
function App() {
  return (
    <main>
      <h2>Badges</h2>
      <section className="badges">
        <Badge text="Badge" color="gray" shape="pill" />
        <Badge text="Badge" color="red" shape="pill" />
        <Badge text="Badge" color="yellow" shape="pill" />
        <Badge text="Badge" color="green" shape="pill" />
        <Badge text="Badge" color="blue" shape="pill" />
        <Badge text="Badge" color="indigo" shape="pill" />
        <Badge text="Badge" color="purple" shape="pill" />
        <Badge text="Badge" color="pink" shape="pill" />
        <Badge />
        <Badge text="Badge" color="red" shape="square" />
        <Badge text="Badge" color="yellow" shape="square" />
        <Badge text="Badge" color="green" shape="square" />
        <Badge text="Badge" color="blue" shape="square" />
        <Badge text="Badge" color="indigo" shape="square" />
        <Badge text="Badge" color="purple" shape="square" />
        <Badge text="Badge" color="pink" shape="square" />
      </section>
      <h2>Banners</h2>
      <section className="banners">
        <Banner>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore
          dolorum assumenda officiis blanditiis, asperiores deserunt dolorem in
          aliquid magnam error.
        </Banner>
        <Banner status="warning" title="Attention">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quod
          necessitatibus ea quibusdam nisi harum distinctio eaque pariatur
          voluptatem enim consectetur, quidem, deleniti esse praesentium
          exercitationem beatae recusandae natus alias tempore incidunt soluta
          facilis. Deleniti possimus natus atque sequi, nesciunt repellendus
          illo iusto earum ad corporis quos aliquid et. Quas corrupti dolore in
          assumenda numquam nostrum omnis consequuntur hic ratione perspiciatis,
          earum dicta quasi, voluptates consectetur eligendi repudiandae
          accusamus molestiae aspernatur at voluptatem, architecto iste!
        </Banner>
        <Banner status="error" title="There is a problem with your application">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quod
          necessitatibus ea quibusdam nisi harum distinctio eaque pariatur
          voluptatem enim consectetur, quidem, deleniti esse praesentium
          exercitationem beatae recusandae natus alias tempore incidunt soluta
          facilis. Deleniti possimus natus atque sequi, nesciunt repellendus
          illo iusto earum ad corporis quos aliquid et. Quas corrupti dolore in
          assumenda numquam nostrum omnis consequuntur hic ratione perspiciatis,
          earum dicta quasi, voluptates consectetur eligendi repudiandae
          accusamus molestiae aspernatur at voluptatem, architecto iste!
        </Banner>
        <Banner status="neutral" title="Update available">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quod
          necessitatibus ea quibusdam nisi harum distinctio eaque pariatur
          voluptatem enim consectetur, quidem, deleniti esse praesentium
          exercitationem beatae recusandae natus alias tempore incidunt soluta
          facilis. Deleniti possimus natus atque sequi, nesciunt repellendus
          illo iusto earum ad corporis quos aliquid et. Quas corrupti dolore in
          assumenda numquam nostrum omnis consequuntur hic ratione perspiciatis,
          earum dicta quasi, voluptates consectetur eligendi repudiandae
          accusamus molestiae aspernatur at voluptatem, architecto iste!
        </Banner>
        <Banner></Banner>
        <Banner status="warning" title="Attention"></Banner>
        <Banner
          status="error"
          title="There is a problem with your application"
        ></Banner>
        <Banner status="neutral" title="Update available"></Banner>
      </section>
      <h2>Cards</h2>
      <section className="cards">
        <Card></Card>
        <Card
          icon={<FaBagShopping />}
          iconColor="#fff"
          iconBackgroundColor="#fd3a00"
          title="Shop Smart"
          text=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, excepturi quam nam architecto ratione eos dolorem tempore nisi aliquid! Enim est, tempora sequi minima explicabo excepturi alias quisquam rem? Deserunt laudantium accusantium distinctio a, accusamus dolore ratione quasi cupiditate ut nesciunt expedita sit animi esse non aliquam laborum aperiam saepe iusto ad temporibus aut id ipsum inventore! Quaerat est iusto eligendi. Debitis eligendi, error libero quidem magni facere vitae reprehenderit fuga molestias laudantium, doloribus magnam. Eos aliquam sit perferendis eum suscipit. Enim ipsum laborum alias, itaque ab ducimus quaerat laudantium nostrum repellendus quisquam sunt perspiciatis ipsam. Ipsa repellat sunt aspernatur?"
        />
      </section>
    </main>
  );
}

export default App;
