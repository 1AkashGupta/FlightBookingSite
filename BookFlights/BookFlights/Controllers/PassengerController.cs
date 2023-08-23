using BookFlights.DTO;
using BookFlights.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BookFlights.Controllers
{
    [Route("[Controller]")]
    [ApiController]
    public class PassengerController : Controller
    {
        static private IList<NewPassengerDto> Passengers = new List<NewPassengerDto>();
        [HttpPost]
        public IActionResult Register(NewPassengerDto newPassenger)
        {
            Passengers.Add(newPassenger);
            System.Diagnostics.Debug.WriteLine(Passengers.Count);
            return CreatedAtAction(nameof(Find), new {email = newPassenger.Email});
        }

        [HttpGet("{email}")]
        public ActionResult<PassengerRm> Find(string email)
        {
            var passenger = Passengers.FirstOrDefault(p => p.Email == email);
            if (passenger == null)
                return NotFound();
            var rm = new PassengerRm(
                passenger.Email,
                passenger.FirstName,
                passenger.LastName,
                passenger.Gender);
            return Ok(rm);
        }
    }
}
