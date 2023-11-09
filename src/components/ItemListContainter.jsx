import '../App.css';

export const ItemListContainter = ({greeting}) => {
  return (
    <section className="itemList-section">
      <h1>{greeting}</h1>
    </section>
  )
}
