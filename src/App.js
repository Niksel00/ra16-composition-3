import './App.css';
import Collapse from './components/Collapse';

function App() {
  return (
    <Collapse
      collapsedLabel='Подробнее'
      expandedLabel='Скрыть'
      isExpanded={false}
    >
      <p>Dori me. Interimo adapare dori me. Ameno ameno latire. Latiremo. Dori me. Ameno. Omenare imperavi ameno. Dimere dimere matiro. Matiremo. Ameno. Omenare imperavi emulari Ameno. Omenare imperavi emulari. Ameno Ameno dore. Ameno dori me. Ameno dori me. Ameno dom. Dori me reo. Ameno dori me. Ameno dori me. Dori me am. Ameno. Omenare imperavi ameno. Dimere dimere matiro. Matiremo. Ameno. Omenare imperavi emulari Ameno. Omenare imperavi emulari. Ameno Ameno dore. Ameno dori me. Ameno dori me. Ameno dom. Dori me reo. Ameno dori me. Ameno dori me. Dori me ameno.</p>
    </Collapse>
  );
}

export default App;
