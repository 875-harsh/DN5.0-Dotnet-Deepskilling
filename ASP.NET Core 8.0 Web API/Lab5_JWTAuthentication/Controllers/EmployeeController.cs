using Lab5_JWTAuthentication.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Lab5_JWTAuthentication.Controllers;

[ApiController]
[Route("api/[controller]")]
[Authorize(Roles = "Admin")]
public class EmployeeController : ControllerBase
{
    static List<Employee> employees = new()
    {
        new Employee
        {
            Id=101,
            Name="Harsh",
            Department="IT",
            Salary=50000
        },
        new Employee
        {
            Id=102,
            Name="Rahul",
            Department="HR",
            Salary=40000
        }
    };

    [HttpGet]
    public IActionResult Get()
    {
        return Ok(employees);
    }
}