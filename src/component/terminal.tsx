import React, { useState, useRef, useEffect } from 'react';
// global vars

const Tterminal = () => {
  //function that keep push virtual data on terminal log
  let terminal: any;
  const [writeSpeed] = useState(60);
  const terminalRef = useRef(null);
  let [counter, Setcounter] = useState<number>(0);

  useEffect(() => {

    init();
    
  }, []);// eslint-disable-line react-hooks/exhaustive-deps

      function init() {
    //initialise terminal with selected text
    // default settings
    terminal = terminalRef.current;

    terminal.innerText = '[guest@namla.cloud:]$ ';
    terminalStart();
  }

  function terminalStart() {
    terminalWrite(
      '--Welcome to Namla Cloud!--\n----------------------------------\n 185.50.250.97	8085	UA	Ukraine	transparent	no	no	2 mins \n 146.19.78.105	8085	RU	Russian Federation	transparent	no	no	2 mins \n 45.148.124.68	8085	RU	Russian Federation	transparent	no	no	2 mins \n 91.243.190.49	8085	US	United States	transparent	no	no	2 mins \n 193.223.98.239	92	UA	Ukraine	transparent	no	no	2 mins \n 146.185.200.91	8085	RU	Russian Federation	transparent	no	no	2 mins \n 192.177.165.228	3128	DE	Germany	transparent	no	no	2 mins \n  136.0.95.61	3128	DE	Germany	transparent	no	no	2 mins \n  185.61.217.106	8085	BR	Brazil	transparent	no	no	2 mins \n 77.83.24.57	8085	EG	Egypt	transparent	no	no	2 mins \n 193.27.10.130	6215	SC	Seychelles	transparent	no	no	2 mins \n 5.183.254.254	8085	RU	Russian Federation	transparent	no	no	2 mins \n 194.113.36.102	92	BG	Bulgaria	transparent	no	no	2 mins \n 194.113.39.213	92	BG	Bulgaria	transparent	no	no	2 mins \n 142.252.198.105	3128	FR	France	transparent	no	no	2 mins \n 96.45.167.110	92	US	United States	transparent	no	no	2 mins \n 84.54.58.89	8085	RU	Russian Federation	transparent	no	no	2 mins \n 109.94.223.162	8085	US	United States	transparent	no	no	2 mins \n 46.161.58.27	8085	RU	Russian Federation	transparent	no	no	2 mins \n 193.202.83.43	8085	RU	Russian Federation	transparent	no	no	2 mins \n 45.66.208.72	8085	RU	Russian Federation	transparent	no	no	2 mins \n 212.60.20.30	8085	RU	Russian Federation	transparent	no	no	2 mins \n 147.78.181.100	8085	RU	Russian Federation	transparent	no	no	2 mins \n 194.104.128.110	8085	SC	Seychelles	transparent	no	no	2 mins \n 194.104.10.127	8085	RU	Russian Federation	transparent	no	no	2 mins \n 185.68.184.133	8085	BR	Brazil	transparent	no	no	2 mins \n 193.223.98.243	92	UA	Ukraine	transparent	no	no	2 mins \n 45.199.132.184	3128	DE	Germany	transparent	no	no	2 mins \n 146.19.91.52	8085	RU	Russian Federation	transparent	no	no	2 mins \n 185.88.103.36	8085	RU	Russian Federation	transparent	no	no	2 mins \n 37.44.252.146	8085	RU	Russian Federation	transparent	no	no	2 mins \n 217.145.226.245	8085	BR	Brazil	transparent	no	no	2 mins \n 45.159.21.75	8085	ES	Spain	transparent	no	no	2 mins \n 45.138.102.244	8085	RU	Russian Federation	transparent	no	no	2 mins \n 5.181.170.220	8085	RU	Russian Federation	transparent	no	no	2 mins \n 212.119.44.18	8085	RU	Russian Federation	transparent	no	no	2 mins \n 146.19.90.161	8085	SC	Seychelles	transparent	no	no	2 mins \n 212.60.21.32	8085	RU	Russian Federation	transparent	no	no	2 mins \n 193.56.66.88	8085	US	United States	transparent	no	no	2 mins \n 212.115.51.185	8085	RU	Russian Federation	transparent	no	no	2 mins \n 185.61.221.173	8085	BR	Brazil	transparent	no	no	2 mins \n 154.21.39.128	5966	US	United States	transparent	no	no	2 mins \n 178.159.100.197	8085	UA	Ukraine	transparent	no	no	2 mins \n 83.142.53.95	8085	RU	Russian Federation	transparent	no	no	2 mins \n 94.158.23.165	8085	RU	Russian Federation	transparent	no	no	2 mins \n 185.89.100.110	8085	UA	Ukraine	transparent	no	no	2 mins \n 84.54.56.125	8085	RU	Russian Federation	transparent	no	no	2 mins \n 83.97.119.51	8085	RU	Russian Federation	transparent	no	no	2 mins \n 185.250.47.234	8085	RU	Russian Federation	transparent	no	no	2 mins \n 185.152.93.25	8085	FR	France	transparent	no	no	2 mins \n 185.50.251.129	8085	UA	Ukraine	transparent	no	no	2 mins \n 185.202.108.57	8085	ES	Spain	transparent	no	no	2 mins \n 45.132.187.196	8085	RU	Russian Federation	transparent	no	no	2 mins \n'
    );
  }

  function terminalWrite(text: any) {
    //func that add selected text to the terminal with selected speed
    (function writer(): void {
      terminal.disabled = true;
      if (counter < text.length) {
        let terminalText = `${terminal.value.replace('|', '')}${text.charAt(
          counter
        )}`;
        if (counter !== text.length - 1) {
          terminalText = `${terminalText}|`;
        }

        terminal.value = terminalText;
        Setcounter(counter++);
        setTimeout(writer, writeSpeed);
      } else {
        terminal.disabled = false;
        terminal.blur();
        terminal.focus();
      }
    })();
  }
  return (
    //terminal component implementation
    <div className="overview_logs">
      <h1>Logs</h1>
      <textarea
        className="terminal"
        ref={terminalRef}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        id="terminal"
      ></textarea>
    </div>
  );
};
export default Tterminal;
