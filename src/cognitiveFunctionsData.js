
let cognitiveFunctions = [
  {
    name: "Te",
    questions: [
      "I follow rules and guidelines closely.",
      "I enjoy organizing my day with lists.",
      "I focus on outcomes over discussions.",
      "I judge poor decisions harshly.",
      "I base decisions on clear facts.",
      "I find satisfaction in organizing tasks.",
      "I prefer defined goals to ambiguity.",
      "I always have a backup plan ready.",
      "I prioritize logical consistency in group decisions.",
      "I work hard, even to exhaustion.",
      "I value justice over emotional appeals.",
      "I dislike working with incompetence.",
      "I speak bluntly when necessary.",
      "I lead groups with confidence.",
      "I push myself to achieve more.",
      "I make quick, informed decisions."
    ],
    score: 0,
    openEnded: {
      question: "When working on a team project with conflicting opinions, how do you approach decision-making and ensure the project stays on track?",
      answer: ""
    }
  },
  {
    name: "Ti",
    questions: [
      "I question authority and ideas often.",
      "I enjoy debating thoughts and ideas.",
      "I solve puzzles for mental exercise.",
      "I approach emotions with logic.",
      "I don't mind being the devil's advocate.",
      "I value logic and internal purpose.",
      "I need time alone to think clearly.",
      "I refine my ideas to match reality.",
      "I trust my own belief systems most.",
      "I prefer being independent and free.",
      "I hold a few very strong opinions.",
      "I enjoy mentally categorizing things.",
      "I adapt my approach to fix problems.",
      "I notice flaws in logic quickly.",
      "I compete with myself for growth.",
      "I think deeply before explaining ideas."
    ],
    score: 0,
    openEnded: {
      question: "Can you walk me through how you would evaluate and improve a process that seems inefficient?",
      answer: ""
    }
  },
  {
    name: "Se",
    questions: [
      "I notice small details quickly.",
      "I learn better from experiences than theory.",
      "I spot opportunities in the moment.",
      "I sometimes act on pure impulse.",
      "I think of myself as a realist.",
      "I focus on the present moment.",
      "I excel at driving attentively.",
      "I prefer staying active and restless.",
      "I love visually pleasing things.",
      "I have quick reflexes naturally.",
      "I enjoy the rush of adrenaline.",
      "I am always using my 5 senses.",
      "I notice things others overlook.",
      "I stay balanced and rarely clumsy.",
      "I thrive in fast-paced environments.",
      "I avoid getting stuck in my head."
    ],
    score: 0,
    openEnded: {
      image: "",
      question: "Looking at this image, what details do you notice first, and how would you describe this scene in detail?",
      answer: ""
    }
  },
  {
    name: "Si",
    questions: [
      "I appreciate traditions and routines.",
      "I stick to methods that are reliable.",
      "I have a strong and detailed memory.",
      "I try hard to avoid past mistakes.",
      "I notice small changes in my body.",
      "I enjoy reminiscing about the past.",
      "I can be very stubborn sometimes.",
      "I focus on small details first.",
      "I value stability and consistency.",
      "I follow instructions carefully.",
      "I stick to routines and schedules.",
      "I see the present as fleeting time.",
      "I value ideas with practical uses.",
      "I trust personal experience most.",
      "I notice changes in appearances.",
      "I like organizing facts and data."
    ],
    score: 0,
    openEnded: {
      question: "Can you share a time when a past experience or lesson helped you solve a problem effectively?",
      answer: ""
    }
  },
  {
    name: "Ne",
    questions: [
      "I am described as quirky and unique.",
      "I enjoy being creative and inventive.",
      "I keep myself entertained easily.",
      "I focus deeply when inspired.",
      "I brainstorm better in groups.",
      "I am curious about most topics.",
      "I like working on side projects.",
      "I love exploring new possibilities.",
      "I switch between many hobbies.",
      "I link unrelated ideas together.",
      "I struggle with making commitments.",
      "I solve problems in unique ways.",
      "I have childlike excitement often.",
      "I struggle choosing one career path.",
      "I enjoy learning new things daily.",
      "I imagine future scenarios often."
    ],
    score: 0,
    openEnded: {
      question: "Think of multiple uses for an empty can of soda and write them.",
      answer: ""
    }
  },
  {
    name: "Ni",
    questions: [
      "I focus on the big-picture first.",
      "I notice patterns in daily events.",
      "I use abstract ideas to explain.",
      "I have sudden moments of clarity.",
      "I find meaning in symbols often.",
      "I plan ahead for the future.",
      "I keep my thoughts private often.",
      "I offer unique insights naturally.",
      "I find it hard to explain ideas.",
      "I always strive for self-improvement.",
      "I experiment instead of using norms.",
      "I create strategies to meet goals.",
      "I think in images over sentences.",
      "I trust my gut and intuition.",
      "I imagine my long-term life path.",
      "I prepare for future possibilities."
    ],
    score: 0,
    openEnded: {
      question: "When you encounter a complex situation, how do you go about identifying patterns and predicting possible outcomes?",
      answer: ""
    }
  },
  {
    name: "Fe",
    questions: [
      "I prioritize others' needs over mine.",
      "I know what is socially appropriate.",
      "I offer support when others need it.",
      "I can shift the mood in a room.",
      "I understand people's motives well.",
      "I am naturally empathetic to others.",
      "I notice group dynamics quickly.",
      "I feel bad if I upset others.",
      "I care about praise and criticism.",
      "I honor commitments to others.",
      "I process emotions by talking aloud.",
      "I love giving back to communities.",
      "I see how choices affect others.",
      "I feel responsible for others' emotions.",
      "I value harmony in social groups.",
      "I resolve conflicts by promoting empathy."
    ],
    score: 0,
    openEnded: {
      question: "Can you describe a time when you helped resolve a disagreement or improved team dynamics?",
      answer: ""
    }
  },
  {
    name: "Fi",
    questions: [
      "I prefer honesty over being insincere.",
      "I feel bad critiquing other people.",
      "I am often described as kind but intimidating.",
      "I follow personal values in decisions making.",
      "I am really introspective.",
      "I am drawn to creative arts often.",
      "I hide my deepest values inside.",
      "I make playlists based on moods.",
      "When I feel guilt, I feel it strongly.",
      "I can be neurotic and unpredictable based on mood swings.",
      "I believe in the 'live and let live' philosophy.",
      "I follow my heart over social norms.",
      "I spend time daydreaming often.",
      "I strive for peace and inner harmony.",
      "I feel emotions deeply but privately.",
      "I value close and meaningful bonds."
    ],
    score: 0,
    openEnded: {
      question: "Can you tell me about a time when you made a decision that went against external expectations but felt right to you?",
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
