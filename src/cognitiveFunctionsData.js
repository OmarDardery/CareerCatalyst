let cognitiveFunctions = [
  {
    name: "Te",
    questions: [
      "I follow rules closely.",
      "I enjoy making to-do lists.",
      "I see things in black and white.",
      "I judge illogical decisions harshly.",
      "I quickly jump to conclusions.",
      "I find satisfaction in organizing.",
      "I prefer clear, defined goals.",
      "I always have a backup plan.",
      "I can come across as bossy.",
      "I work hard, sometimes too much.",
      "I value justice over mercy.",
      "I dislike dealing with incompetence.",
      "I speak bluntly when needed.",
      "I am good at leading groups.",
      "I push myself to overachieve.",
      "I make decisions quickly."
    ],
    score: 0,
    openEnded: {
      question: "",
      answer: ""
    }
  },
  {
    name: "Ti",
    questions: [
      "I question authority often.",
      "I love debating ideas.",
      "I enjoy solving puzzles.",
      "I give logical solutions to emotions.",
      "I don't mind playing devil's advocate.",
      "I value purpose and meaning.",
      "I need time alone to think.",
      "I expect reality to match my ideas.",
      "I trust my inner belief systems.",
      "I am fiercely independent.",
      "I have a few strong opinions.",
      "I categorize everything mentally.",
      "I adapt easily to fix problems.",
      "I see logical flaws quickly.",
      "I compete with myself most.",
      "I rarely explain my decisions."
    ],
    score: 0,
    openEnded: {
      question: "",
      answer: ""
    }
  },
  {
    name: "Se",
    questions: [
      "I notice small details instantly.",
      "I learn quickly from experiences.",
      "I spot opportunities in the moment.",
      "I act on impulse sometimes.",
      "I see myself as a realist.",
      "I focus on the present moment.",
      "I am skilled at driving attentively.",
      "I stay restless and active.",
      "I love aesthetic, pleasing things.",
      "I have quick reflexes naturally.",
      "I enjoy a rush of adrenaline.",
      "I rely on my five senses daily.",
      "I notice things others overlook.",
      "I am rarely clumsy or off-balance.",
      "I prefer action to conversation.",
      "I avoid getting stuck in my head."
    ],
    score: 0,
    openEnded: {
      question: "",
      answer: ""
    }
  },
  {
    name: "Si",
    questions: [
      "I appreciate cultural traditions.",
      "I stick to reliable methods.",
      "I have an excellent memory.",
      "I avoid repeating past mistakes.",
      "I notice when I am thirsty or hungry.",
      "I enjoy reminiscing about the past.",
      "I can be very stubborn sometimes.",
      "I focus on small details first.",
      "I value stability and security.",
      "I follow procedures carefully.",
      "I stick to routines and schedules.",
      "I see the present as fleeting.",
      "I value ideas with real uses.",
      "I trust my experience above all.",
      "I notice changes in appearances.",
      "I like organizing information."
    ],
    score: 0,
    openEnded: {
      question: "",
      answer: ""
    }
  },
  {
    name: "Ne",
    questions: [
      "I am described as quirky or weird.",
      "I am naturally creative and inventive.",
      "I can entertain myself easily.",
      "I focus intensely when inspired.",
      "I brainstorm well in groups.",
      "I am curious about everything.",
      "I always work on side projects.",
      "I love exploring possibilities.",
      "I have many hobbies to switch between.",
      "I link unrelated ideas often.",
      "I struggle with making commitments.",
      "I solve problems in unconventional ways.",
      "I have childlike excitement at times.",
      "I struggle picking one career path.",
      "I eagerly learn about new topics.",
      "I enjoy imagining future scenarios."
    ],
    score: 0,
    openEnded: {
      question: "",
      answer: ""
    }
  },
  {
    name: "Ni",
    questions: [
      "I focus on big-picture ideas.",
      "I spot patterns in events easily.",
      "I use abstract concepts to explain.",
      "I have sudden 'eureka' moments.",
      "I am drawn to symbols and meaning.",
      "I plan for the future often.",
      "I stay private and guarded.",
      "I offer unique insights naturally.",
      "I find it hard to explain ideas verbally.",
      "I always strive for improvement.",
      "I experiment rather than stick to norms.",
      "I make detailed strategies for goals.",
      "I think in images, not sentences.",
      "I trust my intuition and gut feelings.",
      "I imagine my life’s long-term path.",
      "I adapt by 'going with the flow.'"
    ],
    score: 0,
    openEnded: {
      question: "",
      answer: ""
    }
  },
  {
    name: "Fe",
    questions: [
      "I prioritize other people's needs.",
      "I know what is socially appropriate.",
      "I offer emotional support easily.",
      "I can shift the mood in a room.",
      "I understand others' motives well.",
      "I am very empathetic naturally.",
      "I notice social dynamics quickly.",
      "I feel shame when I upset others.",
      "I care deeply about criticism or praise.",
      "I honor my social commitments.",
      "I process feelings by talking them out.",
      "I love volunteering in communities.",
      "I notice how decisions affect people.",
      "I feel responsible for others' emotions.",
      "I value maintaining group harmony.",
      "I feel anxious in conflicts."
    ],
    score: 0,
    openEnded: {
      question: "",
      answer: ""
    }
  },
  {
    name: "Fi",
    questions: [
      "I prefer awkward honesty to insincerity.",
      "I feel guilty critiquing other people.",
      "I have an innocent, sincere charm.",
      "I follow my own personal values.",
      "I only cry in private settings.",
      "I am drawn to creative arts often.",
      "I hide my deepest values inside.",
      "I organize playlists based on mood.",
      "I feel guilt strongly when needed.",
      "I trust my gut on right and wrong.",
      "I believe in 'live and let live.'",
      "I follow my heart over social norms.",
      "I spend time daydreaming often.",
      "I strive for inner peace and harmony.",
      "I cannot hide my emotions easily.",
      "I value close, meaningful bonds."
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
