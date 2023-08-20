namespace TestProject.Models
{
    public record FlightRm(
        Guid Id,
        string Airline,
        string price,
        TimePlaceRm Departure,
        TimePlaceRm Arrival,
        int RemainingNumberOfSeats
        );
}
