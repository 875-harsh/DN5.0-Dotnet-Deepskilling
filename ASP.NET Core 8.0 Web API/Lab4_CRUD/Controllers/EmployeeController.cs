using Microsoft.AspNetCore.Mvc;
using Lab4_CRUD.Models;

namespace Lab4_CRUD.Controllers;

[ApiController]
[Route("api/[controller]")]
public class EmployeeController : ControllerBase
{
    static List<Employee> employees = new()
    {
        new Employee { Id = 101, Name = "Harsh", Department = "IT", Salary = 50000 },
        new Employee { Id = 102, Name = "Rahul", Department = "HR", Salary = 40000 },
        new Employee { Id = 103, Name = "Aman", Department = "Finance", Salary = 60000 }
    };

    // GET
    [HttpGet]
    public ActionResult<List<Employee>> Get()
    {
        return Ok(employees);
    }

    // POST
    [HttpPost]
    public ActionResult<Employee> Post([FromBody] Employee employee)
    {
        employees.Add(employee);
        return Ok(employee);
    }

    // PUT
    [HttpPut("{id}")]
    public ActionResult<Employee> Put(int id, [FromBody] Employee employee)
    {
        if (id <= 0)
        {
            return BadRequest("Invalid employee id");
        }

        var emp = employees.FirstOrDefault(e => e.Id == id);

        if (emp == null)
        {
            return BadRequest("Invalid employee id");
        }

        emp.Name = employee.Name;
        emp.Department = employee.Department;
        emp.Salary = employee.Salary;

        return Ok(emp);
    }

    // DELETE
    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        var emp = employees.FirstOrDefault(e => e.Id == id);

        if (emp == null)
        {
            return BadRequest("Invalid employee id");
        }

        employees.Remove(emp);

        return Ok("Employee Deleted Successfully");
    }
}