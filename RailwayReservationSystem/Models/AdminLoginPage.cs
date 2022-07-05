using System.ComponentModel.DataAnnotations;

namespace RailwayReservationSystem.Models
{
    public class AdminLoginPage
    {
        [Key]
        public string? UserName { get; set; }
       public  string? Password { get; set; }   
    }
}
