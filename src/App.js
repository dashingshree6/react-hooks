import "./styles.css";
import "semantic-ui-css/semantic.min.css";
import USESTATE from "./USESTATE";
import USEREDUCER from "./USEREDUCER";
import USEEFFECT from "./USEEFFECT";
import USEREF from "./USEREF";
import USELAYOUTEFFECT from "./USELAYOUTEFFECT";
import USEIMPERATIVEHANDLE from "./USEIMPERATIVE/IMPHANDLE";
import USECONTEXT from "./USECONTEXT/Context";
import USEMEMO from "./USEMEMO";
import USECALL from "./USECALLBACK/call";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <hr />
      <USESTATE />
      <hr />
      <USEREDUCER />
      <hr />
      <USEEFFECT />
      <hr />
      <USEREF />
      <hr />
      <USELAYOUTEFFECT />
      <hr />
      <USEIMPERATIVEHANDLE />
      <hr />
      <USECONTEXT />
      <hr />
      <USEMEMO />
      <hr />
      <USECALL />
    </div>
  );
}
