export const sampleTeams = [
  { id: 1, name: "Chennai Super Kings", shortName: "CSK", logo: "🏏", championships: 5, recentForm: "W W L W W" },
  { id: 2, name: "Mumbai Indians", shortName: "MI", logo: "🏏", championships: 5, recentForm: "L W L W L" },
  { id: 3, name: "Royal Challengers Bangalore", shortName: "RCB", logo: "🏏", championships: 0, recentForm: "W L W L W" },
  { id: 4, name: "Kolkata Knight Riders", shortName: "KKR", logo: "🏏", championships: 2, recentForm: "L L W W L" },
  { id: 5, name: "Delhi Capitals", shortName: "DC", logo: "🏏", championships: 0, recentForm: "W L L W L" },
  { id: 6, name: "Rajasthan Royals", shortName: "RR", logo: "🏏", championships: 1, recentForm: "L W W L W" },
  { id: 7, name: "Sunrisers Hyderabad", shortName: "SRH", logo: "🏏", championships: 1, recentForm: "L L W L W" },
  { id: 8, name: "Lucknow Super Giants", shortName: "LSG", logo: "🏏", championships: 0, recentForm: "W W L W L" },
  { id: 9, name: "Gujarat Titans", shortName: "GT", logo: "🏏", championships: 1, recentForm: "W L W W L" },
  { id: 10, name: "Punjab Kings", shortName: "PBKS", logo: "🏏", championships: 0, recentForm: "L W L L W" }
];

export const samplePrediction = {
  matchTitle: "Chennai Super Kings vs Mumbai Indians",
  team1: { 
    name: "Chennai Super Kings", 
    shortName: "CSK",
    recentForm: ["W", "W", "L", "W", "W"] 
  },
  team2: { 
    name: "Mumbai Indians", 
    shortName: "MI",
    recentForm: ["L", "W", "L", "W", "L"] 
  },
  matchDate: new Date(Date.now() + 86400000),
  matchTime: "7:30 PM IST",
  venue: "MA Chidambaram Stadium, Chennai",
  tossPrediction: {
    team: "Chennai Super Kings",
    probability: 65,
    analysis: "CSK has won 60% of tosses at this venue in the last 3 seasons. The home advantage and pitch conditions favor their captain's decision-making."
  },
  matchInsight: {
    summary: "CSK holds a strong home record against MI, winning 4 out of last 5 encounters at Chepauk. The spin-friendly pitch will favor CSK's experienced bowling attack.",
    winProbability: { team1: 55, team2: 45 },
    keyFactors: ["Home advantage", "Spin bowling depth", "Opening partnership stability"]
  },
  weather: {
    condition: "Clear sky",
    temperature: "32°C",
    humidity: "65%",
    impact: "No weather interruptions expected. Ideal conditions for cricket."
  },
  pitchReport: {
    condition: "Spin-friendly, good for batting initially",
    battingFriendly: true,
    bowlingFriendly: true,
    averageScore: 165
  },
  headToHead: {
    totalMatches: 37,
    team1Wins: 16,
    team2Wins: 21
  }
};

export const testimonials = [
  { id: 1, name: "Rahul S.", role: "Cricket Enthusiast", text: "Great insights! The analysis helps me understand match dynamics better.", rating: 5 },
  { id: 2, name: "Priya M.", role: "IPL Fan", text: "Love the detailed pitch and weather reports. Very professional platform.", rating: 5 },
  { id: 3, name: "Amit K.", role: "Sports Analyst", text: "Data-driven approach makes this platform stand out. Keep up the good work!", rating: 4 },
];

export const tossTrendsData = {
  labels: ['CSK', 'MI', 'RCB', 'KKR', 'DC', 'RR', 'SRH', 'LSG', 'GT', 'PBKS'],
  datasets: [{
    label: 'Toss Win % (Last 2 Seasons)',
    data: [58, 52, 48, 55, 50, 47, 53, 51, 56, 49],
    backgroundColor: 'rgba(99, 102, 241, 0.5)',
    borderColor: 'rgb(99, 102, 241)',
    borderWidth: 2
  }]
};

export const venueStats = {
  labels: ['Wankhede', 'Chepauk', 'Eden Gardens', 'Chinnaswamy', 'Arun Jaitley', 'Narendra Modi'],
  datasets: [{
    label: 'Average First Innings Score',
    data: [185, 162, 178, 190, 175, 168],
    backgroundColor: 'rgba(139, 92, 246, 0.5)',
    borderColor: 'rgb(139, 92, 246)',
    borderWidth: 2
  }]
};