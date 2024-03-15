using APIFun.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace APIfun.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class BowlersInfoController : ControllerBase
    {
        private IBowlerRepository _bowlingRepository;
        public BowlersInfoController(IBowlerRepository temp)
        {
            _bowlingRepository = temp;
        }
        [HttpGet]
        public IEnumerable<BowlerAndTeam> Get()
        {
            var bowlersAndTeam = from bowler in _bowlingRepository.Bowlers
                                  join team in _bowlingRepository.Teams on bowler.TeamId equals team.TeamId
                                  where team.TeamName is "Marlins" or "Sharks"
                                  select new BowlerAndTeam
                                  {
                                      BowlerId = bowler.BowlerId,
                                      BowlerFirstName = bowler.BowlerFirstName,
                                      BowlerLastName = bowler.BowlerLastName,
                                      BowlerMiddleInit = bowler.BowlerMiddleInit,
                                      BowlerAddress = bowler.BowlerAddress,
                                      BowlerCity = bowler.BowlerCity,
                                      BowlerState = bowler.BowlerState,
                                      BowlerZip = bowler.BowlerZip,
                                      BowlerPhoneNumber = bowler.BowlerPhoneNumber,
                                      TeamName = team.TeamName
                                  };

            var bowlerData = bowlersAndTeam.ToArray();

            return bowlerData;
        }
    }
}