import NavBar from './NavBar';

function App() {
  return (
    <>
      <NavBar />
      <div className="container mt-4">
        <div className="text-center">
          <h2 className="display-4">¡Bienvenido a mi Página Web!</h2>
          <p className="lead">Esta aplicación fue creada con React y Bootstrap.</p>
        </div>
        <hr />
        <section className="mt-5">
          <h3>Sobre mí</h3>
          <p>
            Soy un desarrollador apasionado por la tecnología y el desarrollo web.
            Actualmente estoy aprendiendo React para crear interfaces modernas e interactivas.
          </p>
        </section>
        <section className="mt-4">
          <h3>Proyectos</h3>
          <ul className="list-group">
            <li className="list-group-item">🔧 Proyecto 1: Portafolio personal</li>
            <li className="list-group-item">📦 Proyecto 2: Tienda en línea con React</li>
            <li className="list-group-item">💡 Proyecto 3: Aplicación de tareas con Firebase</li>
          </ul>
        </section>
      </div>
    </>
  );
}

export default App;
