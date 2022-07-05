using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Data.SqlClient;
using RailwayReservationSystem.Models;

namespace RailwayReservationSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegisterUserController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public RegisterUserController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        [HttpPost]
        public JsonResult PostUserDetails(RegisterUser ur)
        {
            string query = @"
insert into dbo.RegisterUser (FirstName,LastName,PhoneNumber,UserName,Email,Password) values
('" + ur.FirstName + @"','" + ur.LastName + @"','" + ur.PhoneNumber
            + @"','" + ur.UserName + @"','" + ur.Email + @"','" + ur.Password + "')";



            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("mycon");
            SqlDataReader myReader;
            using (SqlConnection con = new SqlConnection(sqlDataSource))
            {
                con.Open();
                using (SqlCommand myCommand = new SqlCommand(query, con))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); 



                    myReader.Close();
                    con.Close();
                }
            }



            return new JsonResult("user Registration successful");
        }
    }

}