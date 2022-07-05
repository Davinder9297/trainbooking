using System.ComponentModel.DataAnnotations;

namespace RailwayReservationSystem.Models
{
    public class Train
    {
        [Key]
        public int TrainNo { get; set; }
        public string? TrainName { get; set; }
        public string? Origin { get; set; }
        public string? Destination { get; set; }
        public string? ArrivalTime { get; set; }
        public string? DepartureTime { get; set; }
        public int Fare { get; set; }
        public int SeatAvailability { get; set; }



    }
}
