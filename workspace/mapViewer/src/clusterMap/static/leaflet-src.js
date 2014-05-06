var addressPoints = [ [56.225833, 43.947470, "Нижний Новгород, 40 лет Победы ул., 7"],
 [56.284709, 44.051747, "Нижний Новгород, 60-летия Октября б-р, 2а, САЮС"],
 [56.324461, 44.001890, "Нижний Новгород, Агрономов ул, 77"],
 [56.283754, 43.947767, "Нижний Новгород, Адмирала Макарова ул., 16-40"],
 [56.346541, 43.929773, "Нижний Новгород, Акимова ул., 50"],
 [56.324646, 44.005241, "Нижний Новгород, Алексеевская ул., 1"],
 [56.325100, 44.006004, "Нижний Новгород, Алексеевская ул., 6/16"],
 [56.323183, 44.005124, "Нижний Новгород, Алексеевская ул., 8а1"],
 [56.264752, 43.998414, "Нижний Новгород, Анкудиновское ш, 184"],
 [56.269351, 43.991784, "Нижний Новгород, Анкудиновское ш, 3а"],
 [56.264752, 43.998414, "Нижний Новгород, Анкудиновское ш, 85"],
 [56.335061, 43.826844, "Нижний Новгород, Аральская ул., 23"],
 [56.298247, 43.990113, "Нижний Новгород, Артельная ул., 3"],
 [56.305869, 43.922740, "Нижний Новгород, Артемовская ул., 30"],
 [56.324461, 44.001890, "Нижний Новгород, Аэропорт ул., 1"],
 [56.324461, 44.001890, "Нижний Новгород, Б. Корнилова ул., 5/1"],
 [56.324461, 44.001890, "Нижний Новгород, Б. Корнилова ул., 6/1"],
 [56.323912, 44.027762, "Нижний Новгород, Б.Печерская ул., 123"],
 [56.326742, 44.015419, "Нижний Новгород, Б.Печерская ул., 4"],
 [56.323073, 44.028813, "Нижний Новгород, Б.Печерская ул., 45"],
 [56.325844, 44.014898, "Нижний Новгород, Б.Печерская ул., 5/9"],
 [56.324461, 44.002447, "Нижний Новгород, Б.Покровская ул., 11"],
 [56.324117, 44.001360, "Нижний Новгород, Б.Покровская ул., 13"],
 [56.319349, 43.995835, "Нижний Новгород, Б.Покровская ул., 37"],
 [56.317223, 43.993922, "Нижний Новгород, Б.Покровская ул., 51а"],
 [56.309289, 43.986673, "Нижний Новгород, Б.Покровская ул., 88"],
 [56.318047, 43.995252, "Нижний Новгород, Б.Покровская, ул., 43"],
 [56.324461, 44.001890, "Нижний Новгород, Базарова ул., 5"],
 [56.240573, 43.832800, "Нижний Новгород, Базарова ул., пер. Бакинский 7, Магазин №114"],
 [56.335231, 43.842745, "Нижний Новгород, Баранова ул., 34"],
 [56.331463, 43.850722, "Нижний Новгород, Баранова ул., 5а СПАР"],
 [56.333140, 43.847047, "Нижний Новгород, Баранова ул., 66"],
 [56.334557, 43.847578, "Нижний Новгород, Баранова ул., Баранова, 9"],
 [56.369362, 43.822919, "Нижний Новгород, Баренца ул., 4"],
 [56.281216, 43.951531, "Нижний Новгород, Баумана, 48"],
 [56.279242, 43.951414, "Нижний Новгород, Баумана, 50"],
 [56.209150, 43.803937, "Нижний Новгород, Безводная ул., 14"],
 [56.290060, 43.983690, "Нижний Новгород, Бекетова ул, 1"],
 [56.290245, 43.994883, "Нижний Новгород, Бекетова ул, 11/1"],
 [56.291978, 44.004298, "Нижний Новгород, Бекетова ул, 34"],
 [56.292468, 43.986322, "Нижний Новгород, Бекетова ул, 4б"],
 [56.290554, 43.991640, "Нижний Новгород, Бекетова ул, 5"],
 [56.292193, 44.009795, "Нижний Новгород, Бекетова ул., 33"],
 [56.291978, 44.004298, "Нижний Новгород, Бекетова ул., 34"],
 [56.293132, 44.012787, "Нижний Новгород, Бекетова ул., 50"],
 [56.293697, 44.020970, "Нижний Новгород, Бекетова ул., 55"],
 [56.293956, 44.023728, "Нижний Новгород, Бекетова ул., 61"],
 [56.294251, 44.027762, "Нижний Новгород, Бекетова ул., 69"],
 [56.291733, 43.985083, "Нижний Новгород, Бекетова ул., 4, ост., Связной"],
 [56.291623, 43.986736, "Нижний Новгород, Бекетова, 6"],
 [56.310552, 43.995539, "Нижний Новгород, Белинского ул, 32"],
 [56.312005, 44.005232, "Нижний Новгород, Белинского ул, 35"],
 [56.316025, 44.019883, "Нижний Новгород, Белинского ул, 61"],
 [56.318870, 44.028049, "Нижний Новгород, Белинского ул.,  85, Саюс."],
 [56.318970, 44.025516, "Нижний Новгород, Белинского ул., 124"],
 [56.308270, 43.988820, "Нижний Новгород, Белинского ул., 26/5, Связной"],
 [56.308261, 43.986574, "Нижний Новгород, Белинского ул., 4"],
 [56.314896, 44.013308, "Нижний Новгород, Белинского ул., 53"],
 [56.316025, 44.019883, "Нижний Новгород, Белинского ул., 61"],
 [56.316813, 44.020449, "Нижний Новгород, Белинского ул., 63"],
 [56.316813, 44.020449, "Нижний Новгород, Белинского ул., 71"],
 [56.330944, 43.873341, "Нижний Новгород, Березовская, 101"],
 [56.334482, 43.871015, "Нижний Новгород, Березовская, 104а"],
 [56.326997, 43.873404, "Нижний Новгород, Березовская, 94"],
 [56.337217, 43.873404, "Нижний Новгород, Березовская, Березовская, 114"],
 [56.337217, 43.873404, "Нижний Новгород, Березовская, Березовская, 114/1"],
 [56.338075, 43.872649, "Нижний Новгород, Березовская, Березовская, 120"],
 [56.285059, 44.073594, "Нижний Новгород, Богдановича ул., 1А Spar"],
 [56.295140, 44.041515, "Нижний Новгород, Богородского ул.,  5/5"],
 [56.324461, 44.001890, "Нижний Новгород, Большая Покровка ул., 93"],
 [56.324461, 44.001890, "Нижний Новгород, Большая Покровка ул., д.12, Связной"],
 [56.232959, 44.006966, "Нижний Новгород, Борисова ул., 64"],
 [56.297958, 44.072525, "Нижний Новгород, Бринского ул., 1а"],
 [56.265057, 43.882971, "Нижний Новгород, Бурденко ул., 18"],
 [56.333310, 43.876054, "Нижний Новгород, Буревестника, 15"],
 [56.265437, 43.896096, "Нижний Новгород, Бусыгина пр, 20 А"],
 [56.266917, 43.893643, "Нижний Новгород, Бусыгина пр, 24"],
 [56.324461, 44.001890, "Нижний Новгород, Бусыгина ул, 17"],
 [56.324461, 44.001890, "Нижний Новгород, Бусыгина ул, 24"],
 [56.312455, 44.019964, "Нижний Новгород, Ванеева ул., 14"],
 [56.294716, 44.034086, "Нижний Новгород, Ванеева ул., 189"],
 [56.310842, 44.020252, "Нижний Новгород, Ванеева ул., 23"],
 [56.300425, 44.031705, "Нижний Новгород, Ванеева ул., 2588"],
 [56.304136, 44.028328, "Нижний Новгород, Ванеева ул., 48"],
 [56.349215, 43.872757, "Нижний Новгород, Васенко ул., 4"],
 [56.233729, 43.873871, "Нижний Новгород, Веденяпина ул.,  15, Саюс"],
 [56.237947, 43.866757, "Нижний Новгород, Веденяпина ул., 2"],
 [56.237947, 43.866757, "Нижний Новгород, Веденяпина ул., 2б"],
 [56.237627, 43.868778, "Нижний Новгород, Веденяпина ул., д.1, Связной"],
 [56.315141, 43.941424, "Нижний Новгород, Витебская ул., 1"],
 [56.314687, 43.940580, "Нижний Новгород, Витебская ул., 5"],
 [56.312834, 43.941020, "Нижний Новгород, Витебская ул., 6"],
 [56.311881, 43.939709, "Нижний Новгород, Витебская, 15"],
 [56.319584, 44.010999, "Нижний Новгород, Володарского ул., 1"],
 [56.318950, 44.009247, "Нижний Новгород, Володарского ул., 11"],
 [56.311856, 43.943877, "Нижний Новгород, Вольская ул., 4"],
 [56.235686, 43.952528, "Нижний Новгород, Гагарина проспект, 105"],
 [56.235010, 43.951638, "Нижний Новгород, Гагарина проспект, 105 А"],
 [56.259418, 43.973512, "Нижний Новгород, Гагарина проспект, 156, Продмаг"],
 [56.238997, 43.961457, "Нижний Новгород, Гагарина проспект, 186"],
 [56.307407, 43.986340, "Нижний Новгород, Гагарина проспект, 2"],
 [56.235045, 43.954962, "Нижний Новгород, Гагарина проспект, 202"],
 [56.300675, 43.983609, "Нижний Новгород, Гагарина проспект, 21"],
 [56.232333, 43.950587, "Нижний Новгород, Гагарина проспект, 214"],
 [56.299616, 43.985128, "Нижний Новгород, Гагарина проспект, 22"],
 [56.299616, 43.985128, "Нижний Новгород, Гагарина проспект, 22"],
 [56.230192, 43.947066, "Нижний Новгород, Гагарина проспект, 222"],
 [56.228190, 43.945323, "Нижний Новгород, Гагарина проспект, 228"],
 [56.298397, 43.980780, "Нижний Новгород, Гагарина проспект, 23"],
 [56.298397, 43.980780, "Нижний Новгород, Гагарина проспект, 23"],
 [56.219297, 43.938595, "Нижний Новгород, Гагарина проспект, 236, SPAR"],
 [56.296299, 43.983124, "Нижний Новгород, Гагарина проспект, 23в SPAR"],
 [56.294955, 43.974959, "Нижний Новгород, Гагарина проспект, 25 б"],
 [56.293467, 43.979432, "Нижний Новгород, Гагарина проспект, 27, Ока"],
 [56.295260, 43.983924, "Нижний Новгород, Гагарина проспект, 38, Продмаг"],
 [56.292952, 43.983277, "Нижний Новгород, Гагарина проспект, 44"],
 [56.305579, 43.984391, "Нижний Новгород, Гагарина проспект, 5"],
 [56.290709, 43.982792, "Нижний Новгород, Гагарина проспект, 50"],
 [56.274424, 43.978866, "Нижний Новгород, Гагарина проспект, 98, к-тр Электрон"],
 [56.230192, 43.947066, "Нижний Новгород, Гагарина проспект, вл.222, Связной"],
 [56.304810, 43.985370, "Нижний Новгород, Гагарина проспект, д.10 ТЦ Гагаринский, Связной"],
 [56.263247, 43.974123, "Нижний Новгород, Гагарина проспект, Продмаг, п. Черепичный"],
 [56.263247, 43.974123, "Нижний Новгород, Гагарина проспект, ТЦ агаринский, 105А, SPAR"],
 [56.280626, 43.982567, "Нижний Новгород, Гагарина проспект., 70"],
 [56.362611, 43.816747, "Нижний Новгород, Героев Космоса ул., 52"],
 [56.258223, 43.931292, "Нижний Новгород, Героя Попова, 35"],
 [56.324461, 44.001890, "Нижний Новгород, Героя Старикова ул., 5 а"],
 [56.323333, 43.986322, "Нижний Новгород, Гоголя ул., 45А"],
 [56.237106, 43.967889, "Нижний Новгород, Голованова Маршала ул., 13"],
 [56.230302, 43.955169, "Нижний Новгород, Голованова ул., 63"],
 [56.289440, 43.952249, "Нижний Новгород, Голубева ул., 1 Spar"],
 [56.325464, 43.948297, "Нижний Новгород, Гордеевская ул., 1"],
 [56.327156, 43.941335, "Нижний Новгород, Гордеевская ул., 105"],
 [56.324351, 43.945826, "Нижний Новгород, Гордеевская ул., 2"],
 [56.323927, 43.945817, "Нижний Новгород, Гордеевская ул., 2а"],
 [56.325634, 43.944802, "Нижний Новгород, Гордеевская ул., 67"],
 [56.294056, 43.869990, "Нижний Новгород, Гороховецкая ул., 48"],
 [56.314008, 43.991443, "Нижний Новгород, Горького пл., 1/61"],
 [56.314008, 43.991443, "Нижний Новгород, Горького пл., 4/2"],
 [56.314008, 43.991443, "Нижний Новгород, Горького пл., д.2 пом.7, Связной"],
 [56.320258, 44.031624, "Нижний Новгород, Горького ул., 193, SPAR"],
 [56.313204, 43.988415, "Нижний Новгород, Горького ул., 74"],
 [56.290769, 43.952177, "Нижний Новгород, Даргомыжского ул, 23/1 Андреевский"],
 [56.267982, 43.871491, "Нижний Новгород, Дворовая ул.,  36 к.2"],
 [56.267652, 43.868400, "Нижний Новгород, Дворовая ул., 6"],
 [56.306048, 44.065581, "Нижний Новгород, Деловая, 17"],
 [56.323822, 43.994659, "Нижний Новгород, Добролюбова ул, 9 spar"],
 [56.317318, 43.945674, "Нижний Новгород, Долгополова ул., 49"],
 [56.317318, 43.945674, "Нижний Новгород, Долгополова ул., 49"],
 [56.318166, 44.046366, "Нижний Новгород, Донецкая ул., 5"],
 [56.324461, 44.001890, "Нижний Новгород, Доскино с-хоз, 1"],
 [56.324461, 44.001890, "Нижний Новгород, Доскино с-хоз, остановка кольцо"],
 [56.261583, 43.877042, "Нижний Новгород, Дьяконова ул., 11"],
 [56.261583, 43.877042, "Нижний Новгород, Дьяконова ул., 11а"],
 [56.262617, 43.880977, "Нижний Новгород, Дьяконова ул., 17"],
 [56.259878, 43.879378, "Нижний Новгород, Дьяконова ул., 18"],
 [56.336179, 43.936672, "Нижний Новгород, Есенина ул., 25"],
 [56.332187, 43.946940, "Нижний Новгород, Есенина ул., 3"],
 [56.336453, 43.930959, "Нижний Новгород, Есенина ул., 44"],
 [56.354532, 43.862957, "Нижний Новгород, Ефремова ул, 23"],
 [56.236606, 43.959319, "Нижний Новгород, Жукова ул., 1"],
 [56.230032, 43.952510, "Нижний Новгород, Жукова ул., 20"],
 [56.235315, 43.957585, "Нижний Новгород, Жукова ул., 7"],
 [56.367627, 43.803039, "Нижний Новгород, Зайцева ул., 12"],
 [56.373734, 43.801377, "Нижний Новгород, Зайцева ул., 31"],
 [56.322819, 43.981175, "Нижний Новгород, Заломова ул., 2"],
 [56.322819, 43.981175, "Нижний Новгород, Заломова ул., 4"],
 [56.285283, 43.940158, "Нижний Новгород, Заречный б-р, тр. Остановка"],
 [56.283620, 43.941469, "Нижний Новгород, Заречный булв., 5"],
 [56.311586, 43.925255, "Нижний Новгород, Зеленодольская ул., 52"],
 [56.325739, 43.940517, "Нижний Новгород, Зимина, 12"],
 [56.324461, 44.001890, "Нижний Новгород, Ивлеева, 38А, Spar"],
 [56.300989, 44.049348, "Нижний Новгород, Ивлиева ул., 1"],
 [56.288091, 44.053624, "Нижний Новгород, Ивлиева ул., 23"],
 [56.291823, 44.052843, "Нижний Новгород, Ивлиева ул., 30/1"],
 [56.317647, 44.018293, "Нижний Новгород, Ижорская ул., 5А Spar"],
 [56.317797, 44.018823, "Нижний Новгород, Ижорская ул., 8"],
 [56.315490, 43.987212, "Нижний Новгород, Ильинская ул, 100"],
 [56.309559, 43.983151, "Нижний Новгород, Ильинская ул, 151"],
 [56.325310, 43.991766, "Нижний Новгород, Ильинская ул, 29"],
 [56.314856, 43.986241, "Нижний Новгород, Ильинская ул, 93"],
 [56.244305, 43.863226, "Нижний Новгород, Ильича пр., 1"],
 [56.245050, 43.856309, "Нижний Новгород, Ильича пр., 21"],
 [56.246376, 43.844658, "Нижний Новгород, Ильича пр., 39/2"],
 [56.307252, 43.944730, "Нижний Новгород, Июльских дней, 1/2"],
 [56.284859, 44.079720, "Нижний Новгород, Казанское ш., 10"],
 [56.284859, 44.079720, "Нижний Новгород, Казанское ш., 10/1"],
 [56.284859, 44.079720, "Нижний Новгород, Казанское ш., 10/2"],
 [56.288521, 44.073127, "Нижний Новгород, Казанское ш., 15"],
 [56.285858, 44.075354, "Нижний Новгород, Казанское ш., 23а"],
 [56.273930, 44.084373, "Нижний Новгород, Казанское ш., 433"],
 [56.294476, 44.077295, "Нижний Новгород, Казанское ш., 4А"],
 [56.293402, 44.076935, "Нижний Новгород, Казанское ш., 6 а"],
 [56.273930, 44.084373, "Нижний Новгород, Казанское ш., 85"],
 [56.305204, 43.849500, "Нижний Новгород, Камчатский пер., 1"],
 [56.304410, 43.847784, "Нижний Новгород, Камчатский пер., 2"],
 [56.343882, 43.932064, "Нижний Новгород, Карла Маркса ул, 20"],
 [56.343798, 43.938909, "Нижний Новгород, Карла Маркса ул, 22"],
 [56.339582, 43.942368, "Нижний Новгород, Карла Маркса ул, 23"],
 [56.344591, 43.924734, "Нижний Новгород, Карла Маркса ул., 3"],
 [56.343404, 43.932980, "Нижний Новгород, Карла Маркса ул., 49"],
 [56.343882, 43.927105, "Нижний Новгород, Карла Маркса ул., 7а"],
 [56.343882, 43.927105, "Нижний Новгород, Карла Маркса ул., д.7а, Связной"],
 [56.291554, 44.072480, "Нижний Новгород, Касьянова ул., 2"],
 [56.291599, 44.068150, "Нижний Новгород, Касьянова ул., 35"],
 [56.244900, 43.981678, "Нижний Новгород, Кащенко ул., 15"],
 [56.247846, 43.864439, "Нижний Новгород, Кирова пр., 1"],
 [56.247846, 43.871185, "Нижний Новгород, Кирова пр., остановка"],
 [56.323403, 44.010487, "Нижний Новгород, Ковалихинская ул., 2"],
 [56.321616, 44.018725, "Нижний Новгород, Ковалихинская ул., 30"],
 [56.318820, 44.043204, "Нижний Новгород, Ковровская ул., 47"],
 [56.290849, 44.045378, "Нижний Новгород, Козицкого, 4"],
 [56.290285, 44.043752, "Нижний Новгород, Козицкого 3, Минимаркет напротив "],
 [56.275674, 43.933816, "Нижний Новгород, Комарова ул., 1"],
 [56.279492, 43.933043, "Нижний Новгород, Комарова ул., 4"],
 [56.338709, 43.881157, "Нижний Новгород, Коминтерна ул., 10, Андреевский"],
 [56.347799, 43.870934, "Нижний Новгород, Коминтерна ул., 105"],
 [56.350223, 43.868382, "Нижний Новгород, Коминтерна ул., 117"],
 [56.337347, 43.879764, "Нижний Новгород, Коминтерна ул., 12"],
 [56.350083, 43.867367, "Нижний Новгород, Коминтерна ул., 168"],
 [56.337796, 43.875937, "Нижний Новгород, Коминтерна ул., 23"],
 [56.345698, 43.873665, "Нижний Новгород, Коминтерна ул., 4/2"],
 [56.345254, 43.872775, "Нижний Новгород, Коминтерна ул., 63"],
 [56.350223, 43.868382, "Нижний Новгород, Коминтерна ул., д.117, Связной"],
 [56.317537, 43.952330, "Нижний Новгород, Коммунистическая ул, 42"],
 [56.299451, 43.942538, "Нижний Новгород, Комсомольская площадь, 1"],
 [56.296084, 43.943634, "Нижний Новгород, Комсомольская площадь, 2"],
 [56.299451, 43.942538, "Нижний Новгород, Комсомольская площадь, Комсомольская площадь, 1, Связной"],
 [56.253122, 43.852410, "Нижний Новгород, Комсомольская ул., 74"],
 [56.297158, 43.946419, "Нижний Новгород, Комсомольское ш., 2а"],
 [56.324461, 44.001890, "Нижний Новгород, Коноваленко ул., 4"],
 [56.363464, 43.815624, "Нижний Новгород, Кораблестроителей пр., 15А"],
 [56.361025, 43.809534, "Нижний Новгород, Кораблестроителей пр., 35"],
 [56.361678, 43.807414, "Нижний Новгород, Кораблестроителей пр., 36 к. 2 пом. 3"],
 [56.279527, 43.990275, "Нижний Новгород, Корейский пер., 10"],
 [56.310747, 43.994210, "Нижний Новгород, Короленко ул., 19"],
 [56.308955, 43.990679, "Нижний Новгород, Костина ул., 13"],
 [56.312754, 43.991398, "Нижний Новгород, Костина ул., 2"],
 [56.311526, 43.991452, "Нижний Новгород, Костина ул., 4"],
 [56.247966, 43.851827, "Нижний Новгород, Краснодонцев ул,  14"],
 [56.254667, 43.852006, "Нижний Новгород, Краснодонцев ул, 19"],
 [56.254977, 43.855141, "Нижний Новгород, Краснодонцев ул, 28"],
 [56.308810, 43.982226, "Нижний Новгород, Красносельская ул., 26"],
 [56.308950, 43.980007, "Нижний Новгород, Красносельская ул., 35"],
 [56.325504, 43.869990, "Нижний Новгород, Красных зорь ул., 17"],
 [56.333395, 43.867394, "Нижний Новгород, Красных зорь ул., 25"],
 [56.323737, 43.871994, "Нижний Новгород, Красных зорь ул., 52"],
 [56.279637, 43.987257, "Нижний Новгород, Крылова, 6"],
 [56.303252, 43.873683, "Нижний Новгород, Кузбасская ул., 5"],
 [56.326942, 43.914322, "Нижний Новгород, Куйбышева ул., 3"],
 [56.327660, 43.914807, "Нижний Новгород, Куйбышева ул., 5а"],
 [56.326268, 43.913729, "Нижний Новгород, Куйбышева ул., Куйбышева, 1"],
 [56.307322, 43.988954, "Нижний Новгород, Кулибина ул, 3"],
 [56.348138, 43.855222, "Нижний Новгород, Культуры ул., 14"],
 [56.348013, 43.854018, "Нижний Новгород, Культуры ул., 20"],
 [56.349300, 43.860819, "Нижний Новгород, Культуры ул., 3"],
 [56.234835, 43.956453, "Нижний Новгород, Лебедева ул., 1"],
 [56.325953, 43.959409, "Нижний Новгород, Ленина пл., 54"],
 [56.292488, 43.938613, "Нижний Новгород, Ленина проспект, 1"],
 [56.297918, 43.938658, "Нижний Новгород, Ленина проспект, 10"],
 [56.249692, 43.876611, "Нижний Новгород, Ленина проспект, 113, Связной"],
 [56.294856, 43.934490, "Нижний Новгород, Ленина проспект, 13"],
 [56.294171, 43.933977, "Нижний Новгород, Ленина проспект, 15"],
 [56.293377, 43.937598, "Нижний Новгород, Ленина проспект, 16 Б"],
 [56.300490, 43.939682, "Нижний Новгород, Ленина проспект, 2"],
 [56.290509, 43.932971, "Нижний Новгород, Ленина проспект, 24"],
 [56.289720, 43.929639, "Нижний Новгород, Ленина проспект, 27"],
 [56.287717, 43.930977, "Нижний Новгород, Ленина проспект, 32"],
 [56.287507, 43.928785, "Нижний Новгород, Ленина проспект, 33"],
 [56.284879, 43.929764, "Нижний Новгород, Ленина проспект, 36"],
 [56.283625, 43.927959, "Нижний Новгород, Ленина проспект, 38, г-ца Заречная"],
 [56.283545, 43.925057, "Нижний Новгород, Ленина проспект, 41"],
 [56.283545, 43.925057, "Нижний Новгород, Ленина проспект, 41/1"],
 [56.299216, 43.937274, "Нижний Новгород, Ленина проспект, 5"],
 [56.276489, 43.922461, "Нижний Новгород, Ленина проспект, 54 А лит. А"],
 [56.276154, 43.919533, "Нижний Новгород, Ленина проспект, 57"],
 [56.265457, 43.911430, "Нижний Новгород, Ленина проспект, 79"],
 [56.287717, 43.930977, "Нижний Новгород, Ленина проспект, 32"],
 [56.299216, 43.937274, "Нижний Новгород, Ленина проспект, д.5, Связной"],
 [56.235491, 43.861618, "Нижний Новгород, Лескова ул., 22"],
 [56.236561, 43.866451, "Нижний Новгород, Лескова ул., 3"],
 [56.233509, 43.856534, "Нижний Новгород, Лескова ул., 40"],
 [56.232098, 43.852931, "Нижний Новгород, Лескова ул., 54"],
 [56.235591, 43.863765, "Нижний Новгород, Лескова ул., 9, SPAR"],
 [56.314352, 43.945808, "Нижний Новгород, Литвинова ул., 1"],
 [56.301998, 43.936196, "Нижний Новгород, Литературная ул, 20А"],
 [56.296279, 44.066704, "Нижний Новгород, Лопатина ул., 6"],
 [56.321471, 43.952132, "Нижний Новгород, Луначарского ул, 14"],
 [56.321561, 43.950417, "Нижний Новгород, Луначарского ул, 56"],
 [56.324461, 44.001890, "Нижний Новгород, Лысково Крылова, 28"],
 [56.267332, 43.874231, "Нижний Новгород, Львовская, 1"],
 [56.267332, 43.879917, "Нижний Новгород, Львовская, 2"],
 [56.267992, 43.873027, "Нижний Новгород, Львовская, 3б"],
 [56.268231, 43.882226, "Нижний Новгород, Львовская, 4"],
 [56.267452, 43.874904, "Нижний Новгород, Львовская, 5"],
 [56.270021, 43.886933, "Нижний Новгород, Львовская, 8"],
 [56.307462, 43.985020, "Нижний Новгород, Лядова пл, 2"],
 [56.324461, 44.001890, "Нижний Новгород, М.Горького ул., 144"],
 [56.324461, 44.001890, "Нижний Новгород, М.Тореза ул., 31 а"],
 [56.231343, 43.836402, "Нижний Новгород, Маковского ул, 12"],
 [56.233399, 43.835235, "Нижний Новгород, Маковского ул, 21"],
 [56.233399, 43.835235, "Нижний Новгород, Маковского ул, д.21, Связной"],
 [56.328304, 43.927878, "Нижний Новгород, Маршала Казакова ул., 12"],
 [56.316514, 43.984346, "Нижний Новгород, Маслякова ул, 33"],
 [56.281581, 43.983439, "Нижний Новгород, Медицинская ул, 1"],
 [56.281581, 43.983439, "Нижний Новгород, Медицинская ул, 1"],
 [56.282016, 43.986223, "Нижний Новгород, Медицинская ул, 12"],
 [56.336688, 43.841083, "Нижний Новгород, Мечникова ул., 19"],
 [56.336673, 43.836789, "Нижний Новгород, Мечникова ул., 43"],
 [56.337197, 43.836277, "Нижний Новгород, Мечникова ул., 69"],
 [56.334148, 43.951378, "Нижний Новгород, Мещерский б-р, 3А (выход)"],
 [56.334148, 43.951378, "Нижний Новгород, Мещерский б-р, Мещерский б-р, 3А"],
 [56.333968, 43.944569, "Нижний Новгород, Мещерский б-р., 3"],
 [56.222761, 43.835738, "Нижний Новгород, Минеева ул., 29"],
 [56.326732, 44.008241, "Нижний Новгород, Минина пл, 2"],
 [56.327546, 44.007199, "Нижний Новгород, Минина пл, 31а"],
 [56.326732, 44.008241, "Нижний Новгород, Минина пл, Кремль, корп.2"],
 [56.328529, 44.015697, "Нижний Новгород, Минина ул, 14 Речной"],
 [56.326632, 44.022893, "Нижний Новгород, Минина ул, 22"],
 [56.327800, 44.015553, "Нижний Новгород, Минина ул, 7"],
 [56.243019, 43.838280, "Нижний Новгород, Молодёжный пр., 1Б"],
 [56.244145, 43.832073, "Нижний Новгород, Молодёжный пр., 23"],
 [56.242399, 43.847326, "Нижний Новгород, Молодёжный пр., 33"],
 [56.243840, 43.841873, "Нижний Новгород, Молодёжный пр., 40"],
 [56.242664, 43.835621, "Нижний Новгород, Молодежный пр., 9"],
 [56.236301, 43.879423, "Нижний Новгород, Монастырка, 21"],
 [56.232549, 43.834597, "Нижний Новгород, Мончегорская ул., 1"],
 [56.233699, 43.827635, "Нижний Новгород, Мончегорская ул., 15а"],
 [56.236211, 43.829099, "Нижний Новгород, Мончегорская ул., 34"],
 [56.234115, 43.831031, "Нижний Новгород, Мончегорская ул., 6а к2"],
 [56.323697, 43.948135, "Нижний Новгород, Московское ш.,  1 (384 км)"],
 [56.322524, 43.936241, "Нижний Новгород, Московское ш., 019"],
 [56.323697, 43.948135, "Нижний Новгород, Московское ш., 1"],
 [56.316878, 43.911052, "Нижний Новгород, Московское ш., 105а"],
 [56.316384, 43.908861, "Нижний Новгород, Московское ш., 109"],
 [56.323273, 43.942197, "Нижний Новгород, Московское ш., 11"],
 [56.314232, 43.872605, "Нижний Новгород, Московское ш., 191 (Расколбас)"],
 [56.323493, 43.947587, "Нижний Новгород, Московское ш., 2"],
 [56.323373, 43.934723, "Нижний Новгород, Московское ш., 21"],
 [56.314607, 43.869254, "Нижний Новгород, Московское ш., 213б"],
 [56.309973, 43.802823, "Нижний Новгород, Московское ш., 352"],
 [56.315920, 43.878884, "Нижний Новгород, Московское ш., 392 км.+ 600 м."],
 [56.314397, 43.901333, "Нижний Новгород, Московское ш., 84"],
 [56.323433, 43.945350, "Нижний Новгород, Московское ш., 9"],
 [56.323433, 43.945350, "Нижний Новгород, Московское ш., д.9, Связной"],
 [56.315920, 43.878884, "Нижний Новгород, Московское ш., Кафе Стрелец"],
 [56.310577, 43.809884, "Нижний Новгород, Московское ш., 312"],
 [56.324461, 44.001890, "Нижний Новгород, Мостоотряд, 26"],
 [56.348317, 43.866757, "Нижний Новгород, Мочалова ул., 2"],
 [56.324461, 44.001890, "Нижний Новгород, Н.Сусловой ул., 12/1"],
 [56.324461, 44.001890, "Нижний Новгород, Н.Сусловой ул., 21"],
 [56.324461, 44.001890, "Нижний Новгород, Н.Сусловой ул., 5"],
 [56.324461, 44.001890, "Нижний Новгород, Н.Сусловой, 25"],
 [56.324461, 44.001890, "Нижний Новгород, Н.Сусловой,1"],
 [56.325659, 43.986646, "Нижний Новгород, наб. Федоровского, 7"],
 [56.334398, 43.912229, "Нижний Новгород, Народная ул., 1"],
 [56.335221, 43.915544, "Нижний Новгород, Народная ул., 18"],
 [56.334827, 43.915885, "Нижний Новгород, Народная ул., 21"],
 [56.334398, 43.912229, "Нижний Новгород, Народная ул., 3"],
 [56.334557, 43.913020, "Нижний Новгород, Народная ул., 5"],
 [56.226934, 43.837373, "Нижний Новгород, Народная ул., Народная, 34"],
 [56.226934, 43.837373, "Нижний Новгород, Народная ул., Народная, 50"],
 [56.289785, 43.994928, "Нижний Новгород, Нартова ул, 1"],
 [56.289131, 43.995997, "Нижний Новгород, Нартова ул, 2"],
 [56.281696, 43.992557, "Нижний Новгород, Нартова ул, 31"],
 [56.287337, 43.996240, "Нижний Новгород, Нартова, 4А (выход)"],
 [56.325649, 44.015580, "Нижний Новгород, Нестерова ул., 9"],
 [56.320463, 43.987760, "Нижний Новгород, Нижегородская ул, 6"],
 [56.321736, 43.989377, "Нижний Новгород, Нижегородская ул., 3"],
 [56.327715, 43.982433, "Нижний Новгород, Нижне-Волжская набережная, 23"],
 [56.282930, 44.062077, "Нижний Новгород, Нижнепечерская, 6"],
 [56.324461, 44.001890, "Нижний Новгород, НН_Москва-Киров, 81км, SPAR-АЗС"],
 [56.313169, 43.991434, "Нижний Новгород, Новая ул., Новополевая, п.Гнилицы SPAR"],
 [56.268181, 43.914197, "Нижний Новгород, Новикова Прибоя ул., 188"],
 [56.275579, 43.905510, "Нижний Новгород, Новикова Прибоя ул., 25"],
 [56.379092, 43.801368, "Нижний Новгород, Новые пески 1"],
 [56.378813, 43.799949, "Нижний Новгород, Новые пески 2"],
 [56.361195, 43.851135, "Нижний Новгород, Ногина, 1"],
 [56.306712, 43.983142, "Нижний Новгород, Окский съезд, 2"],
 [56.305569, 43.936690, "Нижний Новгород, Октябрьской Революции ул., 39"],
 [56.307117, 43.936906, "Нижний Новгород, Октябрьской Революции ул., 66"],
 [56.301259, 43.937975, "Нижний Новгород, Октябрьской Революции ул., 71"],
 [56.249507, 43.866801, "Нижний Новгород, Октября пр., 12"],
 [56.252597, 43.865607, "Нижний Новгород, Октября пр., 19"],
 [56.243645, 43.864331, "Нижний Новгород, Октября пр., 2"],
 [56.253082, 43.867062, "Нижний Новгород, Октября пр., 20"],
 [56.248016, 43.865966, "Нижний Новгород, Октября пр., д.1 пл.Автозаводского универмага, Связной"],
 [56.245485, 43.864888, "Нижний Новгород, Октября пр., д.6 ост. пав. пр-т Кирова Связной"],
 [56.260403, 43.982549, "Нижний Новгород, Октября ул, 11"],
 [56.260553, 43.980456, "Нижний Новгород, Октября ул, 5"],
 [56.341014, 43.840445, "Нижний Новгород, Островского ул., 7"],
 [56.319869, 44.009193, "Нижний Новгород, Ошарская ул.,  15"],
 [56.320957, 44.009544, "Нижний Новгород, Ошарская ул., 18"],
 [56.304955, 44.020108, "Нижний Новгород, Ошарская ул., 77А"],
 [56.305339, 44.020018, "Нижний Новгород, Ошарская ул., 95"],
 [56.310767, 44.033187, "Нижний Новгород, Панина ул., 19"],
 [56.307946, 44.024968, "Нижний Новгород, Панина ул., 1а"],
 [56.308835, 44.024977, "Нижний Новгород, Панина ул., 4"],
 [56.310567, 43.933897, "Нижний Новгород, Парк Первого Мая ул., 1"],
 [56.266922, 43.914143, "Нижний Новгород, Переходникова ул., д.3, м.Пролетарская, Связной"],
 [56.322964, 44.044300, "Нижний Новгород, Печерский съезд, 62"],
 [56.326433, 44.014125, "Нижний Новгород, Пискунова ул., 47"],
 [56.379735, 43.795960, "Нижний Новгород, Планетная, 35б"],
 [56.379506, 43.794092, "Нижний Новгород, Планетная, 36а"],
 [56.260338, 43.857953, "Нижний Новгород, Плотникова, 3"],
 [56.260338, 43.857953, "Нижний Новгород, Плотникова, 3, Семейный"],
 [56.325324, 44.004190, "Нижний Новгород, Покровская ул, 2а"],
 [56.316893, 44.023495, "Нижний Новгород, Полтавская ул., 5"],
 [56.319549, 43.890724, "Нижний Новгород, пр. Героев, 27 (м-н Продукты)"],
 [56.324461, 44.001890, "Нижний Новгород, Продукты"],
 [56.340340, 43.924186, "Нижний Новгород, Пролетарская ул., 2"],
 [56.323937, 43.879791, "Нижний Новгород, Просвещенская ул., д.1, Связной"],
 [56.281336, 43.924015, "Нижний Новгород, пр-т Ленина, 45/3"],
 [56.275364, 43.919586, "Нижний Новгород, пр-т Ленина, 59"],
 [56.243530, 43.838226, "Нижний Новгород, пр-т Молодежный 1а"],
 [56.232439, 43.861933, "Нижний Новгород, Прыгунова ул., 13"],
 [56.233779, 43.860127, "Нижний Новгород, Прыгунова ул., 7"],
 [56.320293, 44.043464, "Нижний Новгород, Радужная ул., 2"],
 [56.321621, 43.945763, "Нижний Новгород, Революции пл., 4"],
 [56.320592, 43.944101, "Нижний Новгород, Революции пл., 9"],
 [56.320592, 43.944101, "Нижний Новгород, Революции пл., д.9, Связной"],
 [56.320592, 43.944101, "Нижний Новгород, Революции пл., д.9, Связной"],
 [56.311551, 44.023989, "Нижний Новгород, Республиканская 20/1"],
 [56.318965, 44.050273, "Нижний Новгород, Родионова ул, 17А"],
 [56.302288, 44.076603, "Нижний Новгород, Родионова ул, 193"],
 [56.316264, 44.069129, "Нижний Новгород, Родионова ул.,  163А, SPAR"],
 [56.320752, 44.044093, "Нижний Новгород, Родионова ул., 1"],
 [56.319534, 44.052295, "Нижний Новгород, Родионова ул., 15"],
 [56.312445, 44.073683, "Нижний Новгород, Родионова ул., 184"],
 [56.307931, 44.073504, "Нижний Новгород, Родионова ул., 187"],
 [56.302288, 44.076603, "Нижний Новгород, Родионова ул., 193"],
 [56.317832, 44.060559, "Нижний Новгород, Родионова ул., 23"],
 [56.320752, 44.044093, "Нижний Новгород, Родионова ул., д.1, Связной"],
 [56.329013, 43.991694, "Нижний Новгород, Рождественская ул.,  14"],
 [56.327401, 43.985702, "Нижний Новгород, Рождественская ул.,  32"],
 [56.327930, 43.985801, "Нижний Новгород, Рождественская ул., 39"],
 [56.283864, 44.041173, "Нижний Новгород, Рокоссовского ул., 17"],
 [56.283829, 44.038982, "Нижний Новгород, Рокоссовского ул., 19"],
 [56.283829, 44.038982, "Нижний Новгород, Рокоссовского ул., 19"],
 [56.282745, 44.045674, "Нижний Новгород, Рокоссовского ул., 4"],
 [56.282880, 44.039646, "Нижний Новгород, Рокоссовского ул., 8"],
 [56.346686, 43.852330, "Нижний Новгород, Рыбакова ул., 9"],
 [56.320602, 43.866218, "Нижний Новгород, Рябцева, 19"],
 [56.319614, 43.867691, "Нижний Новгород, Рябцева, 22"],
 [56.321216, 43.866280, "Нижний Новгород, Рябцева, 23"],
 [56.322554, 43.866954, "Нижний Новгород, Рябцева, 34"],
 [56.325729, 43.867475, "Нижний Новгород, Рябцева, 46"],
 [56.239403, 43.836950, "Нижний Новгород, Сазанова ул., 2"],
 [56.238197, 43.834211, "Нижний Новгород, Сазанова ул., 8"],
 [56.324461, 44.001890, "Нижний Новгород, Самочкина героя Сов.Союза ул., 29/2"],
 [56.293382, 43.986331, "Нижний Новгород, Светлогорская ул., 2б"],
 [56.293757, 43.987553, "Нижний Новгород, Светлогорская ул., 4"],
 [56.353191, 43.833627, "Нижний Новгород, Светлоярская ул., 18"],
 [56.359180, 43.827123, "Нижний Новгород, Светлоярская ул., 45"],
 [56.318017, 44.013074, "Нижний Новгород, Свободы пл., 3"],
 [55.725721, 45.867682, "Нижний Новгород, Село Борчурманы"],
 [56.324461, 44.001890, "Нижний Новгород, Сенная ул., 4"],
 [56.234870, 43.852159, "Нижний Новгород, Смирнова ул., 1"],
 [56.240418, 43.867619, "Нижний Новгород, Смирнова ул., 8"],
 [56.235355, 43.852357, "Нижний Новгород, Смирнова, 14"],
 [56.276698, 43.912930, "Нижний Новгород, Снежная ул, 29а"],
 [56.296574, 44.035864, "Нижний Новгород, Советская площадь, 1"],
 [56.296109, 44.038209, "Нижний Новгород, Советская площадь, 3"],
 [56.296179, 44.036888, "Нижний Новгород, Советская площадь, д.2, Связной"],
 [56.325464, 43.957801, "Нижний Новгород, Советская ул., 12"],
 [56.325464, 43.957801, "Нижний Новгород, Советская ул., д.12, Связной"],
 [56.256758, 43.865391, "Нижний Новгород, Советской Армии ул., 1"],
 [56.331069, 43.964134, "Нижний Новгород, Совнаркомовская ул., 2"],
 [56.329212, 43.961044, "Нижний Новгород, Совнаркомовская ул., 26"],
 [56.329587, 43.906229, "Нижний Новгород, Сормовское шоссе, 1"],
 [56.320907, 43.927150, "Нижний Новгород, Сормовское шоссе, 15А"],
 [56.319769, 43.926629, "Нижний Новгород, Сормовское шоссе, 20"],
 [56.326977, 43.910496, "Нижний Новгород, Сормовское шоссе, 3"],
 [56.328075, 43.906750, "Нижний Новгород, Сормовское шоссе, 42"],
 [56.325988, 43.912696, "Нижний Новгород, Сормовское шоссе, 5"],
 [56.323592, 43.919065, "Нижний Новгород, Сормовское шоссе, 9"],
 [56.319769, 43.926629, "Нижний Новгород, Сормовское шоссе, д.20, Связной"],
 [56.351460, 43.837570, "Нижний Новгород, Станиславского ул., 7Б"],
 [56.331872, 43.880420, "Нижний Новгород, Страж революции, 20"],
 [56.335615, 43.880968, "Нижний Новгород, Страж революции, 7/5"],
 [56.330440, 43.968383, "Нижний Новгород, Стрелка ул., 1"],
 [56.311666, 44.000111, "Нижний Новгород, Студеная ул, 58"],
 [56.309938, 44.000704, "Нижний Новгород, Студеная ул, 68 а"],
 [56.304061, 43.981705, "Нижний Новгород, Студенческая ул., 15а"],
 [56.278113, 43.981076, "Нижний Новгород, Сурикова ул., 1а"],
 [56.278013, 43.982154, "Нижний Новгород, Сурикова ул., 3"],
 [56.277608, 43.982145, "Нижний Новгород, Сурикова. 6"],
 [56.358342, 43.853605, "Нижний Новгород, Сутырина ул, 1"],
 [56.310253, 43.813981, "Нижний Новгород, Тепличная,  4"],
 [56.324461, 44.001890, "Нижний Новгород, Терешкова ул.,  6б"],
 [56.307412, 44.001755, "Нижний Новгород, Тимирязева ул., 11а"],
 [56.306013, 43.995557, "Нижний Новгород, Тимирязева ул., 3"],
 [56.311741, 43.881821, "Нижний Новгород, Тихорецкая ул., 9"],
 [56.326178, 43.931813, "Нижний Новгород, Тонкинская ул., 12"],
 [56.292812, 43.942134, "Нижний Новгород, Трамвайная ул., 79"],
 [56.232704, 43.945683, "Нижний Новгород, Тропинина, 18"],
 [56.232348, 43.945179, "Нижний Новгород, Тропинина, 22"],
 [56.305869, 43.922740, "Нижний Новгород, ул. Артемовская, 30 (м-н Продукты)"],
 [56.291978, 44.004298, "Нижний Новгород, ул. Бекетова, 34 (м-н Продукты)"],
 [56.238372, 43.978471, "Нижний Новгород, ул. Кащенко, 25"],
 [56.281581, 43.983439, "Нижний Новгород, ул. Медицинская, 1 (м-н Продукты)"],
 [56.301259, 43.937975, "Нижний Новгород, ул. Октябрьской Революции, 71 (м-н Кулинария)"],
 [56.213981, 43.826090, "Нижний Новгород, ул. Патриотов, Больница 13"],
 [56.311581, 44.054882, "Нижний Новгород, ул. Яблоневая, 26 Бизнес-Центр"],
 [56.291254, 43.990428, "Нижний Новгород, ул.Бекетова, 8"],
 [56.314107, 44.024887, "Нижний Новгород, ул.Генкиной, 51"],
 [56.351530, 43.866999, "Нижний Новгород, ул.Коминтерна, 172а (м-н Продукты)"],
 [56.307501, 43.933915, "Нижний Новгород, ул.Октябрьской Революции, 33 (м-н Продукты)"],
 [56.274774, 43.937571, "Нижний Новгород, ул.Перекопская, 16а"],
 [56.326857, 44.009319, "Нижний Новгород, Ульянова ул., 6 В"],
 [56.324461, 44.001890, "Нижний Новгород, УПН"],
 [56.315091, 44.045827, "Нижний Новгород, Усилова ул., 1/2"],
 [56.314003, 44.052914, "Нижний Новгород, Усилова ул., 11"],
 [56.315096, 44.049052, "Нижний Новгород, Усилова ул., 2"],
 [56.268246, 43.925991, "Нижний Новгород, Успенского . ул., 16а"],
 [56.325659, 43.986646, "Нижний Новгород, Федоровского наб., 7"],
 [56.341168, 43.828470, "Нижний Новгород, Федосеенко, 21"],
 [56.340146, 43.826844, "Нижний Новгород, Федосеенко, 28"],
 [56.342795, 43.812876, "Нижний Новгород, Федосеенко, 64"],
 [56.320198, 43.946446, "Нижний Новгород, Фильченкова ул., 10"],
 [56.317957, 43.944416, "Нижний Новгород, Фильченкова ул., 7"],
 [56.317957, 43.944416, "Нижний Новгород, Фильченкова, 7, к-р Канавинский"],
 [56.318206, 44.052537, "Нижний Новгород, Фруктовая, 3"],
 [56.316629, 44.055052, "Нижний Новгород, Фруктовая, 31"],
 [56.317522, 44.056032, "Нижний Новгород, Фруктовая, 4"],
 [56.226744, 43.890786, "Нижний Новгород, Фучика ул., 10"],
 [56.330944, 43.840113, "Нижний Новгород, Чаадаева ул, 28"],
 [56.329806, 43.858411, "Нижний Новгород, Чаадаева ул, 3"],
 [56.244385, 43.857270, "Нижний Новгород, Челюскинцев ул, 4"],
 [56.244125, 43.855842, "Нижний Новгород, Челюскинцев ул, 5"],
 [56.337232, 43.842610, "Нижний Новгород, Черняховского ул., 19"],
 [56.315685, 43.941056, "Нижний Новгород, Чкалова ул., 10"],
 [56.316639, 43.941182, "Нижний Новгород, Чкалова ул., 11"],
 [56.315460, 43.940598, "Нижний Новгород, Чкалова ул., 12"],
 [56.315106, 43.940077, "Нижний Новгород, Чкалова ул., 16"],
 [56.316384, 43.942970, "Нижний Новгород, Чкалова ул., 4"],
 [56.313633, 43.936008, "Нижний Новгород, Чкалова ул., 49"],
 [56.319449, 43.944910, "Нижний Новгород, Чкалова ул., д.1 Связной"],
 [56.330385, 43.920629, "Нижний Новгород, Шаляпина ул., 20"],
 [56.247851, 43.985927, "Нижний Новгород, Шапошникова ул, 18"],
 [56.293472, 44.043491, "Нижний Новгород, Шишкова ул., 8"],
 [56.295580, 43.924267, "Нижний Новгород, Шлиссельбургская ул., 3"],
 [56.251037, 43.986062, "Нижний Новгород, Эпроновская 4а"],
 [56.288836, 44.003085, "Нижний Новгород, Юбилейная ул., 5"],
 [56.219527, 43.860729, "Нижний Новгород, Южное шоссе, 10"],
 [56.226919, 43.865930, "Нижний Новгород, Южное шоссе, 30/2"],
 [56.226724, 43.866801, "Нижний Новгород, Южное шоссе, 30В"],
 [56.220874, 43.857046, "Нижний Новгород, Южное шоссе, 4"],
 [56.230052, 43.870844, "Нижний Новгород, Южное шоссе, 45"],
 [56.229601, 43.872847, "Нижний Новгород, Южное шоссе, 52А"],
 [56.225228, 43.857648, "Нижний Новгород, Южное шоссе, д.7 ост. Старых производственников, Связной"],
 [56.227825, 43.863855, "Нижний Новгород, Южное шоссе, Южное шоссе, 35, Связной"],
 [56.312475, 44.054298, "Нижний Новгород, Яблоневая ул., 1"],
 [56.311821, 44.055897, "Нижний Новгород, Яблоневая ул., 26"],
 [56.331813, 43.861636, "Нижний Новгород, Ярошенко ул., 28"]
 ];