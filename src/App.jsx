import graduates from "./graduates";

function App() {
  const gras = graduates.map(graduate => {
    return (
      <section className="testimonial">
        <div className="graduate-info">
          <img src={graduate.img.src} alt={graduate.img.alt} className="graduate-image" />

          <div className="graduate-name-grid">
            <span className="graduate-name">{graduate.name}</span>
            <span className="graduate-state">Verified Graduate</span>
          </div>
        </div>

        <h2 className="graduate-heading">{graduate.heading}</h2>

        <p className="graduate-description">{graduate.description}</p>
      </section>
    )
  })
  return (
    <main className="testimonials-grid">
      {gras}
    </main>
  )
}

export default App
