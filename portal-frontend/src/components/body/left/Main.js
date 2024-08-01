import CurrentCall from './CurrentCall';
import CallLogs from './CallLogs';
import ChatInterpretation from './ChatInterpretation';

function Left(props) {
  const { updateSharedData } = props;
  console.log(updateSharedData);
  return (
    <div style={{ marginTop: '80px' }}>
      <CurrentCall />
      <CallLogs />
      <ChatInterpretation updateSharedData={updateSharedData}/>
    </div>
  );
}

export default Left;
