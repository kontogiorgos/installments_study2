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
	var yes_audio;
	var no_audio;

	var stop_instalments = 0;
	var instalments_played;
	var audio_durations = [];
	var pause_durations = [];
	var fillers = [];

	var mouse_movement;
	var previous_mouse_movement_length = 0;
	var step_mouse_movement = [];

	var mouse_moved = 0;
	var mouse_moveds = [-1, -1, -1, -1];
	var dis_means = [-1, -1, -1, -1];
	var dis_stds = [-1, -1, -1, -1];
	var dis_mins = [-1, -1, -1, -1];
	var dis_maxs = [-1, -1, -1, -1];
	var dis_ranges = [-1, -1, -1, -1];
	var dis_slopes = [-1, -1, -1, -1];
	var distance_travelleds = [-1, -1, -1, -1];
	var velocitys = [-1, -1, -1, -1];
	var direction_change_xs = [-1, -1, -1, -1];
	var direction_change_ys = [-1, -1, -1, -1];
	var aucs = [-1, -1, -1, -1];
	var meanads = [-1, -1, -1, -1];
	var maxads = [-1, -1, -1, -1];

	var tmm_count = 0;
	var tmm_when = 0;
	var tmm_whens = [-1, -1, -1, -1];

	var prediction;
	var predictions = [-1, -1, -1, -1];

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
						pause_durations = [pause_duration1, pause_duration2, pause_duration3, pause_duration4, pause_duration5];
						fillers = [filler1, filler3, filler3, filler4, filler5];

						// use pause and take decision to play instalment (start with installment 0, then add pause and installment 1, then monitor user and do the same)
						instalments_played = 0;
						stop_instalments = 0; //when the user clicks it stops uttering instalments

						// get current instalment audio duration
						var bert_letter = [];
						switch (current_shape) {
							case 'F':
								audio_durations = durations_F;
								bert_letter = bert_F;
								break;
							case 'I':
								audio_durations = durations_I;
								bert_letter = bert_I;
								break;
							case 'L':
								audio_durations = durations_L;
								bert_letter = bert_L;
								break;
							case 'N':
								audio_durations = durations_N;
								bert_letter = bert_N;
								break;
							case 'P':
								audio_durations = durations_P;
								bert_letter = bert_P;
								break;
							case 'T':
								audio_durations = durations_T;
								bert_letter = bert_T;
								break;
							case 'U':
								audio_durations = durations_U;
								bert_letter = bert_U;
								break;
							case 'V':
								audio_durations = durations_V;
								bert_letter = bert_V;
								break;
							case 'W':
								audio_durations = durations_W;
								bert_letter = bert_W;
								break;
							case 'X':
								audio_durations = durations_X;
								bert_letter = bert_X;
								break;
							case 'Y':
								audio_durations = durations_Y;
								bert_letter = bert_Y;
								break;
							case 'Z':
								audio_durations = durations_Z;
								bert_letter = bert_Z;
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

										previous_mouse_movement_length = mouse_movement.length;
										mouse_moved = 0;

									} else { // decide whether to play the rest of the instalments

										// gather step mouse movement
										step_mouse_movement = mouse_movement.slice(previous_mouse_movement_length - mouse_movement.length);
										previous_mouse_movement_length = previous_mouse_movement_length + step_mouse_movement.length;

										// initialise prediction variable
										prediction = -1;

										if (CONDITION == 1) { // CONDITION 1 (BERT)
											// take bert per letter and instalment and make prediction
											prediction = new RandomForestClassifier2().predict(bert_letter[instalments_played-1]);
											predictions[instalments_played-1] = prediction;
											mouse_moved = 1;
											mouse_moveds[instalments_played-1] = mouse_moved;

										} else { // CONDITION 2 (Mouse)
											// check if mouse has moved in the square
											var mouse_moved_count = step_mouse_movement.filter(mouse => mouse.x === -1);
											if (step_mouse_movement.length != mouse_moved_count.length) {
												mouse_moved = 1;
												mouse_moveds[instalments_played-1] = mouse_moved;
											}

											var mouse_x_list = [];
											var mouse_y_list = [];
											var distance = [];
											var dis_mean, dis_std, dis_min, dis_max, dis_range, dis_slope;

											for (let z = 0; z < step_mouse_movement.length; z++) {
												if (step_mouse_movement[z].x != -1) {
													mouse_x_list.push(step_mouse_movement[z].x);
													mouse_y_list.push(step_mouse_movement[z].y);
													var a = step_mouse_movement[z].x - target.x;
													var b = step_mouse_movement[z].y - target.y;
													var dist = Math.sqrt(a*a + b*b);
													distance.push(dist);
												} else { // if x and y are -1 replace with a very large number (1000,1000) to indicate it has not moved yet
													mouse_x_list.push(1000);
													mouse_y_list.push(1000);
													var a = 1000 - target.x;
													var b = 1000 - target.y;
													var dist = Math.sqrt(a*a + b*b);
													distance.push(dist);
												}
											}

											if (distance.length >= 2) {
												dis_mean = math.mean(distance);
												dis_std = math.std(distance);
												dis_min = math.min(distance);
												dis_max = math.max(distance);
												dis_range = dis_max - dis_min;
												dis_means[instalments_played-1] = dis_mean;
												dis_stds[instalments_played-1] = dis_std;
												dis_mins[instalments_played-1] = dis_min;
												dis_maxs[instalments_played-1] = dis_max;
												dis_ranges[instalments_played-1] = dis_range;

												var x_values = [];
												var y_values = distance;
												for (var r = 0; r < distance.length; r++) {
													x_values[r] = r;
												}
												var x_mean = x_values.reduce((a, b) => a + b, 0) / x_values.length;
												var y_mean = y_values.reduce((a, b) => a + b, 0) / y_values.length;
												var slope_numerator = 0, slope_denominator = 0;
												for (var ri = 0; ri < x_values.length; ri++) {
												  slope_numerator += (x_values[ri] - x_mean) * (y_values[ri] - y_mean);
												  slope_denominator += Math.pow((x_values[ri] - x_mean), 2);
												}
												dis_slope = slope_numerator / slope_denominator;
												dis_slopes[instalments_played-1] = dis_slope;
											}

											var distance_travelled = 0;
											var previous_direction_x = '0';
											var direction_change_x = 0;
											var previous_direction_y = '0';
											var direction_change_y = 0;
											var mad_list = [];

											for (var q = 1; q < mouse_x_list.length; q++) {
												if (mouse_x_list[q] != 1000) {
													var point1_t = [mouse_x_list[q-1], mouse_y_list[q-1]];
													var point2_t = [mouse_x_list[q], mouse_y_list[q]];
													if (point2_t[0] - point1_t[0] != 0) {
														if (point2_t[0] > point1_t[0]) {
															if (previous_direction_x != 'plus') {
																direction_change_x = direction_change_x + 1;
																previous_direction_x = 'plus';
																direction_change_xs[instalments_played-1] = direction_change_x;
															}
														} else {
															if (previous_direction_x != 'minus') {
																direction_change_x = direction_change_x + 1;
																previous_direction_x = 'minus';
																direction_change_xs[instalments_played-1] = direction_change_x;
															}
														}
													}
													if (point2_t[1] - point1_t[1] != 0) {
														if (point2_t[1] > point1_t[1]) {
															if (previous_direction_y != 'plus') {
																direction_change_y = direction_change_y + 1;
																previous_direction_y = 'plus';
																direction_change_ys[instalments_played-1] = direction_change_y;
															}
														} else {
															if (previous_direction_y != 'minus') {
																direction_change_y = direction_change_y + 1;
																previous_direction_y = 'minus';
																direction_change_ys[instalments_played-1] = direction_change_y;
															}
														}
													}
													var tx = point2_t[0] - point1_t[0];
													var ty = point2_t[1] - point1_t[1];
													var dist_t = Math.sqrt(tx*tx + ty*ty);
													distance_travelled = distance_travelled + dist_t;
													var mad_distance = math.mad([1000, 1000], [target.x, target.y], [mouse_x_list[q], mouse_y_list[q]]);
													mad_list.push(mad_distance);
													distance_travelleds[instalments_played-1] = distance_travelled;
												}
											}

											var velocity = 0;
											if (mouse_x_list.length > 0) {
												velocity = distance_travelled / mouse_x_list.length;
												velocitys[instalments_played-1] = velocity;
											}

											var vertices = {};
											vertices.x = mouse_x_list;
											vertices.x.push(target.x);
											vertices.y = mouse_y_list;
											vertices.y.push(target.y);
											var auc = 0;
											for (var i = 0, l = vertices.x.length; i < l; i++) {
												var addX = vertices.x[i];
												var addY = vertices.y[i == vertices.x.length - 1 ? 0 : i + 1];
												var subX = vertices.x[i == vertices.x.length - 1 ? 0 : i + 1];
												var subY = vertices.y[i];
												auc += (addX * addY * 0.5);
												auc -= (subX * subY * 0.5);
												aucs[instalments_played-1] = auc;
											}

											var meanad, maxad;
											if (mad_list.length > 0) {
												meanad = math.mean(mad_list);
												maxad = math.max(mad_list);
											} else {
												meanad = 0;
												maxad = 0;
											}
											meanads[instalments_played-1] = meanad;
											maxads[instalments_played-1] = maxad;

											var features = [mouse_moved, dis_mean, dis_std, dis_min, dis_max, dis_range, dis_slope, distance_travelled, velocity, direction_change_x, direction_change_y, auc, meanad, maxad];
											features = features.concat(bert_letter[instalments_played-1]);

											prediction = new RandomForestClassifier1().predict(features);
											predictions[instalments_played-1] = prediction;
										}

										if (prediction == 0 && mouse_moved == 1 && stop_instalments == 0) { //predicted that user will do not-correct
											// define which no file will be played and load no files (hm, no, notthisone)
											var no_num = Math.floor(Math.random() * 3 + 1);
											var no_file = '';
											if (no_num == 1) {
												no_file = '../resources/audio/hm.mp3';
											} else if (no_num == 2) {
												no_file = '../resources/audio/no.mp3';
											} else {
												no_file = '../resources/audio/notthisone.mp3';
											}
											no_audio = new Audio(no_file);
											no_audio.oncanplaythrough = (event) => {
												no_audio.play();
											};

										} else if (prediction == 1 && mouse_moved == 1 && stop_instalments == 0) { //predicted that user will do correct
											// define which no file will be played and load yes files (yeah, yes, yup)
											var yes_num = Math.floor(Math.random() * 3 + 1);
											var yes_file = '';
											if (yes_num == 1) {
												yes_file = '../resources/audio/yeah.mp3';
											} else if (yes_num == 2) {
												yes_file = '../resources/audio/yes.mp3';
											} else {
												yes_file = '../resources/audio/yup.mp3';
											}
											yes_audio = new Audio(yes_file);
											yes_audio.oncanplaythrough = (event) => {
												yes_audio.play();
											};
										}

										// play yes/no and then wait before playing instalment (only in condition1 or condition2 after moving mouse)
										if (mouse_moved == 1) {
											await sleep(1200); // 1.2 seconds set empirically
										}

										// play next instalment
										if (instalments_played == 1 && stop_instalments == 0) {
											instalment2.play();
										} else if (instalments_played == 2 && stop_instalments == 0) {
											instalment3.play();
										} else if (instalments_played == 3 && stop_instalments == 0) {
											instalment4.play();
										} else if (instalments_played == 4 && stop_instalments == 0) {
											instalment5.play();
										}

										if (prediction == 1) {
											stop_instalments = 1;
										}
									}

									instalments_played = instalments_played + 1;
									if (instalments_played < 5 && stop_instalments == 0){
										playInstalment();
									}
								}
								instalment_decision();
							}
							if (instalments_played < 5){
								playInstalment();
							}

						} else { // CONDITION 3 (Tell-Me-More)
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
												tmm_when = mouse_movement.length / 5;
												tmm_whens[instalments_played-1] = tmm_when;
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

				// log instalment data
				this.add_info('instalments_played', instalments_played, 'shape');
				this.add_info('fillers', fillers, 'shape');
				this.add_info('audio_durations', audio_durations, 'shape');
				this.add_info('pause_durations', pause_durations, 'shape');
				if (CONDITION == 2) { // CONDITION 2
					this.add_info('mouse_moveds', mouse_moveds, 'shape');
					mouse_moveds = [-1, -1, -1, -1];
					this.add_info('dis_means', dis_means, 'shape');
					dis_means = [-1, -1, -1, -1];
					this.add_info('dis_stds', dis_stds, 'shape');
					dis_stds = [-1, -1, -1, -1];
					this.add_info('dis_mins', dis_mins, 'shape');
					dis_mins = [-1, -1, -1, -1];
					this.add_info('dis_maxs', dis_maxs, 'shape');
					dis_maxs = [-1, -1, -1, -1];
					this.add_info('dis_ranges', dis_ranges, 'shape');
					dis_ranges = [-1, -1, -1, -1];
					this.add_info('dis_slopes', dis_slopes, 'shape');
					dis_slopes = [-1, -1, -1, -1];
					this.add_info('distance_travelleds', distance_travelleds, 'shape');
					distance_travelleds = [-1, -1, -1, -1];
					this.add_info('velocitys', velocitys, 'shape');
					velocitys = [-1, -1, -1, -1];
					this.add_info('direction_change_xs', direction_change_xs, 'shape');
					direction_change_xs = [-1, -1, -1, -1];
					this.add_info('direction_change_ys', direction_change_ys, 'shape');
					direction_change_ys = [-1, -1, -1, -1];
					this.add_info('aucs', aucs, 'shape');
					aucs = [-1, -1, -1, -1];
					this.add_info('meanads', meanads, 'shape');
					meanads = [-1, -1, -1, -1];
					this.add_info('maxads', maxads, 'shape');
					maxads = [-1, -1, -1, -1];
				}
				if (CONDITION == 3) { // CONDITION 3
					this.add_info('tmm_count', tmm_count, 'shape');
					this.add_info('tmm_whens', tmm_whens, 'shape');
					tmm_whens = [-1, -1, -1, -1];
				}
				if (CONDITION != 3) { // CONDITION 1 or 2
					this.add_info('predictions', predictions, 'shape');
					predictions = [-1, -1, -1, -1];
				}
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
			let test_file = `../resources/audio/intro${CONDITION}.mp3`;
			let test_audio = new Audio(test_file);
			test_audio.oncanplaythrough = (event) => {test_audio.play();};
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
				mouse_movement = self.current_mouse_movement;
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
