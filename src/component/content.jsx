export default function Content() {
  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Beranda</h1>
      </div>
      <div id="profil" className="row"></div>
      <div className="card-body p-3">
        <div className="chart">
          <canvas id="doughnut" className="chart-canvas" height="120"></canvas>
        </div>
      </div>
    </div>
  );
}
