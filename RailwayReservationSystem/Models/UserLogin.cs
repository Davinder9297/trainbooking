using System.ComponentModel.DataAnnotations;

namespace RailwayReservationSystem.Models
{
    public class UserLogin
    {
        [Key]
       string UserName { get; set; }
        string Password { get; set; }   
    }
}
