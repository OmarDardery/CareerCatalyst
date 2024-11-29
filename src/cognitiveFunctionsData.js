let cognitiveFunctions = [
    {
      name: "te",
      questions: [
        "Rule follower",
        "Loves To-Do lists",
        "Sees the world in black and white",
        "Judgemental of illogical decisions",
        "Quickly jumps to conclusions",
        "Finds satisfaction in organization",
        "Objective and has defined goals",
        "Always prepared/has a plan b",
        "Often bossy",
        "Prone to being a workaholic",
        "Justice > Mercy",
        "Impatient with incompetent people",
        "Blunt",
        "Excels at leadership",
        "Overachiever",
        "Decisive",
       ],
      score: 0,
      openEnded: {
        question: "",
        answer: ""
      }
    },
    {
      name: "ti",
      questions: [
        "Questions authority/ given information",
        "Enjoys debating",
        "Enjoys puzzles/ mental challenges",
        "Gives practical solutions to emotional problems",
        "Does not mind being devil's advocate",
        "Values meaning and purpose",
        "Needs a lot of time to think alone",
        "Expects reality to conform to their already existing ideas",
        "has internal belief systems built on past discoveries and insights",
        "Extremely independent",
        "not opinionated, but has few strong opinions",
        "Deconstructs and categorizes everything",
        "Adaptable troubleshooter",
        "Easily recognizes logiacl incosistency/loopholes",
        "Competitive with oneself rather than others",
        "Rarely vocalizes thoughts behind a decision",
       ],
      score: 0,
      openEnded: {
        question: "",
        answer: ""
      }
    },
    {
      name: "se",
      questions: [
        "Observes details without connecting it to past/future events",
        "Learns quickly from experience",
        "Recognizes physical opportunities when they see them, like an opening while playing football",
        "Spontaneous/impulsive",
        "Realist",
        "Lives in the moment",
        "Skilled and attentive drivers",
        "Restless, always moving",
        "Attracted to the aesthetically pleasing",
        "Fast reflexes",
        "Adrenaline junkie",
        "Focuses on the 5 senses (sight, smell, etc.)",
        "Notices things in their enviroment nobody else does",
        "Rarely clumsy",
        "Prefers engaging activities over conversing when hanging out",
        "Rarely in their head"
       ],
      score: 0,
      openEnded: {
        question: "",
        answer: ""
      }
    },
    {
      name: "si",
      questions: [
        "Appreciates cultural traditions",
        "Sticks with tried and true methods",
        "Excellent memory",
        "Never makes the same mistake twice",
        "Acutely aware of their level of thirst, hunger, etc.",
        "Loves to reminisce on the past",
        "Stubborn",
        "Details > big-picture",
        "Values security and stability",
        "Excels at carefully following procedures",
        "Follows a schedule/ routine",
        "Conscious of the fleeting nature of the present",
        "Only cares about ideas with real world applications",
        "Trusts their experience over everything",
        "Immediately notices if someone changed something about their apprearances",
        "enjoys organizing and categorizing information"
       ],
      score: 0,
      openEnded: {
        question: "",
        answer: ""
      }
    },
    {
      name: "ne",
      questions: [
        "described as weird or quirky",
        "creative",
        "can always entertain themselves",
        "Hyperfocused when they are inspired",
        "great at ideating in a group",
        "Naturally curious",
        "always working on a side project",
        "open to many possibilities",
        "has many casual hobbies they drop and pick up at will",
        "makes connections between seemingly unrelated topics",
        "Difficulty with commitment",
        "Unconventional problem solver",
        "childlike excitement",
        "struggles with picking just one career",
        "extremely curious and eager to learn about variety of topics",
        "enjoys imagining different scenarios and outcomes"
       ],
      score: 0,
      openEnded: {
        question: "",
        answer: ""
      }
    },
    {
      name: "ni",
      questions: [
        "big picture > minor details",
        "easily spots trends in behaviour/ events",
        "uses metaphors and abstract concepts when speaking",
        "has sudden realizations, eureka moments",
        "drawn to symbolism",
        "future oriented",
        "private guarded",
        "often offers new and unique insights",
        "difficulty explaining perceptions verbally",
        "Constantly looking towards improvement",
        "purposeful experimentation > tried and true",
        "skilled at preparing strategies to reach goals",
        "thinks in images/impressions rather than words/ sentences",
        "attuned to 'gut-feelings'",
        "enjoys envisioning their life's trajectory",
        "I 'go with the flow'"
       ],
      score: 0,
      openEnded: {
        question: "",
        answer: ""
      }
    },
    {
      name: "fe",
      questions: [
        "priotitizes other's needs",
        "easily recognizes if something is socially appropriate",
        "emotionally supportive",
        "can readily change the 'mood'",
        "can discern others' motives accurately",
        "Extremely empathetic",
        "naturally aware of social hierarchy (outcasts, leaders, etc.)",
        "prone to shame",
        "highly motivated by criticism/praise",
        "honors social obligations",
        "hard to process feelings without speaking to someone",
        "likes volunteer work (especially community volunteering)",
        "acutely aware of how decisions impact others",
        "feels responsible for others' emotions",
        "values group morale",
        "conflict makes them feel uneasy"
       ],
      score: 0,
      openEnded: {
        question: "",
        answer: ""
      }
    },
    {
      name: "fi",
      questions: [
        "genuine awkwardness > smooth insincerity",
        "hates critiquing others",
        "innocent charm",
        "marches to the beat of their own drum",
        "only cries in private",
        "into arts (music, drawing, etc.)",
        "hides their intents and personal values",
        "organizes playlists by mood",
        "prone to guilt",
        "has gut feelings about right and wrong",
        "belives in the live and let live philosophy",
        "does what feels right regardless of what society tells me",
        "chronic daydreamer",
        "seeks inner harmony",
        "their face betrays attempts to hide emotions",
        "values meaningful close meaningful relationships"
       ],
      score: 0,
      openEnded: {
        question: "",
        answer: ""
      }
    }
  ];
  cognitiveFunctions.map((cognitiveFunction) => {
    cognitiveFunction.openEnded.change = function(answer){
      cognitiveFunction.openEnded.answer = answer;
    }
  });
  export default cognitiveFunctions;