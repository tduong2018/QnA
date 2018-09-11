﻿using System;
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

        [HttpGet("[action]")]
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

        [HttpGet("[action]")]
        public JsonResult GetQuestion(int questionId = 1)
        {
            return Json(_appDbContext.Questions.Where(c => c.QuestionId == questionId).Select(x=> new Question {
                QuestionId= x.QuestionId,
                Title = x.Title,
                TopicID = x.TopicID,
                ContentQuestion = x.ContentQuestion,
                CreateDate = x.CreateDate
            }));
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody]CreateQuestionViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            Question _ques = new Question();
            _ques.UserId = (_caller.Claims.Single(c => c.Type == "id")).Value;  
            _ques.Title = model.Title;
            _ques.TopicID = model.TopicID;
            _ques.ContentQuestion = model.ContentQuestion;
            _ques.CreateDate = model.CreateDate;
            _ques.Delete = model.Delete;
            _appDbContext.Questions.Add(_ques);
            var result = await _appDbContext.SaveChangesAsync();
            return new OkObjectResult(new
            {
                Message = "Created!",
            });
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> Update([FromBody]CreateQuestionViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var _ques = _appDbContext.Questions.Find(model.QuestionId);
            _ques.Title = model.Title;
            _ques.TopicID = model.TopicID;
            _ques.ContentQuestion = model.ContentQuestion;
            _ques.Delete = model.Delete;
            _appDbContext.Questions.Update(_ques);
            var result = await _appDbContext.SaveChangesAsync();
            return new OkObjectResult(new
            {
                Message = "Updated!",
            });
        }

        [HttpDelete("[action]")]
        public async Task<ActionResult> DeleteQuestion(int questionId)
        {
            var _ques = _appDbContext.Questions.Find(questionId);
            _appDbContext.Questions.Remove(_ques);
            var resuit = await _appDbContext.SaveChangesAsync();
            return new OkObjectResult(new
            {
                Message = "Deleted!",
            });
        }
    }
}