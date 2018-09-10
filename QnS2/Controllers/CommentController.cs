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
    [Route("api/Comment")]
    public class CommentController : Controller
    {
        private readonly ApplicationDbContext _appDbContext;

        public CommentController(ApplicationDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

       
        [HttpGet("{QuestionId}")]
        public JsonResult GetById(int QuestionId)
        {
            List<Answer> Answers = _appDbContext.Answers.Select(x => new Answer
            {
                AnswerID = x.AnswerID,
                QuestionId = x.QuestionId,
                AvatarUser = x.User.PictureUrl,
                UserName = x.User.FirstName + " " + x.User.LastName,
                ContentAnswer = x.ContentAnswer,
                CreateTime = x.CreateTime,
                Delete = x.Delete
            }).Where(p => p.QuestionId == QuestionId && p.Delete.Equals("True")).ToList();
            return Json(Answers);
        }

    }
}
