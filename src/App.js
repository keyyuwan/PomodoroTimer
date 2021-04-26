import Header from './components/Header'
import Timer from './components/Timer'
import { TimerContextProvider } from './contexts/TimerContext'

import './styles/global.css'

function App() {

  return (
    <TimerContextProvider>
      <div className="container">
        <Header />
        <Timer />
      </div>
    </TimerContextProvider>
  );
}

export default App;
