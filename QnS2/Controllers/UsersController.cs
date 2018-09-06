using System;
using System.Collections.Generic;
using System.Linq;
using QnS2.Models.Entities;
using System.ComponentModel.DataAnnotations;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using System.Security.Claims;
using QnS2.Data;
using Microsoft.AspNetCore.Http;
using QnS2.Helpers;
using Microsoft.AspNetCore.Authorization;
using System.Text;
using QnS2.ViewModels;

namespace QnS2.Controllers
{
    [Authorize(Roles = Constants.Strings.JwtClaims.Admin)]
    [Route("api/[controller]")]
    public class UsersController : Controller
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly ClaimsPrincipal _caller;
        private readonly ApplicationDbContext _appDbContext;

        public UsersController(UserManager<AppUser> userManager, ApplicationDbContext appDbContext, IHttpContextAccessor httpContextAccessor)
        {
            _userManager = userManager;
            _caller = httpContextAccessor.HttpContext.User;
            _appDbContext = appDbContext;
        }

        // GET: Users
        // GET api/Users
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var users = _userManager.Users.ToList();
            return new OkObjectResult(users);
        }

        // GET api/Roles/5
        [HttpGet("{id}")]
        public IActionResult Get(string id)
        {
            var role = _appDbContext.Roles.Single(x => x.Id == id);
            return new OkObjectResult(role);
        }

        // POST api/role/create
        [HttpPost]
        public async Task<ActionResult> Create([FromBody]RoleViewModel role)
        {
            if (ModelState.IsValid)
            {
                IdentityRole _role = new IdentityRole();
                _role.Id = Convert.ToBase64String(Encoding.ASCII.GetBytes(role.RoleName));
                _role.Name = role.RoleName;
                _appDbContext.Roles.Add(_role);
                var result = await _appDbContext.SaveChangesAsync();
                return new OkObjectResult(new
                {
                    Message = "Created!",
                });
            }
            return BadRequest(ModelState);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(string id)
        {
            if (ModelState.IsValid)
            {
                // get the user to verifty
                var userToVerify = await _userManager.FindByIdAsync(id);

                if (userToVerify == null) return BadRequest(ModelState);
                var result = await _userManager.DeleteAsync(userToVerify);

                if (!result.Succeeded) return new BadRequestObjectResult(Errors.AddErrorsToModelState(result, ModelState));
  
                return new OkObjectResult(new
                {
                    Message = "Deleted!",
                });
            }
            return BadRequest(ModelState);
        }

        [HttpPut]
        public async Task<ActionResult> EditRole([FromBody]UserViewModel user)
        {
            if (ModelState.IsValid)
            {
                //var userToVerify = await _userManager.FindByIdAsync(user.id);

                //if (userToVerify == null) return BadRequest(ModelState);
                //var result = await _userManager.SetUserNameAsync(userToVerify,user.);

                //_appDbContext.Roles.FirstOrDefault(x => x.Id == role.id).Name = role.RoleName;
                //await _appDbContext.SaveChangesAsync();
                //return new OkObjectResult(new
                //{
                //    Message = "Updated!",
                //});
            }
            return BadRequest(ModelState);
        }

        //[HttpPost]
        //public async Task<ActionResult> Edit(RoleModificationModel model)
        //{
        //    IdentityResult result;
        //    if (ModelState.IsValid)
        //    {
        //        foreach (string userId in model.IdsToAdd ?? new string[] { })
        //        {
        //            result = await UserManager.AddToRoleAsync(userId, model.RoleName);
        //            if (!result.Succeeded)
        //            {
        //                return View("Error", result.Errors);
        //            }
        //        }
        //        foreach (string userId in model.IdsToDelete ?? new string[] { })
        //        {
        //            result = await UserManager.RemoveFromRoleAsync(userId,
        //            model.RoleName);
        //            if (!result.Succeeded)
        //            {
        //                return View("Error", result.Errors);
        //            }
        //        }
        //        return RedirectToAction("Index");
        //    }
        //    return View("Error", new string[] { "Role Not Found" });
        //}
        //private void AddErrorFromResult(IdentityResult result)
        //{
        //    foreach (string error in result.Errors)
        //    {
        //        ModelState.AddModelError("", error);
        //    }
        //}
    }
}