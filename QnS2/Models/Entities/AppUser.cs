using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;

namespace QnS2.Models.Entities
{
    public class AppUser : IdentityUser
    {
        // Extended Properties 
        public string FirstName { get; set; }
        public string LastName { get; set; }
        //public long? FacebookId { get; set; }
        public string PictureUrl { get; set; }

        public AppUser()
        {
            Answers = new HashSet<Answer>();
            Questions = new HashSet<Question>();
        }
        /*WARNING!!!
         * This is entity class for Identity User.
         * Please DO NOT modify this class without basic knowledge of ASP Identity.
         * If you DO want to modify properties. Please contact me via thaitm@fsoft.com.vn
         */
        public virtual ICollection<Answer> Answers { get; set; }
        public virtual ICollection<Question> Questions { get; set; }
    }
}
