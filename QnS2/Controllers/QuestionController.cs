using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using QnS2.Data;
using QnS2.Models.Entities;
using QnS2.ViewModels;

namespace QnS2.Controllers
{
    [Route("api/[controller]")]
    public class QuestionController : Controller
    {
        private readonly ApplicationDbContext _appDbContext;
        private readonly ClaimsPrincipal _caller;

        public QuestionController(UserManager<AppUser> userManager, ApplicationDbContext appDbContext, IHttpContextAccessor httpContextAccessor)
        {
            _caller = httpContextAccessor.HttpContext.User;
            _appDbContext = appDbContext;
        }

        //get all questions
        [HttpGet]
        public JsonResult GetListQuestion()
        {
            var Questions = new List<Question>();

            Questions = _appDbContext.Questions.Where(n => (n.Delete.Equals("True"))).Select(n => new Question
            {
                UserId = n.UserId,
                QuestionId = n.QuestionId,
                AvatarUser = n.User.PictureUrl,
                UserName = n.User.FirstName + " " + n.User.LastName,
                TopicName = n.Topic.Name,
                Title = n.Title,
                ContentQuestion = n.ContentQuestion,
                TopicID = n.TopicID,
                CreateDate = n.CreateDate,
                Delete = n.Delete,
                countsAnswer = n.Answers.Count
            }).ToList();
            return Json(Questions);
        }

        //get question by account
        [HttpGet("[action]")]
        public JsonResult ListQuestionByUserId()
        {
            var userId = _caller.Claims.Single(c => c.Type == "id");
            var Questions = new List<Question>();
            Questions = _appDbContext.Questions.Where(n => n.UserId == userId.Value).Select(n => new Question
            {
                UserId = n.UserId,
                QuestionId = n.QuestionId,
                AvatarUser = n.User.PictureUrl,
                UserName = n.User.FirstName + " " + n.User.LastName,
                TopicName = n.Topic.Name,
                Title = n.Title,
                ContentQuestion = n.ContentQuestion,
                TopicID = n.TopicID,
                CreateDate = n.CreateDate,
                Delete = n.Delete,
                countsAnswer = n.Answers.Count
            }).ToList();
            return Json(Questions);
        }

        [HttpGet("{userId}", Name="GetQuestion")]
        public JsonResult GetQuestionByUserId(string userId)
        {
            List<Question> question = _appDbContext.Questions.Where(n => n.UserId == userId).Select(n => new Question
            {
                UserId = n.UserId,
                QuestionId = n.QuestionId,
                AvatarUser = n.User.PictureUrl,
                UserName = n.User.FirstName + " " + n.User.LastName,
                TopicName = n.Topic.Name,
                Title = n.Title,
                ContentQuestion = n.ContentQuestion,
                TopicID = n.TopicID,
                CreateDate = n.CreateDate,
                Delete = n.Delete,
                countsAnswer = n.Answers.Count
            }).ToList();
            return Json(question);
        }

        //create question 
        [HttpPost]
        public IActionResult CreateQuestion(Question QuestionClient)
        {
            _appDbContext.Questions.Add(QuestionClient);
            _appDbContext.SaveChangesAsync();
            return NoContent();
        }

        [HttpPut("{id}")]
        public IActionResult UpdateQuestion(int id, Question QuestionClient)
        {
            Question QuestionServe = _appDbContext.Questions.Find(id);
            if(QuestionServe == null){
                return NotFound();
            }
            QuestionServe.Title = QuestionClient.Title;
            QuestionServe.ContentQuestion = QuestionClient.ContentQuestion;
            QuestionServe.UserId = QuestionClient.UserId;
            QuestionServe.TopicID = QuestionClient.TopicID;
            QuestionServe.CreateDate = DateTime.Now;
            QuestionServe.Delete = "True";
            _appDbContext.Questions.Update(QuestionServe);
            _appDbContext.SaveChangesAsync();
            return NoContent();
        }

        //delete question
        [HttpDelete("{QuestionId}")]
        public IActionResult DeleteQuestion(int QuestionId)
        {
            Question question = _appDbContext.Questions.Find(QuestionId);
            if(question == null){
                return NotFound();
            }
            _appDbContext.Questions.Remove(question);
            _appDbContext.SaveChangesAsync();
            return NoContent();
        }
    }
}