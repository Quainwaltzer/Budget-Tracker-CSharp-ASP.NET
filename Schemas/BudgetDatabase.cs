

namespace BudgetTracker.Schemas
{
    public class BudgetDatabase
    {
        public int? Id { get; set; }
        public string? ItemName { get; set; }
        public string? Merchant { get; set; }
        public byte[]? ImageByte { get; set; }
        public string? InvoiceBase64 { get; set; }
        public string? ContentType { get; set; }
        public string? Category { get; set; }
        public string? Description { get; set; }
        public int Goal { get; set; }
        public int Count { get; set; }
        public int Price { get; set; }
    }
}
