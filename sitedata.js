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
const good = [
  'Im thriving (all things considered...)',
  'today is a good day',
  'I got this',
  'Im a hot mess and Im rolling with it',
]
const medium = [
  'okay, just want to be alone',
  'oh you know, trudging on',
  'life sucks, but Im "ok"',
  'this is hard, but I got dressed!',
  'okay, but I could really use some company',
]
const bad = [
  'this feel like too much',
  'dont want to get out of bed',
  'I have to do something super shitty today',
  'whats even the point',
  'could really ues some comforting and support',
]

module.exports = { lossReason, lossConnection, good, medium, bad }
