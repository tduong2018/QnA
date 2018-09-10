namespace QnS2.Models.Entities
{
    using System;
    using System.ComponentModel.DataAnnotations;

    public partial class Answer
    {
        public int AnswerID { get; set; }

        public int QuestionId { get; set; }

        [Required]
        [StringLength(128)]
        public string UserId { get; set; }

        public string ContentAnswer { get; set; }

        public string AvatarUser { get; set; }
        public string UserName{ get; set;}
        public DateTime CreateTime { get; set; }
        public string Delete{ get; set; }

        public virtual AppUser User { get; set; }

        public virtual Question Question { get; set; }
    }
}
