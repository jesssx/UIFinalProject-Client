// const SpeechParser = new class SpeechParser {
// 	private recognition: SpeechRecognition;
// 	private speechRecognitionList: SpeechGrammarList;

// 	private recognizablePokemon = ["Pikachu, Venomoth, Steelix"];
// 	private grammar: string =
// 		"#JSGF V1.0; grammar pokemon; public <pokemon> = " +
// 		this.recognizablePokemon.join(" | ") +
// 		" ;";

// 	constructor() {
// 		this.recognition = new SpeechRecognition();
// 		this.speechRecognitionList = new SpeechGrammarList();
// 		this.recognition.grammars = this.speechRecognitionList;
// 		this.recognition.continuous = false;
// 		this.recognition.lang = "en-US";
// 		this.recognition.interimResults = false;
// 		this.recognition.maxAlternatives = 1;
// 		this.recognition.onresult = (event: SpeechRecognitionEvent) => {
// 			// const color = event.results[0][0].transcript;
// 			// diagnostic.textContent = `Result received: ${color}.`;
// 			// bg.style.backgroundColor = color;
// 			console.log("Heard:");
// 			console.log("Transcript: " + event.results[0][0].transcript);
// 			console.log(`Confidence: ${event.results[0][0].confidence}`);
// 		};
// 	}

// 	createUtils() {
// 		// const SpeechRecognition =
// 		// window.SpeechRecognition || window.webkitSpeechRecognition;
// 		// const SpeechGrammarList =
// 		// window.SpeechGrammarList || window.webkitSpeechGrammarList;
// 		// const SpeechRecognitionEvent =
// 		// window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;
// 	}

// 	addGrammar(grammar: string) {
// 		this.speechRecognitionList.addFromString(grammar, 1);
// 	}

// 	startListening() {
// 		this.recognition.start();
// 	}

// 	stopListening() {
// 		this.recognition.stop();
// 	}
// }

// // const pokemonNames = require('./data/pokedex').BattlePokedex;
// // const recognizablePokemon = ["Pikachu, Venomoth, Steelix"]

// // const grammar: string = '#JSGF V1.0; grammar pokemon; public <pokemon> = ' + recognizablePokemon.join(' | ') + ' ;'
// // const recognition = new SpeechRecognition();
// // const speechRecognitionList = new SpeechGrammarList();

// // speechRecognitionList.addFromString(grammar, 1);

// // recognition.grammars = speechRecognitionList;
// // recognition.continuous = false;
// // recognition.lang = "en-US";
// // recognition.interimResults = false;
// // recognition.maxAlternatives = 1;

// // recognition.onresult = (event: typeof SpeechRecognitionEvent) => {
// //     // const color = event.results[0][0].transcript;
// //     // diagnostic.textContent = `Result received: ${color}.`;
// //     // bg.style.backgroundColor = color;
// //     console.log("Heard:")
// //     console.log("Transcript: " + event.results[0][0].transcript)
// //     console.log(`Confidence: ${event.results[0][0].confidence}`);
// // };

// // export const startListening = () => {
// //     recognition.start();
// //     console.log("Listening...");
// // }
