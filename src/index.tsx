import r2wc from '@r2wc/react-to-web-component';
import { TracerButton } from './components/tracer-button';
import { TracerDatePicker } from './components/tracer-date-picker';


const wcTracerButton = r2wc(TracerButton, { props: {text: "string"}});

customElements.define("tracer-button", wcTracerButton);

const wcTracerDatePicker = r2wc(TracerDatePicker);
customElements.define("tracer-date-picker", wcTracerDatePicker);
// How to use:
// <script defer="defer" src="https://rjspencer.github.io/r2wc-checklist/static/js/main.js"></script> 
// <r2wc-checklist items='[{"label":"First Thing","isChecked":false}]' />
