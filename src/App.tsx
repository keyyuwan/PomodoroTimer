import Header from './components/Header'
import Timer from './components/Timer'
import Background from './components/Background'

import { TimerContextProvider } from './contexts/TimerContext'
import { ThemeContextProvider } from './contexts/ThemeContext'

import './styles/global.css'

function App() {

  return (
    <ThemeContextProvider>
      <TimerContextProvider>
        <Background>
          <div className="container">
            <Header />
            <Timer />
          </div>
        </Background>
      </TimerContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
