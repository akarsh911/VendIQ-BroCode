import SentimentAnalysisGraph from './SentimentAnalysisGraph';
import './Main.css';
import DayEndSummary from './DayEndSummary';
import SentimentSummary from './SentimentSummary';
import AudioGraph from './PitchGraph';

function Right(props) {
  const { recieveData } = props;
  return (
    <div className='right-content' style={{ marginTop: '60px' }}>
      <AudioGraph />
      <SentimentAnalysisGraph recieveData={recieveData} />
      <SentimentSummary recieveData={recieveData} />
      {/* <DayEndSummary /> */}
    </div>
  );
}

function Spacediv() {
  return <div style={{ height: '30px' }} />; // Space component
}

export default Right;
