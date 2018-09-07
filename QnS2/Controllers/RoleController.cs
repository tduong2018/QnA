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
        // GET api/Roles
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var roles = _appDbContext.Roles.ToList();
            return new OkObjectResult(roles.Select(x => new RoleViewModel { id = x.Id, name = x.Name }).ToList());
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
                _role.Id = Convert.ToBase64String(Encoding.ASCII.GetBytes(role.name));
                _role.Name = role.name;
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
                _appDbContext.Roles.Remove(_appDbContext.Roles.FirstOrDefault(x => x.Id == id));
                await _appDbContext.SaveChangesAsync();
                return new OkObjectResult(new
                {
                    Message = "Deleted!",
                });
            }
            return BadRequest(ModelState);
        }

        [HttpPut]
        public async Task<ActionResult> Edit([FromBody]RoleViewModel role)
        {
            if (ModelState.IsValid)
            {
                _appDbContext.Roles.FirstOrDefault(x => x.Id == role.id).Name = role.name;
                await _appDbContext.SaveChangesAsync();
                return new OkObjectResult(new
                {
                    Message = "Updated!",
                });
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