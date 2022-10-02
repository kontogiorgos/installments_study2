var bert_W = [];
bert_W[0] = [0.023162121,0.07470402,0.025439609,0.030205876,0.04568919,0.0063736304,0.07214676,-0.0027630564,0.08689391,0.038528398,-0.018942295,-0.07170033,0.005071266,-0.03107052,0.0472019,-0.032045495,0.0067073293,-0.049184084,0.026915433,-0.038566265,0.010463754,0.070296355,-0.017447842,-0.025774382,-0.055684928,-0.032486062,0.024992287,-0.054883607,-0.049989548,-0.014708934,-0.016730139,-0.07331067,-0.031201653,0.05650386,-0.067568354,0.06398772,0.010889196,-0.045054384,0.1421047,0.0004839218,0.06605507,-0.0596217,-0.014802554,-0.08992568,-0.0007622211,0.017438352,0.021565631,-0.02550026,0.0706049,0.026632302,-0.031990245,-0.07746924,-0.060080737,-0.03910956,-0.053547777,-0.05965599,-0.014392731,0.017554361,-0.002156347,0.007890014,0.07763006,-0.021436635,0.0009508124,0.07038602,-0.008227974,-0.025283335,-0.021953136,0.0012530229,-0.04761008,0.049825016,-0.015943065,-0.024264716,0.00016210762,-0.010764122,-0.043206226,-0.036871918,0.04884714,0.004269293,0.06795497,-0.036155693,-0.0064117955,-0.024506051,0.019008862,-0.009500157,-0.035896808,0.023459204,0.055421073,-0.05461231,0.002291834,-0.018931136,0.0071993163,-0.028637469,-0.022845563,0.03523058,0.13646801,-0.0009843451,0.018235203,0.04557177,-0.06909861,0.13032974,-0.032800104,0.11138265,-0.07286401,-0.067014016,0.0179925,0.0123409135,-0.13193819,-0.013172258,0.026344826,0.019642523,-0.04672163,-0.044113923,0.123560034,0.0026633644,0.07080798,-0.00876464,-0.033208814,-0.09273006,0.0392208,-0.064950146,0.016532091,-0.07139811,0.05701244,0.090355106,-0.007427723,-0.031188434,-0.040773198,-4.8032525e-33,0.023529759,-0.054944225,0.07513426,-0.03032617,0.03149583,0.028506989,-0.06498451,-0.009880834,0.055028033,0.067393705,0.0033826826,-0.025702566,-0.047654428,-0.119031414,0.048647013,0.018748801,-0.059229463,0.026846522,-0.040394075,0.0005242635,-0.023900798,0.01797147,-0.025593031,0.030314775,-0.020157509,0.04996793,-0.02087684,-0.09803234,-0.02854395,0.03353491,-0.07346515,0.03196627,-0.1029766,-0.06920314,-0.12742007,-0.021336578,-0.080286905,-0.031553004,-0.03782651,-0.030145725,0.082513146,0.02301453,0.08496884,-0.013124913,0.0006074759,0.09730218,-0.00921864,0.0801797,0.033543654,0.033693876,-0.031764206,0.018596487,0.022990456,-0.004521396,-0.00015983003,0.020686703,0.009244967,-0.02962719,-0.0018191916,0.0024644544,0.12012556,-0.043433525,0.04528033,0.01465453,-0.041212298,0.010493523,-0.04334355,0.018919328,0.04145617,0.015789963,-0.020376407,-0.01159057,0.055887245,-0.062367402,-0.070903145,-0.033103008,-0.004457332,0.0007033184,-0.004752691,-0.017311918,0.021445079,0.08552123,0.026580093,-0.020412872,0.10524616,-0.037611794,-0.011610477,-0.07012062,0.021548314,0.04735718,-0.056310818,-0.019161496,-0.06923719,-0.02208847,-0.06536277,2.8054374e-33,-0.025641583,-0.123966396,0.004148821,0.04730455,-0.022080524,-0.058775444,0.06699325,0.12561016,-0.024606591,0.0985575,-0.030376898,0.032634065,0.045455147,0.0083616,0.14117637,-0.0820951,0.0800928,0.015436669,0.03446986,0.04559924,0.018593214,-0.08346235,0.074568644,0.029476184,-0.03375573,0.06725265,-0.0031083603,-0.031341743,-0.06683181,-0.06956998,-0.009997647,0.040137175,-0.07053492,-0.029866144,-0.04895228,-0.07598591,-0.0068421243,0.042242877,-0.024635522,-0.0029171358,0.04622865,0.0044985707,-0.10951308,0.13764128,0.07857062,-0.015488608,-0.059828814,0.05344635,-0.04057665,0.03526557,0.031578932,-0.054435413,0.059444193,-0.054771975,-0.012664437,0.019545438,-0.037186712,0.009620641,0.055816326,0.042613547,-0.06649273,-0.008141426,-0.035610195,0.034064226,-0.06201195,0.02455024,-0.100255676,0.038443677,-0.0031833984,0.046582166,0.018970821,-0.005193569,-0.05189812,-0.036671262,0.02746331,0.058402076,0.03423289,-0.02063547,0.027244452,0.013728148,-0.1057962,0.02665025,4.050622e-05,-0.015476316,0.02352531,0.0177466,0.05090765,0.04526177,-0.013106697,-0.031948652,-0.044821575,-0.010678137,-0.0012669254,-0.028947692,0.02662756,-1.9159343e-08,-0.10146717,0.05561464,0.116361864,-0.016084768,0.056814637,0.060582105,-0.0496533,0.014449577,-0.024979917,-0.054372225,-0.0035668807,0.010883575,0.009442859,0.129205,0.037179027,0.03782446,0.0054949597,-0.07688142,-0.042606633,0.02608,-0.03875879,0.045109354,0.065626,-0.04613688,0.029381325,0.020792525,0.01184176,0.059303597,-0.029481221,0.0011723287,-0.04313551,-0.016692016,-0.0006242201,-0.0042857565,0.0012857729,0.046204116,0.004699353,0.02511843,0.012793874,-0.080533765,-0.03469673,-0.061248563,0.070109256,0.003029147,0.07199934,0.08885707,-0.027139764,0.07478588,-0.049831484,-0.04966563,-0.080629125,0.009550265,-0.004576599,0.0060474426,0.06679219,-0.10043811,-0.04488994,0.015869293,-0.069714546,0.100528285,0.08335688,0.009332199,0.02885821,9.0121044e-05];
bert_W[1] = [-0.007862031,-0.020634444,-0.16981503,-0.05611009,0.06525373,-0.035111964,0.026044203,0.0074111694,0.05180114,-0.012407134,0.0120693045,-0.017962737,-0.04033743,-0.017378604,-0.0068559223,0.03187108,-0.100181475,-0.012066585,0.012432675,-0.030401642,0.07142557,0.02307266,0.013305329,-0.015409149,-0.023444135,0.06909985,-0.060183693,0.0010718107,0.034495648,-0.045491222,0.010401063,0.023601938,0.003660856,0.092820525,0.042137776,-0.061967447,-0.023890702,0.09459144,0.021792974,0.046835616,0.04943404,0.01608586,-0.011138212,0.003533955,-0.008234862,0.038127974,-0.1340415,0.01885833,0.036034774,-0.026080657,0.035566673,-0.051196806,-0.049919646,0.06820988,0.028173577,0.0011385352,-0.061508488,-0.03693167,0.034135368,0.064272046,0.093684345,0.020198299,0.0017131285,0.03176515,0.087733366,-0.032468345,-0.1318671,-0.017187992,-0.06405685,0.027444825,0.08791599,-0.011173314,0.036636192,-0.008315973,0.09147693,-0.05889842,-0.0077502117,0.007792179,-0.009642682,-0.0022384566,-0.0853,-0.055183895,-0.046006043,0.044942748,-0.030640952,-0.04343378,-0.012476918,-0.06202813,0.004018186,0.076642424,-0.018653799,0.050592955,0.02388165,0.072113834,-0.009840213,0.004554824,-0.014422819,-0.024496248,-0.049970612,0.103361994,0.034516983,-0.023710685,-0.054086223,0.025618797,0.01832164,-0.031585913,-0.0059534,0.06534326,-0.0386331,-0.07805118,0.009990079,-0.029014288,0.02915207,-0.02187531,-0.12674363,-0.06305051,0.051035564,0.00345286,0.12055643,0.04149089,0.018352026,0.022620728,0.0024244708,-0.16197197,-0.054389425,-0.019702243,-0.001995806,-5.089748e-33,0.06907054,0.01588556,-0.0386906,-0.014520644,0.05069331,0.052726112,-0.09006775,-0.07935021,-0.036099758,0.061070643,0.032654963,-0.15380427,0.046489507,0.08746143,0.020358972,-0.059006814,0.002941886,-0.008262186,-0.09556986,-0.0011274822,-0.004015686,0.05469564,0.022706058,-0.037230965,0.0067488845,0.1027675,-0.052062344,-0.060487535,0.051695082,0.07047018,-0.018406823,0.034343302,-0.057160173,-0.0018454385,-0.0013633248,0.12542675,0.031100286,-0.085809946,-0.0072781034,-0.027101016,-0.09379046,-0.08346963,0.018083308,-0.082995474,-0.01123577,0.011614546,0.045490254,-0.046403956,-0.056738224,0.054161366,0.07041351,-0.016222436,0.07595579,-0.016288433,-0.018282758,-0.05096943,-0.006689463,0.05854848,0.039272595,0.045340616,-0.008615518,-0.03023578,-0.029380454,-0.022453034,0.010886534,0.074211195,0.0035145702,0.030905938,0.07042991,-0.025036406,-0.06661267,0.0015826777,0.022666449,0.06870883,-0.05240016,-0.013775078,-0.09029131,0.023977373,-0.013757435,0.049907662,-0.08859702,-0.025006514,0.007647735,0.01850841,-0.049328603,-0.051048227,0.010092422,-0.063158505,0.023629416,-0.020701595,-0.017198883,0.04213013,0.061158612,-0.037456144,0.03421098,2.951956e-33,-0.02369821,0.032878477,0.011697937,-0.0006212903,0.0020883468,-0.064042814,0.05437941,0.09894501,-0.060200904,0.08075679,0.0058282968,0.040597893,-0.03911259,0.010351685,0.102917135,0.08112262,0.036098313,-0.021855306,-0.01698521,0.010635395,0.017053612,-0.050531376,-0.0500859,0.09516438,-0.01622206,0.057042807,0.05046153,-0.05530088,0.056336172,-0.020795895,0.017176723,-0.11215155,-0.03869778,-0.06897845,0.019643249,0.04480755,0.009565591,-0.018382575,-0.009926754,-0.06358859,-0.016155317,0.010694025,0.063707665,0.073439464,-0.04468056,0.047242712,0.07372559,0.09899416,-0.09516694,-0.00016707768,-0.03806714,-0.04171047,0.009639803,-0.0024358274,-0.011928641,-0.043590304,-0.038355786,0.029972833,-0.008753316,0.034371734,0.012515265,-0.008939464,0.0015615071,0.01945587,0.050211653,0.011089693,-0.06783099,-0.037641454,-0.116265215,0.026077772,-0.0159515,0.14235905,-0.078015596,-0.07367898,0.0361148,0.016289374,0.038549278,0.0030399242,0.01461559,-0.036226593,-0.04517552,-0.06174886,-0.028256087,0.037328947,0.062062256,-0.042525273,0.003141752,0.027822157,-0.024646427,-0.066262774,-0.0146586355,0.028581694,-0.031931575,0.07162263,-0.034403414,-2.1482341e-08,-0.02229965,-0.012351502,0.0011219961,-0.08196847,-0.056680992,0.072182015,0.15773919,-0.010243263,-0.0025972533,-0.036789812,0.07409233,0.054206483,-0.0514117,-0.019806596,0.036391415,-0.06073173,-0.059906952,-0.0008621497,-0.012255144,0.021523586,-0.04787603,-0.040264513,0.0029045306,0.015093597,0.017784769,0.023302514,0.0039693513,0.005939141,0.048719134,-0.011329361,0.09356372,0.03079984,0.047668345,0.013973104,0.043291915,0.073809855,-0.060420234,-0.023214301,0.0037137298,0.015384921,0.04515181,-0.03412557,-0.0038656709,0.023404373,-0.04258128,0.019228473,-0.056784477,6.4319975e-05,-0.06509957,-0.10020237,-0.011498513,-0.04944599,0.057388008,0.045831904,0.037480623,-0.05430668,0.024918258,-0.063173436,0.03624181,-0.012441469,0.04497957,0.0014110993,0.023170866,0.103441946];
bert_W[2] = [-0.07693008,0.058632433,-0.056916323,0.09642164,0.012323905,0.029683793,0.04664425,-0.0378314,0.048576944,0.0076973117,0.056808006,0.018890863,-0.020734996,0.0022477596,-0.04205207,0.088113874,-0.04750674,-0.052051254,-0.07439143,-0.04563803,-0.068278424,0.017759401,0.05518654,0.0013140858,-0.013251503,0.0556982,-0.052996017,0.057064082,0.09123402,-0.04215643,-0.023034675,-0.05085484,0.058067292,0.011431426,-0.028317422,-0.047645677,0.029229619,-0.015168366,0.077104,0.013723897,-0.0029504723,-0.03649866,0.011002769,0.08537196,-0.08779406,-0.002536173,-0.002855034,0.039647073,-0.033388097,0.0879161,0.04467984,-0.0791612,-0.059560567,0.1333895,0.034723807,-0.10272733,0.008961714,0.011744802,0.014296563,-0.06085064,-0.051216636,-0.053426698,-0.03342321,0.07306851,-0.00285976,-0.037512645,-0.051053073,0.036681417,-0.01828545,-0.03707352,0.03402816,-0.0020133366,-0.009404186,-0.026659539,0.039070033,-0.026360722,0.0396307,-0.028164525,0.0863985,0.022499641,0.10320914,0.018148588,-0.016280489,0.019743685,0.040669817,-0.003821593,-0.0766746,0.030970331,0.026504403,-0.004080394,-0.13842872,-0.13500838,-0.048282336,0.046877168,-0.0009264831,-0.006467207,0.05216719,0.021015123,-0.02103429,0.2052805,-0.025989348,-0.040802483,0.016233988,-0.009736773,0.02211852,-0.057132974,-0.058157094,0.10395711,-0.060428344,-0.08972908,-0.04419572,0.039703082,0.004501635,0.06682212,0.06355323,-0.098747745,0.04357528,0.028964818,-0.0025018076,-0.01248138,0.026224699,0.016928067,-0.05211775,-0.006325859,-0.1089573,-0.06732178,0.04175382,-5.2535146e-33,0.08899077,-0.023423437,0.02125308,-0.034816626,0.08320989,0.0063028703,0.018606454,-0.044461727,-0.07089465,-0.0020189844,-0.048398733,0.020819994,-0.039888784,-0.027076934,0.12218883,-0.035324946,-0.048523147,0.06959238,-0.0597528,0.02159844,0.016293764,0.06283103,0.00029412622,0.024154505,-0.08556775,-0.05289322,-0.016646627,-0.014827382,-0.022605097,0.05733502,-0.04647375,-0.022267386,-0.0566477,-0.061591677,-0.016019506,-0.07639298,-0.026984753,-0.046615917,0.024135398,-0.08483472,0.012270212,-0.021743545,-0.01643173,0.11617928,0.09280774,0.038808294,0.055797286,0.055147607,-0.02923904,0.0613428,-0.0063671404,0.015462956,-0.061570894,0.02439783,-0.0058325124,-0.017171916,0.12902558,0.04951308,0.007270598,-0.0060936306,0.02636941,0.088116735,-0.021457067,0.099190705,-0.022772776,-0.0498476,-0.049598906,-0.014972712,-0.036954418,0.022146378,-0.05070495,-0.029574998,0.031124244,0.07235016,0.00812563,0.0032034395,0.045763962,-0.020698303,-0.10320513,-0.025581328,-0.04655237,0.06554769,0.010553111,0.06505349,-0.039754476,-0.014481382,-0.05898742,-0.08208019,0.0057326937,-0.005563205,-0.107957564,0.094807945,0.07255531,-0.041863836,-0.027968189,4.4804305e-33,-0.0022255275,0.020408086,0.017567256,0.0227979,-0.028316418,-0.03587151,-0.009080963,-0.028979627,-0.00903187,0.048859224,0.06919152,-0.07427934,-0.015150049,0.10003592,0.05671088,-0.005374524,0.08785618,-0.056412674,0.037869964,-0.02110744,0.06728307,-0.057441182,-0.051357657,-0.07471994,-0.01382735,0.016083285,0.04525844,0.028631927,-0.013089227,0.022701757,0.012333588,-0.05817576,-0.0026791196,-0.024860794,0.033424918,0.04807825,0.028654745,0.03661162,-0.05519936,-0.032111503,0.060908675,-0.05521881,-0.061841298,0.0932679,-0.025665443,0.017315354,-0.07156675,-0.055371482,0.0044549312,0.054781925,-0.0053235153,0.04038217,-0.034503177,0.024938669,-0.050825167,0.050325524,-0.050309684,-0.029328818,-0.0064333994,0.04777497,-0.021905925,0.055796582,-0.009076824,0.08953279,-0.025766537,-0.0020354497,-0.0031154177,-0.040593106,-0.011015478,-0.030031914,-0.0054801516,0.05746796,-0.067956865,-0.04096773,0.024727602,-0.024179863,0.015713368,0.045729816,-0.042399146,-0.07139828,-0.015706446,-0.01083457,0.022488456,-0.0197889,0.021702293,0.05676464,0.03143076,-0.005087362,-0.027420878,-0.028516673,0.029940547,0.019099023,0.03387257,-0.0754557,0.0199733,-1.3491432e-08,-0.11323655,0.107716694,0.020354182,0.01158921,-0.048756946,0.0046560164,-0.022139572,-0.0788857,-0.0359339,0.091488585,0.01674548,-0.0080556255,-0.021521281,0.026034215,-0.020767061,-0.017990557,-0.108614966,-0.02113244,0.010907205,-0.0018799239,0.024509454,0.0035763087,0.09248558,0.03455312,0.0054458985,0.025579022,-0.007710365,0.0071699605,0.045204297,0.04511558,0.053042624,0.076159954,-0.03155193,0.04302072,-0.077030234,-0.009681536,-0.09646285,0.04209426,-0.020967703,0.07315236,0.012170033,0.057830486,0.031075403,0.055845965,0.015778849,0.051425725,-0.077980034,-0.0041166646,0.018056601,-0.0648865,-0.00073022005,-0.03023986,0.035409935,0.07199842,0.029658454,0.04423936,0.06424795,-0.02396899,-0.105358675,0.0046129315,0.06246415,-0.02920904,0.0682324,0.07315978];
bert_W[3] = [-0.07395029,0.020457743,-0.0025048854,0.010046474,-0.028909959,-0.023728665,-0.088971026,0.058887806,0.044307765,-0.002572429,0.0057182075,0.038584776,0.037313577,-0.011527899,0.0461979,-0.00984174,-0.04786898,0.05172641,-0.025491681,0.00793129,-0.006115725,-0.03290506,0.029597156,0.00023459985,-0.000264919,0.041741423,0.0016661049,0.01612732,0.08024438,-0.015903346,0.034808666,0.14919241,-0.037873026,0.0029505785,-0.038907897,0.043312628,0.04477147,0.06808147,-0.059667476,-0.01724251,-0.0065248283,-0.03799731,0.032347534,0.013430517,0.020985786,0.070302896,-0.0402161,-0.03542167,-0.010763084,0.019355193,-0.07974037,-0.04243182,-0.037083857,0.030279692,0.042133134,0.057601567,0.05027893,-0.02224968,0.021277955,-0.03936308,0.008918724,-0.015946189,-0.04184316,-0.032100156,0.036442257,-0.030961063,-0.008114786,-0.13164043,0.083745725,0.04218547,0.009432641,-0.058918845,0.048986144,0.0007499685,-0.0145933535,-0.039885864,0.0148962755,-0.0010024394,-0.06548055,0.040667906,-0.068397574,-0.0030307022,0.0010717325,0.017390272,-0.019119564,0.022936633,0.027284712,-0.044625197,0.035969917,-0.009838903,-0.03732941,-0.025653392,-0.0069753462,-0.045117833,0.020274729,-0.008569309,-0.060524706,-0.05518177,0.043028988,0.038752634,-0.0314767,0.051759306,0.062205046,-0.020230731,-0.0025727071,-0.06545289,0.08173015,0.07632653,0.062729634,0.055818934,-0.085836425,-0.10494553,0.12628548,0.050740156,0.018832603,0.03989959,-0.09620807,0.010292644,-0.013168161,0.0138777075,0.08115603,0.018925076,0.05096071,0.016153222,-0.05932026,-0.097082645,0.027005782,-3.8527786e-33,0.03027667,0.039259546,0.05071995,-0.018881794,0.05570506,-0.02568521,-0.022262083,-0.021035736,0.054358285,0.04561459,-0.047260392,-0.055219956,-0.025110196,0.0688416,0.023363806,-0.08933886,-0.049752884,0.066815466,-0.094338804,-0.035588022,0.059253864,-0.019692412,0.05002422,-0.04079151,0.06358311,0.02048208,-0.013578634,0.03361664,-0.08425833,-0.030150397,0.0071165697,0.017504647,-0.054394346,-0.0067438995,0.0549281,0.0089549525,0.081667095,-0.06881274,0.015808519,-0.010008083,-0.10585443,-0.06755821,0.005636473,-0.026874287,-0.04053968,0.07356553,-0.016180582,-0.04501679,-0.04962398,0.0287042,0.015257443,0.054212928,0.09670264,-0.08353959,0.06591488,0.008003744,0.052265894,0.009163176,-0.028909056,0.07401865,-0.0045981808,0.030868243,-0.014898824,0.07893956,-0.038581368,-0.013754996,-0.10795671,0.009004423,0.08021653,0.053995647,-0.044705186,0.018136887,0.027609304,0.006674671,0.054054093,-0.03347199,-0.064408064,-0.08440661,0.041136827,-0.06798711,-0.117447875,-0.04907505,-0.023619385,-0.072095826,0.11269197,0.04689688,-0.0015767192,-0.012604528,-0.043314874,-0.044341404,-0.103332035,-0.016765326,-0.028444454,0.02918796,0.026886554,1.6976357e-33,-0.0315067,-0.014450945,0.027500557,0.02627597,0.0049291477,0.032004207,0.050161395,-0.017943438,0.09598578,0.08724799,-0.041254524,0.03804378,-0.043163925,0.011286562,0.14039381,-0.010912614,0.08773859,0.00382801,0.054531366,0.012412851,-0.03252115,0.0007181913,-0.1202817,-0.018785639,-0.051484756,-0.027533276,0.09431752,0.050557893,-0.0094971005,0.042830974,0.025036877,-0.04650772,-0.07039079,-0.05231721,-0.07294689,-0.0018532661,-0.022333432,0.006420333,-0.03532875,-0.10251625,0.014311971,-0.077856034,0.02898744,0.022898674,-0.030331166,-0.007116602,0.0398002,0.08842307,-0.10365834,-0.059253093,0.016536476,-0.0041684937,-0.032294016,0.03612469,0.014352623,0.04342695,-0.080477476,-0.029300898,-0.06091454,-0.052627,0.05278179,0.035445035,0.047836427,0.01693581,0.016000263,0.037195172,-0.032423455,0.005324682,-0.061985623,-0.012996659,-0.040009063,-0.008692334,-0.039931584,0.0052617216,0.054941468,-0.16211572,0.04114867,-0.052097358,-0.0079748165,-0.09887197,-0.014716949,-0.10103383,0.015495121,-0.045260645,-0.06521256,0.034436096,-0.10890413,0.042737048,0.03122167,0.032160625,0.0027162235,0.04020744,0.033839807,0.052624226,0.016517458,-2.1589269e-08,-0.052701075,0.041717973,0.049860783,-0.05730969,0.044407196,0.030441726,0.10734677,0.114330605,-0.008464722,-0.01292941,0.010940195,0.046778034,0.05433729,0.07753742,0.020712651,0.03830392,0.0023031079,0.018704217,-0.032961316,0.05371921,-0.058403507,-0.01382973,-0.022948189,0.009647941,-0.013624293,0.011081525,0.01900798,0.06030524,0.015075343,0.00081844727,0.06468824,0.01175734,0.0128328875,0.07304504,-0.016867857,0.01908543,0.103312664,0.005736244,0.020337133,-0.085538484,-0.013207628,-0.040174007,0.046200648,0.07845673,-0.07316782,-0.0041541667,-0.037751485,-0.050739214,-0.05935038,-0.08710004,0.013010518,0.027832493,0.009464074,0.022336112,0.11497178,0.01330849,-0.061306313,-0.078383625,0.0066478658,0.07066313,0.08790492,0.0038828836,0.13394947,0.0011183154];
bert_W[4] = [0.08900962,-0.00022805303,-0.08915258,-0.049635008,0.0012954223,0.027766582,0.047765393,0.07731597,0.08213604,0.02720529,0.011293361,0.040450595,-0.025396563,0.018192822,-0.056781318,0.03447589,-0.019224044,0.013874339,-0.02089156,0.01817349,0.0032921617,-0.041608468,-0.0011268727,-0.024180735,-0.072779045,-0.010383911,-0.008413254,0.035819877,-0.004797317,-0.062365826,-0.006138531,-0.019117715,0.031257886,0.04570955,-0.039920427,0.0108112255,-0.010225065,0.0027733946,0.10779279,-0.06665414,0.036504876,-0.03173613,-0.0067824665,0.106971495,0.008015432,0.11197052,0.020400807,-0.014295039,0.10657963,-0.044549543,-0.054636393,-0.13766818,-0.033936623,0.055646062,-0.05832995,0.025331158,0.007059506,-0.03478242,0.11292597,-0.041549332,0.035228368,0.0023688776,-0.0011405321,0.058409832,0.013783898,-0.09513173,0.0022868891,0.006104128,-0.09529855,0.055816516,0.04868197,-0.026586797,-0.024917271,-0.099252254,0.054128475,-0.015437982,0.021592611,0.01103703,0.044224504,-0.05295155,-0.030702751,-0.021546047,0.03914454,0.07379792,-0.009160207,0.015641566,-0.003995857,0.082226746,0.003568647,-0.012118979,-0.026818069,0.02037408,0.0052571297,0.07250705,-0.09110602,-0.004274247,-0.041397173,-0.015393074,-0.056521524,0.109159894,0.012157201,0.064384975,0.020306842,-0.022773629,-0.037612416,-0.0360304,0.016517635,0.042506617,-0.029668683,-0.027364554,-0.058164,0.0001453332,0.074049674,0.040426135,0.003492867,-0.06447311,0.006559441,0.042458527,0.024617597,-0.07722774,0.026259752,0.044951998,0.009675595,0.064260386,-0.08721378,0.022985253,0.019151026,-4.4045715e-33,-0.0019042542,-0.01686902,-0.0149759175,0.006227114,0.00372537,-0.036281355,0.0014705536,-0.017499262,-0.0035134861,0.09446289,-0.00902746,-0.044004858,-0.010939025,-0.032987125,0.0602957,-0.025715651,-0.029659688,-0.024234679,-0.14611948,0.043962635,-0.019146618,-0.014093242,0.067194484,0.029446675,0.04857279,0.020653691,-0.077868074,-0.06566728,0.012481663,0.031241778,-0.07396415,-0.036133215,-0.045429744,-0.02923148,-0.03282916,0.05187732,0.059270136,0.021758975,-0.021489896,0.029853038,-0.03523891,-0.030945774,0.01597511,0.016338978,0.049943443,0.01829673,0.057840154,0.05297981,-0.025804056,-0.025940422,-0.044179633,-0.043431856,0.09660072,-0.035336956,0.01538076,-0.040840395,0.055456873,-0.028919857,-0.0058897673,0.011799033,0.04018814,0.008906804,-0.019166153,0.120358385,-0.023165813,0.00084679824,-0.02588252,-0.038879566,0.063721575,-0.07617929,-0.06701918,-0.00834369,0.033627246,0.0848273,-0.13036677,-0.02013924,-0.093798846,-0.098916054,0.012204813,-0.079367206,-0.002690943,0.06277019,-0.057157613,0.014795619,0.12003715,-0.054339536,-0.004973128,-0.06682099,-0.010432045,0.0070746504,-0.1306,-0.009149568,0.079759,0.04313167,-0.020298855,4.0795182e-33,-0.037465304,-0.01637254,0.0030791876,0.063921146,-0.007149767,-0.018335802,0.09456919,-0.03914379,0.010473329,0.0637996,-0.03391965,0.025683112,0.03463055,0.04716533,0.10435007,0.037978206,0.08912119,0.06377852,-0.06550721,-0.11598971,-0.007195217,-0.074827254,0.030611435,0.018164694,0.0064950897,0.058064982,0.087377034,5.069127e-05,-0.10015182,-0.023286514,-0.010196608,-0.051512185,0.0033923916,-0.04081633,-0.08287675,0.060262457,-0.016222637,0.08693642,-0.004004571,0.006547812,0.07767423,0.0360172,-0.054173205,0.12001917,-0.050025273,0.05032794,-0.034572963,0.016813131,-0.0019476281,-0.0025066696,-0.07810807,-0.036252085,0.081449054,-0.051529612,0.016353764,0.07765434,0.0058635594,0.010695878,0.019199675,-0.044582468,0.018931894,0.03434127,0.024062207,-0.010935688,0.08119269,0.07788154,-0.047178242,0.069147155,-0.089662544,0.015069376,-0.063409865,0.066689916,-0.089924745,-0.015932977,-0.044008218,0.09086203,-0.038008753,0.02767621,0.011070558,-0.048032753,-0.11739065,-0.042828396,-0.024971817,-0.020789646,0.010626543,-0.04172366,0.03028321,-0.03839053,0.029212438,-0.12713335,-0.008287929,0.04752765,0.076203294,-0.088253096,-0.027989935,-1.512185e-08,-0.043542862,0.004463101,0.077635,-0.019374063,0.0040773316,0.06435352,0.080405556,-0.03824936,-0.018152177,0.010339312,-0.0091046635,0.023969935,0.027871987,0.07676376,0.104105785,0.07160657,-0.00846635,-0.013320253,-0.08551279,-0.018861642,0.0077200895,0.008016069,0.060803678,0.023450015,-0.014201995,-0.075745575,-0.03506288,0.085951425,0.015849052,0.035303913,0.045794617,-0.005285483,0.06835749,-0.052326396,-0.0061370432,0.040450387,0.0037556663,0.03371262,0.02172454,0.034501858,-0.060922753,-0.06301701,-0.014372805,0.03982025,0.02310848,0.027681107,-0.012435657,0.104644395,-0.03938,-0.079432316,0.010226386,-0.037338242,0.008967433,0.049098667,0.06309006,0.036160406,-0.024522485,-0.015844997,-0.064470924,-0.00039539827,-0.026800534,0.091678984,-0.047755923,0.0026749119];
