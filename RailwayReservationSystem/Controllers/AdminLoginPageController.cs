using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Data.SqlClient;
using RailwayReservationSystem.Models;

namespace RailwayReservationSystem.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class AdminLoginPageController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public AdminLoginPageController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        [HttpGet]
        public JsonResult Get()
        {
            string query = @"select UserName, Password from dbo.AdminLoginPage";
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


        [HttpPost]
        public JsonResult Post(Train tr)
        {
            string query = @"
                    insert into dbo.Train values('" + tr.TrainNo + @"','" + tr.TrainName + @"','" + tr.Origin + @"','" +
                     tr.Destination + @"','" + tr.ArrivalTime + @"','" + tr.DepartureTime + @"','" + tr.Fare +
                     @"','" + tr.SeatAvailability + @"')";
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

        [HttpGet]
        [ActionName("trainsinformation")]
        public JsonResult GetTrainInformation()
        {
            string query = @"select TrainNo,TrainName,Origin,Destination,ArrivalTime,DepartureTime,Fare,
             SeatAvailability from dbo.Train";
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

        [HttpDelete("{id}")]
        public JsonResult Deletetrain(int id)
        {
            string query = @"
                              delete from dbo.Train
                              where TrainNo = " + id + @"
                              ";
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
            return new JsonResult("Deleted Successfully");
        }

        [HttpPut("{id}")]
        public JsonResult Puttrain(Train ti)
        {
            string query = @"
             update dbo.Train set TrainNo = '" + ti.TrainNo + @"',
              TrainName='" + ti.TrainName + @"',
             Origin = '" + ti.Origin + @"',Destination = '" + ti.Destination + @"'
             ,ArrivalTime = '" + ti.ArrivalTime + @"',
             DepartureTime='" + ti.DepartureTime + @"',
             Fare='" + ti.Fare + @"',
              SeatAvailability='" + ti.SeatAvailability + @"'
             where TrainNo ='" + ti.TrainNo + @"'
               ";
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
            return new JsonResult("trains updated");
        }

    }

}

