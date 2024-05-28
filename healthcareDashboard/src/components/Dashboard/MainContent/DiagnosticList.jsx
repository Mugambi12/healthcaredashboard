import "./DiagnosticList.css";

const DiagnosticList = ({ patient }) => (
  <div className="content-card">
    <div className="content-diagnostic-table">
      <h2>Diagnostic List</h2>
      <div className="content-diagnostic-row content-diagnostic-header">
        <div className="content-diagnostic-column first">Problem/Diagnosis</div>
        <div className="content-diagnostic-column second">Description</div>
        <div className="content-diagnostic-column third">Status</div>
      </div>
      <div className="content-diagnostic-body">
        {patient.diagnosticList.map((item, index) => (
          <div key={index} className="content-diagnostic-row">
            <div className="content-diagnostic-column first">{item.name}</div>
            <div className="content-diagnostic-column second">
              {item.description}
            </div>
            <div className="content-diagnostic-column third">{item.status}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default DiagnosticList;
