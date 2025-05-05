import Badge from "../components/Badge";
import Banner from "../components/Banner";
function App() {
  return (
    <>
      <Badge color="gray" shape="pill" text="Test" />
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
        facilis. Deleniti possimus natus atque sequi, nesciunt repellendus illo
        iusto earum ad corporis quos aliquid et. Quas corrupti dolore in
        assumenda numquam nostrum omnis consequuntur hic ratione perspiciatis,
        earum dicta quasi, voluptates consectetur eligendi repudiandae accusamus
        molestiae aspernatur at voluptatem, architecto iste!
      </Banner>
      <Banner status="error" title="There is a problem with your application">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quod
        necessitatibus ea quibusdam nisi harum distinctio eaque pariatur
        voluptatem enim consectetur, quidem, deleniti esse praesentium
        exercitationem beatae recusandae natus alias tempore incidunt soluta
        facilis. Deleniti possimus natus atque sequi, nesciunt repellendus illo
        iusto earum ad corporis quos aliquid et. Quas corrupti dolore in
        assumenda numquam nostrum omnis consequuntur hic ratione perspiciatis,
        earum dicta quasi, voluptates consectetur eligendi repudiandae accusamus
        molestiae aspernatur at voluptatem, architecto iste!
      </Banner>
      <Banner status="neutral" title="Update available">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quod
        necessitatibus ea quibusdam nisi harum distinctio eaque pariatur
        voluptatem enim consectetur, quidem, deleniti esse praesentium
        exercitationem beatae recusandae natus alias tempore incidunt soluta
        facilis. Deleniti possimus natus atque sequi, nesciunt repellendus illo
        iusto earum ad corporis quos aliquid et. Quas corrupti dolore in
        assumenda numquam nostrum omnis consequuntur hic ratione perspiciatis,
        earum dicta quasi, voluptates consectetur eligendi repudiandae accusamus
        molestiae aspernatur at voluptatem, architecto iste!
      </Banner>
      <Banner></Banner>
    </>
  );
}

export default App;
