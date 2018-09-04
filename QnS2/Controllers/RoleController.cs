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

namespace QnS2.Controllers
{
    [Route("api/[controller]")]
    public class RoleController : Controller
    {
        private readonly ClaimsPrincipal _caller;
        private readonly ApplicationDbContext _appDbContext;
        private readonly RoleManager<AppRole> _roleManager;

        public RoleController(UserManager<AppUser> userManager, RoleManager<AppRole> roleManager, ApplicationDbContext appDbContext, IHttpContextAccessor httpContextAccessor)
        {
            _caller = httpContextAccessor.HttpContext.User;
            _roleManager = roleManager;
            _appDbContext = appDbContext;
        }

        // GET: Role
        // GET api/Role
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var roles = _roleManager.Roles.ToList();
            return new OkObjectResult(roles);
        }

        // POST api/role/create
        [HttpPost("create")]
        public async Task<ActionResult> Create([FromBody]string name)
        {
            if (ModelState.IsValid)
            {
                var result = await _roleManager.CreateAsync(new AppRole(name));
                if (result.Succeeded)
                {
                    return new OkObjectResult("Role created");
                }
                else
                {
                    return new BadRequestObjectResult(Errors.AddErrorsToModelState(result, ModelState));
                }
            }
            return BadRequest(ModelState);
        }

        [HttpPost("delete")]
        public async Task<ActionResult> Delete(string id)
        {
            AppRole role = await _roleManager.FindByIdAsync(id);
            if (role != null)
            {
                var result = await _roleManager.DeleteAsync(role);
                if (result.Succeeded)
                {
                    return new OkObjectResult("Role deleted");
                }
                else
                {
                    return new BadRequestObjectResult(Errors.AddErrorsToModelState(result, ModelState));
                }
            }
            else
            {
                return View("Error", new string[] { "role not found" });
            }
        }

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