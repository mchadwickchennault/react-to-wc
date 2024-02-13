import r2wc from '@r2wc/react-to-web-component';
import { TracerButton } from './components/tracer-button';








const wcTracerButton = r2wc(TracerButton);

customElements.define("tracer-button", wcTracerButton);

// How to use:
// <script defer="defer" src="https://rjspencer.github.io/r2wc-checklist/static/js/main.js"></script> 
// <r2wc-checklist items='[{"label":"First Thing","isChecked":false}]' />
