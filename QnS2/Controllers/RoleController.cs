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
    public class RoleController : Controller
    {
        private readonly ClaimsPrincipal _caller;
        private readonly ApplicationDbContext _appDbContext;

        public RoleController(UserManager<AppUser> userManager, ApplicationDbContext appDbContext, IHttpContextAccessor httpContextAccessor)
        {
            _caller = httpContextAccessor.HttpContext.User;
            _appDbContext = appDbContext;
        }

        // GET: Role
        // GET api/Role
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var roles = _appDbContext.Roles.ToList();
            return new OkObjectResult(roles);
        }

        // POST api/role/create
        [HttpPost("create")]
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

        //[HttpPost("delete")]
        //public async Task<ActionResult> Delete(string id)
        //{
        //    AppRole role = await _roleManager.FindByIdAsync(id);
        //    if (role != null)
        //    {
        //        var result = await _roleManager.DeleteAsync(role);
        //        if (result.Succeeded)
        //        {
        //            return new OkObjectResult("Role deleted");
        //        }
        //        else
        //        {
        //            return new BadRequestObjectResult(Errors.AddErrorsToModelState(result, ModelState));
        //        }
        //    }
        //    else
        //    {
        //        return View("Error", new string[] { "role not found" });
        //    }
        //}

        //public async Task<ActionResult> Edit(string id)
        //{
        //    AppRole role = await _roleManager.FindByIdAsync(id);
        //    string[] memberIDs = role.us.Select(x => x.UserId).ToArray();
        //    IEnumerable<AppUser> members = UserManager.Users.Where(x => memberIDs.Any(y => y == x.Id));
        //    IEnumerable<AppUser> nonMembers = UserManager.Users.Except(members);
        //    return View(new RoleEditModel
        //    {
        //        Role = role,
        //        Members = members,
        //        NonMembers = nonMembers
        //    });
        //}

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