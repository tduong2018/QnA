using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QnS2.Helpers
{
    public static class Constants
    {
        public static class Strings
        {
            public static class JwtClaimIdentifiers
            {
                public const string Rol = "roles", Id = "id";
                public const string Access = "Access";
            }

            public static class JwtClaims
            {
                public const string ApiAccess = "api_access";
                public const string Admin = "admin";
                public const string Question = "question";
            }
        }
    }
}
