using System;
using Microsoft.AspNetCore.Identity;

namespace QnS2.Models.Entities
{
    public class AppRole : IdentityRole
    {
        public AppRole():base()
        {

        }

        public AppRole(string roleName) : base(roleName)
        {
        }

        public static implicit operator AppRole(string v)
        {
            throw new NotImplementedException();
        }
    }
}
