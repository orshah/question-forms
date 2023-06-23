import "./App.css";
import QuestionsMain from "./components/questionsMain/QuestionsMain";
import { SnackbarProvider, enqueueSnackbar } from "notistack";

function App() {
  return (
    <div>
      <QuestionsMain />
    </div>
  );
}

export default App;
