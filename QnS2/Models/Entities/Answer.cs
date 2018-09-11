namespace QnS2.Models.Entities {
    using System.ComponentModel.DataAnnotations.Schema;
    using System.ComponentModel.DataAnnotations;
    using System;

    public partial class Answer {
        public int AnswerID { get; set; }

        public int QuestionId { get; set; }

        [Required]
        [StringLength (128)]
        public string UserId { get; set; }

        public string ContentAnswer { get; set; }

        [NotMapped]
        public string AvatarUser { get; set; }

        [NotMapped]
        public string UserName { get; set; }
        public DateTime CreateTime { get; set; }
        public string Delete { get; set; }

        public virtual AppUser User { get; set; }

        public virtual Question Question { get; set; }
    }
}