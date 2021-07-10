import CIcon from "@coreui/icons-react";
import { CButton, CButtonGroup, CCard, CCardBody, CCol, CRow } from "@coreui/react";
import { CChartLine } from "@coreui/react-chartjs";


const defaultOptions = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      gridLines: {
        drawOnChartArea: false
      }
    }],
    yAxes: [{
      ticks: {
        beginAtZero: true,
        maxTicksLimit: 20,
        // stepSize: 1,
        // max: 10
      },
      gridLines: {
        display: true
      }
    }]
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3
    }
  }
}

export default function StyledBornesChart(props) {

    const { dataset, period, setPeriod } = props;

    return (
        <CCard style={{
            borderRadius: 20,
            boxShadow: "#999 0px 0px 10px -2px"
        }}>
        <CCardBody>
          <CRow>
            <CCol sm="5">
              <h4 id="traffic" className="card-title mb-0">Graphe de location par borne</h4>
              <div className="small text-muted">Par {period}</div>
            </CCol>
            <CCol sm="7" className="d-none d-md-block">
              <CButton color="warning" className="float-right">
                <CIcon name="cil-cloud-download" />
              </CButton>
              <CButtonGroup className="float-right mr-3">
                {
                  ['Jour', 'Mois', 'Année'].map(value => (
                    <CButton
                      color="outline-secondary"
                      key={value}
                      className="mx-0"
                      active={value === period}
                      onClick={() => setPeriod(value)}
                    >
                      {value}
                    </CButton>
                  ))
                }
              </CButtonGroup>
            </CCol>
          </CRow>
          <CChartLine 
            datasets={dataset.datasets}
            options={defaultOptions}
            labels={dataset.labels}
            style={{height: '300px', marginTop: '40px'}}/>
        </CCardBody>
      </CCard>

    )
}