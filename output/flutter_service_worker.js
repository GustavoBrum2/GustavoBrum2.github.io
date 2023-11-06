'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "f4ee7c13597588e47c02df51351afafc",
"index.html": "1d22b9f679f7112fe49d0e3fbd9c3273",
"/": "1d22b9f679f7112fe49d0e3fbd9c3273",
"main.dart.js": "0596a054b74a4fd3848d7d5d6db1bb86",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c4596e2188fae8b44f994d377b6a9f63",
".git/config": "d99565435d46605275d30ad8e0cb266f",
".git/objects/0d/bbde7dc3f17d04f3227a7edaef79827b8eeae1": "bda0fd5698b881ae1dd400f5a00309d7",
".git/objects/95/4256de3828471c55d4b7fa94fd6bd023eca9b6": "803750bfd8a4e3a6cade27e81df072ee",
".git/objects/95/b570d87a9b2305659c4192dd25db4a01135f96": "4ff419b5aa9afb862a8d05ce9d394e80",
".git/objects/59/1e495bff0bd00559d9519f1344abce5bf0dca3": "fbb6baffe51c8701136482323643b50f",
".git/objects/0c/43a9b3aba05aa636fc5e44d380ec1a9a62391b": "bbe33e2fe0e99712f58cd0d6009cd53a",
".git/objects/66/0f428c77f677aafa22604b3b9d6a7d5c410c46": "373741c8ec3c8997b65dcbb5ebfcfc6d",
".git/objects/3b/dad14aec4a578bec2dc4e12949860ac9c159de": "8b062143771db712355d71c202ac0d00",
".git/objects/6f/a65840c20cef25c62e2dab614fa22a4d784bb4": "cba7820184ea7acc88eb0559e05c62ac",
".git/objects/03/ac9eb04637d3e07b8c1bc6734e369b6f0582b4": "34841d547ec5435fd39917285d1edadd",
".git/objects/9b/9e82d50a1628bd36a631cc2ad17e8eb518d98a": "a2699d1b3237722cd0b18b6b3f65137a",
".git/objects/9b/9921419d599440eb5b0c94b1156c523eb5f325": "80366ed65980e9c15b662854367cb8ad",
".git/objects/9b/3269431ea49a3a0e01b6520431a56d05990782": "ec1fb923cee85e570afcd11785ee1087",
".git/objects/9e/57fb285ec0738e3aab2a7c3a2a65c12557025c": "5d90890fcb899719e32b38c321380ecd",
".git/objects/9e/d8ecad4dd32711c7d7eb19d944255c1cbfc947": "4ed07a8885d916aa3d56d2e5ed36b1e2",
".git/objects/04/f74822801643a11673a6915db153b625bc2244": "f5bda2e7d6f8bfc77ba258a46ef91ce1",
".git/objects/32/8399f741c74ded791ba588c82feb1619f45bc1": "3f0981021af8bae600f922c84e6360e6",
".git/objects/35/33b1e35714dbe17742d84e6d4ebc721ca333a1": "39b683ea6659c1572bc3aad3103a27b7",
".git/objects/35/a405e308b5b5f0f202a36f9fd8eb71559e0867": "65843c261a4f58ad60b0ce59fe28d283",
".git/objects/69/57514edc34a9222e8d5e200f7166ae6f34180c": "db868c042a0c3bd9a6ae8b86c722c217",
".git/objects/3c/0c8e843128fd95690a9bd6b3e4c949082cd14c": "4ad40a471f18f2cc780d6ba970e5aa4a",
".git/objects/3c/f461dde1a245e0f1b5528a1a8e6997e90968fa": "73a4cbfc9507343a85fa0773b98f7819",
".git/objects/3c/7fc7a3f1a13a04f5975fa226f98e357856cc78": "bbe2f0126b1439f00a46aad2a60b8908",
".git/objects/51/57d9d034755eddf9282dab61498eed340f1ebb": "ac4ec9024ab20812c3a04557d1b722e3",
".git/objects/51/f82047e6c5d6cc96611a82c6f01a029f511287": "52f982cd2fdbaced036aac4df872ac76",
".git/objects/51/17a89c96710c75085d2e43788c74169a300727": "ef099c807bdafb8c43cd43bca4029b37",
".git/objects/51/59aca88b7f6b048c4e3ca6d215ad9b9663a57f": "c63e0ad51bd7a773a5efc70224e82430",
".git/objects/58/209072cf569852cffe82e42e38d4dba1eeeaf1": "56a27cade39f298cae97836f91393d61",
".git/objects/0b/28d46bbe3f3155f3a264db779af50e93a5761b": "f8b257ca8fa19e7aaac94142647b5d3c",
".git/objects/93/83ac2e3b275faa2103024fd15947db47c2a51d": "b6c26d734d7c4e162fc38cb0d4442bba",
".git/objects/0e/af21ef5852ef05bf4cf8c98840e83fccea35e2": "37f3493ea74075cf303d39dc59bd98d3",
".git/objects/0e/e63158dfbef15cdc506dddbb6cbad079e496a1": "cb66d8bd63c3b4ed1100f08b7d87b62d",
".git/objects/0e/7ff73a981b562e8a3a18a5eeae2acb35a2b2ed": "282962bcfa7c66aa5b17a5f841451117",
".git/objects/60/e7824349a33cc3616c3c3d6708a0ae43549f4b": "e8492de77a4313f13f3ee57746699431",
".git/objects/34/cb0cb2929311a728e9f4196debae4d255060d2": "2c326193ee2e11a6ca62b30f4825f9a8",
".git/objects/5a/1a17336244d077f9c2013de6b0998720c0d5b3": "03b91d3e91f6401c72307003858bb171",
".git/objects/5a/5899a349ebe9bcb61488e92254dc79d9b493fb": "0889650a44bb2beb89dd84d27208abc0",
".git/objects/5a/ad9f900eae81c72b62d9f7fe3181c8fdc1b54d": "86f4a6d8f18dbfd602ab8267787a25a5",
".git/objects/05/f97831e303df5aa62acb733bd70ee76a340b23": "fa8c7a412bed022f4db2edaa347df21d",
".git/objects/9c/2f7ddb8ef00d6a495d67fc32bc0f697dff5864": "b8ebb29b747243f6274b7b8b7bb095ad",
".git/objects/9c/c14259009f4b07a504cf41b9ba9d41a1dea1fd": "4a2035a9134485a2f7ad1d937d91c249",
".git/objects/02/9ab687c6254a9971e15f38c478f72f448d0edf": "7de9413d3dbbc60f7b04c62c26043666",
".git/objects/a3/e8d3904017c37d9184b8e2d2b5afc105e6ac4b": "42fa6cf00ad19bd99be898a08c777dcf",
".git/objects/b5/3e1b749ecf39ce83426735a9e1f6561ed863d3": "e6b05a5f7037748c9e9eac3465e7ee5b",
".git/objects/ad/b936e5db86fbb0202ec14e2147366247118626": "b6c8cda837a25a96fe4867bf0603b229",
".git/objects/bb/4007f95dfbbbcd13e90e5fb5f09e5be88d1ac3": "7eb33a72fada631a9b744ebeb01da0c8",
".git/objects/bb/ce52ccfc61ca8a535cd50dbc7bd58c47a7216b": "5d3b95face3a607031f6543e7189d911",
".git/objects/d7/ff30d55b0a54281c7e46c264ff5b08d38da0fa": "2c29cd085aff3b279eb89d3f7007d64e",
".git/objects/d0/4d6358a4993d56c6a7af130e79842c3c5b87a4": "9c7263be371909e7e2c334095d2ccdbf",
".git/objects/df/eed3042b55ff2bb667ca9206b129e591f32b72": "a87297d49ac2fee131c20c29e0c01010",
".git/objects/da/dfea4754ac0f2d9944d3de854e0ac4ce3ca651": "d9ca9dbf72bb7dc08f88b288bcdfe086",
".git/objects/da/d9acd97a57645ce2ebb041205b9404cb69226c": "c441dec8856c110c451d37d84e9f6dd8",
".git/objects/b4/a7409eba998313d8bc26fc45ec992588f675e6": "24fae43f0bd8550035a2ffa4ee175c33",
".git/objects/b4/4c950cbe1dd7e632822618b843dc7b70b9430e": "6fa870add21d32ba8f0a5a67f320b0ef",
".git/objects/a2/9f081e5fe325be3a7135151f00ccb847bc3bd3": "4adee7380afc4f89d8069dfcfa76d6ac",
".git/objects/a2/bc347e339df94dbeeef92ac7cdc59202fa94c9": "421e209c341159e99e9ac7c563306cf8",
".git/objects/a5/1e58b15dbd3f0cfe5748e91e2bbea77e09b297": "ca929975c0fa78dc223a9ab7ca9b372e",
".git/objects/a5/7d908ee92358b4206b6e8f17543a379eb3e300": "2ad7ab549df48c1af6908188edb395a1",
".git/objects/bd/aa2c8905ac51c9b6f774835708a5bddc07de25": "f2db130a40bab2321bad2f3b347a292c",
".git/objects/d1/d64079459edfda37030995c94a8a551b5b619d": "d0cb0ce55b399a1a6b49c6d5a1ad8b37",
".git/objects/d6/88b8ca1d3cf11cae902eb49880f160a3beaa39": "a981c4cd300e90b7868f0d6c6c546d22",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/07c07e2c5e2418dd4010171af1ebfb36f5026e": "ed7d1eda06484dbe166fc3d6a7e49000",
".git/objects/ae/765c5e4f3a5de090bb6380b319e9413faa4889": "cb5fc54c2f91c58a322649f3ba33f9f7",
".git/objects/ab/95d1f46c2c345ca689233338692aab7cf1e64c": "8b0bffc58652a772d695215ff6124959",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/2062afc01d6c0698f95a3e1f470928e88c3e42": "9f799712f17ae588d33f95569e9b4155",
".git/objects/e5/d1e34a59175cced0ce3dc1185acbccc9c85662": "1a1a71cb83803a79f53f86cb9c838e88",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e2/d7110144fa65a2e7771413736a586b404b13a2": "ce284ad677fef52c7c24cbb82bdb7dfa",
".git/objects/f4/ac6cfd657d266b10ad0fc700ac657d2a834f89": "174f6f0b3c63badbabb46a1c28173522",
".git/objects/f3/44ca0fc4400abf5f031a07e12611105e828b6a": "c4ca2bd45bfc7dcd2fb3c17ae8876457",
".git/objects/f3/f5254e2bacf47f53dda60e575bbe48bf7b71f9": "03040b07a604c887f51e7f4944d68f4c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/9b5456473bab3809fe483f1f4873a2367afb0e": "758dd551619d777b85db269fd61932a6",
".git/objects/c7/22457e3a937587fb503925089992ff5e38f16d": "2ece9352c5bce4683a4b9cc65470f25d",
".git/objects/c7/ad61cf5cf186b87f8da54c6c385b47d78ef3cd": "11a66aa47b99137b42537dc89a857e66",
".git/objects/c7/f1a9e1c8a594b2d004f9fec27d58532d3d58b5": "446508a2fd27b6cd013fd8ad14a838ed",
".git/objects/c0/1809e0779775c089c9c3863d31fe346088fff1": "79428803d772f67fe1c1f3e702694b33",
".git/objects/ee/4a16a2c4334d43de48e93a48eec61febe9c6eb": "9c0392aa5c051a3bd8785a6a8763ea40",
".git/objects/fc/8dba4d0da995ba592b256b4000069bc6ec7d9e": "e8212e3f70621f4843234ebf4ac252db",
".git/objects/fd/3c568b357633f8701781ed993618178a4b139b": "e8c15b28a9a2fd4b491eebf071158a58",
".git/objects/f2/eb3262769070f756dedc80fef8b5352d486377": "36243da92576885b534b2e6267284264",
".git/objects/e3/319d749f347c7e255622cd324601ab736bf16f": "391873038c5887cb229f37fa225f5ac0",
".git/objects/e3/e7a256147b75693e9eeaa241c91bc1c2964707": "bf6d8faf39fa85d77a4592242e654222",
".git/objects/cf/e3d7af6a4c49ea1441162f349b4b010843333e": "99c7ad6ea84ca0494441a33874db76c1",
".git/objects/cf/e2dd2f238c92eb4b4442ba1a33acb5f05492df": "db49bc998122dca395de488263703301",
".git/objects/cf/68dba86d0921734afb7e5059f260c46d74e864": "376c2c06dca41d55a9aa8dcf2098c1e0",
".git/objects/ca/798ac942f9e0679d35d85cbdcaa1a30c598346": "1a38d4c3d621af41b05b2b01d9da12b4",
".git/objects/ca/bd642df4b2c20ca71c39fda951983779296a56": "a01867c6c4c9b61dc20918810eb6aa04",
".git/objects/c8/42fc9a46a20fa25192737b1b8a6d462a8ec72d": "533e99157aec010a73f48b08caf800b9",
".git/objects/c8/7eb9624bcde677da87a28fb506dde05c177594": "6f6b953513a2fd44624e32f5aebd7b0b",
".git/objects/c8/8112c08ecc80b2376463c54534392efdb8aba6": "e1f3a14e947a5808657f135352361bcd",
".git/objects/fb/92c9e179fe0ef5fe5807fd8b6e7e3e0ef96006": "54adc1429dcc9452ff5892ba4b11a3bc",
".git/objects/c6/0989db43f2cadfb4ab7f50c092f914812202a0": "843835da3605aaa447ab295258f9ac43",
".git/objects/c6/f9f7c6d0e0c4038d226c8b082b9393c39ed4f5": "3b29610abc81016b8fb3f8fac640488e",
".git/objects/c6/0d9ded5c83d1492d0a1cd36871b8c93f5ba4f1": "d788ba9a7e0375d4398014e471281c39",
".git/objects/20/40e9b6009a3a4a9f720d277ffca70b7589c449": "4b69d43c1232fc51b2206287d5e5dfd2",
".git/objects/18/3c9290b723673b87326d0df912183dffd2b60f": "9e0419fe556ce9792d369dbb8ea73a69",
".git/objects/27/9c7ec84ab00aced9b99f1687aec757a87f19b1": "14b1cda8faf99dd96cb82cac38406a23",
".git/objects/27/b5374d24b801c94392864c4422fd95dfa39725": "a2773afae643b31194384e33d23ad0ca",
".git/objects/27/f73d16c42b901fd9f5ecdae3febe67a8b04db1": "bc4ab18070f9ec41c949385225cd998f",
".git/objects/pack/pack-ff89cc0fa6fa0ef86e3d70c09759c97edd91cbe4.idx": "b8e1c082465a847f62fe1dd182f3169a",
".git/objects/pack/pack-ff89cc0fa6fa0ef86e3d70c09759c97edd91cbe4.pack": "01cdc68afa28ce6eea0880cfb775b839",
".git/objects/pack/pack-ff89cc0fa6fa0ef86e3d70c09759c97edd91cbe4.rev": "2ffc183f580eea0f7371fe833a8edbff",
".git/objects/11/311a1f17af33ea37d4b823cb5789a8ac3ec398": "2cd9d0920ff981859a8ec5c7774ef38b",
".git/objects/11/71ac78c4961637de76be1ee0d59264ad56e5a2": "b2113e66fd2ed649739c3938f73c46a0",
".git/objects/29/7a96b3c92758f75c5dbc679d18321853b484e9": "76d916feea6791d182cb92bf3e221a96",
".git/objects/7c/5c562a0e42555a50bd9e64372f2dcf5519d598": "0890df964c2c55dbe5d8f1e346abdeae",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/89/cc926e04c999c81cfa7de99df1be664866c344": "0010fe454447079c5b60a021dbd4a544",
".git/objects/89/0888a2c54435e0ad6dd3b1e066bb6d8121a4e4": "03ef883c4a00670554117d3e7a7cfffe",
".git/objects/45/aae7c26831c8fdbd1152a9c1b8fe5e44440115": "fb2ed5a127e5a645ceab3eec254e9df6",
".git/objects/1f/a489440d1aaa606a0f68d83d4cf7074125d4b8": "22f54d32d427a652fe4de2ed19e1cb7f",
".git/objects/73/42a119bb8b950ff513a460deebe5b5c7b5aabb": "1f32b77f5ee74b0fb2b4717696eb386f",
".git/objects/73/4ef3c0b7dbda82fa6e7b892cd972ebbe678440": "047adb788e1a14dbe750eb7a6baf5e9d",
".git/objects/73/96184c2ab54ac3e0271fa3ce5be5a2dbae4b6c": "091400a755debd92b89e1b850722ae76",
".git/objects/87/89515456547d8b3135a1a09381d26caa40ece6": "7b88c2e2167927d73010069c8327f02d",
".git/objects/87/5ef2179bcc5c6620efafa198ab0cf7705d900c": "713744e5874baf6759c8d0f6d71f0dc0",
".git/objects/80/9c586aa857f8f52845146a27e080b352bc7102": "7600b678245ac0d91a80baf12918705a",
".git/objects/74/48eb1794d8655b8886498599d6b368206264c6": "920052cd77128aa68ff532ca5f467458",
".git/objects/74/6eb348c921df5eadcfc9a98f6f2bd48f315b9e": "1994ae0a92ee42d1e4750c508b2a3531",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1a/fef9c90e83719de04e73d97eb0efb493f096a1": "76021e6452cd9587a3091d7c48c6581b",
".git/objects/1a/49a6bc6b6756e4529914628e3d3129f6532fdb": "d4e792bf3d5c86210b6fe0178c4b964f",
".git/objects/17/f65c324abe7050a2449db304b0972def704e0e": "24778de62bb5ebd0da70a9a7929a92fc",
".git/objects/7b/3c61a2521a48708affa3b413387ebadfc88cb2": "7355e301addd115035c6c71e1ed220be",
".git/objects/8f/a2dd80fedaa0072a1b8c0915d4fb776407c95c": "99c3f29c318928298cad82746b4c1010",
".git/objects/8f/0684893772b17941ae1bee6934fe940c0cd102": "6820cba39a86b9bf30c22f7eab2c3083",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/c8d02ea05f31ff7ec077d9a93bcc6386142e0e": "6261982c798cc809979be12237182fd4",
".git/objects/10/b5946c74e9db853673f8df2664cefd35c9800d": "ba1bab7eb052124e1334b12405d3c610",
".git/objects/4c/84e0f458ffea9817df92520d320085d9191105": "6cd58b55e32ec67fa2fceb8db93d82af",
".git/objects/26/62e6da225d223408e858233669d60d7a537c2c": "a815ea590ec12d667027055c5f2a905a",
".git/objects/21/24a5dd3c0b50e8a994cbf59dfa607a26ed0f14": "a71847e2fbdcaaeb02989a5488eb30c7",
".git/objects/4d/10f85250872c364613aff1e538b8e18f66d35b": "1809d62b6d4c8f3adddaa567364f3030",
".git/objects/75/2264df099127cf1a953327dbdf082e1b653019": "022e6d6a2fd2b1b637bf83419811d1ab",
".git/objects/81/8a5d472a29d6022d26bde0f9516ea2e78791e5": "54895b0fca748172cb8fd068e84792bc",
".git/objects/81/2d885bc7e6b29c09e08a482609c79c70c4424b": "f5f685cec2476afdc1f45d24e99a9847",
".git/objects/81/8c1ec3782977a858330c19eec2b99fdf42ccf5": "6dd596bf643c358158490126c109aad7",
".git/objects/44/2e608cdcea843787fa7dfe1b1f15b6eab26412": "55f0faf4aa827fac933264af0cd076e7",
".git/objects/44/6de46055ee85b1595be7c67d0ed0b0b3a4172a": "9cb5d017d7a0605876a3ed4b803c71b7",
".git/objects/2a/f3c740552603a26fa9e624860245563591a50a": "ac3238d8af035ed9b9d948242db1f470",
".git/objects/2a/671b48abd788d60f88083807a861e4d5e160e7": "3d1ebb8d64d5902532a92d6f553a9e4b",
".git/objects/43/146d2efe60d57be05d5cec091415ae34597afc": "911736e269dd41f6b693ebfb3e895801",
".git/objects/88/7bc29094a9e817904fc681f8a161f7556edba6": "dd519487ea3eeddf6ce8577de1c0fe49",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/749e207d267f84e6d666d31f9659bcc5d2bbe8": "1b9f0217672ebaf37f1c2bb34df6fbda",
".git/objects/9f/4943523c6c7290c4863ea6e4850c737c5abe0e": "5b7addad6557d08dafca6e0a9f23a5d9",
".git/objects/9f/f7e970efdcc13ced78903a316bee91dc4f4432": "d2975caf59be33dcb5610222fe39c368",
".git/objects/07/025f7499294177010173c8e541c55bd4f5df8e": "f7463e0472e6bdc992cc2ff2512da623",
".git/objects/38/b239aadf05b48f200e64bc62e2d5981fcda9c7": "bebfa7c4c7fde331369b04b823a99f47",
".git/objects/38/f2a1d38459a9f329dcc47b5c93fe69248abec1": "9e7aa367b9f1ba6cb68d4a74e196c274",
".git/objects/9a/ea78b02198232ad9b09a02d491a9669ccd762f": "ae852415613c7a748a2ef06410672898",
".git/objects/36/ea4f910109fc0f90e8afe34489fd44c8741795": "85ade1924406ac12f226c6e161cc58e6",
".git/objects/09/d0c09a0bd75fab7d3654437b199e81efe64d3e": "80012a308a3085f169ca638cbc230665",
".git/objects/5d/10bec0ca20813c00007ee3f1f7bdfc35a7fc24": "61045f5514ecb5cbc89f3147679420bc",
".git/objects/91/6d70d398e69e77bb9a19553489f1a5bcce1c8f": "749c26e55a11e95aae81822649b25a48",
".git/objects/65/1017e00c29b2bc0c9f2f9f14a7cafc22126876": "fcb40af80e96dfb36ee788374a9f2adb",
".git/objects/96/815788be9477203c9f9421e90daad39594fd6e": "43dc6b54c0432521a111679d70130439",
".git/objects/96/0263c779b279c0ca59a94b7ae6a6818e8512f1": "2eaf0a4a7b9e9b7465d637ab0152ec18",
".git/objects/3a/852f3d20ab2af59c511c352a69e1a775ea2137": "3927da8f2ac03847eb5907d982bfe7d2",
".git/objects/98/86a03195dc669c9d2bd153972a4578a6c847c3": "0ddc5f257dbbe5bcf7f704ad4a96e301",
".git/objects/53/70b3900d8004096a95a93b361a784d54d2991e": "69adc6a49d5fc130a7ab4ad84ad1f06c",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/5e/f6aa17ce6d1cd1f651e3eeb8bb2c47e9bb5a7d": "3cfacb15c72f5c9b41d361f297eddf85",
".git/objects/5e/7789c1eaac67306858e974942147b7b9eccbb9": "93715709abb55d5553e6a66575e35bb2",
".git/objects/5b/22fc15638b43d88f6b5a6da5f92d0f08817494": "bf7af92fc098335edaaab59d0ad0c5ab",
".git/objects/5b/14fef8900b5963fcef86bf56eb6fdd202f01c9": "bedc0dea8910802564670d40ed3e9db0",
".git/objects/37/ba8455a571658508d65b70f141f8147c926dc1": "e43e4ec23d8b993e5a50c6625cdabbbe",
".git/objects/08/b68b3352753d91333f7d78a04a1dd737636e40": "add1b507781d72ec032d1810745b7baf",
".git/objects/01/313e9053252de343d334dfa3a0848e2a005751": "7ff063a83c9160ef16111dc5a6ad8ea3",
".git/objects/6c/25455c39462a5ecd900eab71bd8073eceb7807": "84c4da2ccb734cb7e6de0c29ea967ef5",
".git/objects/6c/349f9a8be6fcb46c64a62cabb7ef9e2db425a4": "5a320dcbc2ec936d9e2996d6f8ff0fed",
".git/objects/6c/b097d84c36c5a726617e349eb59668a4e198f4": "5c7d3b01a1cf7cac265bfbb4f0a47de9",
".git/objects/39/c0afc6bf60ba78b63799a274c0c297459547eb": "22925f116c6fc97a9fd556bef2a45d72",
".git/objects/39/42c7dd94ec63b3022f398505a61f4054c28adc": "780dc068d26be5e97136d5adce31438d",
".git/objects/99/0368696810cb61a35eb9e60602df036fdd86cf": "35d52466b302455e59ee4df7a65f065b",
".git/objects/52/ae6fcf623669a2a2c74840f845c5ff33123aea": "dd3d13bf400c35f13079e29b46b3429f",
".git/objects/55/13d3584d9d6fb99cd2acf7d20e207ac9f772d3": "3537a17cad7e8a84e8a242fa5814dd84",
".git/objects/55/069763e28153564c7ecaab8f97e34af22d886b": "b1181e4afd2a78bfe11bcbae33512e0b",
".git/objects/97/ceab6e11d240990e57f64f414a866a9b27b70b": "3cb7fe4b53ae5e3ca8aeb336d7b1e8a0",
".git/objects/97/b5a4c147ae0ae8d95fa1b7f3bc26d66ff20b22": "c49a88b318fc4167bdd08199a86f90a5",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/63/6e5627bea0595c88d9b933b8366de23a2be8c7": "ee19fa01bc9eeed17d914a407895a30b",
".git/objects/0f/76d9b212b424c7180ddd4a518fbc4e09787d7b": "b5ae2a96ef737429867e15e535b2d2f1",
".git/objects/90/98d71a75f13a9d8c592b475abebfa3bd3d0a0a": "dc27f94d46bb4fa2bfa28d66a3b3cb3a",
".git/objects/bf/2b3a2643b31833c095b91589465504088a7b6b": "e7546e8c7f9f83b5b99fffb612bf2d47",
".git/objects/a0/36a299e31316ccde674816f8b210d8174802bb": "53afecf9b67e7c96c1636a9d98e631fa",
".git/objects/a7/0ed12121d0fe63e4114ea508614432092f82a6": "28bed8cc0b0e0600360694ab89a6493e",
".git/objects/b8/9f094d187a6da8986fd3f2a35ca1c108217873": "d20e4239d5e4601bdba6f1702e0e701c",
".git/objects/b8/b5de196a41db16fdebda97668aaebb51c67b40": "3de3dc89821157c27ee8b7316b58456b",
".git/objects/b1/94874e0b072df640fd5a217b321d3337b8ce31": "ff3c56e4a0e16ffceefc818585244c74",
".git/objects/dd/b834794cafc0b8da92ead7591638a39617688c": "d640138290253c3e13c2d44388e0be1f",
".git/objects/dc/27bcbe0d8b27301dc18b80e9062c16f17b191f": "3d4068fc910b52b800cc48d7612b964f",
".git/objects/b6/abcf6a496b0a10ab063b24dc8f3e7a019773cc": "5ab7457b2a064964f9a97bd443112b37",
".git/objects/b6/18c119792997b712fb858eb6bc025e05f0ec5c": "17e210be549ec69dd2fb72ccc07cc523",
".git/objects/a9/cb67eae0b019f68795e478bd43c34d3f9470d2": "afb9b4a6d7d6ad7092b2621d92e1c891",
".git/objects/d2/f181656b4a2ee53678ca98919e8ae6defbb4b8": "9a26010f1f98345c8748f6acb97e69ac",
".git/objects/af/190e6d22dc743331e55dafdba99569a3a06385": "1d319ed0b59fc2a49327f77bfb500aba",
".git/objects/af/27766c8b7af8fd6be69fe023ea5ddf49a4911a": "58622619ad71ed401a113e9de842dea1",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/bba4aa2a0a9a00e6a7ded02e0dd80fab5d7295": "042a38f51a841d83ed4b7cdbbeeb7639",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/eb63e618e3935cb232ed727bb8594114b06d3b": "476227b157e6ae576b0a38c1d77df08d",
".git/objects/b0/2a5aa49e59f405f0ef067fb10e6f7e29707eab": "08631af2ce84e1368ed1e3a0995ffbb5",
".git/objects/a6/271f5e1b4a476ae200b7a740ee709b3f020d26": "5894c41dcd5d214666d944bdccc51622",
".git/objects/a6/221cbcf37fd9ab5bce010dc6cfb0f173426131": "3b6c807140d3b853ebdc2aed206655dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/473741eedcaeecb54e1776ab3587d1f3ff50f4": "e1f0b3c8203752ed57143f3e1725a197",
".git/objects/b9/72f10f8b892eceb3541aa9221de6097695479a": "a826715cf9be2fdd80363c6ef9ac39c8",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/d70c4e962434c06b7505bd367ce0cdb722840c": "29ba61e75a056e5798b9814c25f4a9ba",
".git/objects/a1/3c1e7526fd108b8a2371b020de10c2b0b8eb5c": "dab73d278a8ba340315c7b4218c07a54",
".git/objects/ef/d24a7a04c89b8c7b7b00976f42cd7dd3313787": "56dec10e3f27f71ab874c2aef6bc7ba7",
".git/objects/ef/34421d30d9a57793250edd46c09b5301f0bfdb": "5ca6f316e317813396b9c4c7fe833a79",
".git/objects/c3/0fa8f34e6a6250d3f15d3d653721c16753df58": "9196c0ed4fb97228dd6307a45c57731f",
".git/objects/c3/ab11cdf534da0c3c35b4f7474baad32a4ae59f": "381b9357859142fbf86691f5065ccc70",
".git/objects/c3/c4c6494efcde023072c5d7ef672147c74f0ace": "101478a97eb9ef484e065da4a22063b0",
".git/objects/ea/7e16d77a5ebef1f281ae3b3732196024e23137": "b27d324651869a65b31ee9aac9929305",
".git/objects/e1/a33db5ea1b2eebd99b0afb28bcb266be6264a2": "0608fac0fc60d2cd518b65f2ef42380a",
".git/objects/cd/eeecfcb2adf70ebc878acbf2154fc726b44264": "26dbee7e5adb440fe1d4a76097f5e061",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cd/62d9e7bcf81e41498136b9a0b6704c443c9114": "72262933aa4c7afc15bfb074bb2beddb",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/e6/1cb983453e9c17e118f330a1fb658b9bc9ac54": "bbe08426400affb5a0fb09c07755e9da",
".git/objects/e6/72b55a61c7858ca1c7bb4062c7535ec32b55ac": "f09adf98dec24ff3add928152b472f6e",
".git/objects/e6/f206029237b2225eccfe5e9aac96704d756d8a": "654c730a3ded8d0b601f396acca3bdd6",
".git/objects/f9/37e7197cd184f8dfddcb04ec7b02754df4a211": "3a0fac885a18972a06098c2038c75f34",
".git/objects/f9/4258764e755e30161718b0f203876e7d0b6586": "048ad34488ffd14eb3b5e2573a462d0c",
".git/objects/f9/3b40d9db643860a8fa5937648f703d5c13c300": "19317a8598a962412673da5cf2592606",
".git/objects/f9/3126f363f5d4789317b364c04d3a514bbb151c": "6c73f8939ab778896a4eb108a401041b",
".git/objects/f0/42990e73b888a2e625613785ec8130b66f6b2a": "a0be7f7c9c9826292fb9a86c0876a031",
".git/objects/f7/e0cada6408ae160b43bffd2b1b31a853531cae": "3b09a4ca61eb731bfea17548f1fbdedc",
".git/objects/e8/58be7af5dd74e43104383a035e0a840485d448": "c53177b96ef9a7d64939abaaaca95b98",
".git/objects/ff/8979b9b983adaa66933d530040622972c46960": "53e0892c699147c4aecab4746f1c953c",
".git/objects/ff/639abd6ef5a6da4aa4a9a7f1d072ef2f0a5de7": "8ae9a21b8420d10b12f852deb02193b6",
".git/objects/c5/0e728807540c02bedf2b401ddfcbf2d2a57902": "945e4c3eae1c732b143ccd8ddfc462f5",
".git/objects/c2/9cc6545e78a39c877490773bfcbc631cad7de8": "1ea6fe3f94fcc8eee51c2f231e23a7ce",
".git/objects/e9/cc77b1e450566e7da22dc036fe5446bc6f1820": "c3624a1bd28468231c3aa0b51c918ad4",
".git/objects/f1/7153e845812349c02df240aab992dd2d9b4ea1": "5b7357dfcd9aaca544a56699aab8d79e",
".git/objects/f1/d26e8cc6cc7da71e7556b29ae0ae092d0a5214": "c23e1950fffa60f9c7aea098ce239042",
".git/objects/cb/f983a6504ba8b923f28330e11359dbbce5d196": "4901a3a33e55545d071c65323193285c",
".git/objects/cb/5fc1f31e084f61a03603c6b0759076de8d4e11": "2382a16f2fca01c919d45e76e376ade3",
".git/objects/cb/73ea6f01a776ef28bf764cb96fc84884e860bf": "f166af05b51ffb0f9ec9b935510cf32b",
".git/objects/cb/6760c1406760b0e6e32d84fe4beb45861a7dfa": "5d820537af89a556f157176cc3042c46",
".git/objects/f8/1e04145e692c5c71d7fe9b65ed4697859ca921": "3eef42454a78a9421a841769f69ec0e3",
".git/objects/ce/9b4a5879902df74aac98fb2a32b9ecc6b64d17": "428af3e9179eef2be979b165bad322f9",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/79/05759bd593baa4fdb2912d5051f4c2a1fe07e7": "88a41d1e3560352bc57376acd5ac6267",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/be43776e5487043fbac1607788f766c0100826": "a08f4d708101a2bccca7528495041b89",
".git/objects/41/1d584d308c8c52d6e6d364e1ce17f04b443daf": "cf535d13672e99cd8d4ab469a4014498",
".git/objects/41/6d4962cc95ac6d9048dc43731c700aa91c34ae": "47e125fd0abebfa32b1d3465356fc648",
".git/objects/41/950ddd1538131ddae57eb028908e2cb7e94f1c": "b0fc9dc2b93f391cd2c0bab24ffd11c3",
".git/objects/41/4b40ebcfe5aa073b69ba497756c0874f2fe4dd": "18d9718444ccfdc9498e064643e34ce3",
".git/objects/1b/ed7e9a2974ec09026ccd75f46471b2f70dc6c0": "975ef351455974f5ab7eff966e8acc1b",
".git/objects/77/6dc5e99ddee011da82c9db9fc3f1c1395eca08": "2e795146f227a79b5ba74b90bcedae36",
".git/objects/48/8cc60c430c6c04addf2df0d674e30f9f5fdb7c": "03fe2b30f4104efcb77d2ab480d2758e",
".git/objects/84/01c02ab337090a447b9be09e53b02f66240f85": "bf0ef189d9a681ec0d26a22bedf11f5a",
".git/objects/4a/001b1c044d656be293f9e3848bfc056dd01e41": "55a91c84950fa6566ed9eef5549a5f62",
".git/objects/4a/0611c13d39591491dfbf2f3c66696d746d88e6": "4f8a9ae222b17ece7d15e7a5c84321fa",
".git/objects/4f/bc379ca26cb57a8b4d36a55bb6534552686148": "b5228950b7cb0006b71c368250d76426",
".git/objects/8d/ad0f8ff1b70c072a6869e0c23d95836c959f7e": "e0144f7787707faa9c111678fd938b0c",
".git/objects/8d/fce2069339d6f2a36f300b600bbd5d0fea75a0": "926c4d8c2c9308de4c561fc9050bfcf8",
".git/objects/15/2f8be14a7ac7badbf59af5560c7beb5413e5de": "09c874d522d424721ff93a576d8ed9fe",
".git/objects/12/bb76be3defc8a230fc8695f25ff4ec4b70ec11": "d7202f50e480aeab843a47346ca2fe1c",
".git/objects/8c/4e3299eb6b36478d8896b19aba596b8353c72a": "c08498737316e3e0fc8d708136941b4f",
".git/objects/8c/9100ec7163168c120984e7f53b0f4dabc847e1": "6fd2fc19040c10b59981a4ce17bdca5e",
".git/objects/71/e40c3b7e256d7332b4ea7ae4902b4cfdc6c854": "7a6ed175cc43bb1db2c6ae91efcedbe2",
".git/objects/76/2663c4d0aa22d1a08cb398fd964e8e50121069": "00df44fe756e4acaafd1b9361156f9a1",
".git/objects/76/3eb2abc7c65cecffbd7072711863f88cd41cc6": "e63b7dc3d0cdd45e5aeca3564ffc7823",
".git/objects/76/36f376c52a891f8ef900570e4dde99fcf887bc": "4fd6a21a34b850389b5c51ccef8f4a6b",
".git/objects/40/9dad40c1c03a3ce51fe6bdf5a2a672535716bb": "71a8f14ab5479d6de9fdf84c7d38f7dc",
".git/objects/40/afa16c9805e88446a94797661ed8dceffc0bae": "3218d496bd602d4417f96cd7d8754da3",
".git/objects/2b/efebd352e7aca409ae71686f374a10c1377ce8": "3cf3b11631964bacdf8ec5904d200349",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/7a/e34b25125a5b3e3847ba9283a117a398daa87f": "9073701cdea0bbcb732942edac0cfb32",
".git/objects/14/c1416320e8ff66beb169ecb3c03ec2e222316c": "9c3246c4c6790044881ed5af1ef52402",
".git/objects/8e/be4a2cf1a146ed68155f91384a2a1d3f630731": "fb099e2a0a73edd20bb231bc6882df76",
".git/objects/22/7e8fc3b3dad365b27e8a4b139d9378c88468a6": "76e8823341b828d15a63d9a84536991f",
".git/objects/22/61634711fd5b2cf2c345bb8481c29f4b127c7d": "5753f68e0baabfaac72b922347e4a000",
".git/objects/22/1dfc5c8dc2f38efbbb5e224d9ac8cbb7481324": "7393ca21ac0d9a8e3ec005cd9a1d23bb",
".git/objects/22/013c9c94a9b15c7d5f9593ea6fa278c88d4852": "43d71366ee89c960c076a33e13c153a3",
".git/objects/22/a5976f521602054e7a6b982255fe1e9d732f52": "dcd3f5b2061bc23f54a3be186d662403",
".git/objects/25/61442f717159d358adea51c16a34fdb0b919dc": "b2bfffe5fe674fa5308d72b9e54226aa",
".git/objects/25/c85d614d2111c27ced2675ad248255a6a021ab": "7fcb6494bfd145e1d526f1b80464db5d",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0b1346bc1d5ce7c0e8ffad9759f31da8",
".git/logs/refs/heads/main": "0b1346bc1d5ce7c0e8ffad9759f31da8",
".git/logs/refs/remotes/GustavoBrum2.github.io/main": "2fdcc9cd104d3a491495f653c7041eca",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "6d8c6b0af646f0836fd5acbc36907e17",
".git/refs/remotes/GustavoBrum2.github.io/main": "c4af7d6f89798778964cf488e94bf9dd",
".git/index": "2cac6ad82cd18813a92f4d0b3f867dd8",
".git/COMMIT_EDITMSG": "64d42024f1a77ee5e61e4096bdebac78",
".git/FETCH_HEAD": "c1495d8d2bb737399fcd621b844d6d32",
"assets/AssetManifest.json": "f80ccb0e8ec35547f2055efa5221db7e",
"assets/NOTICES": "5a192c5796e3acf5bbe4126cc1b36a78",
"assets/FontManifest.json": "46154c65870d4f9ed2a2ce9025783e0b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "7ab60e3bf42441be61c3f50aacbb4fae",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/gifs/tech_program.riv": "068ab1a1814cb8b1135c865f364464ea",
"assets/assets/gifs/add_device.riv": "1174b9355eef80518efac57f973ad439",
"assets/assets/gifs/1.gif": "9364bd1228c130651feaa4c0e243e978",
"assets/assets/gifs/icon.riv": "15be9305a159b2982a8e8a69f05c254b",
"assets/assets/gifs/chat.riv": "9989faef6362c47e120b902fc43c33b9",
"assets/assets/gifs/add_invite.riv": "7a9dc7e4e7b9e07af70863dc7d9eecc2",
"assets/assets/icons/power.svg": "563592ed612ad9f4ae324b76d074259a",
"assets/assets/icons/sparkles.svg": "66427ab2fdc0d438f585f789734374a4",
"assets/assets/icons/settings.svg": "410110b5d8683038d7fd4e639c57e414",
"assets/assets/icons/shines.svg": "147c216ba96e0a9778c0e9144954fbb5",
"assets/assets/icons/colors.svg": "65a6f6c951927a0356e85d1602b16660",
"assets/assets/icons/back.svg": "3be28b17b38c3df4d941c69afcc326a3",
"assets/assets/icons/agenda.svg": "4fa38115310dd2b09662e2be678b50ca",
"assets/assets/icons/iphone_15.png": "fb515a592160f595cde1474e2915d920",
"assets/assets/icons/finish.svg": "849a75c93d4ca3e9dfa5869b084c738a",
"assets/assets/icons/error.svg": "a60eb00fd2941b25746644673f25020f",
"assets/assets/icons/logo.svg": "0b1beffe29fede3355082d45f0fcacdd",
"assets/assets/icons/outputs/icon-9.svg": "924ed5c4f19dec47e1d47946772d0a6b",
"assets/assets/icons/outputs/icon-8.svg": "db3fbc27c945e574458f0de7e6776656",
"assets/assets/icons/outputs/icon-10.svg": "4c488bb290e23a6ae1accf2195aa99e4",
"assets/assets/icons/outputs/icon-11.svg": "08953f2ae0b76e7bf179dda6fa6943aa",
"assets/assets/icons/outputs/icon-13.svg": "78278f95ebb89ffe74fdc76332bf9423",
"assets/assets/icons/outputs/icon-12.svg": "4fa4d0392fb6ef5c9ea712b6de1d1b54",
"assets/assets/icons/outputs/icon-16.svg": "a49066178f5d7e28cc7da4273c44c7e0",
"assets/assets/icons/outputs/icon-17.svg": "8a176dbe98e727b125b7bb3c91490d37",
"assets/assets/icons/outputs/icon-15.svg": "317385dc5c51b7e37d41a0241493f937",
"assets/assets/icons/outputs/icon-29.svg": "0d02d99fcee6a114e9f3a94ff6599cd2",
"assets/assets/icons/outputs/icon-28.svg": "fc8834fc032f04925765084e65b474aa",
"assets/assets/icons/outputs/icon-14.svg": "39c7f599a881e7028403535fdf908a76",
"assets/assets/icons/outputs/icon-19.svg": "2c68b012f1689b4a2788dd4ffc3d20e3",
"assets/assets/icons/outputs/icon-31.svg": "f4efbb6df2ac726024d427915ffebe82",
"assets/assets/icons/outputs/icon-25.svg": "1765cd7ecdfe97a95662dcbb8f2e2d96",
"assets/assets/icons/outputs/icon-24.svg": "0e9b4bb0174170b2150d0ff690ab452b",
"assets/assets/icons/outputs/icon-30.svg": "d92755f8fb1c40a8ebe5daf403a37845",
"assets/assets/icons/outputs/icon-18.svg": "c2a22454df5c2ba96c0911e09cd02659",
"assets/assets/icons/outputs/icon-26.svg": "38a6d5d1f4762758bced85bf411931b0",
"assets/assets/icons/outputs/icon-27.svg": "3293ed26afeccd8e81cd4ce6e4b7d39f",
"assets/assets/icons/outputs/icon-23.svg": "3402a9d0668bed6473bf5b63678f5db0",
"assets/assets/icons/outputs/icon-22.svg": "26d80b01df67bb847f0df1421b63b9dc",
"assets/assets/icons/outputs/icon-20.svg": "91bf3ac5592d480164e58b03680dedca",
"assets/assets/icons/outputs/icon-21.svg": "36d1375b3efada683af0928b85a83621",
"assets/assets/icons/outputs/icon-6.svg": "7a6b8ca64dc2940c5d4ea6d5a96b7d0d",
"assets/assets/icons/outputs/icon-7.svg": "0ecca88c1573556a066d9d9439cc2580",
"assets/assets/icons/outputs/icon-5.svg": "3ab84f6ecfc8bd96e084ae6008adfd28",
"assets/assets/icons/outputs/icon-4.svg": "8384cd81c3716f7587a7121c95837ef3",
"assets/assets/icons/outputs/description.txt": "192ab7979ff726f8104b8b2d09b12016",
"assets/assets/icons/outputs/icon-1.svg": "6e910c991356f3258f592e8668463015",
"assets/assets/icons/outputs/icon-3.svg": "013dabf908d28da4381c8cb1de45bdce",
"assets/assets/icons/outputs/icon-2.svg": "e344434cc35783886d5c0d0819c4b8e0",
"assets/assets/shaders/ink_sparkle.frag": "7ab60e3bf42441be61c3f50aacbb4fae",
"assets/assets/fonts/Muli-Bold.ttf": "1e36ee6d50c037b1bb4bdd3effa7a28e",
"assets/assets/fonts/Muli-SemiBold.ttf": "e74e966f227e49bb0f0d9cf3b8624064",
"assets/assets/fonts/Muli.ttf": "df7330254513d2fa2f4c1e9ee98cc6c6",
"assets/assets/fonts/mulish/Mulish-Regular.ttf": "0b9d999992640c68f348e33af403533c",
"assets/assets/fonts/mulish/Mulish-Bold.ttf": "5684dffea5d103b59e31b60105e1b07d",
"assets/assets/fonts/mulish/Mulish-Medium.ttf": "f2e30e0f1b6a04614989aa5ff9615f09",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
