namespace QnS2.Models.Entities
{
    using System.ComponentModel.DataAnnotations;

    public partial class Answer
    {
        public int AnswerID { get; set; }

        public int QuestionId { get; set; }

        [Required]
        [StringLength(128)]
        public string UserId { get; set; }

        [StringLength(500)]
        public string Content { get; set; }

        public virtual AppUser User { get; set; }

        public virtual Question Question { get; set; }
    }
}
