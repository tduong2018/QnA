using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Web;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QnS2.Data;
using QnS2.Models.Entities;
namespace QnS2.Controllers {
    [Produces ("application/json")]
    [Route ("api/Comment")]
    public class CommentController : Controller {
        private readonly ApplicationDbContext _appDbContext;
        private readonly ClaimsPrincipal _caller;

        public CommentController (ApplicationDbContext appDbContext, IHttpContextAccessor httpContextAccessor) {
            _appDbContext = appDbContext;
            _caller = httpContextAccessor.HttpContext.User;
        }

        [HttpGet ("{QuestionId}")]
        public JsonResult GetCommentByQuestionId (int QuestionId) {
            List<Answer> Answers = _appDbContext.Answers.Select (x => new Answer {
                AnswerID = x.AnswerID,
                    QuestionId = x.QuestionId,
                    AvatarUser = x.User.PictureUrl,
                    UserName = x.User.FirstName + " " + x.User.LastName,
                    ContentAnswer = x.ContentAnswer,
                    CreateTime = x.CreateTime,
                    Delete = x.Delete
            }).Where (p => p.QuestionId == QuestionId && p.Delete.Equals ("True")).ToList ();
            return Json (Answers);
        }

        [HttpPost]
        public ActionResult PostComment ([FromBody] Answer answer) {
            var userId = _caller.Claims.Single (c => c.Type == "id");
            //var check = _appDbContext.Questions.First(x => x.QuestionId == answer.QuestionId);

            Answer Ans = new Answer ();
            Ans.QuestionId = answer.QuestionId;
            Ans.UserId = userId.Value;
            Ans.ContentAnswer = answer.ContentAnswer;
            Ans.CreateTime = DateTime.Now;
            Ans.Delete = "True";

            _appDbContext.Answers.Add (Ans);
            _appDbContext.SaveChanges ();
            return new OkObjectResult (new { });
        }
    }
}