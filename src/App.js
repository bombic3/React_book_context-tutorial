import ColorBox from "./components/ColorBox";
import SelectColors from "./components/SelectColors";
import { ColorProvider } from "./contexts/color";
/*
- App에서 ColorContext.Provider → ColorProvider로 대체
*/
const App = () => {
  return (
      <ColorProvider>
        <div>
          <SelectColors />
          <ColorBox />
        </div>
      </ColorProvider>
  );
};

export default App;