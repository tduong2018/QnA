namespace QnS2.Models.Entities {
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System;
    using static System.Net.Mime.MediaTypeNames;

    public partial class Question {
        [System.Diagnostics.CodeAnalysis.SuppressMessage ("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Question () {
            Answers = new HashSet<Answer> ();
        }

        public int QuestionId { get; set; }

        [StringLength (30)]
        public string Title { get; set; }

        [Required]
        [StringLength (500)]
        public string ContentQuestion { get; set; }

        public int TopicID { get; set; }

        public DateTime CreateDate { get; set; }

        public string Delete { get; set; }

        public string AvatarUser { get; set; }

        public string UserName { get; set; }

        public string TopicName { get; set; }
        public int countsAnswer { get; set; }

        [Required]
        public string UserId { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage ("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Answer> Answers { get; set; }

        public virtual AppUser User { get; set; }

        public virtual Topic Topic { get; set; }
    }
}