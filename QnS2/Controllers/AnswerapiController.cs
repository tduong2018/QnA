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
    [Route("api/Answerapi")]
    public class AnswerapiController : Controller
    {
        private readonly ApplicationDbContext _appDbContext;

        public AnswerapiController(ApplicationDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        // GET: api/Answerapi
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }
        
        // POST: api/Answerapi
        [HttpGet("{QuestionId}")]
        //public JsonResult GetById(int QuestionId)
        //{
        //    var Answer = _appDbContext.Answers.Select(x => new Answer
        //    {
        //        ContentAnswer = x.ContentAnswer,
        //        QuestionId = x.QuestionId,
        //        UserId = x.UserId,
        //        User = x.User

        //    }).Where(p => p.QuestionId == QuestionId).ToList();
        //    return Json(Answer);
        //}
        [HttpGet("{userId}")]
        public ActionResult GetQuestion(string userId)
        {
            //using()
            //{
            userId = "74d2c91b-2bdf-4f5b-b9c6-d6a2bd2fd1fd";
            List<Question> Questions = _appDbContext.Questions.Select(x => new Question
            {
                UserId = x.UserId,
                QuestionId = x.QuestionId,
                Title = x.Title,
                CreateDate = x.CreateDate,
                ContentQuestion = x.ContentQuestion,
            }).Where(p => p.UserId.Equals(userId) && p.Delete.Equals("True")).ToList();
            return new OkObjectResult(Questions);
            //}
        }

        // PUT: api/Answerapi/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }
        
        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
