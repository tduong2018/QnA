
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using QnS2.Data;
using QnS2.Helpers;
using QnS2.Models.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


namespace QnS2.Controllers
{
    [Authorize(Policy = "ApiUser")]
    [Route("api/[controller]/[action]")]
    public class DashboardController : Controller
    {
        private readonly ClaimsPrincipal _caller;
        private readonly ApplicationDbContext _appDbContext;

        public DashboardController(UserManager<AppUser> userManager, ApplicationDbContext appDbContext, IHttpContextAccessor httpContextAccessor)
        {
            _caller = httpContextAccessor.HttpContext.User;
            _appDbContext = appDbContext;
        }

        // GET api/dashboard/home
        [HttpGet]
        //[Authorize(Roles = Constants.Strings.JwtClaims.Admin)]
        public async Task<IActionResult> Account()
        {
            // retrieve the user info
            //HttpContext.User
            var userId = _caller.Claims.Single(c => c.Type == "id");
            var user = await _appDbContext.Users.SingleAsync(c => c.Id == userId.Value);

            return new OkObjectResult(new
            {
                UserID = user.Id,
                Avatar = user.PictureUrl,
                Fullname = user.FirstName + " " + user.LastName,
                UserEmail = user.Email
            });
        }
        
    }
}
