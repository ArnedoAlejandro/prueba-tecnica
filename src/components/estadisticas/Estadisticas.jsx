import "./styleEstadisticas.css";
const Estadisticas = () => {
  return (
    <section>
      <div className="container">
        <div className="item">
          <h4>Cliente nuevo</h4>
          <h5>18</h5>
          <div className="porcentaje">
            <p>+8.2%</p>
            En el ultimo mes
          </div>
        </div>
        <div className="item">
          <h4>Prestamos activos</h4>
          <h5>25</h5>
          <div className="porcentaje">
            <p className="porcentaje-negativo">+8.2%</p>
            En el ultimo mes
          </div>
        </div>
        <div className="item">
          <h4>Pedidos totales</h4>
          <h5>1,236</h5>
          <div className="porcentaje">
            <p>+8.2%</p>
            En el ultimo mes
          </div>
        </div>
        <div className="item">
          <h4>Ingresos totales</h4>
          <h5>1,783 Bs</h5>
          <div className="porcentaje">
            <p>+8.2%</p>
            En el ultimo mes
          </div>
        </div>
      </div>
    </section>
  );
};

export default Estadisticas;
