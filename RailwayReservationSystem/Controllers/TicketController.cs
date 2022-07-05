using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Data.SqlClient;
using RailwayReservationSystem.Models;

namespace RailwayReservationSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TicketController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public TicketController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        [HttpGet]
        public JsonResult Get()
        {
            string query = @"select UserName,TrainNo,Origin,Destination,Fare,ArrivalTime,DepartureTime,SeatNo
                                from dbo.Ticket";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("mycon");
            using (SqlConnection con = new SqlConnection(sqlDataSource))
            {
                con.Open();
                using (SqlCommand myCommand = new SqlCommand(query, con))
                {
                    SqlDataReader myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    con.Close();
                }
            }
            return new JsonResult(table);
        }

    }

}