namespace QnS2.Models.Entities
{
    public class Topic
    {
        public int TopicID { get; set; }

        public string Name { get; set; }

        public virtual Question Question { get; set; }
    }
}