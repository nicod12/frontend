export interface TeamData {
  goals: number
  shots: number
  shotsOnTarget: number
  shotsOffTarget: number
  assists: number
  passes: number
  shortPasses: number
  longPasses: number
  highPasses: number
  slidings: number
  interferes: number
  fouls: number
  deflects: number
  offsides: number
  cornerKicks: number
  freeKicks: number
  penaltyKicks: number
  yellowCards: number
  redCards: number
  attackZones: {
    left: number
    middle: number
    right: number
  }
}

export interface MatchData {
  matchId: string
  leftTeam: TeamData
  rightTeam: TeamData
}
