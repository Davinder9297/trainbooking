
namespace RailwayReservationSystem.Models
{
    public class Ticket
    {
        public string? UserName { get; set; }
        public int TrainNo { get; set; }
        public string? Origin { get; set; }
        public string? Destination { get; set; }
        public int Fare { get; set; }
        public int ArrivalTime { get; set; }
        public int DepartureTime   { get; set; }
        public int SeatNo { get; set; }

    }
}
