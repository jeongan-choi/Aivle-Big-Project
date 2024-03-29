const contentsList = [
    {
        key: 0,
        title: "오징어게임",
        genre:["Comedy", "Thriller", "Action"],
        img: "/asset/images/contents/contents1.jpg",
        scene: "/asset/images/scene/scene1.jpg",
        path: "/practice",
        part1: ["제발 그만해. 나.. 나 무서워. 이러다가 다 죽어! 다.. 다 죽는단 말이야.",
        "Please stop. I'm... I'm scared. This will kill everyone! Everyone will die.",
        "jebal geumanhae. na.. na museowo. ireodaga da jugeo! da.. da jukneundan mariya.",
        "https://www.youtube.com/embed/aMUGb4G_Xz4?si=xknfGgfEPzPgo0cs"],
        part2: ["막 울면서 '미쳤어~ 개소리하지마~' 했잖아요.",
        "We cried and said, 'It's crazy. Don't talk like a dog.'",
        "mak ulmyeonseo 'michyeosseo~ gaesorihajima~' haessjanhayo.",
        "https://www.youtube.com/embed/9z-cVyGnTHg?si=-X6b0dN003oDKAJk&amp;clip=UgkxdjGen_2iHHktnk-Lrmgg5SzuzVJYHIa3&amp;clipt=EMAlGKRY"],
        part3: ["기훈이형! 형 인생이 왜 그 모양 그 꼴인지 알아? 지금 이 상황에도 그런 한심한 질문이나 하고 자빠졌으니까. ",
        "Ki-hoon! Do you know why your life is like that? Because you're asking such a pathetic question even in this situation.",
        "jesikaneun oedongttal, illinoi sikago, gwa seonbaeneun gimjinmo, geuneun ne sachon~gihunihyeong! hyeong insaengi wae geu moyang geu kkorinji ara? jigeum i sanghwangedo geureon hansimhan jilmunina hago jappajyeosseunikka.",
        "https://www.youtube.com/embed/M2iMlk3U9RM?si=CbUnxWAxYJR51GyU&amp;clip=UgkxwJLGR0Y23bcBWUmU36X1pEcMHEgmQNrr&amp;clipt=ENg2GKyYAQ"],
    },
    {   
        key: 1,
        title: "기생충",
        genre:["Comedy", "Thiller", "Action"],
        img: "/asset/images/contents/contents2.jpg",
        scene: "/asset/images/scene/scene2.jpg",
        path: "/practice",
        part1: ["어~ 너는 계획이 다 있구나.",
        "Oh~ you have all the plans",
        "eo neoneun gyehoegi da issguna.",
        "https://www.youtube.com/embed/-Ysf0_EvgEc?si=fnqlsjTfNzCvWPkt&amp;clip=UgkxyqwT9YlLKw5Rr7WSpk06ffIQcxepJbXX&amp;clipt=ELBUGKCDAQ" ],
        part2: ["실전은 기세야 기세.",
        "The actual game is the spirit. The spirit.",
        "siljeoneun giseya gise.",
        "https://www.youtube.com/embed/-Ysf0_EvgEc?si=1u_fpBmg22aJs2ci&amp;clip=UgkxT0GMl5GNHS_Fhjj0ztoHLDZNlIxZz2tB&amp;clipt=EJjVExjAmxQ"],
        part3: ["제시카는 외동딸, 일리노이 시카고, 과 선배는 김진모, 그는 네 사촌~",
        "Jessica is the only daughter, Illinois Chicago, Kim Jin-mo, and he is your cousin",
        "jesikaneun oedongttal, illinoi sikago, gwa seonbaeneun gimjinmo, geuneun ne sachon~",
        "https://www.youtube.com/embed/bVVE8vfEFNg?si=r46WENDjvC54HKD6&amp;clip=UgkxIQGO0tCU6mayi-U0NXUsidP9suag6Pt9&amp;clipt=EJQjGMSQAQ" ],
    },
    {
        key: 2,
        title: "미스터션샤인",
        genre:["RomanceMelo", "Comedy", "Historical", "Revenge", "Action"],
        img: "/asset/images/contents/contents3.jpg",
        scene: "/asset/images/scene/scene3.jpg",
        path: "/practice",
        part1: ["으음 빌지마 여기서 죽이고 싶어지니까. 네가 죽을 곳은 여기가 아니거든.",
        "Well, don't beg me. I want to kill you here. This isn't where you're going to die.",
        "eueum biljima yeogiseo jugigo sipeojinikka. nega jugeul goseun yeogiga anigeodeun.",
        "https://www.youtube.com/embed/twdlS4CBOko?si=yXwrvtv8pjiNWxIV&amp;clip=Ugkx-mRXgkYFND4E5GFcnQNuU5Zn_ugLpOJJ&amp;clipt=EPi0Cxizpgw" ],
        part2: ["당신은 당신의 조선을 구하시오. 난 당신을 구할 거니까.",
        "Save your Joseon, I save you.",
        "dangsineun dangsinui joseoneul guhasio. nan dangsineul guhal geonikka.",
        "https://www.youtube.com/embed/tTd8EaKXcQI?si=_uxr9RMhdzlhfXCZ&amp;clip=Ugkxy7kaNEx8fyH-SiOCOTWF3kSKyZsatxAD&amp;clipt=EKTBEBiEnxE" ],
        part3: ["그대는 나아가시오 난 한걸음 물러나니",
        "Go ahead, I'll take a step back",
        "geudaeneun naagasio nan hangeoreum mulleonani ",
        "https://www.youtube.com/embed/I4wVGuVm2HU?si=Zw5-sDYb3RWlnjMG&amp;clip=Ugkxmvx36Iu2mh4G1fjgAtjvBu5sCSlnA1Ud&amp;clipt=EJQjGMSQAQ" ],
    },
    {
        key: 3,
        title: "더글로리",
        genre:["RomanceMelo", "Thiller", "Revenge"],
        img: "/asset/images/contents/contents4.jpg",
        scene: "/asset/images/scene/scene4.jpg",
        path: "/practice",
        part1: ["파이팅, 박연진! 브라보! 멋지다, 연진아!",
        "Way to go, Park Yeonjin! Bravo! Cool, Yeonjin!",
        "paiting, bagyeonjin! beurabo! meosjida, yeonjina!",
        "https://www.youtube.com/embed/Chdr87M6N2M?si=Cp6mRlhbISPy0q4A&amp;clip=Ugkx8N-VjHqYm2bg9ELmbUKZxqbaUuV9UUvU&amp;clipt=EInECRj64Qo" ],
        part2: ["어떡해? 너네 주님 개빡쳤어. 너 지옥행이래.",
        "What do I do? Your Lord is mad. He said you're going to hell.",
        "eotteokhae? neone junim gaeppakchyeosseo. neo jiokhaengirae.",
        "https://www.youtube.com/embed/2jtgOLhUf_0?si=VsJLMS4CcVQwjS74&amp;clip=UgkxztQh3qJ4ElYuVK6_0vDJk0bOLN4BGns1&amp;clipt=EKD3BBi82gU" ],
        part3: ["고마워 엄마 하나도 안 변해서 그대로여서 정말 고마워",
        "Thank you, mom. Thank you for not changing at all",
        "gomawo eomma hanado an byeonhaeseo geudaeroyeoseo jeongmal gomawo",
        "https://www.youtube.com/embed/2U5ZJCDq0UQ?si=CJLtAByC7adrZf0B&amp;clip=UgkxXh8a8oCV6vmKSy6a-bjSQhCJFzfBGJ6i&amp;clipt=EOjABhi8nwg" ],
    },
    {
        key: 4,
        title: "태양의후예",
        genre:["RomanceMelo", "Comedy", "Action"],
        img: "/asset/images/contents/contents5.jpg",
        scene: "/asset/images/scene/scene5.jpg",
        path: "/practice",
        part1: ["작전상 후퇴라고 말해 기다리라고 말해 무슨 수를 쓰든 다시 오겠다고 말해!!",
        "Tell him to wait. Tell him to wait. Tell him he'll come back at all costs",
        "jakjeonsang hutoerago malhae gidarirago malhae museun sureul sseudeun dasi ogessdago malhae",
        "https://www.youtube.com/embed/PSrTZXEceHc?si=Yha0q7OI1H-kfNWB&amp;clip=UgkxHIZxy3_thYYLGnaLDTSaW9p0ezqdyq3e&amp;clipt=EKvJBBiz8QU"],
        part2: ["뭘 할까요 내가. 사과할까요 고백할까요.",
        "What should I do? Should I apologize or confess.",
        "mwol halkkayo naega. sagwahalkkayo gobaekhalkkayo.",
        "https://www.youtube.com/embed/Qt0kJ5pQgn8?si=0v9r343MXRbhmTyP&amp;clip=Ugkxze6b_SPcTYxgQMViMgGuxHRPlxIWS3Zd&amp;clipt=EKyJBhj7_AY"],
        part3: ["의사면 남친없겠네요. 바빠서? 군인이면 여친없겠네요. 빡세서?",
        "If you're a doctor, you don't have a boyfriend. Are you busy? If you're a soldier, you don't have a girlfriend. Are you hectic?",
        "uisamyeon namchineopsgessneyo. bappaseo? guninimyeon yeochineopsgessneyo. ppakseseo?",
        "https://www.youtube.com/embed/FMXwmrDTZgk?si=B554XzfyW_Ok8iM0&amp;clip=UgkxazRgenNnudwTd2JP0mb1Wa7mRPULRc8Z&amp;clipt=EPTLARjUqQI"],
    },
    {
        key: 5,
        title: "도깨비",
        genre:["RomanceMelo", "Comedy", "Fantasy"],
        img: "/asset/images/contents/contents6.jpg",
        scene: "/asset/images/scene/scene6.jpg",
        path: "/practice",
        part1: ["저 시집갈게요 아저씨한테. 저 암만 생각해도 아저씨가 도깨비 맞는 것 같거든요. 사랑해요.",
        "I'm getting married to you. I think you're a goblin when I think about you. I love you.",
        "jeo sijipgalgeyo ajeossihante. jeo amman saenggakhaedo ajeossiga dokkaebi majneun geot gatgeodeunyo. saranghaeyo.",
        "https://www.youtube.com/embed/UucULf34v4g?si=kSR6B66GqoQF7OBO&amp;clip=UgkxiaPubIB6XGVn2tqTUtQcCylI1nyT_V7W&amp;clipt=EOyYBRiEjgY"],
        part2: ["심장이 하늘에서 땅까지 아찔한 진자운동을 계속하였다. 첫사랑이었다.",
        "My heart continued to move dizzyingly from the sky to the ground. It was my first love.",
        "simjangi haneureseo ttangkkaji ajjilhan jinjaundongeul gyesokhayeossda. cheossarangieossda.",
        "https://www.youtube.com/embed/cDSE6jzt09c?si=t1Rh7N54oMU9UPOW&amp;clip=Ugkxrqqqmjud4NmiuEy4UeHVrbNjoXh6URx4&amp;clipt=ENz5BRishgc"],
        part3: ["날이 좋아서, 날이 좋지 않아서, 날이 적당해서, 모든 날이 좋았다.",
        "Because the weather was nice, because the weather was not good, because the weather was as usual, every day was good.",
        "nari johaseo, nari johji anhaseo, nari jeokdanghaeseo, modeun nari johassda.",
        "https://www.youtube.com/embed/d4GaQ30slGI?si=XF5igd5o7odq6OoL&amp;clip=UgkxXXkOVMy3DjInPpEWzd1Q4bawQMbAW5X1&amp;clipt=EJDCBBic1AU"],
    },
    {
        key: 6,
        title: "응답하라1988",
        genre:["RomanceMelo", "Comedy", "Historical"],
        img: "/asset/images/contents/contents7.jpg",
        scene: "/asset/images/scene/scene7.jpg",
        path: "/practice",
        part1: ["아~따 무슨 제 2의 6.25 터져부렀는가 온통 무슨 감자.감자.감자 뭔 비상식량이여?!",
        "What's the second Korean War? Potatoes. Potatoes. Potatoes. What's the emergency food?!",
        "a~tta museun je 2ui 6.25 teojyeobureossneunga ontong museun gamja.gamja.gamja mwon bisangsikryangiyeo?!",
        "https://www.youtube.com/embed/POcdvhYQ2cw?si=z2H8UYOOzVTkq6FJ&amp;clip=Ugkxq5aVxfZEt1la44z9twWEMNKu__T9vK1t&amp;clipt=EKwbGKRY"],
        part2: ["아이고 성 사장~ 아이고 김 사장~ 이거 정말 반갑구먼. 반가워요. 반갑구먼. 반갑습니다!",
        "Oh, Mr. Sung! Oh, Mr. Kim! Nice to meet you. Nice to meet you. Nice to meet you!",
        "aigo seong sajang~ aigo gim sajang~ igeo jeongmal bangapgumeon. bangawoyo. bangapgumeon. bangapseupnida!",
        "https://www.youtube.com/embed/s0DV4TgO-4M?si=lcmlZ7t088E8nq7N&amp;clip=UgkxmZQ9bJxZIi9pRwF0brwOtHpD1TZCctVC&amp;clipt=EAAY0IwB"],
        part3: ["하지마 진짜!! 내가 얘기했잖아!! 언니랑 같이 안한다고, 내가 얘기했잖아!!",
        "Don't do it! I told you! I'm not going to do it with you! I told you!!",
        "hajima jinjja!! naega yaegihaessjanha!! eonnirang gati anhandago, naega yaegihaessjanha!!",
        "https://www.youtube.com/embed/QWlHfuhinEY?si=Z5InHyVtuLaDskQ5&amp;clip=Ugkxgz_mW7yDMKATiRUJDG_ga_do0qUOwJxi&amp;clipt=EKCWAxj45QM"],
    },
    {
        key: 7,
        title: "사랑의불시착",
        genre:["RomanceMelo", "Comedy", "Action"],
        img: "/asset/images/contents/contents8.jpg",
        scene: "/asset/images/scene/scene8.jpg",
        path: "/practice",
        part1: ["그거 밟은 거 같은데 유실지뢰",
        "I think I stepped on that. Lost mine",
        "geugeo balpeun geo gateunde yusiljiroe",
        "https://www.youtube.com/embed/eiypr2hNZMw?si=hTYurQydAGTrNA57&amp;clip=Ugkx8h25M5azIEE1DibUSc3TD3aN-YqILrpm&amp;clipt=ELzKAhjE8QI" ],
        part2: ["이 살쾡이가 뭐래~ 묻히긴 뭘 묻혀 너나 묻히든가..",
        "i salkwaengiga mworae~ muthigin mwol muthyeo neona muthideunga..",
        "What are you talking about? What do you mean you're going to bury it..",
        "https://www.youtube.com/embed/2vlJmYje8mw?si=OKzMBhOgfyCBsYnD&amp;clip=Ugkx-LelatJSifswk51gklw-0P6RtQyaXJGG&amp;clipt=ELikBBio0wQ" ],
        part3: ["아무 일도 생기지 않겠지만. 만에 하나 무슨 일이 생기더라도. 그건 당신 탓이 아니오.",
        "Nothing will happen, but if anything happens, it's not your fault.",
        "amu ildo saenggiji anhgessjiman. mane hana museun iri saenggideorado. geugeon dangsin tasi anio.",
        "https://www.youtube.com/embed/86-6ruGvX-k?si=sF2ZW8ZqfpqpAeHh&amp;clip=UgkxSS-4zFcO-L44Wf3iCLxxJZgpzEEy_SLu&amp;clipt=EPiKGRj4hxo" ],
    },
];

export default contentsList;