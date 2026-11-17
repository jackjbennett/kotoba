// Kotoba word list. One entry per day, in order, never repeated.
// Native Japanese vocabulary only: no katakana loanwords, no words coined to translate English.
//
// Fields:
//   k    kanji spelling (null when the word has none)
//   r    reading in hiragana
//   en   English meaning
//   pos  word type
//   kana true when the word is usually written in hiragana even though kanji exist
//   note optional usage tip
//   ex   example sentences: [Japanese, English]. {curly braces} mark the word in the sentence.
//
// To add words: append to the end. Never reorder or remove entries, or everyone's history shifts.
window.KOTOBA_WORDS = [
  { k: "木漏れ日", r: "こもれび", en: "sunlight filtering through the leaves of trees", pos: "noun",
    note: "A famous word with no single-word English equivalent.",
    ex: [
      ["森の中を歩くと、{木漏れ日}がとてもきれいだった。", "Walking through the forest, the sunlight through the trees was beautiful."],
      ["窓の外の{木漏れ日}を見ながらコーヒーを飲んだ。", "I drank coffee while watching the light filter through the trees outside the window."],
      ["公園のベンチに座ると、{木漏れ日}が気持ちいい。", "Sitting on the park bench, the dappled sunlight feels nice."]
    ] },
  { k: "食べる", r: "たべる", en: "to eat", pos: "verb (ichidan)",
    ex: [
      ["朝ご飯はもう{食べた}？", "Have you eaten breakfast yet?"],
      ["日本では魚をよく{食べます}。", "People eat a lot of fish in Japan."],
      ["一緒にお昼を{食べ}に行こう。", "Let's go eat lunch together."]
    ] },
  { k: "優しい", r: "やさしい", en: "kind, gentle", pos: "i-adjective",
    ex: [
      ["彼女はみんなに{優しい}。", "She is kind to everyone."],
      ["{優しい}声で話してくれた。", "They spoke to me in a gentle voice."],
      ["困っている人に{優しく}してあげよう。", "Let's be kind to people who are struggling."]
    ] },
  { k: null, r: "いただきます", en: "said before eating (lit. \"I humbly receive\")", pos: "expression",
    note: "Said with hands together before a meal. After eating, say ごちそうさまでした.",
    ex: [
      ["みんなで手を合わせて「{いただきます}」と言った。", "Everyone put their hands together and said \"itadakimasu.\""],
      ["おいしそう！{いただきます}！", "Looks delicious! Let's eat!"],
      ["子どもに「{いただきます}」を言うように教えた。", "I taught my child to say \"itadakimasu.\""]
    ] },
  { k: "懐かしい", r: "なつかしい", en: "nostalgic; dear (bringing back fond memories)", pos: "i-adjective",
    ex: [
      ["この歌、{懐かしい}なあ。", "This song really takes me back."],
      ["古い写真を見て、{懐かしい}気持ちになった。", "Looking at old photos made me feel nostalgic."],
      ["子どものころによく食べたお菓子が{懐かしい}。", "I miss the snacks I used to eat as a kid."]
    ] },
  { k: "空", r: "そら", en: "sky", pos: "noun",
    ex: [
      ["今日は{空}が青くてきれいだ。", "The sky is blue and beautiful today."],
      ["鳥が{空}を飛んでいる。", "A bird is flying in the sky."],
      ["夜の{空}に星がたくさん見える。", "You can see lots of stars in the night sky."]
    ] },
  { k: "頑張る", r: "がんばる", en: "to do your best; to keep at it", pos: "verb (godan)",
    note: "頑張って! (\"Good luck! / Hang in there!\") is one of the most common encouragements.",
    ex: [
      ["試験、{頑張って}ね！", "Good luck on your exam!"],
      ["毎日日本語の勉強を{頑張って}いる。", "I'm working hard at studying Japanese every day."],
      ["もう少し{頑張れば}、ゴールだ。", "If we push a little more, we'll reach the goal."]
    ] },
  { k: null, r: "ゆっくり", en: "slowly; leisurely; take your time", pos: "adverb",
    ex: [
      ["もう少し{ゆっくり}話してください。", "Please speak a little more slowly."],
      ["週末は家で{ゆっくり}休んだ。", "I relaxed at home over the weekend."],
      ["どうぞ{ゆっくり}してください。", "Please make yourself at home."]
    ] },
  { k: "面白い", r: "おもしろい", en: "interesting; funny", pos: "i-adjective",
    ex: [
      ["この本はとても{面白い}。", "This book is really interesting."],
      ["彼の話はいつも{面白い}。", "His stories are always funny."],
      ["日本の文化は{面白い}と思う。", "I think Japanese culture is fascinating."]
    ] },
  { k: "花見", r: "はなみ", en: "cherry blossom viewing", pos: "noun",
    ex: [
      ["春になったら、みんなで{花見}をしよう。", "When spring comes, let's all go see the cherry blossoms."],
      ["{花見}の場所を朝早くから取った。", "We claimed a cherry-blossom viewing spot early in the morning."],
      ["公園は{花見}の人でいっぱいだった。", "The park was full of people viewing the blossoms."]
    ] },
  { k: "忘れる", r: "わすれる", en: "to forget; to leave something behind", pos: "verb (ichidan)",
    ex: [
      ["傘を電車に{忘れて}しまった。", "I left my umbrella on the train."],
      ["彼の名前を{忘れた}。", "I forgot his name."],
      ["あの日のことは一生{忘れない}。", "I'll never forget that day."]
    ] },
  { k: "勿体無い", r: "もったいない", en: "wasteful; what a waste; too good for", pos: "i-adjective", kana: true,
    ex: [
      ["食べ物を捨てるのは{もったいない}。", "Throwing food away is such a waste."],
      ["こんなにいい天気なのに、家にいるのは{もったいない}よ。", "It's a waste to stay inside on such a nice day."],
      ["私には{もったいない}お言葉です。", "Your kind words are more than I deserve."]
    ] },
  { k: "静か", r: "しずか", en: "quiet; calm", pos: "na-adjective",
    ex: [
      ["図書館では{静か}にしてください。", "Please be quiet in the library."],
      ["夜の町はとても{静か}だった。", "The town was very quiet at night."],
      ["{静か}な場所で本を読みたい。", "I want to read a book somewhere quiet."]
    ] },
  { k: "気持ち", r: "きもち", en: "feeling; mood", pos: "noun",
    note: "気持ちいい means \"feels good.\"",
    ex: [
      ["あなたの{気持ち}はよくわかる。", "I understand how you feel."],
      ["温泉は本当に{気持ち}いい。", "Hot springs feel so good."],
      ["{気持ち}を言葉にするのは難しい。", "It's hard to put feelings into words."]
    ] },
  { k: "待つ", r: "まつ", en: "to wait", pos: "verb (godan)",
    ex: [
      ["ちょっと{待って}！", "Wait a second!"],
      ["駅で友だちを{待って}いる。", "I'm waiting for a friend at the station."],
      ["お返事を楽しみに{待って}います。", "I look forward to hearing from you."]
    ] },
  { k: null, r: "ぴかぴか", en: "sparkling; shiny; brand new", pos: "onomatopoeia",
    ex: [
      ["車を洗ったら{ぴかぴか}になった。", "After I washed the car, it was sparkling."],
      ["{ぴかぴか}の一年生。", "A bright-eyed new first grader."],
      ["床を{ぴかぴか}に磨いた。", "I polished the floor until it shone."]
    ] },
  { k: "夕焼け", r: "ゆうやけ", en: "the red glow of the sunset", pos: "noun",
    ex: [
      ["{夕焼け}で空が真っ赤だ。", "The sky is bright red from the sunset."],
      ["海で見た{夕焼け}が忘れられない。", "I can't forget the sunset I saw at the sea."],
      ["{夕焼け}がきれいだと、明日は晴れるらしい。", "They say a beautiful sunset means it will be sunny tomorrow."]
    ] },
  { k: "美しい", r: "うつくしい", en: "beautiful", pos: "i-adjective",
    note: "More formal and literary than きれい.",
    ex: [
      ["富士山は本当に{美しい}。", "Mt. Fuji is truly beautiful."],
      ["{美しい}音楽に心が動かされた。", "I was moved by the beautiful music."],
      ["秋の山は色が{美しい}。", "The colors of the mountains in autumn are beautiful."]
    ] },
  { k: "降る", r: "ふる", en: "to fall (rain, snow)", pos: "verb (godan)",
    ex: [
      ["雨が{降って}きた。", "It started to rain."],
      ["明日は雪が{降る}かもしれない。", "It might snow tomorrow."],
      ["一晩中雨が{降って}いた。", "It rained all night."]
    ] },
  { k: "お疲れ様", r: "おつかれさま", en: "thanks for your hard work; good work today", pos: "expression",
    note: "Used with coworkers and friends after work or effort. Add です or でした to be polite.",
    ex: [
      ["今日も一日{お疲れ様}でした。", "Thanks for all your hard work today."],
      ["{お疲れ様}！先に帰るね。", "Good work! I'm heading home first."],
      ["試合、{お疲れ様}。よく頑張ったね。", "Well played. You did great."]
    ] },
  { k: "甘い", r: "あまい", en: "sweet; lenient; naive", pos: "i-adjective",
    ex: [
      ["このケーキは{甘くて}おいしい。", "This cake is sweet and delicious."],
      ["おじいちゃんは孫に{甘い}。", "Grandpa is soft on his grandchildren."],
      ["その考えは{甘い}よ。", "That's naive thinking."]
    ] },
  { k: "手紙", r: "てがみ", en: "letter (mail)", pos: "noun",
    ex: [
      ["母に{手紙}を書いた。", "I wrote a letter to my mother."],
      ["昔の友だちから{手紙}が届いた。", "A letter arrived from an old friend."],
      ["{手紙}で気持ちを伝えた。", "I conveyed my feelings in a letter."]
    ] },
  { k: "笑う", r: "わらう", en: "to laugh; to smile", pos: "verb (godan)",
    ex: [
      ["彼の冗談にみんな{笑った}。", "Everyone laughed at his joke."],
      ["赤ちゃんがにこにこ{笑って}いる。", "The baby is smiling happily."],
      ["{笑う}門には福来る。", "Fortune comes to the house that laughs. (proverb)"]
    ] },
  { k: null, r: "わくわく", en: "excited; thrilled (looking forward)", pos: "onomatopoeia",
    ex: [
      ["明日の旅行が楽しみで{わくわく}する。", "I'm so excited about tomorrow's trip."],
      ["新しいことを始めるのは{わくわく}する。", "Starting something new is thrilling."],
      ["子どもたちは{わくわく}しながらプレゼントを開けた。", "The children excitedly opened their presents."]
    ] },
  { k: "朝", r: "あさ", en: "morning", pos: "noun",
    ex: [
      ["毎{朝}六時に起きる。", "I get up at six every morning."],
      ["{朝}の空気は気持ちいい。", "The morning air feels nice."],
      ["日曜日の{朝}はゆっくり寝る。", "I sleep in on Sunday mornings."]
    ] },
  { k: "眩しい", r: "まぶしい", en: "dazzling; too bright to look at", pos: "i-adjective",
    ex: [
      ["太陽が{眩しくて}目が開けられない。", "The sun is so bright I can't open my eyes."],
      ["雪に反射した光が{眩しい}。", "The light reflecting off the snow is dazzling."],
      ["彼女の笑顔が{眩しかった}。", "Her smile was radiant."]
    ] },
  { k: "思い出", r: "おもいで", en: "memory (of an experience); keepsake", pos: "noun",
    ex: [
      ["この写真には楽しい{思い出}がたくさんある。", "This photo holds lots of happy memories."],
      ["日本旅行はいい{思い出}になった。", "The trip to Japan became a wonderful memory."],
      ["{思い出}の場所にもう一度行きたい。", "I want to visit that place full of memories again."]
    ] },
  { k: "遊ぶ", r: "あそぶ", en: "to play; to hang out", pos: "verb (godan)",
    ex: [
      ["子どもたちが公園で{遊んで}いる。", "The children are playing in the park."],
      ["週末、うちに{遊び}に来ない？", "Want to come over this weekend?"],
      ["昨日は友だちと夜まで{遊んだ}。", "I hung out with friends until night yesterday."]
    ] },
  { k: "恥ずかしい", r: "はずかしい", en: "embarrassed; shy; embarrassing", pos: "i-adjective",
    ex: [
      ["人前で話すのは{恥ずかしい}。", "Speaking in front of people is embarrassing."],
      ["名前を間違えて、{恥ずかしかった}。", "I got their name wrong and was so embarrassed."],
      ["そんなに見ないで、{恥ずかしい}から。", "Don't stare like that, it's embarrassing."]
    ] },
  { k: "雨宿り", r: "あまやどり", en: "taking shelter from the rain", pos: "noun (する verb)",
    ex: [
      ["急に雨が降ってきたので、お店で{雨宿り}した。", "It suddenly started raining, so I took shelter in a shop."],
      ["木の下で{雨宿り}をした。", "We sheltered from the rain under a tree."],
      ["駅で{雨宿り}している人が多い。", "Lots of people are waiting out the rain at the station."]
    ] },
  { k: "楽しむ", r: "たのしむ", en: "to enjoy", pos: "verb (godan)",
    ex: [
      ["旅行を{楽しんで}きてね。", "Enjoy your trip!"],
      ["音楽を聞きながら料理を{楽しむ}。", "I enjoy cooking while listening to music."],
      ["失敗を恐れずに、もっと{楽しもう}。", "Let's not fear failure and enjoy it more."]
    ] },
  { k: null, r: "そろそろ", en: "soon; it's about time (to)", pos: "adverb",
    ex: [
      ["{そろそろ}帰ろうか。", "Shall we head home soon?"],
      ["{そろそろ}寝る時間だよ。", "It's almost time for bed."],
      ["{そろそろ}桜が咲くころだ。", "The cherry blossoms should be blooming any day now."]
    ] },
  { k: "温かい", r: "あたたかい", en: "warm (to the touch); warm-hearted", pos: "i-adjective",
    note: "暖かい is used for weather; 温かい for things, food and feelings.",
    ex: [
      ["{温かい}スープが飲みたい。", "I want some warm soup."],
      ["みんなの{温かい}言葉がうれしかった。", "Everyone's warm words made me happy."],
      ["手が{温かい}ね。", "Your hands are warm."]
    ] },
  { k: "宝物", r: "たからもの", en: "treasure; prized possession", pos: "noun",
    ex: [
      ["この時計は私の{宝物}だ。", "This watch is my treasure."],
      ["子どもたちは家族の{宝物}です。", "Children are a family's greatest treasure."],
      ["祖母の手紙を{宝物}のように大切にしている。", "I cherish my grandmother's letters like treasure."]
    ] },
  { k: "選ぶ", r: "えらぶ", en: "to choose", pos: "verb (godan)",
    ex: [
      ["好きな色を{選んで}ください。", "Please choose your favorite color."],
      ["プレゼントを{選ぶ}のに一時間かかった。", "It took me an hour to choose a present."],
      ["どちらを{選んで}も正解だよ。", "Whichever you pick, it's the right answer."]
    ] },
  { k: "寂しい", r: "さびしい", en: "lonely; missing someone", pos: "i-adjective",
    ex: [
      ["友だちが引っ越して、{寂しい}。", "My friend moved away and I miss them."],
      ["一人で食べるご飯は{寂しい}。", "Eating alone is lonely."],
      ["冬の海は少し{寂しい}感じがする。", "The sea in winter feels a little lonely."]
    ] },
  { k: "居眠り", r: "いねむり", en: "dozing off (while sitting up)", pos: "noun (する verb)",
    ex: [
      ["授業中に{居眠り}してしまった。", "I dozed off during class."],
      ["電車で{居眠り}をして、駅を乗り過ごした。", "I nodded off on the train and missed my stop."],
      ["{居眠り}運転は危ない。", "Falling asleep at the wheel is dangerous."]
    ] },
  { k: "晴れる", r: "はれる", en: "to clear up (weather); to be cleared (of doubt)", pos: "verb (ichidan)",
    ex: [
      ["午後から{晴れる}そうだ。", "Apparently it'll clear up in the afternoon."],
      ["雨がやんで、空が{晴れた}。", "The rain stopped and the sky cleared."],
      ["話を聞いて、気持ちが{晴れた}。", "Talking it through cleared my mind."]
    ] },
  { k: null, r: "ふわふわ", en: "fluffy; soft and light; floaty", pos: "onomatopoeia",
    ex: [
      ["このパンケーキは{ふわふわ}だ。", "These pancakes are so fluffy."],
      ["猫の毛が{ふわふわ}している。", "The cat's fur is soft and fluffy."],
      ["熱があって、頭が{ふわふわ}する。", "I have a fever and my head feels floaty."]
    ] },
  { k: "心", r: "こころ", en: "heart; mind; spirit", pos: "noun",
    ex: [
      ["{心}から感謝しています。", "I'm grateful from the bottom of my heart."],
      ["その映画に{心}を動かされた。", "That movie moved me."],
      ["{心}の優しい人になりたい。", "I want to be a kind-hearted person."]
    ] },
  { k: "似合う", r: "にあう", en: "to suit; to look good on", pos: "verb (godan)",
    ex: [
      ["その帽子、よく{似合う}ね。", "That hat really suits you."],
      ["青い服が{似合う}と言われた。", "I was told blue clothes look good on me."],
      ["彼には静かな仕事が{似合って}いる。", "Quiet work suits him."]
    ] },
  { k: "悔しい", r: "くやしい", en: "frustrating; galling (after losing or failing)", pos: "i-adjective",
    ex: [
      ["一点差で負けて、本当に{悔しい}。", "Losing by one point is so frustrating."],
      ["{悔しくて}涙が出た。", "I was so frustrated that I cried."],
      ["その{悔しさ}をばねに、もっと練習した。", "I used that frustration to practice even harder."]
    ] },
  { k: "月見", r: "つきみ", en: "moon viewing (especially the autumn full moon)", pos: "noun",
    note: "月見うどん/月見バーガー have an egg that looks like the moon.",
    ex: [
      ["秋の夜にお{月見}をした。", "We did moon viewing on an autumn night."],
      ["{月見}団子を食べながら月を見た。", "We looked at the moon while eating moon-viewing dumplings."],
      ["今日は{月見}うどんにしよう。", "I'll have tsukimi udon (with an egg) today."]
    ] },
  { k: "迷う", r: "まよう", en: "to get lost; to be unable to decide", pos: "verb (godan)",
    ex: [
      ["初めての町で道に{迷った}。", "I got lost in a town I'd never been to."],
      ["どっちにするか{迷って}いる。", "I can't decide which one to pick."],
      ["{迷ったら}、やってみよう。", "When in doubt, give it a try."]
    ] },
  { k: "久しぶり", r: "ひさしぶり", en: "long time no see; for the first time in a long while", pos: "expression / na-adjective",
    ex: [
      ["{久しぶり}！元気だった？", "Long time no see! How have you been?"],
      ["{久しぶり}に映画館に行った。", "I went to the movies for the first time in ages."],
      ["お{久しぶり}です。", "It's been a long time. (polite)"]
    ] },
  { k: "酸っぱい", r: "すっぱい", en: "sour", pos: "i-adjective",
    ex: [
      ["このレモンはとても{酸っぱい}。", "This lemon is very sour."],
      ["梅干しは{酸っぱくて}食べられない。", "Pickled plums are too sour for me to eat."],
      ["牛乳が{酸っぱい}においがする。", "The milk smells sour."]
    ] },
  { k: "虹", r: "にじ", en: "rainbow", pos: "noun",
    ex: [
      ["雨のあとに{虹}が出た。", "A rainbow appeared after the rain."],
      ["空に大きな{虹}がかかっている。", "A big rainbow is stretching across the sky."],
      ["{虹}の色は七つあると言われている。", "It's said a rainbow has seven colors."]
    ] },
  { k: "届く", r: "とどく", en: "to reach; to arrive (delivery, message)", pos: "verb (godan)",
    ex: [
      ["注文した本が{届いた}。", "The book I ordered arrived."],
      ["棚が高くて手が{届かない}。", "The shelf is too high for me to reach."],
      ["私の気持ちが{届いた}らいいな。", "I hope my feelings reached them."]
    ] },
  { k: "偉い", r: "えらい", en: "great; admirable; important (person)", pos: "i-adjective",
    note: "Often used to praise effort: えらいね! = \"Good for you!\"",
    ex: [
      ["毎日早起きして、{偉い}ね。", "You get up early every day, good for you."],
      ["会社の{偉い}人が来た。", "Someone high up in the company came."],
      ["泣かなかったの？{偉かった}ね。", "You didn't cry? That was so brave."]
    ] },
  { k: "道", r: "みち", en: "road; path; way", pos: "noun",
    ex: [
      ["この{道}をまっすぐ行ってください。", "Please go straight along this road."],
      ["駅までの{道}を教えてもらえますか。", "Could you tell me the way to the station?"],
      ["自分の{道}は自分で決める。", "I'll choose my own path."]
    ] },
  { k: "育てる", r: "そだてる", en: "to raise; to grow (plants); to bring up", pos: "verb (ichidan)",
    ex: [
      ["ベランダでトマトを{育てて}いる。", "I'm growing tomatoes on the balcony."],
      ["三人の子どもを{育てた}。", "She raised three children."],
      ["若い選手を{育てる}のが仕事だ。", "My job is developing young players."]
    ] },
  { k: null, r: "どきどき", en: "heart pounding (nerves, excitement, love)", pos: "onomatopoeia",
    ex: [
      ["発表の前は{どきどき}する。", "My heart races before a presentation."],
      ["好きな人と話すと{どきどき}する。", "My heart pounds when I talk to the person I like."],
      ["結果を見るまで{どきどき}していた。", "I was nervous until I saw the results."]
    ] },
  { k: "憧れ", r: "あこがれ", en: "longing; admiration; someone you look up to", pos: "noun",
    ex: [
      ["パリは私の{憧れ}の町だ。", "Paris is the city of my dreams."],
      ["あの先輩は私の{憧れ}です。", "That senior is someone I really look up to."],
      ["子どものころから宇宙に{憧れ}を持っていた。", "I've longed for space since I was a kid."]
    ] },
  { k: "珍しい", r: "めずらしい", en: "rare; unusual", pos: "i-adjective",
    ex: [
      ["この辺で雪が降るのは{珍しい}。", "It's rare for it to snow around here."],
      ["{珍しい}鳥を見つけた。", "I spotted a rare bird."],
      ["あなたが遅れるなんて{珍しい}ね。", "It's unusual for you to be late."]
    ] },
  { k: "隣", r: "となり", en: "next to; next door; neighbor", pos: "noun",
    ex: [
      ["{隣}の席、空いていますか。", "Is the seat next to you free?"],
      ["{隣}の家に猫がいる。", "The house next door has a cat."],
      ["銀行は郵便局の{隣}にある。", "The bank is next to the post office."]
    ] },
  { k: "諦める", r: "あきらめる", en: "to give up", pos: "verb (ichidan)",
    ex: [
      ["最後まで{諦めない}で！", "Don't give up until the very end!"],
      ["雨で旅行を{諦めた}。", "We gave up on the trip because of the rain."],
      ["夢を{諦める}のはまだ早い。", "It's too early to give up on your dream."]
    ] },
  { k: "賑やか", r: "にぎやか", en: "lively; bustling; noisy (cheerfully)", pos: "na-adjective",
    ex: [
      ["お祭りの日は町が{賑やか}だ。", "The town is lively on festival days."],
      ["家族が集まると{賑やか}になる。", "It gets lively when the family gets together."],
      ["{賑やか}な通りを歩くのが好きだ。", "I like walking along bustling streets."]
    ] },
  { k: "生き甲斐", r: "いきがい", en: "a reason for living; what makes life worth living", pos: "noun",
    note: "Often written 生きがい.",
    ex: [
      ["孫の成長が祖母の{生きがい}だ。", "Watching her grandchildren grow is my grandmother's reason for living."],
      ["仕事に{生きがい}を感じている。", "I find meaning in my work."],
      ["あなたの{生きがい}は何ですか。", "What gives your life meaning?"]
    ] },
  { k: "戻る", r: "もどる", en: "to return; to go back", pos: "verb (godan)",
    ex: [
      ["すぐ{戻ります}。", "I'll be right back."],
      ["忘れ物をして、家に{戻った}。", "I forgot something and went back home."],
      ["元の生活に{戻りたい}。", "I want to go back to my old life."]
    ] },
  { k: "眠い", r: "ねむい", en: "sleepy", pos: "i-adjective",
    ex: [
      ["昨日遅く寝たから、{眠い}。", "I went to bed late yesterday, so I'm sleepy."],
      ["お昼ご飯のあとはいつも{眠く}なる。", "I always get sleepy after lunch."],
      ["{眠そう}な顔をしているね。", "You look sleepy."]
    ] },
  { k: "絆", r: "きずな", en: "bonds (between people); ties", pos: "noun",
    ex: [
      ["家族の{絆}は強い。", "Family bonds are strong."],
      ["困難を乗り越えて、チームの{絆}が深まった。", "Overcoming hardship deepened the team's bond."],
      ["友だちとの{絆}を大切にしたい。", "I want to treasure my bonds with friends."]
    ] },
  { k: "片付ける", r: "かたづける", en: "to tidy up; to put away; to finish off (a task)", pos: "verb (ichidan)",
    ex: [
      ["部屋を{片付けなさい}。", "Clean up your room."],
      ["食べ終わったら、お皿を{片付けて}ね。", "Put your plates away when you've finished eating."],
      ["今日中にこの仕事を{片付けたい}。", "I want to get this work done today."]
    ] },
  { k: "羨ましい", r: "うらやましい", en: "envious; enviable", pos: "i-adjective",
    ex: [
      ["来週ハワイ？{羨ましい}！", "Hawaii next week? I'm so jealous!"],
      ["英語が話せる人が{羨ましい}。", "I envy people who can speak English."],
      ["二人の仲の良さが{羨ましい}。", "I envy how close the two of them are."]
    ] },
  { k: "雪", r: "ゆき", en: "snow", pos: "noun",
    ex: [
      ["今年初めて{雪}が降った。", "It snowed for the first time this year."],
      ["子どもたちが{雪}だるまを作っている。", "The kids are making a snowman."],
      ["{雪}で電車が止まった。", "The trains stopped because of the snow."]
    ] },
  { k: "間に合う", r: "まにあう", en: "to be in time; to be enough", pos: "verb (godan)",
    ex: [
      ["走れば電車に{間に合う}よ。", "If we run, we'll make the train."],
      ["締め切りに{間に合わなかった}。", "I didn't make the deadline."],
      ["お金は足りる？—うん、{間に合って}いるよ。", "Do you have enough money? — Yeah, I'm fine."]
    ] },
  { k: null, r: "いい加減", en: "sloppy; irresponsible; (also) \"that's enough already!\"", pos: "na-adjective",
    note: "Written いい加減 (いい in kana). いい加減にして! = \"Cut it out!\"",
    ex: [
      ["彼は仕事が{いい加減}だ。", "He's sloppy with his work."],
      ["{いい加減}な返事をしないで。", "Don't give me a half-hearted answer."],
      ["もう{いい加減}にしなさい！", "That's enough already!"]
    ] },
  { k: "湯気", r: "ゆげ", en: "steam (rising from hot water or food)", pos: "noun",
    ex: [
      ["ラーメンから{湯気}が立っている。", "Steam is rising from the ramen."],
      ["お風呂場が{湯気}で真っ白だ。", "The bathroom is white with steam."],
      ["{湯気}で眼鏡が曇った。", "My glasses fogged up from the steam."]
    ] },
  { k: "頼む", r: "たのむ", en: "to ask (a favor); to request; to order (food)", pos: "verb (godan)",
    ex: [
      ["ちょっと{頼みたい}ことがあるんだけど。", "There's something I'd like to ask you."],
      ["ピザを{頼もう}か。", "Shall we order pizza?"],
      ["{頼む}から静かにして。", "Please, I'm begging you, be quiet."]
    ] },
  { k: "素直", r: "すなお", en: "honest and open; straightforward; obedient", pos: "na-adjective",
    ex: [
      ["{素直}に「ごめんね」と言えた。", "I was able to say \"sorry\" honestly."],
      ["あの子は{素直}でいい子だ。", "That child is open and well-behaved."],
      ["人の意見を{素直}に聞くことは大切だ。", "It's important to listen to others' opinions with an open mind."]
    ] },
  { k: "夜更かし", r: "よふかし", en: "staying up late", pos: "noun (する verb)",
    ex: [
      ["昨日は{夜更かし}してゲームをした。", "I stayed up late playing games yesterday."],
      ["{夜更かし}は体に悪い。", "Staying up late is bad for your health."],
      ["週末だけ{夜更かし}する。", "I only stay up late on weekends."]
    ] },
  { k: "慌てる", r: "あわてる", en: "to panic; to be flustered; to rush", pos: "verb (ichidan)",
    ex: [
      ["{慌てない}で、ゆっくりやろう。", "Don't panic, let's take it slow."],
      ["寝坊して、{慌てて}家を出た。", "I overslept and rushed out of the house."],
      ["地震のとき、{慌てて}外に出ないこと。", "During an earthquake, don't rush outside in a panic."]
    ] },
  { k: "切ない", r: "せつない", en: "heartrending; bittersweet; aching", pos: "i-adjective",
    ex: [
      ["この歌はとても{切ない}。", "This song is so heartrending."],
      ["別れの場面が{切なかった}。", "The farewell scene was bittersweet."],
      ["会えないのは{切ない}ね。", "It hurts not being able to see each other."]
    ] },
  { k: null, r: "ぐっすり", en: "soundly (asleep); deeply", pos: "adverb",
    ex: [
      ["昨日は{ぐっすり}眠れた。", "I slept soundly last night."],
      ["赤ちゃんが{ぐっすり}寝ている。", "The baby is fast asleep."],
      ["疲れていたので、朝まで{ぐっすり}だった。", "I was so tired that I slept like a log until morning."]
    ] },
  { k: "港", r: "みなと", en: "harbor; port", pos: "noun",
    ex: [
      ["船が{港}に着いた。", "The ship arrived at the harbor."],
      ["{港}の近くにおいしい魚屋がある。", "There's a great fish shop near the port."],
      ["夜の{港}は静かだった。", "The harbor was quiet at night."]
    ] },
  { k: "気付く", r: "きづく", en: "to notice; to realize", pos: "verb (godan)",
    note: "Often written 気づく.",
    ex: [
      ["間違いに{気づいた}。", "I noticed the mistake."],
      ["髪を切ったの、{気づいて}くれた？", "Did you notice I cut my hair?"],
      ["大切なものは失って初めて{気づく}。", "You only realize what's precious once it's gone."]
    ] },
  { k: "怖い", r: "こわい", en: "scary; afraid", pos: "i-adjective",
    ex: [
      ["{怖い}映画は苦手だ。", "I'm not good with scary movies."],
      ["高いところが{怖い}。", "I'm afraid of heights."],
      ["失敗を{怖がらないで}。", "Don't be afraid of failing."]
    ] },
  { k: "見送る", r: "みおくる", en: "to see someone off; to let something pass", pos: "verb (godan)",
    ex: [
      ["空港まで友だちを{見送り}に行った。", "I went to the airport to see my friend off."],
      ["一本電車を{見送って}、次のに乗った。", "I let one train go and took the next."],
      ["今回は参加を{見送る}ことにした。", "I decided to pass on joining this time."]
    ] },
  { k: "和む", r: "なごむ", en: "to be soothed; to relax; to feel at ease", pos: "verb (godan)",
    ex: [
      ["猫を見ていると心が{和む}。", "Watching cats soothes my heart."],
      ["彼の冗談で場が{和んだ}。", "His joke eased the mood in the room."],
      ["{和やか}な雰囲気の会だった。", "It was a meeting with a relaxed, friendly atmosphere."]
    ] },
  { k: null, r: "しみじみ", en: "deeply; keenly (feeling something quietly)", pos: "adverb",
    ex: [
      ["親のありがたさを{しみじみ}感じた。", "I deeply felt how much my parents mean to me."],
      ["古い友だちと{しみじみ}語り合った。", "I had a heartfelt talk with an old friend."],
      ["{しみじみ}とした味のスープだ。", "It's a soup with a quiet, comforting flavor."]
    ] },
  { k: "名残", r: "なごり", en: "lingering trace; remnant; reluctance to part", pos: "noun",
    note: "名残惜しい = sad to part, wishing it could last longer.",
    ex: [
      ["まだ冬の{名残}がある。", "Traces of winter still linger."],
      ["{名残}惜しいけど、そろそろ帰ります。", "I hate to leave, but I'll head home now."],
      ["この町には昔の{名残}が残っている。", "This town still has traces of the old days."]
    ] },
  { k: "手伝う", r: "てつだう", en: "to help; to assist", pos: "verb (godan)",
    ex: [
      ["引っ越しを{手伝って}くれる？", "Will you help me move?"],
      ["母の料理を{手伝った}。", "I helped my mom cook."],
      ["何か{手伝う}ことはありますか。", "Is there anything I can help with?"]
    ] },
  { k: "鮮やか", r: "あざやか", en: "vivid; brilliant; skillful", pos: "na-adjective",
    ex: [
      ["紅葉の色が{鮮やか}だ。", "The autumn leaves are vivid."],
      ["その日のことを{鮮やか}に覚えている。", "I remember that day vividly."],
      ["{鮮やか}な手つきで魚をさばいた。", "He filleted the fish with impressive skill."]
    ] },
  { k: "物足りない", r: "ものたりない", en: "unsatisfying; something's missing", pos: "i-adjective",
    ex: [
      ["この料理は少し{物足りない}。", "This dish is missing something."],
      ["彼がいないと{物足りない}。", "It's not the same without him."],
      ["短い休みでは{物足りない}。", "A short break just isn't enough."]
    ] },
  { k: "堪える", r: "こらえる", en: "to hold back (tears, laughter); to endure", pos: "verb (ichidan)",
    ex: [
      ["涙を{こらえて}笑った。", "I held back my tears and smiled."],
      ["笑いを{こらえる}のが大変だった。", "It was hard to keep from laughing."],
      ["痛みを{こらえて}最後まで走った。", "I endured the pain and ran to the end."]
    ], kana: true },
  { k: "心地よい", r: "ここちよい", en: "pleasant; comfortable; soothing", pos: "i-adjective",
    ex: [
      ["{心地よい}風が吹いている。", "A pleasant breeze is blowing."],
      ["波の音が{心地よい}。", "The sound of the waves is soothing."],
      ["このソファは{心地よくて}眠くなる。", "This sofa is so comfy it makes me sleepy."]
    ] },
  { k: null, r: "うっかり", en: "carelessly; absent-mindedly; by accident", pos: "adverb",
    ex: [
      ["{うっかり}鍵を忘れた。", "I absent-mindedly forgot my keys."],
      ["{うっかり}秘密を話してしまった。", "I accidentally let the secret slip."],
      ["{うっかり}ミスに気をつけよう。", "Watch out for careless mistakes."]
    ] },
  { k: "足元", r: "あしもと", en: "at one's feet; one's footing", pos: "noun",
    ex: [
      ["{足元}に気をつけてください。", "Please watch your step."],
      ["猫が{足元}に寄ってきた。", "The cat came up to my feet."],
      ["暗いので{足元}を照らした。", "It was dark, so I lit up the ground at my feet."]
    ] },
  { k: "励ます", r: "はげます", en: "to encourage; to cheer up", pos: "verb (godan)",
    ex: [
      ["落ち込んでいる友だちを{励ました}。", "I cheered up a friend who was feeling down."],
      ["先生の言葉に{励まされた}。", "I was encouraged by my teacher's words."],
      ["お互いに{励まし}合って頑張った。", "We encouraged each other and kept going."]
    ] },
  { k: "厚かましい", r: "あつかましい", en: "brazen; shameless; pushy", pos: "i-adjective",
    note: "Often used humbly: 厚かましいお願いですが… = \"I'm sorry to ask such a big favor, but…\"",
    ex: [
      ["{厚かましい}お願いですが、手伝っていただけますか。", "I'm sorry to impose, but could you help me?"],
      ["列に割り込むなんて{厚かましい}。", "Cutting in line is so shameless."],
      ["{厚かましく}二回もおかわりした。", "I shamelessly went back for seconds twice."]
    ] },
  { k: "明かり", r: "あかり", en: "light; lamp; a glow", pos: "noun",
    note: "Also written 灯り for lamplight.",
    ex: [
      ["部屋の{明かり}をつけて。", "Turn on the light in the room."],
      ["遠くに町の{明かり}が見える。", "I can see the town lights in the distance."],
      ["ろうそくの{明かり}で本を読んだ。", "I read by candlelight."]
    ] },
  { k: "響く", r: "ひびく", en: "to echo; to resonate; to strike a chord", pos: "verb (godan)",
    ex: [
      ["お寺の鐘の音が{響いた}。", "The sound of the temple bell echoed."],
      ["彼の言葉が心に{響いた}。", "His words struck a chord with me."],
      ["夜更かしは次の日に{響く}。", "Staying up late takes its toll the next day."]
    ] },
  { k: "儚い", r: "はかない", en: "fleeting; transient; fragile", pos: "i-adjective",
    ex: [
      ["桜の命は{儚い}。", "The life of cherry blossoms is fleeting."],
      ["{儚い}夢だった。", "It was a short-lived dream."],
      ["花火は美しくて{儚い}。", "Fireworks are beautiful and fleeting."]
    ] },
  { k: null, r: "のんびり", en: "leisurely; carefree; relaxed", pos: "adverb",
    ex: [
      ["田舎で{のんびり}暮らしたい。", "I want to live a relaxed life in the countryside."],
      ["休みの日は{のんびり}過ごす。", "I take it easy on my days off."],
      ["彼は{のんびり}した性格だ。", "He has an easygoing personality."]
    ] },
  { k: "春", r: "はる", en: "spring (season)", pos: "noun",
    ex: [
      ["{春}になると桜が咲く。", "The cherry blossoms bloom when spring comes."],
      ["{春}休みに京都へ行く。", "I'm going to Kyoto over spring break."],
      ["もうすぐ{春}だね。", "It's almost spring."]
    ] },
  { k: "見逃す", r: "みのがす", en: "to miss (seeing); to overlook; to let slide", pos: "verb (godan)",
    ex: [
      ["好きな番組を{見逃した}。", "I missed my favorite show."],
      ["小さなミスも{見逃さない}。", "I don't overlook even small mistakes."],
      ["今回だけは{見逃して}あげる。", "I'll let it slide just this once."]
    ] },
  { k: "頼もしい", r: "たのもしい", en: "reliable; dependable; promising", pos: "i-adjective",
    ex: [
      ["新しいキャプテンは{頼もしい}。", "The new captain is really dependable."],
      ["あなたがいてくれて{頼もしい}よ。", "It's reassuring to have you here."],
      ["{頼もしい}若者たちが育っている。", "Promising young people are growing up."]
    ] },
  { k: "小腹", r: "こばら", en: "a little bit of hunger (between meals)", pos: "noun",
    note: "Almost always in the phrase 小腹が空く (to feel a bit peckish).",
    ex: [
      ["{小腹}が空いたから、おにぎりを食べよう。", "I'm a bit peckish, so I'll have a rice ball."],
      ["{小腹}が空いたときにちょうどいいお菓子だ。", "It's the perfect snack for when you're a little hungry."],
      ["夜中に{小腹}が空いてしまった。", "I got a little hungry in the middle of the night."]
    ] },
  { k: "誇り", r: "ほこり", en: "pride (in something good)", pos: "noun",
    ex: [
      ["自分の仕事に{誇り}を持っている。", "I take pride in my work."],
      ["あなたは私たちの{誇り}です。", "You are our pride and joy."],
      ["チームの一員であることを{誇り}に思う。", "I'm proud to be part of the team."]
    ] },
  { k: "確かめる", r: "たしかめる", en: "to check; to make sure; to confirm", pos: "verb (ichidan)",
    ex: [
      ["出かける前に鍵を{確かめた}。", "I checked the lock before going out."],
      ["本当かどうか自分の目で{確かめたい}。", "I want to see for myself whether it's true."],
      ["答えをもう一度{確かめて}ください。", "Please check your answers once more."]
    ] },
  { k: "爽やか", r: "さわやか", en: "refreshing; fresh; pleasant (person, weather)", pos: "na-adjective",
    ex: [
      ["今朝は{爽やか}な天気だ。", "The weather is fresh and pleasant this morning."],
      ["ミントの{爽やか}な香りがする。", "There's a refreshing scent of mint."],
      ["彼は笑顔が{爽やか}な人だ。", "He's someone with a bright, refreshing smile."]
    ] },
  { k: null, r: "ちょうど", en: "exactly; just; right (at that moment)", pos: "adverb",
    ex: [
      ["今{ちょうど}三時です。", "It's exactly three o'clock."],
      ["{ちょうど}電話しようと思っていたところ。", "I was just about to call you."],
      ["このサイズが{ちょうど}いい。", "This size is just right."]
    ] },
  { k: "雫", r: "しずく", en: "a drop (of water, dew, rain)", pos: "noun",
    ex: [
      ["葉っぱに雨の{雫}がついている。", "There are raindrops on the leaves."],
      ["蛇口から{雫}が落ちる音がする。", "I can hear drops falling from the tap."],
      ["朝露の{雫}が光っている。", "Drops of morning dew are glistening."]
    ] },
  { k: "戸惑う", r: "とまどう", en: "to be bewildered; to be at a loss", pos: "verb (godan)",
    ex: [
      ["急に聞かれて{戸惑った}。", "I was thrown when they suddenly asked me."],
      ["日本に来たばかりのころは、いろいろ{戸惑った}。", "When I first came to Japan, lots of things confused me."],
      ["新しいルールに{戸惑う}人も多い。", "Many people are puzzled by the new rules."]
    ] },
  { k: "潔い", r: "いさぎよい", en: "graceful (in accepting defeat); manly and resolute; clean", pos: "i-adjective",
    ex: [
      ["{潔く}負けを認めた。", "He gracefully admitted defeat."],
      ["言い訳しないのは{潔い}。", "Not making excuses is admirable."],
      ["{潔い}決断だった。", "It was a clean, decisive choice."]
    ] },
  { k: "お互い様", r: "おたがいさま", en: "it's mutual; we're in the same boat; no need to thank me", pos: "expression",
    ex: [
      ["困ったときは{お互い様}だよ。", "We all help each other when times are tough."],
      ["ありがとう。—いいえ、{お互い様}です。", "Thank you. — Not at all, you'd do the same for me."],
      ["忙しいのは{お互い様}だね。", "We're both busy, aren't we."]
    ] },
  { k: "黄昏", r: "たそがれ", en: "dusk; twilight; (figuratively) the twilight years", pos: "noun",
    note: "From 誰そ彼 (\"who is that?\") — the hour when faces are hard to make out.",
    ex: [
      ["{黄昏}どきの空は紫色だ。", "The sky at dusk is purple."],
      ["海辺で{黄昏}を眺めた。", "I watched the twilight by the sea."],
      ["人生の{黄昏}を穏やかに過ごしたい。", "I want to spend the twilight of my life peacefully."]
    ] },
  { k: "甘える", r: "あまえる", en: "to lean on someone's kindness; to act spoiled", pos: "verb (ichidan)",
    ex: [
      ["お言葉に{甘えて}、お先に失礼します。", "Taking you up on your kind offer, I'll head out first."],
      ["猫が{甘えて}くる。", "The cat is being affectionate and wants attention."],
      ["親に{甘えて}ばかりではいけない。", "You can't just keep relying on your parents."]
    ] },
  { k: "煌めく", r: "きらめく", en: "to sparkle; to glitter", pos: "verb (godan)", kana: true,
    ex: [
      ["夜空に星が{きらめいて}いる。", "Stars are sparkling in the night sky."],
      ["水面が光に{きらめく}。", "The water's surface glitters in the light."],
      ["{きらめく}街の明かりがきれいだ。", "The glittering city lights are beautiful."]
    ] },
  { k: "健気", r: "けなげ", en: "admirably brave (of someone small or weak trying hard)", pos: "na-adjective",
    ex: [
      ["小さな子が{健気}に頑張っている。", "The little one is bravely doing their best."],
      ["病気なのに笑顔を見せる姿が{健気}だ。", "Smiling despite being ill is so touching."],
      ["コンクリートの間に咲く{健気}な花。", "A brave little flower blooming between the concrete."]
    ] },
  { k: null, r: "ほっとする", en: "to feel relieved", pos: "verb (する)",
    ex: [
      ["無事に着いて{ほっとした}。", "I was relieved to arrive safely."],
      ["家に帰ると{ほっとする}。", "I feel at ease when I get home."],
      ["試験が終わって{ほっとして}いる。", "I'm relieved the exam is over."]
    ] },
  { k: "夜明け", r: "よあけ", en: "dawn; daybreak", pos: "noun",
    ex: [
      ["{夜明け}前に山に登り始めた。", "We started climbing the mountain before dawn."],
      ["{夜明け}の空がだんだん明るくなる。", "The dawn sky slowly grows brighter."],
      ["新しい時代の{夜明け}だ。", "It's the dawn of a new era."]
    ] },
  { k: "振り返る", r: "ふりかえる", en: "to look back (over your shoulder); to reflect on", pos: "verb (godan)",
    ex: [
      ["名前を呼ばれて{振り返った}。", "I turned around when someone called my name."],
      ["この一年を{振り返って}みよう。", "Let's look back on this past year."],
      ["{振り返らず}に前に進む。", "I move forward without looking back."]
    ] },
  { k: "気まずい", r: "きまずい", en: "awkward; uncomfortable (socially)", pos: "i-adjective",
    ex: [
      ["けんかしてから、{気まずい}。", "Things have been awkward since we argued."],
      ["エレベーターで元カレと二人きりで{気まずかった}。", "Being alone in the elevator with my ex was awkward."],
      ["{気まずい}沈黙が続いた。", "An awkward silence went on."]
    ] },
  { k: "心細い", r: "こころぼそい", en: "helpless and uneasy; lonely and worried", pos: "i-adjective",
    ex: [
      ["知らない町で一人は{心細い}。", "Being alone in an unfamiliar town is unnerving."],
      ["夜道を一人で歩くのは{心細かった}。", "Walking alone on the dark road made me uneasy."],
      ["電池が少なくて{心細い}。", "My battery's low and it's making me nervous."]
    ] },
  { k: null, r: "つい", en: "unintentionally; (couldn't help but); just (a moment ago)", pos: "adverb",
    ex: [
      ["おいしくて{つい}食べすぎた。", "It was so good I couldn't help overeating."],
      ["{つい}本当のことを言ってしまった。", "I let the truth slip before I knew it."],
      ["{つい}さっき帰ってきたところだ。", "I got back just a moment ago."]
    ] },
  { k: "手間", r: "てま", en: "time and effort; trouble", pos: "noun",
    ex: [
      ["この料理は{手間}がかかる。", "This dish takes a lot of effort."],
      ["お{手間}をおかけしました。", "Sorry for the trouble I caused you."],
      ["{手間}を省くために、まとめて買う。", "I buy in bulk to save effort."]
    ] },
  { k: "寄り道", r: "よりみち", en: "stopping somewhere on the way; a detour", pos: "noun (する verb)",
    ex: [
      ["帰りに本屋に{寄り道}した。", "I stopped by a bookstore on the way home."],
      ["{寄り道}しないでまっすぐ帰りなさい。", "Come straight home without stopping anywhere."],
      ["人生には{寄り道}も大切だ。", "Detours in life matter too."]
    ] },
  { k: "微笑む", r: "ほほえむ", en: "to smile (gently)", pos: "verb (godan)",
    ex: [
      ["彼女は静かに{微笑んだ}。", "She smiled quietly."],
      ["赤ちゃんが母親に{微笑む}。", "The baby smiles at its mother."],
      ["幸運の女神が{微笑んで}くれた。", "Lady Luck smiled on me."]
    ] },
  { k: "幼馴染", r: "おさななじみ", en: "childhood friend", pos: "noun",
    note: "Also written 幼なじみ.",
    ex: [
      ["彼とは{幼なじみ}だ。", "He and I are childhood friends."],
      ["{幼なじみ}と久しぶりに会った。", "I met up with my childhood friend for the first time in ages."],
      ["{幼なじみ}だから、何でも話せる。", "We grew up together, so I can tell them anything."]
    ] },
  { k: "思い掛けない", r: "おもいがけない", en: "unexpected; out of the blue", pos: "i-adjective", kana: true,
    note: "Usually written 思いがけない.",
    ex: [
      ["{思いがけない}プレゼントをもらった。", "I got an unexpected present."],
      ["旅先で{思いがけない}出会いがあった。", "I had a chance encounter on my trip."],
      ["{思いがけず}昔の友だちに会った。", "I ran into an old friend out of the blue."]
    ] },
  { k: "紅葉", r: "もみじ", en: "autumn leaves; Japanese maple", pos: "noun", kana: true,
    note: "Also read こうよう when meaning \"the leaves changing color.\"",
    ex: [
      ["{もみじ}が赤く色づいた。", "The maple leaves have turned red."],
      ["京都へ{もみじ}狩りに行った。", "We went to Kyoto to see the autumn leaves."],
      ["{もみじ}の葉は赤ちゃんの手みたいだ。", "Maple leaves look like a baby's hand."]
    ] },
  { k: "恵み", r: "めぐみ", en: "blessing; grace; bounty (of nature)", pos: "noun",
    ex: [
      ["雨は農家にとって{恵み}だ。", "Rain is a blessing for farmers."],
      ["自然の{恵み}に感謝する。", "We give thanks for nature's bounty."],
      ["海の{恵み}をいただく。", "We enjoy the gifts of the sea."]
    ] },
  { k: "瞼", r: "まぶた", en: "eyelid", pos: "noun", kana: true,
    ex: [
      ["眠くて{まぶた}が重い。", "I'm so sleepy my eyelids are heavy."],
      ["{まぶた}を閉じると、故郷の景色が浮かぶ。", "When I close my eyes, I see my hometown."],
      ["泣いて{まぶた}が腫れた。", "My eyelids got puffy from crying."]
    ] },
  { k: "憎めない", r: "にくめない", en: "impossible to dislike; lovable despite faults", pos: "i-adjective (expression)",
    ex: [
      ["彼はいつも遅刻するけど、{憎めない}人だ。", "He's always late, but you can't help liking him."],
      ["あの犬はいたずら好きだけど{憎めない}。", "That dog is mischievous, but impossible to stay mad at."],
      ["{憎めない}笑顔で謝られた。", "They apologized with a smile I couldn't resist."]
    ] },
  { k: "目覚まし", r: "めざまし", en: "alarm clock; something that wakes you up", pos: "noun",
    ex: [
      ["{目覚まし}を六時にセットした。", "I set my alarm for six."],
      ["{目覚まし}が鳴っても起きられなかった。", "I couldn't get up even when the alarm went off."],
      ["{目覚まし}にコーヒーを飲む。", "I drink coffee to wake myself up."]
    ] },
  { k: "仕草", r: "しぐさ", en: "gesture; mannerism; the way someone moves", pos: "noun",
    ex: [
      ["猫の{仕草}がかわいい。", "The cat's little movements are adorable."],
      ["考えるときに髪をさわる{仕草}がある。", "They have a habit of touching their hair when thinking."],
      ["{仕草}で気持ちが伝わることもある。", "Sometimes gestures convey feelings."]
    ] },
  { k: "晴れ晴れ", r: "はればれ", en: "refreshed; cheerful; clear (mood or sky)", pos: "adverb / する verb",
    ex: [
      ["試験が終わって{晴れ晴れ}とした気分だ。", "The exam's over and I feel so free."],
      ["{晴れ晴れ}とした顔で帰ってきた。", "They came home looking cheerful and relieved."],
      ["悩みを話したら気持ちが{晴れ晴れ}した。", "Talking about my worries cleared my head."]
    ] },
  { k: "息抜き", r: "いきぬき", en: "a breather; a short break to relax", pos: "noun (する verb)",
    ex: [
      ["たまには{息抜き}も必要だよ。", "You need a breather now and then."],
      ["{息抜き}に散歩に行こう。", "Let's go for a walk to take a break."],
      ["勉強の{息抜き}にゲームをした。", "I played a game as a break from studying."]
    ] },
  { k: "初雪", r: "はつゆき", en: "the first snow of the season", pos: "noun",
    ex: [
      ["今朝、{初雪}が降った。", "The first snow of the year fell this morning."],
      ["{初雪}を見ると冬が来たと感じる。", "Seeing the first snow makes me feel winter has arrived."],
      ["今年の{初雪}は例年より早い。", "This year's first snow came earlier than usual."]
    ] },
  { k: "見栄", r: "みえ", en: "vanity; keeping up appearances", pos: "noun",
    note: "見栄を張る = to show off, to put on airs.",
    ex: [
      ["{見栄}を張って高い時計を買った。", "I bought an expensive watch to show off."],
      ["{見栄}なんて気にしなくていい。", "You don't have to worry about appearances."],
      ["彼は{見栄}っ張りだ。", "He's a show-off."]
    ] },
  { k: "ずぶ濡れ", r: "ずぶぬれ", en: "soaking wet; drenched", pos: "noun / na-adjective",
    ex: [
      ["傘がなくて{ずぶ濡れ}になった。", "I had no umbrella and got drenched."],
      ["子どもたちは川で遊んで{ずぶ濡れ}だ。", "The kids played in the river and are soaked."],
      ["{ずぶ濡れ}の犬が帰ってきた。", "The dog came home soaking wet."]
    ] },
  { k: "鼻歌", r: "はなうた", en: "humming (a tune)", pos: "noun",
    ex: [
      ["{鼻歌}を歌いながら料理をする。", "I hum while I cook."],
      ["何かいいことあった？{鼻歌}なんか歌って。", "Something good happen? You're humming."],
      ["父はお風呂でいつも{鼻歌}を歌う。", "My dad always hums in the bath."]
    ] },
  { k: "手作り", r: "てづくり", en: "handmade; homemade", pos: "noun",
    ex: [
      ["{手作り}のケーキをもらった。", "I was given a homemade cake."],
      ["このかばんは{手作り}です。", "This bag is handmade."],
      ["{手作り}のお弁当はおいしい。", "Homemade bento tastes great."]
    ] },
  { k: "仲直り", r: "なかなおり", en: "making up (after a fight); reconciliation", pos: "noun (する verb)",
    ex: [
      ["けんかした友だちと{仲直り}した。", "I made up with the friend I'd fought with."],
      ["早く{仲直り}したほうがいいよ。", "You should make up soon."],
      ["{仲直り}のしるしに、一緒にご飯を食べた。", "We had a meal together as a sign we'd made up."]
    ] },
  { k: "空回り", r: "からまわり", en: "spinning your wheels; trying hard but getting nowhere", pos: "noun (する verb)",
    ex: [
      ["やる気が{空回り}してしまった。", "My enthusiasm just didn't get me anywhere."],
      ["一人で頑張っても{空回り}するだけだ。", "Trying hard on your own just spins your wheels."],
      ["緊張して話が{空回り}した。", "I was nervous and my talk went nowhere."]
    ] },
  { k: "一人ぼっち", r: "ひとりぼっち", en: "all alone; on one's own (lonely)", pos: "noun",
    ex: [
      ["{一人ぼっち}で寂しかった。", "I was all alone and lonely."],
      ["もう{一人ぼっち}じゃないよ。", "You're not alone anymore."],
      ["休み時間に{一人ぼっち}の子に声をかけた。", "I said hi to a kid who was alone at break time."]
    ] },
  { k: "猫舌", r: "ねこじた", en: "unable to eat or drink hot things (lit. \"cat tongue\")", pos: "noun",
    ex: [
      ["私は{猫舌}だから、熱いお茶は飲めない。", "I can't handle hot tea — I have a \"cat tongue.\""],
      ["{猫舌}なので、ラーメンを少し冷ましてから食べる。", "I can't eat hot food, so I let my ramen cool a bit first."],
      ["{猫舌}の人にはつらい料理だ。", "It's a tough dish for people who can't handle heat."]
    ] },
  { k: "口癖", r: "くちぐせ", en: "a phrase someone always says; verbal habit", pos: "noun",
    ex: [
      ["「忙しい」が父の{口癖}だ。", "\"I'm busy\" is my dad's catchphrase."],
      ["彼女の{口癖}がうつってしまった。", "I've picked up her pet phrase."],
      ["{口癖}は人柄を表す。", "The phrases you always say reveal your character."]
    ] },
  { k: "向日葵", r: "ひまわり", en: "sunflower", pos: "noun", kana: true,
    ex: [
      ["夏になると{ひまわり}が咲く。", "Sunflowers bloom when summer comes."],
      ["一面の{ひまわり}畑だった。", "It was a field full of sunflowers."],
      ["彼女は{ひまわり}のように明るい。", "She's as bright as a sunflower."]
    ] }
];
