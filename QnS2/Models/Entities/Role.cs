using System;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;

namespace QnS2.Models.Entities
{
    public class Role
    {
        public string id { get; set; }
        public string name { get; set; }
    }
}
