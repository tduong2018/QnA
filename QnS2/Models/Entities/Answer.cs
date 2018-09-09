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

        public byte[] IMG {get; set; }

        public DateTime CreateTime { get; set; }

        public virtual AppUser User { get; set; }

        public virtual Question Question { get; set; }
    }
}
