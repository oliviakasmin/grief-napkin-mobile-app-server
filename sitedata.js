// losses for user profile
const lossConnection = [
  'partner',
  'friend',
  'parent',
  'grandparent',
  'sibling',
  'twin',
  'someone I loved',
  'acquantaince',
  'prefer not to answer',
]

const lossReason = [
  'cancer',
  'teminal illness (not cancer)',
  'accident',
  'overdose',
  'unexpected freak problem',
  'murder',
  'suicide',
  'a different shitty reason',
  'prefer not to answer',
]

// moods for daily check-in
const moods = [
  {
    good: [
      'Im thriving (all things considered...)',
      'today is a good day',
      'I got this',
      'Im a hot mess and Im rolling with it',
    ],
  },
  {
    medium: [
      'okay, just want to be alone',
      'oh you know, trudging on',
      'life sucks, but Im "ok"',
      'this is hard, but I got dressed!',
      'okay, but I could really use some company',
    ],
  },
  {
    bad: [
      'this feel like too much',
      'dont want to get out of bed',
      'I have to do something super shitty today',
      'whats even the point',
      'could really ues some comforting and support',
    ],
  },
]

// journal prompts
const journalPrompts = [
  {
    'one thing I accomplished today': [
      'got dressed',
      'brushed my teeth',
      'ate a good meal',
      'saw a friend',
      'went outside',
    ],
  },
  'one thing that sucked today',
  'one memory of my person that I had today',
  'one thing I want to do today',
  'one thing that was actually prety okay/ maybe even good today',
  'something to remind myself of when Im having a shit day',
]

module.exports = { lossReason, lossConnection, moods, journalPrompts }
