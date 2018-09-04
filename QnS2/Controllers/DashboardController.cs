
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


namespace AngularASPNETCore2WebApiAuth.Controllers
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
        public async Task<IActionResult> Home()
        {
            // retrieve the user info
            //HttpContext.User
            var userId = _caller.Claims.Single(c => c.Type == "id");
            var user = await _appDbContext.Users.SingleAsync(c => c.Id == userId.Value);

            return new OkObjectResult(new
            {
                Message = "This is secure API and user data!",
                //user.LastName,
                user.UserName
            });
        }


        // GET api/dashboard/question all
        [Authorize(Roles = Constants.Strings.JwtClaims.Question)]
        [HttpGet]
        public async Task<IActionResult> Question()
        {
            // retrieve the user info
            //HttpContext.User
            var userId = _caller.Claims.Single(c => c.Type == "id");
            var user = await _appDbContext.Questions.Where(c => c.UserId == userId.Value).ToListAsync();

            return new OkObjectResult(user);
        }
    }
}
