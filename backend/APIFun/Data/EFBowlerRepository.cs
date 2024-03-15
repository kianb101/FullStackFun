namespace APIFun.Data
{
    public class EFBowlerRepository : IBowlerRepository
    {
        private BowlingLeagueContext _bowlingcontext;
        public EFBowlerRepository(BowlingLeagueContext temp)
        {
            _bowlingcontext = temp;
        }

        public IEnumerable<Bowler> Bowlers => _bowlingcontext.Bowlers;
        public IEnumerable<Team> Teams => _bowlingcontext.Teams;
    }
}