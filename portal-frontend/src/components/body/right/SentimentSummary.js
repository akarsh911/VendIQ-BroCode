import './SentimentSummary';
import './SentimentSummary.css'
function SentimentSummary(props) {
  const { recieveData } = props;
  if(!recieveData.length) {
    return <p className='helli'><p>Sarcasam = Observing</p><p> Sentiment=Observing</p></p>;
  }
  return <p className='helli'><p>Sarcasam = {JSON.stringify(recieveData[recieveData.length-1].sarcasm_detection)}</p>
  <p>Sentiment = {JSON.stringify(recieveData[recieveData.length-1].sentiment)}</p>
  </p>;
}
export default SentimentSummary;
