$(document).ready(function() {
	/**
	 * Class to generate instructions and collect data of the task following process.
	 *
	 * @author clpresearch / Karla Friedrichs
	 */
	var START = 1;

	// Define instalment audio files
	var instalment1;
	var instalment2;
	var instalment3;
	var instalment4;
	var instalment5;

	var uh_audio;
	var uhm_audio;

	var stop_instalments = 0;

	var tmm_count = 0;

	// Audio durations (only for elephant 1)
	var durations_F = [1.22, 1.39, 1.22, 0.98, 2.42, 2.52];
	var durations_I = [1.46, 1.70, 1.96, 1.12, 1.15, 1.15];
	var durations_L = [1.77, 1.20, 2.59, 2.42, 1.65, 1.96];
	var durations_N = [1.10, 1.44, 3.38, 1.92, 0.96, 1.70];
	var durations_P = [1.60, 3.52, 1.75, 1.48, 1.60, 2.04];
	var durations_T = [1.22, 1.22, 2.37, 2.80, 1.44, 3.28];
	var durations_U = [1.22, 2.92, 1.48, 2.25, 1.70, 1.92];
	var durations_V = [1.58, 1.27, 1.84, 1.58, 2.56, 2.49];
	var durations_W = [1.36, 1.63, 3.09, 0.96, 1.94, 1.39];
	var durations_X = [1.32, 1.12, 2.37, 1.03, 2.47, 0.93];
	var durations_Y = [1.80, 1.68, 1.80, 1.82, 2.64, 2.92];
	var durations_Z = [1.22, 2.71, 1.92, 1.20, 2.08, 1.87];

	this.InstructionManager = class InstructionManager {
		/**
		 * Constructor
		 * Tasks can be created using the 'task creator' interface.
		 *
		 * @param {board pieces are selected from} selection_board
		 * @param {board to represent task} task_board
		 */
		constructor(selection_board, task_board, track_interval=200) {
			this.selection_board = selection_board;
			this.task_board = task_board;
			// for each task and each instruction, log mouse movement, time, selected piece
			this.follower_data = {};
			this.task_name; // name of current task (e.g. file name)
			// for current instruction
			this.shape; // shape name
			this.instruction; // audio of current instruction
			this.current_start_time = Date.now();
			this.track_id; // interval id if tracking is running
			this.track_interval	= track_interval; // how often is mouse position checked (milliseconds)
			this.current_mouse_movement = [];
			this.correct_counter = 0; // number of correct guesses by participant
		}

		/**
		 * Registers the start of a new task
		 * @param {optional task name, number is used otherwise} name
		 */
		new_task(name=null) {
			if (name) {
				let name_start = Math.max(name.lastIndexOf("/")+1, 0);
				this.task_name = name.slice(name_start, name.length) || name;
			} else {
				this.task_name = Object.keys(this.follower_data).length.toString();
			}
			this.add_info(this.task_name, {});
		}

		/**
		 * Generate a new instruction.
		 * @param {true to play instruction as audio, false for console output. default: true} audio
		 * @return true if instruction was generated, false if task is complete
		 */
		generate_instruction(audio=true) {
			let next_shape = this.task_board.next_shape;
			if (!next_shape) {
				return false;
			} else {
				// remove red and green highlights
				this.remove_highlights();
				this.shape = next_shape.name;
				// save the target shape coordinates
				let target = this.selection_board.get_shape(this.shape);
				this.add_info(this.shape, {
					'target_x': Math.floor(target.x * this.selection_board.scale_to_source_size()),
					'target_y': Math.floor(target.y * this.selection_board.scale_to_source_size())
				}, 'task');
				if (audio) {
					// get audio for instruction and play it, remove '#' from shape name to get file name
					let instr_file = '../resources/audio/start.mp3';
					let instr_file0 = `../resources/audio/study2/${ELEPHANT}/${this.shape.slice(0,1)}/0.mp3`;
					let instr_file1 = `../resources/audio/study2/${ELEPHANT}/${this.shape.slice(0,1)}/1.mp3`;
					let instr_file2 = `../resources/audio/study2/${ELEPHANT}/${this.shape.slice(0,1)}/2.mp3`;
					let instr_file3 = `../resources/audio/study2/${ELEPHANT}/${this.shape.slice(0,1)}/3.mp3`;
					let instr_file4 = `../resources/audio/study2/${ELEPHANT}/${this.shape.slice(0,1)}/4.mp3`;
					let instr_file5 = `../resources/audio/study2/${ELEPHANT}/${this.shape.slice(0,1)}/5.mp3`;
					if (START == 0) {
						instr_file = instr_file0
					}
					let current_shape = this.shape.slice(0,1);

					this.instruction = new Audio(instr_file);
					// start instruction as soon as audio is loaded sufficiently
					this.instruction.oncanplaythrough = (event) => {
						this.instruction.play();
						this._start_instruction(); // start tracking etc.
						this.add_info('start_audio_duration', this.instruction.duration, 'shape');
					};

					if (START == 0) {
						// define pauses duration and fillers
						function pauseFunction() {
							var pauses = [1.01407294,1.50604086,0.83425166,1.9474147,0.66987672,1.15882105,2.21840247,2.46457716,2.63687029,0.90033504,1.5452034,0.49928467,2.40532506,1.61450767,0.70133147,
								1.02737417,2.36558852,0.77141459,1.59351408,1.65543011,0.56505629,2.37254873,1.76134201,2.49367634,1.78463226,1.74012799,2.10560193,1.85844714,0.26110181,0.82090776,2.70896658,
								0.69702822,1.97040428,2.52806307,0.67122688,1.10041679,0.37938182,2.22955049,1.56060573,0.0922904,0.15079048,2.34274366,0.49020522,2.91469366,0.04214849,0.79319024,1.79095586,
								0.89290965,1.09272778,1.84444156,0.15244333,1.79244917,1.71928594,0.28680077,2.36999428,2.09252728,1.23111989,2.9246578,0.6281981,2.42825037,0.29230663,1.57978661,1.28076237,
								2.37392406,0.24689169,2.58073101,2.86827841,1.74971683,2.57036663,0.4760125,1.71508046,0.66697707,2.36211028,0.6495943,2.9270452,1.11452657,2.08217505,2.42044455,1.10331874,
								2.70366435,2.19187721,2.37819015,1.55094549,1.87806131,2.6831084,0.19549476,2.65543483,2.47187117,2.77862425,1.11385264,1.81720964,0.97399858,2.3594692,1.59497317,1.59421618,
								0.87638249,2.29441298,1.8919531,0.19814567,2.43236262] //100 pauses with normal distribution, pick one randomly
							var random_pause = Math.floor(Math.random() * pauses.length);
							var pause_duration = pauses[random_pause];

							// get filler prob (22%)
							var filler_num = Math.floor(Math.random() * 100); //smaller than 11% pick uh, smaller than 22% pick uhm, bigger pick no filler
							var filler = 0;
							if (filler_num < 11) {
							  if (pause_duration <= 0.300) {//uh lasts 300ms
							    filler = 0;
								} else {
							    pause_duration = (pause_duration - 0.300) / 2;
									filler = 1;
								}
							} else if (filler_num >= 11 && filler_num <= 22) {
								if (pause_duration <= 0.430) {//uhm lasts 430ms
							    filler = 0;
								} else {
									pause_duration = (pause_duration - 0.430) / 2;
									filler = 2;
								}
							}

  						return [pause_duration, filler];
						}

						let [pause_duration1, filler1] = pauseFunction();
						let [pause_duration2, filler2] = pauseFunction();
						let [pause_duration3, filler3] = pauseFunction();
						let [pause_duration4, filler4] = pauseFunction();
						let [pause_duration5, filler5] = pauseFunction();
						var pause_durations = [pause_duration1, pause_duration2, pause_duration3, pause_duration4, pause_duration5];
						var fillers = [filler1, filler3, filler3, filler4, filler5];

						// use pause and take decision to play instalment (start with installment 0, then add pause and installment 1, then monitor user and do the same)
						var instalments_played = 0;
						stop_instalments = 0; //when the user clicks it stops uttering instalments

						// get current instalment audio duration
						var audio_durations = [];
						switch (current_shape) {
							case 'F':
								audio_durations = durations_F;
								break;
							case 'I':
								audio_durations = durations_I;
								break;
							case 'L':
								audio_durations = durations_L;
								break;
							case 'N':
								audio_durations = durations_N;
								break;
							case 'P':
								audio_durations = durations_P;
								break;
							case 'T':
								audio_durations = durations_T;
								break;
							case 'U':
								audio_durations = durations_U;
								break;
							case 'V':
								audio_durations = durations_V;
								break;
							case 'W':
								audio_durations = durations_W;
								break;
							case 'X':
								audio_durations = durations_X;
								break;
							case 'Y':
								audio_durations = durations_Y;
								break;
							case 'Z':
								audio_durations = durations_Z;
								break;
						}

						if (CONDITION != 3) { // CONDITION 1 or 2
							function playInstalment() {
								// define sleep function
								function sleep(ms) {
									return new Promise(resolve => setTimeout(resolve, ms));
								}

								// start pause after instalment audio duration
								async function instalment_decision() {
									// add instalment audio duration and decide pause
									if (fillers[instalments_played] == 1 || fillers[instalments_played] == 2) {//uh and uhm
										// wait before playing filler
										var filler_in = audio_durations[instalments_played] + (pause_durations[instalments_played] / 2);
										await sleep(filler_in * 1000); //play filler after filler_in seconds

										//play um or uhm
										if (fillers[instalments_played] == 1) {
											let uh_file = '../resources/audio/uh.mp3';
											uh_audio = new Audio(uh_file);
											uh_audio.oncanplaythrough = (event) => {
												uh_audio.play();
											};
										} else {
											let uhm_file = '../resources/audio/uhm.mp3';
											uhm_audio = new Audio(uhm_file);
											uhm_audio.oncanplaythrough = (event) => {
												uhm_audio.play();
											};
										}
									}

									// wait before playing instalment
									await sleep((audio_durations[instalments_played] + pause_durations[instalments_played]) * 1000);

									instalment1 = new Audio(instr_file1);
									instalment2 = new Audio(instr_file2);
									instalment3 = new Audio(instr_file3);
									instalment4 = new Audio(instr_file4);
									instalment5 = new Audio(instr_file5);

									if (instalments_played == 0) { // play first instalment
										instalment1.oncanplaythrough = (event) => {
											instalment1.play();
										};
									} else {
										// decide whether to play the rest of the instalments
										if (CONDITION == 1) { //CONDITION 1
											// import instructions bert per letter
											

											console.log(bert_F1);

											//var prediction = new RandomForestClassifier2().predict([0.0772081,0.0803651,-0.0384032,0.0609297,-0.0351845,-0.0259474,0.0626215,0.0508008,0.0865968,-0.0312931,0.0277823,0.0561066,-0.0563539,0.0341416,-0.0364062,-0.0464845,0.0295061,-0.0164982,-0.0337172,-0.0044252,0.0336823,0.020655,-0.0329089,-0.0381185,-0.0122121,0.0320613,-0.00141594,0.075691,0.0547309,-0.0346745,0.00762394,0.0314017,0.0253145,-0.014009,-0.0394748,-0.0165162,0.00316187,0.119428,0.0627826,-0.0218815,0.0216069,-0.0386683,0.115342,0.0398415,-0.0288027,0.0283676,-0.00744526,-0.0313471,0.0623556,-0.0556016,0.0929476,-0.0994564,-0.0205227,-0.00228431,-0.015676,-0.0108526,0.016442,0.0341242,0.0212879,0.00852662,0.0558656,-0.0269754,-0.0104997,0.0186907,-0.0364256,-0.0260404,-0.0437328,-0.105722,0.0217009,-0.0366236,0.0605504,0.063658,-0.0152086,-0.0101903,-0.0159323,-0.112935,0.0645995,-0.00371464,0.0204621,0.163239,-0.108957,0.009359,0.0505502,0.0656617,-0.026718,-0.0059793,0.0787372,-0.0493157,-0.0292224,-0.0446032,-0.0372393,0.052956,-0.0367808,0.00669663,0.0667428,0.0143543,0.0233115,0.0287644,-0.0832575,0.0369081,0.0684081,0.00692129,-0.0260948,-0.0123904,0.0367239,-0.0335766,0.0416821,0.0263691,0.0305928,0.015874,-0.00427035,0.00750225,0.0329159,0.022365,-0.0316991,-0.0737661,-0.0435961,-0.0126497,-0.0059066,-0.022053,0.0562888,-0.0155755,-0.0435856,-0.0527597,0.000748956,0.0275491,-0.0118648,-7.00376e-33,-0.0174835,0.107402,0.0232354,-0.0175243,0.0317865,-0.000305519,-0.017368,-0.0690698,0.0232435,0.10422,0.00213073,-0.0479719,-0.0843131,0.115979,0.100222,-0.108056,-0.028337,0.00740181,-0.0195842,-0.0046073,-0.0365908,0.0237603,-0.0252964,0.0691873,0.0449437,0.0468235,0.0305531,-0.0413801,0.0533128,0.0584266,0.0012592,0.0674411,-0.0149923,-0.0767481,0.00544408,0.00764433,0.0589764,-0.0210428,0.0202517,0.0223066,0.0353339,-0.00431806,0.0151498,-0.0279542,0.0103215,-0.0445356,0.0852459,-0.0323394,-0.0226315,-0.00710403,0.00953955,0.000817031,0.0376713,0.00817364,0.038481,-0.0170865,0.0226263,-0.0490543,0.0214698,0.0525435,0.00155974,-0.0265622,0.0670795,-0.0268172,-0.0288657,0.0165248,-0.0103034,-0.0174122,-0.05115,0.0198236,-0.0876757,-0.0505676,0.0354608,0.0198631,-0.118076,-0.0165143,-0.0567323,-0.0431915,0.0669109,-0.0321928,-0.0672177,-0.0337936,0.00496956,-0.149575,-0.0546336,-0.0747938,-0.00971669,-0.0643564,0.00575195,-0.0883001,-0.0897463,-0.057602,0.00144693,-0.0118389,0.0101529,5.6477e-33,-0.150682,-0.0148389,-0.0645526,0.0965607,-0.0068177,-0.00609765,0.0559857,0.0527323,-0.0155959,0.0536039,-0.00654579,0.0312108,-2.51455e-05,-0.00895755,0.0568212,0.0771985,0.0152792,0.0214575,-0.0407892,-0.064339,0.0427209,-0.0718264,0.08459,0.0093674,0.0484821,0.123596,-0.0889202,-0.0935811,-0.051313,0.0674169,-0.0404031,-0.0843048,-0.0904227,-0.0701044,-0.036587,-0.0412682,0.0416026,-0.0642043,0.00702004,-0.112299,0.0488883,-0.0372907,0.0138307,0.142916,-0.00489448,0.00679804,0.126302,0.0189228,0.034996,0.000640444,0.00250635,-0.0059481,-0.00529968,0.0782623,-0.00905237,-0.011613,-0.0945534,0.0306219,0.0292424,0.0328836,0.0101771,-0.0143687,-0.0380738,-0.00564071,-0.0090425,0.0108221,0.0195598,-0.0413974,-0.0855022,0.108446,0.0324001,0.0638705,-0.0306398,-0.0110647,0.0287993,0.025878,0.0240931,-0.0155799,-0.0557096,0.119118,-0.0455631,-0.0132902,0.0532707,-0.0801614,0.0408001,-0.0197626,-0.0746953,0.105678,-0.0736966,-0.00857652,-0.0368687,0.0856333,-0.0827084,0.038303,0.00922276,-2.20056e-08,-0.00671652,-0.0286192,0.0158541,-0.0993866,0.00390309,-0.0575837,-0.0201865,-0.0150515,-0.0260026,-0.0624948,0.0246803,0.0149112,-0.127091,0.0141193,0.0179997,0.066798,-0.0454437,-0.014302,0.00466209,0.0278567,-0.0223669,-0.0120965,0.0160508,-0.0345119,-0.0636917,0.0397343,-0.0441433,0.0860744,-0.00829038,0.00697481,0.0738639,0.0158959,0.0582317,0.0159227,-0.00733106,0.0128666,0.0253406,0.0316194,-0.0190006,-0.0535646,0.0352068,-0.171131,0.0696699,0.0713071,-0.00871093,0.0856053,0.0298133,0.0148444,-0.0666853,-0.0356178,0.0254096,0.0259174,0.0134087,0.070133,0.0053319,-0.0350512,-0.0197571,-0.0231155,0.0135696,0.0251665,-0.0314291,0.00495782,0.00451676,0.0556743]);
											//console.log(prediction);

											// if it decides to not issue more instalments update stop_instalments and make sure no more instalments or fillers are issued
											//check how i can make it not speak the next instalment after clicking (create functions and decide whether to call them or not)
											//Decide whether it will keep on speaking or stop speaking when clicking submit button or just stop speaking when clicking item (or let it finish installment), check what full model predicts and maybe do not mute instalment when user clicks, make it say when they click (yes the one with, or no the one with and then let them submit the questions), use the prediction to say yes the one with, or no the one with (as long as they have moved the mouse), in case of bert just put instalments until a piece is chosen or until 1 is predicted (or just keep on saying no until 1 is predicted), use yes and no files
										} else { //CONDITION 2
											//Check ml.py and parsing.py for feature extraction
										}
									}

									instalments_played = instalments_played + 1;
									if (instalments_played < 5 && stop_instalments == 0){
										playInstalment();
									}

									//Log number of instalments and pause timings and fillers (mp3 duration for timing), result from classifier (bert, mouse - features and prediction), check code for what else to log
									//this.add_info('audio_duration'+instalments_played+1, this.instruction.duration, 'shape');
								}
								instalment_decision();
							}
							if (instalments_played < 5){
								playInstalment();
							}

						} else { // CONDITION == 3 (Tell-Me-More)
							// hide tmm button
							if (instalments_played == 0) {
								tellbutton.setAttribute("hidden", "hidden");
							}

							var played_filler = [0, 0, 0, 0, 0];
							var played_instalment = [0, 0, 0, 0, 0];
							var showed_button = [0, 0, 0, 0, 0];

							function tmmLoop() {
								// start pause (with filler) after instalment audio duration
								if ((fillers[instalments_played] == 1 || fillers[instalments_played] == 2) && played_filler[instalments_played] == 0) {//uh and uhm
									// wait before playing filler
									function tmmFiller() {
										//play um or uhm
										if (fillers[instalments_played] == 1) {
											let uh_file = '../resources/audio/uh.mp3';
											uh_audio = new Audio(uh_file);
											uh_audio.oncanplaythrough = (event) => {
												uh_audio.play();
											};
										} else {
											let uhm_file = '../resources/audio/uhm.mp3';
											uhm_audio = new Audio(uhm_file);
											uhm_audio.oncanplaythrough = (event) => {
												uhm_audio.play();
											};
										}
									}

									var filler_in = (audio_durations[instalments_played] + (pause_durations[instalments_played] / 2)) - 0.5; //minus 0.5 for the 1s loop
									setTimeout(tmmFiller, filler_in * 1000); //play filler after filler_in seconds
									played_filler[instalments_played] = 1;
								}

								// Play first instalment and then show button and wait for button press
								function tmm_playInstalment() {
									instalment1 = new Audio(instr_file1);
									instalment2 = new Audio(instr_file2);
									instalment3 = new Audio(instr_file3);
									instalment4 = new Audio(instr_file4);
									instalment5 = new Audio(instr_file5);

									if (played_instalment[instalments_played] == 0) {
										if (instalments_played == 0) { //play first instalment
											instalment1.oncanplaythrough = (event) => {
												instalment1.play();
												played_instalment[instalments_played] = 1;
												instalments_played = instalments_played + 1;
											};

											tmm_count = 0; //update button counter with 0
											tellbutton.innerText = "Tell Me More! (" + tmm_count + ")"; //update text of new button
											tellbutton.setAttribute("hidden", "hidden");
										} else { //play the rest of the instalments
											// show button and decide whether to play the rest of the instalments (and fillers)
											function tmmFunction() {
												instalment1 = new Audio(instr_file1);
												instalment2 = new Audio(instr_file2);
												instalment3 = new Audio(instr_file3);
												instalment4 = new Audio(instr_file4);
												instalment5 = new Audio(instr_file5);

												tmm_count = tmm_count + 1;
												tellbutton.innerText = "Tell Me More! (" + tmm_count + ")";
												setTimeout(function() {tellbutton.setAttribute("hidden", "hidden");}, 1000);

												// play next instalment
												if (instalments_played == 1) {
													instalment2.oncanplaythrough = (event) => {
														instalment2.play();
													};
												} else if (instalments_played == 2) {
													instalment3.oncanplaythrough = (event) => {
														instalment3.play();
													};
												} else if (instalments_played == 3) {
													instalment4.oncanplaythrough = (event) => {
														instalment4.play();
													};
												} else if (instalments_played == 4) {
													instalment5.oncanplaythrough = (event) => {
														instalment5.play();
													};
												}

												played_instalment[instalments_played] = 1;
												instalments_played = instalments_played + 1;
											}

											// show button after pause
											function showButton() {
												tellbutton.removeAttribute("hidden");
											}

											if (showed_button[instalments_played] == 0) {
												var button_in = audio_durations[instalments_played] + pause_durations[instalments_played];
												setTimeout(showButton, button_in * 1000); //show button after button_in seconds
												showed_button[instalments_played] = 1;
											}

											tellbutton.onclick = function() {tmmFunction()};
										}
									}
								}

								var instalment_in = audio_durations[instalments_played] + pause_durations[instalments_played];
								setTimeout(tmm_playInstalment, instalment_in * 1000); //play instalment after instalment_in seconds

							  if(stop_instalments == 0) { // keep on playing every second until item click
							    setTimeout(tmmLoop, 1000);
							  }
							}

							if (instalments_played < 5){
								tmmLoop();
							}
						}

						//this.add_info('audio_duration'+instalments_played+1, this.instruction.duration, 'shape');
						//Log number of tell-me-more pressed and when, also instalment and pause timings and fillers (mp3 duration for timing), result from classifier (bert, mouse - features and prediction), check code for what else to log
						//Check all conditions that work and that mouse data is also gathered in json files
						//Make an estimation of uncertainty in real time and visualise it to detect probability on whether to give another instalment, like Gabriel incremental ASR paper and video
					}
				} else {
					console.log(`Please select ${this.shape}`);
					this._start_instruction(); // start tracking etc.
				}
				return true;
			}
		}

		/**
		 * Start data collection for current instruction
		 */
		_start_instruction() {
			this.current_start_time = Date.now();
			this._start_mouse_track();
		}

		/**
		 Stop data collection for current instruction and handle the follower action.
		 @param {name of shape selected by follower} selected_shape
		 */
		complete_instruction(selected_shape) {
			this.add_info('selected', selected_shape, 'shape');
			this._stop_mouse_track(); // saves mouse movement
			this.instruction.pause(); // stop audio

			// pause instalment
			if (START == 0) {
				instalment1.pause();
				instalment2.pause();
				instalment3.pause();
				instalment4.pause();
				instalment5.pause();

				// stop playing instalments
				stop_instalments = 1;
			}

			// Note: The highlighting only really makes sense for single-piece tasks, as the highlights are removed as soon as the next instruction is generated, highlight correct shape in green
			if (START == 0) {
				this.highlight_correct();
				// correct shape selected
				if (this.shape == selected_shape) {
					this.add_info('correct', true, 'shape');
					this.correct_counter += 1;
					this.correct_piece();
				// incorrect shape selected
				} else {
					// highlight shape as incorrect
					this.highlight_incorrect(selected_shape);
					this.add_info('correct', false, 'shape');
					// handle the incorrectly selected shape
					this.task_board.handle_selection(selected_shape);
					this.incorrect_piece();
				}
			}
			START = 0;
			// make task_board handle the selection
			this.task_board.handle_selection(this.shape);
		}

		/**
		 * Highlight the goal shape in green.
		 */
		highlight_correct() {
			this.selection_board.get_shape(this.shape).set_highlight('green');
		}

		/**
		 * Highlight a given shape in red.
		 * @param {name of incorrect shape} shape
		 */
		highlight_incorrect(shape) {
			this.selection_board.get_shape(shape).set_highlight('red');
		}

		/**
		 * Remove all hightlights
		*/
		remove_highlights() {
			for (let s of Object.values(this.selection_board.shapes)) {
				s.remove_highlight();
			}
		}

		/**
		 * Play intro
		 */
		audiotest() {
			let test_file = `../resources/audio/intro${ELEPHANT}.mp3`;
			let test_audio = new Audio(test_file);
			//test_audio.oncanplaythrough = (event) => {test_audio.play();};
		}

		/**
		 * Emit a 'well done' message
		 * @param {pass true to enable audio. default: true} audio
		 */
		well_done(audio=true) {
			if (audio) {
				let well_done_file = '../resources/audio/done.mp3';
				let well_done_audio = new Audio(well_done_file);
				well_done_audio.oncanplaythrough = (event) => {
					well_done_audio.play();
				}
			} else {
				console.log("Well done!");
			}
		}

		/**
		 * Emit a 'correct' message
		 * @param {pass true to enable audio. default: true} audio
		 */
		correct_piece(audio=true) {
			var random_num = 0;
			if (audio) {
				random_num = Math.floor(Math.random() * 3) + 1
				let correct_piece_file = '../resources/audio/correct'+random_num+'.mp3';
				let correct_piece_audio = new Audio(correct_piece_file);
				correct_piece_audio.oncanplaythrough = (event) => {
					correct_piece_audio.play();
				}
			} else {
				console.log("This was correct!");
			}
		}

		/**
		 * Emit an 'incorrect' message
		 * @param {pass true to enable audio. default: true} audio
		 */
		incorrect_piece(audio=true) {
			var random_num = 0;
			if (audio) {
				random_num = Math.floor(Math.random() * 3) + 1
				let incorrect_piece_file = '../resources/audio/incorrect'+random_num+'.mp3';
				let incorrect_piece_audio = new Audio(incorrect_piece_file);
				incorrect_piece_audio.oncanplaythrough = (event) => {
					incorrect_piece_audio.play();
				}
			} else {
				console.log("This was incorrect!");
			}
		}

		/**
		 * Save additional info to current follower data.
		 * Data can be added at three levels:
		 * 		'global': add to root of info dictionary
		 *		'task': add to current task
		 *		'shape': add to current shape of the running task
		 * @param {a descriptive name for the new information} key
		 * @param {content to assign to key} value
		 * @param {one of ['global', 'task', 'shape']. Defines insertion point to the data.}
		 */
		add_info(key, value, level='global') {
			switch(level) {
				case 'global':
					this.follower_data[key] = value;
					break;
				case 'task':
					if (!this.task_name) {
						console.log("Error: Trying to save info with no running task.")
					} else {
						this.follower_data[this.task_name][key] = value;
					}
					break;
				case 'shape':
					if (!this.task_name || !this.shape) {
						console.log("Error: Trying to save info, but no task running or no target shape.")
					} else {
						this.follower_data[this.task_name][this.shape][key] = value;
					}
					break;
				default:
					// Don't save anything, emit error message
					console.log(`Error: Undefined insertion level to save data ${key} = ${value}: ${level}`)
			}
		}

		/**
		 * @return collected data as a JSON string
		 */
		data_to_JSON() {
			return JSON.stringify(this.follower_data, null, 2);
		}

		/**
		 * Write collected data to savefile
		 * @param {file to save to} filename
		 */
		save_data(filename) {
			// Create a blob of the data
			let file_contents = new Blob([JSON.stringify(this.follower_data, null, 2)], {type: 'application/json'});
			// Save to file
			saveAs(file_contents, filename);
		}

		/**
		 * @return time passed since start of current instruction in milliseconds
		 */
		_time_passed() {
			return Date.now() - this.current_start_time;
		}

		/**
		 * Start tracking mouse coordinates as it is moved
		 */
		_start_mouse_track() {
			this.current_mouse_movement = [];
			var self = this;
			var coord_scaling = this.selection_board.scale_to_source_size();
			// start tracking loop
			this.track_id = setInterval(function() {
				let mousePos = document.get_mouse_pos();
				// save a single time-coordinate pair of the current mouse position
				self.current_mouse_movement.push({time: self._time_passed(),
												x: Math.floor(mousePos.x * coord_scaling),
												y: Math.floor(mousePos.y * coord_scaling)});
				}, this.track_interval);
		}

		/**
		 * Stop mouse tracking and store tracking info for current piece
		 */
		_stop_mouse_track() {
			if (this.track_id) {
				this.track_id = clearInterval(this.track_id);
			}
			this.add_info('movement', this.current_mouse_movement, 'shape');
		}
	};
})
