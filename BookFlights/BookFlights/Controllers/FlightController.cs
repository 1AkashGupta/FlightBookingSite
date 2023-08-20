using Microsoft.AspNetCore.Mvc;
using TestProject.Models;

namespace BookFlights.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FlightController : Controller
    {
        static Random random = new Random();

        private static FlightRm[] flights = new FlightRm[]
            {
                new  FlightRm(   Guid.NewGuid(),
                        "Indigo",
                        random.Next(90,5000).ToString(),
                        new TimePlaceRm("New Delhi" ,DateTime.Now.AddDays(1).ToString()),
                        new TimePlaceRm("Goa" ,DateTime.Now.AddDays(1).ToString()),
                        random.Next(1,500)),
                new FlightRm(   Guid.NewGuid(),
                        "Indigo",
                        random.Next(90,5000).ToString(),
                        new TimePlaceRm("New Delhi" ,DateTime.Now.AddDays(1).ToString()),
                        new TimePlaceRm("Goa" ,DateTime.Now.AddDays(1).ToString()),
                        random.Next(1,500)),
            };


        [HttpGet]
        public IEnumerable<FlightRm> Search()
            => flights;
    }
}
