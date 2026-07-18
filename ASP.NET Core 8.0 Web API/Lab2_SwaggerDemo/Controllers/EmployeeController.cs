using Microsoft.AspNetCore.Mvc;
using Lab2_SwaggerDemo.Models;

namespace Lab2_SwaggerDemo.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeeController : ControllerBase
    {
        static List<Employee> employees = new List<Employee>
        {
            new Employee{ Id=101, Name="Harsh", Department="IT", Salary=50000},
            new Employee{ Id=102, Name="Rahul", Department="HR", Salary=45000},
            new Employee{ Id=103, Name="Aman", Department="Finance", Salary=60000}
        };

        [HttpGet]
        public ActionResult<List<Employee>> GetEmployees()
        {
            return Ok(employees);
        }
    }
}