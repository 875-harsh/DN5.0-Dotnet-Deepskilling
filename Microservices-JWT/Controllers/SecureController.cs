using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Microservices_JWT.Controllers;

[ApiController]
[Route("api/[controller]")]
public class SecureController : ControllerBase
{
    [Authorize]

    [HttpGet("data")]
    public IActionResult Get()
    {
        return Ok("This is protected data.");
    }
}