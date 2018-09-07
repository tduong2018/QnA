using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace QnS2.ViewModels
{
    public class CreateQuestionViewModel
    {
        public int QuestionId { get; set; }

        public string Title { get; set; }
        
        public string ContentQuestion { get; set; }

        public int TopicID { get; set; }

        public System.Byte[] img { get; set; }

        public DateTime CreateDate { get; set; }

        public string Delete { get; set; }
    }
}

