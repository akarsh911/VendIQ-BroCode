import Dictaphone from './Dictaphone';
import './interpret.css';
function ChatInterpretation(props) {
  const { updateSharedData } = props;
  return (
    <div className='boxed'>
      <Dictaphone updateSharedData={updateSharedData} />
    </div>
  );
}

export default ChatInterpretation;
