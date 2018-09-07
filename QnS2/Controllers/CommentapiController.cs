using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QnS2.Data;
using QnS2.Models.Entities;
using System.Web;
namespace QnS2.Controllers
{
    [Produces("application/json")]
    [Route("api/Commentapi")]
    public class CommentapiController : Controller
    {
        private readonly ApplicationDbContext _appDbContext;

        public CommentapiController(ApplicationDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

       
        [HttpGet("{QuestionId}")]
        public JsonResult GetById(int QuestionId)
        {
            var Answer = _appDbContext.Answers.Select(x => new Answer
            {
                ContentAnswer = x.ContentAnswer,
                QuestionId = x.QuestionId,
                UserId = x.UserId,
                User = x.User

            }).Where(p => p.QuestionId == QuestionId).ToList();
            return Json(Answer);
        }

    }
}
